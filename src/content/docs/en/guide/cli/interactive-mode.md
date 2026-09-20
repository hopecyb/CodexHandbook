---
legacyVerification:
  status: verified
  products: CLI
  basis: Current OpenAI Help Center CLI introduction still presents starting Codex in a terminal, conversing while tasks run, and approving actions as needed as the basic workflow. This page covers the interactive mode and first-use advice without depending on a fixed shortcut list.
  checkedAt: '2026-07-26'
title: Interactive Mode
description: Talk with Codex and carry out tasks in a terminal.
sidebar:
  order: 20
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 822e8f7
---

In “interactive mode,” you talk back and forth with Codex in the terminal. It can explain and act, and it waits for your confirmation when needed. This is one common way to use the CLI.

After starting an interactive session:

1. Start in the project directory, or set the working directory as documented.
2. Write a prompt as carefully as you would in the app.
3. Approve or reject tool calls when prompted.
4. Use slash commands, if available, to manage the session; check your current CLI help for the available commands.

The same [prompt guidance](/en/prompts/) applies.

## Tasks suited to interactive mode

Interactive mode works well when you need to decide as work proceeds:

| Task state | Why interaction helps |
|---|---|
| Requirements are not fully defined | You can clarify them midway |
| You need to inspect a diff before choosing the next step | You can approve or narrow scope gradually |
| You are trying a workflow in a project for the first time | You can observe what Codex reads and changes |
| Permissions, external tools, or file writes are involved | A person can check important boundaries |

Once a task is stable enough that back-and-forth decisions are unnecessary, consider [non-interactive mode](/en/guide/cli/non-interactive-mode/) or automation.

## Common misconceptions

### 1. Can prompts be less precise because I am in a terminal?

No. The entry point changed, but the quality of the task description still matters. State the goal, limits, and completion criteria clearly.

### 2. Why start in the project directory?

The CLI needs to know which project it is working in. A wrong directory can hide relevant files, cause edits in the wrong location, or prevent project rules from being read.

### 3. Does a request for approval mean something went wrong?

Often it means Codex is working within a permission boundary, not that execution has failed.

## A simple first task

For a first attempt, start at the project root, edit just one file, and ask for a summary of what changed afterward.

Interactive CLI mode is a conversational task flow in the terminal. Use the right directory and a clear prompt.
