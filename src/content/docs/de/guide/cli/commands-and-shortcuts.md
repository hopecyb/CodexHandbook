---
title: Befehle und Shortcuts
description: CLI-Unterbefehle, Sitzungsoperationen und Tastaturgewohnheiten — produkorientiert; vollständige Parameter in der Referenz.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Effizienz im Terminal kommt aus drei Teilen: **Startweise**, **Shortcuts in der Sitzung**, **Zusammenspiel mit Skript/Editor**. Diese Seite zu Nutzung und Gewohnheiten; Parametertabellen: [CLI-Befehlsreferenz](/guide/reference/commands/) und [Tastaturkürzel](/guide/reference/keyboard-shortcuts/).

## Inhalt dieser Seite

- Wann `codex` vs. `codex exec`
- Welche Operationsarten in interaktiven Sitzungen üblich sind
- Wie Wiederholungen zu Alias oder Skript werden

## Was zuerst trennen

Viele Einsteiger denken bei „Befehle und Shortcuts“ nur an Syntax und Parameter auswendig lernen.

Praktischer zuerst drei Dinge trennen:

- bist du gerade **im Gespräch am Ändern**
- oder soll es **eine Aufgabe einmal durchlaufen**
- oder willst du nur **häufige Aktionen kürzer** machen

Danach wird die Befehlswahl klarer.

## Befehls-Einstiege im Überblick

| Was du willst | Einstieg | Details |
|---|---|---|
| Im Gespräch Code ändern | `codex` interaktive TUI | [Interaktiver Modus](/guide/cli/interactive-mode/) |
| CI / Pipeline, einmalige Aufgabe | `codex exec` (oder Äquivalent) | [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/) |
| Default-Verhalten ändern | Konfigurationsdatei | [CLI-Konfiguration](/guide/cli/configuration/) |

:::note
Unterbefehlsnamen ändern sich mit der Version — maßgeblich ist `codex --help`.
:::

## Häufige Missverständnisse

### `codex` und `codex exec` sind nicht „einfach vs. Profi“

Oft gelesen als:

- einer = einfacher Modus
- einer = Profimodus

Nützlicher:

- `codex`: du bist dabei, siehst zu und steuerst
- `codex exec`: Aufgabe vorher klar, einmaliger Ablauf

### Mehr Shortcuts ≠ besser

Am Anfang nicht alle Tasten und `/`-Befehle lernen.

Zuerst:

- Sitzung starten
- nachschauen, welche `/`-Befehle die Umgebung hat
- beenden, neu starten, Verzeichnis wechseln

Das reicht zum Start.

## „Shortcuts“ in der interaktiven Sitzung

Konkrete Tasten und `/`-Befehle variieren, Kategorien sind stabil:

### Eingabe und Verlauf

- Mehrzeilig: Zeilenumbruch laut Produkt (häufig `Shift+Enter` oder Editor-Modus)
- Vorherige Aufgabe: Terminal- oder Sitzungsverlauf (falls vorhanden)

### Slash-Befehle

`/` am Prompt löst eingebaute Abläufe aus (Überprüfung, Kontextkomprimierung usw.). **Keine tote Liste auswendig** — Completion der aktuellen Umgebung. Lernkategorien: [Slash-Befehl-Übersicht](/guide/reference/slash-commands/).

### Freigabebezogen

Wenn der Agent Shell oder Schreibzugriff will, fragt die UI nach Freigabe / Ablehnung / immer erlauben (falls angeboten). Vor Unbeaufsichtigt: [Freigabe und Sandbox](/guide/cli/approvals-and-sandbox/) lesen.

## Shell-Ebene (empfohlen)

„Ins Projekt + Codex starten“ als Funktion — weniger Verzeichnisfehler:

```bash
# ~/.zshrc Beispiel (nach Bedarf anpassen)
cx() {
  cd "$1" || return 1
  codex
}
```

Nicht-interaktive Reviews als Skript kapseln, Prompt in `prompts/review.md` für Versionskontrolle.

## So familiarisieren

Erste CLI-Schritte:

1. `codex` im richtigen Verzeichnis starten
2. Dann entscheiden, wann `codex exec`
3. Zuletzt häufige Aktionen als Alias, Funktion oder Skript

So vermeidest du „Werkzeug noch nicht flüssig, schon eine Abstraktionsschicht drum“.

## Arbeitsteilung IDE / App

| | CLI | IDE-Erweiterung |
|---|---|---|
| Kontext | `--cwd`, @-Dateien (versionsabhängig) | geöffnete Dateien, Auswahl |
| Geeignet | Skripte, SSH remote, reines Terminal | Ändern und Diff gleichzeitig sehen |
| Shortcuts | Terminaltasten + `/` | Editor-Befehlspalette |

IDE: [Lokaler Aufgaben-Workflow](/guide/ide/local-task-workflow/)

## Häufige Fehler

- Im falschen Verzeichnis starten → Nachbarprojekt ändern
- App-internes `/review` als Shell-Unterbefehl außerhalb ausführen
- Ungeprüfte Drittanbieter-„Universal-Prompts“ in die Interaktivsitzung kleben

Nicht alle Befehle und Shortcuts auswendig. Erst klären: „Gespräch am Ändern oder einmal durchlaufen?“ — dann wird die Wahl einfach.

## Abnahmeliste

- [ ] Interaktivsitzung im Ziel-Repo-Wurzelverzeichnis starten können
- [ ] Wissen, wo aktuelle `/`-Befehle nachgeschlagen werden
- [ ] Eine minimale nur-lesen-`codex exec`-Aufgabe schreiben können (falls Umgebung das bietet)

## Quellen

- OpenAI-Codex-CLI-Dokumentation
- stormzhang `08-cli.md`, `12-slash-commands.md`, `35-cheatsheet.md`
- KimYx0207 CX-03, CX-12

---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Diese Seite betrifft `codex`, `codex exec`, `/`-Befehlskategorien und sitzungsinterne Shortcuts — details ändern sich mit Versionen; aktuelle Official-Befehls-/Shortcut-Dokumentation reicht nicht — nach Rewrite erneut prüfen.  
**Zuletzt geprüft:** 2026-07-26
