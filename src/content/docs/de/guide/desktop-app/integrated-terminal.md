---
title: Integriertes Terminal
description: Führe Befehle im aktuellen Projekt oder Worktree aus und verifiziere Aufgabenergebnisse anhand echter Ausgaben.
sidebar:
  order: 60
locale: de
source_locale: zh-CN
source_revision: 918b2bf
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Jeder Chat in der ChatGPT-Desktop-App besitzt ein Terminal, dessen Geltungsbereich das aktuelle Projekt oder der aktuelle Worktree ist. Es dient nicht nur zum Anzeigen von Protokollen, sondern auch als Nachweisfenster, in dem du Aussagen von Codex überprüfen kannst.

Öffne es über das Terminalsymbol oben rechts in der App oder durch gleichzeitiges Drücken von `Ctrl` und der Gravis-Taste. ChatGPT kann die aktuelle Terminalausgabe lesen. Du kannst daher auch einen fehlgeschlagenen Build oder einen laufenden Entwicklungsserver analysieren lassen.

## Minimaler Verifikationsablauf

In einem JavaScript-Projekt kannst du beispielsweise nacheinander Folgendes ausführen:

```bash
git status --short
pnpm test
pnpm run lint
```

Die Befehle unterscheiden sich von Projekt zu Projekt. Lies zuerst `README.md`, `package.json` oder die Projektregeln. Nenne die bestätigten Befehle im Prompt:

```text
Führe nach der Änderung pnpm test und pnpm run lint aus.
Berichte für jeden Befehl den Exitstatus. Behaupte nicht, die Aufgabe sei abgeschlossen, wenn einer der Befehle fehlschlägt.
```

Halte bei der Abnahme mindestens fest: Was wurde ausgeführt, war der Exitstatus erfolgreich, welcher erste aussagekräftige Fehler trat auf und welche Prüfungen wurden nicht ausgeführt?

## Umgang mit lang laufenden Prozessen

Ein Entwicklungsserver läuft dauerhaft. Das bedeutet nicht, dass der Befehl hängt. Prüfe nach dem Start:

- Wird in der Ausgabe eine lokale Adresse angezeigt?
- Lässt sich die Seite im Browser öffnen?
- Treten danach Laufzeitfehler im Terminal auf?

Sende erst dann ein Unterbrechungssignal, wenn der Prozess beendet werden soll. Starte nicht mehrere Server, nur weil vorübergehend keine neue Ausgabe erscheint.

## Wiederverwendbare Actions

Wenn du regelmäßig dieselben Befehle ausführst, kannst du in der lokalen Umgebung eine Action definieren. Sie erscheint in der Desktop-App als Schnellaktion und wird im integrierten Terminal ausgeführt. Geeignet sind risikoarme Prüfungen wie `test`, `lint` und `build`, nicht das Verbergen von Produktionsbereitstellungen oder Datenbankbereinigungen.

## Sicherheitsgrenzen

- Füge keine Produktionszugangsdaten in einen Chat oder den Terminalverlauf ein.
- Lass dir bei unbekannten Befehlen zuerst Ziel, Auswirkungen und Rückgängigmachung erklären.
- Wiederhole Lösch-, Migrations- oder Veröffentlichungsbefehle nicht unüberlegt in einer Produktionsumgebung.
- Die technische Ausführbarkeit im Terminal ersetzt keine fachliche Autorisierung.

Die offizielle Dokumentation nennt unter anderem `git status`, `git pull --rebase`, Tests und Linting als typische Befehle. Maßgeblich sind jedoch immer die Unterlagen des jeweiligen Projekts.

## Offizielle Grundlage

- [Integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal)
- [Local environments](https://learn.chatgpt.com/docs/environments/local)

---

**Status:** verified

**Unterstützte Produkte:** App

**Zuletzt geprüft:** 2026-08-26
