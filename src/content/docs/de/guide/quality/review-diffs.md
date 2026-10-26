---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Diese Seite erklärt nur, worauf Diff-Reviews bei Umfang und Risiken achten; interne Links und Prüfreihenfolge wurden geprüft, der Text hängt nicht von volatilen Produktfakten ab."
  checkedAt: "2026-07-26"
title: Diffs prüfen
description: Änderungen lesen und gezielte Fragen stellen.
locale: de
source_locale: zh-CN
source_revision: "f7f953f"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: 2026-10-26
---

„Diff“ meint: welche Stellen Codex diesmal wirklich geändert hat.

Viele schauen bei der ersten Abnahme nur die Zusammenfassung an, nicht die reale Änderung.
Probleme erkennt man vor allem am Diff; „ich bin fertig“-Texte sind nur Referenz.

## Was der Diff zeigt

Der Diff beantwortet direkt:

- Welche Dateien wurden geändert
- Liegt die Änderung im erlaubten Bereich
- Wurde etwas versehentlich gelöscht oder kaputtgemacht
- Sind Debug-Reste, Secrets oder Temporärcode dabei

Beim Lesen vor allem:

1. Nur erlaubte Pfade?
2. Unerwartete Löschungen?
3. Namensgebung und Stil konsistent?
4. Secrets oder Debug-Reste?

Produktseitige Ansicht: [Diffs, Kommentare und Review](/de/guide/desktop-app/diffs-comments-and-review/)

## Qualitätsprüfung von KI-generiertem Code

Prüfe nicht nur, **welche Dateien** geändert wurden, sondern auch, ob die Änderung zum Projekt passt:

| Prüfpunkt | Worauf achten? |
|---|---|
| Benennung | Drücken Variablen, Funktionen und Dateien ihre Absicht aus, statt überall `data`, `temp` oder `helper` zu verwenden? |
| Funktionsgrenzen | Werden mehrere Verantwortlichkeiten in eine große Funktion gedrängt? |
| Fehlerbehandlung | Liefert ein Fehler nützlichen Kontext, oder werden Ausnahmen verschluckt? |
| Tests | Belegen neue Tests das Verhalten, statt nur die Implementierung zu ändern? |
| Kommentare | Erklären sie das „Warum“, statt Code zu wiederholen? |
| Vereinfachung | Wurden Abstraktionen eingeführt, die derzeit niemand braucht? |

Für einen schnellen Review kannst du Codex bitten, seinen Diff anhand dieser Tabelle erneut zu prüfen und nur Risiken aufzulisten, ohne weiter Dateien zu ändern.

## Häufige Missverständnisse

### 1. Auch ohne tiefes Diff-Lesen lohnt sich Basis-Review

Am Anfang musst du nicht jede Codezeile wie ein erfahrener Entwickler prüfen.
Schon diese drei Punkte sind wertvoll:

- Welche Dateien
- Ob Unerlaubtes betroffen ist
- Ob offensichtlich Irrelevantes dazugekommen ist

### 2. Nur eine Datei ≠ automatisch sicher

Weniger Dateien heißt nicht automatisch richtig.
Aber der Umfang ist kleiner — leichter zu prüfen und zurückzunehmen.

### 3. „Nur eine kleine Änderung“ trotzdem ansehen

Genau bei „sieht nach Kleinkram aus“ gehen Probleme oft durch.

## Prüfreihenfolge

Beim ersten Diff:

1. Wie viele Dateien
2. Ob erlaubte Pfade überschritten
3. Ob klare Fehl-Löschungen, Temporärlogs, Debug-Reste
4. Ob Stil und Namen passen

Zuerst sehen, was wirklich geändert wurde — dann entscheiden, ob du das Ergebnis annimmst.
