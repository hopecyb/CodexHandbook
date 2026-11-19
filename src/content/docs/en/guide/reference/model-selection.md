---
title: Choosing ChatGPT and Codex models
description: Choose a model and reasoning effort for chat, writing, spreadsheets, coding, or research, then assess plans and actual usage.
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: Checked official model, Chat reasoning, and plan documentation. Task recommendations are editorial guidance, not measurements of model success rates, speed, or cost.
  evidence:
    - label: Work and Codex models
      href: https://learn.chatgpt.com/docs/models
    - label: Chat models and reasoning levels
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: Plans and usage
      href: https://learn.chatgpt.com/docs/pricing
locale: en
source_locale: zh-CN
translation_status: stale
reviewed_at: 2026-10-25
translated_at: 2026-10-24
source_revision: '20eb508'
---

**Try GPT‑6.1 Sol for complex work, Luna for clear small tasks, and Astra for demanding problems. In ordinary Chat, choose Instant, Thinking, or Pro.** Identify your product surface before using the relevant table.

[Work / Codex](#work-codex) · [Ordinary Chat](#chat) · [Plans and prices](/en/chatgpt-pricing/) · [Track actual usage](/en/guide/quality/usage-time-and-model-choice/)

:::note[Scope · 2026-10-24]
Models, settings, and limits vary by account, client, workspace, and rollout. This is a dated reference; recommendations are starting points, not a guarantee of account access. Check Chat, Work, and Codex menus and usage rules separately.
:::

<span id="work-codex"></span>

## Work / Codex: start with the task

These scenarios are editorial recommendations. Begin with the default reasoning effort supported by your client. Check your inputs and scope before choosing a stronger model.

| Task | Suggested starting point | When to increase effort or change models | Practice and verification |
|---|---|---|---|
| Extract fields, convert formats, make small rewrites | GPT‑6 Luna | Try Sol if clear inputs still produce missing fields or boundary errors | [Track usage and rework](/en/guide/quality/usage-time-and-model-choice/) |
| Write from several sources | GPT‑6.1 Sol | Consider Astra if source conflicts cannot be resolved or requirements are repeatedly missed | [Write an article](/en/cases/write-an-article/) |
| Analyze sales data and prepare a weekly report | GPT‑6.1 Sol | Increase effort if refund handling, deduplication, or period-over-period calculations remain wrong; verify results with independent calculations | [Sales report](/en/cases/analyze-a-spreadsheet/) |
| Fix a bug or make changes across files | GPT‑6.1 Sol | Consider Astra if dependencies across files are hard to locate or fixes repeatedly fail | [Fix and verify a bug](/en/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Research across sources with strict requirements | GPT‑6.1 Sol; consider Astra for hard problems | Increase effort if conflicting evidence cannot be reconciled or constraints are repeatedly missed | [Check the result](/en/guide/quality/) |

## Model characteristics and tradeoffs

| Model | Main role | Tradeoffs and boundaries |
|---|---|---|
| GPT‑6 Luna | Efficient work on clear, repeatable, frequent tasks | Useful for small tasks; complex judgments need closer checking |
| GPT‑6.1 Sol | A balance of capability and cost for complex work | Officially positioned near Astra at a lower cost, not identical on every task |
| GPT‑6 Astra | The strongest option for demanding work across steps | Consider when output quality matters most; extra usage may add little for simple tasks |
| GPT‑6 Sol and GPT‑5.6 models | Earlier options that may remain in your client | Keep a validated workflow if it works; compare current recommendations for new tasks |

The [official model guide](https://learn.chatgpt.com/docs/models) lists 6.1 Sol in Work and Codex. Do not infer an identically named option in ordinary Chat. Work/Codex model descriptions and the GPT‑6 label in Chat must be interpreted in their respective surfaces.

<span id="chat"></span>

## Ordinary Chat: choose a thinking level

| Option | Suggested use | Tradeoff |
|---|---|---|
| Instant | Everyday questions, translation, short rewrites | Prioritizes response speed |
| Thinking · Medium | Learning, comparing options, general analysis | A starting point for deliberate analysis |
| Thinking · High | Math, decisions with many conditions, complex code questions | More thinking time for difficult questions |
| Extra High | Particularly difficult problems needing careful checking | Use as needed, subject to plan access |
| Pro / GPT‑6 Pro | Difficult tasks and longer workflows | Powered by Astra, subject to plan and allowance |

At verification time, Chat documentation lists Medium and High for Plus, with Extra High and Pro on higher plans. Think on Free / Go should not be equated with the identically named capability on paid plans. Asking Instant to “think deeply” on Plus / Pro does not automatically increase the thinking level; use the menu. [Official Chat documentation](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## When to increase or reduce effort

- The result meets acceptance criteria: keep the setting, or try a lighter setting on the same task.
- Sources or goals are missing: fix the inputs first; more reasoning cannot supply missing evidence.
- Repeated omissions or broken logic: keep inputs fixed and change effort or model one step at a time.
- Higher settings still fail: narrow the task and check tools, permissions, and verification.

Model and reasoning effort are separate choices. Higher effort generally takes more time and tokens. Check supported settings by model and client; do not copy Chat settings directly into Codex. [Models and reasoning basics](/en/guide/foundations/models-and-reasoning/)

## Do you need a different plan?

Try free access for occasional use. Consider Plus for frequent writing, analysis, or coding. Compare Pro when you repeatedly hit limits or need additional capability or capacity. Go depends on your feature needs and local price difference.

This is a decision sequence, not a universal value ranking. **Pro plans still have model usage limits.** Check subscription fees, extra credits, and API charges separately; rate ratios are not whole-task savings ratios.

[Plan selection and price sources](/en/chatgpt-pricing/) · [Accounts, plans, and access](/en/guide/getting-started/account-plans-and-access/)

## How to assess value

Compare the same inputs, permitted tool scope, and acceptance criteria. Record waiting, failures, retries, human review, and rework separately. Prefer the lightest setting that reliably meets your criteria rather than optimizing response speed alone.

[Download and fill in usage records](/en/guide/quality/usage-time-and-model-choice/), or reuse the [three prompt comparison exercises](/en/prompts/comparison-lab/). The existing prompt experiment did not record actual model labels and **cannot support a model ranking**.

## What if the model is unavailable?

Check whether you are in Chat, Work, or Codex, then check client version, plan, workspace permissions, and when your allowance resets. Use an available model for a narrower task or save progress and wait. Selecting a model name does not grant access.

[Access troubleshooting](/en/guide/getting-started/account-plans-and-access/) · [Troubleshooting](/en/guide/reference/troubleshooting/)

## Sources and updates

Product facts come from the official sources above; task recommendations are editorial judgment. This page contains no model performance experiment. Price records are maintained separately on the pricing page; confirm your actual checkout information.

- 2026-10-24: Initial guide separating Chat from Work/Codex, with links to exercises, usage records, and price sources.
