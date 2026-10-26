---
title: Notificações e vista de atividade
description: Configura avisos para a conclusão de tarefas, pedidos de permissão e perguntas à espera de resposta.
locale: pt
source_locale: zh-CN
source_revision: "4a1c672"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 80
legacyVerification:
  status: verified
  products: App
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

As notificações indicam **quando** precisas de voltar a uma tarefa; não substituem a revisão dos resultados. A aplicação de desktop permite configurar avisos de conclusão de uma interação e controlar separadamente os pedidos de permissão e as perguntas.

## Configuração recomendada

Abre **Settings → Notifications**:

| Evento | Recomendação | Motivo |
|---|---|---|
| Turn completion | Avisar quando a tarefa decorre em segundo plano | Não precisas de acompanhar uma tarefa longa continuamente |
| Permission | Ativar | Um pedido de aprovação sem resposta interrompe a tarefa |
| Question | Ativar | O Codex precisa da tua resposta quando falta contexto essencial |

O sistema operativo também tem de permitir que a aplicação de desktop do ChatGPT envie notificações. Se o sistema as bloquear, ativá-las na aplicação não basta para receber os avisos.

## Gerir várias conversas na vista Activity

Quando a vista Activity estiver disponível, seleciona o sino na barra lateral para ver conversas por ler, em execução ou à espera de resposta. Os atalhos são:

- macOS: `Cmd + Option + U`
- Windows: `Ctrl + Alt + U`

Os filtros variam com a interface e podem incluir Work, Chat, Pinned e Scheduled. Uma ordem útil de tratamento é: à espera de permissão ou resposta → falha → concluída e à espera de revisão → ainda em execução.

## O que fazer depois de uma notificação

- **Concluída**: abre o diff e os resultados de verificação; a notificação não é uma conclusão de aceitação.
- **Pedido de permissão**: confirma o comando, o recurso de destino, o alcance do impacto e a possibilidade de reverter.
- **À espera de resposta**: fornece apenas o contexto necessário, sem ampliar a tarefa por acaso.
- **Falha**: identifica o primeiro erro relevante e só depois decide se deves tentar novamente ou ajustar as restrições.

As notificações da CLI e do IDE funcionam de outra forma: o IDE não tem definições de notificações próprias; na CLI, a configuração avançada permite escolher avisos de conclusão no TUI ou por um programa externo. Não trates as definições da aplicação de desktop como um interruptor global.

## Fontes oficiais

- [Notificações](https://learn.chatgpt.com/docs/notifications)
- [Definições da aplicação de desktop](https://learn.chatgpt.com/docs/app/settings)
