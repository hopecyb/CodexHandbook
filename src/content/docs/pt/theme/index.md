---
title: Temas do Codex
description: "Entenda o que é o Codex Dream Skin, como instalar e trocar imagens, por que ele usa injeção CDP e quais limites de segurança verificar antes de usar temas."
locale: pt
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-07-29
reviewed_at: 2026-08-26
source_revision: 8c0e360
---

# Temas do Codex

Trocar a pele do Codex parece apenas deixar a interface mais bonita, mas o Codex Dream Skin é uma solução completa de tema para desktop: mantém as interações nativas do Codex, não modifica o pacote oficial e injeta de fora o fundo, as cores e a atmosfera visual na interface real.

## O que é o Codex Dream Skin

Codex Dream Skin é um projeto open source para aplicar temas ao app de desktop do Codex. Ele coloca um papel de parede 16:9 atrás do Codex e se adapta ao modo claro/escuro, à posição de foco e à paleta de cores. Barra lateral, cartões de sugestão, seletor de projeto e caixa de entrada continuam sendo controles nativos interativos.

![Codex Dream Skin aplicando um fundo 16:9 à tela inicial do Codex](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

_Tela inicial real do Codex depois do tema; barra lateral, cartões e entrada continuam nativos._

Ele é bem diferente da antiga alteração de binários:

| Abordagem | Altera arquivos oficiais | Quebra assinatura | Controles nativos | Liberdade de imagem |
| --- | --- | --- | --- | --- |
| Injeção CDP (Dream Skin) | Não | Não | Sim | Alta |
| Editar `app.asar` | Sim | Sim | Parcial | Média |
| Claro/escuro oficial | Não | Não | Sim | Nenhuma |

Editar `app.asar` era comum: desempacotar recursos do Codex, alterar CSS e imagens e empacotar de novo. O problema é que a assinatura falha, cada atualização pode exigir refazer tudo e antivírus podem bloquear.

A injeção CDP não altera binários oficiais. Ela injeta estilos e scripts de fora do Codex por uma porta de depuração, sem tocar em `.app`, `app.asar` ou assinatura de código.

O que pode fazer: trocar skin, trocar imagem, salvar vários temas e restaurar a aparência oficial com um clique.

O que não faz:

- O instalador não grava silenciosamente API Key ou Base URL de terceiros; tema e relay ficam separados.
- Não altera o diretório oficial de instalação nem a assinatura.
- O CDP se liga apenas a `127.0.0.1`; enquanto o tema roda, evite programas locais desconhecidos.

O projeto declara que não é um produto oficial da OpenAI. Ao restaurar e desinstalar, o Codex volta à aparência oficial e a conexão CDP é encerrada.

Links do projeto:

| Tipo | URL | Uso |
| --- | --- | --- |
| GitHub do projeto | [github.com/Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin) | Ver código, README, issues e guias de instalação |
| Site do projeto | [codex-dream-skin.org](https://codex-dream-skin.org/) | Ler explicação, funcionamento, limites de segurança e tutoriais |
| Downloads | [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) | Baixar instaladores macOS `.dmg` e Windows `.exe` |
| Biblioteca de temas / Studio online | [DreamSkin.cc](https://dreamskin.cc/) | Explorar, testar, criar e enviar temas |

## Instalação e primeiros passos

Antes de instalar, abra o Codex uma vez e confirme que o app inicia, faz login e sai normalmente. Isso ajuda a ferramenta a encontrar o ambiente local correto.

### macOS

No macOS, normalmente baixe o `.dmg` em Releases. Depois, arraste `Codex Dream Skin.app` para Applications e gerencie temas, fundos e restauração pela barra de menus.

Se o sistema disser que o app está "danificado" ou não pode abrir, geralmente é o Gatekeeper bloqueando um app não assinado. Permita em Ajustes do Sistema > Privacidade e Segurança apenas depois de confiar na origem.

### Windows

No Windows, baixe o instalador em Releases ou siga o fluxo PowerShell documentado. Depois, use a bandeja do sistema para gerenciar temas e fundos.

Se o SmartScreen mostrar aviso azul, normalmente falta certificado de assinatura. Continue apenas se confiar na origem.

### Problemas comuns

| Sintoma | Causa | Solução |
| --- | --- | --- |
| macOS diz "danificado" | App não assinado bloqueado pelo Gatekeeper | Ajustes -> Privacidade e Segurança -> Abrir mesmo assim |
| Aviso azul do SmartScreen | Falta certificado de assinatura | Mais informações -> Executar assim mesmo |
| Sem efeito após instalar | Codex não foi aberto antes | Abra Codex, faça login, saia e instale Dream Skin |
| Tema falha após atualizar Codex | A atualização pode mudar caminhos internos | Baixe o instalador mais novo e instale por cima |

Instalar por cima não apaga temas nem imagens salvos.

## Fundos e gerenciamento de temas

Depois da instalação, clique em "Trocar fundo" na barra de menus do macOS ou na bandeja do Windows e escolha uma imagem.

![Prévia e troca de temas no Codex Dream Skin](/theme/codex-dream-skin/article/codex-dream-skin-gallery.jpg)

_Depois da troca, verifique início, barra lateral, entrada e páginas de tarefas para manter a interface clara e legível._

Após escolher a imagem, o motor analisa localmente brilho, cor dominante, foco e o lado com menos informação visual, então gera variáveis de tema adequadas. Temas podem ser salvos, nomeados e alternados com um clique.

Gothic Void Crusade é o tema padrão do instalador público, contribuído pela comunidade. Também é possível importar qualquer fundo 16:9 puro.

Regras de imagem:

- Recomenda-se `2560 x 1440` em 16:9, sem janelas, barras, texto ou logos embutidos.
- Não coloque o assunto principal sobre a entrada, a barra lateral ou os cartões do Codex.
- Evite imagens muito claras, carregadas ou contrastadas.
- Antes de compartilhar ou vender, confirme direitos de imagem, personagens, marcas, fontes e IP.

Imagens fora dessas regras funcionam, mas podem prejudicar assunto ou legibilidade.

## Como funciona

### Injeção CDP

CDP, Chrome DevTools Protocol, é o protocolo de depuração remota do Chromium. O Chrome DevTools o usa para depurar páginas móveis: o navegador abre uma porta local e ferramentas externas podem injetar CSS e JavaScript.

O Codex desktop usa Electron, também baseado em Chromium. O fluxo pode ser simplificado assim:

![Fluxo de injeção CDP do artigo](/theme/codex-dream-skin/article/cdp-injection-flow.png)

```text
Iniciar a ferramenta de tema
  -> Abrir o Codex com endpoint CDP local
  -> Conectar ao processo renderer do Chromium do Codex
  -> Injetar CSS de tema e DOM decorativo
  -> Codex continua rodando enquanto a camada de tema assume a aparência
```

Ao parar o injetor, ele valida PID, caminho do executável e horário de início para evitar encerrar outro processo.

O CSS injetado preserva a interação nativa de barra lateral, entrada e cartões. O fundo fica abaixo dos controles, com uma camada translúcida para manter a leitura.

### Cores adaptativas: cálculo local, sem upload

Ao trocar imagem, o Dream Skin reduz a imagem localmente no Canvas, extrai cor dominante, brilho e foco e calcula variáveis CSS em HSL.

No modo escuro, parte de uma dominante mais escura; no claro, parte de cinzas claros e calcula texto e acentos mais escuros. A paleta é recalculada automaticamente a cada troca.

Na página inicial, mantém fundo completo e gradiente; em páginas de tarefa, vira uma camada ambiental de baixa interferência para priorizar o conteúdo.

## Para fechar

A injeção CDP aplica estilos de fora do app sem alterar binários oficiais. A ideia não se limita ao Codex: qualquer app Electron poderia teoricamente personalizar temas assim se oferecer uma porta CDP.

A demanda por ambientes de desenvolvimento personalizados é real. Um bom tema não é só "mais legal"; precisa preservar interações nativas, ser restaurável, inspecionável e não misturar visual com configuração de modelo.
