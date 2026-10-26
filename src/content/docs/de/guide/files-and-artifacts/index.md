---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Kreuzgeprüft gegen Struktur der files-and-artifacts-Unterkapitel sowie verifizierte Kapitel zu Artefaktprüfung, Definition of Done, sensiblem Kontext und Bildern; diese Seite erklärt nur das stabile Prinzip „Auftrag und Abnahme nach Dateityp wählen“."
  checkedAt: "2026-07-26"
title: Dateien und Artefakte
description: "Wie Codex Dateitypen liest/schreibt, Generiertes verwaltet und abnimmt."
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: "543d14e"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

Die Kernausgabe von Codex sind oft **Dateiänderungen im Repo** oder **neu erzeugte Artefakte** (Dokumente, Bilder, Config). Dieses Thema beschreibt Best Practices je Dateityp — gegen „generiert, aber unbrauchbar“.

Unterschiedliche Dateitypen erfordern unterschiedliche Aufgabenbeschreibungen und Abnahmemethoden.

„Code ändern“, „Tabelle bearbeiten“, „Screenshot erzeugen“, „PPT exportieren“ wirken alle wie Dateiaufgaben — die typischen Fehlerstellen unterscheiden sich.

![Illustration: Code, Bilder, PDFs, Tabellen und Folien laufen auf einem Band an einem Assistenten vorbei, der jedes Stück prüft](/illustrations/files-and-artifacts.webp)

## Kapitel-Navigation

| Thema | Seite |
|---|---|
| Code und Text | [Text- und Codedateien](/de/guide/files-and-artifacts/text-and-code-files/) |
| Screenshots und Design-Input | [Bilder und Screenshots](/de/guide/files-and-artifacts/images-and-screenshots/) |
| PDF und Langdokumente | [PDF und Dokumente](/de/guide/files-and-artifacts/pdf-and-documents/) |
| Tabellendaten | [Tabellen und Spreadsheets](/de/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Folien | [Präsentationen](/de/guide/files-and-artifacts/presentations/) |
| Agent-Ausgaben | [Generierte Artefakte abnehmen](/de/guide/files-and-artifacts/generated-artifacts/) |

Allgemeine Methode: [Artefakte überprüfen](/de/guide/quality/verify-artifacts/).

## Worum es in diesem Kapitel geht

Drei Dinge:

- Wie du die Aufgabe klar formulierst
- Wo still und leise Fehler entstehen
- Wie du am Ende das Ergebnis abnimmst

Das Kapitel ist eine nach Dateitypen geordnete Arbeitsanleitung und keine reine Funktionsliste.

## Einheitliche Prinzipien

1. **Pfad klar**: Ausgabepfad und Namensgebung im Prompt
2. **Format vereinbaren**: Extension, Encoding (UTF-8), Zeilenenden wie im Projekt
3. **Volumenbewusst**: große Binärdateien nicht ins Git — oder LFS/CDN
4. **Menschliche Abnahme**: Generieren ≠ fertig; Abgleich mit [Definition of Done](/de/guide/quality/definition-of-done/)
5. **Sensible Daten**: siehe [Sensibler Kontext](/de/guide/context/sensitive-context/)

## Häufige Missverständnisse

### 1. Datei erzeugt ≠ Aufgabe erledigt

Häufig liegt das Problem nicht darin, ob eine Datei erzeugt wurde, sondern in folgenden Fragen:

- Format richtig?
- Inhalt korrekt?
- Pfad richtig?
- Kann die Datei im nächsten Verarbeitungsschritt verwendet werden?

### 2. Auftrag für alle Dateitypen gleich?

Nein.
Zum Beispiel:

- Code: Umfang, Logik, Tests
- Tabellen: Spalten, Typen, Aggregationsregeln
- Bilder: visueller Inhalt, Größe
- Dokumente: Struktur, Ton, Fakten

### 3. „Öffnet sich“ = in Ordnung?

Nein.
„Öffnet sich“ ist nur die Basis — nicht automatisch commit-/release-/lieferbereit.

## Empfohlene Lesereihenfolge

Beim ersten Dateieinsatz mit Codex:

1. Den Dateityp finden, der deiner Aufgabe am nächsten kommt
2. Typische Fehlerstellen dieses Typs lesen
3. Passende Abnahme lesen

So musst du nicht alle Informationen des Kapitels auf einmal verarbeiten.

## Bezug zu Werkzeugen

- Dateien lesen/schreiben: Dateiwerkzeug + Terminal
- Bilder ansehen: [Prompting mit Bildern](/de/prompts/prompting-with-images/)
- Seiten ansehen: [Browser-Werkzeug](/de/guide/tools/browser/)
- Bilder erzeugen: [Bildgenerierung](/de/guide/tools/image-generation/)

Bei Dateiaufgaben ist oft schon etwas erzeugt — Format, Regeln oder Inhalt sind aber still abgewichen.
