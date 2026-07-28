---
title: Review template
description: Structured review of diffs and change risk.
locale: pt
source_locale: en
source_revision: b70db08
translation_status: fallback
translated_at: '2026-07-28'
---

# Review template

Review tasks often derail when they become "I'll fix it for you."

Find problems first, then decide whether to change—steadier flow.

## Template

```text
Review the diff against 【main/target branch】; do not change code yet.
Dimensions:
1. Beyond 【issue/spec】 scope?
2. Logic errors, edge cases, error handling
3. Security (secrets, injection, permissions)
4. Tests and docs aligned with changes?
Output a graded list: 🔴 blocking / 🟡 suggestion / 🟢 pass, each with file and line.
```

## When to use this template

- PR review
- Diff review
- Risk review of doc or config changes

## Common misconceptions

### 1. Review means "give some opinions"

More precisely: find issues along a fixed structure.

### 2. No obvious bugs equals pass

Also check:

- scope creep
- tests and docs coverage
- security and boundary issues

The review template surfaces risk by dimension—not vague "good or bad."

## Related

- [Review before merge](/cases/workflows/review-before-merge/)
- [Review a PR case](/cases/review-a-pr/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page provides a review-task template; in-site links and template structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
