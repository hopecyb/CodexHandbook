---
title:  Notificaciones
description:  Seguimiento de Tareas largas y avisos que requieren Aprobación.
locale: es
source_locale: zh-CN
source_revision: 0869db2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Notifications tell you when a task needs attention. They do not replace review. The desktop App can notify you when a turn completes and can separately control alerts for permission requests and questions.

## Recommended configuration

Open **Settings → Notifications**:

| Event | Recommendation | Reason |
|---|---|---|
| Turn completion | Notify when running in the background | You do not need to watch a long task continuously |
| Permission | Enable | An unanswered approval request pauses the task |
| Question | Enable | Codex needs your response when key context is missing |

The operating system must also allow the ChatGPT desktop App to send notifications. Enabling them inside the App is not enough if the OS denies permission.

## Manage multiple chats in Activity

When Activity is available, select the bell in the sidebar to view chats that are unread, running, or awaiting a response. The shortcut is:

- macOS: `Cmd + Option + U`
- Windows: `Ctrl + Alt + U`

Filters depend on the current interface and may include Work, Chat, Pinned, and Scheduled. A useful processing order is: awaiting permission or input → failed → completed and awaiting review → still running.

## What to do after a notification

- **Completed:** open the diff and verification output; a notification is not an acceptance result.
- **Permission request:** confirm the command, target resource, impact, and reversibility.
- **Awaiting an answer:** add only the context needed; do not expand the task incidentally.
- **Failed:** find the first meaningful error, then decide whether to retry or adjust the constraints.

CLI and IDE notifications work differently. The IDE has no separate notification settings. The CLI can use advanced configuration for TUI or external-program completion notifications. Desktop settings are not a global switch.

## Official sources

- [Notifications](https://learn.chatgpt.com/docs/notifications)
- [Desktop App settings](https://learn.chatgpt.com/docs/app/settings)

---

**Status:** verified

**Applies to:** App

**Last verified:** 2026-08-26
