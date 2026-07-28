---
title: Verstehen-Vorlage
description: Zuerst Orientierung aufbauen, dann ändern.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Verstehen-Vorlage

Viele Aufgaben stocken, weil noch kein gemeinsames Mindestverständnis da ist.

Die Verstehen-Vorlage passt zu „erst begreifen, dann den nächsten Schritt entscheiden“.

## Vorlage

```text
Ziel: 【Thema/Modul/Codebereich】 verstehen, Vorbereitung für spätere 【Implementierung/Änderung/Review】.
Hintergrund: 【Projekttyp, Tech-Stack, relevantes Issue】
Eingaben: 【@Dateipfade, Doc-Links, Screenshots】
Constraints: Nur lesende Analyse, keine Dateien ändern; keine destruktiven Befehle.
Ausgabe:
1. 5–8 Punkte zu Kernkonzepten oder Modulrollen
2. Die 3 zum 【Ziel】 relevantesten Dateien/Verzeichnisse und warum
3. 3 offene Klärungsfragen
Abnahme: Anhand der Ausgabe kann ich den Scope der nächsten Aufgabe festlegen.
```

## Wann diese Vorlage passt

- neues Codebase übernehmen
- unbekanntes Modul anschauen
- vor dem Ändern Abhängigkeiten klären

## Häufige Irrtümer

### 1. Verstehen = „einfach zusammenfassen lassen“

Es soll auch nennen:

- welche Dateien am relevantesten sind
- was noch unklar ist
- wo der nächste Einstieg liegt

### 2. Verstehen-Phase: je detaillierter, desto besser

Zuerst die Hauptlinie klären — wichtiger als alles auf einmal auszugraben.

Wert der Verstehen-Vorlage: den Scope der nächsten Aufgabe zuerst eingrenzen.

## Verwandt

- [Explore—Plan—Execute—Verify](/cases/workflows/explore-plan-execute-verify/)
- [Codebase verstehen (Fall)](/cases/understand-a-codebase/)

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite liefert eine Vorlage für Verstehen-Aufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
