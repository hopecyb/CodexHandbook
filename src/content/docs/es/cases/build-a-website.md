---
title: Build a website
description: A prototype case from requirements to a previewable page.
locale: es
source_locale: en
source_revision: e8865aa
translation_status: fallback
translated_at: '2026-07-28'
---

# Build a website

## Meta information

| Field | Content |
|---|---|
| Audience | Creators / developers |
| Client | App / IDE |
| Estimated time | 2–4 hours |

## 1. Goal and background

**Goal:** Build a locally previewable static page or small site from simple requirements.

**Success criteria:** Opens in a browser, styling matches the description, no unrelated file changes.

## 2. Recommended prompt

```text
Goal: Build a single-page landing page for [product/event] with a title, three features, and a CTA button.
Tech: HTML + CSS (or the project's existing framework), mobile-friendly.
Constraints: Only change page-related files under src/; do not add new dependencies unless I approve.
Acceptance: pnpm dev can preview; screenshot or notes explaining main sections.
Give a wireframe plan first; wait for my confirmation before writing code.
```

## 3. Verification

- Preview locally at each breakpoint
- Check for accidental changes to config or lock files

## 4. Related

- [Create template](/prompts/templates/create/)
- [Artifact-first work](/cases/workflows/artifact-first-work/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' current Codex use cases still include frontend build scenarios such as "Get from idea to proof of concept," "Build responsive front-end designs," and "Deploy an app or website"; this page limits the example to a small site or landing page prototype, requiring wireframes first, scoped changes, and browser preview for acceptance.
