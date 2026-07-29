---
title: Überprüfung und menschliche Kontrolle
description: "Warum Ergebnisse prüfbar sein müssen und wie du nachkontrollierst."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 110
---

Codex kann dich beschleunigen — die finale Bestätigungsverantwortung übernimmt es nicht.

Codex erhöht Tempo, **ersetzt aber keine Abnahme**. Mindestens prüfen:

1. Den [Diff](/guide/quality/review-diffs/) lesen: Welche Dateien geändert, ob Grenzen überschritten
2. Anhand deiner definierten Fertigkriterien prüfen
3. Tests laufen lassen, wenn möglich: [Tests ausführen](/guide/quality/run-tests/)
4. Externe Fakten gegen Quellen prüfen: [Quellen validieren](/guide/quality/validate-sources/)

## Was menschliche Kontrolle wirklich prüft

„Menschliche Kontrolle“ heißt nicht, alles noch einmal von Hand zu machen. Aus Lieferverantwortung reicht es, Folgendes zu bestätigen:

- Hat es richtig geändert?
- Hat es zu viel geändert?
- Fehlen wichtige Bedingungen?
- Würdest du dieses Ergebnis wirklich abgeben?

## Häufige Missverständnisse

### 1. Sieht plausibel aus — fertig?

„Sieht richtig aus“ bedeutet oft:

- Text fließt, Fakten sind trotzdem unsicher
- Seite wirkt normal, kritische Abläufe wurden nicht getestet
- Code läuft, Randfälle fehlen

### 2. Heißt menschliche Kontrolle, dass KI wertlos ist?

KI beschleunigt; du setzt Maßstäbe und gibst die letzte Freigabe.

### 3. Braucht nur Code-Aufgaben Kontrolle?

Ebenso prüfen:

- Recherche-Schlussfolgerungen
- Dokumentinhalte
- Tabellen und Zusammenfassungen
- Präsentationsmaterial
- Konfiguration und Skripte

## Diese Schritte bei der Kontrolle

Bei wenig Zeit in dieser Reihenfolge:

1. Umfang — Grenzen überschritten?
2. Ergebnis — entspricht dem, was du wolltest?
3. Was automatisch prüfbar ist — zuerst automatisch
4. Den kritischsten Rest noch einmal menschlich

Menschliche Kontrolle lässt die letzte Entscheidung bei der Person, die für das Ergebnis verantwortlich ist.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur, warum Ergebnisse Überprüfung und menschliche Kontrolle brauchen; interne Links, Schrittfolge und Konzeptformulierungen wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26
