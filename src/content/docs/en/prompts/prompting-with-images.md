---
title: Prompting with images
description: How to ask when giving Codex screenshots, designs, or whiteboard photos.
locale: en
source_locale: zh-CN
source_revision: 979c08c
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

Many "look at this image" tasks fail not because the model didn't see—it got an image **without being told what to look for**.

Image prompting should establish three things:

1. What the image is
2. Where you want attention
3. What task the output should serve

## When image prompts help

| Scenario | What the image provides |
|---|---|
| UI bug triage | Abnormal location and state |
| Design implementation | Layout, hierarchy, spacing, mood reference |
| Docs from screenshots | Interface-based explanations or tutorials |
| Whiteboard / flowchart cleanup | Hand-drawn → structured description |
| Current vs. expected | Differences without guessing requirements |

When the task is about appearance, position, or visual state, images often beat long text; when it's about business rules, images are supporting evidence.

## Four-part image prompt structure

Keep structure like text prompts:

### 1. Image identity

What it is and where it came from.

```text
This is a screenshot of the production login page, from iPhone 14 Safari.
```

### 2. Focus area

Point at what matters—don't end with "find the problem yourself."

```text
Focus on spacing between the bottom button and the input, and layout when the keyboard is open.
```

### 3. Task goal

Analyze, reproduce, edit code, write docs, output a comparison table.

```text
Analyze likely causes first; don't edit code yet. List 2–3 most relevant frontend files.
```

### 4. Output format

What you want back—avoid vague essays.

```text
Output:
1. What you observe in the image
2. Likely causes
3. Files to inspect
4. Additional screenshots you need from me
```

## Three common templates

### 1. Find the problem in the image

```text
I uploaded a screenshot of the current page. Focus on the red-box area.
Describe the anomaly first, then list 2–3 likely causes.
Don't modify code yet.
```

### 2. Implement from the image

```text
I uploaded the target design.
Summarize page structure, key components, responsive points, and visual style from this image.
If you implement, keep structure and hierarchy consistent; don't add features on your own.
```

### 3. Current vs. expected

```text
I'll upload two images: current result and desired result.
Compare layout, text hierarchy, spacing, and interaction cues; give fix priority.
```

## Text that makes images more accurate

Images often lack runtime context—add:

- device or browser
- hover / focus / error states
- scroll position
- current vs. target
- whether to follow an existing design system

"Works on desktop Chrome; only broken on iOS Safari" often beats another screenshot.

## Best way to supply multiple images

### Pair them

Useful patterns:

- current + expected

or:

- normal + broken

Don't upload a pile of unlabeled images and let Codex guess order.

### Label each image's role

```text
Image 1: desktop current
Image 2: mobile current
Image 3: design target
```

Easier to map relationships.

## Common image prompt mistakes

### "Just do it like this"

Codex infers all requirements from the image—including details you didn't care about.

### Crop without context

A partial shot shows the problem spot but not page state, responsive behavior, or modal context.

### Design as full spec

Designs show appearance—not data sources, edge cases, or interaction logic. Add business rules in text.

### Image replaces acceptance

Even design-driven work needs real page, diff, breakpoints, and usability. Images are input—not proof of done.

## Related pages

- Upload and manage images: [Images and screenshots](/en/guide/files-and-artifacts/images-and-screenshots/)
- Generate new images: [Image generation](/en/guide/tools/image-generation/)
- Complete task structure: [Task anatomy](/en/prompts/task-anatomy/)
- Analyze before editing: [Ask for a plan first](/en/prompts/ask-for-a-plan/)

## Practical tip

For "design review" style reading, ask for **observation**, then **judgment**, then **recommendation**:

```text
Only describe what you observe in the image—no conclusions yet.
Then hypothesize the most likely causes.
Finally suggest modification directions.
```

Clearer than "help me fix" and easier to continue from.

## Reference sources
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
---

**Status:** verified  
**Applicable products:** App / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Structure, scenarios, and cautions rechecked against OpenAI official image input and file upload materials; body no longer depends on unofficial scenario sources and omits UI details that need per-version verification.
