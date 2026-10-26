---
title: "Three prompt comparisons: 12 runs and criterion-by-criterion review"
description: Practice A/B comparisons with a weekly report, an article, and a bug fix. Download fixed inputs, prompts, and record templates without assuming a longer prompt must be better.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64; Codex 26.911.61220 / build 9647; 12 independent Agent contexts; actual model and reasoning settings unknown.
  summary: Each of three A/B pairs was repeated twice. Artifacts, elapsed times, and tool errors were retained. The primary Agent reviewed the work without blinding; some logs are incomplete. These runs do not establish general effects or represent tests with real readers.
  evidence:
    - label: Criterion-by-criterion scores and limitations for 12 runs
      href: /downloads/prompt-comparison-results/review.md
    - label: Actual runs and elapsed times
      href: /downloads/prompt-comparison-results/runs.json
    - label: Later artifact checks
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: Twelve tasks, inputs, public copies of raw artifacts, logs, elapsed times, criterion-level scores, and review scripts
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: Nine fixed input files, six prompts, shared scoring dimensions, human review criteria, and a blank run template
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
source_revision: 'e6a23bb'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

The point of a comparison is to discover which requirements affect delivery, not to prove that longer prompts are better. This page provides three sets of fixed inputs and records from 12 actual runs completed on 2026-09-18. These samples mainly show differences in delivery evidence. They are too limited to establish general effects.

[Download the complete comparison materials](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [Run protocol](/downloads/prompt-comparisons/README.md) · [Blank record](/downloads/prompt-comparisons/blank-run.json)

## Three tasks, one comparison method

Within each pair, A and B use the same input and tool scope. B retains A's entire task and adds one set of explicit acceptance requirements. Any difference cannot be attributed to a single phrase in that set.

| Task | Fixed input | What B adds | What to observe |
|---|---|---|---|
| Weekly sales report | A 46-row synthetic CSV and data dictionary | Row-by-row decisions, anomaly explanations, and an independent check record | Beyond correct figures, can you trace refunds, duplicates, and zero baselines? |
| Source-backed article | Three synthetic sources deliberately containing conflicts | A fact table, open-questions list, and no unsupported choice between conflicting sources | Are unknowns preserved? Does each specific claim have source support? |
| Bug fix | Shopping cart implementation and original tests | Red test results before the fix, green results after it, logs, and a diff | Was the fix actually verified without changing tests to bypass the bug? |

[Report A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [Article A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Bug A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A may check sources and run tests on its own. B may fail. Do not treat an expectation as a result.

## Five shared scoring dimensions

A and B use the same [rubric.json](/downloads/prompt-comparisons/rubric.json): task correctness, traceable evidence, scope control, handling of uncertainty, and reproducibility. For each dimension, 0 means unmet, 1 partially met, and 2 met with evidence that can be checked. Use null for an unrun or unjudgeable result.

Every score needs specific evidence. A fluent report does not earn a high score without correct figures; an article's links do not by themselves make its facts correct; code is not verified merely because it says “tests pass.” Do not let an average hide a critical factual error.

## The 12 actual runs

[Download results and logs](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [Criterion-level scores and elapsed time](/downloads/prompt-comparison-results/review.md) · [Sampling conditions](/downloads/prompt-comparison-results/README.md)

Each task group ran in A1 → B1 → B2 → A2 order, with three different tasks in parallel per round. Each run used a new Agent context and working directory, without scoring answers. Model and reasoning settings were not explicitly overridden, so the actual labels are unknown. Directory separation relied on instructions, not OS-level isolation. The primary Agent reviewed the work without blinding; there were no independent human scores.

| Task | Two A observations | Two B observations | What these runs show |
|---|---|---|---|
| Weekly sales report | Figures, ledger, and anomaly handling were correct; both runs also checked their work proactively | Figures were correct and a check explanation was supplied; one run did not save the full calculation command | Additional requirements did not ensure complete logs |
| Source-backed article | Facts, sources, and conflicts were handled correctly, and an article was delivered | The same factual boundaries were preserved, with a fact table and open-questions list added | More material was available for review |
| Bug fix | Original tests were unchanged; three passed after the fix, but the failing pre-fix log was not saved | Original-test failures, later successes, exit codes, and diffs were retained | The verification chain was more complete, but all four runs omitted the Node version used |

The complete tables show scores of 0–2 for each of the five dimensions, without an overall ranking. The missing fact table in Article A affects the agreed reproducibility criterion; it does not mean the article itself was wrong. Bug A and B both received partial reproducibility scores, but for different reasons. The number alone does not tell the story.

Input and task-text hashes were consistent across runs. Later review recalculated the sales CSV and checked all four bug fixes with the unchanged original tests. The [reviewer checks](/downloads/prompt-comparison-results/reviewer-checks.json) are stored separately from logs of commands run by the experiment Agents.

## Keep failures and limitations in the record

- The shared sales-task prompt referred to `data-dictionary.md`, while the file was actually at `input/data-dictionary.md`. All four runs encountered this path error and then recovered. It is a defect in the materials, not an effect of A or B's acceptance requirements. The prompt was not changed mid-batch because the inputs were frozen.
- The Python command in `run-07` was summarized, but its full code was not preserved. The results package retains this gap; it does not claim that a complete command was logged at the time.
- Agents compiled their own logs; these are not complete platform audit exports. Public copies replace only local absolute paths. Hashes of original and public files are kept separately.
- Elapsed time includes tool waiting and log writing, and tasks ran in parallel. There is no human baseline or cost measurement. Model labels and reasoning settings are unknown, so the results cannot rank models by speed or time saved.

There were only two runs per variant per task. Scoring was not blind, and some scoring requirements overlap with B's reminders. The exercise shows differences in artifacts and verification evidence. It does not publish a general success rate or claim that “B wins” or “longer is better.”

## Run the comparison yourself

1. Create separate working directories for A and B. Copy identical inputs and compare their hashes. Do not give the model the scoring answer key.
2. Start a fresh task each time. Fix the model, reasoning setting, client, tool scope, and time limit; record any unknown settings honestly. Do not share results from one run with the next.
3. Agree on the number of repeats and stopping conditions in advance. Alternate A→B and B→A order. Save failures, interruptions, and retries, not just the best output.
4. Record actual output paths, model label, environment, elapsed time, tool errors, and input hash. Record human rework time separately. Do not enter zero for an unrun item.
5. Score each dimension against the same standard, preferably with variant labels hidden from the reviewer. Compare dimensions and failure types before deciding whether the extra requirements are useful.

A small set of observations applies only to these inputs and this environment. It does not establish a general success rate or prove that a particular sentence caused an improvement.

## What has and has not been verified

You can run the materials check:

```sh
python3 scripts/check_materials.py
```

Checks covered the nine fixed input files, three pairs of additive A/B prompts, and the absence of fabricated scores in the blank records. This script makes no model calls and does not test prompt effectiveness.

The 12 runs, criterion-level scores, and elapsed times have been recorded. Actual model labels, complete platform logs, and independent human review remain unavailable. The results package also contains `python3 scripts/check_results.py` to recheck saved artifacts without rerunning a model. For the full original exercises, see the [weekly report](/en/cases/analyze-a-spreadsheet/), [article](/en/cases/write-an-article/), and [developer path](/en/guide/learning-paths/developer/).
