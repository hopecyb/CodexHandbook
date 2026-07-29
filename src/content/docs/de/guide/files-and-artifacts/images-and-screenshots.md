---
title: Bilder und Screenshots
description: "Screenshots und Designs an Codex geben und Bilddateien in Aufgaben verwalten."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Bilder lassen den Agent UI-Probleme, Designabsicht oder Whiteboard-Skizzen **sehen**. Diese Seite: Input (Ihre Bilder) und Bildverwaltung im Repo; neue Bilder erzeugen: [Bildgenerierung](/guide/tools/image-generation/).

Bei Screenshot-Aufgaben: klar sagen, wohin geschaut werden soll und warum dort ein Problem liegt.

## Inhalt dieser Seite

- Screenshots möglichst wirksam anhängen
- Design-/Figma-Exports nutzen
- Volumen von Bildern in Repo und Kontext

## Szenarien für Bild-Input

| Szenario | Vorgehen |
|---|---|
| UI-Bug | Screenshot + Textmarkierung der Anomalie |
| Design-Umsetzung | PNG-Export + Breakpoints und Komponentenbibliothek |
| Architektur-Whiteboard | klares Foto/Export + Legende |
| Fehlerdialog | vollständiger Fehlertext, nicht nur eine Ecke |

Vertiefung: [Prompting mit Bildern](/prompts/prompting-with-images/)

## Was Bilder wirklich ergänzen

Wertvoll, wo Text schwer beschreibt:

- Wie schief das Layout wirklich ist
- Wohin der Button gequetscht ist
- Was der Dialog genau sagt

Bilder sagen Codex aber nicht automatisch:

- Welchen Bereich Sie am meisten meinen
- Wie geändert werden soll
- Ob „Ist-Zustand“ oder „Soll-Zustand“

Deshalb meist ein klarer Begleitsatz nötig.

## Qualitätsanforderungen

- **Auflösung**: Text lesbar, keine unscharfen Thumbnails
- **Zuschnitt**: irrelevanter Desktop, sensible Notification-Leisten weg
- **Annotation**: Pfeile/Kreise ok, kritische Punkte zusätzlich in Text
- **Mehrere Bilder**: als „Ist / Soll“-Paare hochladen

## Häufige Missverständnisse

### 1. Screenshot gesendet ≠ Problem automatisch verstanden

Visueller Beleg ja — trotzdem ergänzen:

- Wo das Problem
- Was gewünscht
- Welche Ist, welche Soll

### 2. Größer = immer klarer?

Zu große Originale:

- zu viel Irrelevantes
- Repo-/Kontextvolumen schwer

### 3. Nur Designbild reicht nicht

Bei „nach Bild umsetzen“ besser:

- Breakpoint-Anforderungen
- Komponentenconstraints
- Was frei, was nicht

## Bilder im Repo

| Praxis | Grund |
|---|---|
| Einheitlich `assets/` oder `docs/images/` | Wartbar |
| WebP/Kompression | Clone-Volumen |
| Sinnvolle Dateinamen | `login-form-mobile.png` statt `image1.png` |
| Alt-Text (in Docs) | Barrierefreiheit |

## Direkt nutzbare Formulierung

```text
Bild 1 = aktuelle Seite, Bild 2 = gewünschter Effekt.
Bitte Fokus auf Hero-Titelbereich und Button-Abstände.
Keine Geschäftslogik aus dem Screenshot raten — nur Visual und Layout.
```

## Privacy und Sicherheit

- Screenshots können Kundendaten, interne URLs, Token enthalten — zuerst schwärzen
- Keine Config-UIs mit Secrets an untrusted Aufgaben
- [Sensibler Kontext](/guide/context/sensitive-context/)

## Quellen
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
## Abnahme

Bei „nach Bild umsetzen“:

1. Umsetzung und Referenz nebeneinander (oder Seite mit [Browser-Werkzeug](/guide/tools/browser/) öffnen)
2. Responsive und Dark Mode prüfen (falls gefordert)
3. [Artefakte überprüfen](/guide/quality/verify-artifacts/)

## Häufige Fehler

- Nur Design, keine Interaktionshinweise
- 4K-Original direkt committen
- Annehmen, das Modell liest Figma-Links ohne Export

Gute Screenshots sind mehr als „Bild da“. Bild klar, Fokus klar, Erwartung klar — dann trifft die Aufgabe eher.

---

**Status:** verified  
**Gilt für:** App / Cloud  
**Prüfgrundlage:** Geprüft gegen offizielle OpenAI-Materialien zu Bild-Input und Datei-Upload (Upload, Fokusmarkierung, Volumen, Privacy); keine versionsgebundenen UI-Schritte im Text.  
**Zuletzt geprüft:** 2026-07-26
