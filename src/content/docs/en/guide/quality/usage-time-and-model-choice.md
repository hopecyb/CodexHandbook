---
title: Usage, time, and model choice
description: Track subscription allowance, API costs, waiting, and rework separately. Compare models on the same tasks without treating consumption as a measure of quality.
contentType: guide
audiences: [beginner, creator, developer, team]
level: intermediate
outputs: [csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: Official usage, API pricing, and reasoning billing explanations were checked. The templates and estimate are teaching examples; there are no measured claims about model speed, cost, or time saved.
  evidence:
    - label: Official Codex usage and pricing
      href: https://learn.chatgpt.com/docs/pricing
    - label: Official API pricing
      href: https://developers.openai.com/api/docs/pricing
    - label: Reasoning model guide
      href: https://developers.openai.com/api/docs/guides/reasoning
assets:
  - path: /downloads/usage-log/usage-log-1.0.0.zip
    purpose: Templates for run costs and duration, allowance snapshots, and source notes
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
source_revision: '8b68d92'
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-10-24
---

First decide what you are recording: the allowance left on an account, the cost of an API call, time spent waiting, or time spent reviewing and reworking. These have different units and cannot stand in for one another.

[Download the log templates](/downloads/usage-log/usage-log-1.0.0.zip) · [Instructions (Chinese)](/downloads/usage-log/README.md)

These are shared source materials. The CSV field names are English; the accompanying instructions are in Chinese.

## Track four separate measures

| Measure | What to record | Common misreading |
|---|---|---|
| Subscription allowance | The window, remaining percentage, and reset time shown in the current interface | Converting a remaining percentage directly into dollars or a fixed number of tasks |
| API cost | Actual usage for the call, model, applicable prices, and the bill | Using subscription pricing as an API rate, or treating an estimate as an actual charge |
| Waiting time | Start, end, queueing, and retries for the same task | Recording only the final successful run and omitting time lost to failures |
| Human effort | Review and rework time, measured separately | Counting all model waiting time as human labor saved |

The [official pricing explanation](https://learn.chatgpt.com/docs/pricing) says task usage depends on the model, context, reasoning, tools, and caching. Message-count estimates are not fixed limits. Check the usage dashboard for your current allowance; in a CLI session, use `/status`. API-key usage is billed at API rates.

An allowance snapshot may include other tasks or a window reset. A 5% decrease between two snapshots does not prove this task always uses 5%, and it cannot support a promise about how many more runs someone can make.

## Confirm the billing basis before estimating API cost

Look up the applicable price by model, input/cached/output category, and service conditions. Then calculate using actual usage, adding any other billed items separately. This handbook does not maintain a second fixed price list. See [API pricing](https://developers.openai.com/api/docs/pricing).

Reasoning tokens are billed as output tokens. Check whether a usage field already includes the reasoning portion before adding values, to avoid counting it twice. Check which reasoning settings a model supports in the [reasoning model guide](https://developers.openai.com/api/docs/guides/reasoning).

Teaching example: suppose a call uses 10,000 input and 2,000 output tokens, with no cached tokens or other charges. At **fictional** rates of $2 per million input tokens and $10 per million output tokens, the estimate is $0.04. This illustrates unit conversion; it is neither a quote for a model nor a real bill.

## Compare settings using the same set of tasks

Choose tasks with clear acceptance criteria and establish a baseline using settings currently available to you. Hold inputs, tool permissions, project instructions, and evaluation methods constant. Change only one major factor at a time: the model or the reasoning setting.

Compare correctness, boundaries, evidence, and rework item by item, not just response time. If a lighter setting does not reliably meet acceptance criteria, determine whether the failure comes from missing material, unclear scope, or insufficient reasoning before increasing the setting. A higher setting does not replace source checks or tests.

This is an evaluation method recommended by the handbook, not a measured claim that one model always wins. Use the [three prompt comparisons](/en/prompts/comparison-lab/) and [workflow evaluation samples](/en/guide/quality/workflow-evaluation/) to record your own observations.

## Record the sampling conditions

The [run log](/downloads/usage-log/runs.csv) records the input hash, actual model label, client, reasoning setting, billing route, time, retries, result, and evidence of cost. The [allowance snapshot log](/downloads/usage-log/allowance-snapshots.csv) separately records the window and reset time.

Keep failures and interruptions. Record human review and rework separately. Leave unknown fields blank and explain why; entering zero would falsely imply no usage. Use account aliases, and keep keys, account details, and private logs out of public materials.

The current downloadable sheets contain no measured runs. Without a matching human baseline, do not calculate a percentage of time saved. Without repeated samples, do not claim a stable speed advantage. Shorter model waiting time may still be a poor trade if it causes more rework.

## What to do when nearing a limit

Save the work completed, open items, and a way to resume. Check whether the task is stuck in repeated retries or reading irrelevant material. Narrow nonessential scope according to the goal, while keeping quality and safety acceptance checks. Do not skip critical checks just to finish before an allowance runs out.

If you need to continue, check your current allowance and billing route before choosing how. This article does not switch to API billing, buy credits, or change account settings. Teams can use the [two-week pilot path](/en/guide/learning-paths/team/) to record why a setting was chosen and when to revert.

For current model options, surface differences, and task recommendations: [Model selection: find a starting point](/en/guide/reference/model-selection/).
