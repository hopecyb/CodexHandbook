---
title: Cloud tasks in the IDE
description: Delegating Cloud tasks from the IDE, following status, and reviewing remote output.
locale: de
source_locale: en
source_revision: 9e4d19c
translation_status: fallback
translated_at: '2026-07-28'
---

Some IDE integrations let you **delegate tasks to Cloud**. Work runs in a standardized remote environment while you keep editing locally or walk away. The flow matches pure Cloud/Web—only the entry point is in the editor.

## What's covered

- When to send a Cloud task from the IDE vs purely local
- What to prepare before and after delegation
- Bringing remote diffs back for local review

## Good fits

| Prefer Cloud | Stay local |
|---|---|
| Heavy installs, hard-to-reproduce environments | Quick two-line edits |
| Need branch push / open PR | GitHub not connected |
| Long runs with phone approval notifications | Uncommitted sensitive drafts on machine |

Concept: [local vs cloud](/guide/foundations/local-vs-cloud/)

## When this workflow helps

Common pattern:

- You work in the IDE habitually
- But the task runs better in a remote environment

You still work in the IDE; execution has moved remote.

## Prerequisites

- [ ] [GitHub connected](/guide/web-and-cloud/connect-github/)
- [ ] Cloud [environment](/guide/web-and-cloud/cloud-environments/) and [Secrets](/guide/web-and-cloud/secrets-and-variables/) configured if needed
- [ ] Local changes committed or explicitly "remote branch is source of truth"

**The IDE cannot make Cloud see unpushed commits on your machine.**

## Common misconceptions

### 1. "Run in Cloud" from the IDE carries everything on my machine

No.  
Remote tasks see the remote repo, remote environment, and what you explicitly attach.

### 2. Because the entry is in the IDE, it behaves like a local task

Not quite.  
Launch location is IDE; execution boundary, environment, and visibility are still Cloud rules.

### 3. Remote completion equals reviewed and approved

Remote done only means it finished there—not that local review, tests, and sign-off are complete.

## Recommended flow

```text
1. Write task in IDE (goal, branch, constraints, acceptance)
2. Choose "Run in Cloud" or equivalent (per product UI)
3. Confirm plan (if plan mode enabled)
4. Leave or keep working locally → check progress in notifications/panel
5. When remote finishes: review diff in Web/App → open PR or pull branch locally
6. Run tests locally + human review → merge
```

PR details: [Create Pull Request](/guide/web-and-cloud/create-pull-requests/)

## A practical first-time sequence

1. Confirm local changes committed—or intentionally excluded
2. Confirm GitHub, Secrets, branch ready
3. Delegate with clear goal, scope, and acceptance
4. Review diff when remote completes
5. Add local tests and human review

The core difference from local IDE tasks: execution environment is remote.

## Relation to desktop App delegation

[Local and Cloud tasks](/guide/desktop-app/local-and-cloud-tasks/) in the desktop App share the same Cloud backend; difference is mainly **entry UI and attached context** (IDE may include current selection summary).

## Security boundaries

- Cloud task permissions bounded by GitHub connection scope and org policy
- Do not paste production keys in task descriptions; use [Secrets](/guide/web-and-cloud/secrets-and-variables/)
- Still require [human review](/guide/web-and-cloud/code-review/) before merge

## Common mistakes

- Keep editing the same file locally after delegation → conflicts with remote branch
- No branch name → remote pushes to a shared branch
- Treat Cloud output as "accepted" and skip CI

## References

- stormzhang `10-cloud.md`, `09-ide.md`
- KimYx0207 CX-10 Cloud

---

**Status:** outdated  
**Applicable products:** IDE / Cloud  
**Review note:** This page describes IDE-to-Cloud delegation, diff handoff, and local follow-up as concrete current behavior; official docs do not yet verify that IDE Cloud delegation experience line by line—better `outdated` until formal IDE/Cloud documentation is available.  
**Last verified:** 2026-07-26
