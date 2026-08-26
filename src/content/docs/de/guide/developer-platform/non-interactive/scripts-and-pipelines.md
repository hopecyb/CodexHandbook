---
title: Skripte und Pipelines
description: Orchestriere codex exec wiederholbar und auditierbar in Shell, Makefile und GitHub Actions.
sidebar:
  order: 20
locale: de
source_locale: zh-CN
source_revision: ce1e940
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Diese Seite zeigt, wie aus einer einmaligen Codex-Aktion ein **wiederholbarer Teamablauf wird, der sich bei Problemen nachvollziehen und von anderen übernehmen lässt**.

Ein Skript fixiert den Ablauf; eine Pipeline führt ihn nach festen Regeln wiederholt aus.

Das Kapitel beschreibt die Einbindung von [codex exec](/de/guide/developer-platform/non-interactive/codex-exec/) in Shell, Makefile oder eine CI-Pipeline.

## Inhalt dieser Seite

- Aufgabenteilung zwischen lokalem Skript und CI-Job
- Verwaltung von Prompts und Zugangsdaten
- Zusammenspiel mit der [Automatisierung von Code-Reviews](/de/guide/developer-platform/ci-cd/code-review-automation/)

## Welches Problem hier gelöst wird

Skripte und Pipelines verwandeln „Ich habe das heute einmal manuell so gemacht“ in „Das Team kann denselben Ablauf später zuverlässig wiederholen“.

Drei Eigenschaften sind dabei besonders wichtig:

- Wiederholbarkeit
- Auditierbarkeit
- Übergabefähigkeit

## Weshalb Teams einen Prompt nicht einfach in die CI-Oberfläche einfügen

Ein solcher Prompt lässt sich schwer pflegen:

- Eine neue zuständige Person kennt die ursprünglichen Gestaltungsentscheidungen nicht
- Eine Logikänderung kann nicht regulär durch ein Code-Review gehen
- Nach einem Fehler ist kaum feststellbar, ob Prompt, Umgebung oder Skript verändert wurde

Prompt, Skript und Regeln in Git abzulegen, versieht den Automatisierungsablauf mit Versionsverwaltung.

## Häufige Missverständnisse

### Automatisierung erfordert Stabilität, nicht einen möglichst frühen Start

Bei der ersten Automatisierung wird häufig sofort ein vollständiger End-to-End-Ablauf gebaut.

Solange sich der Prompt häufig ändert, Erfolgskriterien unklar sind oder Berechtigungsgrenzen nicht feststehen, erschwert eine frühe Automatisierung die spätere Fehlersuche.

### Skripte halten Vorgehensweisen fest

Ein gutes Skript verwandelt Schritte, die sonst im Gedächtnis einzelner Personen liegen, in eine für alle verständliche und prüfbare Datei.

## Minimales Shell-Fragment

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

`prompts/ci/security-review.md` wird in Git verwaltet und bei Änderungen reviewt.

## Die wichtigsten ersten Gewohnheiten

Versuche bei deiner ersten Automatisierung nicht sofort, jedes Detail abzudecken. Fixiere zunächst drei Punkte:

1. Wo liegt die Prompt-Datei?
2. Wie heißt das Einstiegsskript?
3. Wie werden Erfolg und Fehlschlag bestimmt?

Wenn diese Grundlagen stehen, lassen sich Protokolle, Schema und Benachrichtigungen später deutlich einfacher ergänzen.

## GitHub Actions: Offizielle Action verwenden

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - name: Run review
        uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: prompts/ci/pr-review.md
```

:::caution
Verwende in GitHub Actions vorzugsweise die offizielle `openai/codex-action`. Stelle den API-Key nicht als Umgebungsvariable für einen vollständigen Job bereit, der Repository-Code ausführt. Falls ein späterer Schritt in einen PR schreiben muss, trenne Schreibberechtigung und Zugangsdaten in unterschiedliche Jobs und übergib Änderungen als Patch-Artefakt.
:::

## Empfohlener Workflow

| Ebene | Inhalt |
|---|---|
| Repository | `prompts/`, `tools/run-codex.sh` |
| CI | Schreibgeschützter Checkout, fixierte CLI, hochgeladenes Protokollartefakt |
| Callback | Optional mit einem [Webhook](/de/guide/developer-platform/webhooks/overview/) ein internes System aktualisieren |

## Entscheidungshilfe

Ein Vorgang eignet sich für ein Skript oder eine Pipeline, wenn beide Bedingungen erfüllt sind:

- Du führst ihn wiederholt aus
- Die Vorgehensweise soll bei jedem Lauf möglichst gleich sein

Beispiele sind PR-Reviews, Änderungszusammenfassungen, Sicherheitsprüfungen und Dokumentationschecks.

Automatisiere einen noch instabilen Prozess nicht sofort vollständig. Halte die Vorgehensweise zunächst in einem Skript fest und binde das Skript anschließend in die Pipeline ein.

## Häufige Fehler

- `${{ github.event.pull_request.body }}` ohne Escaping dynamisch an den Prompt anhängen und damit eine Injection ermöglichen
- Denselben PR ohne Parallelitätskontrolle mehrfach ausführen und Kontingent verbrauchen
- Lokaler Lauf besteht, aber in CI fehlen Abhängigkeiten, weil `npm ci` nicht ausgeführt wurde
- Als Erfolgskriterium nur „Prozess beendet“ verwenden und keine strukturierte Schlussfolgerung auswerten
- Der ersten Automatisierung sofort zu weitreichende Schreibberechtigungen geben

## Sicherheitsgrenzen

- CI-Token mit minimalen Berechtigungen verwenden; `git push` nur in einem gesonderten Genehmigungsjob erlauben
- Zugangsdaten in Workflows für PRs aus Forks mit besonderer Vorsicht verwenden; `pull_request_target` erfordert ein Sicherheitsreview

## Abnahmecheckliste

- [ ] Prompt und Skript sind in Git versioniert
- [ ] Ein CI-Fehler blockiert die Zusammenführung, sofern die Richtlinie dies verlangt
- [ ] Die Aufbewahrung von Artefakten erfüllt die Compliance-Anforderungen
- [ ] Das Verhalten entspricht dem lokalen `make review`

## Quellen
- Dokumentation zur Integration von OpenAI Codex und GitHub
---

**Status:** verified

**Unterstützte Produkte:** CLI / GitHub Actions

**Prüfgrundlage:** Mit den aktuellen offiziellen Empfehlungen zum nicht interaktiven Modus und zur Codex GitHub Action abgeglichen. `--cd` wurde korrigiert; die Trennung des Jobs mit API-Key von Repository-Schreibberechtigungen ist die standardmäßige Sicherheitsgrenze.

**Zuletzt geprüft:** 2026-08-26
