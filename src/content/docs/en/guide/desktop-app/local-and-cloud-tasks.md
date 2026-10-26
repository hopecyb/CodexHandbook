---
legacyVerification:
  status: verified
  products: App
  basis: 'Current OpenAI Help Center articles on ChatGPT Work and Codex and on using Codex with a ChatGPT plan distinguish local workflows from cloud tasks. This page summarizes only the desktop app choice: local work suits quick iteration; cloud work suits remote repositories and longer tasks.'
  checkedAt: '2026-07-26'
title: Local and cloud tasks
description: Choose between local and cloud execution in the app.
locale: en
source_locale: zh-CN
source_revision: '741f686'
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: '2026-09-20'
sidebar:
  order: 70
---

This choice determines whether a task in the desktop app runs on your computer or in a remote environment.

Choose where the task runs:

- **Local**: uses your computer's files and environment for quick iteration
- **Cloud**: uses a cloud environment suited to remote repositories and longer tasks

For the concepts, see [Local versus cloud](/en/guide/foundations/local-vs-cloud/). For an overview, see [Web and cloud](/en/guide/web-and-cloud/).

Before switching, check whether secrets belong in the chosen environment and whether network policy permits the access.

## Common misunderstandings

### 1. If I use the desktop app, why distinguish local from cloud?

The app is an entry point; it does not mean every task runs on your computer.

### 2. Which should I choose by default?

Usually start locally, mainly because:

- The files are already on your computer.
- The result is easier to inspect.
- Mistakes are easier to undo.

### 3. When should I consider cloud?

Common reasons include:

- A long-running task
- A need to work with a remote repository environment
- A need for a consistent environment
- A wish to avoid using local resources

If the desktop app can complete the task locally, local execution is usually the simpler choice. Consider cloud for longer or more remote work, or when you need a consistent environment.
