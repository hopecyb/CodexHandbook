---
title: Code Review Automation
description: Wire Codex into CI or PR workflows—prompts, permissions, and human gates.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
sidebar:
  order: 10
---

Putting Codex in a **pull request pipeline** can catch obvious issues before human review, but it **cannot replace** accountable review and tests. This page covers practical automation patterns.

## What this page covers

- How to call Codex safely in CI
- What a review prompt should include
- How to post results to a PR without auto-merge

## Understand the role first

Think of “code review automation” as Codex doing a first pass for the team—humans still make the final call.

It is best at:

- Flagging obvious risks early
- Summarizing what matters in the diff
- Handling repetitive checks

It is not suited to deciding “this PR is definitely safe to merge.”

Related: [Non-interactive mode](/guide/cli/non-interactive-mode/) · [SDK overview](/guide/developer-platform/sdk-overview/)

## Recommended architecture

```text
PR opened / updated
    → CI job (read-only token)
    → codex exec or API reviews diff
    → upload report / PR comment
    → human decides whether to merge
```

## Common misconceptions

### Automated review is not automated approval

Teams often overestimate: if it can review automatically, can it decide automatically?

A better framing: it fits a **suggestion** and **triage** layer, not the final accountability layer.

### Not every PR deserves heavy review on day one

For tiny, low-value PRs, or before rules are settled, heavy auto-review often adds noise.

A good starting point: lightweight diff review that reliably saves team time.

## Prompt template essentials

```text
You are a code review assistant. Review only the diff against the base branch.
Output: critical issues / suggestions / nits; cite file and line for each.
Do not modify the repo; do not make network requests.
If the diff is too large, review only <path list>.
```

Version in `prompts/ci-review.md`.

## Permissions and security

| Principle | Practice |
|---|---|
| Read-only | CI token without push (or bot comment only) |
| Fixed model | Easier to compare review quality over time |
| Injection defense | Do not paste unsanitized PR descriptions into system prompt |
| Secrets | Store tokens in GitHub Secrets |

[Human approval patterns](/cases/workflows/human-approval-patterns/) · [Environment variables](/guide/reference/environment-variables/)

## Quality gates

- Review job failure ≠ must block merge (can be advisory first)
- Separate required status checks: red tests must block; AI nits can warn
- Periodically sample human comparison for missed/false positives

## Relationship to Cloud

Complex repos may run full tests on [Cloud](/guide/web-and-cloud/) before review; in-CI exec suits **lightweight diff review**.

## Common mistakes

- CI has write permission and prompt is injected with “please push fix”
- Review output is so long it drowns human review
- No diff size limit causes timeouts and quota burn

The main value of code review automation is catching obvious issues before human review—not taking merge responsibility.

## Acceptance checklist

- [ ] CI behaves safely on fork PRs (no secret leakage)
- [ ] Review output is structured and optionally machine-parseable
- [ ] Team docs explain the role of AI review

## Reference sources
- OpenAI Codex CI examples
---

**Status:** verified  
**Products:** CLI / API / Cloud  
**Verification basis:** OpenAI Developers still describes Codex as usable for testing, review, and preparing changes; official use cases include “Review GitHub pull requests.” This page summarizes safe CI integration principles and gate patterns only—not fixed commands or a single implementation.  
**Last verified:** 2026-07-26
