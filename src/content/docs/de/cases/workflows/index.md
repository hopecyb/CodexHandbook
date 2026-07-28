---
title: Workflow-Methoden
description: Wiederholbare Kollaborationsmethoden — nicht an eine einzelne Produkt-UI gebunden, mit Fokus auf Prüfpunkte und Abnahme.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


[Prompts](/prompts/) zeigen, wie man **formulieren** soll; Workflows zeigen, wie man **eine ganze Sache organisiert**. Die Methoden in diesem Kapitel gelten für App, CLI, IDE und Cloud.

## Warum Workflows nötig sind

Externe Tutorials erzählen oft „ein Gespräch reicht“; in echten Projekten ist es häufiger:

```text
Erkunden → Planen → Ausführen → Überprüfen → (ggf.) Übergabe oder Automatisierung
```

Ohne Prüfpunkte entstehen leicht: falsche Verzeichnisse, keine Tests, Fehl-Merges, verlorene Schlussfolgerungen nach erschöpftem Kontext.

## Kern-Workflows

| Workflow | Welches Problem |
|---|---|
| [Erkunden—Planen—Ausführen—Überprüfen](/cases/workflows/explore-plan-execute-verify/) | Allgemeine Hauptkette für die meisten Aufgaben |
| [Zuerst brainstormen, dann bauen](/cases/workflows/brainstorm-before-building/) | Divergieren und konvergieren, wenn die Lösung noch offen ist |
| [Spezifikationsgetriebene Arbeit](/cases/workflows/specification-driven-work/) | Zuerst abnahmefähige Spezifikation, dann implementieren |
| [Testgetriebene Arbeit](/cases/workflows/test-driven-work/) | Tests zuerst treiben die Implementierung |
| [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) | Wann stoppen, wann freigeben, wann ablehnen |
| [Zuerst diagnostizieren, dann fixen](/cases/workflows/diagnose-before-fixing/) | „Raten und reparieren“ vermeiden |
| [Prüfung vor dem Merge](/cases/workflows/review-before-merge/) | Strukturierte Prüfung vor dem PR-Merge |
| [Recherche mit Quellen](/cases/workflows/research-with-sources/) | Suche, Vergleich und Quellenüberprüfung |
| [Artefakt zuerst](/cases/workflows/artifact-first-work/) | Zuerst Liefergegenstände vereinbaren, dann Schritte ableiten |
| [Multi-Agent-Koordination](/cases/workflows/multi-agent-coordination/) | Parallelität und Arbeitsteilung |
| [Lange Aufgaben verwalten](/cases/workflows/long-running-task-management/) | Prüfpunkte und Exit-Kriterien über Sitzungen hinweg |
| [Fehlerwiederherstellung](/cases/workflows/failure-recovery/) | Zurücksetzen, wenn es schiefgeht oder Tests rot werden |
| [Als Skill verfestigen](/cases/workflows/turn-a-workflow-into-a-skill/) | Wiederkehrende Abläufe als Skill schreiben |

## Weitere verwandte Kapitel

- Qualität: [Kernfähigkeiten · Qualität und Überprüfung](/guide/quality/)
- Agent: [Planung](/guide/agent-work/planning/), [Subagents](/guide/agent-work/subagents/)
- Verstetigung: [Skill](/skills/overview/), [AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- Fälle: [Szenarien und Fallbibliothek](/cases/use-cases/)

## Designprinzipien

1. **Jedes Stadium hat ein Artefakt**: Plan, Diff, Testbericht, Entscheidungsprotokoll
2. **Standardmäßig kleine Schritte**: prüfbare Inkremente schlagen eine riesige Änderung
3. **Fehler sind wiederherstellbar**: wissen, wie man rückgängig macht und Threads forkt, um weiterzumachen
4. **Verstetigen, was sich wiederholt**: beim dritten Mal als Skill oder Vorlage schreiben

## Referenzquellen

- freestylefly/CodexGuide Workflows und Playbooks
- stormzhang `14-workflows.md`
- codex.bozhouai.com Teil 4 Standard-Workflows

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Prompts, Qualität, Agent-Arbeit und Skills in diesem Handbuch. Diese Seite dient nur der Methodennavigation und der Erklärung von Phasen-Prüfpunkten und schreibt keine konkreten Client-Abläufe als langfristigen Vertrag fest.  
**Zuletzt geprüft:** 2026-07-26
