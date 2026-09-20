---
title: Instalação e primeira utilização
description: Conheça projetos, conversas, Codex e entradas de revisão na App de desktop do ChatGPT.
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: "080436d"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

Este capítulo destina-se a quem abre a App de desktop do ChatGPT pela primeira vez. O objetivo não é memorizar todos os botões, mas concluir uma **pequena tarefa que possa ser revista e verificada**.

Para instalar e iniciar sessão, consulte [Instalar a App de desktop](/pt/guide/getting-started/install-desktop-app/). A versão oficial está atualmente disponível para macOS, Windows e Linux. Depois de iniciar sessão, pode criar uma conversa, criar um projeto ou abrir uma pasta local.

## Três objetos a conhecer primeiro

| Objeto | Para que serve | Primeiro passo para iniciantes |
|---|---|---|
| Projeto ou pasta | Fornece ficheiros e diretório de trabalho à conversa | Abrir um repositório de treino, não um diretório de produção |
| Conversa | Guarda objetivo, contexto, progresso e resultado | Usar uma conversa para cada objetivo claro |
| Codex | Lê, altera e verifica conteúdo do projeto | Começar com uma pequena alteração de baixo risco e fácil de conferir |

A interface da App continuará a evoluir, mas estes três objetos são mais estáveis do que a posição de um botão específico.

## Concluir a primeira tarefa real

Prepare um repositório Git existente. Primeiro, confirme que não contém alterações por registar que precise de preservar. Depois, abra essa pasta na App e inicie uma conversa Codex.

Escreva:

```text
Lê primeiro README.md e altera apenas a secção «Executar localmente»:
1. Corrige o comando de arranque que deixou de funcionar.
2. Mantém todas as outras secções inalteradas.
3. Mostra o diff após a alteração e executa os comandos de verificação
   documentados que possam ser executados.
4. Se não for possível verificar, explica porquê; não afirmes que concluíste.
```

Quando terminar, não leia apenas o resumo da conversa. Confirme também:

1. se o painel de revisão mostra apenas os ficheiros esperados;
2. se as eliminações de conteúdo são justificadas;
3. se a saída do terminal sustenta realmente a conclusão de que a verificação passou;
4. se `git diff` corresponde ao âmbito da tarefa.

## Como escolher entre Chat, Work e Codex

- Para uma pergunta de conhecimento ou discussão de ideias, use Chat.
- Para trabalho geral que atravessa ficheiros e ferramentas, use Work.
- Para compreender, alterar e testar um repositório, use Codex.

Para uma pergunta pontual que não precisa de contexto duradouro, pode usar Quick chat. O trabalho que requer acompanhamento contínuo deve ficar numa conversa normal ou num projeto.

## O que verificar primeiro em caso de falha

- **Os ficheiros não aparecem**: confirme que abriu a pasta certa e que o acesso necessário não foi recusado.
- **Não é possível executar um comando**: confirme que as dependências estão instaladas e examine o primeiro erro real no terminal.
- **As alterações antigas misturam-se com as novas**: use `git status` para distinguir o que já existia antes da tarefa do que foi feito agora.
- **A interface difere desta página**: procure os objetos lógicos «projeto/pasta, conversa, revisão, terminal» em vez de depender da posição fixa apresentada numa captura de ecrã.

A seguir, leia [Diferenças, comentários e revisão](/pt/guide/desktop-app/diffs-comments-and-review/) e [Terminal integrado](/pt/guide/desktop-app/integrated-terminal/).

## Fontes oficiais

- [App de desktop do ChatGPT](https://learn.chatgpt.com/docs/app)
- [Revisão de código](https://learn.chatgpt.com/docs/code-review)
