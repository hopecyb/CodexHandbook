---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page explains only the layers of context and the suggested reading path. Internal links and concepts were reviewed; the text does not depend on changing product versions, prices, or interface details."
  checkedAt: "2026-07-26"
title: "Context"
description: "Manage project, file, and conversation context."
locale: en
source_locale: zh-CN
source_revision: "e085884"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 16
---

Context is the information the model can **effectively use right now**. Poor context management can drown even a good prompt in noise.

In practice, it means what Codex has actually seen in this task, what it can refer to, and what it can use to make decisions. Information you know but have not supplied is not part of this task's context.

## Why this chapter matters

Many cases of “why did it misunderstand again?” come down to poor context management, not a prompt that was too short.

- Too much irrelevant material
- A key file was never provided
- An older conversation steers the new task in the wrong direction
- Conflicting information does not say which source applies

## How to read this chapter

If this is your first systematic pass, follow this order:

1. Understand what context includes
2. Distinguish project, file, and conversation context
3. Then examine priority, compaction, focus, and sensitive material

## In this chapter

- [Project context](/en/guide/context/project-context/)
- [File and folder context](/en/guide/context/file-and-folder-context/)
- [Conversation context](/en/guide/context/conversation-context/)
- [Context priority](/en/guide/context/context-priority/)
- [Compaction](/en/guide/context/compaction/)
- [Keep context focused](/en/guide/context/keep-context-focused/)
- [Sensitive context](/en/guide/context/sensitive-context/)

The recurring point is that context depends on what Codex actually saw during this task. If you think it should know something but have not supplied it this time, it is not part of the context.
