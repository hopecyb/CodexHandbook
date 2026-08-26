---
title: Unterstützte Editoren
description: Unterscheide die VS-Code-kompatible Erweiterung von den Integrationen in Xcode und JetBrains.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: 1f0b54d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Codex ist derzeit auf unterschiedliche Weise in verbreiteten Editoren verfügbar: VS-Code-basierte Editoren verwenden die Codex-Erweiterung, Xcode und JetBrains-IDEs jeweils einen eigenen Integrationseinstieg.

## Aktuell unterstützte Wege

| Editor | Codex-Einstieg | Öffnen |
|---|---|---|
| Visual Studio Code | Codex-Erweiterung | Codex-Symbol oder `Codex: Open Codex Sidebar` |
| Cursor | Kompatible Codex-Erweiterung | Codex-Symbol oder Command Palette |
| Windsurf | Kompatible Codex-Erweiterung | Codex-Symbol oder Command Palette |
| Visual Studio Code Insiders | Codex-Erweiterung | Erweiterungsbereich und Codex-Seitenleiste |
| Xcode | Integration in den Xcode coding assistant | Neuen Chat erstellen und Codex Agent auswählen |
| JetBrains-IDEs | Integration in JetBrains AI Chat | AI Chat öffnen und Codex auswählen |

Installationswege und Mindestversionen können sich ändern. Öffne sie immer über die [offizielle Codex-IDE-Seite](https://learn.chatgpt.com/docs/codex/ide). Eine Erweiterung mit ähnlich klingendem Namen ist nicht allein deshalb offiziell unterstützt.

## Wofür sich der IDE-Einstieg besonders eignet

- Aktuell geöffnete Datei oder Auswahl direkt in eine Frage aufnehmen
- Lokalen Code erklären, ändern und in Folgerunden bearbeiten
- Zusammenfassung und Änderungen neben dem Quellcode prüfen
- Kleine Aufgaben lokal halten und größere an einen längeren Workflow delegieren

Beispiel:

```text
Prüfe die Wiederholungsschleife in der aktuellen Auswahl.
Erkläre zuerst die Abbruchbedingung und implementiere dann die kleinste Änderung. Ändere nur die aktuelle Datei und den zugehörigen Test.
Berichte abschließend Diff und Testbefehl und aktualisiere keine Abhängigkeiten.
```

## Konsistenz in Teams mit mehreren Editoren

1. Dokumentiere Build-, Test- und Formatierungsbefehle im `AGENTS.md` des Repositorys oder in der Beitragsdokumentation.
2. Beschränke im Prompt den Dateibereich und verlasse dich nicht auf eine proprietäre Schaltfläche einer IDE.
3. Nimm Ergebnisse anhand des Git-Diffs und derselben Tests ab, nicht anhand der Aussage „In meiner IDE funktioniert es“.
4. Schreibe nur dann separate Anleitungen für verschiedene IDEs, wenn eine genaue UI-Beschreibung erforderlich ist.

## Editoren außerhalb der Liste

Verwende vorzugsweise die [Codex CLI](/de/guide/cli/) oder die [Desktop-App](/de/guide/desktop-app/). Installiere das Paket der VS-Code-Erweiterung nicht erzwungen in einem inkompatiblen Editor und behandle Drittanbieterintegrationen nicht automatisch als offizielle OpenAI-Funktion.

Die Installationsschritte findest du unter [IDE-Integration installieren](/de/guide/getting-started/install-ide-extension/), die Kontextverwendung unter [Editor-Kontext](/de/guide/ide/editor-context/).

---

**Status:** verified

**Unterstützte Produkte:** IDE

**Prüfgrundlage:** Mit der aktuellen offiziellen IDE-Seite abgeglichen. Verifiziert wurden die konkreten Einstiege für VS Code, Cursor, Windsurf, VS Code Insiders, Xcode und JetBrains-IDEs, ohne identische Funktionen aller Integrationen anzunehmen.

**Zuletzt geprüft:** 2026-08-26
