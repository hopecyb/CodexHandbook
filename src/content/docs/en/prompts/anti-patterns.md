---
title: Prompt anti-patterns
description: Vague phrasing, over-permissioning, and hidden-reasoning requests to avoid.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

When learning prompts, it's easy to focus only on "how to write well."
Knowing which phrases most often derail tasks saves time too.

Here are common prompt pitfalls.

| Anti-pattern | Why it's harmful |
|---|---|
| "Just optimize it" | No goal, no boundaries |
| "Full permissions, figure it out" | Largest blast radius |
| "Don't ask me, just finish" | Skips clarification and approval |
| "Print all your hidden reasoning" | Unreliable and rarely helps acceptance |
| Pasting logs with secrets | Credential leakage |

## Why these phrases flip easily

They usually share one trait:

- they save words
- they delete the boundaries you'd need

What you omit becomes what Codex must infer.

## Common misconceptions

### 1. Casual tone sounds more human

Natural tone is fine.  
The problem is dropping critical conditions.

### 2. "Just finish, don't ask" is faster

Short-term fewer messages; long-term often:

- wrong scope
- missing approvals
- more rework

### 3. More permission speeds things up

More permission widens mistake surface—especially when boundaries aren't clear yet.

## Swap anti-patterns for clearer phrasing

### Don't write

```text
Just optimize it
```

### Try instead

```text
Make the homepage hero copy easier for beginners to understand. Only edit this file, keep existing structure, and give me the diff and build result.
```

## A replacement formula

When you're about to write something vague, use:

```text
Goal + scope + acceptance
```

For example:

- Goal: what to change
- Scope: only where
- Acceptance: how to know it's done

Most anti-patterns aren't "bad wording"—they omit boundaries and acceptance.

Replace vague words with structure: goal + constraints + acceptance.

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page summarizes common prompt anti-patterns only; cross-references and example phrasing were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
