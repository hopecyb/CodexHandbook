---
title: Lange Aufgaben verwalten
description: "Große Aufgaben über Stunden oder mehrere Sitzungen — Prüfpunkte, Komprimierung, Delegation und Exit-Kriterien."
locale: de
source_locale: zh-CN
source_revision: 199bbe5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Typische Probleme langer Aufgaben: **Kontext wird voll**, **Menschen müssen weg**, **Richtung driftet**, **unklar, wann stoppen**. Diese Seite setzt [Erkunden—Planen—Ausführen—Überprüfen](/de/cases/workflows/explore-plan-execute-verify/) in Szenarien von Stunden bis mehreren Sitzungen.

## Schwerpunkte dieser Seite

- Wann zerlegen, wann an Cloud delegieren
- Was in Prüfpunkte und Statusprotokolle gehört
- Exit-Kriterien für automatisierte lange Aufgaben

Verwandt: [Delegieren und Nachverfolgen](/de/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/de/skills/automations/scheduled-tasks/)

## Signale langer Aufgaben

- Voraussichtlich > 30 Minuten Maschinenzeit
- Mehrere Subsysteme oder > 20 Dateien
- Warten auf Menschen-Feedback oder externe APIs
- Vollständige E2E- / Performance-Tests nötig

Bei jedem dieser Signale zuerst einen Plan schreiben — nicht bis zum Ende durchchatten.

## Drei-Phasen-Management

### 1. Plan einfrieren

Schriftlichen Plan erzeugen: Umfang, Nicht-Ziele, Meilensteine, Abnahmebefehle. Erst nach menschlicher Bestätigung großflächig ausführen.

[Planung](/de/guide/agent-work/planning/) · [Subagents](/de/guide/agent-work/subagents/)

### 2. Prüfpunkte

Nach jedem Meilenstein:

- Commit oder Stash prüfbarer Inkremente
- `PROGRESS.md` oder Issue-Kommentar aktualisieren: Erledigtes, Nächstes, Blocker
- Bei vollem Kontext [Komprimierung](/de/guide/context/compaction/) oder neue Sitzung + Link zur Progress-Datei

### 3. Abschließen oder delegieren

- Lokal nicht mehr tragbar → [Cloud-Delegation](/de/guide/web-and-cloud/delegate-and-follow-up/)
- Dauerhaftes Monitoring nötig → Automation + klare **max iterations / Deadline**

## Exit-Kriterien (für Automations Pflicht)

| Bedingung | Erklärung |
|---|---|
| Zeitlimit | Nach 4h ohne Fortschritt Alarm |
| Iterationslimit | Derselbe Test scheitert 3× → stoppen |
| Menschliches Gate | Vor Änderung der Produktionsconfig muss @Mensch |
| Erfolg | Tests grün + PR geöffnet |

## Häufige Fehler

- Keine PROGRESS-Datei → nach Sitzungswechsel Doppelarbeit
- Lange Aufgabe ohne Nicht-Ziele → Agent «räumt nebenbei das ganze Repo auf»
- Cloud-Aufgabe über Nacht ohne Freigabe hängen

## Abnahme-Checkliste

- [ ] Vor Start langer Aufgaben Plan-Dokument vorhanden
- [ ] Mindestens zwei Prüfpunkte mit prüfbarem Diff
- [ ] Klar, wie pausieren, fortsetzen oder übergeben wird

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle öffentliche Use Cases zu langfristigen Zielen und langer Aufgabenkollaboration bei OpenAI Developers sowie die bereits geprüften Kapitel zu Übergabe/Wiederaufnahme, Planung, Komprimierung und Delegation. Diese Seite erklärt nur stabile Methoden zu Prüfpunkten, Übergabe und Exit-Kriterien langer Aufgaben.  
**Zuletzt geprüft:** 2026-07-26
