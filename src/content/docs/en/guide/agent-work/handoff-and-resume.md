---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cross-checked against current public OpenAI Developers guidance on long-running tasks, persistent goals, and Codex collaboration. This page keeps only the stable method that a handoff summary should help the next session continue; it does not treat a product-specific handoff button or workflow as a fixed rule."
  checkedAt: "2026-07-26"
title: "Handoff and resume"
description: "Continue unfinished work across sessions."
sidebar:
  order: 40
locale: en
source_locale: zh-CN
source_revision: '1ee17e9'
translation_status: reviewed
reviewed_at: 2026-10-25
translated_at: 2026-09-20
---
This page addresses a common question:

> **If the work is not finished this time, how do I continue next time?**

Without a handoff, reopening the task can cause three problems:

- You forget how far the work got.
- Codex does not know which constraints still apply.
- The new conversation scatters the old context and repeats earlier detours.

![Illustration: one agent hands handoff notes and a progress card to another, with a turning calendar and a bookmarked task board behind them](/illustrations/handoff-and-resume.webp)

## What a handoff preserves

Handoff and resume means leaving an instruction card for whoever continues the work. That “person” could be:

- You a few hours later.
- Another newly opened task.
- Another collaborator.
- Codex taking over the next part.

A handoff is therefore not a long recap. It preserves **the information actually needed to keep working**.

## What to leave at minimum

A handoff note should include at least:

- The goal and current state.
- Files already changed.
- Constraints still in effect.
- One specific next action.
- How to verify it.

If possible, add one more point:

- Why the work stopped here.

Then the next person sees more than “halfway done”: they can tell whether time ran out, approval is needed, or a real blocker appeared.

## Common misconceptions

### 1. Forwarding the entire old conversation counts as a handoff

Usually it does not. The old conversation contains exploratory paths, failed attempts, and judgments that no longer apply. What matters is **what remains true now**.

### 2. The more you write, the better

Two extremes make a handoff hard to use:

- Too short, with essential information missing.
- Too long, with no clear next action.

For continuing work, a **short, precise, actionable** note is often best.

### 3. Writing only “a little remains; finish it”

That says almost nothing. Turn “finish it” into a specific action, such as:

- Run `pnpm build`.
- Continue writing `guide/verification.md`.
- Check how the title image looks on `/en/guide/foundations/local-vs-cloud/`.

## Resume more reliably

After pasting the note into a new thread, do not immediately make broad changes. First:

1. Confirm whether the goal has changed.
2. Check that the current files match the handoff description.
3. Start with the “one specific next action” instead of expanding the task again.

This avoids relying on old context that may have been compressed, omitted, or distorted.

A good handoff does not retell history. It lets whoever opens the task next know where things stand, what to do next, and how to verify completion.
