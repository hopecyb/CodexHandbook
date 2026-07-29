---
title: Tokens, context, and compaction
description: Context windows, usage, and compaction.
locale: en
source_locale: zh-CN
reviewed_at: 2026-07-26
source_revision: 1013ae4
translation_status: reviewed
translated_at: 2026-07-26
sidebar:
  order: 100
---

A **Token** is the unit models use to process text. The **context window** is how much information can be used effectively in one turn.

When conversation or files grow too large, the system may **compact**: keep summaries, drop detail. After compaction, the Agent may "forget" earlier constraints.

## Practice

- Put key constraints in the current message or project notes—not only deep in old conversation
- Start a new thread when the topic changes
- Theory and tactics: [Context compaction](/guide/context/compaction/) and [Keep context focused](/guide/context/keep-context-focused/)

This page is concepts; `05` is how to manage them.

---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
