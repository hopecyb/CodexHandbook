---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only distinguishes files, commands, and tools and explains how to assess their risks; its internal links and examples have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Files, tools, and commands
description: How Codex reads and writes files, runs commands, and uses tools.
locale: en
source_locale: zh-CN
source_revision: '9d65338'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 40
reviewed_at: 2026-10-25
---

The biggest difference from an ordinary chatbot is that Codex can use **tools** to do things.

Files are where it changes content, commands are actions it takes, and tools are the entry points for doing the work.

Codex acts on the real world through **tools**:

- Read and write project files
- Run commands in a terminal when permissions and sandbox policy allow it
- Search the web or open a browser, depending on product capabilities and policy

## First, separate these three terms

| Term | Meaning |
|---|---|
| File | Real project content such as code, documentation, or configuration |
| Command | An action executed in a terminal, such as building, testing, or searching |
| Tool | A capability Codex uses to read or edit files, run commands, or search the web |

Another way to think about it:

- **Files** are the materials
- **Commands** are the actions
- **Tools** are the instruments used to handle materials and take actions

## A typical workflow

After you give Codex a task, it may:

1. Read a few relevant files to understand the project structure
2. Search text, inspect directories, or check configuration as needed
3. Run a command such as a test or build to verify the result
4. Change files, then present the changes for your review

When Codex asks to read files or run commands, it is often carrying out a normal part of the task.

## Common misconceptions

### 1. If it can run commands, can it do anything?

Not necessarily.

What it can do depends on:

- The tools available in the current product
- What the sandbox allows
- Whether a step needs your approval
- Any additional team policy

### 2. Should it run fewer commands and just edit files to save time?

Not necessarily.

A check command can reveal a problem early. Running tests after changing code is more reliable than finding a breakage much later.

### 3. What if I do not understand a command?

Ask directly:

```text
What does this command do? What will it change? What happens if we do not run it?
```

## A simple way to judge an action

When Codex wants to read or change files or run a command, ask:

1. Is this step related to my goal?
2. Is the impact limited to the directories or files I expected?
3. Could I easily undo it if it went wrong?

If you cannot answer any of these, ask Codex to explain before proceeding.

## Principles for use

1. **Minimum necessary scope:** name the directories and files; avoid “change anything in the repository”
2. **Approve dangerous commands:** deletion, pushing, and system configuration changes, for example
3. **Choose tools deliberately:** see [Tool selection](/en/guide/tools/tool-selection/)

Tool panels and confirmation methods vary by product; see the product guides for details.

Codex does more than “talk.” It acts through files, commands, and tools, so watch both scope and risk.

Read next:

1. [Permissions and approvals](/en/guide/foundations/permissions-and-approvals/)
2. [Sandbox and network](/en/guide/foundations/sandbox-and-network/)
3. [Run your first task](/en/guide/getting-started/run-your-first-task/)
