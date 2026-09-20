---
legacyVerification:
  status: verified
  products: IDE
  basis: The current OpenAI Help Center article on using Codex with a ChatGPT plan still supports the Codex IDE extension alongside the CLI and desktop app as local clients. This page is only the IDE chapter guide and emphasizes the stable practice of working with the current file, selection, and diff review.
  checkedAt: '2026-07-26'
title: IDE extension
description: 'Use Codex in your editor: installation, context, local and cloud tasks, review, and settings.'
locale: en
source_locale: zh-CN
source_revision: 4772f3f
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 12
---

The IDE extension suits work where you **write and inspect the diff side by side**: open a file, select code, and describe a task in the sidebar. This chapter covers the full path from choosing an editor to reviewing the result.

If you normally write code or edit documents in an editor, the IDE is often the most natural place to start.

It can use the file you currently have open and your selection as context, which makes many small, focused changes easier to keep within scope.

## Chapter navigation

| Topic | Page |
|---|---|
| Choosing an editor | [Supported editors](/en/guide/ide/supported-editors/) |
| Installation | [Installation](/en/guide/ide/installation/) |
| Context | [Editor context](/en/guide/ide/editor-context/) · [Selections and open files](/en/guide/ide/selected-code-and-open-files/) |
| Workflows | [Local tasks](/en/guide/ide/local-task-workflow/) · [Cloud tasks](/en/guide/ide/cloud-task-workflow/) |
| Quality | [Reviewing changes](/en/guide/ide/reviewing-changes/) |
| Configuration | [Settings](/en/guide/ide/settings/) |
| Troubleshooting | [Troubleshooting](/en/guide/ide/troubleshooting/) |

Quick start: [Install the IDE extension](/en/guide/getting-started/install-ide-extension/) · [Choose a Codex client](/en/guide/getting-started/choose-your-codex-client/)

## What to notice first

When you first use the extension, notice three things:

1. It can refer to the file you currently have open.
2. You can use a selection to define a narrower scope.
3. You still need to review the diff after a change.

The IDE extension works well for small changes you can inspect as you go. Scope control and review still matter.
