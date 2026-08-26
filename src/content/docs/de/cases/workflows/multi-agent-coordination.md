---
title: Multi-Agent-Koordination
description: Parallel erkunden, arbeitsteilig ausführen und Ergebnisse zusammenführen — wann zerlegen, wie abnehmen.
locale: de
source_locale: zh-CN
source_revision: e4d0f69
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Mehrere Agents eignen sich für parallelisierbare, lose gekoppelte Teilprobleme — nicht dafür, ohne Koordination dieselbe Datei gleichzeitig zu ändern.

## Wann zerlegen

| Geeignet | Ungeeignet |
|---|---|
| Frontend-Styles + Backend-API-Vertrag parallel recherchieren | Dieselbe Funktion von zweien ändern |
| Einer Tests, einer Docs | Geteilter mutabler Zustand ohne Lock |
| Mehrere Implementierungsoptionen erkunden | Starke Sequenzabhängigkeiten ungeklärt |

Produktfähigkeiten: [Parallele Agents](/de/guide/desktop-app/parallel-agents/), [Subagents](/de/guide/agent-work/subagents/).

## Koordinationsmuster

### Muster A: Parallel erkunden, manuell auswählen

```text
Agent 1: Vor- und Nachteile sowie Aufwand von Option A
Agent 2: Vor- und Nachteile sowie Aufwand von Option B
Du: Eine wählen, dann einzelner Agent ausführen
```

### Muster B: Pipeline

```text
Erkunden-Agent → Plan ausgeben → Ausführen-Agent (neuer Thread, mit Plan-Zusammenfassung)
```

Über [Übergabe und Fortsetzen](/de/guide/agent-work/handoff-and-resume/) strukturierte Zusammenfassungen übergeben — nicht den ganzen Chat pasten.

### Muster C: Isolation über Worktrees

Verschiedene Agents ändern in unterschiedlichen [git worktrees](/de/guide/desktop-app/worktrees/) unterschiedliche Branches; am Ende manuell mergen.

## Koordinationsregeln (empfohlen in AGENTS.md)

- Pro Agent klare Verzeichnisgrenzen
- Paralleles `git push` verbieten
- Vor dem Merge einheitlich CI
- Konflikte löst der Mensch, nicht der Agent durch Raten

## Abnahme

- [ ] Jeder Subagent hat eine eigene «Definition of Done»
- [ ] Nach dem Merge Vollsuite bestanden
- [ ] Diff auf die jeweilige Teilaufgabenbeschreibung zurückführbar

## Häufige Fehler

- Drei Agents parallel ändern `package.json`
- Kein Zusammenführungsschritt — unklar, wessen Schlussfolgerung gilt

---

**Status:** verified  
**Geeignete Produkte:** App / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle öffentliche Erläuterungen zu Multi-Agent / Subagents bei OpenAI Developers sowie die bereits geprüften Kapitel zu Subagents, Übergabe/Wiederaufnahme und paralleler Arbeit. Der Inhalt beschränkt sich auf stabile Methoden „wann zerlegen, wie Grenzen isolieren, wie manuell zusammenführen und abnehmen“ und schreibt aktuelle Beta- oder UI-Einstiege nicht als festen Vertrag fest.  
**Zuletzt geprüft:** 2026-07-26
