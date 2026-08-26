---
title: Scenarios and case library
description: End-to-end real tasks—prep, execution, verification, failure recovery, and retrospectives.
locale: en
source_locale: zh-CN
source_revision: 6349392
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

The case library answers: **"What does running Codex end-to-end look like for this real goal?"** It complements single-topic product docs.

## Cases vs tutorials

| | Getting-started tutorials | Case library |
|---|---|---|
| Goal | Learn a button/concept | Deliver a class of real outcome |
| Structure | By product feature | By task type |
| Failure handling | Often omitted | Must be included |

## How to use

1. Pick the closest case (or use only its prep checklist)
2. Cross-check [Explore–Plan–Execute–Verify](/en/cases/workflows/explore-plan-execute-verify/)
3. After finishing, use the [case template](/en/cases/use-cases/case-study-template/) to retro—decide whether to capture as a Skill

## Starter cases

| Domain | Case | Notes |
|---|---|---|
| Software development | [Fix a bug with verification](/en/cases/use-cases/software-development/fix-a-bug-with-verification/) | Most common developer loop |
| Content creation | [Refactor docs with review](/en/cases/use-cases/content-creation/refactor-docs-with-review/) | Multi-file docs and build verification |
| Research and learning | [Competitive feature matrix](/en/cases/use-cases/research-and-learning/competitive-feature-matrix/) | Source-backed research output |
| Team automation | [Scheduled link check](/en/cases/use-cases/team-automation/scheduled-link-check/) · [Issue triage suggestions](/en/cases/use-cases/team-automation/issue-triage-suggestions/) | Light CI and ticket automation |

Copyable prompts live in repo [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts). More domain cases will be added to this library over time.

## Contribution directions

- Reproducible steps (repo, branch, commands)
- Label applicable clients and verification date
- Avoid unverifiable "first try success" narratives

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this repo's current case library structure, domain index pages, case template, and examples prompt entry; this page only navigates cases organized by real task type.
