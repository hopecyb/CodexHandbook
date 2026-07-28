---
title: Dateien und Artefakte
description: "Wie Codex Dateitypen liest/schreibt, Generiertes verwaltet und abnimmt."
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Die Kernausgabe von Codex sind oft **Dateiänderungen im Repo** oder **neu erzeugte Artefakte** (Dokumente, Bilder, Config). Dieses Thema beschreibt Best Practices je Dateityp — gegen „generiert, aber unbrauchbar“.

Auch „Datei“ heißt: unterschiedliche Typen brauchen unterschiedliche Auftrag- und Abnahmemethoden.

„Code ändern“, „Tabelle bearbeiten“, „Screenshot erzeugen“, „PPT exportieren“ wirken alle wie Dateiaufgaben — die typischen Fehlerstellen unterscheiden sich.

## Kapitel-Navigation

| Thema | Seite |
|---|---|
| Code und Text | [Text- und Codedateien](/guide/files-and-artifacts/text-and-code-files/) |
| Screenshots und Design-Input | [Bilder und Screenshots](/guide/files-and-artifacts/images-and-screenshots/) |
| PDF und Langdokumente | [PDF und Dokumente](/guide/files-and-artifacts/pdf-and-documents/) |
| Tabellendaten | [Tabellen und Spreadsheets](/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Folien | [Präsentationen](/guide/files-and-artifacts/presentations/) |
| Agent-Ausgaben | [Generierte Artefakte abnehmen](/guide/files-and-artifacts/generated-artifacts/) |

Allgemeine Methode: [Artefakte überprüfen](/guide/quality/verify-artifacts/).

## Worum es in diesem Kapitel geht

Drei Dinge:

- Wie Sie die Aufgabe klar stellen
- Wo still und leise Fehler entstehen
- Wie Sie am Ende abnehmen

Eher Bedienungsanleitung nach Dateityp — keine reine Feature-Liste.

## Einheitliche Prinzipien

1. **Pfad klar**: Ausgabe pfad und Namensgebung im Prompt
2. **Format vereinbaren**: Extension, Encoding (UTF-8), Zeilenenden wie im Projekt
3. **Volumenbewusst**: große Binärdateien nicht ins Git — oder LFS/CDN
4. **Menschliche Abnahme**: Generieren ≠ fertig; Abgleich mit [Definition of Done](/guide/quality/definition-of-done/)
5. **Sensible Daten**: siehe [Sensibler Kontext](/guide/context/sensitive-context/)

## Häufige Missverständnisse

### 1. Datei erzeugt ≠ Aufgabe erledigt

Oft liegt das Problem nicht an „ob generiert“, sondern:

- Format richtig?
- Inhalt korrekt?
- Pfad richtig?
- Downstream weiter nutzbar?

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

1. Den Dateityp finden, der Ihrer Aufgabe am nächsten kommt
2. Typische Fehlerstellen dieses Typs lesen
3. Passende Abnahme lesen

So überfordert Sie das ganze Kapitel nicht auf einmal.

## Bezug zu Werkzeugen

- Dateien lesen/schreiben: Dateiwerkzeug + Terminal
- Bilder ansehen: [Prompting mit Bildern](/prompts/prompting-with-images/)
- Seiten ansehen: [Browser-Werkzeug](/guide/tools/browser/)
- Bilder erzeugen: [Bildgenerierung](/guide/tools/image-generation/)

Bei Dateiaufgaben ist oft schon etwas erzeugt — Format, Regeln oder Inhalt sind aber still abgewichen.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen Struktur der files-and-artifacts-Unterkapitel sowie verifizierte Kapitel zu Artefaktprüfung, Definition of Done, sensiblem Kontext und Bildern; diese Seite erklärt nur das stabile Prinzip „Auftrag und Abnahme nach Dateityp wählen“.  
**Zuletzt geprüft:** 2026-07-26
