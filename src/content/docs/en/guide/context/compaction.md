---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page covers only risks and remedies after compaction in long conversations. Concepts, examples, and internal links were reviewed, and the text does not depend on changing product details."
  checkedAt: "2026-07-26"
title: "Context compaction"
description: "What long-conversation compaction retains and what it may lose."
locale: en
source_locale: zh-CN
source_revision: "c6c9d03"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 50
---

“Context compaction” means that, when a conversation gets too long, the system keeps a shorter version of earlier content so the task can continue. The tradeoff is that **details may be lost**.

## Why this affects the result

Beginners often assume: “It should remember everything I said earlier in full.”

That is not always the case. After a long task is compacted, the details most likely to be lost include:

- Small, precise restrictions
- A temporary but important exception
- The allowlist of files you named earlier
- Edge cases in the acceptance criteria

Compaction is not an error; it is a mechanism that needs your help.

## What to restate after compaction

Compaction can lose detail. **Restate** key constraints, acceptance criteria, and file allowlists afterward, or put them in project instructions.

Prioritize these points:

- Which files may be changed
- What must never be touched
- What counts as complete
- What has already been done

## Common misunderstandings

### 1. Does compaction mean it forgot everything?

More precisely, the main thread of the task may remain, but every detail is not guaranteed to survive unchanged.

### 2. Must I repeat everything from the beginning each time?

No. Usually it is enough to restate the most important, easiest to lose, and least forgiving information.

### 3. What should I never assume it still remembers?

Usually these items:

- File scope
- Prohibitions
- Acceptance criteria
- Important decisions you confirmed

## How to recover after compaction

If the task has become long, write a short interim summary yourself, for example:

```text
Current constraints:
1. Change only the docs directory
2. Do not change the route structure
3. Completion means the home-page copy is updated and the build passes
```

That is more reliable than relying on the entire long conversation.

For the underlying concept, see [Tokens, context, and compaction](/en/guide/foundations/tokens-context-and-compaction/).

In long tasks, do not state your most important limits just once. After compaction, it is worth restating the rules that matter.
