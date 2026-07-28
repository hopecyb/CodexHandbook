---
title: "Beispiel: Automations-Skill"
description: Wiederholte Checks oder Report-Erzeugung als Skill kapseln.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Beispiel: Automations-Skill

## SKILL.md-Skelett

```md
---
name: daily-report
description: "Fasst gestrige Änderungen, Testergebnisse und Todos zu einer Tagesbericht-Markdown zusammen. Nutzen bei Tagesbericht, Stand-up-Material oder Fortschrittsübersicht."
---

## Ablauf
1. git log (Zeitraum) und CI-Status-Zusammenfassung lesen
2. Erledigtes, Blocker, Plan für morgen listen
3. Nach reports/daily-YYYY-MM-DD.md schreiben
4. Keine E-Mails/Nachrichten, außer ich verlange es ausdrücklich

## scripts/
- scripts/collect-metrics.sh (optional)
```

## Verwandt

- [Täglicher Report automatisieren](/cases/automate-a-daily-report/)
- [Geplante Aufgaben](/skills/automations/scheduled-tasks/)
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Illustratives Skelett für wiederholte Zusammenfassungs-Skills; stabiles Workflow-Muster unter Codex/Skills, ohne konkreten Automations-Einstieg.  
**Zuletzt geprüft:** 2026-07-26
