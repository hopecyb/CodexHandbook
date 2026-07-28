---
title: Fertigstellungsstandard definieren
description: Prüfbare Fertigstellungsbedingungen formulieren.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele nennen „was ich will“, aber nicht „wann es fertig genug ist“. Ob wirklich fertig, bleibt dann Gefühlssache.

Der Fertigstellungsstandard ist deine geplante Ergebnisprüfung.

Abnahmekriterien müssen **beobachtbar** sein:

- Schlecht: „Codequalität verbessern“
- Gut: „`npm test` bestanden; `Button` unterstützt `disabled`; Storybook-Screenshot entspricht Design“

## Warum oft unklar bleibt, ob fertig

Oft vermischen sich Ziel und Fertigstellungsstandard.

- **Ziel**: welches Ergebnis du willst
- **Fertigstellungsstandard**: wie du bestätigst, dass es erreicht ist

„Diesen Bug fixen“ ist Ziel;  
„Fix stabil reproduzierbar, relevante Tests grün, keine neuen Console-Errors“ ist näher am Fertigstellungsstandard.

## Häufige Irrtümer

### 1. „Sieht ungefähr richtig aus“ = fertig

Bei kleinen Aufgaben oft die Falle. „Ungefähr“ übersieht Tests, Randfälle und Nebenwirkungen.

### 2. Fertigstellungsstandard = Ergebnis loben

Er muss prüfbar sein — kein Abschlussstatement.

### 3. Build grün = fertig

Nicht unbedingt.

Build ist oft nur ein Checkpoint, nicht:

- Funktion wirklich korrekt
- Scope eingehalten
- Text passend für Leser
- Quellen geprüft

## Eine gängige Schreibweise

Wenn unklar, wähle aus diesen 3 Typen:

- **Funktionscheck**: Verhalten wie erwartet?
- **Technikcheck**: Build / Tests / Lint ok?
- **Scope-Check**: nur vereinbarter Bereich geändert?

Zum Beispiel:

```text
Abnahmekriterien:
- Nur Docs-Homepage-Text, kein Layout/keine Komponenten
- `pnpm build` bestanden
- First-Screen für Einsteiger; setzt keine Fachbegriffe voraus
```

## Prüffrage

Nach dem Schreiben:

> **Könnte eine andere Person damit „bestanden“ oder „nicht bestanden“ entscheiden?**

Wenn nicht, ist es meist noch zu vage.

Kurz: „fertig?“ darf kein Rätselraten sein.

Schreib Verifikationsbefehle in den Standard — dann führt der Agent sie eher aus: [Tests ausführen](/guide/verification/)


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Abnahme- und Fertigstellungsstandards; interne Links wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
