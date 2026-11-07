<p align="center"><img src="./assets/1bytelabs-cover.svg" alt="importador-videos-spresenter — 1Byte Labs" width="100%" /></p>

# Importador de Vídeos — 1Byte Labs

**Pesquise, baixe e importe vídeos ou áudios para o SPresenter sem sair do fluxo de trabalho.**

Plugin gratuito da [1Byte Labs](https://github.com/1bytelabs) para analisar links autorizados, baixar vídeos ou extrair o áudio em MP3 e importá-los para **Fundos**, **Vídeos** ou **Trilha** no SPresenter. Também permite pesquisar vídeos gratuitos no Pixabay e no Pexels e adicioná-los diretamente aos Fundos.

> **Versão 0.4.2**

[Baixar a versão mais recente](https://github.com/1bytelabs/importador-videos-spresenter/releases/latest) · [Tutorial](https://youtu.be/kxIf_o-fvas) · [Projetos da 1Byte Labs](https://github.com/1bytelabs)

## O que mudou na 0.4.2

- A aba YouTube mostra as resoluções acima de 720p detectadas para cada link. Quando disponíveis, é possível importar em 1080p, 1440p e 4K (2160p) para **Fundos** ou **Vídeos**.
- O auxiliar reaproveita a faixa de vídeo em H.264, VP9 ou AV1 quando possível. Para 4K, prioriza AV1 quando disponível, o que pode reduzir o tamanho do MP4 sem reduzir a resolução ou recodificar a imagem.
- A tela distingue download, preparação do MP4 ou MP3 e importação no SPresenter. Na categoria **Vídeos**, também mostra o envio e o registro do pacote na biblioteca.
- A extração para **Trilha** mantém as opções de MP3 em 128, 192 e 320 kbps e mostra o progresso da conversão.
- Os fundos são transferidos pela conexão local com o auxiliar. Se o SPresenter solicitar a permissão de rede do plugin, conceda-a para que ele possa ler o arquivo local.

### Limites do YouTube e de arquivos grandes

- O menu depende dos formatos que o YouTube disponibiliza ao auxiliar para aquele link. O modo **HD · até 720p** seleciona uma resolução de até 720p.
- Arquivos de alta resolução podem levar mais tempo para baixar e preparar. Se um MP4 para **Fundos** atingir 2 GiB, o auxiliar interrompe a importação com um aviso. Nesse caso, selecione 1440p ou uma resolução menor.
- Se o YouTube pedir verificação para o auxiliar, o plugin mostra uma mensagem em português. A análise pode voltar a funcionar ao tentar novamente mais tarde.

## Principais recursos

- Importação por link do YouTube;
- extração do áudio do YouTube para MP3 em 128, 192 ou 320 kbps;
- importação automática de MP3 para **Trilha**;
- pesquisa integrada no Pixabay e no Pexels;
- importação direta para **Fundos** ou **Vídeos**;
- seleção de resolução conforme a fonte e os formatos disponíveis;
- progresso de download e processamento;
- auxiliar local para Windows e macOS;
- chaves de API armazenadas somente no computador do usuário;
- processamento local, sem servidor da 1Byte Labs para receber os vídeos baixados.

## Compatibilidade

- SPresenter 0.3.45 ou mais recente;
- Windows x64;
- macOS Intel;
- macOS Apple Silicon.

## Como funciona

O projeto é composto por duas partes:

- `plugin/`: plugin instalado dentro do SPresenter;
- `auxiliar/`: aplicativo local que realiza download e processamento e se comunica com o plugin pela própria máquina.

O auxiliar inicia junto com o sistema e permanece disponível na bandeja do Windows ou barra de menus do macOS.

## Instalação

Acesse a página de [Releases](https://github.com/1bytelabs/importador-videos-spresenter/releases/latest) e baixe os arquivos correspondentes ao seu sistema.

| Arquivo da 0.4.2 | Onde usar |
| --- | --- |
| `Importador-de-Videos-Spresenter-0.4.2.zip` | Instalação do plugin dentro do SPresenter, em qualquer plataforma suportada |
| `Auxiliar-Importador-Spresenter-Windows-0.4.2.exe` | Windows x64 |
| `Auxiliar-Importador-Spresenter-macOS-arm64-0.4.2.dmg` | Mac com chip Apple Silicon |
| `Auxiliar-Importador-Spresenter-macOS-x64-0.4.2.dmg` | Mac com processador Intel |

Para atualizar, encerre o auxiliar pela bandeja do Windows ou pela barra de menus do macOS, instale e abra o novo auxiliar e atualize o plugin com o ZIP da mesma versão. Abra o painel e confira se aparece **Auxiliar conectado**.

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
