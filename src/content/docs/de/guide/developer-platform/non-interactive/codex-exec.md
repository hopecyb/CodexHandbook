---
title: codex exec
description: Einstieg für nicht interaktive Ausführungen, der Skripten und CI einmalig eine vollständige Aufgabe übergibt.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: 124836c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Während du mit dem interaktiven `codex` im Dialog arbeitest, übergibt **`codex exec`** eine Aufgabe in einem Durchlauf und liefert nach ihrer Ausführung ein Ergebnis zurück.

Der Befehl ist der Kern des [nicht interaktiven Modus](/de/guide/cli/non-interactive-mode/): Es gibt keinen Dialog und keine Rückfragen während der Arbeit. Beim Prozessende erhältst du entweder ein Ergebnis oder einen Fehlerstatus. Dieses Kapitel richtet sich an Integratoren der [Entwicklerplattform](/de/guide/developer-platform/) und an alle, die Codex erstmals in ein Skript oder CI einbinden möchten.

## Inhalt dieser Seite

- Unterschiede zwischen `exec` und dem interaktiven `codex`
- Kleinste Befehlsform und Arbeitsverzeichnis
- Anforderungen an Genehmigungen und Sandbox bei unbeaufsichtigten Läufen

## Was `exec` ausführt

Du kannst `codex exec` als einmaligen Arbeitsauftrag verstehen:

- Ein Arbeitsauftrag wird übergeben
- Nach seiner Ausführung wird das Ergebnis zurückgegeben

Sobald der Auftrag eindeutig formuliert ist, führt Codex ihn aus, gibt das Ergebnis zurück und beendet den Prozess.

Der Modus eignet sich daher besonders, wenn:

- die Aufgabengrenzen bereits feststehen
- keine Rückfragen während der Ausführung nötig sind
- derselbe Ablauf später zuverlässig wiederholt werden soll

## Weshalb der Modus existiert

In CI führst du kein Gespräch mit Codex und kannst nicht davon ausgehen, dass die Ausführung zehnmal auf eine Antwort wartet.

Typische Einsatzbereiche für `codex exec` sind deshalb:

- automatisierte Code-Reviews
- geplante Aufgaben
- Stapelverarbeitung
- einzelne Analyse- oder Generierungsschritte in einer Pipeline

Der Befehl eignet sich für Situationen, in denen **die Aufgabengrenzen bereits eindeutig beschrieben sind**. Für eine noch offene Untersuchung ist der interaktive Modus normalerweise geeigneter.

:::note
**Befehlsname und Parameter richten sich nach der offiziellen CLI.** Führe nach einem Upgrade `codex --help` und `codex exec --help` aus.
:::

## Kleinste brauchbare Vorgehensweise

```bash
cd /path/to/repo
codex exec --cd . "Nur lesen: Vergleiche den Diff des aktuellen Branches mit main, liste die 3 größten Sicherheitsrisiken auf und ändere keine Dateien"
```

Standardmäßig läuft der Befehl in einer schreibgeschützten Sandbox. Wenn Änderungen im Arbeitsbereich erlaubt sein sollen, gib dies ausdrücklich an:

```bash
codex exec --cd . --sandbox workspace-write "Behebe die fehlschlagenden Tests und ändere nur src/auth und tests/auth"
```

Fortschritt wird nach `stderr`, die abschließende Antwort nach `stdout` geschrieben. Verwende `--json`, wenn eine Maschine den vollständigen Ereignisstrom verarbeiten soll. Verwende `-o` / `--output-last-message`, wenn nur die letzte Nachricht in einer Datei benötigt wird, und ergänze `--output-schema`, wenn stabile Felder erforderlich sind.

Grundregeln:

- Wechsle in Shell-Skripten zuerst mit `cd` in einen sauberen Worktree
- Lege den Prompt unter `prompts/` im Repository oder in einem Heredoc ab, um Fehler beim Shell-Escaping zu vermeiden
- Entscheide in CI anhand des **Exitcodes** über Erfolg oder Fehlschlag

## Eine leicht übersehene Konsequenz

Im interaktiven Modus kannst du nachträglich sagen: „So war das nicht gemeint.“  
Im `exec`-Modus kann **eine ungenaue erste Beschreibung den gesamten Lauf in die falsche Richtung lenken**.

Formuliere deshalb in einem `exec`-Prompt deutlicher als sonst:

- Was soll erledigt werden?
- Was darf nicht geschehen?
- Welches Ausgabeformat wird erwartet?
- Was gilt als abgeschlossen?
- Wie soll der Prozess bei einem Fehler enden?

## Häufige Missverständnisse

### `exec` eignet sich für feste Aufgaben

Viele Einsteiger halten ihn für einen „fortgeschrittenen CLI-Modus“.

Genauer ist: Er eignet sich vor allem für **stabil wiederholbare Ausführungen**.

### Ein kurzer Auftrag ist nicht automatisch eindeutig

Im interaktiven Modus kannst du eine ungenaue Aussage später ergänzen.

Wenn ein kurzer `exec`-Prompt Grenzen, Einschränkungen und Erfolgskriterien auslässt, ist er nicht eleganter, sondern schwerer zu kontrollieren.

## Empfohlener Workflow

```text
Repository vorbereiten (checkout, install, schreibgeschütztes Token)
    → Prompt-Version fixieren (Git-SHA)
    → codex exec
    → stdout / Artefakt erfassen
    → CI bei einem Exitcode ungleich 0 fehlschlagen lassen, nicht unbegrenzt erneut versuchen
```

Die Fortsetzung beschreibt [Skripte und Pipelines](/de/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Als was du `codex exec` betrachten kannst

- Einen skriptfähigen Befehl für eine einzelne Aufgabe
- Einen geeigneten Baustein für Skripte, CI und geplante Aufgaben

Aus diesem Grund integrieren viele Teams den Befehl hinter `make review`, GitHub Actions, cron oder einer Schaltfläche ihrer internen Plattform.

## Vergleich mit dem interaktiven Modus

| | Interaktives `codex` | `codex exec` |
|---|---|---|
| Rückfragen | Mehrere Runden möglich | Muss in einem Durchlauf eindeutig sein |
| Genehmigungen | Mensch ist anwesend | Richtlinie muss vorher eingeschränkt werden |
| Geeignet für | Lernen und Untersuchen | CI und cron |

## Entscheidungshilfe

- Wenn du Anforderungen noch untersuchst und deine Vorgaben wahrscheinlich häufig änderst, verwende den interaktiven Modus.
- Wenn die Aufgabe bereits als feste Vorlage vorliegt und stabil wiederholt werden soll, verwende `codex exec`.

`codex exec` eignet sich am besten für Aufgaben, die bereits eindeutig beschrieben sind und später erneut ausgeführt werden sollen. Solange du die Anforderungen während der Arbeit noch veränderst, gehört der Ablauf nicht in einen nicht interaktiven Prozess.

## Häufige Fehler

- Einen langen Chatverlauf in einen einzelnen `exec`-Aufruf einfügen
- In CI ein Token mit Schreibzugriff verwenden und ungefilterten PR-Text in den Prompt aufnehmen
- Die CLI-Version nicht fixieren und dadurch unerwartete Pipelinefehler erhalten
- Einen Exitcode ungleich null ignorieren und die Pipeline trotzdem als grün markieren
- Eine komplexe Aufgabe mit menschlicher Entscheidung in einen unbeaufsichtigten Ablauf zwingen

## Sicherheitsgrenzen

- Unbeaufsichtigte Ausführung schwächt [menschliche Genehmigungen](/de/cases/workflows/human-approval-patterns/); verwende standardmäßig Schreibschutz
- Siehe [Sichere Zugangsdaten](/de/guide/developer-platform/ci-cd/code-review-automation/#sichere-zugangsdaten) im selben Kapitel

## Abnahmecheckliste

- [ ] Lokal und in CI wird dieselbe Prompt-Datei verwendet
- [ ] CI behandelt den Exitcode korrekt
- [ ] Protokolle enthalten keine Zugangsdaten oder personenbezogenen Daten
- [ ] Sandbox und Regeln sind mindestens so streng wie bei der interaktiven Entwicklung

## Verwandte Kapitel

- [Nicht interaktiver CLI-Modus](/de/guide/cli/non-interactive-mode/)
- [Strukturierte Ausgabe](/de/guide/developer-platform/non-interactive/structured-output/)
- [Exitcodes und Wiederholungsversuche](/de/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Quellen
- OpenAI-Dokumentation zur Codex CLI
---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Mit den aktuellen offiziellen Seiten zum nicht interaktiven Modus und zu Developer commands abgeglichen. Verifiziert wurden der stabile Einstieg `codex exec`, `--cd` / `-C`, die standardmäßig schreibgeschützte Sandbox, `workspace-write` sowie JSONL- und Schema-Ausgaben.

**Zuletzt geprüft:** 2026-08-26
