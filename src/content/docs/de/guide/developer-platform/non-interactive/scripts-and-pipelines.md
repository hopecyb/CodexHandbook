---
title: Skripte und Pipelines
description: 'codex exec in Shell, Makefile und GitHub Actions orchestrieren — wiederholbar und auditierbar.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hier geht es darum, Codex von einer einmaligen Ad-hoc-Aktion in **Schritte zu verwandeln, die das Team wiederholen, bei Problemen nachverfolgen und übergeben kann**.

Kurz: Skripte fixieren den Ablauf; Pipelines wiederholen ihn nach Regeln.

Dieses Kapitel zeigt, wie Sie [codex exec](/guide/developer-platform/non-interactive/codex-exec/) in Shell, Makefile oder CI-Pipelines einbetten.

## Inhalt dieser Seite

- Arbeitsteilung lokales Skript vs. CI-Job
- Verwaltung von Prompt und Secrets
- Kombination mit [Code-Review-Automatisierung](/guide/developer-platform/ci-cd/code-review-automation/)

## Welches Problem wird gelöst

„Skripte und Pipelines“ machen aus „heute habe ich das manuell so gemacht“ ein „das Team kann es künftig auf dieselbe Weise stabil wiederholen“.

Drei Dinge zählen besonders:

- Wiederholbarkeit
- Auditierbarkeit
- Übergabefähigkeit

## Warum viele Teams Prompts nicht direkt in die CI-UI kleben

Das ist schwer wartbar:

- Neue Personen wissen nicht, wie es ursprünglich gedacht war
- Logikänderungen gehen nicht sauber durch Code Review
- Bei Fehlern ist unklar, ob Prompt, Umgebung oder Skript geändert wurde

Prompt, Skript und Regeln in Git zu legen heißt: der Automatisierung Versionskontrolle geben.

## Häufige Missverständnisse

### Automatisierung braucht Stabilität, nicht „je früher desto besser“

Beim ersten Automatisieren wollen viele sofort die ganze Kette verdrahten.

Wenn Prompt noch oft wechselt, Erfolgskriterien unklar und Berechtigungsgrenzen wackelig sind, macht frühe Automatisierung das Debugging später schwerer.

### Skripte fixieren Vorgehen

Ein gutes Skript macht Schritte, die sonst im Kopf stecken, zu Dateien, die jeder lesen und reviewen kann.

## Minimal nutzbares Shell-Fragment

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

`prompts/ci/security-review.md` ins Git; Änderungen über Review.

## Gewohnheiten, die sich zuerst lohnen

Beim ersten Automatisieren nicht „groß und vollständig“ anstreben — zuerst diese drei Dinge fixieren:

1. Wo liegt die Prompt-Datei
2. Wie heißt das Einstiegsskript
3. Wie werden Erfolg und Fehler erkannt

Danach fallen Logs, Schema und Benachrichtigungen leichter.

## GitHub-Actions-Skizze

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # Version pinnten; offizielle Installationsdokumentation maßgeblich
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
Installationsweg und Permission-Scopes im Beispiel an die Sicherheitsanforderungen der Organisation anpassen; Secrets **nicht** im Workflow echoen.
:::

## Empfohlener Workflow

| Ebene | Inhalt |
|---|---|
| Repo | `prompts/`, `tools/run-codex.sh` |
| CI | Read-only-Checkout, feste CLI, Log-Artifact hochladen |
| Callback | optional [Webhook](/guide/developer-platform/webhooks/overview/) für interne Systeme |

## Wann es passt

Wenn beides zutrifft, eignet sich Skript oder Pipeline:

- Sie wiederholen es oft
- Sie wollen jedes Mal möglichst dasselbe Vorgehen

Beispiele: PR-Review, Änderungszusammenfassung, Security-Scan, Dokumentationschecks.

Nicht vollautomatisieren, solange der Ablauf noch instabil ist; zuerst als Skript fixieren, dann in die Pipeline — meist robuster.

## Häufige Fehler

- Dynamisches Zusammenfügen von `${{ github.event.pull_request.body }}` ohne Escaping (Injection)
- Keine Concurrency-Kontrolle am selben PR → doppelte Läufe, Quotenverbrauch
- Lokal OK, CI fehlt Abhängigkeit (kein `npm ci`)
- Erfolgskriterium nur „gelaufen“, ohne strukturierte Auswertung
- Zu hohe Schreibrechte von Anfang an

## Sicherheitsgrenzen

- CI-Token Least Privilege; kein `git push`, außer in einem separat freigegebenen Job
- Workflows bei Fork-PRs vorsichtig mit Secrets (`pull_request_target` braucht Security Review)

## Abnahme-Checkliste

- [ ] Prompt und Skript versioniert in Git
- [ ] CI-Fehler blockiert Merge (falls Policy es verlangt)
- [ ] Artifact-Retention entspricht Compliance
- [ ] Verhalten konsistent mit lokalem `make review`

## Quellen
- OpenAI Codex + GitHub-Integrationsdokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Das Prinzip „Prompt, Skript und Pipeline über Git reviewen“ bleibt gültig; Beispiele hängen an `codex exec`, CLI-Installation und konkreten GitHub-Actions-Anbindungen — hochflüchtige Implementierungsdetails. Nach aktuellem offiziellem Pipeline-Stand wieder auf `verified` setzen.  
**Zuletzt geprüft:** 2026-07-26
