---
caseCategory: team
directoryOrder: 110
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "OpenAI Developers' current Codex use cases still include repeatable automation scenarios such as \"Automate bug triage\" and \"Turn feedback into actions\"; this page defines the daily report as \"fixed-format Markdown + clear exit code + reusable script or Skill\"—a stable automation workflow pattern, not dependent on any specific integration."
  checkedAt: "2026-07-26"
title: Automate a daily report
description: Turn repetitive summarization into a reusable script or Skill.
locale: en
source_locale: zh-CN
source_revision: 2149e0a
translation_status: reviewed
translated_at: 2026-10-24
reviewed_at: 2026-08-26
---

## Meta information

| Field | Content |
|---|---|
| Audience | Teams |
| Client | CLI |
| Estimated time | 1–2 hours (first version) |

## 1. Goal and background

**Goal:** Automatically generate daily summaries of changes, test results, and todo lists.

**Success criteria:** One command or Skill produces Markdown in a fixed format; failures have clear exit codes.

## 2. Recommended prompt

```text
Goal: Generate a daily report Markdown for yesterday through today.
Content: git log summary, CI status (if readable), open PR list.
Output: reports/daily-YYYY-MM-DD.md
Constraints: Read-only git; do not push; provide scripts/generate-daily.sh for repeat runs.
```

## 3. Capture for reuse

- [Automation Skill example](/en/skills/examples/automation-skill/)
- [Scheduled tasks](/en/skills/automations/scheduled-tasks/)
