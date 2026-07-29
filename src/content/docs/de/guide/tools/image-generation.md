---
title: Bildgenerierung
description: "Bilder in Codex-Aufgaben erzeugen oder bearbeiten — Prompt, Format und Abnahme."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Codex kann in manchen Szenarien **Bildgenerierung** aufrufen: Illustrationen, Icon-Entwürfe, UI-Konzeptbilder, Schemata. Ergebnis = **abzunehmendes Artefakt**, kein sofort live-fähiges Brand-Asset.

Geeignet für visuelle Entwürfe — nicht als finales Lieferobjekt.

## Inhalt dieser Seite

- Wann in Codex erzeugen vs. Profi-Tools
- Bild-Prompt und Constraints schreiben
- Copyright, Brand, Dateiverwaltung

## Geeignete Szenarien

| Geeignet | Nicht geeignet |
|---|---|
| Blog-Bildentwurf, interne Doku-Schemata | Externe Assets unter strengem Brand Manual |
| Schnelle UI-Layout-Atmosphäre | Pixelgenaue Designlieferung |
| Beispiel-Icons in Tutorials | Unautorisierte Personenporträts |

Komplementär zu [Prompting mit Bildern](/prompts/prompting-with-images/): dort **Input**-Bilder; hier **Output**-Bilder.

## Wofür Bildgenerierung taugt

Geeignet:

- Schnell Richtung finden
- Visuelles Konzept sehen
- Artikel, Doku, Prototyp mit brauchbarem Sketch

Nicht direkt:

- Als formales Brand-Material ausgeben
- Als präzises Designfile ausgeben
- Als finales externes Visual ausgeben

## Empfohlener Workflow

1. Zweck, Seitenverhältnis, Stilkeywords (keine Markenstil-Namen stapeln)
2. Format (PNG/SVG falls unterstützt) und Speicherpfad
3. Danach [Artefakte überprüfen](/guide/quality/verify-artifacts/): öffnen, Auflösung, Lesbarkeit
4. Vor externem Release Design oder Legal

## Häufige Missverständnisse

### 1. Schön = nutzbar?

Prüfen:

- Passt zum Zweck
- Seltsame Details
- Text-Chaos
- Stil zum Inhalt

### 2. „Mach ein Bild“ reicht?

Meist nicht. Mindestens:

- Zweck
- Quer/Hoch/Quadrat
- Stilrichtung
- Ob Text
- Dateiformat

### 3. Ersetzt Designer?

Näher:

- Frühes Explorationstool
- Content-Bildtool
- Konzept-Sketch-Tool

Kein Ersatz für strenge Designlieferung.

## So formulieren

1. Wofür das Bild
2. Quer, hoch oder quadratisch
3. Atmosphäre und Farben
4. Ob Text
5. Wie Sie danach prüfen

## Dateien und Repo

- Große Bilder in `assets/` oder CDN, Git-Volumen prüfen
- Im PR Prompt und Modellversion (interne Audit)
- Siehe [Bilder und Screenshots](/guide/files-and-artifacts/images-and-screenshots/)

## Sicherheit und Compliance

- Keine irreführenden Inhalte mit sensiblen Marken, gefälschten Ausweisen, fremden Porträts
- Unternehmenspolicy kann Themen verbieten; [Acceptable Use](https://openai.com/policies/) und interne Regeln

## Quellen
- OpenAI Help Center: Images in ChatGPT
- OpenAI Academy: Creating images with ChatGPT
## Häufige Fehler

- Unkomprimierte 4K-Bilder ins Repo
- Generiertes Bild als Foto oder offizielles Logo ausgeben
- Kein „kein Text“ im Prompt → Müll-Untertitel

Bildgenerierung: Richtung und Entwurf zuerst; externe Lieferung nach formalen Artefaktstandards.

---

**Status:** verified  
**Gilt für:** App / Cloud (versionsabhängig)  
**Prüfgrundlage:** Gegen offizielle OpenAI-Bildgenerierungs- und -edit-Materialien geprüft (Szenarien, Prompt, Abnahme); konservativ „Entwurf zuerst, formale Artefakte brauchen Review“.  
**Zuletzt geprüft:** 2026-07-26
