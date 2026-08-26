---
title: Case study template
description: Unified structure for writing and retrospecting Codex cases—easier team capture and comparison.
locale: en
source_locale: zh-CN
source_revision: a430fba
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

Copy this template to create a new case page or internal retro doc.

Before copying, delete sections your actual readers and deliverables don't need.

---

## Metadata

| Field | Fill in |
|---|---|
| Case title | |
| Audience | Beginner / Developer / Creator / Team |
| Client used | App / CLI / IDE / Cloud |
| Estimated time | |
| Verification date | YYYY-MM-DD |

## 1. Goal and context

- **Business goal:** one sentence
- **Success criteria:** observable and verifiable
- **Out of scope:** explicit exclusions

## 2. Preparation

- Account/permissions/repo state
- Context files needed (`AGENTS.md`, designs, etc.)
- Risks: data, production, secrets

## 3. Workflow (EPXV)

### Explore

- Input prompt (summary)
- Key findings

### Plan

- Step list
- Human confirmation points

### Execute

- Actual change scope
- Deviations from plan and why

### Verify

- Automated tests
- Manual checks
- Evidence (screenshots, logs, links)

## 4. Failure and recovery

- What went wrong
- How to undo or fix
- What you'd change in prompts/config if you redid it

## 5. Capture

- Whether to write `AGENTS.md` / Skill / Automation
- Three recommendations for the team

## 6. References
- Official doc links
- Whether this case adapts an external tutorial (task type only)
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** Cross-checked against this handbook's verified EPXV workflow, failure recovery, project instructions, and case library structure; this page only provides a unified template for writing and retrospecting cases—not specific product behavior.
