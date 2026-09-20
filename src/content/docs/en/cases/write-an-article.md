---
caseCategory: creation
directoryOrder: 20
title: Write a Source-Backed Article from Three Documents
description: Practice mapping facts, handling conflicts, and revising with a product brief, synthetic interview, and change log; download the complete exercise pack.
contentType: case
audiences: [creator, beginner]
task: source-backed-writing
level: beginner
estimatedMinutes: 50
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Three author-created synthetic sources and seven key claims were checked one by one; structure checks passed. This was an author self-check, without a real model comparison experiment or a second human reviewer.
  evidence:
    - label: Product brief (synthetic)
      href: /downloads/source-backed-article/sources/01-product.md
    - label: Synthetic interview
      href: /downloads/source-backed-article/sources/02-interview.md
    - label: Change log (with unresolved conflict)
      href: /downloads/source-backed-article/sources/03-changelog.md
    - label: Author check record and verification boundary
      href: /downloads/source-backed-article/validation/record.md
assets:
  - path: /downloads/source-backed-article/source-backed-article-1.0.0.zip
    purpose: Three sources, prompts, initial and final drafts, claim map, revision diff, and validator
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /en/cases/
  label: Choose a hands-on task
next:
  link: /en/cases/create-a-slide-deck/
  label: Turn the article into a presentation
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: e2bb5ea
---

The goal is a short Chinese-language article whose every key claim can be traced back to the sources. You will handle conflicting descriptions, separate supported facts from author inferences and unresolved questions, then revise a deliberately flawed draft.

Level: beginner. The estimated 45–60 minutes is an editorial estimate, not timed with readers. You should be able to give Codex local files and read a Markdown draft. Optional structure checks require Python 3.10+.

[Download the complete exercise pack v1.0.0 (ZIP)](/downloads/source-backed-article/source-backed-article-1.0.0.zip)

All materials were created for this handbook. The product “拾页” and interview subject “Xiaolin” are fictional; they are not a real product or real user testimonial.

## What you will finish with

The reference final draft follows “check one summary before deciding whether to expand use.” It covers input boundaries, a small trial, summary checks, and open questions.

| Deliverable | Purpose |
|---|---|
| `outline.md` | Reader's question and article sequence |
| `article.md` | Chinese-language draft with numbered facts |
| `claim-map.csv` | Seven key facts or recommendations, source IDs, section locations, and evidence types |
| `unresolved.md` | Questions the sources cannot answer |
| `revision.diff` | Actual text difference between the designed draft and final version |

[View the reference article](/downloads/source-backed-article/solution/article.md) · [View the claim map](/downloads/source-backed-article/solution/claim-map.csv)

## Download and prepare

Extract and open the `source-backed-article` folder. Read `brief.md` and `sources/index.csv`. The CC0 1.0 license allows modification and redistribution. You can leave `solution` unopened until you have made your own version.

The three sources are P (product brief), I (synthetic interview), and C (change log). They have stable section IDs such as P1, I2, and C3. Cite a specific section, not merely “the sources.”

## 1. Organize facts and conflicts first

```text
Read brief.md, sources/index.csv, and the three sources it lists. First list
directly supported facts, missing information, and conflicting statements.
Include a source ID and section for each. Do not use the internet to fill in
facts about this fictional product. Do not turn the synthetic interview into
a real user testimonial. Do not resolve conflicts automatically by document
date. Deliver the fact sheet before writing the article.
```

The exercise deliberately preserves one conflict: P3 says diagnostic upload is off by default, C2 says it is on for new installations, and C3 explicitly says there is no maintainer correction. State that the answer is unconfirmed rather than choosing the newer document and claiming the issue is resolved.

## 2. Write continuously within the defined scope

The pack's `prompts/02-outline-and-write.md` defines the audience and four-part structure: what it can do, how to try it, what must be checked, and what remains unresolved. Once that structure is agreed, the writing can proceed without pausing after each section.

Write all outputs into `my-output/` and preserve the input sources. Mark key facts with IDs such as `[F1]`; record them in the claim map with these columns:

```text
claim_id,article_section,claim,source_id,locator,evidence_type,confidence_note
```

Evidence types are limited to “supported by source,” “author inference,” and “unconfirmed.” Trying a few copied files is an author recommendation, not a product promise or required procedure.

## 3. Fix facts before tone

`solution/draft.md` is a counterexample designed by the author, not actual model output. It deliberately asserts unsupported PDF/image support, fully offline operation, guaranteed results, and a real user testimonial.

| Draft problem | Revision | Why |
|---|---|---|
| “Supports PDFs and all kinds of images” | Change to Markdown and plain text | P1 defines the input scope |
| “Fully offline; diagnostics off by default” | Present the conflict and list an open question | P3 and C2 conflict, and upload details are missing |
| “Xiaolin proves accuracy and time savings” | Preserve the synthetic identity; give no performance figure | I3 has no timing or fixed evaluation sample |
| “An all-purpose tool that effortlessly boosts efficiency” | Describe concrete inputs, steps, and checks | Remove exaggeration without adding facts |

See the [revision diff](/downloads/source-backed-article/solution/revision.diff) and [revision notes](/downloads/source-backed-article/solution/revision-notes.md). Polishing the tone while retaining false capability claims does not complete the review.

## 4. Check structure, then read each source line by line

With Python 3.10+ available, run this from the exercise directory:

```sh
python3 validation/check.py --output my-output
```

The script checks the hashes of the three sources, numbered claims in the article, source sections, and the unresolved-questions file. The bundled reference draft passes. When F99 was added to a temporary copy, the script rejected it.

**Passing structure checks does not establish factual correctness.** Open the source for every claim and decide whether it supports the current sentence and whether conditions such as “only” and “unconfirmed” survived. A synthetic quote presented as a real testimonial is wrong even when its reference ID exists.

If you cannot run the script, open the three source files and check each claim-map entry and wording manually. Do not state that an unrun check passed.

## Recovery when something fails

- Missing file: Check the extracted directory and source index before making up content.
- Missing citation ID: Add an accurate mapping or remove an unsupported claim; do not erase legitimate uncertainty.
- Conflicting sources: Present both accounts and say who must supply what evidence. Do not choose based on date, a majority vote, or confident wording.
- Promotional-sounding article: Remove unsupported promises of results first, then describe concrete actions and limits.

## Completion criteria

Key claims can be located, author advice is marked separately, conflicts and gaps remain visible, and synthetic identities remain labeled. Keep the deliverables local; do not publish automatically.

Next, [turn the finished draft into an editable eight-slide presentation](/en/cases/create-a-slide-deck/). That exercise includes its own inputs, PPTX, PDF, eight previews, and verification record. If you follow both exercises, prefer your own completed and checked article as the input to the second.
