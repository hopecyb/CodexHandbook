---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Diese Seite liefert eine Vorlage für Erstellungsaufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab."
  checkedAt: "2026-07-26"
title: Erstellungsvorlage
description: Feature, Text oder Artefakt von Grund auf umsetzen.
locale: de
source_locale: zh-CN
source_revision: "c47ebbf"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---


Bei Aufgaben von Grund auf treten oft zwei Probleme auf:

- großes Ziel ohne Grenzen
- noch zu wenig Info, aber Codex soll schon generieren

Die Erstellungsvorlage klärt Artefakt, Zweck und Constraints, bevor es losgeht.

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

- Seite, Komponente, Skript oder Doc von Grund auf
- du weißt, was entstehen soll, hast aber noch nicht begonnen
- Scope der Erstellung soll klar sein, bevor generiert wird

## Häufige Irrtümer

### 1. Erstellen = „freie Hand“

Von null brauchst du besonders:

- für wen
- wozu
- welche Stil-/Techniklinien tabu sind

### 2. Hintergrund ist nur Dekoration

Beim Erstellen beeinflusst der Hintergrund oft die Richtung des Artefakts direkt.

### 3. Abnahme „sieht gut aus“ reicht nicht

Dann wird „fertig?“ schwer entscheidbar.

Am riskantesten: starten, bevor „was“ und „für wen“ klar sind.

## Verwandt

- [Spezifikationsgetriebenes Arbeiten](/de/cases/workflows/specification-driven-work/)
- [Fertigstellungsstandard definieren](/de/prompts/define-done/)
