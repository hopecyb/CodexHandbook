---
title: Create template
description: Build features, documents, or artifacts from scratch.
locale: es
source_locale: en
source_revision: f7e4caa
translation_status: fallback
translated_at: '2026-07-28'
---

# Create template

From-scratch tasks often fail in two ways:

- big goal, no boundaries
- not enough information but generation starts anyway

The create template states deliverable, audience, and constraints before work begins.

## Template

```text
Goal: Create 【artifact name】 for 【purpose/audience】.
Context: 【existing conventions, design style, dependency limits】
Inputs: 【spec, sketch, reference @files】
Constraints:
- Only modify/create within 【path scope】
- Do not introduce 【exclusions】
- Require my approval before 【high-risk operations】
Acceptance:
- 【observable result 1】
- 【observable result 2】
- Provide self-test steps
If information is insufficient, list assumptions and ask me—don't guess.
```

## When to use this template

- New page, component, script, or document from zero
- You know what to produce but haven't started
- You want scope stated before building

## Common misconceptions

### 1. Create tasks mean "free rein"

From-scratch work especially needs:

- who it's for
- what it's for
- style or technical paths that are off limits

### 2. Context is optional decoration

For create tasks, context often steers the entire deliverable.

### 3. "Looks good" as acceptance

Hard to judge whether you're actually done.

In create tasks, the riskiest move is starting before "what to build and for whom" is clear.

## Related

- [Specification-driven work](/cases/workflows/specification-driven-work/)
- [Define done](/prompts/define-done/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page provides a create-task template; in-site links and template structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
