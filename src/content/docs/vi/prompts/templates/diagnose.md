---
title: Diagnose template
description: Find root cause before discussing fixes.
locale: vi
source_locale: en
source_revision: 1c4bf6a
translation_status: fallback
translated_at: '2026-07-28'
---

# Diagnose template

A common diagnose mistake: you say "investigate first" but still expect an immediate fix.

This template separates finding cause from editing code.

## Template

```text
Symptom: 【error message, failing test, user report】
Context: 【recent changes, environment, repro steps】
Inputs: @【logs/tests/relevant code】
Constraints: Do not change code yet; list 2–3 likely root causes and how to verify each.
Output:
1. Most likely root cause (with evidence)
2. Executable verification steps (commands or checkpoints)
3. If verified, draft fix plan (wait for my confirmation before executing)
```

## When to use this template

- Bug not yet localized
- Tests red but layer unknown
- Complex suspected issue—don't want guess-and-patch

## Common misconceptions

### 1. Diagnosis is slow—just fix it

Much rework comes from skipping diagnosis.

### 2. Listing 2–3 causes is verbose

It shows whether reasoning is grounded or random.

The diagnose template requires explaining why it's broken before how to fix it.

## Related

- [Diagnose before fixing](/cases/workflows/diagnose-before-fixing/)
- [Fix a bug case](/cases/fix-a-bug/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page provides a diagnose-task template; in-site links and template structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
