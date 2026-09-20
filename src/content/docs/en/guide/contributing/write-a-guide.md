---
legacyVerification:
  status: "verified"
  basis: "Checked against the current documentation frontmatter, former footer status system, cross-link conventions, and sidebar maintenance in this repository. This page describes handbook writing conventions and structural guidance, not product-version details."
  checkedAt: "2026-07-26"
title: Write a Guide Page
description: Structure, frontmatter, and cross-link conventions for new handbook guides.
locale: en
source_locale: zh-CN
source_revision: fe93490
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

This page explains how to add or revise **guide-style** pages in `src/content/docs/` (not pure cases or pure reference tables).

## What this page covers

Common blockers:

- What a guide page should look like
- Tutorial vs policy vs index summary
- How to actually help newcomers

The sections below separate these questions so you can write a guide that readers understand and contributors can maintain.

## Role of a guide page

A guide is not finished when you dump information onto a page. It should move readers from “I know this topic exists” to “I roughly know when to use it, what to read first, and what to avoid.”

It is more than a list of facts or commands: it should also show readers where to go next.

## Frontmatter

```yaml
---
title: Page title
description: One sentence on what problem this page solves
---
```

New pages record editorial status and the verification method in frontmatter. Do not add a free-text verification footer:

```yaml
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Checked the content structure; replace with the checks actually performed and their date.
```

To mark source checks or an example run, follow [Verify technical content](/en/guide/contributing/verify-technical-content/) and include the relevant links and environment. Quote dates as `YYYY-MM-DD` strings.

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

When writing your first guide, it is easy to include everything you know and lose the main point. A more useful sequence is:

- Main problem
- What readers misunderstand
- One usable approach or decision rule

This usually helps newcomers more than presenting every detail at once.

### Write for readers, not only yourself

You know the context, but first-time readers do not. Add the information that bridges that gap:

- Who it is for
- What they can solve after reading
- What to grab first for a quick start

### Guides do not replace official docs

The community handbook can help readers understand, connect, and apply the material. Facts that may change still need to be checked against official documentation.

## Cross-links

- Internal links use root paths: `/en/cases/workflows/explore-plan-execute-verify/`
- Link to authoritative pages; avoid long duplication
- Register new pages in chapter `index.md` and `astro.config.mjs` sidebar

## Tone

- English, aimed at practitioners
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
