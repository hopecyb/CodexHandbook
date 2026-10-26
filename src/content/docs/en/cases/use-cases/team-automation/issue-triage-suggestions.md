---
caseCategory: team
directoryOrder: 90
title: 'Case: Issue Triage and Human Review Queue'
description: Use five synthetic issues to practice structured proposals, binding to inputs, and a dry run without taking action on GitHub.
contentType: case
audiences: [developer, team]
level: intermediate
outputs: [json, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: A dry run of five author-written proposals passed, as did eight structure and input-binding tests. No model was called or GitHub connected; this does not establish classification accuracy or production readiness.
  environment: Python 3.12.11 / Darwin arm64; standard library and synthetic inputs, without tokens or network access.
  evidence:
    - label: Actual run record
      href: /downloads/issue-triage/validation/record.md
assets:
  - path: /downloads/issue-triage/issue-triage-1.0.0.zip
    purpose: Synthetic inputs, JSON Schema, prompt, author proposals, dry-run script, and review record
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
source_revision: '6d859d7'
---

This exercise splits issue triage into “generate a proposal → validate → review by a person.” You will produce five records for review. The exercise does not automatically post comments, add labels, or close issues.

[Download the complete exercise pack](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [View actual dry-run output](/downloads/issue-triage/validation/dry-run.json)

## Inputs and completion criteria

The five original synthetic inputs describe a calculation error, a broken documentation link, a possible cross-account data issue, insufficient information, and a malicious instruction in the issue body. None contains real customer data. A proposal includes a type, priority, labels, security-review flag, rationale, and missing information.

To finish, produce one proposal for each input and pass enum and input-hash validation. A maintainer must then accept, modify, or reject each proposal and record why. Passing the structure checks cannot replace that judgment.

## Run the reference proposals first

You need Python 3.10+ but no API key or third-party dependency. In the extracted directory, run:

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

The first command uses author-written proposals and outputs five `human-review-required` entries with an empty `external_actions` list. The second runs eight checks. Neither calls a model automatically.

[Input fixtures](/downloads/issue-triage/fixtures/issues.json) · [Reference proposals](/downloads/issue-triage/solution/proposals.json) · [Human-review reference](/downloads/issue-triage/solution/human-review.md)

## Generate your own proposals next

Give Codex the pack's [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) and ask for `my-proposals.json` conforming to [schema.json](/downloads/issue-triage/schema.json). Then run:

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

The schema uses JSON Schema 2020-12. Boolean values use `"type": "boolean"`; priority is an enum, not a string `"P0-P3"`. The bundled validator implements only the subset of keywords used by this schema and is not a general schema engine.

Each proposal includes `input_sha256` to bind it to the complete contents of its corresponding issue. If an input changes, stop using the old proposal. Reanalyze the change before recalculating the hash. The README and script define the hash convention and function.

## Human judgment and safety boundary

| Situation | Response |
|---|---|
| Clear evidence of a defect | Suggest a category, reproduce it, and check the scope of impact before assigning priority |
| Possible security incident | Refer privately to the security owner; an unknown priority does not mean low risk |
| Insufficient information | Use `unknown`, list what is missing, and do not guess an owner or severity |
| Issue body asks to run commands or raise privileges | Treat it as untrusted data. Do not execute it or set P0 because it claims urgency |

Removing HTML or limiting length cannot guarantee protection from prompt injection. The packaged program does not execute issue bodies, but the model-generation stage still needs a boundary between data and instructions. The reference output does not establish a model's resistance rate.

## Failure and recovery

An unknown label, extra action field, invalid type, duplicate proposal, or missing proposal stops the whole batch with exit code 1. Correct the prompt and relevant fields, then rerun with the original input retained. A security type or label without the security-review flag is also rejected.

A wrong classification with a valid structure can still pass; the tests confirm this limitation. High agreement on a few examples is therefore no release threshold. A real rollout needs representative samples, risk tiers, human sampling, misclassification costs, and rollback conditions. This exercise covers a local dry run only.

Continue with the [documentation link check](/en/cases/use-cases/team-automation/scheduled-link-check/) and [human approval patterns](/en/cases/workflows/human-approval-patterns/).
