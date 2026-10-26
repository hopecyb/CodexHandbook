---
title: "Team path: a two-week pilot, sampling, and a rollout decision"
description: Start with a low-risk task and use ten working days to gather evidence about roles, run records, review, rollback, and limited rollout.
contentType: path
audiences: [team]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: The two-week path, six templates, and three exception scenarios were checked through an author tabletop exercise. No real team pilot, independent review, or productivity gain was measured.
assets:
  - path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
    purpose: Pilot charter, task list, review sheet, incident and rollback plan, decision form, and ten-day schedule
    license: CC0-1.0
    version: 1.0.0
sidebar:
  order: 30
locale: en
source_locale: zh-CN
source_revision: '3b46738'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

Start with one limited task whose results can be checked. Use two weeks to gather evidence for whether wider use is warranted. Here, two weeks means ten working days. If there are too few tasks, extend the pilot; do not declare success simply because the calendar ran out.

[Download the two-week pilot template pack](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [Instructions](/downloads/two-week-pilot/README.md) · [Ten-day schedule](/downloads/two-week-pilot/templates/06-schedule.md)

## Before starting: choose a task and owners

Consider [issue triage suggestions](/en/cases/use-cases/team-automation/issue-triage-suggestions/) or a [local link check](/en/cases/use-cases/team-automation/scheduled-link-check/). Run it manually with synthetic input first, keeping human review and output local.

Assign an owner, operator, reviewer, system administrator, and security contact, with substitutes. One person may hold multiple roles, but decisions involving external writes or security incidents should receive an independent review. If no reviewer is available yet, limit work to synthetic inputs and local drafts, and record it as an author self-check.

Prerequisites: know how to save logs, judge results, stop execution, and state which data and actions are allowed. If permissions are unclear, finish local preparation first rather than expanding into production systems on your own.

## D1–D2: establish the charter and run the task manually

Fill in the [pilot charter](/downloads/two-week-pilot/templates/01-charter.md) and [task list](/downloads/two-week-pilot/templates/02-tasks.csv): business problem, manual baseline, input scope, permitted actions, exclusions, review method, stop conditions, and record retention.

Agree on concrete correctness criteria before running the task. Do not adopt a blanket threshold such as “80% pass means ready for launch.” Review high-risk results individually; document the sampling method and reason for other tasks in the charter.

Completion condition: one manual run has an input, output, actual check, and owner. The team can distinguish success, failure, and pause. Only then move to a limited sample.

## D3–D5: record runs and hold the first review

Use the [review sheet](/downloads/two-week-pilot/templates/03-review.csv) to keep each run, failure, interruption, input version, configuration, evidence, and reason for accepting, modifying, or rejecting the result.

Following the [workflow evaluation method](/en/guide/quality/workflow-evaluation/), examine triggering, boundaries, format, and quality separately. Record model wait time and human rework separately. When comparing with the manual baseline, check that task difficulty and inputs are comparable; leave anything that cannot be compared as unknown.

On D5, examine failure modes and sampling coverage. Pause for serious boundary failures, add reproduction and regression samples, and preserve failure records. Do not hide a problem by lowering the standard.

Completion condition: the first results have review records that can be revisited, and each issue has an owner and status. If a serious issue remains unresolved, stay at this stage.

## D6–D8: expand within limits and rehearse rollback

Add samples or task types within the approved scope. Change only one major factor at a time; do not expand permissions, replace the model, and change the task simultaneously. Record configuration versions so changes can be attributed.

Use the [incident and rollback template](/downloads/two-week-pilot/templates/04-incident.md) to rehearse pausing tasks, checking active processes and queues, preserving evidence, restoring a known-good version, and verifying it. Stopping new runs does not undo external effects that already happened.

You can first use the [failure recovery lab](/en/guide/reference/troubleshooting/failure-recovery-lab/) in an isolated directory. If real scheduling, permission revocation, or message delivery has not been tested, record that gap. A local rehearsal is not proof of production rollback.

Completion condition: the team can explain who pauses the work, how to confirm it stopped, how deduplication state is preserved, and when resumption is allowed. Then move to independent review and a decision.

## D9–D10: decide to expand, continue, or stop

Ask the reviewer to inspect critical results, sample bias, and unresolved issues. Complete the [pilot decision](/downloads/two-week-pilot/templates/05-decision.md).

| Decision | What to explain |
|---|---|
| Limited rollout | Which tasks, people, and permissions the evidence supports; ongoing sampling and rollback ownership |
| Continue the pilot | Which samples or recovery evidence are missing, the owner, and the next review date |
| Stop | How scheduling will be disabled, permissions handled, records preserved, and unfinished events managed |

Address each D1 criterion. Do not use a favorable overall average to offset a serious error. If independent review is missing, the sample is too small, or the baseline is not comparable, state the limitation and do not publish a team productivity claim.

Completion condition: a decision records the owner, evidence, scope, and next step. Even a rollout applies only to the tasks and conditions that were verified; it does not authorize every team member to automate every kind of work.

## How the templates were checked

The author performed [three tabletop exercises](/downloads/two-week-pilot/references/tabletop-review.md): a correct result that exceeded its permissions, an insufficient sample, and undelivered events remaining after scheduling was disabled. These check whether the templates cover decision points; they are not real team case studies or results from a two-week run.

When updating project rules later, read [project customization](/en/guide/customization/) and [definition of done](/en/guide/quality/definition-of-done/) and write concrete lessons from the pilot into the shared workflow.
