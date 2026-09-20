---
title: 'Example: A Research Skill That Separates Conflicts from Missing Evidence'
description: Download a complete research pack and use fixed synthetic sources to practice source status, conflicting evidence, unresolved questions, and traceable reporting.
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Local source checks and eight regression tests passed. The reference report received an author source check; model routing, research quality, and network failures were not measured.
  environment: Python 3.12.11 / Darwin arm64; standard library, three synthetic sources, and one deliberately missing local file.
  evidence:
    - label: Actual check scope and limitations
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: Research Skill, fixed sources, evidence table, report, and source-status checker
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: cf2b232
---

A source that will not open, a source that says nothing about a fact, and two sources that disagree each need different treatment. This Skill preserves those distinctions so readers know which conclusions can be checked and which still need evidence.

[Download evidence-research v1.0.0](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [Installation instructions](/downloads/skills/evidence-research/README.md)

## Fixed question and materials

The pack reuses the fictional tool “拾页” from the [article exercise](/en/cases/write-an-article/). Investigate its input formats, default diagnostics setting, and upload fields. Three original synthetic sources are included; a fourth maintainer note in the catalog is deliberately missing. Do not search the real web for this fictional product or invent an answer.

| Evidence status | Example in this pack | How to report it |
|---|---|---|
| `supported` | P1 lists only Markdown and plain text | State the supported scope and location; do not claim you tested the product |
| `conflict` | P3 says off by default; C2 says on by default | Present both and preserve gaps in version and conditions |
| `unknown` | Diagnostic upload fields are not listed | Say what is missing; do not guess what gets uploaded |
| `unavailable` | The local file for M was not provided | Preserve the failed source and its impact; do not claim to have read it |

[Reference report](/downloads/skills/evidence-research/solution/report.md) · [Evidence table](/downloads/skills/evidence-research/solution/evidence.csv) · [Output format](/downloads/skills/evidence-research/references/evidence-format.md)

## Install and invoke

Put the complete directory under `.agents/skills/evidence-research/` in your practice project, with `SKILL.md` as its entry point. Do not overwrite a custom Skill with the same name. After confirming it is selectable in your client using [the Skill guide](/en/skills/use-a-skill/), invoke it:

```text
$evidence-research Using this pack's sources/catalog.json, determine whether
the input scope, default diagnostics setting, and upload fields of 拾页 1.2
can be confirmed. Write my-output/report.md and evidence.csv, identifying
conflicts and sources that cannot be opened. Preserve the synthetic identity;
do not search real websites for this fictional product.
```

The pack's `fixtures/trigger-cases.json` includes positive and negative examples: source comparisons and evidence checks fit; creative poetry and simple file counting do not need a research workflow. These are design expectations; automatic triggering has not been measured.

## Check sources and report

Optional checks require Python 3.10+ with no third-party dependencies. From the extracted directory, run:

```sh
# Print each source's actual status
python3 scripts/check_evidence.py --inspect-only
# Check the reference report
python3 scripts/check_evidence.py
# Check a report made in the pack's format
python3 scripts/check_evidence.py --output my-output
# Run regression checks in temporary copies
python3 validation/test_checks.py
```

The expected reference result is P/I/C `available` and M `missing`, with four evidence entries passing structure checks. Exit code 0 means the check completed and the structure conforms; it does not mean every source was available. Read each status, especially with `--inspect-only`.

The checker detects changed content hashes, missing or unreadable files, and files without an expected hash. An unavailable source must not be used as read evidence or silently disappear from the report. The script handles local files only; it does not test HTTP status or webpage availability.

## Recover after failure

- **Missing file:** Check the path. If the source truly was not supplied, retain its unavailable status and deliver the remaining supported conclusions.
- **Changed content:** Compare versions and diffs, then recheck citations. Do not merely update the hash to make the check pass.
- **Conflicting evidence:** Compare versions, installation conditions, and applicable users. If unresolved, keep the question open rather than choosing by date alone.
- **Missing fact:** List the fields or explanation needed from the maintainer. Do not present advice as a confirmed fact.

You do not need to resolve questions for which the fixed inputs have no answer. If a real research task authorizes finding replacement sources, record why you chose them and what you actually accessed.

## Completion criteria and limits

The report should cover the research questions, sources read, sources that failed, evidence for each conclusion, and the next evidence to seek. The author checked the reference report against the fixed sources, but it has not been reviewed by an independent reader or second reviewer.

The eight script tests also expose a blind spot: a false claim of “supports every format with perfect accuracy” can pass a structure check when it carries a valid citation. The script cannot prove semantic support or decide whether two passages truly conflict. Read each source before delivery.

Next, use the [writing Skill](/en/skills/examples/writing-skill/) to turn checked conclusions into an article while preserving conflicts and unknowns.
