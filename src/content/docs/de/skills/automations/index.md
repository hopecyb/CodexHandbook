---
title: Automations
description: Zeitgesteuert, ereignisgetrieben, im Hintergrund — was automatisieren, was menschlich prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`Automations` behandelt, wie wiederholte Aufgaben automatisch laufen — nicht „Codex schlauer machen“.

Fokus dieser Gruppe:

- Welche Aufgaben lohnen Auto-Lauf
- Wo Auto-Lauf stoppen und auf Menschen warten
- Fehler, Alarme, Rollback gestalten

## Entscheidungsschwerpunkt

Beim Einstieg nicht gleich jede Wiederholung abgeben.

Reihenfolge:

1. Ist die Sache **wiederholt, regelklar, Ergebnis gut abnehmbar**?
2. Kann sie nur lesen, nur vorschlagen, nur Draft-PR öffnen?
3. Erst dann voll unbeaufsichtigt erwägen

## Einstieg dieser Gruppe

- [Geplante und Hintergrundaufgaben](/skills/automations/scheduled-tasks/): Was eine Automations-Aufgabe ist, Trigger, Exit-Bedingungen, menschliche Überprüfungspunkte

## Häufige Irrtümer

### 1. Wiederholt → muss automatisiert werden

Wenn Kriterien noch stark menschlich sind, macht frühe Automation eher Probleme.

### 2. Automation soll menschliche Bestätigung sparen

Oft schon wertvoll:

- Auto-Check
- Auto-Zusammenfassung
- Auto Issue / Draft-PR

Nicht direkt auf den Hauptbranch pushen.

Automation passt zu „wiederholt, regelklar, gut prüfbar“. Bei urteilsabhängigen Dingen menschliche Überprüfung im Ablauf belassen.

---

**Status:** outdated  
**Anwendbare Produkte:** Cloud / App / CLI  
**Nachprüfhinweis:** Gruppe setzt aktuelle Automations-Fähigkeit und Einstiege voraus; öffentliche Codex-Automations-Oberfläche ist unvollständig — bis 2026-07-26 nicht als stabil freigeben.  
**Zuletzt geprüft:** 2026-07-26
