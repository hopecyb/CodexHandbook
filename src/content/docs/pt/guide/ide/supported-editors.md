---
legacyVerification:
  status: verified
  products: IDE
  basis: Conferido com a página oficial atual do IDE para confirmar os pontos de acesso do VS Code, Cursor, Windsurf, VS Code Insiders, Xcode e IDE da JetBrains, sem pressupor que todas as integrações têm funções idênticas.
  checkedAt: '2026-08-26'
title: Editores suportados
description: Distinguir a extensão compatível com VS Code das integrações do Xcode e da JetBrains.
locale: pt
source_locale: zh-CN
source_revision: "7b82896"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 10
reviewed_at: '2026-10-26'
---

Atualmente, o Codex chega aos principais editores por vias diferentes: os editores da família VS Code usam a extensão Codex, enquanto o Xcode e os IDE da JetBrains usam as suas próprias integrações.

## Formas de acesso atualmente suportadas

| Editor | Acesso ao Codex | Como abrir |
|---|---|---|
| Visual Studio Code | Extensão Codex | Ícone do Codex ou `Codex: Open Codex Sidebar` |
| Cursor | Extensão Codex compatível | Ícone do Codex ou Command Palette |
| Windsurf | Extensão Codex compatível | Ícone do Codex ou Command Palette |
| Visual Studio Code Insiders | Extensão Codex | Painel de extensões e barra lateral do Codex |
| Xcode | Integração com o coding assistant do Xcode | Criar uma conversa e selecionar Codex Agent |
| IDE da JetBrains | Integração com o JetBrains AI Chat | Abrir o AI Chat e selecionar o Codex |

Os pontos de instalação e as versões mínimas podem mudar. Aceda sempre pela [página oficial do Codex IDE](https://learn.chatgpt.com/docs/codex/ide); não conclua que uma extensão de terceiros com nome semelhante tem suporte oficial.

## Para que serve melhor o acesso pelo IDE

- Juntar diretamente o ficheiro aberto ou a seleção atual a uma pergunta.
- Explicar, alterar e acompanhar código localizado.
- Rever resumos e alterações ao lado do código-fonte.
- Manter tarefas pequenas no ambiente local e delegar trabalhos mais longos quando a tarefa cresce.

Exemplo:

```text
Examine o ciclo de novas tentativas na seleção atual.
Explique primeiro a condição de paragem e depois faça a menor alteração possível; modifique apenas o ficheiro atual e o teste correspondente.
No fim, apresente o diff e o comando de teste. Não atualize dependências.
```

## Como manter a consistência numa equipa com vários editores

1. Registe os comandos de compilação, testes e formatação em `AGENTS.md` do repositório ou na documentação de contribuição.
2. Defina no prompt os ficheiros que podem ser alterados, sem depender de um botão exclusivo de um IDE.
3. Faça a aceitação pelo diff do Git e pelo mesmo conjunto de testes, não apenas por «funciona no meu IDE».
4. Escreva instruções específicas para cada IDE apenas quando for necessário orientar a interface com precisão.

## Editores fora da lista

Prefira a [Codex CLI](/pt/guide/cli/) ou a [aplicação de ambiente de trabalho](/pt/guide/desktop-app/). Não force a instalação do pacote da extensão VS Code num editor incompatível nem presuma que uma integração de terceiros é uma função oficial da OpenAI.

Os passos de instalação estão em [Instalar a integração no IDE](/pt/guide/getting-started/install-ide-extension/), e a utilização do contexto está em [contexto do editor](/pt/guide/ide/editor-context/).
