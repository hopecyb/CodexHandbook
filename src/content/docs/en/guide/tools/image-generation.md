---
title: Image generation
description: Generating or editing images in Codex tasks—prompts, formats, and acceptance.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Codex can invoke **image generation** in some scenarios: illustration drafts, icon sketches, UI concept art, diagrams. Treat output as **artifacts to verify**—not production brand assets ready to ship.

Good for visual drafts—not final deliverables.

## What's covered

- When to generate in Codex vs professional tools
- How to write image prompts and constraints
- Copyright, brand, and file management

## Use cases

| Good fit | Poor fit |
|---|---|
| Blog image drafts, internal doc diagrams | External materials under strict brand guidelines |
| Quick UI layout exploration | Pixel-perfect design handoff |
| Tutorial example icons | Real-person likeness without authorization |

Complements [prompting with images](/prompts/prompting-with-images/): that page covers **input** images; this page covers **output** images.

## What image generation is for

Better at:

- Quick direction
- Visualizing a concept
- Draft assets for articles, docs, prototypes

Not a substitute for:

- Official brand materials
- Precise design specs
- Final published visuals without review

## Recommended workflow

1. State purpose, aspect ratio, style keywords (avoid piled trademark style names)
2. Request output format (PNG/SVG if supported) and save path
3. After generation, [verify artifacts](/guide/quality/verify-artifacts/): open file, check resolution and readability
4. Design or legal review before external publication

## Common misconceptions

### 1. Looks good = ready to use?

Also check:

- Fit for purpose
- Weird details
- Garbled text
- Style match with content

### 2. "Generate an image for me" is enough?

Usually specify:

- Purpose
- Landscape, portrait, or square
- Style direction
- Whether text should appear
- File format

### 3. Replaces designers?

Closer to exploration, content illustration, and concept sketching—not strict design delivery.

## Prompt structure

1. What the image is for
2. Landscape, portrait, or square
3. Mood and palette
4. Text yes/no
5. How you will verify after output

## Files and repository

- Large images in `assets/` or CDN; watch Git size
- In PR, note generation prompt and model version (internal audit)
- See [images and screenshots](/guide/files-and-artifacts/images-and-screenshots/)

## Safety and compliance

- Do not generate misleading content with sensitive marks, fake IDs, or unauthorized likenesses
- Enterprise policy may ban certain subjects; follow [acceptable use](https://openai.com/policies/) and internal rules

## References

- OpenAI Help Center: Images in ChatGPT
- OpenAI Academy: Creating images with ChatGPT

## Common mistakes

- Committing uncompressed 4K images
- Passing generated images off as photos or official logos
- Omitting "no text" constraint → garbled captions

Image generation is for direction and drafts; ship externally only after formal artifact review.

---

**Status:** verified  
**Applicable products:** App / Cloud (version dependent)  
**Verification basis:** Reviewed against official OpenAI image generation and editing materials for use cases, prompt guidance, and conservative "draft first, formal assets need review" conclusion.  
**Last verified:** 2026-07-26
