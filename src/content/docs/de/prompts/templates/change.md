---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Diese Seite liefert eine Vorlage für Änderungsaufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab."
  checkedAt: "2026-07-26"
title: Änderungsvorlage
description: Begrenzte Iteration auf Bestehendem.
locale: de
source_locale: zh-CN
source_revision: "6faf299"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---


Diese Vorlage passt zu „auf Bestehendem etwas ändern“.

Bei Änderungsaufgaben zuerst die Änderungsgrenzen klar machen.

## Vorlage

```text
Ziel: An 【bestehender Funktion/Datei】 【konkrete Änderung】 umsetzen.
Hintergrund: 【warum, betroffener Umfang】
Eingaben: @【relevante Dateipfade】
Constraints:
- 【API/Stil/Verhalten】 unverändert, außer ich erlaube es ausdrücklich
- Minimaler Diff, kein irrelevantes Refactoring
- Nach jedem Schritt nur 【relevante Tests】
Abnahme:
- 【Beschreibung der Verhaltensänderung】
- relevante Tests bestanden
- Diff betrifft nur nötige Dateien
```

## Wann diese Vorlage passt

- bestehende Seite/Komponente ändern
- klaren Bug fixen
- Text, Interaktion oder Config fein justieren
- betonen: „nur diesen Block, kein Nebenbei-Refactor“

## Häufige Irrtümer

### 1. Ändern ist einfacher als Erstellen — also weniger schreiben

Änderungen treffen Altcode, alte Constraints und versteckte Abhängigkeiten — Grenzen sind wichtiger.

### 2. „Minimaler Diff“ = ein paar Zeilen weniger

„Minimaler Diff“ heißt: **nur das, was direkt zum Ziel gehört**.

### 3. „Bestehendes Verhalten behalten“ reicht allein

Besser nachlegen: was genau als „bestehendes Verhalten“ zählt.

## Wogegen die Vorlage schützt

Vor allem:

- zu viel geändert
- falsch geändert
- Schichten ohne Freigabe angefasst

Neben „was ändern“ muss klar sein: „nur bis wohin“.

## Verwandt

- [Fertigstellungsstandard definieren](/de/prompts/define-done/)
- [Constraints und Grenzen](/de/prompts/constraints-and-boundaries/)
