---
title: 'Example: A Review Skill with an Explicit Diff Scope'
description: Download the complete scoped-review pack, distinguish staged, unstaged, and branch review, and reproduce a Git scenario that is easy to miss.
contentType: skill
audiences: [developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Seven regression checks for the diff collector and Skill structure checks passed. Trigger examples and review findings were designed by the author; no multi-model routing or defect-detection-rate experiment was run.
  environment: Python 3.12.11 / Git / Darwin arm64; temporary synthetic repositories, no third-party dependencies.
  evidence:
    - label: Actual run scope and limitations
      href: /downloads/skills/scoped-review/validation/record.md
assets:
  - path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
    purpose: Skill, collector, scope guide, synthetic inputs, reference review, and regression tests
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: e29d1b3
---

Decide what is being compared before reviewing. This Skill prevents “current uncommitted changes” from being mistaken for “commits relative to main,” and prevents a clean-looking working tree from hiding an error in the index.

[Download scoped-review v1.0.0](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [View SKILL.md](/downloads/skills/scoped-review/SKILL.md) · [Installation and usage guide](/downloads/skills/scoped-review/README.md)

## What it can do

| User request | Scope collected | Not included |
|---|---|---|
| Review staged changes only | HEAD → index | Unstaged contents |
| Review unstaged changes only | Index → working tree | Staged patch |
| Review current uncommitted changes | Keep the two patches separate; list new files | Read new-file contents separately |
| Review commits relative to a named branch | Unique merge base → HEAD | Local uncommitted contents |

It does not guess `main` as a default. A missing baseline produces an error instead of silently changing scope. The collector supplies evidence; judging defects still requires the relevant code and tests.

## Install and call it for the first time

You need Python 3.10+, Git, and a local practice repository with at least one commit. Put the extracted `scoped-review/` under the target project's `.agents/skills/`, with its entry point at `.agents/skills/scoped-review/SKILL.md`. Compare any existing Skill with that name before overwriting.

Follow the [official guide](https://learn.chatgpt.com/docs/build-skills) for local Skill discovery and entry points. Confirm it is selectable after installation, then invoke it explicitly:

```text
$scoped-review Review the currently uncommitted code changes in this practice
repository. Do not modify files. List findings first, then explain coverage
of staged, unstaged, and new files.
```

This is a teaching pack and does not install itself into your personal configuration. If you prefer not to install it yet, run the bundled script directly to inspect the scope it collects.

## Reproduce a scenario that is easy to miss

The synthetic input is in `fixtures/scenario.json`:

1. The baseline discount formula is correct.
2. Stage a wrong formula: `amount * (1 - percent)`.
3. Restore the correct formula in the working tree: `amount * (1 - percent / 100)`, without staging that restoration.

At this point, looking only at `git diff HEAD` may show no change, but committing the index would still introduce the bug. For `amount=40, percent=10`, the staged version produces -360 instead of 36.

A correct review reports both that the staged version is wrong and that the unstaged patch fixes it. The full [author reference](/downloads/skills/scoped-review/fixtures/expected-review.md) also explains why branch mode should not be mixed into this local problem; it is not actual model output.

## Run the bundled checks

In the extracted Skill directory, run:

```sh
python3 validation/test_scopes.py
```

Seven tests in temporary Git repositories check scope, the missed-review regression, rejection of an invalid base, a list of new files, and that the reviewed repository is not changed. A successful run exits with 0. The tests do not write to your real project.

To use the collector on a repository:

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

Replace the path with a repository you are authorized to review. Branch mode additionally requires `--base`. Its JSON output may contain private code and is not uploaded automatically. See the [scope guide](/downloads/skills/scoped-review/references/scopes.md) for the full commands.

## When it should not trigger

Article editing and feature implementation are outside this Skill. Interpret a vague “review this” using context to determine scope; ask only if it remains unclear. The pack's [trigger cases](/downloads/skills/scoped-review/fixtures/trigger-cases.json) describe seven expected requests. Automatic routing has not been measured.

## Completion criteria and limits

- The report names the actual snapshot, baseline, and file scope reviewed.
- Findings give locations, trigger conditions, effects, and evidence; style preferences are not treated as blockers.
- Relevant untracked file contents were inspected or clearly marked unreviewed. Binary files, ignored files, and submodules are not claimed as covered.
- State which checks ran and which did not. No findings is not a guarantee of no defects.
- The review ends with a report; it does not edit, commit, or push automatically.

Use the [developer path](/en/guide/learning-paths/developer/) review and handoff templates to save the result. The earlier short `pr-review` skeleton is still useful for understanding structure; this pack uses a different name to avoid replacing a personal version.
