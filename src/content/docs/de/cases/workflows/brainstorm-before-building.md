---
title: Zuerst brainstormen, dann bauen
description: Vor Code oder langen Texten mit strukturierter Erkundung Optionen eingrenzen — weniger Nacharbeit.
locale: de
source_locale: zh-CN
source_revision: 9bf8989
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Zuerst brainstormen, dann bauen** eignet sich für Aufgaben mit unscharfem Ziel und mehreren Optionen: neue Features, Redesigns, Content-Themen, Technikauswahl. Es schließt an Phase ① Erkunden von [Erkunden—Planen—Ausführen—Überprüfen](/de/cases/workflows/explore-plan-execute-verify/) an, betont aber **Divergenz und Konvergenz** statt sofort Code zu lesen und Dateien zu ändern.

## Welches Problem löst diese Seite

- Wann sich Brainstorming lohnt und wann direkt EPXV
- Wie der Divergenzrahmen begrenzt wird, damit es kein leeres Reden wird
- Artefakte: Optionstabelle, Entscheidungsprotokoll, nächster Plan

## Für wen geeignet

| Szenario | Beispiel |
|---|---|
| Produkt/Feature | «Export für Nutzer — drei UI-Varianten» |
| Content | «Für wen ist dieses Tutorial, wie strukturieren?» |
| Technik | «Queue oder Cron für geplante Aufgaben?» |

## Minimal brauchbares Vorgehen

**Phase A — Divergieren (zeitbegrenzt)**

```text
Ändere vorerst keine Dateien. Für die Anforderung «CSV exportieren» 3 Implementierungspfade auflisten:
jeweils Vor-/Nachteile, betroffene Module, geschätzter Aufwand (S/M/L).
Noch keine finale Option wählen.
```

**Phase B — Konvergieren**

```text
Basierend auf der Tabelle 1 Default- und 1 Alternativoption empfehlen;
2 Entscheidungspunkte nennen, die ich bestätigen muss (Format, Berechtigungen).
```

**Phase C — In die Planung**

Nach Bestätigung weiter mit [Spezifikationsgetriebene Arbeit](/de/cases/workflows/specification-driven-work/) oder EPXV-Phase ② Planen.

## Empfohlener Workflow

```text
Constraints klar machen (Zeit, Tech-Stack, unveränderliche Teile)
    → 3–5 Optionen divergieren (kein Code)
    → Nach «Wert / Risiko / Kosten» sortieren
    → Manuell Richtung wählen oder Zusatzinfo verlangen
    → Schriftlicher Plan + Ausführung
```

**Timebox** setzen: z. B. Divergenz in 15 Minuten, damit die Diskussion nicht driftet.

## Häufige Fehler

- Brainstorming als Ausführung missverstehen — Modell ändert schon Dateien → mit «noch nichts ändern» einschränken
- Zu viele unsortierte Optionen → Entscheidungsmüdigkeit
- Abgelehnte Optionen nicht dokumentieren → dieselben Debatten zwei Wochen später
- Constraints überspringen → schöne, aber nicht umsetzbare Optionen

## Sicherheitsgrenzen

- Auch in der Brainstorming-Phase können sensible Dateien gelesen werden — mit `@` den Umfang präzise begrenzen
- Optionen mit Compliance-/Privacy-Bezug brauchen menschliche Rechts-/Sicherheitsprüfung, nicht nur Modellentscheidung

## Abnahme-Checkliste

- [ ] Mindestens 2 tragfähige Optionen und eine klare Empfehlung
- [ ] Entscheidungspunkte markiert, warten auf menschliche Bestätigung
- [ ] Keine unautorisierten Repository-Schreibvorgänge
- [ ] Nächster Schritt schließt an einen schriftlichen Plan an

## Verwandte Kapitel

- [Erkunden—Planen—Ausführen—Überprüfen](/de/cases/workflows/explore-plan-execute-verify/)
- [Spezifikationsgetriebene Arbeit](/de/cases/workflows/specification-driven-work/)
- [Einen Plan erfragen](/de/prompts/ask-for-a-plan/)

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu EPXV, Planung, spezifikationsgetriebener Arbeit und Prompts. Diese Seite beschreibt nur die stabile Kollaborationsmethode „erst divergieren, dann konvergieren, dann planen“ und hängt nicht an konkreten Produkteinstiegen.  
**Zuletzt geprüft:** 2026-07-26
