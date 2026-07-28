---
title: Geplante und Hintergrundaufgaben
description: Automations — Codex unbeaufsichtigt unter Triggern; Freigabe und Exit-Bedingungen planen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Automations** lassen Codex unter **Zeitplan, Repo-Ereignissen oder externen Triggern** Aufgaben ausführen — z. B. Dependency-Checks, Doc-Sync, periodische Health-Scans.

## Inhalt

- Wann Automation lohnt, wann Mensch in der Schleife bleiben muss
- Vier Designpunkte: Trigger, Ausführung, Benachrichtigung, Fehlschlag
- Bezug zu Cloud-Aufgaben und lokalen CLI-Skripten

## Vergleich zu manuellen Aufgaben

| | Manuelle Aufgabe | Automation |
|---|---|---|
| Start | du startest | Scheduler/Ereignis |
| Aufsicht | jederzeit unterbrechbar | braucht Benachrichtigung und Logs |
| Risiko | du urteilst live | Fehler können massenhaft streuen |
| Geeignet | Exploration, Refactor | Wiederholt, regelklar |

## Sicheres Automations-Design

### 1. Trigger klar

```text
Gut: Jeden Montag 09:00 tote Links unter docs/ prüfen
Schlecht: Dauerhaft überwachen und Code automatisch ändern
```

### 2. Least Privilege

- Nur-lesen-Scan vor Auto-Commit
- Bei Auto-PR: dedizierter Bot-Account und Branch-Schutz

### 3. Exit-Bedingungen

- Nach N Fehlschlägen in Folge pausieren
- Diff über Zeilenschwelle → Mensch
- Bei Treffer auf in `AGENTS.md` verbotene Verzeichnisse abbrechen

### 4. Benachrichtigung

- Slack/Mail/Mobil: fertig, fehlgeschlagen, Freigabe nötig
- Logs für Audit behalten

### 5. Menschliche Überprüfungspunkte

| Vollautomatisch möglich | Mensch nötig |
|---|---|
| Draft-PR erzeugen | Nach main mergen |
| Veraltete Dependencies listen | Major-Version upgraden |
| Öffentliche Docs syncen | Externe Ankündigung veröffentlichen |

## Typische Muster

### Periodische Wartung

- Dependency-Vuln-Report → Issue, Lockfile nicht direkt ändern
- Übersetzung vs. Quelltext-Diff-Hinweis

### Ereignisgetrieben

- Neuer PR → Review-Skill (Kommentar-Vorschläge, kein Push)
- Issue-Label `bug` → Repro-Schritte-Entwurf

### Lange Aufgaben

In mehrere Automations + [Übergabe und Fortsetzen](/guide/agent-work/handoff-and-resume/) teilen — Kontext nicht in einem Lauf erschöpfen.

## Bezug zu Cloud / CLI

- **Cloud**: Remote-Automation mit tiefer GitHub-Integration
- **CLI + cron/CI**: Intranet, eigene Pipelines
- Auswahl: [Lokal vs. Cloud](/guide/foundations/local-vs-cloud/) und [Web und Cloud](/guide/web-and-cloud/)

## Häufige Fehler

- Automation `git push` direkt auf Hauptbranch
- Kein Fehlschlag-Alarm → stilles Repo-Verfallen
- Explorative Aufgaben zeitgesteuert — Quota verschwenden, schwer abnehmbar

## Abnahme-Checkliste

- [ ] Trigger, Berechtigungen, Benachrichtigung, Exit dokumentiert
- [ ] Ein voller Zyklus in Fork/Test-Repo geübt
- [ ] Team kennt Bot-Account und Freigabe-Regeln

## Quellen
- Offizielle OpenAI Codex Cloud / Automations-Hinweise
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud / App / CLI  
**Nachprüfhinweis:** Beschreibt aktuelle zeitgesteuerte, ereignisgetriebene und Hintergrund-Ausführung; Trigger-Einstiege und Governance ändern sich leicht, öffentliche Grundlage unvollständig.  
**Zuletzt geprüft:** 2026-07-26
