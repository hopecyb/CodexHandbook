---
title: Versionsstrategie des Handbooks
description: "Erklärt Inhaltsstatus, Prüfdatum und wie laufende Updates funktionieren."
locale: de
source_locale: zh-CN
source_revision: 3f4e05e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 8
---

## Laufende Aktualisierung

Dieses Handbook ist nicht langfristig an eine einzelne Codex-Versionsnummer gebunden. Das Produkt ändert sich — deshalb markieren Seiten Status und Prüfdatum, wie verlässlich der Stand gerade ist.

## Inhalt

- Warum dieses Handbook nicht von ewiger Unveränderlichkeit ausgehen kann
- Wie Status und Prüfdatum am Seitenende zu lesen sind
- Wem du glaubst, wenn Handbook und Offizielles kollidieren

## Seitenstatus

| Status | Bedeutung |
|---|---|
| planned | Geplant, noch nicht geschrieben |
| draft | In Arbeit |
| review | Inhalt fertig, wartet auf Gegenprüfung |
| verified | Anhand der angegebenen Grundlage geprüft |
| outdated | Nach Produktänderungen aktualisierungsbedürftig |
| archived | Historisch behalten, nicht in der Hauptnavigation |

## So liest du den Seitenstatus

- `planned`: noch nicht geschrieben
- `draft`: in Arbeit, noch nicht stabil
- `review`: Hauptteil steht, braucht aber noch Gegenprüfung
- `verified`: anhand der angegebenen Grundlage geprüft
- `outdated`: war vielleicht richtig — jetzt auf Veralten achten
- `archived`: als Referenz behalten, nicht als aktuelle Hauptlinie

## Die drei Zeilen am Seitenende

In der MVP-Phase steht am Ende jeder Seite: **Status / Geeignete Produkte / Zuletzt überprüft**. Schnell veraltende Themen (Installation, Konto, Berechtigungen, Modelle) sollten offizielle Links mitführen.

## Offizielle Grundlage

Produktverhalten richtet sich nach der OpenAI-Dokumentation: [https://developers.openai.com/codex](https://developers.openai.com/codex). Dieses Repo ist ein Community-Guide — bei Konflikten gilt Offizielles, und Issues sind willkommen.

## Häufige Missverständnisse

### 1. „Steht im Handbook“ heißt nicht „ändert sich nie“

Besonders anfällig für Änderungen:

- Installationswege
- Login- und Kontoabläufe
- Berechtigungen, Modelle, Konfigurationsschlüssel
- Verhalten von Cloud und Produkteinstiegen

### 2. `review` heißt nicht „nicht lesbar“

`review` bedeutet: Der Hauptinhalt steht, ist aber noch nicht auf der höchsten Bestätigungsstufe — du darfst ihn trotzdem als Referenz nutzen.

### 3. Bei Konflikt zwischen Community-Handbook und Offiziellem nicht „halb und halb“ glauben

So aufteilen:

- Verständnis und Pfaderklärung → Handbook
- Aktuelles Verhalten und Parameter → Offizielles

## Wie du einschätzt, ob eine Seite verlässlich ist

Wenn du fürchtest, eine Seite sei veraltet, prüfe drei Dinge:

1. Ist der Status am Ende `review`, `verified` oder `outdated`?
2. Wie weit liegt „Zuletzt überprüft“ zurück?
3. Geht es um Konzepte — oder um Installation, Konfiguration, Berechtigungen (schnell veränderlich)?

Bei aktuellem Verhalten, Parametern und Regeln gilt am Ende immer die aktuelle offizielle Dokumentation.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Anhand des aktuell verwendeten 6-Status-Systems, der Footer-Regeln und des „Offizielle zuerst“-Prinzips dieses Handbooks geprüft; die Seite erklärt die Versionsstrategie und Lesemethode der Site und hängt nicht von konkreten Produktversionsparametern ab.  
**Zuletzt überprüft:** 2026-07-26
