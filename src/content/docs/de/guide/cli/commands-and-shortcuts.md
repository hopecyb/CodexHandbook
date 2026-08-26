---
title: Befehle und Kurzbefehle
description: CLI-Unterbefehle, Aktionen innerhalb einer Sitzung und Gewohnheiten bei der Tastaturbedienung. Die vollständigen Parameter stehen im Referenzbereich.
sidebar:
  order: 50
locale: de
source_locale: zh-CN
source_revision: 6a36a12
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Effizientes Arbeiten im Terminal beruht auf drei Bereichen: **Startmodus**, **schnelle Aktionen innerhalb einer Sitzung** und **Zusammenspiel mit Skripten und Editoren**. Diese Seite erläutert Verwendung und Arbeitsgewohnheiten. Parametertabellen findest du in der [Referenz der CLI-Befehle](/de/guide/reference/commands/) und unter [Tastenkombinationen](/de/guide/reference/keyboard-shortcuts/).

## Inhalt dieser Seite

- Wann du `codex` und wann du `codex exec` verwendest
- Welche häufigen Aktionen eine interaktive Sitzung bietet
- Wie du wiederkehrende Aktionen als Alias oder Skript festhältst

## Was du zuerst unterscheiden solltest

Viele Einsteiger nehmen beim ersten Kontakt mit der CLI an, sie müssten für „Befehle und Kurzbefehle“ vor allem Syntax und Parameter auswendig lernen.

In der Praxis ist es hilfreicher, zunächst drei Situationen zu unterscheiden:

- Möchtest du **im Dialog arbeiten und Änderungen begleiten**?
- Soll eine Aufgabe **in einem Durchlauf vollständig ausgeführt** werden?
- Oder möchtest du nur einen häufig wiederholten eigenen Ablauf verkürzen?

Sobald das klar ist, ergibt sich die Wahl des Befehls meist von selbst.

## Überblick über die Befehlseinstiege

| Dein Ziel | Einstieg | Ausführliche Beschreibung |
|---|---|---|
| Code im Dialog ändern | Interaktive TUI mit `codex` | [Interaktiver Modus](/de/guide/cli/interactive-mode/) |
| Einzelne Aufgabe in CI oder Pipeline | `codex exec` | [Nicht interaktiver Modus](/de/guide/cli/non-interactive-mode/) |
| Standardverhalten ändern | Konfigurationsdatei | [CLI-Konfiguration](/de/guide/cli/configuration/) |

:::note
`codex` und `codex exec` sind derzeit beide stabile Einstiege. Die konkreten Parameter entnimmst du weiterhin `codex --help` beziehungsweise `codex exec --help`.
:::

## Häufige Missverständnisse

### `codex` und `codex exec` sind keine einfache und professionelle Stufe

Oft werden sie fälschlich so verstanden:

- Der eine Befehl sei ein einfacher Modus
- Der andere sei ein professioneller Modus

Die praktischere Unterscheidung lautet:

- `codex` eignet sich, wenn du anwesend bist, den Fortschritt beobachtest und steuerst
- `codex exec` eignet sich, wenn du die Aufgabe im Voraus vollständig beschreibst und in einem Durchlauf ausführen lässt

### Mehr Kurzbefehle sind nicht automatisch besser

Zu Beginn musst du nicht alle Tastenkombinationen und `/`-Befehle kennen.

Lerne zunächst:

- wie du eine Sitzung startest
- wo du die in der aktuellen Umgebung unterstützten `/`-Befehle findest
- wie du die Sitzung beendest, neu startest oder das Verzeichnis wechselst

Diese wenigen Grundlagen genügen für den Einstieg.

## Schnelle Aktionen in einer interaktiven Sitzung

Konkrete Tasten und `/`-Befehle können sich zwischen Versionen unterscheiden, ihre Kategorien bleiben jedoch stabil:

### Eingabe und Verlauf

- Mehrzeilige Eingabe: Verwende die in der Produktdokumentation angegebene Tastenkombination, häufig `Shift+Enter`, oder den Editormodus
- Vorherige Aufgabe aufrufen: Verwende den Terminalverlauf oder, falls vorhanden, den Sitzungsverlauf

### Slash-Befehle

Gib am Prompt `/` ein, um integrierte Abläufe wie Review oder Kontextkomprimierung aufzurufen. **Lerne die Liste nicht starr auswendig.** Maßgeblich ist die aktuelle Autovervollständigung für `/`. Eine nach Lernzweck gegliederte Übersicht bietet die [Kurzübersicht der Slash-Befehle](/de/guide/reference/slash-commands/).

### Genehmigungen

Wenn der Agent einen Shell-Befehl ausführen oder eine Datei schreiben möchte, kann die interaktive Oberfläche Optionen zum Genehmigen, Ablehnen oder dauerhaften Erlauben anzeigen. Lies vor einem unbeaufsichtigten Lauf unbedingt [Genehmigungen und Sandbox](/de/guide/cli/approvals-and-sandbox/).

## Kurzbefehle auf Shell-Ebene (empfohlen)

Fasse „Projekt öffnen und Codex starten“ in einer Funktion zusammen, um Fehler beim Verzeichnis zu vermeiden:

```bash
# Beispiel für ~/.zshrc (nach Bedarf anpassen)
cx() {
  cd "$1" || return 1
  codex
}
```

Eine nicht interaktive Prüfung kannst du als Skript kapseln und den Prompt zur Versionsverwaltung in `prompts/review.md` ablegen.

## Eine sinnvolle Lernreihenfolge

Wenn du die CLI gerade erst kennenlernst, gehe in dieser Reihenfolge vor:

1. Starte `codex` im richtigen Verzeichnis.
2. Lerne anschließend, wann `codex exec` die bessere Wahl ist.
3. Fasse erst danach häufige Aktionen als Alias, Funktion oder Skript zusammen.

So vermeidest du, bereits eine zusätzliche Abstraktionsschicht zu bauen, bevor du das zugrunde liegende Werkzeug sicher bedienen kannst.

## Aufgabenteilung mit IDE und App

| | CLI | IDE-Erweiterung |
|---|---|---|
| Kontext | Verzeichnis mit `--cd` / `-C` festlegen, Dateien über Werkzeuge lesen | Geöffnete Dateien und ausgewählter Code |
| Geeignet für | Skripte, SSH-Remotezugriff und reine Terminalarbeit | Änderungen mit direkter Diff-Ansicht |
| Kurzbefehle | Terminaltasten und `/` | Befehlspalette des Editors |

IDE: [Workflow für lokale Aufgaben](/de/guide/ide/local-task-workflow/)

## Häufige Fehler

- Im falschen Verzeichnis starten und versehentlich das benachbarte Projekt ändern
- Den appinternen Befehl `/review` außerhalb der App als Terminal-Unterbefehl ausführen
- Einen ungeprüften „Universal-Prompt“ eines Drittanbieters in eine interaktive Sitzung einfügen

Du musst nicht sofort jeden Befehl und jede Tastenkombination auswendig lernen. Kläre zunächst, ob du die Arbeit im Dialog begleiten oder in einem Durchlauf ausführen lassen möchtest. Danach ist die Befehlswahl deutlich einfacher.

## Abnahmecheckliste

- [ ] Du kannst im Stammverzeichnis des Ziel-Repositorys eine interaktive Sitzung starten
- [ ] Du weißt, wo die in der aktuellen Version unterstützten `/`-Befehle aufgeführt sind
- [ ] Du kannst, sofern in deiner Umgebung verfügbar, eine minimale schreibgeschützte Aufgabe mit `codex exec` formulieren

## Quellen
- OpenAI-Dokumentation zur Codex CLI
---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Mit den aktuellen offiziellen Seiten zu Developer commands und zum nicht interaktiven Modus abgeglichen. Verifiziert wurden `codex`, `codex exec`, `--cd` / `-C` sowie Slash-Befehle innerhalb einer Sitzung. Für Tastenkombinationen verweist die Seite weiterhin auf die aktuelle Autovervollständigung und `--help`.

**Zuletzt geprüft:** 2026-08-26
