---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: This page explains that terminal execution can take more actions and poses more risk than file editing. It emphasizes understanding a command before approval, checking where it writes, whether it uses the network, and how to recover. These principles were cross-checked against this handbook's permissions, verification, and tools chapters.
  checkedAt: '2026-07-26'
title: Shell and Terminal
description: What command execution can do and the risks it carries.
sidebar:
  order: 20
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: '1438fc7'
reviewed_at: 2026-10-25
---

The terminal is one of the most direct ways for Codex to take action. It is efficient, but makes it especially important to understand the risks.

## Why it is powerful and risky

File tools mainly handle text. The terminal acts directly on the operating system and runtime. Once a task uses it, the action may be more than reading:

- Install.
- Build.
- Test.
- Delete.
- Commit.
- Push.

Find out where the command will make changes before running it.

Useful principles:

- Understand a command before approving it.
- Avoid `rm -rf`, force pushes, SSH configuration changes, and similar actions unless they are necessary and you fully understand them.
- Include verification commands in the acceptance criteria.

For the product entry point, see the [integrated terminal](/en/guide/desktop-app/integrated-terminal/).

## Why terminal risk is higher

It does not merely suggest an action; it executes one. A command may install dependencies, delete files, run tests, change configuration, or push code. If you cannot understand it, ask what it does before deciding whether to allow it.

## When to use a terminal

A terminal suits running tests, building the project, checking file status, and executing existing project scripts. It may not be the first choice to see how a page looks, check current public information, or edit one or two known text locations.

## Common misconceptions

### 1. If I do not know commands, can I still use a terminal?

You need not write many commands at first, but you should at least understand roughly what one does, whether it changes files or the system, and whether it belongs to the current task.

### 2. Is a test command always safe?

No. Most tests are relatively low risk, but check whether they write many files, access the network, or call scripts you do not understand.

### 3. What if I do not understand a command?

Ask directly:

```text
What will this command do? Which contents will it change? What happens
if we do not run it?
```

## A reusable instruction

```text
Before running a command, explain its purpose, whether it writes files,
whether it uses the network, and how to recover if it fails.
```

Before execution, confirm where the command can make changes.
