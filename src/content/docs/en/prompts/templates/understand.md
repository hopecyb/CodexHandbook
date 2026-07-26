---
title: Understand template
description: Build shared understanding before making changes.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

# Understand template

Many tasks stall because there's no shared baseline understanding yet.

The understand template fits "figure it out first, then decide next steps."

## Template

```text
Goal: Understand 【topic/module/codebase area】 to prepare for subsequent 【implementation/changes/review】.
Context: 【project type, stack, related issue】
Inputs: 【@file paths, doc links, screenshots】
Constraints: Read-only analysis; do not modify any files; do not run destructive commands.
Output:
1. 5–8 bullets on core concepts or module responsibilities
2. The 3 files/directories most relevant to 【goal】 and why
3. Three open questions to confirm
Acceptance: I can decide the next task scope from your output.
```

## When to use this template

- New to a codebase
- Exploring unfamiliar module
- Mapping related scope before editing

## Common misconceptions

### 1. Understand tasks are just "summarize this"

Also ask for:

- which files matter most
- what's still unclear
- where to start next

### 2. More detail in the understand phase is always better

Clear main line beats digging every detail immediately.

The understand template helps narrow the next task scope.

## Related

- [Explore—plan—execute—verify](/cases/workflows/explore-plan-execute-verify/)
- [Understand a codebase case](/cases/understand-a-codebase/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page provides an understand-task template; in-site links and template structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
