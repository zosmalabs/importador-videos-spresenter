import type {} from '@spresenter/plugin-sdk/code';

type UiMessage = { type?: string; jobId?: string; title?: string; author?: string; contentBase64?: string; asset?: { guid: string; title?: string; type?: string; extension?: string } };

function safeFilename(title: string, extension: 'mp4' | 'mp3') {
  const clean = title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
  return `${clean || (extension === 'mp3' ? 'audio-do-youtube' : 'video-do-youtube')}.${extension}`;
}

spresenter.ui.onmessage = async (raw: unknown) => {
  const msg = raw as UiMessage;
  if (!msg || typeof msg !== 'object') return;
  if (msg.type === 'native-video-complete' && msg.jobId && msg.asset) {
    spresenter.ui.postMessage({ type: 'conversion-progress', percent: 100, message: 'Pacote de vídeo criado.' });
    spresenter.ui.postMessage({ type: 'import-complete', asset: msg.asset, jobId: msg.jobId, nativePackage: true });
    return;
  }
  const isAudio = msg.type === 'import-audio';
  const isBackground = msg.type === 'import-background';
  if (msg.jobId && msg.title && ((isAudio && msg.contentBase64) || isBackground)) {
    let progressTimer: ReturnType<typeof setInterval> | undefined;
    try {
      if (!/^[a-f0-9]+$/.test(msg.jobId)) throw new Error('Identificador de download inválido.');
      if (isAudio) {
        spresenter.ui.postMessage({ type: 'conversion-progress', percent: 4, message: 'Enviando o MP3 ao Spresenter…' });
        let conversionPercent = 8;
        progressTimer = setInterval(() => {
          conversionPercent = Math.min(70, conversionPercent + 2);
          spresenter.ui.postMessage({ type: 'conversion-progress', percent: conversionPercent, message: 'Adicionando à Trilha…' });
        }, 1000);
      }
      const asset = isAudio
        ? await spresenter.assets.createFile({
            filename: safeFilename(msg.title, 'mp3'),
            title: msg.title,
            author: msg.author,
            contentBase64: msg.contentBase64,
          })
        : await spresenter.assets.createFile({
            filename: safeFilename(msg.title, 'mp4'), title: msg.title,
            type: 'backgroundVideo',
            sourceUrl: `http://127.0.0.1:17843/file/${msg.jobId}`,
            // Fundos reproduzem o MP4 diretamente. A categoria Vídeos precisa gerar
            // o pacote interno .scp, incluindo duração, áudio e controles.
            optimize: false,
            allowEncode: false,
          });
      clearInterval(progressTimer);
      progressTimer = undefined;

      spresenter.ui.postMessage({ type: 'import-complete', asset, jobId: msg.jobId });
    } catch (error) {
      if (progressTimer) clearInterval(progressTimer);
      spresenter.ui.postMessage({ type: 'import-error', error: error instanceof Error ? error.message : String(error), jobId: msg.jobId });
    }
  }
};

console.log('Plugin carregado:', spresenter.manifest.name);
