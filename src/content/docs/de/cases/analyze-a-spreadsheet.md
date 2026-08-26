---
title: Eine Tabelle analysieren
description: Tabellendaten hochladen oder referenzieren und Zusammenfassungen sowie Insights erzeugen.
locale: de
source_locale: zh-CN
source_revision: fa6b8e1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Eine Tabelle analysieren

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Autoren / Business |
| Client | App |
| Geschätzte Dauer | 30–60 Minuten |

## 1. Ziel und Kontext

**Ziel:** CSV/Excel bereinigen, zusammenfassen und Visualisierungsvorschläge liefern.

**Erfolgskriterien:** Schlussfolgerungen sind reproduzierbar; zentrale Zahlen lassen sich auf Zeilen/Spalten der Originaltabelle zurückführen.

## 2. Empfohlener Prompt

```text
Eingabe: @data/sales-q1.csv
Ziel: Umsatz nach Region zusammenfassen, Veränderung gegenüber Vorperiode, Top-3-Produkte; Ausreißer markieren.
Einschränkungen: Originaldatei nicht ändern; Ausgabe summary.md und optional Chart-Beschreibung.
Akzeptanz: Jede Zahl in summary mit Berechnungsweg oder Spaltennamen versehen.
```

## 3. Überprüfung

- 2–3 Summenwerte stichprobenartig nachrechnen
- Sicherstellen, dass keine PII in Logs oder nach außen geschrieben wird

## 4. Verwandt

- [Tabellen und Spreadsheets](/de/guide/files-and-artifacts/tables-and-spreadsheets/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin „Query tabular data“ und „Clean and prepare messy data“. Das Beispiel auf dieser Seite fokussiert auf nur lesendes Bereinigen, Zusammenfassen und Anomalieanalyse von CSV/Excel und verlangt, dass zentrale Zahlen auf Felder der Originaltabelle zurückführbar sind — im Einklang mit den aktuellen offiziellen Szenarien.  
**Zuletzt geprüft:** 2026-07-26
