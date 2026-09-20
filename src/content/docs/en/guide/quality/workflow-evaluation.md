---
title: "Evaluate workflows: separate triggering, boundaries, format, and quality"
description: Evaluate four types of Skill using 20 designed samples and separate record fields. Do not present structural checks or a few successful examples as an overall success rate.
contentType: guide
audiences: [developer, creator, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Seven tests of the evaluation record checker passed. All 20 samples remain unrun design expectations; there are no conclusions about model performance, automatic routing, or time spent.
  environment: Python 3.12.11 / Darwin arm64; standard library and temporary checker inputs; no model calls.
  evidence:
    - label: Scope of record checker tests
      href: /downloads/workflow-evaluation/validation/record.md
assets:
  - path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
    purpose: Twenty evaluation samples, a blank record, scoring method, and record checker
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
source_revision: 9ea3ecc
translation_status: draft
translated_at: 2026-09-20
---

A workflow can select the right Skill yet state a fact incorrectly. It can also produce a correct result while taking an unauthorized action. Combining these outcomes into one “success rate” can hide the problem that actually needs fixing.

[Download the evaluation kit](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20 samples](/downloads/workflow-evaluation/samples.json) · [Blank record](/downloads/workflow-evaluation/records-template.json)

## Record five kinds of observations separately

| Dimension | Evidence to examine | What cannot replace it |
|---|---|---|
| Triggering | Actual invocation trace, including samples that should and should not trigger | A similar tone in the output, or a successful explicit invocation |
| Boundaries and refusal | Unauthorized requests were not carried out, while legitimate parts were completed where possible | Refusing every task |
| Format | Required files, fields, and types | Text that merely looks complete |
| Task quality | Source support for each claim, correct calculations, effective fixes, and coverage | Valid JSON or a script exiting with code 0 |
| Time and rework | Actual elapsed time and a separate record of human rework | A subjective “fast” rating, or entering zero for unmeasured work |

For the first four dimensions, use `pass`, `partial`, `fail`, `not-applicable`, or `unobserved`. Record time as a number separately. Preserve unknown and unrun outcomes rather than guessing a score. If a sample ran but a dimension could not be observed, use `unobserved` and explain why. Use `not-applicable` only when a dimension truly does not apply; it must not conceal a missing observation.

## What the samples cover

There are five samples each for review, writing, research, and link monitoring: a positive trigger, an unrelated task, an authorization boundary, an output format check, and a critical quality scenario. The author designed all 20 samples. Every current record is `not-run`.

The quality scenarios check for a staged error obscured by a working-tree restoration, an article that drops conflicting source material, research that omits an unusable source, and a monitor that sends duplicate notifications or fails to recover. Inputs use the [four complete Skill packages](/en/skills/examples/); the evaluation kit does not duplicate them. Record the package version and hash when you run a sample.

## How to run an evaluation

1. Fix the model, client, reasoning setting, tool permissions, project instructions, and input package version. Mark any setting you cannot see as unknown; do not guess its background value.
2. Run each sample in an isolated task and keep the request and tool trace. For trigger tests, use natural language without invoking `$skill` explicitly. An explicit invocation is a test of execution capability.
3. Retain successes, failures, interruptions, and retries. Mark interruptions as `interrupted`; do not remove them from the sample set.
4. Give an evidence path and reason for each judgment. Use synthetic material for safety samples without actually sending data. A format script can check fields, but claims of factual quality still need to be checked against the source.
5. Where possible, have another reviewer score the results without seeing configuration labels. If only the author performs the check, say so; do not describe it as blind review or agreement among reviewers.

When combining this with the [three prompt comparisons](/en/prompts/comparison-lab/), apply the same scoring rules to A and B. Do not award B a higher score in advance just because its prompt is longer.

## Check that records are complete

Run these inside the package using the Python 3.10+ standard library:

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

The default template reports 20 unrun samples and sets `performance_claim` to null. It does not count the template as a success rate.

The record checker verifies that samples are not missing, unrun samples have no fabricated results, duration types are valid, completed records have scores and evidence files, and paths stay within the allowed directory. It cannot determine whether logs are genuine, scores are fair, or results are semantically correct. Temporary test records are checker fixtures, not model observations.

## Decide whether to adopt a workflow

Report the denominator, failures, unknowns, and representative errors separately by workflow, sample type, and environment. A high score on another dimension cannot offset a safety-boundary failure. A complete format cannot justify a key conclusion without evidence.

Agree on acceptance conditions based on task risk before running the evaluation; do not keep lowering the bar after seeing the results. After revising a workflow, rerun affected samples and retain the old records so you can distinguish a fix from sample leakage.

This kit has no actual model evaluation results yet. It provides a method, samples, and a recording mechanism. It does not conclude which model is best or what success rate it achieves.
