---
title: Tastenkürzel
description: 'Lernindex gängiger Shortcuts in App, CLI-TUI und IDE-Erweiterung — aktuelle Version maßgeblich.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Shortcuts unterscheiden sich stark nach **Client und Version**. Diese Seite ordnet nach **Absicht** — ob es einen schnelleren Weg gibt; konkrete Tasten in Hilfe oder Settings des Produkts.

Nicht alles auf einmal lernen. Die wenigen Aktionen, die den Rhythmus am häufigsten unterbrechen, reibungslos zu machen, reicht oft.

:::caution
Tabelle unten ist **illustrativ**, keine vollständige Bindungstabelle. Nach Updates können Tasten wechseln.
:::

## Index nach Absicht

| Absicht | Desktop-App (illustrativ) | CLI-TUI (illustrativ) | IDE-Erweiterung (illustrativ) |
|---|---|---|---|
| Neue Aufgabe/Sitzung | `Cmd/Ctrl+N` oder Seitenleiste | Neu starten / neuer Thread-Befehl | Befehlspalette «Codex» |
| Nachricht senden | `Enter` / `Cmd+Enter` | laut Produktdoku | Senden im Panel |
| Zeilenumbruch ohne Senden | `Shift+Enter` | je TUI | je Panel |
| Befehlspalette | `Cmd/Ctrl+K`-ähnlich | `/` Slash | `Cmd/Ctrl+Shift+P` |
| Historie suchen | Seitenleisten-Suche | Sitzungssuche (falls vorhanden) | Chat-Historie |
| Werkzeugaufruf freigeben | Panel-Button | `y` / Pfeiltasten (je TUI) | Notification oder Inline |
| Ablehnen | Panel-Button | `n` | Inline ablehnen |

**Maßgeblich: UI Ihrer installierten Version.**

## Welche Aktionen zuerst

Shortcuts reduzieren vor allem:

- Senden und erst den Button suchen
- Umbruch und versehentlich senden
- Freigabe und hektisches Klicken
- Neue Aufgabe und unklarer Einstieg

Statt alles zu pauken — zuerst diese 4:

- Senden / Umbruch
- Neue Aufgabe
- Befehlspalette
- Freigeben / Ablehnen

## Slash vs. Tastatur

- **Slash-Befehle**: `/review`, `/help` … — [Slash-Befehle](/guide/reference/slash-commands/)
- **Shortcuts**: UI-Aktion ohne Text

Kombinierbar: zuerst `Cmd+K` Fokus, dann `/review`.

## CLI-Terminalnutzer

- **Ctrl+C** zum Abbrechen außer Kontrolle (Vorsicht: ungespeicherter Zustand?)
- Terminal-Multiplexer (tmux): Codex und `git diff` nebeneinander
- Häufiges `codex exec` als Shell-Alias — [Befehle und Shortcuts](/guide/cli/commands-and-shortcuts/)

## Häufige Missverständnisse

### 1. Shortcuts pauken vor dem Nutzen?

Die häufigsten Aktionen flüssig machen senkt die Kosten stark.

### 2. Andere sind flüssig = ich bin ungeschickt?

Shortcuts sind Muskelgedächtnis nach Familiarität — keine Einstiegshürde.

### 3. Alle Clients auf dieselben Tasten zwingen?

Wichtiger zu wissen:

- Gibt es einen Shortcut für die Aktion?
- Wo nachschlagen und umbinden?
- Welche Aktionen lohnen zuerst

## Am Anfang diese fünf

1. Wie senden
2. Wie Umbruch ohne Senden
3. Wie Befehlspalette
4. Wie freigeben oder ablehnen
5. Wie neue Aufgabe

Sind diese fünf flüssig, weitere Shortcuts nebenbei.

## IDE-Nutzer

- «Ausgewählten Code mit Codex erklären» auf bequeme Taste legen
- Mit nativem Diff und Go-to-Definition — weniger Copy-Paste

[IDE-Einstellungen](/guide/ide/settings/) · [Ausgewählter Code und offene Dateien](/guide/ide/selected-code-and-open-files/)

## Barrierefreiheit und Anpassung

Die meisten Clients erlauben Umbinden in Settings. Teams können **empfohlene Bindungen** dokumentieren — ohne Zwang zur Einheitlichkeit.

Shortcuts sind kein Prüfungsstoff. Die Aktionen, die Sie am häufigsten unterbrechen, flüssig machen reicht meist.

## Quellen

- Offizielle Settings / Keyboard-shortcuts-Seiten der Produkte
- stormzhang `35-cheatsheet.md`
- KimYx0207 CX-03

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Prüfhinweis:** Mehrfach als illustrativ gekennzeichnet, enthält aber Annahmen zu aktuellen Client-Shortcuts, Senden, Palette und Freigabetasten — stark versions-/plattformabhängig; ohne starke einheitliche offizielle Shortcut-Doku.  
**Zuletzt geprüft:** 2026-07-26
