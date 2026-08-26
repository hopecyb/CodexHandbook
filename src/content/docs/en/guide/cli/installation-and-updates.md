---
title: CLI installation and updates
description: Install, upgrade, and confirm the active version.
locale: en
source_locale: zh-CN
source_revision: 6b8ceaf
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

First-time CLI installation commonly raises three questions:

- Did the installation actually succeed?
- Why does the terminal still not recognize `codex`?
- After an update, how do I know which version is running?

Installation is complete when the current terminal can find the command reliably, not merely when an installer ran once.

## Check at least three things

1. The command runs directly.
2. The current terminal finds it through `PATH`.
3. Authentication is complete, rather than only the executable being installed.

## Common misconceptions

### 1. A finished installer means installation is complete

It only means that the installation steps ran. Next, confirm that the current terminal recognizes the command.

### 2. A new terminal window always fixes it

Sometimes, but not always. If `PATH` was not updated, a new window may still not find the executable.

### 3. Updating means reinstalling blindly

First determine:

- whether the current version is old;
- which installation you are actually updating.

## Check in this order

After installation:

1. Confirm that `codex` runs directly.
2. Confirm that the current shell's `PATH` includes its installation location.
3. Complete sign-in or authentication.
4. Confirm version information.

The practical standard is that this terminal can find the command and authentication succeeds.

Also see [Install the CLI](/en/guide/getting-started/install-cli/). Current installation and upgrade instructions are on [Codex CLI](https://learn.chatgpt.com/docs/codex/cli). The official standalone macOS/Linux installer uses the same command for installation and updates; use the relevant live tab for Windows, npm, or Homebrew.

---

**Status:** verified

**Applies to:** CLI

**Verification basis:** Compared with the current CLI quickstart for macOS/Linux, Windows, npm, and Homebrew entry points, update paths, and `codex` sign-in. Exact commands are maintained on the beginner installation page.

**Last verified:** 2026-08-26
