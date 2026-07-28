---
title: Presentations
description: Generate and revise slides and decks—structure, masters, and speaker notes.
locale: vi
source_locale: en
source_revision: b6c309e
translation_status: fallback
translated_at: '2026-07-28'
---

Presentations (PPT, Keynote, Google Slides, Marp/Reveal, etc.) emphasize **narrative structure** and **visual consistency**. Agents excel at outlines and first drafts; masters and brand rules still need human review.

With Codex, the most value is early structure, slide order, and story—final polish is still yours.

## What this page covers

- Recommended workflow for slides with Codex
- Tradeoffs: `.pptx` vs Markdown slides
- Avoiding “every slide looks different”

## Pick delivery format first

| Format | Fits |
|---|---|
| Marp / Slidev / reveal.md | Developers, version control |
| `.pptx` | Business reviews, sharing with clients |
| Google Slides | Live collaboration (often via export or MCP) |
| PDF export | Read-only distribution |

State format at the start so the Agent does not mix toolchains.

Choose by audience:

- Client, exec, colleagues who edit in Office: usually `.pptx`
- Version with code: usually Markdown slides
- Read-only handout: usually PDF export

## Recommended workflow

```text
1. Outline: audience, duration, 3–5 core messages
2. Per slide: title + 3 bullets, speaker note bullets
3. Pick tool, generate first draft
4. Human pass: master, charts, data sources
5. Export PDF, rehearse timing
```

Aligns with [Explore–plan–execute–verify](/cases/workflows/explore-plan-execute-verify/): approve outline before detail.

## Why structure comes first

Without structure, Codex may produce many slides with:

- Wrong order
- Runaway page count
- Each slide like a poster, not one deck

Usually work in three layers:

1. What must this deck make clear?
2. What is each slide’s one job?
3. Then fill copy, chart notes, speaker notes

## Common misconceptions

### 1. Flashy slides ≠ clearer message

What matters:

- Titles that state the point
- Slide-to-slide progression
- Sourced data

### 2. Full first draft ≠ no human review

Still human-check:

- Brand and master
- Key conclusions
- Numbers and charts
- External-facing versions

### 3. More on a slide ≠ more clarity

Too many bullets, charts, and conclusions per slide hides the point.

## Practical order for Codex

1. Audience
2. Duration
3. Three takeaways you want
4. Ask for outline first
5. After outline approval, expand each slide
6. Then speaker notes, visual requirements, export format

Structure → copy → style is usually easier to control.

## Prompt essentials

- **Audience**: engineers vs executives → terminology depth
- **Page cap**: prevents 80-slide noise
- **Brand**: primary color, logo path, no clipart if policy says so
- **Charts**: cite source files; updatable data not fake screenshots

Example tone:

> “Outline up to 10 slides for non-technical executives; one core conclusion per slide; add speaker notes last.”

Better than “make a great PPT.”

Images: [Images and screenshots](/guide/files-and-artifacts/images-and-screenshots/); pure generation: [Image generation](/guide/tools/image-generation/).

## Verification

- Readable font size at projection resolution
- Animation restraint (hard to maintain if excessive)
- Numbers match [Validate sources](/guide/quality/validate-sources/)
- Speaker notes sufficient if needed

## What to delegate vs own

| Better for Codex | Better for humans |
|---|---|
| Outline and slide breakdown | Final wording of conclusions |
| Draft titles | Brand consistency |
| Draft speaker notes | Sensitive data |
| Chart caption drafts | External release versions |

## Common mistakes

- No outline—“make a quarterly report deck”
- Hand-edit `.pptx` repeatedly without Markdown source
- Chart data inconsistent with repo CSV
- One prompt decides structure, design, conclusions, and data definitions

## Acceptance checklist

- [ ] Outline approved before full generation
- [ ] Opens in target environment without font breakage
- [ ] Key data traceable to source files

## Reference sources

- codex.bozhouai.com presentation cases
- stormzhang content creation chapters
- baoyu-slide-deck community practice (structure reference)

---

**Status:** verified  
**Products:** App / CLI / IDE / Cloud  
**Verification basis:** Cross-checked against verified artifacts-first, validate-sources, images-and-screenshots, verify-artifacts pages; stable method: structure → copy → style and export.  
**Last verified:** 2026-07-26
