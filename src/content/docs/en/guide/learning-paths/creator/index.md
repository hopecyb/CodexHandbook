---
title: 'Creator path: sources, article, slides, and reuse'
description: Use the same sources to produce a fact table, article, eight-slide deck, and reusable task instructions, with materials and acceptance criteria at every step.
contentType: path
audiences: [creator, beginner]
level: beginner
outputs: [markdown, csv, pptx, png]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Four milestones were arranged around the actual article and slide materials, and their inputs and outputs were checked. See the cases for individual reference validations; the full path has not yet been timed or completed independently by readers.
  evidence:
    - label: Article materials and author check record
      href: /downloads/source-backed-article/validation/record.md
    - label: Slide environment and rendering record
      href: /downloads/article-to-slides/validation/record.md
sidebar:
  order: 10
prev:
  link: /en/guide/learning-paths/
  label: Choose a learning path
next:
  link: /en/cases/write-an-article/#1-organize-facts-and-conflicts-first
  label: Start organizing three sources
locale: en
source_locale: zh-CN
source_revision: d1b46b1
translation_status: draft
translated_at: '2026-09-20'
---

Use one group of sources to write an article, turn it into an editable presentation, then save task instructions you can reuse. Every step leaves files that let you check whether you finished.

You need to be able to open a local folder in Codex. Creating the slide deck also requires a tool that can make PPTX files and presentation software that can open them; see the case for the specific environment. Different clients need not have the same tools. If file operations are unfamiliar, complete [Work with files](/en/guide/learning-paths/beginner/02-work-with-files/) first.

## Route and materials

| Step | Prerequisite input | Output of this step | Where to go next |
|---|---|---|---|
| 1. Organize evidence | Three synthetic sources and a source index | Fact table, list of conflicts and gaps | Write the article |
| 2. Write and revise | Fact table, audience, outline | Article, claim map, revision notes | Make the slide deck |
| 3. Make the slide deck | Article, claim map, presentation goal | Eight-slide PPTX, eight previews, notes and check record | Save reuse instructions |
| 4. Save reuse instructions | Outputs and experience from the first three steps | Task template, acceptance checklist, one transfer record | Try again with new materials |

[Download the article exercise package](/downloads/source-backed-article/source-backed-article-1.0.0.zip) · [Download the slide exercise package](/downloads/article-to-slides/article-to-slides-1.0.0.zip)

Each package also works on its own. If you follow the whole path, use your own finished article for step 3 when possible. The slide package's `input/` is reference input for readers who have not finished the article or need a comparison. All products, people, and interviews are synthetic teaching materials.

## 1. Organize evidence and retain conflicts

Before starting, extract the article package and read `brief.md`, `sources/index.csv`, and the three listed sources. Follow the [first part of the article case](/en/cases/write-an-article/#1-organize-facts-and-conflicts-first) to organize them; do not rush into drafting prose.

Put your outputs in the article package's `my-output/` and keep the original sources. In your fact table, record the source ID, section, supported claim, and type of evidence. Also write `unresolved.md` listing questions the sources do not settle.

You are done when you can locate the conflict between P3 and C2 about the diagnostic default without choosing either side as the final answer. The synthetic interview must remain labeled synthetic, and you must not invent accuracy or time-saving numbers absent from the sources.

If a source will not open or an ID does not match, restore the files and index first; do not guess content from filenames. Then move on.

## 2. Write the article, then revise against sources

Start with the facts and unresolved list from the prior step. Continue with the [article case](/en/cases/write-an-article/): identify the audience, make an outline, draft continuously within the defined scope, then review facts and revise expression.

Deliver `article.md`, `claim-map.csv`, `unresolved.md`, and revision notes. Identify at least one factual correction and one wording correction. The reference package contains a designed initial draft and an actual text diff; do not call the designed counterexample a real model failure.

You are done when key facts are locatable, author recommendations are distinguished from source-supported facts, and the diagnostic conflict remains visible. If Python is available, you can run the structural validation from the case. Even if it passes, decide sentence by sentence whether the sources support each conclusion.

Keep these files as input to the next step. Your article may differ from the reference draft, but must preserve the key limitations.

## 3. Turn the article into an eight-slide deck

Start with your completed article and fact table. Follow the [slide-deck case](/en/cases/create-a-slide-deck/) to set the audience, an approximately five-minute goal, and an eight-slide narrative. Check the layout with the title and limitations slides first, then complete the rest.

Copy the article and fact table into the slide task's input directory and say they are your versions. Do not cite your own article while assuming every conclusion in the reference draft still applies.

Deliver an eight-slide PPTX, eight previews, slide-by-slide notes, and a validation record. To finish, it must open in the presentation software environment you recorded, key text must be editable, and you must check the Chinese text and limitations on every slide. Source conflicts must remain clear after compression.

If no PPTX tool is available, save the outline and record the missing capability. This step remains unfinished until you continue in an environment with the tool. Then proceed to reuse.

## 4. Save instructions you can reuse next time

Start with the finished and checked article and slide deck. Create `workflow.md` using the template below to record the method you actually used; do not save only a final-round “continue” prompt.

```md
# From sources to presentation

## This task
- Audience and purpose:
- Input directory, source index, and immutable original files:
- Output directory and required file formats:

## Sequence
1. List facts, inferences, conflicts, and gaps before drafting.
2. Define the audience and structure, draft continuously, then revise against sources.
3. Condense the article to eight slides; check title and limitations slides first.
4. Check native text, Chinese fonts, all previews, and speaker notes.

## Acceptance
- Key facts trace back to the sources; open questions remain visible.
- Author recommendations are separate from product facts; synthetic material is not passed off as genuine testimony.
- PPTX opens and is editable; record the software and font environment while checking each slide.
- State which checks were and were not done; keep the delivery local.

## Experience this time
- Problems encountered, changes made, and how recovery was confirmed:
- Steps to retain next time:
- Facts and environment to reconfirm next time:
```

Now do a small transfer: change the audience from “individual authors trying it for the first time” to “colleagues preparing to review the materials.” Keep the same sources and regenerate only the outline. Save `reuse-check.md`, recording how the title, emphasis, and order changed and which factual boundaries stayed the same. This tests whether the template adapts to a new task; it does not claim to complete new fact research.

You are done when someone else can find the inputs and outputs in `workflow.md` and knows when the work is complete. The transfer record must name specific differences and must not continue writing for the original audience. Once the sequence is stable, read [Turn a workflow into a Skill](/en/cases/workflows/turn-a-workflow-into-a-skill/). The [Writing Skill example](/en/skills/examples/writing-skill/) includes a complete package with reusable style samples, fact tables, and conflict-handling methods; structural checks cannot replace human factual review.

## Optional: start with a task with explicit numbers

Readers interested in office analysis can first do the [weekly sales report](/en/cases/analyze-a-spreadsheet/). It includes CSV data, refunds and duplicate rows, a reference summary, and an independent check script. Afterwards, add “calculate key figures independently and explain anomaly definitions” to your acceptance checklist; there is no need to force it into the fictional product article.

After the whole path, you should have source materials, an article and fact table, an editable presentation, validation records, and reuse instructions. Reading the links or downloading the reference answers alone does not complete the exercise.
