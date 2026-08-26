---
title: Undo and recover
description: Safely roll back when results are unsatisfactory.
locale: en
source_locale: zh-CN
reviewed_at: 2026-07-26
source_revision: b76bcfc
translation_status: reviewed
translated_at: 2026-07-26
sidebar:
  order: 100
---

When results go out of scope or quality is poor:

1. Use the client's undo / revert changes feature (per current UI)
2. If the project uses Git: discard working tree changes your usual way (beginners can skip Git and rely on the practice directory)
3. Start a new thread with tighter constraints and retry

Prevention beats recovery: small file scope, explicit prohibitions, plan before execute.

## Use recovery points as an exploration tool

Recovery is not only for mistakes. It is also useful before exploring alternative paths.

Good times to create a recovery point:

- Comparing two implementation directions
- Asking an Agent for a broad refactor
- Trying automation scripts or batch replacement
- Expecting the requirement to change soon

A safer rhythm: confirm the current safe state, ask Codex which files it will affect, create a recovery point or confirm Git state, make a small change, review diff and verification, then keep, revert, or try another path.

---

**Status:** review  
**Applicable products:** App / CLI / IDE  
**Last verified:** 2026-07-25
