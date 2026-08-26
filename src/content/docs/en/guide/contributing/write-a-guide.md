---
reviewed_at: 2026-08-26
title: Write a Guide Page
description: Structure, frontmatter, and cross-link conventions for new handbook guides.
locale: en
source_locale: zh-CN
source_revision: 9b6d47f
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
---

This page explains how to add or revise **guide-style** pages in `src/content/docs/` (not pure cases or pure reference tables).

## What this page covers

Common blockers:

- What a guide page should look like
- Tutorial vs policy vs index summary
- How to actually help newcomers

## Role of a guide page

A guide is not “dump information.” It should move readers from “I know this topic exists” to “I know when to use it, what to read first, and what to avoid.”

Not only a bullet list or command sheet—it should show next steps.

## Frontmatter

```yaml
---
title: Page title
description: One sentence on what problem this page solves
---
```

Optional unified footer (match existing pages):

```markdown
---

**Status:** planned | draft | review | verified | outdated | archived
**Products:** App / CLI / IDE / Cloud
**Last verified:** YYYY-MM-DD
```

## Recommended structure

Choose sections from the [external source integration template](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md#6-%E6%8E%A8%E8%8D%90%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF). Common combinations include:

- What problem the page solves
- Who it is for
- Minimal viable approach
- Recommended workflow
- Common mistakes
- Security boundaries
- Acceptance checklist
- Reference sources

Product how-tos may be step-heavy; concept pages may use tables and diagrams.

## Common misconceptions

### Not every page is an encyclopedia

Lead with:

- Main problem
- What readers misunderstand
- One usable approach or decision rule

Better for newcomers than every detail at once.

### Write for readers, not only yourself

Bridge for first-time visitors:

- Who it is for
- What they can solve after reading
- What to grab first for a quick start

### Guides do not replace official docs

Community handbook helps understanding and landing—but volatile facts need official verification.

## Cross-links

- Internal links use root paths: `/cases/workflows/explore-plan-execute-verify/`
- Link to authoritative pages; avoid long duplication
- Register new pages in chapter `index.md` and `astro.config.mjs` sidebar

## Tone

- Simplified Chinese is source; English translations follow source structure
- Acknowledge uncertainty (“per official documentation”)
- Avoid “magic prompt” narrative

## Writing order

1. What problem does this page solve?
2. What do readers misunderstand or skip?
3. Minimal approach, workflow, or decision rule
4. Cross-links and reference sources

## Verification

Before PR, read [Verify technical content](/en/guide/contributing/verify-technical-content/). Commands, pricing, permissions, etc. must be re-checked.

A good guide tells first-time readers why the page exists, what to read first, and where to go next—not only “all the facts.”

## Reference sources
- OpenAI Codex official documentation
```
---

**Status:** verified
**Verification basis:** Cross-checked current doc frontmatter, footer status system, cross-link habits, and sidebar maintenance; describes writing conventions—not specific product version details.
**Last verified:** 2026-07-26
