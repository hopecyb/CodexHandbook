---
title: Create Pull Request
description: From Cloud tasks to reviewable PRs—descriptions, scope, and human merge gates.
locale: pt
source_locale: en
source_revision: e679e5f
translation_status: fallback
translated_at: '2026-07-28'
---

On your first Cloud workflow, the task may be "done" while changes are not yet in a state that's easy to inspect and discuss. On teams, that handoff usually happens through a **Pull Request**.

A PR is a reviewable change proposal.

It centralizes what changed, why, and how it was tested—where Cloud deliverables land for the team.

## What's covered

- End-to-end expectations from Cloud task to PR
- What PR descriptions should include for humans and CI
- When not to auto-open a PR

## When to open a PR

If others need to see the change, CI must run, or the work must merge to the main branch, do not stop at "branch updated"—move to a **reviewable PR**.

## Recommended workflow

```text
Connect GitHub → clarify issue/goal → Cloud task (confirm plan) → push branch → open PR → human review + CI → merge
```

Prerequisite: [Connect GitHub](/guide/web-and-cloud/connect-github/)

## Why auto-merge is not the default

PRs exist to give people and automation a checkpoint—not only to upload code.

Common pattern:

- Codex can help open the PR
- A human decides whether to merge

That preserves a safety gate even if the task drifted.

## Task prompt essentials

```text
Goal: Fix the login timeout described in #42
Branch: fix/42-login-timeout
Scope: packages/auth and related tests only
Done: Open PR to main; do not merge
PR description must include: reason, change summary, test commands and results, risks and rollback
```

Aligned with [define done](/prompts/define-done/) and [task anatomy](/prompts/task-anatomy/).

## A good PR answers four questions

1. Why did you make this change?
2. What exactly changed?
3. How did you verify it?
4. What risks, limits, or gaps remain?

Without those, reviewers must reconstruct context themselves.

## PR quality checklist

- [ ] Title states **what** changed, not "update code"
- [ ] Links the issue number
- [ ] CI passes or explains known failures
- [ ] Diff size is acceptable; split oversized PRs
- [ ] No secrets, no unrelated formatting storms
- [ ] Screenshots or logs for UI/behavior changes

## Human gate

Even if Codex opens the PR, **merge** should default to a human (or a controlled bot under branch protection):

See [human approval patterns](/cases/workflows/human-approval-patterns/)

## Common misconceptions

### 1. Stuffing unrelated changes into one PR

Hard to review and hard to revert.

### 2. Saying "fixed" without how you verified

Reviewers cannot tell "tested" from "probably fine."

### 3. Letting Codex touch main directly

May work for solo experiments; too risky for shared repos.

## Review automation

- Use a Skill or `codex exec` in CI for **supplementary review comments**
- Auto-merge needs separate governance—not the beginner default path

KimYx0207 CX-10 covers Review/PR; confirm capabilities against official docs.

## Common mistakes

- One PR with multiple unrelated features
- Description says "AI-generated changes" with no test notes
- Merging to main without review

## Further reading

- [GitHub integration](/guide/integrations/github/)
- [Review diffs](/guide/quality/review-diffs/)
- [Desktop App: diffs and comments](/guide/desktop-app/diffs-comments-and-review/)

---

**Status:** outdated  
**Applicable products:** Cloud / Web  
**Review note:** "Cloud output goes to a PR for human review" remains sound, but this page describes PR entry points, automation behavior, and Cloud delivery rhythm concretely; without line-by-line verification of current official PR and Cloud GitHub integration, it should not be marked `verified`.  
**Last verified:** 2026-07-26
