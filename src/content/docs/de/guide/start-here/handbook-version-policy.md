---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Mit dem im Handbuch verwendeten System aus sechs Statuswerten, den Regeln für Prüfhinweise und dem Vorrang offizieller Quellen abgeglichen. Diese Seite erläutert die Versionsstrategie und Lesemethode der Website; sie hängt nicht von Parametern einer bestimmten Produktversion ab."
  checkedAt: "2026-07-26"
title: Versionsstrategie des Handbuchs
description: "Erklärt Inhaltsstatus, Prüfdatum und wie laufende Updates funktionieren."
locale: de
source_locale: zh-CN
source_revision: "a608dc3"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 8
---

## Laufende Aktualisierung

Dieses Handbuch bleibt nicht dauerhaft an eine einzige Codex-Versionsnummer gebunden. Das Produkt ändert sich. Deshalb erläutern Seiten mit Status, Prüfdatum und konkreten Belegen, was geprüft wurde. Das Datum allein ist keine Bewertung der Verlässlichkeit.

## Inhalt

- Warum dieses Handbuch nicht von ewiger Unveränderlichkeit ausgehen kann
- Wie du Status und Prüfdatum am Seitenanfang liest
- Wem du glaubst, wenn Handbuch und Offizielles kollidieren

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

## Prüfprotokoll und Inhaltsaktualisierung

Am Seitenanfang werden Redaktionsstatus, Prüfmethode, Prüfdatum und anwendbare Belege getrennt angezeigt. `editorial` steht für redaktionelle Prüfung, `source-checked` für Quellenabgleich und `run-tested` für einen Beispieltest in der dokumentierten Umgebung. Diese Methoden ersetzen einander nicht. Historische Hinweise bleiben separat und werden nicht automatisch zu Nachweisen eines aktuellen Testlaufs.

[Inhaltsaktualisierungen und Korrekturen](/de/guide/updates/) erläutert konkrete Änderungen und ihre Auswirkungen. Am Ende chinesischer Textseiten lässt sich ein GitHub-Korrekturentwurf mit Informationen zur aktuellen Seite öffnen. Vor dem Absenden musst du ihn prüfen und sensible Daten entfernen.

## Offizielle Grundlage

Produktverhalten richtet sich nach der OpenAI-Dokumentation: [https://developers.openai.com/codex](https://developers.openai.com/codex). Dieses Repo ist ein Community-Guide — bei Konflikten gilt Offizielles, und Issues sind willkommen.

## Häufige Missverständnisse

### 1. „Steht im Handbuch“ heißt nicht „ändert sich nie“

Besonders anfällig für Änderungen:

- Installationswege
- Login- und Kontoabläufe
- Berechtigungen, Modelle, Konfigurationsschlüssel
- Verhalten von Cloud und Produkteinstiegen

### 2. `review` heißt nicht „nicht lesbar“

`review` bedeutet: Der Hauptinhalt steht, ist aber noch nicht auf der höchsten Bestätigungsstufe — du darfst ihn trotzdem als Referenz nutzen.

### 3. Bei Konflikt zwischen Community-Handbuch und Offiziellem nicht „halb und halb“ glauben

So aufteilen:

- Verständnis und Pfaderklärung → Handbuch
- Aktuelles Verhalten und Parameter → Offizielles

## Wie du einschätzt, ob eine Seite verlässlich ist

Wenn du fürchtest, eine Seite sei veraltet, prüfe drei Dinge:

1. Steht am Seitenanfang als Redaktionsstatus `review`, `verified` oder `outdated`?
2. Wie weit liegt „Zuletzt überprüft“ zurück?
3. Geht es um Konzepte — oder um Installation, Konfiguration, Berechtigungen (schnell veränderlich)?

Bei aktuellem Verhalten, Parametern und Regeln gilt am Ende immer die aktuelle offizielle Dokumentation.
