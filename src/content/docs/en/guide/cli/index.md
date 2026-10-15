---
legacyVerification:
  status: verified
  products: CLI
  basis: The current OpenAI Help Center introduction still presents Codex CLI as the terminal entry point and distinguishes interactive use from more automated command-line workflows. This page is only CLI chapter navigation and outlines interactive and non-interactive use without relying on specific flags or installation commands.
  checkedAt: '2026-07-26'
title: CLI
description: A practical introduction to the command-line client.
locale: en
source_locale: zh-CN
source_revision: a80ef7e
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 11
---

The CLI suits terminal users and integration with scripts and CI.

If “CLI” is new to you, think of it as a way to work with Codex directly in a terminal without a graphical interface.

It is particularly useful for:

- People comfortable with the command line
- People who want to combine Codex with scripts
- Teams that need CI or automation

If you are entirely new to terminals, the CLI does not have to be your first stop. But if you already know basic commands such as `cd` and `ls` and can run commands in a project directory, it can be efficient.

- [Installation and updates](/en/guide/cli/installation-and-updates/)
- [Interactive mode](/en/guide/cli/interactive-mode/)
- [Non-interactive mode](/en/guide/cli/non-interactive-mode/)
- [CLI configuration](/en/guide/cli/configuration/)
- [Commands and shortcuts](/en/guide/cli/commands-and-shortcuts/)
- [Approvals and sandbox](/en/guide/cli/approvals-and-sandbox/)
- [Troubleshooting](/en/guide/cli/troubleshooting/)

For the full command listing, see the [CLI command reference](/en/guide/reference/commands/).

![Illustration: a small assistant sits on a terminal window typing commands, with the terminal connected to scripts and tests](/illustrations/cli.webp)

## Distinguish these modes first

For a first pass, understand the two modes:

1. **Interactive mode**: converse directly with Codex in the terminal.
2. **Non-interactive mode**: use Codex as a command within a script or CI.

For your first trial, interactive mode is usually easier. Explore non-interactive mode when you need automation.
