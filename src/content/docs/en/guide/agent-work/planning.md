---
title: Planning
description: Plan first, then execute.
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-07-25
sidebar:
  order: 10
---

A plan should include: steps, files involved, risks, verification approach. You approve the plan—not just the "start" button. See [Ask for a plan](/prompts/ask-for-a-plan/)

## Add three items for high-risk work

If a task touches many files, external systems, permission config, automation scripts, or team rules, the plan should also state:

| Extra item | Why it matters |
|---|---|
| Permission boundary | Which actions are read-only, and which need human confirmation |
| Recovery method | How to return to a safe state if the path is wrong |
| Phased rollout | Validate first in a test directory, example project, or small scope |

Ask for the plan in phases: read-only analysis, minimal change, verification, rollback. Any external-system write or batch write should be listed first, not executed immediately.

---

**Status:** review  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-25
