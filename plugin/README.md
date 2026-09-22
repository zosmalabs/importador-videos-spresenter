# Importador de Vídeos — versão 0.4.0

Plugin para baixar vídeos ou áudios por link do YouTube, pesquisar fundos gratuitos no Pixabay ou no Pexels e importar o resultado no Spresenter.

## Instalação

O kit possui duas partes:

1. Instale o ZIP da versão 0.4.0 em **Configurações → Plugins → Instalar**.
2. Instale e abra uma vez o **Auxiliar do Importador para Spresenter** correspondente ao seu sistema.
3. Nas próximas inicializações, o auxiliar abrirá automaticamente em segundo plano.
4. Na primeira execução, o auxiliar baixa o `yt-dlp` oficial.

## Utilização

1. Abra o painel **Importador de Vídeos** no Spresenter.
2. Confira se aparece **Auxiliar conectado**.
3. Cole o link do YouTube e clique em **Analisar vídeo**.
4. Escolha **Fundos**, **Vídeos** ou **Trilha (MP3)** e a qualidade.
5. Clique em **Baixar e importar**.

Para usar o Pixabay, abra a aba **Pesquisar no Pixabay**, informe sua chave gratuita na primeira utilização, pesquise um tema e escolha **Adicionar aos Fundos**.

Para usar o Pexels, abra a aba **Pesquisar no Pexels**, informe sua chave gratuita e pesquise por qualquer texto. Os créditos do autor e do Pexels aparecem junto de cada resultado.

A versão 0.4.0 utiliza um aplicativo auxiliar em segundo plano no Windows ou macOS. Para **Trilha**, o auxiliar extrai o melhor áudio disponível, converte para MP3 em 128, 192 ou 320 kbps e o plugin faz a importação oficial como asset de áudio. As pesquisas do Pixabay e do Pexels retornam somente vídeos horizontais e permitem escolher HD, Full HD, 4K ou a melhor resolução disponível. O painel mostra separadamente o progresso do download e o processamento. Fundos recebem o MP4 diretamente. Na categoria Vídeos, o auxiliar usa o mesmo fluxo interno do Spresenter para criar o pacote e registrá-lo no catálogo da biblioteca.

## Observações

- Requer Windows ou macOS e Spresenter 0.3.45 ou superior.
- O auxiliar trabalha apenas em `127.0.0.1:17843` e não fica acessível a outros computadores da rede.
- Os arquivos temporários são removidos depois que o Spresenter termina a importação.
- Este é um protótipo experimental e mudanças do YouTube podem exigir atualização do `yt-dlp`.
