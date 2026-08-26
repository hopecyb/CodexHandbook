---
title: Non-Interactive Mode
description: Batch jobs, scripts, and pipelines—understand what tasks fit first, then commands and output design.
locale: en
source_locale: zh-CN
source_revision: e226a62
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

Many people first hear “non-interactive mode” and think of it as “Codex without chat.”

Non-interactive mode is for putting Codex in scripts, CI, or batch jobs so one command completes one stable task.

## Recommended order

1. [codex exec](/en/guide/developer-platform/non-interactive/codex-exec/)
2. [Scripts and pipelines](/en/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [Structured output](/en/guide/developer-platform/non-interactive/structured-output/)
4. [Exit codes and retries](/en/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## What this section solves

- Turning one task into a CLI step
- Letting CI judge success, failure, and retry
- Making output easy for downstream scripts

It fits when scripts and pipelines need stable handoff—not back-and-forth chat.

---

**Status:** verified  
**Products:** CLI / API / Cloud  
**Verification basis:** Cross-checked against the current non-interactive subsection structure and entry links in this repo; this page only groups “non-interactive mode fits scripts, batch, and pipelines” without promising specific command flags.  
**Last verified:** 2026-07-26
