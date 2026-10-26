---
title: Kontextkomprimierung
description: Was nach der Komprimierung langer Gespräche bleibt — und was verloren geht.
locale: de
source_locale: zh-CN
source_revision: "c6c9d03"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 50
legacyVerification:
  status: verified
  products: "App / CLI / IDE / Cloud"
  basis: Diese Seite erklärt nur Risiken und Nachbesserung nach Komprimierung langer Gespräche; Konzepte, Beispiele und interne Links geprüft, ohne volatile Produktfakten.
  checkedAt: '2026-07-26'
---

Bei der „Kontextkomprimierung“ fasst das System frühere Gesprächsinhalte zusammen, damit eine lange Aufgabe fortgesetzt werden kann. Dabei können **Details verloren gehen.**

## Warum das Ergebnisse beeinflusst

Viele Einsteiger nehmen an:

„Was früher gesagt wurde, bleibt vollständig im Gedächtnis.“

Nicht immer.
Nach Komprimierung langer Aufgaben gehen leichter verloren:

- feine kleine Einschränkungen
- temporäre aber wichtige Ausnahmen
- früher genannte Datei-Allowlists
- Randbedingungen der Abnahmekriterien

Komprimierung ist kein Fehler — ein Mechanismus, bei dem du mitwirken musst.

## Was nach der Komprimierung neu nennen

Komprimierung streicht Details. Schlüsselbeschränkungen, Abnahmekriterien, Datei-Allowlists nach Komprimierung **neu deklarieren** — oder in die Projektbeschreibung legen.

Priorität haben:

- welche Dateien nur geändert werden dürfen
- was absolut unberührt bleibt
- was „fertig“ bedeutet
- welcher Stand bereits erreicht ist

## Häufige Missverständnisse

### 1. Komprimierung = „alles vergessen“?

Genauer: Gerüst bleibt, alle Feinheiten sind nicht garantiert 1:1 erhalten.

### 2. Muss ich jedes Mal von vorn wiederholen?

Nein.

Meist reicht es, die wichtigsten und leicht übersehenen Informationen zu wiederholen, bei denen keine Fehler passieren dürfen.

### 3. Bei welchen Informationen sollte man sich nicht auf die Erinnerung verlassen?

Typisch:

- Dateirahmen
- Verbote
- Abnahmekriterien
- bestätigte wichtige Entscheidungen

## Nach der Komprimierung nachbessern

Bei sehr langen Aufgaben zwischendurch Kurzfassung:

```text
Aktuell gültige Einschränkungen:
1. Nur docs-Verzeichnis ändern
2. Routing-Struktur nicht anpassen
3. Fertig: Startseiten-Text aktualisiert und Build bestanden
```

Das ist verlässlicher, als sich weiterhin auf den gesamten langen Gesprächsverlauf zu verlassen.

Konzept: [Token, Kontext und Komprimierung](/de/guide/foundations/tokens-context-and-compaction/)

In langen Aufgaben: kritische Grenzen nicht nur einmal sagen; nach Komprimierung wichtige Regeln aktiv wiederholen.
