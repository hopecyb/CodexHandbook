---
title: IDE-Integration installieren und aktivieren
description: Öffne Codex korrekt in VS-Code-basierten Editoren, Xcode und JetBrains-IDEs.
sidebar:
  order: 20
locale: de
source_locale: zh-CN
source_revision: fb7ff84
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Es gibt zwei Arten von IDE-Einstiegen, deren Installationswege nicht vermischt werden dürfen:

| Editor | Aktueller Einstieg | Öffnen |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Codex-Erweiterung | Codex-Symbol wählen oder `Codex: Open Codex Sidebar` ausführen |
| Xcode | Integration im integrierten coding assistant von Xcode | Neuen Chat erstellen und Codex agent auswählen |
| JetBrains-IDEs | Integration in JetBrains AI Chat | AI Chat öffnen und Codex auswählen |

Den vollständigen Unterstützungsumfang und die offiziellen Einstiege findest du unter [Unterstützte Editoren](/de/guide/ide/supported-editors/).

## VS-Code-basierte Editoren installieren und abnehmen

1. Installiere die Codex-Erweiterung über den offiziellen Marketplace-Link.
2. Öffne ein Übungsprojekt statt eines leeren Fensters.
3. Wähle das Codex-Symbol. Falls es nicht angezeigt wird, führe `Codex: Open Codex Sidebar` über die Befehlspalette aus.
4. Authentifiziere dich mit einem ChatGPT-Konto oder API-Key.
5. Erstelle einen Chat, verweise auf die aktuell geöffnete Datei und stelle eine schreibgeschützte Frage.

Minimaler Prompt für die Abnahme:

```text
Lies nur die aktuell geöffnete Datei und ändere keinen Code.
Beschreibe in drei Punkten ihre Aufgabe, Eingaben und Ausgaben und nenne jeweils einen konkreten Symbolnamen.
```

Wenn die Antwort zur aktuellen Datei und den Symbolen passt, wurde der Editor-Kontext korrekt übergeben. Erstelle vor einer Schreibaufgabe zuerst einen Git-Prüfpunkt.

## Häufige Fehler

- **Seitenleiste nicht auffindbar:** Führe `Codex: Open Codex Sidebar` über die Befehlspalette aus.
- **Falscher Kontext:** Prüfe, ob Projektfenster, aktuelle Datei und Auswahl zum erwarteten Repository gehören.
- **Wiederholte Anmeldeaufforderung:** CLI und IDE teilen zwischengespeicherte Anmeldedaten. Prüfe das aktuelle Konto und melde dich erneut an.
- **Windows-Werkzeugkette liegt in WSL:** Aktiviere bei Bedarf `chatgpt.runCodexInWindowsSubsystemForLinux`. Eine Änderung dieser Einstellung lädt VS Code neu.
- **Abweichendes Verhalten eines Drittanbietereditors:** Prüfe zuerst, ob seine Version mit der VS-Code-Erweiterung kompatibel ist. Übertrage Xcode- oder JetBrains-Einstiege nicht darauf.

Ausführlichere Schritte für Einsteiger findest du unter [IDE-Integration installieren](/de/guide/getting-started/install-ide-extension/).

## Offizielle Grundlage

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [IDE settings](https://learn.chatgpt.com/docs/ide/settings)

---

**Status:** verified

**Unterstützte Produkte:** IDE

**Zuletzt geprüft:** 2026-08-26
