---
title: Slash-Befehle und Schnelleinstiege
description: '/-Befehle und $-Skill-Aufrufe — Lernkurzreferenz, kein vollständiges Parameterhandbuch.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Beim ersten Slash-Befehl wirkt es oft wie auswendig zu lernender Jargon. Als Schnelleinstiege, die Sie aktiv anwählen, geht es leichter.

Sie führen typischerweise in feste Modi oder eingebaute Abläufe. Slash-Befehle (`/command`) hängen mit `$name`-Aufrufen von [Skills](/skills/overview/) zusammen, sind aber nicht dasselbe. Die konkrete Liste **ändert sich mit Produkt und Version** — vor Nutzung Client-`/`-Completion und offizielle Docs.

## Konzeptuelle Unterscheidung

| Einstieg | Wer startet | Typischer Nutzen |
|---|---|---|
| Slash wie `/review` | Sie tippen `/` | Eingebauter oder konfigurierter Fixablauf |
| `$skill-name` | Sie oder das Modell | Projekt- oder Nutzer-Skill |
| Natürliche Sprache | Sie | Allgemeine Aufgaben |

## Direkte Unterscheidung der drei

- `/Befehl`: Im Chat aktiv einen Schnelleinstieg wählen
- `$skill`: Sie oder das Modell benennen einen Skill
- Natürliche Sprache: Bedarf sagen, Modell entscheidet den Weg

Für bekannte Abläufe ist `/Befehl` oft direkter.

## Was es ist

- Kein Terminalbefehl
- Kein mysteriöser Jargon
- Eher „Shortcut-Buttons“ in der Chat-UI

Geeignet wenn:

- Sie schon wissen, welchen Flow Sie wollen
- Sie dieselbe Absicht nicht jedes Mal neu formulieren wollen

## Häufige Missverständnisse

### 1. Slash = Terminalbefehl

Schnelleinstieg in der Chat-UI — kein `codex ...` in der Shell.

### 2. Die Liste ist fest

Produkt, Version und Umgebung ändern verfügbare Befehle — **Completion-Liste** der aktuellen Umgebung ist zuverlässiger.

### 3. Slash umgeht Freigabe und Sandbox

Löst es Schreiben, Befehle oder Netz aus, gelten weiterhin aktuelle Policies.

### 4. Ohne Slash nutze ich Codex schlecht

Natürliche Sprache deckt die meisten Aufgaben. Slash beschleunigt und fixiert Einstiege, wenn Sie schon etwas Routine haben.

## Häufige Kategorien (illustrativ)

Namen können je Version zu-/abnehmen — **nur Lernklassifikation**:

### Sitzung und Modus

- Planungsmodus wechseln, Kontext komprimieren, Hilfe
- Mit [Planung](/guide/agent-work/planning/)

### Review und Qualität

- Diff oder PR reviewen
- Mit [Diffs reviewen](/guide/quality/review-diffs/)

### Workspace und Git

- Status, Commit-Message erzeugen (Commit weiterhin von Ihnen bestätigen)
- [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) beachten

### Erweiterungen

- Skills installieren oder listen (falls z. B. `skill-installer`)

## Beim Nutzen beachten

1. **Zuerst `/` tippen** — was die Umgebung bietet, keine veraltete Liste pauken
2. Team-Fixabläufe eher als **Skill + Doku** — weniger „nur alte Hasen kennen den Namen“
3. Schreibaktionen durch Slash weiterhin unter Sandbox und Freigabe

## Direkt ausprobieren

1. `/` eingeben
2. Sehen, was die Umgebung bietet
3. Einen verständlichen Namen/Zweck zuerst testen

## Erster Versuch

1. `/` — was bietet die Umgebung
2. Einen verständlichen Befehl einmal testen
3. Beobachten: eher „Modus wechseln“ oder „Ablauf starten“?
4. Langfristig wiederverwendbare Team-Flows als Skill ablegen

So wird die Arbeitsteilung klar: Slash = Schnelleinstieg, Skill = langfristiger Flow.

## Unterschied zu CLI-Befehlen

| | Chat `/` | Terminal `codex …` |
|---|---|---|
| Kontext | Aktuelle Sitzung und @-Dateien | Verzeichnis per `--cwd` |
| Geeignet | Interaktives Explorieren | Skripte, CI |

Slash als Chat-Schnelleinstieg — aktuelle Umgebung ansehen schlägt Auswendiglernen.

CLI-Unterbefehle: [CLI Interaktiver Modus](/guide/cli/interactive-mode/) und [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/). Vollständige Parametertabellen: [CLI-Befehlsreferenz](/guide/reference/commands/).

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Prüfhinweis:** Behandelt `/review`, Slash-Kategorien und `$skill`; verfügbare Menge, Namen und Verhalten ändern sich schnell — ohne aktuelle offizielle vollständige Liste eher `outdated`.  
**Zuletzt geprüft:** 2026-07-26
