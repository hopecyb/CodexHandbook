---
title: IDE-Integration installieren
description: Aktiviere Codex in VS-Code-kompatiblen Editoren, Xcode oder JetBrains-IDEs.
sidebar:
  order: 50
locale: de
source_locale: zh-CN
source_revision: 1196b38
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die derzeit unterstützten IDEs verwenden nicht alle denselben Installationsweg:

| IDE | Installation oder Aktivierung |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Codex-Erweiterung installieren oder aktivieren |
| Xcode | Im coding assistant den Codex Agent auswählen |
| JetBrains-IDEs | In AI Chat Codex auswählen |

Öffne auf der [offiziellen Codex-IDE-Seite](https://learn.chatgpt.com/docs/codex/ide) den Einstieg für deine IDE. Leite die Position einer Schaltfläche nicht aus einem Screenshot einer anderen IDE ab.

## VS-Code-kompatible Editoren

1. Installiere die Codex-Erweiterung über den offiziellen Marketplace-Einstieg.
2. Öffne das Stammverzeichnis eines echten Projekts als Workspace.
3. Wähle das Codex-Symbol. Falls es nicht sichtbar ist, öffne die Command Palette und führe `Codex: Open Codex Sidebar` aus.
4. Melde dich mit ChatGPT oder einem API-Key an.

## Xcode und JetBrains

- Xcode: Öffne den coding assistant, erstelle einen Chat und wähle Codex als Agent.
- JetBrains: Öffne AI Chat und wähle Codex.

Diese Einstiege werden von der jeweiligen IDE bereitgestellt. Ihre Oberflächen entsprechen nicht vollständig der VS-Code-Erweiterung.

## Kontext nach der Installation prüfen

Öffne eine Quelldatei, markiere einen kleinen Codeabschnitt und frage:

```text
Erkläre nur Eingaben, Ausgaben und Fehlerpfade der aktuellen Auswahl. Ändere keine Dateien und nenne die zugehörigen Funktionsnamen.
```

Wenn die Antwort offensichtlich keinen Bezug zur Auswahl hat, prüfe zuerst:

- Ist das richtige Projektstammverzeichnis geöffnet?
- Wurde die Datei oder Auswahl dem Composer hinzugefügt?
- Sind die richtige Identität und der richtige Workspace angemeldet?
- Sind gleichzeitig andere KI-Erweiterungen oder Tastenkombinationen aktiv, die Konflikte verursachen?

Lies anschließend [Workflow für lokale IDE-Aufgaben](/de/guide/ide/local-task-workflow/). Den vollständigen Unterstützungsumfang beschreibt [Unterstützte Editoren](/de/guide/ide/supported-editors/).

---

**Status:** verified

**Unterstützte Produkte:** IDE

**Prüfgrundlage:** Der aktuelle offizielle IDE-Schnellstart führt VS Code, Cursor, Windsurf und VS Code Insiders sowie die jeweils eigenen Integrationswege für Xcode und JetBrains ausdrücklich auf. Diese Seite trennt die beiden Installationsarten entsprechend.

**Zuletzt geprüft:** 2026-08-26
