---
title: 'Example: Automation Skill'
description: Package repeat checks or report generation as a Skill.
locale: pt
source_locale: en
source_revision: aa00f2f
translation_status: fallback
translated_at: '2026-07-28'
---

# Example: Automation Skill

## SKILL.md skeleton

```md
---
name: daily-report
description: Summarize yesterday's changes, test results, and todos into daily report Markdown. Use when the user wants a daily report, standup material, or progress summary.
---

## Process
1. Read git log (specified time range) and CI status summary
2. List completed items, blockers, tomorrow's plan
3. Output to reports/daily-YYYY-MM-DD.md
4. Do not send email or messages unless I explicitly ask

## scripts/
- scripts/collect-metrics.sh (optional)
```

## Related

- [Automate a daily report case](/cases/automate-a-daily-report/)
- [Scheduled tasks](/skills/automations/scheduled-tasks/)
---

**Status:** verified  
**Applicable products:** App / CLI / IDE / Cloud  
**Verification basis:** Illustrative skeleton for repeat summary Skills—stable workflow pattern Codex/Skills can carry, not tied to a specific automation entry point.  
**Last verified:** 2026-07-26
