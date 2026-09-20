---
legacyVerification:
  status: verified
  products: App
  basis: Current OpenAI help documentation for the desktop app still covers installation, sign-in, project access, and local file permissions. This page uses a stable symptom-based framework covering installation, sign-in, permissions, tasks waiting for approval, and context or scope problems.
  checkedAt: '2026-07-26'
title: Desktop app troubleshooting
description: Common fixes for installation, sign-in, and task failures.
locale: en
source_locale: zh-CN
source_revision: c298f9f
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 100
---

When troubleshooting, check the most likely and easiest causes first.

| Symptom | Try first |
|---|---|
| Cannot install or open the app | Check system requirements and the official installer; restart and try again |
| Cannot sign in | Check network access, account permissions, and SSO; clear the session and sign in again |
| Project files are not visible | Confirm that you added the right folder and granted system file permissions |
| A task keeps waiting for approval | Return to the task view and handle the pending approval request |
| Changes are not what you expected | Tighten the constraints, start a new thread, and check the context |

If the problem remains, see [developers.openai.com/codex](https://developers.openai.com/codex) and the [troubleshooting index](/en/guide/reference/troubleshooting/).

## Common misunderstandings

### 1. Does a problem mean I made a serious mistake?

Many problems are simply:

- The wrong path was selected.
- A permission was not approved.
- The task is waiting for your confirmation.
- The conversation context has become confused.

### 2. If Codex cannot see a file, what should I check first?

Check the project directory and permissions before assuming the model lacks the capability.

### 3. How can I fix unexpected changes?

First narrow the problem:

- Restate the permitted scope.
- Identify what is wrong.
- Start a new thread if necessary.

Begin with the common, easy-to-fix causes. There is no need to assume the problem is complicated from the outset.
