---
title: Comparação de funcionalidades
description: Comparação de capacidades de App, CLI, IDE e Cloud.
locale: pt
source_locale: zh-CN
source_revision: f2f0528
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 30
reviewed_at: 2026-08-26
---


This table compares only **stable primary workflows**. It does not turn rapidly changing small features into permanent promises. Decide with the [client-selection diagram](/pt/guide/choose-your-client/), then confirm differences here.

## Core comparison

| Entry | Where work happens | Strongest context | Primary review | Typical tasks |
|---|---|---|---|---|
| ChatGPT desktop App | Local projects, chats, and files | Open folders, projects, and tasks | Task summary, files, diff, approval UI | Multi-project coordination, long tasks, file and computer operations |
| Codex CLI | Current terminal and local repository | Working directory, command output, Git state | Terminal commands, diff, result summary | Exploration, editing, testing, scripts, CI |
| IDE integration | Current editor | Open files, selection, recent conversation | Change summary and diff beside code | Local explanation, incremental edits, editor review |
| Codex Cloud | Isolated remote environment | Connected repository and environment configuration | Cloud logs, summary, diff, PR | Long background tasks, parallel attempts, remote collaboration |

## Installation and identity

| Item | Desktop App | CLI | IDE | Cloud |
|---|---|---|---|---|
| Entry | macOS / Windows / Linux desktop App | Local command line | VS Code-compatible extension; separate Xcode and JetBrains integrations | Web and supported remote integrations |
| ChatGPT sign-in | Supported | Supported | Supported | Required |
| Local API-key sign-in | Supported | Supported | Supported | Not supported |
| Primary billing | ChatGPT plan or API usage | ChatGPT plan or API usage | ChatGPT plan or API usage | ChatGPT plan and workspace permissions |

Local work signed in with an API key follows different billing, administration, and data-handling policies from ChatGPT sign-in. API keys also do not provide ChatGPT-workspace or Cloud capabilities. Use live official pages for current plans and limits.

## Common combinations

### Personal development loop

```text
IDE locates a local issue → CLI runs a precise test → desktop App reviews long work and the diff
```

### Remote team loop

```text
Start from GitHub / GitLab / Linear / Slack → run in isolated Cloud
→ human reviews summary and diff → create PR
```

### Beginner learning loop

```text
Open a practice folder in the desktop App → request a small task
→ inspect permission request → inspect diff → run verification
```

## Do not use the matrix instead of checking reality

Plugins, Scheduled tasks, notifications, models, and organization policies evolve quickly. Check the current client and official documentation for:

- whether a feature appears for the current account;
- whether plan, region, or administrator policy restricts it;
- current command, shortcut, or UI names;
- whether API-key sign-in supports a ChatGPT or Cloud feature.

Keep the rule simple: **IDE for local code, CLI for terminal loops, desktop App for local task coordination, Cloud for isolated remote execution.**

---

**Status:** verified

**Applies to:** App / CLI / IDE / Cloud

**Verification basis:** Compared with current App, CLI, IDE, Cloud, Authentication, and Pricing documentation. The matrix keeps explicit work-location, context, review, and sign-in boundaries instead of guessing volatile features as strong, medium, or weak.

**Last verified:** 2026-08-26
