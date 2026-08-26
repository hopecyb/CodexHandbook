---
title: Prompts für lange Aufgaben
description: 'Phasen aufteilen, Checkpoints und Übergabeinformationen.'
locale: de
source_locale: zh-CN
source_revision: b8e9c9b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Lange Aufgaben scheitern oft so:

- zu viel auf einmal
- keine Checkpoints unterwegs
- Thread wird lang, Constraints widersprechen sich

Entscheidend ist nicht ein längerer Prompt, sondern die Zerlegung in kleine Phasen mit Checkpoints.

Lange Aufgabe in Phasen, jede mit Abnahme:

```text
Phase 1: Nur recherchieren und Optionen listen (kein Code)
Phase 2: Minimale Änderung umsetzen
Phase 3: Tests ergänzen und ausführen……
Nach jeder Phase stoppen und auf meine Bestätigung warten.
```

## Warum lange Aufgaben leicht abdriften

Sie enthalten oft mehrere Arbeitstypen zugleich:

- Problem verstehen
- Lösung entwerfen
- Änderungen umsetzen
- Überprüfung ausführen
- Übergabenotiz schreiben

Alles in einem „mach fertig“ erhöht das Risiko deutlich.

## Häufige Missverständnisse

### 1. Lange Aufgabe = kurze Aufgabe nur ausführlicher geschrieben

Lange Aufgaben brauchen **Phasensteuerung**, nicht nur mehr Hintergrund.

### 2. Phasen auflisten reicht nicht

Jede Phase braucht einen klaren Ausgang, z. B.:

- nur Plan, kein Code
- nur Minimalumsetzung
- nur Tests und Überprüfung

### 3. Ein Thread bis zum Ende ist immer besser

Bei sehr langen Aufgaben sind Übergabe, Zusammenfassung und neuer Thread oft klarer.

## Ein brauchbarer Phasenansatz

Vier Blöcke:

1. Recherche: verstehen, noch nicht handeln
2. Plan: Schritte, Risiken, Überprüfung
3. Ausführung: minimale Änderung
4. Überprüfung: Checks, Fazit, Übergabe vorbereiten

## Eine praktischere Formulierung

```text
Phase 1: Recherchieren und Optionen listen, kein Code, auf Bestätigung warten
Phase 2: Nur minimale Änderung, danach Impact melden
Phase 3: Überprüfung ergänzen und relevante Checks laufen lassen
Phase 4: Änderungen, Risiken und Folgeempfehlungen zusammenfassen
```

Besser: Jede Phase kann stoppen und geprüft werden — nicht alles in einem Rutsch.

Dazu: [Fortschritt und Steuerung](/de/guide/agent-work/progress-and-steering/) · [Übergabe und Fortsetzen](/de/guide/agent-work/handoff-and-resume/)

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Zerlegung und Übergabe langer Aufgaben; interne Links und Phasenbeispiele wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
