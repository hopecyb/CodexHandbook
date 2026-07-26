---
title: Troubleshooting
description: Route symptoms to the right tutorial and product pages.
sidebar:
  order: 18
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

If something is already broken but you are unsure which category it falls into, start here.

You do not need to diagnose CLI vs IDE vs Cloud vs permissions vs prompting first. Classify by symptom, then open the right chapter.

## What you can do here

- Where to triage when something fails
- Minimal starting point when you cannot classify the error
- Problems that are install, permissions, context, or task-description issues

# Troubleshooting

| Symptom | Go to |
|---|---|
| Install failure | [Desktop troubleshooting](/guide/desktop-app/troubleshooting/) · [CLI troubleshooting](/guide/cli/troubleshooting/) · [IDE troubleshooting](/guide/ide/troubleshooting/) |
| Login/auth failure | [Sign-in](/guide/getting-started/sign-in-and-authentication/) |
| Unsure which client | [Choose your client](/guide/choose-your-client/) · [Feature comparison](/guide/reference/feature-comparison/) |
| Bad or out-of-scope results | [First task case](/cases/first-task/) · [Prompt debugging](/prompts/prompt-debugging/) · [Undo](/guide/getting-started/undo-and-recover/) |
| Context confusion | [Keep context focused](/guide/context/keep-context-focused/) |
| Permissions/sandbox questions | [Permissions and sandbox](/guide/permissions-and-sandbox/) |

## When you do not know where to look

On first troubleshooting pass, pick one:

- Cannot start at all
- Starts but errors mid-run
- No error, but wrong results
- Not an error—unclear entry or how to task

Sorting into these four speeds up the rest.

## Common misconceptions

### 1. Troubleshooting requires expert terminology first

No.

First pass is about broad category—not memorizing jargon.

### 2. No error message means not a troubleshooting problem

"Wrong results," "keeps drifting," and "do not know how to start" all belong here too.

### 3. When stuck, click random pages

Usually better to pause, classify the problem, then open one targeted page.

Triage before repair.

More reference: [FAQ](/guide/reference/faq/) · [Error reference](/guide/reference/error-reference/) · [Official Codex docs](https://developers.openai.com/codex)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Symptom routing only to install, login, permissions, context, and result-quality chapters; linked paths checked; page does not depend on specific error codes, versions, or UI copy.  
**Last verified:** 2026-07-26
