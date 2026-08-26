---
title: Parallele Chats und Agents
description: Bearbeite getrennt abnehmbare Aufgaben parallel in unabhängigen Chats und Worktrees.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: 6f0977b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die Grundeinheit paralleler Arbeit ist ein Chat mit eigenem Kontext, eigenen Nachrichten, Ergebnissen und Zielen. Viele Schritte allein machen eine Aufgabe noch nicht parallelisierbar. Geeignet sind Aufgaben, die **voneinander unabhängig sind, eindeutige Dateigrenzen besitzen und getrennt abgenommen werden können**.

![Orchestrierungsdiagramm: Ein Hauptthread delegiert unabhängige Aufgaben an mehrere Subagents und führt Nachweise sowie Konflikte zusammen](/diagrams/subagent-orchestration-de.svg)

## Zuerst die Parallelisierbarkeit prüfen

| Parallelisierbar | Sollte sequenziell bleiben |
|---|---|
| Zwei schreibgeschützte Untersuchungen | Die zweite Aufgabe hängt vom Ergebnis der ersten ab |
| Code- und Dokumentationsverzeichnisse überschneiden sich nicht | Gleichzeitige Änderung derselben zentralen Datei |
| Zwei Lösungsansätze werden getrennt als Prototyp umgesetzt | Anforderungen ändern sich noch häufig |
| Jede Aufgabe besitzt eigene Tests | Korrektheit lässt sich erst nach gemeinsamer Integration beurteilen |

Die offizielle Empfehlung lautet, nicht mit zwei Chats in dieselbe Datenquelle zu schreiben. Verwende für parallele Codierungsaufgaben unterschiedliche Git-Worktrees.

## Von einfach zu komplex

### 1. Zuerst schreibgeschützte Aufgaben parallelisieren

```text
Aufgabe: Analysiere nur den letzten Fehler im Authentifizierungsmodul und ändere keine Dateien.
Umfang: src/auth/** und die zugehörigen Tests.
Ergebnis: Ursachenhypothese, Pfade zu Nachweisen, verbleibende Unsicherheiten und empfohlene Verifikationsbefehle.
```

Schreibgeschützte Aufgaben erzeugen keine Zusammenführungskonflikte und eignen sich deshalb für die ersten Übungen.

### 2. Danach Schreibaufgaben parallelisieren

Lege für jeden Chat Ziel, Dateizuständigkeit, Verbote und Abnahme fest:

```text
Ziel: Die Dokumentation der Authentifizierungsfehlercodes ergänzen.
Zuständigkeit: Nur docs/auth/**.
Verboten: Keine Änderungen an src/**, Sperrdateien oder gemeinsamer Konfiguration.
Abnahme: pnpm check:links ausführen und Ergebnis berichten.
```

Ein Codierungs-Chat gehört in einen eigenen [Worktree](/de/guide/desktop-app/worktrees/). Gemeinsame Konfiguration ändert nur der Haupt-Chat oder eine ausdrücklich festgelegte einzelne zuständige Instanz.

### 3. Ergebnisse abschließend gemeinsam abnehmen

Füge Ergebnisse nicht einfach aneinander. Der Haupt-Chat prüft:

1. Wurde jede Aufgabe innerhalb ihrer Grenzen geliefert?
2. Lassen sich Nachweise und Tests reproduzieren?
3. Widersprechen sich Ergebnisse verschiedener Chats?
4. Müssen nach dem Zusammenführen Integrationstests erneut ausgeführt werden?

## Lange Aufgaben und Goal-Modus

Mit `/goal` kannst du in Desktop-App, CLI oder IDE den Goal-Modus starten. Das Ziel sollte Ergebnis, Einschränkungen und Verifikationskriterien enthalten. Jeder Chat besitzt ein eigenes Ziel. Parallele Ausführung erweitert weder Sandbox noch Berechtigungen; entscheidungsbedürftige Aktionen halten weiterhin an.

Die detailliertere Orchestrierung auf Werkzeugebene beschreibt die Seite [Subagents](/de/guide/agent-work/subagents/).

## Offizielle Grundlage

- [Long-running work](https://learn.chatgpt.com/docs/long-running-work)
- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**Status:** verified

**Unterstützte Produkte:** App, CLI, IDE

**Zuletzt geprüft:** 2026-08-26
