---
caseCategory: office
directoryOrder: 10
title: Von der Verkaufs-CSV zum überprüfbaren Wochenbericht
description: Übe Bereinigung, Gruppierung, Wochenvergleich und unabhängige Kontrolle mit 46 Zeilen synthetischer Verkaufsdaten; lade Materialien und Referenzlösung herunter.
contentType: case
audiences: [creator, beginner]
task: data-analysis
level: beginner
estimatedMinutes: 40
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Das Referenzskript wurde ausgeführt; unabhängige Prüfungen mit ganzzahligen Centbeträgen und SQL waren erfolgreich. Dies ist eine Selbstprüfung des Autors, kein Test mit gewöhnlichen Lesenden oder eine zweite menschliche Prüfung.
  environment: Darwin 27.0.0 / arm64, Python 3.12.11; Standardbibliotheksskript ohne Bindung an einen bestimmten Codex-Client.
  evidence:
    - label: Ausführungs- und Prüfprotokoll ansehen
      href: /downloads/sales-weekly-report/record.md
assets:
  - path: /downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip
    purpose: Vollständige Übungsmaterialien, Referenzlösung und Prüfscripte
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /de/cases/
  label: Praxisaufgabe auswählen
next:
  link: /de/guide/verification/
  label: Ergebnisse überprüfen lernen
locale: de
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 2b4f164
---

In dieser Übung erstellst du einen wöchentlichen Verkaufsbericht, eine regionale Zusammenfassung, eine Produkt-Rangliste und ein zeilenweises Bereinigungsprotokoll. Die Eingaben sind eigens erstellte synthetische Daten; echte Kundendaten sind nicht nötig.

Niveau: Einstieg. Die geschätzten 30–45 Minuten sind eine redaktionelle Angabe und wurden nicht mit Lesenden gemessen. Voraussetzung: Du kannst Codex lokale Dateien bereitstellen. Zum Lesen der Referenzlösung brauchst du keine Programmierung; für die Prüfung ist Python 3.10+ erforderlich.

[Gesamtes Übungspaket v1.0.0 (ZIP) herunterladen](/downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip) · [Nur die Verkaufs-CSV herunterladen](/downloads/sales-weekly-report/sales.csv)

## Zuerst das erwartete Ergebnis ansehen

| Kennzahl | Referenzwert | Prüfpunkt |
|---|---:|---|
| Nettoumsatz der aktuellen Woche | 4.644,75 Yuan | Erstattungen einbeziehen |
| Nettobetrag Ost | 1.281,25 Yuan | 1.401,75 − 120,50 |
| Betrag ohne Datum | 199,99 Yuan | Aussondern, Woche nicht erraten |

Die aktuelle Woche ist der 07.–13.09.2026, die vorherige der 31.08.–06.09.2026. Der Vergleich dieser beiden vollständigen Kalenderwochen ergibt 87,04 %. Das ist nur ein Ergebnis des synthetischen Beispiels und erklärt keine tatsächliche Geschäftsentwicklung.

[Referenzbericht ansehen](/downloads/sales-weekly-report/summary.md). Löse die Aufgabe zunächst selbst und vergleiche dann die Lösung.

## Materialien herunterladen

Das Gesamtpaket enthält Aufgabenbeschreibung, Datenwörterbuch, drei Prompts, eine CSV mit 46 Zeilen, Referenzbericht, drei CSV-Dateien für Zusammenfassungen und Protokoll, Referenzimplementierung, unabhängiges Prüfsystem und Prüfprotokoll. Alles steht unter CC0 1.0 und darf geändert und weitergegeben werden.

Öffne nach dem Entpacken den Ordner `sales-weekly-report`. Wenn du nur die CSV herunterlädst, erscheinen die anderen genannten Dateien nicht automatisch.

## 1. Dateien und Berechnungsregeln bestätigen

Gib Codex den folgenden Auftrag. Wie Dateien bereitgestellt werden, hängt vom Client ab; bestätige zuerst, dass sie wirklich eingelesen wurden.

```text
Lies brief.md, starter/data-dictionary.md und starter/sales.csv.
Bestätige, dass sie vorhanden sind, und nenne Felder, Datumsbereich,
Anzahl der Datensätze und Zeilennummern mit Sonderbehandlung.
Ändere die Originaltabelle nicht und sieh solution nicht an.
Unterscheide exakte Duplikate, fehlendes Datum, negative Beträge und echte Null.
Beschreibe die zwei Wochen gemäß Wörterbuch; liste Konflikte auf.
Wenn keine vorliegen, fahre fort.
```

Die 46 Rohdatenzeilen enthalten zwei Erstattungen, ein exaktes Duplikat und einen Eintrag ohne Datum. Behalte bei exakten Duplikaten nur den ersten Eintrag. Unterscheiden sich Datensätze mit derselben ID, halte die Prüfung an. Erfinde kein Datum; ein Nullbetrag ist gültig. Danach sollten 44 Zeilen berücksichtigt werden.

## 2. Wochenbericht und Berechnungsprotokoll erzeugen

Verwende anschließend `prompts/02-report.md` aus dem Paket und schreibe die Ergebnisse nach `my-output/`:

| Datei | Erwarteter Inhalt |
|---|---|
| `summary.md` | Gesamtbetrag, Wochenvergleich, Regionen, Top 3 der aktuellen Woche, Datenqualität und Berechnungsgrundlage |
| `region-summary.csv` | Regionale Nettobeträge beider Wochen, Änderungen und Wochenvergleich; Summe mit den Regionen abgleichbar |
| `top-products.csv` | Produkte nach aktuellem Nettobetrag absteigend, inklusive Erstattungen |
| `row-ledger.csv` | Zeilennummer jedes Rohdatensatzes, Aufnahmeentscheidung, Woche und Betrag |

Eingaben, `solution` und `validation` bleiben unverändert. Feldnamen und Tabellenreihenfolge folgen dem Datenwörterbuch, damit die unabhängige Prüfung jeden Punkt vergleichen kann. Im Südwesten ist der Vorwochenwert null; trage N/A für die Änderung ein, nicht 0 % oder unendliches Wachstum.

## 3. Unabhängig prüfen statt nur „Stimmt das?“ zu fragen

Führe im entpackten Übungsordner aus:

```sh
python3 validation/check.py --output my-output
```

Sind alle vier Ergebnisse vorhanden und entsprechen den Regeln, erscheint `result: PASS`. Geänderter Eingabehash, vergessene Erstattung, Gruppierungsfehler oder widersprüchliches Protokoll führen zu Fehlern. Repariere bei Fehlschlag nur deine Ergebnisse; ändere nicht den Prüfer, damit er sie akzeptiert.

Wenn Python nicht läuft, prüfe zumindest manuell:

1. Die sieben positiven Ost-Beträge ergeben 1.401,75 Yuan. Mit der Erstattung von −120,50 in Zeile 44 sind es 1.281,25.
2. Die drei Regionen der aktuellen Woche ergeben 1.281,25 + 2.101,75 + 1.261,75 = 4.644,75.
3. Zeile 47 O046 ohne Datum enthält 199,99 Yuan und gehört zu keiner Woche; Zeile 46 O001 ist ein Duplikat.

Die automatische Prüfung kann nicht jede Aussage im Fließtext bewerten. Lies den Bericht und entferne unbelegte Erklärungen für Wachstum oder geschäftliche Bewertungen.

## 4. Korrektur üben: Erstattung vergessen

**Gezieltes Gegenbeispiel:** Werden alle negativen Werte herausgefiltert, beträgt die aktuelle Summe 4.765,25 Yuan, also 120,50 zu viel. Für die Referenzprüfung wurde ein temporäres Ergebnis tatsächlich verändert und bestätigt, dass der Prüfer den falschen Betrag ablehnt. Dies ist kein erfundener Modelldialog.

```text
Prüfe gültige Datensätze mit net_sales kleiner als null und erkläre,
ob sie einbezogen werden müssen. Behalte das negative Vorzeichen von
Erstattungen bei und berechne regionale und Produkt-Summen für beide Wochen
neu. Nenne die Differenz vor und nach der Korrektur. Ändere weder die
Original-CSV noch den Prüfer, um den Fehler zu beseitigen.
```

## 5. Bei Problemen wiederherstellen

| Symptom | Zuerst prüfen | Nächster Schritt |
|---|---|---|
| Datei nicht gefunden | Liegt `starter/sales.csv` im aktuellen Ordner? | Entpackten Ordner öffnen und Datei referenzieren; Agent darf fehlende Daten nicht neu erfinden |
| Chinesische Zeichen unlesbar oder nur eine Spalte | UTF-8-Kodierung und Komma als Trennzeichen? | Original-CSV erneut importieren; Beträge nicht manuell ändern |
| Differenz von 120,50 | Fehlt die Erstattung R043? | Negative Werte nach Wörterbuch behalten und beide Wochen neu berechnen |
| Division durch null im Wochenvergleich | War der Südwestwert der Vorwoche tatsächlich null? | N/A eintragen und die Nullbasis erläutern |
| Prüfer meldet fehlende Datei | Wurden alle vier Ergebnisse erstellt? | Nach Wörterbuch ergänzen und erneut prüfen; fehlende Datei bedeutet nicht falscher Betrag |

## Abschluss und nächste Schritte

- Hash der Originaltabelle unverändert und alle vier Ergebnisse vorhanden.
- Gesamtbetrag, Ostbetrag und Betrag ohne Datum wurden unabhängig geprüft.
- Der Bericht behandelt Auffälligkeiten, Nullbasis und Berechnungsregeln, ohne Ursachen zu erfinden.
- Es ist erkennbar, welche Prüfungen wirklich liefen und was menschlich überprüft werden muss.

Bewahre Prompts und Korrekturprotokoll auf. Vor dem Austausch der Daten bestätige Felder und Regeln erneut. Der feste Prüfer dieser Übung eignet sich nicht für beliebige Unternehmensdaten.

Weiter zu [Ergebnisse prüfen](/de/guide/verification/) oder zurück zu den [Praxisbeispielen](/de/cases/).
