---
title: Review-Vorlage
description: Diff und Änderungsrisiken strukturiert prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Review-Vorlage

Reviews driften leicht ab, wenn sofort „nebenbei für dich geändert“ wird.

Probleme zuerst finden, dann entscheiden, ob geändert wird — das ist stabiler.

## Vorlage

```text
Bitte den aktuellen Diff relativ zu 【main/Zielbranch】 reviewen — noch keinen Code ändern.
Dimensionen:
1. Überschreitet 【Issue/Spec】-Scope?
2. Logikfehler, Randfälle, Fehlerbehandlung
3. Sicherheit (Secrets, Injection, Berechtigungen)
4. Passen Tests und Docs zur Änderung?
Ausgabe als gestufte Liste: 🔴 Blocker / 🟡 Vorschlag / 🟢 OK — je Eintrag Datei und Zeile.
```

## Wann diese Vorlage passt

- PR reviewen
- Diff reviewen
- Risiko von Doc-/Config-Runden prüfen

## Häufige Irrtümer

### 1. Review = ein paar Meinungen

Genauer: strukturiert Probleme finden.

### 2. Kein offensichtlicher Bug = bestanden

Review sollte auch prüfen:

- Scope überschritten?
- Tests und Docs mitgezogen?
- Sicherheit und Randfälle?

Kern der Review-Vorlage: Risiken entlang fester Dimensionen aufdecken — kein vages „gut/schlecht“.

## Verwandt

- [Review vor dem Merge](/cases/workflows/review-before-merge/)
- [PR-Review-Fall](/cases/review-a-pr/)


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite liefert eine Vorlage für Review-Aufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
