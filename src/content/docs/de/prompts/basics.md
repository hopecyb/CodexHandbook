---
title: Prompt-Grundlagen
description: Die grundlegenden Bausteine eines guten Prompts.
locale: de
source_locale: zh-CN
source_revision: b2a486e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Wenn du mit Prompts anfängst, fällt der Fokus leicht auf „klingt die Formulierung fortgeschritten?“.  
Für Codex zählt vor allem, ob du diese Punkte klar gemacht hast:

- Was soll es genau tun?
- Wo darf es eingreifen — und wo nicht?
- Was gilt als fertig?
- Bei Unsicherheit: zuerst fragen, zuerst prüfen oder zuerst stoppen?

Ein guter Prompt macht die Grenzen der Aufgabe klar. Er muss nicht wie ein Zauberspruch klingen.

## Inhalt

Er hilft dir vor allem, diese typischen Probleme zu vermeiden:

- Ziel so vage, dass nur „irgendwie optimieren“ herauskommt
- Kein Scope genannt, also ändert Codex mehr als beabsichtigt
- Keine Abnahme, also bewertest du am Ende nur nach Gefühl
- Keine Anweisung bei fehlenden Infos, also beginnt es zu raten

## Wie du einen Prompt sehen kannst

Sieh einen Prompt als Aufgaben-Ticket.  
Ein brauchbares Ticket beantwortet mindestens:

- Was tun?
- Warum?
- Mit welchen Materialien?
- Was darf nicht angefasst werden?
- Wie sieht „bestanden“ aus?

Wenn das unklar bleibt, retten auch elegante Sätze nichts.

## Drei Schreibstufen (auch die Beispielbibliothek nutzt sie)

- **Minimalversion**: wenn das Ziel bereits sehr klar ist
- **Empfohlene Version**: Ziel, Hintergrund, Eingaben, Constraints, Abnahme, Berechtigungen
- **Lehrversion**: erklärt, warum jeder Abschnitt existiert

## Häufige Irrtümer

### 1. Je länger der Prompt, desto besser

Relevant zählt.  
Lange, irrelevante Hintergrundtexte verwässern die wirklich wichtigen Grenzen.

### 2. Wenn das Ziel da ist, kann der Rest wegfallen

Nur das Ziel zu schreiben, lässt leicht aus:

- Änderungsbereich
- Stilvorgaben
- Abnahmeweise
- Verhalten bei Unsicherheit

### 3. Prompts sollen vor allem „dem Modell das Denken beibringen“

Für Einsteiger ist die praktischere Sicht: Prompts reduzieren Missverständnisse.

## Eine brauchbare Minimalstruktur

Wenn du nicht alles auf einmal lernen willst, starte mit diesen 4 Sätzen:

```text
Ziel: Was sollst du tun
Scope: Was darfst du nur ändern
Abnahme: Wann gilt es als fertig
Bei Unsicherheit: zuerst fragen, nicht raten
```

Das ist schon deutlich klarer als „hilf mir, das zu optimieren“.

## Wann Minimalversion, wann Vollversion

### Minimalversion passt bei

- kleinen Änderungen an einer Datei
- sehr konkretem Ziel
- guter Vertrautheit mit Repo und Aufgabe

### Empfohlene Version ist robuster bei

- mehreren Dateien
- unbekanntem Projekt
- höherem Risiko
- nötiger Freigabe, Tests oder Überprüfung

Für die meisten Einsteiger ist der Start mit der **empfohlenen Version** meist sicherer.

Der Kern eines guten Prompts: weniger Raten, weniger Abschweifen, weniger Grenzverletzung.

Beispiele: [Erste Aufgabe ausführen](/de/cases/first-task/) und [Aufgabenstruktur](/de/prompts/task-anatomy/).

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite behandelt nur allgemeine Prompt-Methoden; interne Links wurden geprüft, und der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
