---
title: Tastenkombinationen
description: Nur aktuell in der offiziellen Dokumentation bestätigte Kurzbefehle für App und IDE.
sidebar:
  order: 90
locale: de
source_locale: zh-CN
source_revision: 0edf4f3
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Tastenkombinationen unterscheiden sich nach Plattform, Client und eigenen Einstellungen. Diese Seite enthält nur Kombinationen, die in der aktuellen offiziellen Dokumentation ausdrücklich beschrieben sind. Die vollständige Liste findest du in der App unter **Keyboard Shortcuts**.

## Desktop-App

| Aktion | macOS | Windows |
|---|---|---|
| Settings öffnen | `Cmd + ,` | `Ctrl + ,` |
| Activity öffnen/schließen | `Cmd + Option + U` | `Ctrl + Alt + U` |
| Integriertes Terminal öffnen | `Ctrl` + Gravis-Taste | `Ctrl` + Gravis-Taste |
| Befehlspalette der App öffnen | `Cmd + K` | Maßgeblich ist Keyboard Shortcuts |
| Terminalanzeige leeren | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` öffnet die Befehlspalette der App und leert nicht das Terminal.

Unter Keyboard Shortcuts in Settings kannst du nach Befehlsnamen oder Tasten suchen, Belegungen ändern und Standardwerte wiederherstellen. Nach einer Anpassung haben deine lokalen Einstellungen Vorrang vor einer Online-Übersicht.

## IDE

In VS-Code-basierten Editoren legt `chatgpt.composerEnterBehavior` fest, wie Enter und `Cmd/Ctrl + Enter` einen mehrzeiligen Prompt absenden. Gehe nicht davon aus, dass jede Installation dieselbe Sendetaste verwendet.

Während Codex arbeitet, bestimmt `chatgpt.followUpQueueMode`, ob eine neue Nachricht in die Warteschlange kommt oder die aktuelle Ausführung sofort steuert. Mit `Cmd/Ctrl + Shift + Enter` kannst du für eine einzelne Nachricht das aktuelle Standardverhalten umkehren.

Wenn die Codex-Seitenleiste nicht sichtbar ist, führe in der Befehlspalette des Editors Folgendes aus:

```text
Codex: Open Codex Sidebar
```

## CLI

Die Bedienung der CLI-TUI entnimmst du `/help` und den Hinweisen der aktuellen Version. Diese Seite spekuliert nicht über Genehmigungstasten wie `y` oder `n`, da Terminal, Modus und Version die Interaktion verändern können.

Das allgemeine Terminalsignal `Ctrl + C` kann einen laufenden Befehl oder eine Sitzung unterbrechen. Prüfe zuerst den aktuellen Zustand und behandle es nicht als nebenwirkungsfreie „Zurück“-Taste.

## Lernreihenfolge

Lerne zuerst, wie du Settings, Activity und Terminal öffnest und mehrzeilige Prompts sendest. Suche weitere Tastenkombinationen nach den für dich tatsächlich häufigen Aktionen in der App. Teamdokumentation sollte Aktionsnamen beschreiben und keine identischen benutzerdefinierten Belegungen erzwingen.

## Offizielle Grundlage

- [Desktop app settings](https://learn.chatgpt.com/docs/app/settings)
- [Notifications and Activity](https://learn.chatgpt.com/docs/notifications)
- [Integrated terminal](https://learn.chatgpt.com/docs/integrated-terminal)
- [IDE settings](https://learn.chatgpt.com/docs/ide/settings)

---

**Status:** verified

**Unterstützte Produkte:** App, CLI, IDE

**Zuletzt geprüft:** 2026-08-26
