---
title: Datei- und Ordner-Kontext
description: Relevante Dateien benennen und irrelevantes Rauschen vermeiden.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Sag nicht nur „änder mal was“ — sag Codex, welche Dateien es ansehen und welche es meiden soll.

Du weißt vielleicht, dass das Problem in einem Verzeichnis liegt; ohne klaren Rahmen zieht Codex oft Irrelevantes mit.

## Warum der Rahmen zählt

Zu großer Rahmen → oft gleichzeitig:

- viele irrelevante Dateien gelesen
- Kontext von Unwichtigem belegt
- ähnliche Datei als Ziel missverstanden
- Änderungsrahmen über Erwartung hinaus

Datei- und Ordner-Kontext = Grenze ziehen.

## Warum Dateirahmen klar sein müssen

Denk an jemanden, den du in ein Büro schickst:

- „Such mal“ → vielleicht wird die halbe Etage durchwühlt
- „Nur der blaue Ordner im dritten Schrank“ → viel effizienter

Bei Codex ebenso: Je klarer der Rahmen, desto weniger Raten.

## Einfaches Beispiel

Relevante Pfade benennen:

```text
Bitte nur src/components/Button.tsx und die zugehörige Testdatei lesen, nicht das ganze Repository scannen.
```

Das sagt zugleich:

- wohin schauen
- wohin nicht
- Rahmen nicht selbst ausweiten

## Häufige Missverständnisse

### 1. Mehr relevante Dateien = besser?

Zu wenig → Raten; zu viel → Fokus verwässert.  
Besser: **nur das, was die aktuelle Aufgabe wirklich braucht.**

### 2. Ich weiß nicht, welche Dateien relevant sind?

Zuerst den Rahmen eingrenzen lassen — mit klarem Zweck:

```text
Finde zuerst Dateien zur Login-Button-Optik; noch keine Änderungen vornehmen.
```

Erst lokalisieren, dann ausführen — stabiler als „ganz Repo suchen und gleich ändern“.

### 3. Ohne Rahmen egal — es findet schon?

Es kann suchen, Preis meist:

- mehr lesen
- langsamer
- ähnliche Dateien mitziehen
- unerwartete Stellen ändern

### 4. Verzeichnis und Datei immer beide nennen?

Nicht zwingend — so konkret wie möglich:

- Datei bekannt → Datei nennen
- ungefähre Region → zuerst Verzeichnis
- völlig unklar → zuerst nur lokalisieren und erklären lassen

## Drei Dinge, die im Prompt oft fehlen

Wenn du Überänderungen fürchtest, ergänze:

1. Welche Dateien/Verzeichnisse nur ansehen
2. Was nicht scannen
3. Vor dem Ändern listen, welche Dateien betroffen wären

In der IDE: Workspace-Wurzel korrekt?

## Direkt nutzbare Formulierung

```text
Zuerst nur `src/pages/home/` und `src/components/Hero.tsx` ansehen.
Nicht `backend/` und `scripts/` scannen.
Brauchst du weitere Dateien, sag zuerst warum — dann weiter.
```

Dateirahmen angeben = weniger Raten, Rauschen und Fehländerungen.


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur, wie Datei- und Ordnerrahmen gesetzt werden; Beispieltexte und Konzepte wurden geprüft, ohne Abhängigkeit von Produktversion, Preisen oder UI.  
**Zuletzt geprüft:** 2026-07-26
