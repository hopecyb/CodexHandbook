---
title: Non-Interactive Mode
description: Batch jobs, scripts, and pipelines—understand what tasks fit first, then commands and output design.
locale: de
source_locale: en
source_revision: d52e702
translation_status: fallback
translated_at: '2026-07-28'
---

Many people first hear “non-interactive mode” and think of it as “Codex without chat.”

Non-interactive mode is for putting Codex in scripts, CI, or batch jobs so one command completes one stable task.

## Recommended order

1. [codex exec](/guide/developer-platform/non-interactive/codex-exec/)
2. [Scripts and pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [Structured output](/guide/developer-platform/non-interactive/structured-output/)
4. [Exit codes and retries](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

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
