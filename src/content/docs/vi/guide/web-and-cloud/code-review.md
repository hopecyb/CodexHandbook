---
title: Cloud code review
description: Reviewing diffs, PRs, and automated review suggestions from Cloud tasks.
locale: vi
source_locale: en
source_revision: f609c3e
translation_status: fallback
translated_at: '2026-07-28'
---

Cloud can produce changes for you, but it does not take merge responsibility on your behalf.

After a Cloud task finishes, **human review** remains the last gate before merge. This page explains how to review remote Agent output and connect it with GitHub PRs, CI, and Skill-based review.

## What's covered

- How Cloud PR review differs from local PR review
- Review checklists and common risk points
- Using Codex to assist review without giving up accountability

## Why Cloud review needs extra attention

Remote Agents are more likely to:

- Touch unrelated files while "fixing" something
- Produce large lockfile or generated-file diffs due to environment differences
- Show tests as run without covering critical logic
- Write polished PR descriptions you have not verified

Cloud review is not lighter—it needs sharper focus.

## Where review sits in the flow

```text
Cloud task completes → push branch → open PR
        ↓
CI runs (tests, lint, security scans)
        ↓
Human reviews diff + optional Agent-assisted review
        ↓
Approve merge (subject to branch protection)
```

Opening PRs: [Create Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Minimum bar before full review

Before a deep pass, confirm at least four things:

1. Did the change scope drift?
2. Was critical logic actually changed as intended?
3. Were tests or verification really run?
4. Were sensitive data or dangerous changes introduced?

Until those are confirmed, "task done" is not "safe to merge."

## Human review checklist

Aligned with [review diffs](/guide/quality/review-diffs/); Cloud adds extra focus:

| Check | Why |
|---|---|
| Unrelated files changed | Remote Agent may "refactor while here" |
| Lockfile / generated files | Environment differences cause large diffs |
| New dependency sources | Supply chain risk |
| Tests actually cover new logic | Agent may write empty tests |
| Permission and auth changes | Privilege escalation, hard-coded tokens |
| Matches issue scope | Prevent scope creep |

## Common misconceptions

### 1. CI green means ready to merge

CI only means "these automated checks did not fail." Whether requirements were understood, scope stayed correct, and risk is acceptable still needs human judgment.

### 2. A complete PR description means I can skim the diff

No.

Descriptions help you get context faster; they do not verify facts for you.

### 3. Running Codex review again equals done

Assisted review is useful, but accountability stays with people.

## Using Codex to assist review (not replace you)

Acceptable:

- Run a `$pr-review` Skill locally or in Cloud on a new PR (see [Create a Skill](/skills/create-your-first-skill/))
- Ask for opinions grouped as blockers / suggestions / nits
- **You** confirm each blocker

Not acceptable:

- Merging without reading the diff because the Agent said it looks fine
- Letting the Agent approve a protected branch on its own

See [verification and human review](/guide/foundations/verification-and-human-review/)

## Suggested review order

1. PR title and description—confirm the goal
2. Main logic diff
3. Tests, generated files, config
4. Automated comments and follow-up suggestions

This avoids drowning in noise upfront.

## Driving revisions from review comments

After review comments land on a PR:

1. Start a new Cloud or local task: "Address only the following review comments; do not expand scope"
2. Attach comment links or numbers
3. Push new commits to the same PR
4. Re-run CI and skim the incremental diff

On GitHub: [GitHub integration](/guide/integrations/github/)

## Combining with Automations

- Run a review Skill automatically when a PR opens (comment only, no merge)
- See [scheduled and triggered tasks](/skills/automations/scheduled-tasks/)

## Common mistakes

- Skipping security review because Cloud is "isolated"
- Merging a huge diff because "CI is green"
- Pasting unsanitized production logs into review comments
- Treating "I did not spot issues" as "there are no issues"

## Acceptance checklist

- [ ] CI is green and you understand any retry history
- [ ] At least one person read the main logic diff
- [ ] Scope matches the issue/task description
- [ ] No Secrets committed to the repo

## References

- stormzhang `26-git-github.md`
- KimYx0207 Review/PR sections
- [Human approval patterns](/cases/workflows/human-approval-patterns/)

---

**Status:** outdated  
**Applicable products:** Cloud / GitHub  
**Review note:** The principle that Cloud output still needs human review holds, but this page describes Cloud PRs, auto-open PR behavior, remote review rhythm, and notifications as a concrete current workflow; those integration shapes change quickly and need a rewrite against the latest official flow.  
**Last verified:** 2026-07-26
