---
title: codex exec
description: 'Einstieg in die nicht-interaktive Ausführung — in Skripten und CI einmalig eine vollständige Aufgabe starten.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Wenn interaktives `codex` nebenher plaudert und arbeitet, gibt **`codex exec`** die Aufgabe einmal ab und liefert am Ende Ergebnis oder Fehlerstatus.

Es ist der Kern des [Nicht-interaktiven Modus](/guide/cli/non-interactive-mode/): kein Hin und Her, kein Nachfragen mittendrin — der Prozess endet mit Ergebnis oder Fehler. Dieses Kapitel richtet sich an Integratoren der [Entwicklerplattform](/guide/developer-platform/) und an alle, die Codex zum ersten Mal in Skripte oder CI bringen wollen.

## Inhalt dieser Seite

- Unterschiede zwischen `exec` und interaktivem `codex`
- Minimale Befehlsform und Arbeitsverzeichnis
- Anforderungen an Freigabe und Sandbox ohne Aufsicht

## Was `exec` macht

`codex exec` lässt sich so verstehen:

- einmaligen Arbeitsauftrag ausstellen
- nach Abschluss Ergebnis zurückgeben

Steht der Auftrag klar, läuft er danach; am Ende bekommen Sie das Ergebnis und der Prozess endet.

Am besten geeignet, wenn:

- die Aufgabengrenzen feststehen
- keine Klärung mittendrin nötig ist
- Sie später stabil wiederholen wollen

## Warum es existiert

In CI chatten Sie nicht mit Codex und erwarten nicht, zehnmal nachgefragt zu werden.

Typische Einsatzfelder für `codex exec`:

- Code-Review-Automatisierung
- Cron-Jobs
- Batch-Skripte
- Einzelschritte Analyse/Generierung in Pipelines

Es passt zu Szenarien, in denen die **Aufgabengrenze klar ist**; bei unklarem Explorieren ist der Interaktive Modus meist besser.

:::note
**Befehlsnamen und Parameter richten sich nach der offiziellen CLI.** Nach Upgrades `codex --help` und `codex exec --help` prüfen.
:::

## Minimal nutzbares Vorgehen

```bash
cd /path/to/repo
codex exec --cwd . "Nur lesen: Diff zwischen aktuellem Branch und main vergleichen, 3 höchste Sicherheitsrisiken auflisten, keine Dateien ändern"
```

Prinzipien:

- Im Shell-Skript zuerst in einen sauberen Worktree `cd`
- Prompt in versioniertem `prompts/` oder Heredoc — Shell-Escaping-Fehler vermeiden
- In CI Erfolg/Fehler am **Exit-Code** festmachen

## Leicht übersehene Realität

Im Interaktiven Modus können Sie noch „so war das nicht gemeint“ nachschieben.  
Im `exec`-Modus kann **ein falscher erster Prompt** die ganze Runde schiefgehen.

Schreiben Sie `exec`-Prompts deshalb klarer als sonst:

- Was tun
- Was nicht tun
- Ausgabeformat
- Was „fertig“ bedeutet
- Wie bei Fehler beendet werden soll

## Häufige Missverständnisse

### `exec` eignet sich für feste Aufgaben

Viele sehen darin zuerst den „fortgeschrittenen CLI-Modus“.

Genauer: Er eignet sich zum **stabilen Wiederholen**.

### Kurz heißt nicht klar

Im Interaktiven Modus können Sie unklar starten und nachbessern.

Im `exec` führt ein kurzer Prompt ohne Grenzen, Einschränkungen und Erfolgskriterien oft nicht zu Eleganz, sondern zu Kontrollverlust.

## Empfohlener Workflow

```text
Repo vorbereiten (checkout, install, Read-only-Token)
    → Prompt-Version fixieren (git sha)
    → codex exec
    → stdout / Artifact sammeln
    → bei Nicht-0 CI fehlschlagen lassen, nicht endlos retryen
```

Anschluss an [Skripte und Pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Wofür man es halten kann

- einmaliger, skriptfähiger Aufgabenbefehl
- geeignet für Skripte, CI oder Cron

Deshalb hängen Teams ihn oft hinter `make review`, GitHub Actions, Cron oder interne Plattform-Buttons.

## Vergleich mit dem Interaktiven Modus

| | `codex` interaktiv | `codex exec` |
|---|---|---|
| Nachfragen | Mehrere Runden möglich | Muss einmal klar sein |
| Freigabe | Mensch anwesend | Vorab Policy straffen |
| Geeignet | Lernen, Explorieren | CI, Cron |

## Wenn Sie unsicher sind

- Anforderungen noch unklar, häufige Kurskorrekturen: Interaktiver Modus
- Aufgabe als Vorlage fix, nur stabil wiederholen: `codex exec`

`codex exec` passt am besten zu „schon klar gesagt, später wiederholen“; wenn Sie noch umdenken, nicht vorschnell in den Nicht-interaktiven Ablauf zwängen.

## Häufige Fehler

- Lange Chat-Historie in einen einzelnen exec stopfen
- CI mit Schreib-Token und unbereinigtem PR-Body im Prompt
- CLI-Version nicht fixiert → plötzliche Pipeline-Fehler
- Nicht-null Exit-Code ignorieren und trotzdem green markieren
- Komplexe Aufgaben mit menschlicher Beurteilung unüberwacht erzwingen

## Sicherheitsgrenzen

- Unüberwacht = abgeschwächte [menschliche Freigabe](/cases/workflows/human-approval-patterns/), Standard Read-only
- Siehe [Berechtigungen und Sicherheit](/guide/developer-platform/ci-cd/code-review-automation/#berechtigungen-und-sicherheit) (Querverweis im gleichen Kapitel)

## Abnahme-Checkliste

- [ ] Lokal und CI dieselbe Prompt-Datei
- [ ] Exit-Codes von CI korrekt ausgewertet
- [ ] Logs ohne Secrets und PII
- [ ] Sandbox und Regeln gleich streng oder strenger als in der interaktiven Entwicklung

## Verwandte Kapitel

- [CLI Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/)
- [Strukturierte Ausgabe](/guide/developer-platform/non-interactive/structured-output/)
- [Exit-Codes und Retries](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Quellen
- OpenAI Codex CLI-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Diese Seite liefert nützliche Ideen zu `codex exec`, `--cwd` und nicht-interaktiver Integration, aber es fehlt ausreichend starke aktuelle offizielle Dokumentation, um Befehlsentry, Parameter und Verhaltensdetails zeilenweise zu bestätigen; vor `verified` aktuelle CLI-Grundlage nachziehen.  
**Zuletzt geprüft:** 2026-07-26
