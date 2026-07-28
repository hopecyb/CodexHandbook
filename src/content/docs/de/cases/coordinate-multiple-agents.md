---
title: Mehrere Agents koordinieren
description: Fallbeispiel zu paralleler Erkundung, Arbeitsteilung und Zusammenführung der Ergebnisse.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Mehrere Agents koordinieren

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Entwickler / Teams |
| Client | Desktop-App |
| Geschätzte Dauer | je nach Aufgabe |

## 1. Ziel und Kontext

**Ziel:** Parallelisierbare Teilprobleme an mehrere Agents verteilen und die Schlussfolgerungen manuell zusammenführen.

**Erfolgskriterien:** Jeder Subagent hat eine unabhängige Definition of Done und überschreibt nicht dieselbe Datei.

## 2. Empfohlene Muster

### Parallel erkunden, manuell auswählen

```text
Agent 1: Vor- und Nachteile sowie Aufwand von Option A
Agent 2: Vor- und Nachteile sowie Aufwand von Option B
(Nach deiner Auswahl führt ein einzelner Agent aus)
```

### Isolation über Worktrees

Verschiedene Agents ändern in unterschiedlichen [git worktrees](/guide/desktop-app/worktrees/) unterschiedliche Branches; am Ende manuell mergen.

## 3. Koordinationsregeln (empfohlen in AGENTS.md)

- Pro Agent klare Verzeichnisgrenzen festlegen
- Paralleles `git push` verbieten
- Vor dem Merge einheitlich CI laufen lassen

## 4. Verwandt

- [Multi-Agent-Koordination](/cases/workflows/multi-agent-coordination/)
- [Subagents](/guide/agent-work/subagents/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Aktuelle Codex-Planunterlagen im OpenAI Help Center beschreiben weiterhin parallele Codex-Agents in der Desktop-App, integrierte Worktree-Unterstützung und Cloud-Delegation. Diese Seite fasst nur das Koordinationsmuster „parallel erkunden, Verzeichnisgrenzen isolieren, paralleles Push vermeiden, Schlussfolgerungen manuell zusammenführen“ zusammen und hängt nicht an einem einzelnen UI-Ablauf.  
**Zuletzt geprüft:** 2026-07-26
