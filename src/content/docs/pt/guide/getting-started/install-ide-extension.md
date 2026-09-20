---
title: Instalar a integração com IDE
description: Ative o Codex em editores compatíveis com VS Code, no Xcode ou em IDEs JetBrains.
locale: pt
source_locale: zh-CN
source_revision: e8f88ec
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 50
---

O suporte atual a IDEs não usa um único método de instalação:

| IDE | Como instalar ou ativar |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Instale ou ative a extensão Codex |
| Xcode | Selecione Codex Agent no assistente de programação do Xcode |
| IDEs JetBrains | Selecione Codex no AI Chat |

Acesse a [página oficial do Codex para IDE](https://learn.chatgpt.com/docs/codex/ide) e escolha o caminho correspondente ao seu IDE. Não deduza a posição dos botões com base em capturas de tela de outro editor.

## Editores compatíveis com VS Code

1. Instale a extensão Codex pelo Marketplace oficial.
2. Abra a raiz de um projeto real no workspace.
3. Selecione o ícone do Codex. Se ele não aparecer, abra a Command Palette e execute `Codex: Open Codex Sidebar`.
4. Entre com o ChatGPT ou com uma API key.

## Xcode e JetBrains

- Xcode: abra o assistente de programação, inicie uma conversa e selecione Codex como Agent.
- JetBrains: abra o AI Chat e selecione Codex.

Essas entradas são oferecidas pelos respectivos IDEs; suas interfaces não são idênticas à extensão para VS Code.

## Confira o contexto após instalar

Abra um arquivo de código-fonte, selecione um pequeno trecho e pergunte:

```text
Explique apenas as entradas, saídas e caminhos de falha da seleção atual.
Não altere arquivos. Cite os nomes das funções relevantes.
```

Se a resposta não tiver relação clara com o trecho selecionado, verifique primeiro:

- se a raiz correta do projeto está aberta;
- se o arquivo ou a seleção foi anexado ao composer;
- se a conta conectada e o workspace estão corretos;
- se outras extensões de IA ou atalhos conflitantes estão ativos no editor.

Depois, estude o [fluxo de trabalho local no IDE](/pt/guide/ide/local-task-workflow/). Veja o [suporte a editores](/pt/guide/ide/supported-editors/) para a lista completa.
