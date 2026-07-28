---
title: 'Case study: Competitive feature matrix'
description: Source-backed research and table output—a workflow non-engineers can reuse.
locale: de
source_locale: en
source_revision: 1b56977
translation_status: fallback
translated_at: '2026-07-28'
---

## Metadata

| Field | Content |
|---|---|
| Audience | Product, ops, researchers |
| Client | App or CLI |
| Estimated time | 45 minutes |
| Verification date | 2026-07-25 |

## 1. Goal and context

**Goal:** Produce a comparison table for 3–5 competitors (features, pricing signals, fit), with a source for each conclusion.

**Success criteria:**

- Markdown table + "to confirm" labels
- No fabricated prices or version numbers
- No internal secrets in outward-facing docs

## 2. Preparation

- Define comparison dimensions upfront (in prompt or `@brief.md`)
- Enable [web search](/guide/tools/web-search/) (if the product supports it)

## 3. Workflow

Follow [Research with sources](/cases/workflows/research-with-sources/):

```text
Compare "team collaboration" features for vendors A/B/C:
1–2 sentences per dimension + source URL;
prefer official docs over blogs;
mark price "to confirm" if unverifiable;
output markdown table; do not change other repo files.
```

**Verification:** Human opens 3 URLs; check dates against [verification policy](/guide/start-here/handbook-version-policy/).

## 4. Failure and recovery

- Conflicting sources: present both; don't force a single story
- Context too long: split into "A vs B first, then add C"

## 5. Capture

- Save comparison table template to team template dir or knowledge base
- Optional Skill: `source-backed-research`

## 6. Related chapters

- [Artifact-first work](/cases/workflows/artifact-first-work/)
- [Validate sources](/guide/quality/validate-sources/)

---

**Status:** verified  
**Applicable products:** App / CLI  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified research-with-sources, web search, validate sources, and version policy chapters; content is limited to the stable research case structure for a source-backed competitive matrix—specific prices or product versions are not fixed.
