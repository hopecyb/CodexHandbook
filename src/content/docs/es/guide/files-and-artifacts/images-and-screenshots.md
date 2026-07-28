---
title: Images and Screenshots
description: Provide screenshots and design inputs to Codex; manage image files in tasks.
locale: es
source_locale: en
source_revision: 79bbcdd
translation_status: fallback
translated_at: '2026-07-28'
---

Images let the Agent **see** UI issues, design intent, or whiteboard sketches. This page covers input (images you provide) and image files in the repo; for generating new images see [Image generation](/guide/tools/image-generation/).

When tasking with screenshots, say what to look at and why it matters.

## What this page covers

- How to attach screenshots effectively
- Using design exports / Figma
- Image size in repo and context

## Input image scenarios

| Scenario | Approach |
|---|---|
| UI bug | Screenshot + text marking the problem area |
| Design implementation | Exported PNG + breakpoints and component library |
| Architecture whiteboard | Clear photo or export + legend |
| Error dialog | Full error text visible—not a cropped corner |

Deep dive: [Prompting with images](/prompts/prompting-with-images/)

## What images actually add

Best for information that is hard in words alone:

- How layout is wrong
- Where a button is squeezed
- What a dialog says

Images do not automatically tell Codex:

- What you care about most
- Expected change
- Whether this is “current” or “target”

Pair images with a direct sentence.

## Quality requirements

- **Resolution**: text readable; avoid blurry thumbnails
- **Crop**: remove irrelevant desktop, sensitive notification bar
- **Annotation**: arrows/circles OK—repeat key points in text
- **Multiple images**: pair “current / expected”

## Common misconceptions

### 1. Screenshot ≠ automatic understanding

Screenshots are evidence—you still need:

- Where the problem is
- What you want changed
- Which image is current vs target

### 2. Bigger is not always better

Huge originals add noise and bloat repo/context.

### 3. Design image alone is not enough

For “implement from design,” also specify:

- Breakpoints
- Component constraints
- What is fixed vs flexible

## Images in the repo

| Practice | Why |
|---|---|
| Unified `assets/` or `docs/images/` | Easier maintenance |
| WebP/compression | Control clone size |
| Meaningful filenames | `login-form-mobile.png` not `image1.png` |
| Alt text (in docs) | Accessibility |

## Copy-paste prompt pattern

```text
First image is current page, second is desired result.
Focus on hero title area and button spacing.
Do not infer business logic from screenshots—layout and visuals only.
```

## Privacy and security

- Screenshots may contain customer data, internal URLs, tokens—redact first
- Do not send config screens with secrets to untrusted tasks
- [Sensitive context](/guide/context/sensitive-context/)

## Reference sources

- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files

## Verification

For “implement from image” tasks:

1. Side-by-side compare implementation and reference (or [Browser tool](/guide/tools/browser/))
2. Check responsive and dark mode if required
3. [Verify artifacts](/guide/quality/verify-artifacts/)

## Common mistakes

- Design only, no interaction notes
- Commit 4K originals
- Assume model reads Figma links without export

Good screenshots are clear image, clear focus, clear expectation—not just “there is a picture.”

---

**Status:** verified  
**Products:** App / Cloud  
**Verification basis:** Cross-checked against OpenAI official image input and file upload materials for screenshot upload, annotation, file size, and privacy; no version-specific UI steps retained in body.  
**Last verified:** 2026-07-26
