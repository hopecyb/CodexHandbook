---
title: "Token, Kontext und Komprimierung"
description: "Verstehe Kontextfenster, Belegung und Komprimierung."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beim ersten Lesen wirkt diese Seite vielleicht abstrakt — du musst die Tiefenmechanik nicht zuerst verstehen. Modelle haben kein unbegrenztes Gedächtnis. Wird Inhalt zu viel, zu verstreut oder zu lang, verliert es den Fokus; frühe wichtige Einschränkungen können langsam verblassen.

Drei häufige Wörter dahinter: Token, Kontext, Komprimierung.

**Token** ist die Maßeinheit, mit der Modelle Text verarbeiten. Das **Kontextfenster** ist die Obergrenze der Information, die einmal effektiv genutzt werden kann.

Bei zu viel Gespräch oder zu vielen Dateien kann das System **Komprimierung (compaction)** machen: Zusammenfassung behalten, Details verwerfen. Danach kann der Agent frühe Einschränkungen „vergessen“.

## Diese drei Wörter trennen

So kannst du sie sehen:

- **Token**: „Volumeneinheit“ beim Verarbeiten von Information
- **Kontextfenster**: Wie viel Information es diesmal mitnehmen kann
- **Komprimierung**: Bei zu viel Inhalt verdichtet das System früheres Gespräch zur Zusammenfassung und schafft Platz

Das Problem: **Eine Zusammenfassung kann nicht alle Details behalten.**

Je länger das Gespräch, desto eher verblassen Anforderungen, die du nur einmal gesagt und später nicht wiederholt hast.

## Häufige Missverständnisse

### 1. Einmal gesagt — sollte es immer behalten?

Steckt der Satz tief in einem alten Gespräch und fehlt in den aktuellen Schlüsselinformationen, kann er später wegkomprimiert werden.

### 2. Mehr Kontext ist immer stabiler?

Mehr relevanter Kontext hilft — zu viel Irrelevantes bringt zwei Probleme:

- Der Fokus wird unscharf
- Wichtige Einschränkungen gehen unter

### 3. Heißt Komprimierung, dass das Modell kaputt ist?

Komprimierung ist Ressourcenmanagement. Bei zu viel Information behält das System eine verdichtete Version und arbeitet weiter.

## Was tun in solchen Fällen

Wenn du fürchtest, dass Schlüsselanforderungen verloren gehen:

- Wichtige Einschränkungen in die aktuelle Nachricht schreiben
- Langfristig gültige Regeln in Projektanweisungen oder feste Dokumente
- Bei klarem Themenwechsel neue Aufgabe oder neuen Thread
- Wichtige Grenzbedingungen nicht nur einmal sagen

## Praxis

- Wichtige Einschränkungen in die aktuelle Nachricht oder Projektanweisung — nicht nur in sehr alte Gespräche begraben
- Bei Themenwechsel neuen Thread öffnen
- Prinzipien und Tipps: [Kontext-Komprimierung](/guide/context/compaction/) und [Kontext fokussiert halten](/guide/context/keep-context-focused/)

Hier zuerst die Begriffe. Wie du steuerst, steht weiter in `05`.


---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur die Grundbegriffe Token, Kontextfenster und Komprimierung; interne Links und Beispielformulierungen wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26
