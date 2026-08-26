---
title: Review a PR
description: Use Codex for structured diff review before merge.
locale: en
source_locale: zh-CN
source_revision: 29b081c
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

# Review a PR

## Meta information

| Field | Content |
|---|---|
| Audience | Developers / teams |
| Client | CLI / IDE / Cloud |
| Estimated time | 20–40 minutes |

## 1. Goal and background

**Goal:** Before merge, catch scope creep, security risks, and test gaps.

**Success criteria:** Review output traces to specific files/lines; P0 items handled or merge blocked.

## 2. Recommended prompt

```text
Compare diff of current branch vs main (do not change code yet):
1. Does it exceed issue scope?
2. Obvious security risks (secrets, injection, permissions)?
3. Missing tests or docs?
Output checklist with P0/P1, include file paths.
```

## 3. Team capture

- Use [`$pr-review`](/en/skills/examples/review-skill/) Skill
- CI integration: [Code review automation](/en/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Related

- [Review template](/en/prompts/templates/review/)
- [Review before merge](/en/cases/workflows/review-before-merge/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' current Codex use cases still include "Review GitHub pull requests," emphasizing catching regressions and potential issues before human review; this page only requires structured diff review with P0/P1 and file paths—not dependent on a specific UI or fixed command.
