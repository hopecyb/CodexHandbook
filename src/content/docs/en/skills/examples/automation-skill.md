---
title: 'Example: An Automation Skill That Records Changes Only'
description: Download quiet-link-monitor and manually verify repeat checks, failure recovery, durable events, and stop behavior.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Eight state tests and a three-run CLI exercise passed. A repeated failure creates no new event, and a fix records recovery. Real scheduling, model routing, and message delivery were not tested.
  environment: Python 3.12.11 / Darwin arm64; temporary synthetic static site, standard library, no network.
  evidence:
    - label: Actual run record
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: Automation Skill, link checker, persistent-state script, broken fixture, and verification record
    license: CC0-1.0
    version: 1.0.0
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 6c758b9
---

Running a check repeatedly does not mean notifying someone every time. This Skill reuses the [link-check exercise](/en/cases/use-cases/team-automation/scheduled-link-check/) and records changes, recovery, and execution errors. It stays quiet when the result is unchanged.

[Download quiet-link-monitor v1.0.0](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## Install and rehearse manually

Put the complete directory under `.agents/skills/quiet-link-monitor/` in your practice project; do not overwrite an existing Skill with the same name. After confirming it is selectable using [the Skill guide](/en/skills/use-a-skill/), call it:

```text
$quiet-link-monitor Rehearse failure, repeated checks, and recovery using
the bundled fixtures. Work in a temporary copy, keep a separate state
file, and report event changes at the end. Do not send notifications.
```

You can run the script on its own without a model or account. It needs only the Python 3.10+ standard library:

```sh
python3 validation/test_monitor.py
```

For a manual run, copy `fixtures/broken` to your own `work-site`. From the Skill directory, run twice:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

The first run exits with 1 and records a failure event. The second still exits with 1, but `new_event` is null. Fix that same directory using `fixtures/fixed` as a reference, then run again for exit 0 and `recovered`. Do not substitute a different site path to simulate recovery; state validation will reject a scope change.

[Actual three-run CLI summary](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## What is recorded and when to stop

Keep the state file outside the checked directory. It stores each run's result, consecutive execution-failure count, and durable events. The script writes this file and an adjacent lock file; it is not completely read-only. It does not change site contents.

| Situation | Behavior |
|---|---|
| Healthy on first run | Establish a baseline; no new event |
| First broken result or change in detected problems | Save a change event |
| Same result again | No new event |
| Broken result is fixed | Save a recovery event |
| Three consecutive check execution errors | Save a stop event and pause |
| Corrupt state, lock conflict, or mismatched site | Stop immediately without overwriting original state |

A broken link is a valid check result, not an execution error. After pausing, an ordinary call will not check again. Investigate and fix the cause, then resume explicitly:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

Do not delete the lock or state automatically to get around a failure. A crashed process may leave a lock; first confirm that no process is still active. The [state and recovery guide](/downloads/skills/quiet-link-monitor/references/operations.md) lists exit codes, retention, and concurrency boundaries.

## A notification candidate is not a sent message

The script records local events only. Every `delivery` value is `not-sent`; it creates no schedule and sends no messages. Each event has an ID stable for that record, and a repeated result does not create another event for the same state.

When connecting an authorized sender, read durable undelivered events, deduplicate by ID, and save delivery acknowledgments. Reading only this run's terminal `new_event` may miss an event after a process interruption. The pack has no sender and makes no promise of exactly-once delivery across systems.

## From manual to recurring runs

Confirm the build succeeded before checking the latest output. Stop on a build failure instead of checking an old directory. Use the same site and state file on every scheduled run, and prevent concurrent writes. Trigger it manually in the target environment to check logs and stop behavior before making it recurring. The actual channel, recipients, and scope for notifications must come from existing authorization.

Real scheduling and message delivery have not been tested here. External links remain `unchecked`; a healthy local result does not mean “every link on the site works.”

## Scope and acceptance

Repeated documentation-link audits fit this Skill. General sales reports, creative writing, and automatic production installation do not. Trigger cases are design expectations, not measured model routing.

To finish the exercise, produce records of the first failure, repeated quiet run, and recovery, plus evidence of pausing and explicit resumption. The eight bundled tests checked those local state behaviors. They do not establish model judgment, network reachability, or production reliability.
