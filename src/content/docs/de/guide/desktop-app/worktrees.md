---
title: Worktrees
description: Isoliere parallele Chats mit Git-Worktrees und kehre sicher in den lokalen Arbeitsbereich zurück.
sidebar:
  order: 40
locale: de
source_locale: zh-CN
source_revision: f050c32
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Mit Worktrees kann ein Git-Repository mehrere unabhängige Checkout-Verzeichnisse besitzen. Jedes Verzeichnis hat eigene Dateien und einen eigenen Branch-Status, nutzt aber dieselben Git-Metadaten des Repositorys. Dadurch können mehrere Codierungs-Chats parallel arbeiten, ohne ihre Dateien gegenseitig zu überschreiben.

## Voraussetzungen

- Das Projekt muss sich in einem Git-Repository befinden.
- Die Aufgabengrenzen müssen unabhängig beschreibbar und abnehmbar sein.
- Parallele Aufgaben dürfen nicht dieselben zentralen Dateien ändern.

Wenn du Codex zum ersten Mal ausprobierst, erledige Aufgaben zunächst sequenziell im Local-Modus. Verwende Worktrees erst, wenn Wartezeiten oder Dateikonflikte tatsächlich zum Problem werden.

## In der App erstellen

1. Wähle unter dem Eingabebereich eines neuen Chats **Worktree**.
2. Wähle den Ausgangs-Branch: Haupt-Branch, Feature-Branch oder aktueller Branch mit nicht vorgemerkten Änderungen.
3. Sende den Prompt ab; die App erstellt einen Git-Worktree.
4. Prüfe, teste und reviewe die Aufgabe im separaten Chat.
5. Verwende **Handoff**, wenn du zur lokalen Arbeitskopie zurückkehren möchtest.

Ein standardmäßig erstellter Worktree befindet sich auf einem detached HEAD. Codex kann darin arbeiten. Bevor du Commits behalten oder teilen möchtest, musst du jedoch Ziel-Branch und Zusammenführungsweg eindeutig festlegen.

## Beispiel mit zwei parallelen Aufgaben

| Chat | Aufgabe im Worktree | Dateizuständigkeit | Abnahme |
|---|---|---|---|
| A | Anmeldefehler beheben | `src/auth/**` | Authentifizierungstests bestehen |
| B | Authentifizierungsdokumentation ergänzen | `docs/auth/**` | Linkprüfung besteht |

Lass A und B nicht gleichzeitig dieselbe Sperr- oder Konfigurationsdatei ändern. Falls dies unvermeidlich ist, bestimme einen Chat als alleinigen Bearbeiter; der andere liefert nur Analyseergebnisse.

## Prüfung vor der Übergabe

```bash
git status --short
git diff --check
git diff --stat
```

Führe anschließend die aufgabenspezifischen Tests aus. Übergib, committe oder führe erst zusammen, wenn eindeutig ist, aus welchem Chat jede Änderung stammt, welcher Branch das Ziel ist und ob die Verifikation bestanden wurde.

## Beziehung zu geplanten Aufgaben und Remote

- Geplante Aufgaben in einem Git-Repository können einen eigenen Hintergrund-Worktree verwenden und dadurch Konflikte mit der aktuellen Arbeit vermeiden.
- Mit Remote lässt sich ein Worktree-Chat auf einem verbundenen Rechner von einem Mobilgerät aus steuern. Repository und Befehle verbleiben auf diesem Rechner oder in seiner Remote-Entwicklungsumgebung.
- Nicht-Git-Projekte bieten keine Worktree-Isolierung; geplante Aufgaben verwenden direkt das Projektverzeichnis.

## Offizielle Grundlage

- [Git worktrees](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Long-running work and parallel chats](https://learn.chatgpt.com/docs/long-running-work)

---

**Status:** verified

**Unterstützte Produkte:** App

**Zuletzt geprüft:** 2026-08-26
