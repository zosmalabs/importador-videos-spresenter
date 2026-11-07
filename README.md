<p align="center"><img src="./assets/1bytelabs-cover.svg" alt="importador-videos-spresenter — 1Byte Labs" width="100%" /></p>

# Importador de Vídeos — 1Byte Labs

**Pesquise, baixe e importe vídeos ou áudios para o SPresenter sem sair do fluxo de trabalho.**

Plugin gratuito da [1Byte Labs](https://github.com/1bytelabs) para analisar links autorizados, baixar vídeos ou extrair o áudio em MP3 e importá-los para **Fundos**, **Vídeos** ou **Trilha** no SPresenter. Também permite pesquisar vídeos gratuitos no Pixabay e no Pexels e adicioná-los diretamente aos Fundos.

> **Versão 0.4.2**

[Baixar a versão mais recente](https://github.com/1bytelabs/importador-videos-spresenter/releases/latest) · [Tutorial](https://youtu.be/kxIf_o-fvas) · [Projetos da 1Byte Labs](https://github.com/1bytelabs)

## Principais recursos

- Importação por link do YouTube;
- extração do áudio do YouTube para MP3 em 128, 192 ou 320 kbps;
- importação automática de MP3 para **Trilha**;
- pesquisa integrada no Pixabay e no Pexels;
- importação direta para **Fundos** ou **Vídeos**;
- seleção de qualidade em HD, Full HD, 4K ou melhor disponível;
- progresso de download e processamento;
- auxiliar local para Windows e macOS;
- chaves de API armazenadas somente no computador do usuário;
- processamento local, sem servidor da 1Byte Labs para receber os vídeos baixados.

## Compatibilidade

- SPresenter 0.3.45 ou mais recente;
- Windows;
- macOS Intel;
- macOS Apple Silicon.

## Como funciona

O projeto é composto por duas partes:

- `plugin/`: plugin instalado dentro do SPresenter;
- `auxiliar/`: aplicativo local que realiza download e processamento e se comunica com o plugin pela própria máquina.

O auxiliar inicia junto com o sistema e permanece disponível na bandeja do Windows ou barra de menus do macOS.

## Instalação

Acesse a página de [Releases](https://github.com/1bytelabs/importador-videos-spresenter/releases/latest) e baixe os arquivos correspondentes ao seu sistema.

### Windows

1. Instale **Auxiliar-Importador-Spresenter-Windows**.
2. Instale o ZIP do plugin no SPresenter em **Configurações → Plugins → Instalar**.
3. Abra o painel **Importador de Vídeos** e confirme que aparece **Auxiliar conectado**.

### macOS

1. Baixe o DMG correspondente ao seu processador: Apple Silicon ou Intel.
2. Instale e abra o auxiliar.
3. Instale o ZIP do plugin no SPresenter.

Como o auxiliar ainda não possui assinatura e notarização da Apple, o macOS pode exibir um aviso de desenvolvedor não identificado. Nesse caso, use **Ajustes do Sistema → Privacidade e Segurança → Abrir Mesmo Assim**.

## Pixabay e Pexels

As pesquisas utilizam chaves pessoais das APIs dessas plataformas. Elas são salvas apenas na pasta local do auxiliar e não são incluídas no plugin nem publicadas no GitHub.

Os resultados priorizam vídeos horizontais adequados para projeção e permitem selecionar a resolução desejada antes da importação.

## Desenvolvimento e publicação

O workflow `.github/workflows/gerar-versao.yml` compila automaticamente o plugin e os instaladores.

Para gerar uma versão de teste, use **Actions → Gerar versão → Run workflow**. Os arquivos ficarão disponíveis como artifacts da execução.

Ao publicar uma tag no formato `v0.4.2`, a automação gera a release com:

- ZIP do plugin;
- instalador EXE do Windows;
- DMG do macOS Intel;
- DMG do macOS Apple Silicon.

## Uso responsável

Use somente vídeos próprios, em domínio público ou para os quais você tenha autorização de download e utilização. O usuário é responsável por respeitar direitos autorais e os termos das plataformas de origem.

## 1Byte Labs

**Ideias transformadas em software.**

[github.com/1bytelabs](https://github.com/1bytelabs)

## Licença

Distribuído gratuitamente sob a licença MIT.

## Contato — 1Byte Labs

[1bytelabs.com.br](https://1bytelabs.com.br) · [contato@1bytelabs.com.br](mailto:contato@1bytelabs.com.br)
