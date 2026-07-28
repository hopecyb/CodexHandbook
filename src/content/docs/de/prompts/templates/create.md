---
title: Erstellen-Vorlage
description: Feature, Text oder Artefakt von null umsetzen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Erstellen-Vorlage

Bei Aufgaben von null treten oft zwei Probleme auf:

- großes Ziel ohne Grenzen
- noch zu wenig Info, aber Codex soll schon generieren

Die Erstellen-Vorlage klärt Artefakt, Zweck und Constraints, bevor es losgeht.

## Vorlage

```text
Ziel: 【Artefaktname】 erstellen für 【Zweck/Nutzer】.
Hintergrund: 【bestehende Konventionen, Designstil, Dependency-Limits】
Eingaben: 【Spec, Skizze, Referenz-@Dateien】
Constraints:
- Nur ändern/erstellen in 【Pfad-Scope】
- Nicht einführen: 【Ausschlüsse】
- 【Hochrisiko-Aktionen】 erst nach meiner Freigabe
Abnahme:
- 【beobachtbares Ergebnis 1】
- 【beobachtbares Ergebnis 2】
- Selbsttest-Schritte angeben
Bei fehlenden Infos: Annahmen listen und fragen — nicht raten.
```

## Wann diese Vorlage passt

- Seite, Komponente, Skript oder Doc von null
- du weißt, was entstehen soll, hast aber noch nicht begonnen
- Scope der Erstellung soll klar sein, bevor generiert wird

## Häufige Irrtümer

### 1. Erstellen = „freie Hand“

Von null brauchst du besonders:

- für wen
- wozu
- welche Stil-/Techniklinien tabu sind

### 2. Hintergrund ist nur Dekoration

Bei Erstellen beeinflusst Hintergrund oft die Richtung des Artefakts direkt.

### 3. Abnahme „sieht gut aus“ reicht nicht

Dann wird „fertig?“ schwer entscheidbar.

Am riskantesten: starten, bevor „was“ und „für wen“ klar sind.

## Verwandt

- [Spezifikationsgetriebenes Arbeiten](/cases/workflows/specification-driven-work/)
- [Fertigstellungsstandard definieren](/prompts/define-done/)


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite liefert eine Vorlage für Erstellen-Aufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
