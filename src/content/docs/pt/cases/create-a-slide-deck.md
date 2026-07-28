---
title: Create a slide deck
description: A case for generating a presentable deck from an outline.
locale: pt
source_locale: en
source_revision: d843765
translation_status: fallback
translated_at: '2026-07-28'
---

# Create a slide deck

## Meta information

| Field | Content |
|---|---|
| Audience | Creators |
| Client | App |
| Estimated time | 1–2 hours |

## 1. Goal and background

**Goal:** Generate a well-structured presentation from a topic (Markdown/HTML/PPT, depending on environment capabilities).

**Success criteria:** Slide count matches the outline; each slide's points are clear; no fabricated data.

## 2. Recommended prompt

```text
Topic: [presentation topic]
Audience: [listener background]
Duration: [minutes]
First give chapters and each slide's title + 3 bullet points; do not generate the final file.
After confirmation, output to slides/ in format: [mdx/html/pptx].
Constraints: Data must cite sources or be marked "example"; no outbound network requests unless approved.
```

## 3. Verification

- Read through each slide—can you present it in under a minute?
- Verify chart and number sources

## 4. Related

- [Presentations capability](/guide/files-and-artifacts/presentations/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** OpenAI Developers' current Codex use cases still include "Generate slide decks," described as working with pptx files and image generation to produce presentations automatically; this page stays at the stable workflow layer—outline first, output per environment, numbers must cite sources or be marked as examples.
