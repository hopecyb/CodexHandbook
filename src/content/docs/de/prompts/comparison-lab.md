---
title: "Drei Prompt-Vergleiche: zwölf Läufe und Bewertung nach Kriterien"
description: A/B-Vergleiche mit Wochenbericht, Artikel und Bugfix üben. Feste Eingaben, Prompts und Protokollvorlagen herunterladen, ohne längere Prompts von vornherein für besser zu halten.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64; Codex 26.911.61220 / Build 9647; zwölf unabhängige Agent-Kontexte; tatsächlich verwendetes Modell und Reasoning-Einstellung unbekannt.
  summary: Drei A/B-Paare wurden jeweils zweimal ausgeführt; Ergebnisse, Dauer und Werkzeugfehler sind aufbewahrt. Der Haupt-Agent prüfte unverblindet, einige Logs sind unvollständig. Daraus folgen weder allgemeine Wirkungen noch Ergebnisse echter Lesertests.
  evidence:
    - label: Einzelbewertungen und Grenzen der zwölf Läufe
      href: /downloads/prompt-comparison-results/review.md
    - label: Tatsächliche Läufe und Dauer
      href: /downloads/prompt-comparison-results/runs.json
    - label: Spätere Prüfung der Ergebnisse
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: Zwölf Aufgaben, Eingaben, öffentliche Kopien der Rohergebnisse, Logs, Dauer, Einzelbewertungen und Prüfskripte
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: Neun feste Eingabedateien, sechs Prompts, gemeinsame Bewertungskriterien, Grundlage für menschliche Prüfung und leere Laufvorlage
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: "e6a23bb"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Ein Vergleich soll zeigen, welche Anforderungen die Lieferung verändern, nicht beweisen, dass längere Prompts besser sind. Diese Seite bietet drei Sätze fester Eingaben und Protokolle von zwölf tatsächlich am 18. September 2026 abgeschlossenen Läufen. Die Stichprobe zeigt vor allem Unterschiede in den gelieferten Nachweisen und reicht nicht für allgemeine Aussagen.

[Vollständige Vergleichsmaterialien herunterladen](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [Durchführungsprotokoll](/downloads/prompt-comparisons/README.md) · [Leere Vorlage](/downloads/prompt-comparisons/blank-run.json)

## Drei Aufgaben, eine Vergleichsmethode

A und B verwenden pro Paar dieselben Eingaben und denselben Werkzeugumfang. B behält die gesamte Aufgabe von A und ergänzt nur eine Gruppe expliziter Abnahmekriterien. Unterschiede lassen sich keinem einzelnen Wort dieser Gruppe zuschreiben.

| Aufgabe | Feste Eingabe | Zusätzliche Anforderungen in B | Schwerpunkt |
|---|---|---|---|
| Wöchentlicher Verkaufsbericht | Synthetische CSV mit 46 Zeilen und Datenwörterbuch | Entscheidung je Zeile, Erklärung von Auffälligkeiten, unabhängiges Prüfprotokoll | Sind Rückerstattungen, Duplikate und Nullbasis über korrekte Zahlen hinaus nachvollziehbar? |
| Quellenbasierter Artikel | Drei synthetische Quellen mit absichtlichen Widersprüchen | Faktentabelle, offene Fragen, keine eigenmächtige Wahl zwischen widersprüchlichen Quellen | Bleibt Unbekanntes offen und stützen Quellen jede konkrete Aussage? |
| Bugfix | Warenkorb-Implementierung und Originaltests | Rote Originaltests vor, grüne nach der Korrektur, Logs und Diff | Wurde die Korrektur tatsächlich verifiziert, ohne Tests zur Umgehung des Fehlers zu ändern? |

[Bericht A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [Artikel A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Bug A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

Auch A kann Quellen von sich aus prüfen und Tests ausführen; auch B kann scheitern. Erwartung und Ergebnis sind getrennt zu halten.

## Fünf gemeinsame Bewertungsdimensionen

A und B nutzen dasselbe [rubric.json](/downloads/prompt-comparisons/rubric.json): Aufgabenkorrektheit, nachvollziehbare Belege, Umfangskontrolle, Umgang mit Unsicherheit und Reproduzierbarkeit. Je Dimension bedeutet 0 nicht erfüllt, 1 teilweise erfüllt und 2 erfüllt mit überprüfbarem Beleg. Für nicht ausgeführte oder nicht beurteilbare Fälle gilt null.

Jede Note braucht einen konkreten Beleg. Ein flüssiger Bericht mit falschen Zahlen verdient keine hohe Punktzahl; Links allein machen Fakten eines Artikels nicht richtig; Code ist nicht verifiziert, nur weil er „Tests bestanden“ behauptet. Ein Durchschnitt darf einen zentralen Faktenfehler nicht verdecken.

## Die zwölf tatsächlichen Läufe

[Ergebnisse und Logs herunterladen](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [Einzelbewertungen und Dauer](/downloads/prompt-comparison-results/review.md) · [Stichprobenbedingungen](/downloads/prompt-comparison-results/README.md)

Jede Gruppe lief in der Reihenfolge A1 → B1 → B2 → A2, pro Runde drei verschiedene Aufgaben parallel. Jeder Lauf erhielt neuen Agent-Kontext und neues Arbeitsverzeichnis, aber keinen Bewertungsschlüssel. Modell und Reasoning wurden nicht explizit überschrieben; die tatsächlichen Kennungen sind unbekannt. Verzeichnistrennung beruhte auf Anweisungen, nicht auf Betriebssystem-Isolation. Der Haupt-Agent bewertete unverblindet; unabhängige menschliche Bewertungen gab es nicht.

| Aufgabe | Zwei A-Beobachtungen | Zwei B-Beobachtungen | Was sich daraus ableiten lässt |
|---|---|---|---|
| Verkaufsbericht | Zahlen, Tabelle und Auffälligkeiten korrekt; beide kontrollierten selbstständig | Zahlen korrekt, zusätzliche Prüferklärung; ein Lauf speicherte den vollständigen Rechenbefehl nicht | Zusatzanforderungen garantierten keine vollständigen Logs |
| Quellenbasierter Artikel | Fakten, Quellen und Widersprüche korrekt, Artikel geliefert | Gleiche Faktenbegrenzung, zusätzlich Faktentabelle und Liste offener Fragen | Mehr Material für die spätere Prüfung |
| Bugfix | Originaltests unverändert, drei Tests nach der Korrektur bestanden; Fehlprotokoll vor der Korrektur fehlt | Fehler und Erfolge der Originaltests, Exitcodes und Diffs aufbewahrt | Vollständigere Prüfkette, aber in allen vier Läufen fehlt die jeweilige Node-Version |

Die vollständigen Tabellen zeigen alle fünf Bewertungen von 0 bis 2, aber keine Gesamtrangliste. Die fehlende Faktentabelle bei Artikel A betrifft das vereinbarte Kriterium „reproduzierbar“, bedeutet keinen falschen Artikeltext. Bug A und B erfüllen Reproduzierbarkeit nur teilweise, jedoch aus verschiedenen Gründen; eine Zahl allein reicht nicht.

Hashes aller Eingaben und Aufgabentexte blieben gleich. Eine spätere Prüfung berechnete die Verkaufs-CSV neu und testete alle vier Bugfixes mit unveränderten Originaltests. Diese [Prüfaufzeichnungen](/downloads/prompt-comparison-results/reviewer-checks.json) liegen getrennt von den Logs der experimentellen Agents.

## Fehlschläge und Grenzen aufbewahren

- Der gemeinsame Verkaufs-Prompt nennt `data-dictionary.md`; tatsächlich liegt die Datei unter `input/data-dictionary.md`. Alle vier Läufe trafen erst auf diesen Pfadfehler und erholten sich dann. Der Materialfehler ist kein Effekt der A/B-Abnahmekriterien. Um feste Eingaben zu bewahren, wurde der Prompt während der Serie nicht geändert.
- Für `run-07` ist nur eine Zusammenfassung des Python-Befehls erhalten, nicht der vollständige Code. Das Ergebnispaket lässt diese Lücke bestehen, statt eine vollständige damalige Aufzeichnung vorzutäuschen.
- Die Agents stellten ihre Logs selbst zusammen; es sind keine vollständigen Plattform-Audit-Exporte. Öffentliche Kopien ersetzen nur lokale absolute Pfade. Hashes der ursprünglichen und öffentlichen Dateien werden separat aufbewahrt.
- Die Dauer enthält Werkzeugwartezeit und Logschreiben, und Aufgaben liefen parallel. Es gibt weder menschliche Vergleichsbasis noch Kostenmessung. Unbekannte Modell- und Reasoning-Kennungen erlauben keine Rangliste nach Geschwindigkeit oder Zeitersparnis.

Pro Aufgabe und Variante gab es nur zwei Läufe. Die Bewertung war nicht blind, und einige Kriterien überschneiden sich mit B-Erinnerungen. Gezeigt werden Unterschiede bei Ergebnissen und Prüfnachweisen, keine allgemeine Erfolgsquote und keine Behauptung „B gewinnt“ oder „länger ist besser“.

## Selbst ausführen und dokumentieren

1. Erstellen Sie getrennte Arbeitsverzeichnisse für A und B, kopieren Sie identische Eingaben und vergleichen Sie deren Hashes. Geben Sie dem Modell nicht den Bewertungsschlüssel.
2. Beginnen Sie jedes Mal eine neue Aufgabe, fixieren Sie Modell, Reasoning, Client, Werkzeugumfang und Zeitlimit; unbekannte Einstellungen werden ehrlich erfasst. Ergebnisse eines Laufs werden nicht mit dem nächsten geteilt.
3. Legen Sie Wiederholungszahl und Abbruchregeln vorher fest, wechseln Sie zwischen A→B und B→A und behalten Sie Fehlschläge, Unterbrechungen und Wiederholungen statt nur des besten Ergebnisses.
4. Notieren Sie tatsächliche Ausgabepfade, Modellkennung, Umgebung, Dauer, Werkzeugfehler und Eingabehash. Menschliche Nacharbeit wird separat gemessen; für nicht ausgeführte Läufe tragen Sie nicht null ein.
5. Bewerten Sie alle Dimensionen mit demselben Maßstab, möglichst ohne Variantenkennung für die prüfende Person. Vergleichen Sie Dimensionen und Fehlerarten, bevor Sie über die Übernahme der Zusatzanforderungen entscheiden.

Wenige Beobachtungen gelten nur für diese Eingaben und Umgebung. Daraus folgt keine allgemeine Erfolgsquote und kein kausaler Nachweis, dass ein bestimmter Satz den Fortschritt bewirkt hat.

## Verifiziertes und noch Offenes

Die Materialprüfung kann ausgeführt werden:

```sh
python3 scripts/check_materials.py
```

Geprüft wurden neun feste Eingabedateien, drei Paare ergänzender A/B-Prompts und leere Protokolle ohne erfundene Punkte. Das Skript ruft kein Modell auf und testet die Wirkung der Prompts nicht.

Zwölf Läufe, Einzelbewertungen und Dauer sind dokumentiert. Tatsächliche Modellkennungen, vollständige Plattformlogs und unabhängige menschliche Prüfung fehlen weiterhin. Das Ergebnispaket enthält zudem `python3 scripts/check_results.py` zur erneuten Prüfung gespeicherter Ergebnisse ohne Modelllauf. Die Originalübungen finden Sie bei [Bericht](/de/cases/analyze-a-spreadsheet/), [Artikel](/de/cases/write-an-article/) und [Entwicklerpfad](/de/guide/learning-paths/developer/).
