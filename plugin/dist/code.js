(function() {
  "use strict";
  function safeFilename(title, extension) {
    const clean = title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[<>:"/\\|?*\u0000-\u001f]/g, "").replace(/\s+/g, " ").trim().slice(0, 120);
    return `${clean || (extension === "mp3" ? "audio-do-youtube" : "video-do-youtube")}.${extension}`;
  }
  spresenter.ui.onmessage = async (raw) => {
    const msg = raw;
    if (!msg || typeof msg !== "object") return;
    if (msg.type === "native-video-complete" && msg.jobId && msg.asset) {
      spresenter.ui.postMessage({ type: "conversion-progress", percent: 100, message: "Pacote de vídeo criado." });
      spresenter.ui.postMessage({ type: "import-complete", asset: msg.asset, jobId: msg.jobId, nativePackage: true });
      return;
    }
    if ((msg.type === "import-background" || msg.type === "import-audio") && msg.jobId && msg.title && msg.contentBase64) {
      let progressTimer;
      try {
        const isAudio = msg.type === "import-audio";
        spresenter.ui.postMessage({ type: "conversion-progress", percent: 4, message: isAudio ? "Enviando o MP3 ao Spresenter…" : "Enviando o vídeo ao Spresenter…" });
        let conversionPercent = 8;
        progressTimer = setInterval(() => {
          conversionPercent = Math.min(70, conversionPercent + 2);
          spresenter.ui.postMessage({ type: "conversion-progress", percent: conversionPercent, message: isAudio ? "Adicionando à Trilha…" : "Adicionando aos Fundos…" });
        }, 1e3);
        const asset = isAudio ? await spresenter.assets.createFile({
          filename: safeFilename(msg.title, "mp3"),
          title: msg.title,
          author: msg.author,
          contentBase64: msg.contentBase64
        }) : await spresenter.assets.createFile({
          filename: safeFilename(msg.title, "mp4"),
          title: msg.title,
          type: "backgroundVideo",
          contentBase64: msg.contentBase64,
          // Fundos reproduzem o MP4 diretamente. A categoria Vídeos precisa gerar
          // o pacote interno .scp, incluindo duração, áudio e controles.
          optimize: false,
          allowEncode: false
        });
        clearInterval(progressTimer);
        progressTimer = void 0;
        spresenter.ui.postMessage({ type: "conversion-progress", percent: 100, message: isAudio ? "MP3 adicionado à Trilha." : "Fundo adicionado." });
        spresenter.ui.postMessage({ type: "import-complete", asset, jobId: msg.jobId });
      } catch (error) {
        if (progressTimer) clearInterval(progressTimer);
        spresenter.ui.postMessage({ type: "import-error", error: error instanceof Error ? error.message : String(error), jobId: msg.jobId });
      }
    }
  };
  console.log("Plugin carregado:", spresenter.manifest.name);
})();
