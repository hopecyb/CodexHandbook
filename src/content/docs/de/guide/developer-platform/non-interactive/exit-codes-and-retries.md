---
title: Exit-Codes und Retries
description: 'In Pipelines Erfolg und Fehler von codex exec korrekt lesen — wann retryen, wann sofort fehlschlagen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

CI entscheidet am **Prozess-Exit-Code** über Erfolg/Fehler. Dieses Kapitel erklärt gängige Semantik von [codex exec](/guide/developer-platform/non-interactive/codex-exec/), Retry-Strategien und Idempotenz.

## Inhalt dieser Seite

- Unterschied Exit-Code vs. fachlich „Review nicht bestanden“
- Ob 429/Netzfehler retryen
- Wie Seiteneffekte bei Wiederholung vermeiden

## Was der Exit-Code wirklich sagt

Beim ersten Kontakt: Der Exit-Code ist das kurze Ergebnis, das Programm nach dem Lauf an Skript und CI übergibt.

Meist ohne lange Erklärung:

- diesmal Erfolg
- oder Fehler

„Retry“ beantwortet etwas anderes: Sofort stoppen — oder noch eine Chance geben?

:::note
Konkrete Exit-Code-Tabellen richten sich nach der offiziellen CLI-Dokumentation; die Tabelle unten sind **Designprinzipien** für die Integration.
:::

## Häufige Missverständnisse

### Fehler ist nicht gleich Fehler

Anfänger behandeln jedes Nicht-`0` gleich.

Mindestens unterscheiden:

- Aufgabe ist abgestürzt
- Policy oder Sandbox hat gestoppt
- Externer Dienst war vorübergehend gestört
- Lauf erfolgreich, aber Review-Fazit „nicht bestanden“

Behandlung unterscheidet sich — nicht alles retryen.

### „Auto-Retry“ heißt nicht stabiler

Verschwindet die Ursache durch Retry nicht (fehlende Rechte, Regelblock, schlechter Prompt), verschwendet Retry nur Zeit und Quote.

## Empfohlene Semantik (Konzept)

| Situation | Empfohlene Behandlung |
|---|---|
| `0` | Aufgabe fertig und Prompt-Erfolgskriterien erfüllt |
| Nicht-`0` und Log mit Policy-/Sandbox-Ablehnung | **Nicht** blind retryen — Config oder Prompt fixen |
| Nicht-`0` und API 429/5xx | Begrenzt mit exponentiellem Backoff retryen |
| P0 gefunden, Ausführung aber OK | [Strukturierte Ausgabe](/guide/developer-platform/non-interactive/structured-output/) mit `pass: false` + Skript `exit 1` |

„Sicherheitsproblem gefunden“ sollte nicht über Crash-Exceptions laufen, sondern **explizit** als `pass: false` im JSON; das Wrapper-Skript setzt den Exit-Code.

## Retry-Vorlage (bash)

```bash
max=3
delay=10
for i in $(seq 1 $max); do
  if codex exec --cwd . "$(cat "$PROMPT")"; then
    exit 0
  fi
  code=$?
  if [ "$code" -eq 2 ]; then
    echo "Policy error, not retrying" >&2
    exit "$code"
  fi
  sleep $((delay * i))
done
exit 1
```

Nicht-retrybare Codes an der offiziellen Dokumentation ausrichten und in `case`-Zweige schreiben.

## Idempotenz und Seiteneffekte

| Risiko | Abmilderung |
|---|---|
| Doppelte PR-Kommentare | Check-Run-ID oder „vorhandenen Bot-Kommentar aktualisieren“ |
| Doppeltes Schreiben | exec standardmäßig Read-only-Review; Schreibjobs separat + menschliches Gate |
| Doppelte Benachrichtigungen | Webhook-Benachrichtigungen mit Dedupe-Key |

## Wenn unsicher

Fragen Sie:

1. Wirkt der Fehler wie vorübergehende externe Schwankung?
2. Erzeugt ein erneuter Lauf doppelte Kommentare, Writes oder Notifications?
3. Liegt die Ursache eher an Config, Prompt oder Berechtigungen, die Menschen ändern müssen?

Näher an 1 → begrenzter Retry; näher an 2/3 → stoppen und Ursache beheben.

## Häufige Fehler

- Exit-Code ignorieren, CI immer green
- Policy-Fehler endlos retryen und Quote verbrennen
- Beim Retry Prompt/git-sha nicht fixiert → Ergebnisse unvergleichbar

Zuerst klären: temporärer Ausfall oder durch Retry nicht heilbar — dann entscheiden. Nicht jeder Fehler verdient einen zweiten Lauf.

## Abnahme-Checkliste

- [ ] CI scheitert bei Nicht-0
- [ ] Retry-Anzahl und Backoff begrenzt
- [ ] „Review nicht bestanden“ und „Lauf abgestürzt“ unterscheidbar
- [ ] Logs mit genug Diagnoseinformation

## Verwandte Kapitel

- [Fehlerreferenz](/guide/reference/error-reference/)
- [Fehlerwiederherstellung](/cases/workflows/failure-recovery/)

## Quellen
- OpenAI API Retry-Leitfaden (Konzept)
---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Sinnvolle Engineering-Empfehlungen zu Exit-Codes und Retries; Beispiele mit konkreter Semantik (z. B. `code=2`) und Annahmen zu `codex exec` brauchen stärkere aktuelle CLI-Grundlage, bevor wieder `verified`.  
**Zuletzt geprüft:** 2026-07-26
