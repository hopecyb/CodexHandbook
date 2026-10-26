---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Kreuzgeprüft gegen verifizierte Kapitel zu Dateikontext, Artefaktprüfung und Constraints; bestätigt nur „Spalten, Typen, Leere, Datum, Abnahme explizit“ — keine Bibliothek/Plattform als einzige Implementierung."
  checkedAt: "2026-07-26"
title: Tabellen und Spreadsheets
description: "CSV, Excel und Tabellendaten lesen, bereinigen, analysieren und exportieren — Struktur und Encoding schützen."
locale: de
source_locale: zh-CN
source_revision: "b08adec"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 40
---

Bei Tabellenaufgaben bleiben Fehler leicht unbemerkt. Ein falsches Trennzeichen, eine falsche Zeichenkodierung, eine fehlerhafte Kopfzeile, Formel oder Datumsangabe kann die weitere Verarbeitung scheitern lassen.

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
- „endgültiges Anzeigeformat“ und „bestes Quellformat für die Automatisierung“ nicht vermischen

## Lesen und analysieren

Empfohlene Prompt-Struktur:

```text
Datei: data/sales_2025.csv
Encoding: UTF-8
Aufgabe: revenue nach region aggregieren, summary.csv ausgeben
Constraint: Original nicht ändern; Leere als 0; zwei Dezimalstellen
Abnahme: erste 5 Zeilen + Gesamtzeilenanzahl ausgeben
```

Kontext: [Datei- und Ordnerkontext](/de/guide/context/file-and-folder-context/)

## Warum Tabellen still scheitern

Typische Problemstellen:

- Datum als Text oder als Datum
- Leere: 0, überspringen oder Fehler
- Welche Spalte dient als eindeutiger Schlüssel
- Rundung von Dezimalen und Beträgen
- Darf das Original geändert werden

Ohne Klarheit wirkt es „fertig“, ist aber unzuverlässig.

## Schreiben und bereinigen

- **Spaltennamen, Reihenfolge, Typen** klar (Datum ISO 8601)
- Große Tabellen in Teilmengen verarbeiten, um den Arbeitsspeicher nicht zu überlasten
- Regeln zum Entfernen von Duplikaten und Schlüssel zum Zusammenführen in der Aufgabe nennen; den Agent nicht den Primärschlüssel erraten lassen

## Häufige Missverständnisse

### 1. Datei öffnet sich = Verarbeitung korrekt

Nein.

„Öffnet sich“ und „Daten nicht kaputt“ sind zwei Dinge.

### 2. In Excel sieht es gut aus = ok

Manche Fehler zeigen sich erst in nachgelagerten Systemen:

- falsches Encoding
- Spaltenreihenfolge geändert
- Zahlentypen geändert
- Formeln zu Werten eingefroren

### 3. Agent entscheidet Leere, Datum, Primärschlüssel

Das ist meist nicht zu empfehlen.

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
- In Excel prüfen, ob Datumswerte fälschlich als Zahlen dargestellt werden
- [Artefakte überprüfen](/de/guide/quality/verify-artifacts/): Stichproben

Bei Tabellen zählen Spalten, Typen, Regeln und Abnahme klarer als „irgendwie fertig“.

## Häufige Fehler

- Excel öffnet CSV mit unlesbaren chinesischen Zeichen (fehlendes BOM / falsches Encoding)
- Float-Summen ohne Rundungsregel
- Formeln in Excel ändern ohne reproduzierbares Skript

## Abnahmeliste

- [ ] Spaltennamen und Typen passen zum Downstream
- [ ] Summen und Stichproben stimmen mit einer manuellen oder SQL-Kontrollrechnung überein
- [ ] Original nicht versehentlich überschrieben (oder Diff sichtbar)

## Quellen
- [Constraints und Grenzen](/de/prompts/constraints-and-boundaries/)
