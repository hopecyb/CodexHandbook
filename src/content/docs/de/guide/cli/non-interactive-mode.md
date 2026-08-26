---
title: Nicht interaktiver Modus
description: Integriere Codex mit codex exec in Skripte und Pipelines. Geeignet für CI, geplante Aufgaben und automatisierte Abläufe.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: a1cefbe
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Im nicht interaktiven Modus kann Codex Aufgaben **ohne TTY-Dialog** abschließen. So integrieren Entwickler den Agent in Skripte und CI.

Einfach gesagt findet hier kein Gespräch mit mehreren Nachrichten statt. Stattdessen wird die Aufgabe einmal vollständig übergeben.

Der Ablauf ähnelt einem einzelnen Befehlsaufruf.

## Inhalt dieser Seite

- Wann der nicht interaktive Modus einer interaktiven Sitzung mit `codex` vorzuziehen ist
- Welche zusätzlichen Anforderungen Sicherheit und Genehmigungen bei unbeaufsichtigten Läufen stellen
- Wie der Modus mit der [Konfiguration](/de/guide/cli/configuration/) zusammenhängt

## Geeignete Einsatzbereiche

| Geeignet | Nicht geeignet |
|---|---|
| Fest definierter Review-Prompt in CI | Anforderungen müssen in mehreren Runden geklärt werden |
| Nächtliche Prüfung von Dokumentationslinks | Exploratives Refactoring |
| Codegenerierung anhand einer vordefinierten Vorlage | Produktentscheidungen mit hoher Mehrdeutigkeit |

## Grundprinzip

Eine nicht interaktive Ausführung:

1. Nimmt eine **vollständige Aufgabenbeschreibung** als Argument oder über stdin entgegen.
2. Wird in einem angegebenen Arbeitsverzeichnis ausgeführt.
3. Signalisiert Erfolg oder Fehlschlag durch einen Exitcode.
4. Gibt Protokolle oder strukturierte Ergebnisse für nachgelagerte Schritte aus.

Der aktuelle Einstieg für die nicht interaktive Ausführung ist `codex exec`. Führe auch nach einem CLI-Upgrade `codex exec --help` aus, um die im Skript verwendeten Parameter erneut zu prüfen.

## Kleinstes brauchbares Beispiel

```bash
# Eine schreibgeschützte Prüfung im Stammverzeichnis des Repositorys ausführen
codex exec --cd . "Liste Sicherheitsrisiken im Diff gegenüber main auf und ändere keine Dateien"
```

`codex exec` verwendet standardmäßig eine schreibgeschützte Sandbox. Während des Laufs wird der Fortschritt nach `stderr` geschrieben, die abschließende Agent-Antwort dagegen nach `stdout`. Dadurch kannst du das Endergebnis sicher an einen nachgelagerten Schritt umleiten:

```bash
codex exec --cd . "Erstelle Versionshinweise aus den letzten 10 Commits" > release-notes.md
```

Empfehlungen für die Praxis:

- Wechsle im Shell-Skript zuerst mit `cd` in eine saubere Arbeitskopie
- Lege die Aufgabe in einem Heredoc oder einer versionsverwalteten Datei unter `prompts/` ab
- Erfasse den Exitcode und markiere die CI bei einem Fehlschlag als fehlgeschlagen

## Sicheres Design

Unbeaufsichtigt bedeutet: **Du bist nicht anwesend, um eine Aktion abzulehnen.**

| Prinzip | Umsetzung |
|---|---|
| Minimale Berechtigungen | Schreibgeschütztes Token und eingeschränkte Sandbox |
| Kein Push | CI öffnet nur einen PR oder lädt ein Artefakt hoch |
| Fester Prompt | Ungefilterter Text aus einer PR-Beschreibung wird wegen des Injection-Risikos nicht direkt angefügt |
| Audit | Protokolle und Diff-Artefakte aufbewahren |

Siehe [Muster für menschliche Genehmigungen](/de/cases/workflows/human-approval-patterns/) und den Pfad `08-developer-platform/non-interactive/` in der Roadmap.

## Vergleich mit dem interaktiven Modus

| | Interaktiver Modus | Nicht interaktiver Modus |
|---|---|---|
| Einstieg | TUI mit `codex` | `exec` / Pipeline |
| Mensch im Prozess | Stark | Schwach; muss im Voraus gestaltet werden |
| Zum Lernen geeignet | Ja | Nein |
| Für CI geeignet | Nein | Ja |

Interaktive Verwendung: [Interaktiver CLI-Modus](/de/guide/cli/interactive-mode/)

## Eine interaktive Aufgabe in eine nicht interaktive umwandeln

Übergib nicht einfach einen vollständigen Gesprächsverlauf an ein Skript. Komprimiere ihn stattdessen zu einer kleinen Spezifikation:

| Element | Formulierung |
|---|---|
| Ziel | Was ausschließlich in diesem Lauf erledigt werden soll |
| Eingaben | Welche Dateien, Diffs, Protokolle oder stdin-Daten gelesen werden |
| Verbote | Keine Dateien ändern, kein Netzwerk verwenden, nicht pushen, CI nicht unterbrechen usw. |
| Ausgabe | Textzusammenfassung, JSON, Berichtsdatei oder Exitcode |
| Abnahme | Welche Befehle bestehen müssen und welche Begriffe nicht vorkommen dürfen |

Ein nicht interaktiver Prompt sollte wie ein klarer Arbeitsauftrag formuliert sein: eindeutige Grenzen, vollständige Eingaben und ausdrücklich benannte Fehlerbedingungen. Aufgaben, die noch Produktentscheidungen, Designabwägungen oder Berechtigungsbestätigungen benötigen, gehören zunächst in den interaktiven Modus.

## Häufige Missverständnisse

### 1. Sollte ich den effizienteren nicht interaktiven Modus zuerst lernen?

Nein.

Für Einsteiger ist er meist zu schnell und zu strikt. Während der Ausführung gibt es kaum Gelegenheit für Rückfragen und Korrekturen.

### 2. Was ist der wichtigste Unterschied zum interaktiven Modus?

Er lässt sich direkt so zusammenfassen:

- **Interaktiver Modus:** Du kannst während der Arbeit nachfragen, korrigieren und genehmigen
- **Nicht interaktiver Modus:** Die Aufgabe wird in einem Durchlauf ausgeführt und eignet sich für vordefinierte Abläufe

### 3. Wann sollte ich ihn vorerst nicht verwenden?

Bleibe zunächst beim interaktiven Modus, wenn du:

- noch nicht sicher weißt, wie du gute Prompts formulierst
- Ergebnisse noch nicht zuverlässig abnehmen kannst
- Genehmigungen, Sandbox und Berechtigungen noch nicht grundlegend beurteilen kannst

Der nicht interaktive Modus eignet sich für Automatisierungen, nicht für die ersten Experimente. Lerne zuerst den interaktiven Modus und integriere Codex erst danach in Skripte.

## Häufige Fehler

- Einen langen Gesprächsverlauf unverändert in einen einzelnen `exec`-Aufruf übernehmen
- Produktionszugangsdaten und Schreibberechtigungen in CI verwenden
- Die CLI-Version nicht fixieren und dadurch unerwartete Verhaltensänderungen in der Pipeline erhalten

## Quellen
- OpenAI-Dokumentation zur Codex CLI
---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Mit der aktuellen offiziellen Dokumentation zum nicht interaktiven Modus abgeglichen. Verifiziert wurden `codex exec`, `--cd`, die standardmäßig schreibgeschützte Sandbox sowie das Pipeline-Verhalten, bei dem Fortschritt nach `stderr` und die abschließende Antwort nach `stdout` geschrieben werden.

**Zuletzt geprüft:** 2026-08-26
