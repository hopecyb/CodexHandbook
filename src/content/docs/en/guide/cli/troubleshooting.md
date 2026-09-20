---
legacyVerification:
  status: verified
  products: CLI
  basis: Current OpenAI Help Center CLI introductions and configuration guidance cover common causes involving installation, authentication, permissions and sandboxing, and working directories. This page sorts symptoms into those four stable troubleshooting categories.
  checkedAt: '2026-07-26'
title: CLI Troubleshooting
description: Diagnose authentication, permission, and command failures.
sidebar:
  order: 70
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 57b062f
---

CLI failures may all look like terminal errors, but they need not share a cause. First ask whether the command is not installed, you are not signed in, permission is missing, or you are in the wrong directory.

| Symptom | Try first |
|---|---|
| `command not found` | Check installation and `PATH` |
| Authentication failure | Sign in again and check organization policy |
| Permission denied | Check approval mode and sandbox settings |
| Files changed in the wrong place | Confirm the current working directory |

## Sort problems into four groups

- **The command cannot be found:** Usually installation or `PATH`.
- **The command runs but cannot enter:** Usually authentication.
- **You can enter but cannot act:** Usually permissions or sandboxing.
- **It acts, but on the wrong thing:** Usually directory or context.

## Common misconceptions

### 1. Should every CLI error be investigated through the same log?

Categorizing the problem first is often faster than immediately digging into error details.

### 2. Does “permission denied” mean the program is broken?

Often it means an approval rule, sandbox, or policy is working as intended.

### 3. If the command ran, must the directory be correct?

No. Many CLI problems are not about a command failing to execute, but about running it in the wrong repository or working directory.

## Troubleshooting order

1. Confirm the command exists.
2. Confirm your login state.
3. Check the current permission mode and sandbox restrictions.
4. Confirm the working directory is the project you think it is.

Separating installation, login, permission, and directory problems makes CLI diagnosis more straightforward.

See the [official OpenAI Codex documentation](https://developers.openai.com/codex).
