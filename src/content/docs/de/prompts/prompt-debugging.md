---
title: Prompt-Debugging
description: Bei abweichenden Ergebnissen Prompt-Probleme eingrenzen.
locale: de
source_locale: zh-CN
source_revision: 9b92e1f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Wenn das Ergebnis nicht passt, oft weil:

- Ziel nicht als prüfbares Ergebnis geschrieben
- Constraints unklar
- Kontext unvollständig oder veraltet
- Aufgabe zu groß, ohne zuerst Plan zu verlangen

Prompt-Debugging heißt: herausfinden, **welche Informationsebene fehlt**.

## Zuerst lokalisieren

Bei Abweichung nicht sofort alles neu schreiben. Erst die Ebene finden:

1. Ziel unklar?
2. Scope außer Kontrolle?
3. Kontext unzureichend?
4. Aufgabe zu groß?
5. Oder falsche Werkzeugroute?

## Bei falschem Ergebnis der Reihe nach:

1. Ist das Ziel prüfbar?
2. Sind Constraints klar? Hat der Agent sie gesehen?
3. Ist der Kontext veraltet oder widersprüchlich? (Komprimierung / alter Thread)
4. Sollte zuerst ein Plan kommen?
5. Falsches Werkzeug? (nicht online gehen, aber online gegangen)

## Was jede Frage prüft

### 1. Ist das Ziel prüfbar

Sehr vage Ziele wie „optimieren“ führen oft zu Abweichung.

### 2. Sind Constraints klar

Viele „zu weit gegangen“-Fälle: nicht Unfähigkeit, sondern fehlendes „nur bis hier“.

### 3. Kontext veraltet oder widersprüchlich

Besonders in langen Threads:

- früher A gesagt
- später B ergänzt
- aktuell: Mischzustand

### 4. Zuerst Plan verlangen?

Große Aufgaben: Direktausführung weicht häufiger ab als Plan zuerst.

### 5. Falsches Werkzeug

Soll lokal bleiben, sucht aber im Netz; soll Quellenforschung, antwortet aus dem Bauch.

## Häufige Irrtümer

### 1. Falsches Ergebnis = ganzer Prompt weg

Oft reicht ein Nachtrag:

- Abnahme klarstellen
- Scope verkleinern
- zuerst Plan verlangen

### 2. Debugging = Prompt immer länger machen

Manchmal musst du Rauschen streichen und nur die relevanten Grenzen lassen.

### 3. Je länger der Thread, desto besser (mehr Kontext)

Zu lange Threads: alte Constraints, veraltete Infos und Reste nach Komprimierung stören.

## Eine brauchbare Korrekturfolge

Zurück auf Kurs:

1. Ziel neu schreiben — prüfbar
2. „Nur hier / nicht dort“ ergänzen
3. Bei großer Aufgabe zuerst Plan verlangen
4. Wenn weiter chaotisch: auf eine Datei oder ein Repro verkleinern
5. Sonst: neuen Thread, kritische Grenzen neu nennen

Kern des Prompt-Debuggings: welche kritische Info nicht korrekt ankam — nicht die Formulierung immer komplexer machen.

Bleibt es falsch: auf Einzeldatei-Repro verkleinern oder Thread neu mit Constraints.

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Prompt-Debugging-Denken; interne Links und die Korrekturfolge wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
