---
title: Change template
description: Bounded iteration on existing work.
locale: pt
source_locale: en
source_revision: abd9706
translation_status: fallback
translated_at: '2026-07-28'
---

# Change template

For "change a little on what already exists."

Change tasks should state edit boundaries first.

## Template

```text
Goal: On 【existing feature/file】, complete 【specific change】.
Context: 【why changing, blast radius】
Inputs: @【relevant file paths】
Constraints:
- Keep 【API/style/behavior】 unchanged unless I explicitly allow
- Minimal diff; no unrelated refactors
- After each step, run only 【relevant tests】
Acceptance:
- 【behavior change description】
- Related tests pass
- Diff touches only necessary files
```

## When to use this template

- Edit existing page or component
- Fix a specific bug
- Tweak copy, interaction, or config
- Emphasize "only this part—no drive-by refactors"

## Common misconceptions

### 1. Change is simpler than create, so write less

Change tasks hit old code, old constraints, and hidden dependencies—boundaries matter more.

### 2. "Minimal diff" means fewer lines

Minimal diff means **only what directly serves the goal**.

### 3. "Keep existing behavior" is enough

Also state what counts as "existing behavior."

## What this template prevents

- changing too much
- changing the wrong thing
- editing layers you didn't authorize

Change prompts need "what to change" and "where changes are allowed."

## Related

- [Define done](/prompts/define-done/)
- [Constraints and boundaries](/prompts/constraints-and-boundaries/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page provides a change-task template; in-site links and template structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
