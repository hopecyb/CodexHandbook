---
legacyVerification:
  status: verified
  products: IDE
  basis: Current OpenAI help guidance still recognizes the IDE extension as an official entry point. This page triages IDE problems as an unresponsive extension, login state, or workspace and context issue. It is a stable troubleshooting framework rather than an error-code manual.
  checkedAt: '2026-07-26'
title: IDE Troubleshooting
description: Diagnose extension loading, context, and synchronization issues.
sidebar:
  order: 90
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
source_revision: 'ebb21de'
---

IDE troubleshooting differs from CLI troubleshooting. Many problems look like “the extension is broken” but actually come from the **workspace, login state, or editor context**.

First decide whether the extension did not start, or it started but received the wrong context.

| Symptom | Try first |
|---|---|
| Extension does not respond | Update the extension and editor; inspect extension-host logs |
| Login state was lost | Authenticate again |
| Wrong context | Confirm the workspace root you opened |

## Sort problems into three groups

- **No response at all:** Often an extension-loading problem.
- **Opens but cannot be used:** Often a login or authentication problem.
- **Wrong answers or changes in the wrong place:** Often a workspace or context problem.

## Common misconceptions

### 1. If the extension icon is present, is the extension working?

The icon only shows it is installed. It does not establish that the current session works.

### 2. Does wrong context mean poor model understanding?

Often the opened root directory, selected files, or workspace is wrong instead.

### 3. Should I reinstall the extension first?

Not immediately. Check the editor version, extension version, login state, and current workspace. Those facts often identify the problem.

## Troubleshooting order

1. Check whether the extension responds.
2. Confirm the login state.
3. Confirm the workspace root and open files.
4. If it still fails, inspect extension logs.

Workspace, login state, and context sources commonly explain IDE problems; the extension itself is not necessarily damaged.

See the [official OpenAI Codex documentation](https://developers.openai.com/codex).
