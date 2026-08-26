---
title: Automate template
description: Repeatable tasks and reusable flows.
locale: en
source_locale: zh-CN
source_revision: 4f14d7a
translation_status: reviewed
translated_at: 2026-07-26
reviewed_at: 2026-08-26
---

# Automate template

A common automate mistake: focus on "can it run automatically" without:

- what happens on failure
- who sees results
- whether it can stop safely

This template emphasizes control when things go wrong.

## Template

```text
Goal: Automate 【repeatable task】 as 【script/Skill/scheduled job】.
Trigger: 【manual / schedule / CI】
Inputs: 【data sources, config files】
Constraints:
- Clear exit codes and log locations on failure
- No hardcoded secrets; use environment variables
- Provide dry-run mode
Acceptance:
- Expected output on 【sample input】
- Docs for how to run and troubleshoot
```

## When to use this template

- Repeatable tasks with clear rules
- Flows to script or schedule
- Adding dry-run, logs, and exit codes as guardrails

## Common misconceptions

### 1. Automation removes human judgment

Many practical automations only check, summarize, or draft.

### 2. One successful run means ready to automate

For long-running automation, also add:

- logs
- exit codes
- dry-run
- troubleshooting docs

The automate template aims for safe, sustained operation.

## Related

- [Long-running tasks](/en/prompts/long-running-tasks/)
- [Automate a daily report case](/en/cases/automate-a-daily-report/)

---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Last verified:** 2026-07-26  
**Verification basis:** This page provides an automate-task template; in-site links and template structure were rechecked, and the body does not depend on volatile facts such as product versions, pricing, or UI details.
