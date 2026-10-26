---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Diese Seite liefert eine Vorlage für Diagnose-Aufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab."
  checkedAt: "2026-07-26"
title: Diagnosevorlage
description: Zuerst Ursache finden, dann Fix besprechen.
locale: de
source_locale: zh-CN
source_revision: "2491371"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---


Typischer Irrtum bei Diagnose: man sagt „erst prüfen“, meint aber stillschweigend „direkt fixen“.

Kern der Diagnosevorlage: „Ursache finden“ und „fixen“ trennen.

## Vorlage

```text
Phänomen: 【Fehlermeldung, fehlgeschlagener Test, Nutzerbericht】
Hintergrund: 【kürzliche Änderungen, Umgebung, Repro-Schritte】
Eingaben: @【Logs/Tests/relevanter Code】
Constraints: Noch keinen Code ändern; 2–3 mögliche Ursachen inkl. Überprüfungsmethode.
Ausgabe:
1. Wahrscheinlichste Ursache (mit Evidenz)
2. Ausführbare Überprüfungsschritte (Befehle oder Checkpoints)
3. Falls bestätigt: Fix-Plan-Entwurf (erst nach meiner Freigabe ausführen)
```

## Wann diese Vorlage passt

- Bug noch nicht lokalisiert
- Tests rot, Schicht unklar
- komplex vermutet — kein Rate-Fix gewünscht

## Häufige Irrtümer

### 1. Diagnose zu langsam — lieber direkt ändern

Viel Nacharbeit kommt vom Überspringen der Diagnose.

### 2. 2–3 Ursachen auflisten sei zu weitschweifig

Im Gegenteil: so siehst du, ob geraten wird.

Die Vorlage verlangt zuerst eine Erklärung der Fehlerursache und erst danach einen Vorschlag zur Korrektur.

## Verwandt

- [Zuerst diagnostizieren, dann fixen](/de/cases/workflows/diagnose-before-fixing/)
- [Bug-Fix-Fall](/de/cases/fix-a-bug/)
