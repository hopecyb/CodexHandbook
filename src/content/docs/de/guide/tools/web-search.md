---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "OpenAI-API-Modelldoku listet `Web search` weiterhin als Werkzeugfähigkeit; Seite betont „Fakten ergänzen, Primärquellen, Schlussfolgerung am Original prüfen“ — unabhängig von konkreter UI."
  checkedAt: "2026-07-26"
title: Web-Suche
description: Fakten per Suche ergänzen und Quellen markieren.
locale: de
source_locale: zh-CN
source_revision: "7adcb92"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 30
---

Web-Suche ergänzt Fakten — sie ersetzt nicht Ihre finale Schlussfolgerung.

Geeignet: öffentliche Doku, Fehlercodes, Versionshinweise. Nicht geeignet: Suchergebnis als finale Rechts-/Medizinentscheidung.

Quellen verlangen und manuell öffnen. Mit [Quellen validieren](/de/guide/quality/validate-sources/) kombinieren.

## Wofür Suche taugt

Vor allem:

- Wohin schauen
- Welche Infos weiter prüfen
- Gibt es autoritativere Quellen

Sie findet Material — danach zurück zum Original.

## Häufige Missverständnisse

### 1. Gefunden = zuverlässig?

Nein. Gefunden ≠ vertrauenswürdig; flüssige Zusammenfassung ≠ genau.

### 2. Wann Suche?

Typisch:

- Offizielle Doku
- Fehlermeldungen
- Versionsänderungen
- Öffentliche Web-Fakten

### 3. Zusammenfassung direkt zitieren?

Nicht direkt. Stattdessen:

1. Die Quellen der Suchtreffer prüfen
2. Originalseite öffnen
3. In eigenen Worten zusammenfassen

### 4. Wann nicht nur Suche?

Wenn:

- Rechtliche, medizinische oder finanzielle Entscheidungen mit hohem Risiko
- Echtes Seitenverhalten prüfen
- Lokale Projektdateien statt öffentliche Quellen

Dann andere Werkzeuge oder menschliche Prüfung.

## Suchreihenfolge

1. Keywords nahe am Problem
2. Offizielle oder Primärquellen bevorzugen
3. Original für Details öffnen
4. Dann entscheiden, ob die Schlussfolgerung in das Ergebnis aufgenommen werden soll

## Direkt nutzbarer Prompt

```text
Zuerst suchen und offizielle Quellen bevorzugen; bei Schlussfolgerungen klickbare Links — keine reine Suchzusammenfassung.
```

Suche liefert Spuren und Quellen — am Ende zurück zum Original.
