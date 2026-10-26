---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página é navegação do tema ferramentas; as entradas de terminal, pesquisa, navegador, Computer Use, imagens e voz foram cruzadas com o índice do site; o corpo só explica que «as ferramentas afetam o escopo de execução e o risco», sem declarar uma matriz fixa de suporte."
  checkedAt: "2026-07-26"
title: ferramentas
description: Seleção de ferramentas disponíveis ao Agent Codex e temas — terminal, pesquisa, navegador, Computer Use, etc.
sidebar:
  order: 20
locale: pt
source_locale: zh-CN
source_revision: "5939a9d"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

O Agent usa **ferramentas** para ler arquivos, correr comandos, pesquisar na rede, abrir o navegador, etc. Escolher a ferramenta certa e clarificar limites reduz saída de rede não autorizada ou alterações excessivas.

Aqui, «ferramenta» é a capacidade que o Codex chama de fato ao executar a tarefa. Nem todas as tarefas se resolvem só com diálogo.
Umas leem arquivos, outras correm comandos, outras consultam páginas web, outras veem a página real.

![Ilustração: ferramentas sobre a mesa — terminal, navegador, lupa de busca, imagem, microfone e ponteiro — e um assistente escolhendo a certa](/illustrations/tools-overview.webp)

## Porque conhecer as ferramentas primeiro

No início, é fácil tratar o Codex como assistente de conversa puro.
Mas assim que permitir, pode:

- Ler arquivos do projeto
- Alterar documentação ou código
- Correr comandos no terminal
- Pesquisar páginas web públicas
- Abrir páginas locais para verificar o resultado

As ferramentas não são conhecimento adicional — são a base de segurança e eficiência.

## Navegação do capítulo

| ferramenta | Página |
|---|---|
| Visão geral de seleção | [Seleção de ferramentas](/pt/guide/tools/tool-selection/) |
| Terminal | [Shell e terminal](/pt/guide/tools/shell-and-terminal/) |
| Pesquisa | [Pesquisa Web](/pt/guide/tools/web-search/) |
| Páginas web | [ferramenta de navegador](/pt/guide/tools/browser/) |
| GUI | [Computer Use](/pt/guide/tools/computer-use/) |
| Imagens | [Geração de imagens](/pt/guide/tools/image-generation/) |
| Voz | [Entrada e saída de voz](/pt/guide/tools/voice/) |

Leitura/escrita de arquivos e aceitação de artefatos: [Arquivos e artefatos](/pt/guide/files-and-artifacts/). ferramentas de extensão entram via [MCP](/pt/skills/mcp/mcp-overview/).

## Ordem de leitura sugerida

Na primeira leitura deste capítulo:

1. [Seleção de ferramentas](/pt/guide/tools/tool-selection/) — que priorizar por tipo de tarefa
2. [Shell e terminal](/pt/guide/tools/shell-and-terminal/) — riscos da execução de comandos
3. Páginas de pesquisa, navegador ou outras ferramentas, conforme a tarefa em mãos

As ferramentas determinam como o Codex age; cabe-lhe declarar quais pode usar e quais não.
