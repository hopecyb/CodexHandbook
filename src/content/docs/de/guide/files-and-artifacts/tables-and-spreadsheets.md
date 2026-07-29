---
title: Tabellen und Spreadsheets
description: "CSV, Excel und Tabellendaten lesen, bereinigen, analysieren und exportieren — Struktur und Encoding schützen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Tabellenaufgaben scheitern oft still: Trennzeichen, Encoding, Header, Formeln oder Datumsformate — ein Fehler, Downstream bricht.

## Inhalt dieser Seite

- CSV / Excel sicher mit Codex lesen und schreiben
- Prompt-Struktur für Datenanalyse
- Zahlen und Zeilenanzahl abnehmen

## Formatwahl

| Format | Vorteil | Achtung |
|---|---|---|
| CSV | Text, diffbar, universell | Encoding (UTF-8 BOM), Delimiter, Quote-Escaping |
| TSV | weniger Komma-Konflikte | wie CSV |
| XLSX | Mehrblatt, Formeln | binär, Diff schwer; per Bibliothek |
| Google Sheets | Kollaboration | oft via MCP oder CSV-Export |

Kleine Daten, ins Git: **CSV/TSV bevorzugen**. Komplexe Reports: **Quell-CSV + Skript für XLSX**.

Zuerst drei Punkte:

- Diffbar, nachvollziehbar, reproduzierbar → CSV / TSV
- Excel-gewohnte Empfänger → dann XLSX exportieren
- „Finale Ansichtsformat“ und „beste Quellformat für Automatisierung“ nicht vermischen

## Lesen und analysieren

Empfohlene Prompt-Struktur:

```text
Datei: data/sales_2025.csv
Encoding: UTF-8
Aufgabe: revenue nach region aggregieren, summary.csv ausgeben
Constraint: Original nicht ändern; Leere als 0; zwei Dezimalstellen
Abnahme: erste 5 Zeilen + Gesamtzeilenanzahl ausgeben
```

Kontext: [Datei- und Ordnerkontext](/guide/context/file-and-folder-context/)

## Warum Tabellen still scheitern

Typische Problemstellen:

- Datum als Text oder als Datum
- Leere: 0, überspringen oder Fehler
- Welche Spalte ist Unique Key
- Rundung von Dezimalen und Beträgen
- Darf das Original geändert werden

Ohne Klarheit wirkt es „fertig“, ist aber unzuverlässig.

## Schreiben und bereinigen

- **Spaltennamen, Reihenfolge, Typen** klar (Datum ISO 8601)
- Große Tabellen batchen — nicht alles in den Speicher
- Dedup und Merge-Keys in die Aufgabe — Agent nicht „Primärschlüssel“ raten lassen

## Häufige Missverständnisse

### 1. Datei öffnet sich = Verarbeitung korrekt

Nein.

„Öffnet sich“ und „Daten nicht kaputt“ sind zwei Dinge.

### 2. In Excel sieht es gut aus = ok

Manche Fehler zeigen sich erst beim Downstream:

- falsches Encoding
- Spaltenreihenfolge geändert
- Zahlentypen geändert
- Formeln zu Werten eingefroren

### 3. Agent entscheidet Leere, Datum, Primärschlüssel

Meist nicht empfehlen.

Je klarer diese Regeln, desto stabiler.

## Tabellenaufgaben so stellen

Möglichst diese 5 Punkte:

1. Welche Eingabedatei
2. Welcher Ausgabename
3. Welche Spalten behalten, aggregieren, bereinigen
4. Umgang mit Leere, Datum, Duplikaten
5. Wie Ergebnis prüfen

Stabiler als „Excel bitte aufräumen“.

Python: `pandas`; Node: `csv-parse` / `xlsx` usw. — Standardbibliotheken in `AGENTS.md` vereinbaren.

## Mit Überprüfung

- Zeilenanzahl und Summen gegen Quelle
- In Excel prüfen, ob Daten als Zahlen missverstanden
- [Artefakte überprüfen](/guide/quality/verify-artifacts/): Stichproben

Bei Tabellen zählen Spalten, Typen, Regeln und Abnahme klarer als „irgendwie fertig“.

## Häufige Fehler

- Excel öffnet CSV mit chinesischem Moji-Bake (fehlendes BOM / falsches Encoding)
- Float-Summen ohne Rundungsregel
- Formeln in Excel ändern ohne reproduzierbares Skript

## Abnahmeliste

- [ ] Spaltennamen und Typen passen zum Downstream
- [ ] Summen/Stichproben stimmen mit Mensch oder SQL
- [ ] Original nicht versehentlich überschrieben (oder Diff sichtbar)

## Quellen
- [Constraints und Grenzen](/prompts/constraints-and-boundaries/)
---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Dateikontext, Artefaktprüfung und Constraints; bestätigt nur „Spalten, Typen, Leere, Datum, Abnahme explizit“ — keine Bibliothek/Plattform als einziges Implementierung.  
**Zuletzt geprüft:** 2026-07-26
