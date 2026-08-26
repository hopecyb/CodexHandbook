---
title: Diffs prüfen
description: Änderungen lesen und gezielte Fragen stellen.
locale: de
source_locale: zh-CN
source_revision: 7dc8ee8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
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

## Häufige Missverständnisse

### 1. Auch ohne tiefes Diff-Lesen lohnt sich Basis-Review

Phase eins muss nicht jede Zeile Logik wie bei Senior-Devs lesen.  
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

Zuerst sehen, was wirklich geändert wurde — dann entscheiden, ob Sie das Ergebnis annehmen.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur, worauf Diff-Reviews bei Umfang und Risiken achten; interne Links und Prüfreihenfolge wurden geprüft, der Text hängt nicht von volatilen Produktfakten ab.  
**Zuletzt geprüft:** 2026-07-26
