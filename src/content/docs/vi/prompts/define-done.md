---
title: Define done
description: Write checkable completion conditions.
locale: vi
source_locale: en
source_revision: 61ae3f2
translation_status: fallback
translated_at: '2026-07-28'
---

Many people state what they want but not what "done enough" looks like. Then whether the work is finished becomes a matter of feel.

Definition of done is how you plan to verify the result.

Acceptance criteria must be **observable**:

- Weak: "code quality improved"
- Strong: "`npm test` passes; `Button` supports `disabled`; Storybook screenshots match the design"

## Why tasks often end without a clear "done"

Often goal and definition of done are blended.

- **Goal:** the outcome you want
- **Definition of done:** how you confirm that outcome was reached

"Fix this bug" is a goal;  
"reproducible fix, related tests pass, no new console errors" is closer to definition of done.

## Common misconceptions

### 1. If it looks roughly right, it's done

This bites hardest on small tasks. "Roughly right" often misses tests, edge cases, and side effects.

### 2. Definition of done is praising the result in more words

Definition of done must be checkable—not a victory speech.

### 3. Build passing equals done

Not necessarily.

Build passing is usually one checkpoint, not proof that:

- behavior is correct
- scope wasn't exceeded
- copy fits the audience
- sources were verified

## A common way to write it

If you're unsure, pick from these three types:

- **Functional check:** does behavior match expectation?
- **Technical check:** build / test / lint pass?
- **Scope check:** only agreed areas changed?

For example:

```text
Acceptance criteria:
- Only edit docs homepage copy; don't change layout or components
- `pnpm build` passes
- Hero copy is easier for beginners; no assumed jargon on first visit
```

## A quick self-check

After writing, ask:

> **If someone else had this list, could they judge pass or fail?**

If not, it's probably still too vague.

Bottom line: don't let "is it done?" depend on guessing.

Put verification commands in the criteria so the Agent is more likely to run them: [Run tests](/guide/verification/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page explains acceptance and definition-of-done writing only; in-site links were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
