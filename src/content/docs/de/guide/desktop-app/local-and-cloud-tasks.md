---
title: Lokale und Cloud-Aufgaben
description: Zwischen lokaler und Cloud-Ausführung in der App wechseln.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hier geht es darum, ob eine Aufgabe in der Desktop-App auf dem lokalen Rechner oder in einer Remote-Umgebung läuft.

In der App wählst du den Ausführungsort der Aufgabe:

- **Lokal:** Dateien und Umgebung auf deinem Rechner, schnelle Iteration
- **Cloud:** Cloud-Umgebung, geeignet für Remote-Repositories und lange Aufgaben

Konzepte: [Lokal und Cloud](/guide/foundations/local-vs-cloud/) · Überblick: [Web und Cloud](/guide/web-and-cloud/)

Vor dem Wechsel prüfen: Dürfen Geheimnisse in dieser Umgebung erscheinen? Erlaubt die Netzwerkrichtlinie das?

## Häufige Missverständnisse

### 1. Ich bin in der Desktop-App — warum trotzdem lokal vs. Cloud?

Die App ist nur der Einstieg; Aufgaben laufen deshalb nicht automatisch alle auf deinem Rechner.

### 2. Was ist die Standardwahl?

Meist zuerst lokal, weil:

- die Dateien auf deinem Rechner liegen
- Ergebnisse leichter zu prüfen sind
- Fehler leichter rückgängig zu machen sind

### 3. Wann Cloud in Betracht ziehen?

Häufige Fälle:

- sehr lange Aufgabe
- Remote-Repository-Umgebung nötig
- einheitliche Umgebung nötig
- lokale Ressourcen nicht belasten

Reicht lokal in der Desktop-App, bleib lokal; bei längeren, remote-lastigen oder umgebungsgebundenen Aufgaben eher Cloud.


---

**Status:** verified  
**Anwendbare Produkte:** App  
**Prüfgrundlage:** Die aktuellen OpenAI-Help-Center-Artikel «ChatGPT Work and Codex» und «Using Codex with your ChatGPT plan» unterscheiden klar local workflows und cloud tasks; diese Seite fasst im Desktop-App-Kontext nur zusammen: lokal für schnelle Iteration, Cloud für Remote-Repositories und lange Aufgaben.  
**Zuletzt geprüft:** 2026-07-26
