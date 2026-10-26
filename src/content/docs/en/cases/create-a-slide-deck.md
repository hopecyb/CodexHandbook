---
caseCategory: creation
directoryOrder: 30
title: Turn an Article into an Editable Eight-Slide Presentation
description: Download an article, eight-slide outline, native-text PPTX, and previews to practice narrative compression, source retention, and Chinese text layout checks.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: The reference PPTX was imported into presentation software, rendered as eight slides, and checked by editing native text. The findings apply only to the recorded environment and are an author self-check.
  environment: Artifact Tool JS / Node.js 24.19.0; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64; Arial Unicode MS with the system font directory configured explicitly.
  evidence:
    - label: Verification process, font fix, and scope
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: Standalone exercise inputs, prompts, PPTX, PDF, eight previews, and verification record
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /en/cases/write-an-article/
  label: Complete the source-backed article first
next:
  link: /en/guide/learning-paths/creator/#4-save-instructions-you-can-reuse-next-time
  label: Save a reusable task brief
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: '7189374'
reviewed_at: 2026-10-25
---

Compress an article into an eight-slide presentation. Deliver a PPTX with editable text, previews, and speaker notes. Preserve the sources' limits and conflict rather than adding numbers or charts to fill slides.

Level: beginner. The 60–90 minute estimate is editorial and has not been timed with readers. You should be able to read local files and have a tool or presentation app that can create PPTX files. The complete pack includes an input article, so this works on its own or after the [article case](/en/cases/write-an-article/).

[Download the complete exercise pack v1.0.0 (ZIP)](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [View the editable PPTX](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [View the PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## What you will finish with

![Reference presentation slide one: check a summary before expanding use, clearly labeling the fictional product and synthetic materials](/downloads/article-to-slides/previews/slide-01.png)

The reference deck uses native text boxes, so key text can be edited. All materials, the product “拾页,” and the person “Xiaolin” are fictional teaching assets released under CC0 1.0. Font files are not included.

| Slide | One point to make | Actual preview |
|---|---|---|
| 1 | Check first, then decide whether to expand use | [Title](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | File formats and evidence have boundaries | [Audience question](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | The three sources play different evidentiary roles | [Source evidence](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | Make a small trial in four steps | [Method](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | Remove unsupported capability claims | [Revision example](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | The diagnostics setting still has an unresolved conflict | [Limitation](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | Keep a check record and resolve unknowns | [Next step](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | Sources and synthetic use remain traceable | [Sources](/downloads/article-to-slides/previews/slide-08.png) |

## 1. Read the inputs and choose a through line

After extracting `article-to-slides/`, read `brief.md`, `input/article.md`, `input/claim-map.csv`, and `input/unresolved.md` first. Do not copy the reference deck immediately.

```text
Read brief.md, the article, claim map, and unresolved questions under input/.
Prepare an eight-slide briefing for an individual writer trying a note-organizing
tool for the first time. Aim for about five minutes. Give each slide one conclusion,
supporting points, and source IDs in my-output/outline.md. Preserve the fictional
identities, supported-format limits, and diagnostics-setting conflict. Do not
invent accuracy, pricing, or time-savings data. Separate author advice from
product facts.
```

Completion means all eight slide roles are present, each has one main point, and each factual statement can be located in a source section. Five minutes is a target, not a completed rehearsal. The full prompt is in the pack at `prompts/01-outline.md`.

## 2. Check the layout with two sample slides

Make the title slide and slide six first. The former tests the large heading; the latter tests the densest content. The reference style uses dark blue, warm white, and native text. Extra decoration is not required.

```text
Using the agreed eight-slide outline, first create samples for slides 1 and 6.
Use 16:9, native text boxes for body text, and a Chinese font available in
the current environment. On slide 6 retain both P3 “off by default” and C2
“on by default for new installations”; mark the answer unconfirmed. Render
and check Chinese characters, line breaks, margins, and readable sources.
Once the layout passes, complete the other six slides continuously. Save
the PPTX, eight previews, slide-by-slide notes, and verification record in
my-output/.
```

The reference deck uses Arial Unicode MS. If your system lacks it, choose a Chinese font you may use and recheck the layout. If your tools cannot create a PPTX, you may deliver the outline first and identify the missing capability; an outline alone does not complete this exercise.

## 3. Check editability, eight-slide layout, and sources

Open your PPTX in presentation software. Save a test copy, select and edit key text, save it, and reopen it. Export a preview of every slide and check Chinese text, line breaks, clipping, slide count, and notes. Eight full-slide images are not a substitute for an editable deck.

The reference deck was imported and exported through headless LibreOffice. In a temporary PPTX copy, native title text was changed from “一份” to “两份”; the changed text could be read after exporting again. This is not a GUI click-and-edit test and does not prove identical behavior in every application.

![Reference slide six: opposing default settings in two sources, with the conclusion marked unconfirmed](/downloads/article-to-slides/previews/slide-06.png)

Slide six is the key factual check. Do not remove one side of the conflict or silently change it to “off by default” for a simpler conclusion. The left column of slide five is an author-designed counterexample and must remain distinct from the correct wording on the right. Detailed sources appear in the PPTX notes and `solution/slide-notes.md`.

## 4. Check the reference files and record your own verification

From the complete pack's directory, run this command to check that its downloaded reference files are intact (Python 3.10+, standard library only):

```sh
python3 validation/check.py
```

It checks bundled reference-file hashes, eight slides, native text, notes, and previews. It does not validate a new deck you make in `my-output/`. Check your own deck in presentation software as above, recording its version, fonts, results, and remaining limitations.

If you cannot run the script, you can still open and inspect the PPTX/PDF slide by slide, but do not claim a hash or structure check was completed. The reference deck's [verification record](/downloads/article-to-slides/validation/record.md) states what was actually run.

## Recovery when something fails

| Symptom | Next step | Evidence of recovery |
|---|---|---|
| Chinese characters appear as boxes | Check whether the renderer can read a Chinese font; replace the font in a copy if needed | Render all eight slides again and confirm readable Chinese |
| Text overflows after changing fonts | Reduce text, adjust boxes and whitespace, and retain key limitations | Every preview has no clipping or overlap |
| Text cannot be selected separately | Rebuild with native text objects rather than full-slide PNGs | Select, edit, save, and reopen text in the app |
| The source conflict was “polished” away | Recheck P3, C2, and C3; restore both accounts and the unconfirmed marker | Slide six agrees with the claim map |
| The file will not open or the slide count is wrong | Export again and import into presentation software; keep the failed file for diagnosis | All eight slides are present and the app opens it |

The first problem really occurred during this work: LibreOffice initially could not read the system Chinese font. Once the font directory was specified for the renderer, Chinese characters returned and all eight slides passed another check. The missing-glyph slides were not used as final previews.

## Completion criteria and next step

- The eight-slide PPTX opens in the software environment you record, and key text is editable.
- All eight previews are present; Chinese text, line breaks, and boundaries have been checked slide by slide.
- Sources, synthetic identities, author advice, and the unresolved conflict remain clear.
- Your verification record distinguishes checks run from checks not run, and the deliverables remain local.

Continue with the [creator path: save a reusable task brief](/en/guide/learning-paths/creator/#4-save-instructions-you-can-reuse-next-time). You can turn stable steps into your own template, then learn to [package a workflow as a Skill](/en/cases/workflows/turn-a-workflow-into-a-skill/).
