---
title: Hook-Konfigurationsbeispiele
description: Anpassbare Hook-Konfig und Skript-Skelette — Secret-Scan, Audit-Log, Formatprüfung.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Bei Hook-Beispielen zuerst klären, was sie verhindern sollen — dann an die eigene Umgebung anpassen.

Kapitel mit **illustrativen** Konfigs und Skripten. Feldnamen und Pfade: [offizielle Doku](https://developers.openai.com/codex) und lokales `codex --help`; vor dem Kopieren in isoliertem Repo testen.

Vorab: [Hooks-Überblick](/skills/hooks/hooks-overview/) · [Hook-Ereignistypen](/skills/hooks/hook-event-types/)

## Vor Nutzung den Scope klären

Keine „Standardantwort zum Blindkopieren“.  
Drei Muster:

- Nur aufzeichnen
- Zuerst blockieren
- Leichte Eingabeprüfung

Zuerst Idee, dann ggf. erweitern.

## Beispiel 1: Nach Werkzeugaufruf Audit-Log (nur lesen)

**Ziel:** Wer wann welche Pfade geschrieben hat — ohne Secrets bei fehlgeschlagener Maskierung zu speichern.

`hooks.json` (illustrativ):

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`:

```bash
#!/usr/bin/env bash
# stdin: JSON-Payload (Struktur laut offizieller Doku)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**Abnahme:** Nach einem Dateischreiben eine Logzeile; Exit-Code immer 0.

Nur Aufzeichnen, kein Verhaltenswechsel — niedrigstes Risiko, guter Start.

## Beispiel 2: Vor Werkzeugaufruf vermutete Secrets blockieren

**Ziel:** Diff oder Schreibinhalt matched AWS-Access-Key-Muster → `block`.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

Kernlogik `secret-scan.sh` (illustrativ):

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**Abnahme:** Teststring mit `AKIA` wird blockiert; normales `git status` geht durch.

:::caution
Regex-Scans haben Fehlalarme/Lücken — nur Ergänzung; echte Secrets über Secret Scanner und pre-commit, siehe [sensitiver Kontext](/guide/context/sensitive-context/).
:::

Solche Beispiele erst, wenn echte Aktionen gestoppt werden sollen. Direkt mit Block-Hooks starten erhöht den Debug-Aufwand.

## Beispiel 3: Länge und Schlüsselwörter beim Prompt-Submit

**Ziel:** Offensichtliche Versuche, Systemanweisungen zu überschreiben, ablehnen (vereinfacht).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**Abnahme:** Überlänge und Treffer scheitern; normale Aufgaben gehen durch.

Mindestens:

- Eingabe lesen können
- Klare Fehlermeldung
- Normale Requests nicht massiv falsch treffen

## Mit Teamregeln aus einer Quelle

Verbotene Befehlsteilstrings nach `tools/codex-policy.json` ziehen — Hook und [Befehlsregeln](/guide/customization/rules/command-rules/) lesen gemeinsam, Doppelpflege vermeiden.

## Häufige Irrtümer

### 1. Läuft das Beispiel, kann es in Produktion

Wert: Struktur und Idee — nicht Blind-Go-Live.

### 2. Block-Hooks sind „reifere“ Log-Hooks

Viele Teams starten mit Log, prüfen Fehlalarme und Performance, dann warn oder block.

### 3. Beispiele sind nur Skript-Schreibstil

Auch sehen:

- An welches Ereignis gehängt
- Welche Fehlschlag-Strategie
- Kann das Team erklären, warum so gestoppt wird

## Hook testen

```bash
# Skript mit Fixture (illustrativ)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## Typische Reihenfolge

1. Read-only-Log
2. Warn
3. Block

So trennst du „Logik richtig“ von „Team will wirklich blockieren“.

Hook-Beispiele zum Lernen von Idee und Struktur — nicht 1:1 in Produktion.

## Häufige Fehler

- Skript ohne `chmod +x` → stilles Scheitern
- `timeout_ms` zu kurz → Fehlblock
- Log-Pfad nicht schreibbar → ganze Hook-Kette scheitert
- Im Hook volles Payload per `curl` nach außen

## Abnahme-Checkliste

- [ ] Jeder Hook hat Fixture-Tests
- [ ] Fehlschlag-Strategie (block/warn) = Teampolitik
- [ ] Konfig und Skript im selben Repo, selber PR-Review
- [ ] Doku mit Prüfdatum und CLI-Version

## Quellen
- OpenAI Codex Hooks-Beispiele
---

**Status:** outdated  
**Anwendbare Produkte:** CLI / App (versionsabhängig)  
**Nachprüfhinweis:** Enthält Hook-Konfigstruktur, Ereignisnamen, Payload-Felder und Skriptbeispiele — stark implementationsabhängig, ohne stabile öffentliche Grundlage.  
**Zuletzt geprüft:** 2026-07-26
