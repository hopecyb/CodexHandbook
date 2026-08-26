---
title: Settings
description: Configure everyday desktop App behavior, shortcuts, notifications, and appearance.
locale: en
source_locale: zh-CN
source_revision: c599d50
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 90
---

Settings personalize App behavior. They are not the complete Codex permission configuration. Keep the defaults at first and change a setting only after you understand its scope.

Press `Cmd + ,` on macOS or `Ctrl + ,` on Windows, or open Settings from the application menu.

## Four sections to check first

### General

- Whether `Cmd + Enter` is required to submit a multiline prompt.
- Whether **Prevent sleep while running** lets a local long-running task continue while you are away.
- Follow-up behavior determines whether a new message steers the current run immediately or is queued for the next turn.

The last setting changes what happens when you add a clarification. Steer the current run for an urgent correction. Start a separate chat for an unrelated requirement.

### Keyboard shortcuts

Search commands, change bindings, or restore defaults. If an online shortcut differs from your App, use the binding displayed here.

### Notifications

Choose when turn-completion notifications appear and whether to notify for permission requests and questions. See [Notifications and Activity](/en/guide/desktop-app/notifications/) for detailed recommendations.

### Appearance

Choose light, dark, or system appearance, and adjust the accent color, background, foreground, UI font, code font, and font size. For long code reviews, prioritize contrast and readable type over theme effects.

## What these settings do not control

- Repository rules belong in `AGENTS.md`.
- Persistent CLI and Agent configuration primarily belongs in `config.toml`.
- The sandbox, approval policy, and organization policy jointly determine whether files, networks, and commands are available.
- Managed organization policy may restrict what an individual can select.

A visible setting therefore does not guarantee that the current task has the corresponding permission. When an operation is denied, read [Permissions and sandboxing](/en/guide/permissions-and-sandbox/) before expanding access.

## Verify each change

Change one class of settings at a time and verify it with a low-risk chat. Record the previous value. If behavior differs from your expectation, restore the default first, then check the App version, operating-system permissions, and organization policy.

## Official sources

- [ChatGPT desktop App settings](https://learn.chatgpt.com/docs/app/settings)
- [Codex configuration basics](https://learn.chatgpt.com/docs/config)
- [Permissions](https://learn.chatgpt.com/docs/permissions)

---

**Status:** verified

**Applies to:** App

**Last verified:** 2026-08-26
