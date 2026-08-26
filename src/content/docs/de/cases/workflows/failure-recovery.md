---
title: Fehlerwiederherstellung
description: "Wenn die Aufgabe driftet, Tests rot werden oder der Kontext erschöpft ist — sicher zurücksetzen und weitermachen."
locale: de
source_locale: zh-CN
source_revision: a03b8c5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Fehlerwiederherstellung** beschreibt, wie man nach Drift oder Unterbrechung den Zustand sichert und weitergeht. Dieses Kapitel gibt einen wiederholbaren Ablauf **Erkennen → Schaden begrenzen → Wiederherstellen → Retro**, kombinierbar mit [Rückgängig machen und wiederherstellen](/de/guide/getting-started/undo-and-recover/) sowie [Lange Aufgaben verwalten](/de/cases/workflows/long-running-task-management/).

## Schwerpunkte dieser Seite

- Wann `git stash`, Commit zurücksetzen oder neuer Thread
- Wie Fehlerinformationen in den nächsten Prompt einfließen
- Wie Teams wiederkehrende Probleme dokumentieren

## Fehlersignale

| Signal | Mögliche Aktion |
|---|---|
| Tests scheitern flächendeckend | Ausführung stoppen, Diff verkleinern |
| Falsches Verzeichnis/Branch | Rückgängig, korrekten Pfad erneut `@` |
| Plan und Implementierung stark abweichend | Zurück zu Erkunden oder Planen |
| Kontext zu lang, Constraints vergessen | Neuer Thread + Zusammenfassung zur Übergabe |
| Freigabe/Regeln lehnen wiederholt ab | Prüfen, ob Regeln und Aufgabe widersprechen |

## Minimal brauchbarer Wiederherstellungsablauf

```text
1. Weiterschreiben stoppen (klar sagen «vorerst keinen Code schreiben»)
2. Ist-Zustand sichern: git status / stash / Thread-ID notieren
3. In höchstens 5 Punkten zusammenfassen: Ziel, Erledigtes, Fehlersymptom, Hypothese
4. Wählen: zurücksetzen / Umfang verkleinern / in neuem Thread fortsetzen
5. Nach Erfolg in AGENTS.md oder Fall-Retro schreiben
```

Beispiel-Prompt:

```text
Die aktuellen Änderungen lassen 12 Tests fehlschlagen. Vorerst nicht weiter reparieren.
Liste die von den letzten 3 Commits betroffenen Dateien, schlage den minimalen Rollback-Punkt vor
und gib einen kleineren Fix-Plan.
```

## Empfohlener Workflow

```text
Erkennen (Tests/Mensch/CI)
    → Schaden begrenzen (Schreiben stoppen, Branch isolieren)
    → Diagnostizieren (siehe «zuerst diagnostizieren, dann fixen»)
    → In kleinen Schritten erneut versuchen
    → Retro und Verstetigung
```

Bei Multi-Agent: siehe [Multi-Agent-Koordination](/de/cases/workflows/multi-agent-coordination/) — bei Fehlern muss klar sein, welche Teilaufgabe den Rollback verantwortet.

## Häufige Fehler

- In die falsche Richtung «noch ein Patch drauf»
- Fehlerlogs nicht speichern → neuer Thread wiederholt denselben Fehler
- Mit `git push` die Lage «retten»
- Umgebung (lokal vs. Cloud) nicht unterscheiden → Wiederherstellungsschritte wirkungslos

## Sicherheitsgrenzen

- Wiederherstellungsaktionen selbst unterliegen den [Befehlsregeln](/de/guide/customization/rules/command-rules/)
- Bei Produktionsvorfällen zuerst rollbacken, dann Root Cause — Agent nicht direkt an Produktionsdaten lassen

## Abnahme-Checkliste

- [ ] Gewählte Wiederherstellungsstrategie und Begründung erklärbar
- [ ] Repository wieder build-/testfähig
- [ ] Fehlerursache und Lehre dokumentiert (Issue oder AGENTS.md)
- [ ] Bei neuem Thread: Zusammenfassung der zentralen Constraints vorhanden

## Verwandte Kapitel

- [Zuerst diagnostizieren, dann fixen](/de/cases/workflows/diagnose-before-fixing/)
- [Übergabe und Fortsetzen](/de/guide/agent-work/handoff-and-resume/)
- [Fehlerreferenz](/de/guide/reference/error-reference/)

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Übergabe und Fortsetzen, Diagnose, Befehlsregeln und Fehlerreferenz. Diese Seite erklärt die allgemeine Methode zu Schadenbegrenzung und Weiterarbeit und macht keine Client-Buttons oder -Befehle zur festen Regel.  
**Zuletzt geprüft:** 2026-07-26
