---
title: Delegate and follow up
description: Hand tasks to Cloud from App, IDE, or phone—and review, approve, and iterate after you leave your desk.
locale: pt
source_locale: en
source_revision: 8ccb103
translation_status: fallback
translated_at: '2026-07-28'
---

**Delegation** sends a task to Cloud to run in a remote environment; **follow-up** is checking progress, adding context, approving risky steps, and requesting changes while a task runs or after it finishes. This is the core workflow for making progress away from your desk.

## What's covered

- When to delegate to Cloud instead of running locally
- Differences across entry points
- How to follow up effectively and avoid "fire and forget"

## How this flow works

Cloud tasks usually look like:

- You explain the task clearly
- It runs remotely
- You may need to add constraints or approve mid-flight
- After completion you still review diffs, PRs, and decide next steps

Cloud only moves execution off your machine—you still own follow-up and decisions.

## Who it's for

| Scenario | Suggestion |
|---|---|
| Long builds/tests | Delegate to Cloud; keep working locally |
| Commute / between meetings | Check status on phone; approve critical steps |
| Standardized environment needed | Cloud + [environment config](/guide/web-and-cloud/cloud-environments/) |
| Quick local experimentation | Prefer [desktop App](/guide/desktop-app/) or [IDE](/guide/ide/local-task-workflow/) |

## When delegation makes sense

If unsure:

- Still iterating and want to steer live: stay local
- Long runtime, want to walk away, or need a shared environment: delegate to Cloud

## Pre-delegation checklist

- [ ] [GitHub connected](/guide/web-and-cloud/connect-github/); branch strategy is clear
- [ ] Task description includes goal, scope, prohibitions, and acceptance (see [task anatomy](/prompts/task-anatomy/))
- [ ] Required unpushed local commits are pushed—or do the work locally instead
- [ ] Secrets and [outbound access](/guide/web-and-cloud/internet-access/) are ready

## Common misconceptions

### 1. After delegating, I can ignore it

That wastes the most time. The later you catch drift, the more rework.

### 2. Follow-up means "nudge for status"

More valuable follow-up:

- Fill missing context
- Narrow scope
- Reject unsafe operations
- Request fixes after completion

### 3. Delegation vs local is either/or

A common real pattern:  
**explore locally → delegate the long run → finish locally.**

## Delegation by entry point (conceptual)

| Entry | Characteristics |
|---|---|
| [Desktop App · local and Cloud tasks](/guide/desktop-app/local-and-cloud-tasks/) | Same project view; switch local/Cloud |
| [IDE · Cloud tasks](/guide/ide/cloud-task-workflow/) | Carries editor selection and open-file context |
| Web / mobile | Light status, approvals, short follow-ups |

Buttons and naming depend on the current product.

## Recommended follow-up rhythm

```text
Delegate → confirm environment started → (optional) check logs mid-flight
    → approve risky steps → on completion review diff/PR
    → if unsatisfied: add instructions or start a follow-up task
```

A practical minimum:  
**After sending, look once mid-flight and once at the end.**

### Mid-flight intervention

- **Add context**: if files or constraints were missing, say so in a follow-up message to preserve history
- **Narrow scope**: if drifting, say "stop changing X; only do Y"
- **Approve**: see [human approval patterns](/cases/workflows/human-approval-patterns/)—prefer slow and explicit over bulk-approving unknown shell

### After completion

- Review diff in the [create PR](/guide/web-and-cloud/create-pull-requests/) flow
- Validate with [Cloud code review](/guide/web-and-cloud/code-review/) or local branch checkout
- Need more changes: delegate again on the same PR or take over locally

## Notifications

Enable [desktop notifications](/guide/desktop-app/notifications/) or mobile push so tasks do not stall waiting for approval. Teams should agree who can approve production-related repos and when.

## Common mistakes

- Vague delegation leading to large unrequested refactors
- Half-done local edits while Cloud starts from remote main
- Never checking mid-flight; discovering wrong direction at the end
- "LGTM" on a PR without running tests
- Treating "remote execution" as "remote responsibility"

## Acceptance checklist

- [ ] Successfully started and completed one Cloud task from at least one entry point
- [ ] Added an effective constraint while the task was running
- [ ] Produced a PR or branch reviewed by a human diff pass

## References

- OpenAI Codex Cloud task docs
- stormzhang `10-cloud.md`, `27-mobile.md`
- KimYx0207 CX-10
- codex.bozhouai.com App/Cloud collaboration sections

---

**Status:** outdated  
**Applicable products:** Cloud / App / IDE / Mobile  
**Review note:** This page depends on current product behavior for starting or following Cloud tasks from App, IDE, Web, and phone—capabilities that have changed quickly; align line by line with official docs before upgrading from `outdated`.  
**Last verified:** 2026-07-26
