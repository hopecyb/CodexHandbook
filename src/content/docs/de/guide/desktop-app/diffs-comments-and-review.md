---
title: Diff, Kommentare und Überprüfung
description: Änderungen lesen und Prüfanmerkungen hinterlassen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Überprüfungsablauf

1. Diff-Ansicht öffnen und dateiweise browsen
2. Prüfen, dass Änderungen im vereinbarten Rahmen liegen
3. Bei Verdacht nachfragen oder kommentieren (falls die UI das unterstützt)
4. Annehmen, ablehnen oder Nachbesserung verlangen

Methode: [Diffs prüfen](/guide/quality/review-diffs/)

## Inhalt

In der Desktop-App siehst du Änderungen vor allem in der Diff-Ansicht, nicht im Gesprächsbereich.

Der Chat ist „was es sagt“; die Diff-Ansicht ist „was tatsächlich passiert ist“.

## Häufige Missverständnisse

### 1. Sind Kommentare nur für Teamkollaboration nützlich?

Auch allein helfen Kommentare oder Nachfragen — mindestens, um zu klären, „warum hier geändert wurde“.

### 2. Ich bin unsicher, ob etwas falsch geändert wurde — was tun?

Du brauchst nicht sofort ein Urteil. Verdachtspunkte benennen und erklären lassen ist stabiler als selbst zu raten.

### 3. Was mindestens vor dem Annehmen prüfen?

Mindestens drei Dinge:

- welche Dateien geändert wurden
- ob der erlaubte Rahmen überschritten wurde
- ob offensichtlich unzulässige Löschungen oder Reste auftauchen

### 4. Ich bin kein Profi-Reviewer — sehe ich Probleme überhaupt?

Schau zuerst auf die direktesten Fragen:

- Wurde etwas geändert, das nicht geändert werden sollte?
- Wurde etwas Wichtiges gelöscht?
- Es sagt, es habe A gemacht — enthält das Diff wirklich nur A?

## Überprüfungsreihenfolge

Wenn Diffs dich oft durcheinanderbringen, fixiere zuerst diese Reihenfolge:

1. Wie viele Dateien wurden geändert?
2. Bezieht sich jede Dateiänderung auf die Aufgabe?
3. Gibt es Änderungen außerhalb des Rahmens?
4. Erst danach Formulierungen, Format und lokale Implementierungsdetails

So lässt du dich weniger von Kleinigkeiten ablenken.

## Was in Kommentaren lohnt

Kommentare müssen nicht vollständig sein. Wertvoller sind Typen wie:

- „Warum muss das hier geändert werden?“
- „Geht das über den diesmaligen Rahmen hinaus?“
- „Könnte das bestehendes Verhalten beeinflussen — bitte noch erklären?“
- „Kann hier eine Überprüfungsmethode ergänzt werden?“

Solche Kommentare treiben die nächste Korrektur besser voran als nur „da ist ein Problem“.

Auf dieser Seite lohnt sich vor allem der wiederholte Blick auf die Diff-Ansicht.

---

**Status:** outdated  
**Anwendbare Produkte:** App  
**Prüfhinweis:** Diese Seite dreht sich um Diff-Ansicht, Kommentareingänge und Annehmen/Ablehnen in der aktuellen Desktop-UI, ohne ausreichend starke aktuelle Official-Dokumentation; bis zur ergänzten Desktop-Überprüfungsdokumentation besser `outdated`.  
**Zuletzt geprüft:** 2026-07-26
