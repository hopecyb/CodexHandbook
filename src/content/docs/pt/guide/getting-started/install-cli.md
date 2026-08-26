---
title: Instalar o CLI
description: Instale a linha de comando do Codex e faça a checagem básica.
locale: pt
source_locale: zh-CN
source_revision: b12f7d0
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 40
reviewed_at: 2026-08-26
---


Codex CLI keeps exploration, editing, testing, and review in the terminal. The official installation page provides macOS/Linux, Windows, npm, and Homebrew options. Choose one that matches your operating system and package-management approach.

## Official standalone installer for macOS and Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Run the same official installer again to update the CLI. Windows, npm, and Homebrew users should select the relevant tab on the [official Codex CLI page](https://learn.chatgpt.com/docs/codex/cli); do not apply the macOS/Linux command to every system.

## Post-installation checks

Open a new terminal and run these commands in a practice repository:

```bash
codex --version
codex login status
```

If you are not signed in:

```bash
codex login
```

After browser authorization, start an interactive session from the repository:

```bash
codex
```

Keep the first task read-only:

```text
Do not edit files yet. Explain how this project is installed, tested, and built,
and list the file paths you used as evidence.
```

## Troubleshoot in order

1. If `codex --version` is not found, reopen the terminal and inspect the current shell's `PATH`.
2. If the command runs but Codex does not, use `codex login status` to distinguish installation from authentication.
3. If the wrong identity is active, run `codex logout` and sign in again.
4. If a company environment rejects access, inspect workspace, sign-in, and managed settings. Do not bypass policy with personal credentials.

Never paste an API key into shell history, tickets, or chats. For API-key sign-in, use the standard-input method in [Sign-in and authentication](/pt/guide/getting-started/sign-in-and-authentication/).

Continue with [CLI interactive mode](/pt/guide/cli/interactive-mode/). For other failures, see [CLI troubleshooting](/pt/guide/cli/troubleshooting/).

---

**Status:** verified

**Applies to:** CLI

**Verification basis:** Compared with the current Codex CLI quickstart and authentication documentation, including the official macOS/Linux installer, `codex` startup, ChatGPT sign-in, and status command. Other installation paths point to the live official tabs.

**Last verified:** 2026-08-26
