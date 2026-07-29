---
title: Strukturierte Ausgabe
description: 'exec so gestalten, dass Ergebnisse maschinenlesbar sind — für Folgeschritte, Dashboards und Gates.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Beim ersten Automatisieren lassen viele Codex „einen vernünftig klingenden Text“ ausgeben. Für Menschen ok — für Skripte nicht.

Strukturierte Ausgabe löst ein klares Problem: Codex soll im von Ihnen festgelegten Format antworten.

Ohne strukturierte Ausgabe bei nicht-interaktiven Aufgaben ist freier Text für Downstream schwer: „bestanden oder nicht“, „wie viele Findings“, „welche Schwere“. Strukturierte Ausgabe macht Ergebnisse für Maschinen weiterverarbeitbar.

## Inhalt dieser Seite

- Wann JSON / Markdown-Tabelle / feste Felder verlangen
- Wie Schema im Prompt definiert wird
- Fallback bei Parse-Fehlern

## Häufige Missverständnisse

### Strukturierte Ausgabe dient dem nächsten Schritt

JSON und Schema klingen nach Ingenieurspedanterie.

Praktisch: Wenn Folgeskripte Erfolg/Fehler entscheiden, Bots kommentieren oder Dashboards anzeigen, brauchen Sie stabile Formate — nicht jedes Mal Rätselraten.

### Stabile Form ≠ zuverlässige Schlussfolgerung

Strukturierte Ausgabe garantiert nur „sieht aus wie gefordert“, nicht dass die Aufgabe richtig verstanden wurde.

Sie löst die Schnittstelle — ersetzt weder Aufgabendefinition noch Ergebnis-Überprüfung.

## Direkte Unterscheidung

- Freier Text: für Menschen
- Strukturierte Ausgabe: für Programme

Wenn als Nächstes `jq`, Skripte, Dashboards, Gate-Regeln oder Kommentar-Bots drankommen, reicht freie Sprache nicht.

## Minimal nutzbares Vorgehen

Am Prompt-Ende Format festnageln:

```text
…(Aufgabenkörper)…

Ausgabeanforderung:
- Nur ein JSON-Objekt, keine Markdown-Codefences
- Felder: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- Ohne Probleme: findings als leeres Array
```

Shell-Parsing (Skizze):

```bash
result=$(codex exec --cwd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Typische Fallstricke

### 1. Nur „gib JSON aus“, nicht „nur JSON“

Das Modell erklärt erst, dann JSON — Parsing bricht.

### 2. Heute ein Feldname, morgen ein anderer

Hängt ein Skript an einem Feld, ist das Schema eine Schnittstelle — nicht freihändig ändern.

### 3. Strukturierte Ausgabe soll alle Unklarheiten lösen

Sie löst „Format stabil“. Ist die Aufgabe unklar, liefert JSON nur stabil verwirrte Ergebnisse.

## Empfohlener Workflow

```text
Schema definieren (Version v1)
    → Prompt referenziert Schema-Datei @schemas/review-output.json
    → exec ausführen
    → jq / eigener Validator prüfen
    → bei Fehlschlag exit 1
```

Bei großer Ausgabe Dateipfad-Feld verlangen; Agent schreibt nach `artifacts/`, CI lädt Artifact hoch.

## Wann strukturieren

Wenn das Ergebnis vom „nächsten Programm“ weiterverarbeitet wird — strukturieren.  
Wenn Menschen lesen und diskutieren — freier Text ist oft natürlicher.

Sobald Programme folgen, soll Codex vereinbarte Felder stabil liefern.

## Vergleich mit SDK

| | CLI + JSON-Prompt | SDK |
|---|---|---|
| Integrationsaufwand | niedrig | mittel |
| Typsicherheit | Konvention + Validierung | SDK-Typen möglich |
| Geeignet | CI-Skripte | Multi-Tenant-Dienste |

Siehe [SDK-Überblick](/guide/developer-platform/sdk-overview/).

## Häufige Fehler

- Erklärungstext um JSON → Parse-Fehler — im Prompt „nur JSON“ betonen
- Schema geändert ohne Versionsbump → alte CI falsch parst
- Secrets in JSON-Feldern in Logs zurückspielen
- Kein klares Exit-Verhalten bei Parse-Fehlern

## Abnahme-Checkliste

- [ ] Schema-Datei oder dokumentierte Felder
- [ ] CI schlägt bei Parse-Fehler explizit fehl
- [ ] Beispielausgaben in `fixtures/` für Regression
- [ ] Strategie konsistent mit [Exit-Codes](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Quellen
- Allgemeine Praxis zu OpenAI Structured Outputs (Konzeptangleichung)
---

**Status:** verified  
**Anwendbare Produkte:** CLI / API  
**Prüfgrundlage:** OpenAI-API-Modell-/Vergleichsdokumentation listet weiterhin `Structured outputs`; Inhalt begrenzt auf die allgemeine Praxis „stabile Ausgabeschnittstelle für nicht-interaktive Aufgaben“; JSON-Schema, Validierung und Fallback sind Engineering-Muster.  
**Zuletzt geprüft:** 2026-07-26
