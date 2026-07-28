---
title: Diagnostizieren-Vorlage
description: Zuerst Ursache finden, dann Fix besprechen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Diagnostizieren-Vorlage

Typischer Irrtum bei Diagnose: man sagt „erst prüfen“, meint aber stillschweigend „direkt fixen“.

Kern der Diagnostizieren-Vorlage: „Ursache finden“ und „fixen“ trennen.

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

Die Vorlage verlangt zuerst, warum es kaputt ist — dann erst, wie ändern.

## Verwandt

- [Zuerst diagnostizieren, dann fixen](/cases/workflows/diagnose-before-fixing/)
- [Bug-Fix-Fall](/cases/fix-a-bug/)

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite liefert eine Vorlage für Diagnose-Aufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
