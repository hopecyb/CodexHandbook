---
title: 'Example: A Writing Skill with Sources and a Style Sample'
description: Download a complete source-backed writing pack to practice claim mapping, style revision, preserving conflicts, and human verification.
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Source and citation structure checks and eight regression checks passed. The article and style received an author self-check; trigger cases are design expectations. Model writing quality and automatic routing were not tested.
  environment: Python 3.12.11 / Darwin arm64; three original synthetic sources, temporary copies, and no third-party dependencies.
  evidence:
    - label: Verification scope and author review record
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: Skill, style sample, synthetic sources, reference draft, claim map, revision diff, and structure checks
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: cbaec37
---

This Skill turns provided sources into an article whose claims can be traced back to them, while preserving style requirements, evidence, and unresolved points. It suits source-backed writing and factual review; a single typo fix does not need the full workflow.

[Download source-backed-writer v1.0.0](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [View SKILL.md](/downloads/skills/source-backed-writer/SKILL.md) · [Installation instructions](/downloads/skills/source-backed-writer/README.md)

## What is in the pack

| Material | Purpose |
|---|---|
| Three synthetic sources and hash index | Practice with fixed input without treating a fictional product as real purchasing information |
| Style sample and designed counterexample | See how concrete actions replace unsupported outcome promises |
| Outline, initial draft, final draft, and revision diff | See factual, structural, and wording changes separately |
| Seven mapped claims and unresolved list | Separate source support, author inference, and unconfirmed claims |
| Positive and negative trigger cases, scripts, and verification record | Define scope and the limits of the checks |

The materials reuse the fictional tool “拾页” from the [source-backed article exercise](/en/cases/write-an-article/). You can finish that exercise first, then use a Skill to save the writing method.

## Install and call it for the first time

Put the complete directory at `.agents/skills/source-backed-writer/` in your practice project, with `SKILL.md` at the first level. If a Skill with that name exists, compare before overwriting it. See [using a Skill](/en/skills/use-a-skill/) for discovery; after confirming it is selectable in your client, invoke it explicitly:

```text
$source-backed-writer Read the three sources under sources/ in this teaching
pack and write an introduction for individual writers following
references/style.md. Save article.md, claim-map.csv, and unresolved.md under
my-output/. Preserve the synthetic identities. Do not publish.
```

Reading and writing do not require Python. The optional structure check uses only the Python 3.10+ standard library. Run these from the extracted Skill directory:

```sh
# Check the bundled reference draft
python3 scripts/check_article.py
# Check your own draft in the pack's format
python3 scripts/check_article.py --output my-output
# Reproduce eight checks in temporary copies
python3 validation/test_checks.py
```

This page ran the scripts, but did not test automatic discovery or a model call in a particular client. For a real task using your own output format, check against your own contract rather than forcing it into the teaching pack's format.

## How style affects the article

The [style sample](/downloads/skills/source-backed-writer/references/style.md) presents a designed comparison:

> Counterexample: 拾页 is an all-purpose marvel that handles any format effortlessly and doubles your productivity.

Revise it to: “The brief lists only Markdown and plain text. First try a small copy of your notes, then return to the source text cited by the summary.” The first sentence comes from the source; the second is author advice. Distinguish them in the claim map. Follow the user's actual tone or structure requirements when they differ.

[View the reference final draft](/downloads/skills/source-backed-writer/solution/article.md) · [Claim map](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [Revision diff](/downloads/skills/source-backed-writer/solution/revision.diff)

## Handling conflicts and missing information

The product brief's P3 says diagnostic upload is off by default, while change-log section C2 says it is on for new installations. The final draft presents both accounts and does not assume the later-dated one is correct. The upload fields are unspecified and remain on the [unresolved list](/downloads/skills/source-backed-writer/solution/unresolved.md).

The synthetic interview contains no timing or fixed evaluation sample, so it cannot support “twice as efficient” or an accuracy figure. Recover by removing unsupported numbers, restoring qualifications, and updating the claim map. Searching for a plausible answer about the fictional product is not a fix.

## Acceptance and limits of the checks

After writing, check each of these:

- Key claims have traceable locations; facts, advice, and unknowns are distinct.
- Synthetic identities, input limits, and the unresolved conflict remain in the article.
- Style edits did not remove necessary qualifications or change the structure the user requested.
- After citation formatting passes, compare every sentence with its source; do not merely check that IDs exist.

The script detects changed source hashes and malformed citation structure, but cannot decide whether the source semantically supports a claim. The pack deliberately tests a false capability promise that still passes structure checks when given a valid ID. Human factual review remains necessary.

## When it should not trigger

A typo fix, Git patch review, or software feature implementation should not automatically become a full article assignment. Completing an article does not grant publication permission. The [trigger cases](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json) are design expectations, not a report of routing success rates.

Then return to the [creator path](/en/guide/learning-paths/creator/) and record the style and acceptance criteria you used in your own reusable brief.
