---
title: Five failure recovery exercises with run logs
description: Use actual CLI logs to diagnose source, citation, input binding, directory scope, and state file failures, changing one variable at a time.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Five deliberately designed failures were run, each repaired by changing one variable and then rerun successfully. Original input hashes stayed unchanged. These are neither production incidents nor an experiment measuring model success rates.
  environment: Python 3.12.11 / Darwin arm64; temporary copies and synthetic inputs, with no network or model calls.
  evidence:
    - label: Summary of the five actual runs
      href: /downloads/failure-recovery/validation/summary.json
    - label: Verification scope
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: Five reproducible failures, supporting scripts and inputs, before-and-after logs, and run instructions
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
source_revision: fc91872
translation_status: draft
translated_at: 2026-09-20
---

Save the error first. Identify which layer failed, then change just one variable and rerun. This page demonstrates that process with five fixed inputs. The author deliberately created the failures; the logs come from actual command-line runs, not customer incidents.

[Download the complete recovery exercise](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## Reproduce the failures first

You need only the Python 3.10+ standard library, with no account or network access. Run this from the extracted package:

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

The output directory must not already exist, so that prior evidence cannot be overwritten. The script uses temporary copies. Each of the five failing runs should exit with a nonzero code; each repaired run should exit with code 0, with the original input unchanged. Every log includes the command, exit code, standard output, and standard error. Temporary paths are normalized to `<WORK>`.

## 1. Source hash mismatch

**Symptom:** `FAIL: Source changed: P`, exit code 1.

**Diagnosis:** An unintended passage was added to a fixed source file, while the source index stayed the same. Compare against the original material first; do not simply update the hash to make the check pass.

**Only change:** Restore the known original bytes of that one source file. Leave the other materials, article, and index alone. The rerun exits with code 0.

[Failure log](/downloads/failure-recovery/validation/01-source-changed-before.json) · [Recovery log](/downloads/failure-recovery/validation/01-source-changed-after.json)

If a real source has actually changed, recheck its version, content, and the conclusions drawn from it, and keep a new source record. Restoring the older file in this exercise is appropriate only because the edit was known to be accidental.

## 2. Article citation absent from the fact table

**Symptom:** `FAIL: Unmapped or unused claim ID`, exit code 1.

**Diagnosis:** The article uses F99 where it should use F1; the fact table has no F99. Checking P1 confirms that the sentence still belongs to F1.

**Only change:** Correct the mistyped ID to F1 and rerun; the command exits with code 0. Do not invent a new fact-table entry to cover an unknown citation.

[Failure log](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [Recovery log](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

A correct ID does not prove that the wording is supported by its source. Check the sentence against the source as well. See the [writing Skill](/en/skills/examples/writing-skill/).

## 3. Triage proposal does not match its input

**Symptom:** `FAIL: Stale input hash`, exit code 1.

**Diagnosis:** The input hash in the proposal does not match the current fixed Issue. This exercise deliberately corrupts the proposal hash to trigger the input-binding check.

**Only change:** Replace it with the complete reference proposal already checked against the current input. Leave the input and schema unchanged, then rerun; the command exits with code 0. No model was run to triage the Issue again, and the old conclusion was not reused by merely recomputing its hash.

[Failure log](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [Recovery log](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

When a real Issue changes, reassess how the change affects the conclusion. See the [Issue triage case](/en/cases/use-cases/team-automation/issue-triage-suggestions/).

## 4. Reusing a state file for another directory

**Symptom:** `State version/site mismatch`, exit code 3.

**Diagnosis:** The state file is bound to the fixed site, but the command points `--site` at the broken site. The error occurs in a scope check; it does not mean the links themselves suddenly failed.

**Only change:** Point `--site` back to the original directory, keeping the state file and other arguments. The rerun exits with code 0. The erroneous run did not overwrite existing state.

[Failure log](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [Recovery log](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

If you really need to monitor another site, create separate state for it. Do not delete the old state to bypass the scope protection.

## 5. Corrupt state JSON

**Symptom:** JSON parsing fails; the runner reports `stopped` and exits with code 3.

**Diagnosis:** The state file was truncated. The history and deduplication baseline can no longer be read safely. After refusing to continue, the program preserves the damaged content rather than silently resetting to an empty state.

**Only change:** Restore the known good backup saved before this exercise. Leave the command and site unchanged. The rerun exits with code 0.

[Failure log](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [Recovery log](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

Without a backup, first preserve the damaged file and inspect the run records, then rebuild state manually. Deleting it outright may lose events awaiting delivery and produce duplicate candidates. See the [automation Skill](/en/skills/examples/automation-skill/).

## Apply the method to your own task

Save the input version, actual command, and complete error. Decide whether the failure concerns input, structure, scope, or state. Write down one cause to test, change only the relevant variable, then rerun the same check and keep the result. After recovery, verify that the original goal was met; an exit code alone is not enough.

These exercises do not cover real sign-in failures, a Skill that fails to trigger in a client, network restrictions, or approval failures. For those, return to the [symptom-based troubleshooting index](/en/guide/reference/troubleshooting/) and preserve details of the actual environment. Do not treat the script behavior shown here as a guarantee of client behavior.
