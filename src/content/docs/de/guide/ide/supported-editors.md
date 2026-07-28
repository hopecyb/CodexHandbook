---
title: Unterstützte Editoren
description: Welche Editoren die Codex-IDE-Erweiterung unterstützt, Auswahl und übliche Grenzen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Die IDE-Erweiterung bettet Codex in den **Editor, den du schon nutzt**, ein — Aufgaben starten, Diff sehen, Änderungen annehmen im gleichen Interface. Diese Seite klärt Unterstützung und Auswahl; Installation: [IDE-Erweiterung installieren](/guide/ide/installation/).

## Inhalt dieser Seite

- Welche Editoren eine Official-Erweiterung haben
- IDE-Erweiterung vs. Desktop-App vs. CLI wählen
- Wie Teams mit mehreren Editoren Workflows angleichen

## Worauf bei der Auswahl achten

Zwei Themen: welche Editoren official unterstützt sind, und ob du bei einem bereits genutzten Editor bei Codex in der IDE bleibst.

## Official-Unterstützung

**Konkrete Liste und Versionsanforderungen laut [OpenAI-Codex-Dokumentation](https://developers.openai.com/codex)**; häufig darunter:

| Editor | Typische Nutzer | Hinweis |
|---|---|---|
| Visual Studio Code | die meisten Entwickler | Marketplace-Installation, reifstes Ökosystem |
| Cursor und andere VS-Code-Forks | Nutzer von AI-Editoren | meist kompatibel mit VS-Code-Erweiterungsmechanik, per Test prüfen |
| JetBrains-Serie (falls Official) | Java/Kotlin/IDEA-Nutzer | Funktionen und UI können vom VS-Code-Build abweichen |

Editoren außerhalb der Official-Liste: [CLI](/guide/cli/) oder [Desktop-App](/guide/desktop-app/) als Alternative — keine inoffiziellen Portierungen.

## Häufige Missverständnisse

### Unterstützung eines Editors heißt nicht Feature-Parität mit anderen Einstiegen

„Es gibt eine Erweiterung“ wird oft als „in der IDE kann ich alles“ gelesen.

Schwerpunkte unterscheiden sich:

- IDE: nah am Code ändern
- App: projektweite Aufgaben und Multi-Task-Koordination
- CLI: Terminal, Skripte und Remote-Umgebungen

### Editorwahl ist mehr als Gewohnheit

Passt gut, wenn du vor allem:

- lokalen Code änderst
- Auswahl nutzt
- beim Ändern testest

Dann ist die IDE passend.

Wenn du eher:

- lange Aufgaben
- Dokumentenkoordination
- mehrere parallele Aufgaben

machst, sind App oder CLI oft besser.

## Wann die IDE-Erweiterung wählen

| Geeignet | Weniger geeignet |
|---|---|
| Beim Codieren sollen „aktuelle Datei / Auswahl“ automatisch in den Kontext | Parallele Multi-Agenten, Arbeitsbäume und andere App-spezifische Fähigkeiten |
| Inline-Diff im Editor gewohnt | Vor allem lange Nicht-Code-Aufgaben (Docs, Recherche) |
| Tests und Debugging laufen schon in der IDE | Standardisierte Cloud-Umgebung und Repo von null aufbauen |

Entscheidung: [Codex-Client wählen](/guide/getting-started/choose-your-codex-client/)

## Arbeitsteilung mit der Desktop-App

```text
IDE-Erweiterung: beim Editieren → kleine Schritte → Inline-Überprüfung → lokale Tests
Desktop-App: projektweite Aufgaben → parallele Agenten → Arbeitsbäume → Benachrichtigungen und Cloud-Delegation
```

Beide können denselben Account und dieselbe Projektkonfiguration teilen; siehe [Editor-Kontext](/guide/ide/editor-context/) und [AGENTS.md-Geltungsbereich](/guide/customization/agents-md/scope-and-precedence/).

## Team-Ausrichtung

1. Im README **empfohlenen Editor + Mindestversionsstand der Erweiterung** festhalten
2. Kernregeln in `AGENTS.md`, nicht an IDE-Privatfunktionen binden
3. Code Review bleibt am Git-Diff orientiert — keine Ansicht, die „nur eine IDE kann“

## Welchen Einstieg wählen

Unsicher? Diese Fragen helfen:

1. Verbringst du die meiste Zeit im Editor mit Codeänderungen?
2. Hängst du stark an aktueller Datei, Auswahl und Inline-Diff?
3. Brauchst du vorerst keine Multi-Agenten, Arbeitsbäume oder stärkeres Aufgabenmanagement?

Meist „ja“ → mit der IDE-Erweiterung starten.

## Häufige Fehler

- IDE-Erweiterung und App 1:1 gleichsetzen
- Aufgabe starten, ohne Workspace-Wurzel zu öffnen → Pfade und `AGENTS.md`-Auflösung falsch
- Mehrere AI-Erweiterungen mischen → Kontext- und Shortcut-Konflikte

Oft wählst du die IDE-Erweiterung einfach, weil die Hauptarbeit ohnehin im Editor liegt.

## Quellen

- OpenAI-Codex-IDE-Dokumentation
- stormzhang `09-ide.md`
- KimYx0207 CX-08 IDE

---

**Status:** outdated  
**Anwendbare Produkte:** IDE  
**Prüfhinweis:** Die aktuelle Official-Hilfe bestätigt stark genug „Codex VS Code extension is compatible with most VS Code forks“, diese Seite geht aber weiter zu Cursor, Windsurf, JetBrains und Vergleichen; bis zur aktuellen Support-Matrix besser `outdated`.  
**Zuletzt geprüft:** 2026-07-26
