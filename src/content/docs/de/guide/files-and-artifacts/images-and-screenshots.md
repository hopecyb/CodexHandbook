---
legacyVerification:
  status: "verified"
  products: "App / Cloud"
  basis: "Geprüft gegen offizielle OpenAI-Materialien zu Bild-Input und Datei-Upload (Upload, Fokusmarkierung, Volumen, Privacy); keine versionsgebundenen UI-Schritte im Text."
  checkedAt: "2026-07-26"
title: Bilder und Screenshots
description: "Screenshots und Designs an Codex geben und Bilddateien in Aufgaben verwalten."
locale: de
source_locale: zh-CN
source_revision: "adc2b88"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 20
---

Bilder lassen den Agent UI-Probleme, Designabsicht oder Whiteboard-Skizzen **sehen**. Diese Seite behandelt bereitgestellte Bilder und die Bildverwaltung im Repository. Neue Bilder erzeugen: [Bildgenerierung](/de/guide/tools/image-generation/).

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

Vertiefung: [Prompting mit Bildern](/de/prompts/prompting-with-images/)

## Was Bilder wirklich ergänzen

Bilder sind besonders hilfreich, wenn sich etwas mit Worten schwer beschreiben lässt:

- Wie schief das Layout wirklich ist
- Wohin der Button gequetscht ist
- Was der Dialog genau sagt

Bilder sagen Codex aber nicht automatisch:

- Welcher Bereich dir am wichtigsten ist
- Wie geändert werden soll
- Ob „Ist-Zustand“ oder „Soll-Zustand“

Deshalb braucht das Bild meist eine kurze, klare Erläuterung.

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
- Repository und Kontext werden unnötig groß

### 3. Nur Designbild reicht nicht

Bei „nach Bild umsetzen“ besser:

- Breakpoint-Anforderungen
- Vorgaben für Komponenten
- Was frei, was nicht

## Bilder im Repo

| Praxis | Grund |
|---|---|
| Einheitlich `assets/` oder `docs/images/` | Wartbar |
| WebP/Kompression | Begrenzt die Größe beim Klonen |
| Sinnvolle Dateinamen | `login-form-mobile.png` statt `image1.png` |
| Alt-Text (in Docs) | Barrierefreiheit |

## Direkt nutzbare Formulierung

```text
Bild 1 = aktuelle Seite, Bild 2 = gewünschter Effekt.
Bitte Fokus auf Hero-Titelbereich und Button-Abstände.
Keine Geschäftslogik aus dem Screenshot raten — nur Darstellung und Layout.
```

## Datenschutz und Sicherheit

- Screenshots können Kundendaten, interne URLs, Token enthalten — zuerst schwärzen
- Keine Konfigurationsansichten mit Zugangsdaten an nicht vertrauenswürdige Aufgaben übergeben
- [Sensibler Kontext](/de/guide/context/sensitive-context/)

## Quellen
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
## Abnahme

Bei „nach Bild umsetzen“:

1. Umsetzung und Referenz nebeneinander (oder Seite mit [Browser-Werkzeug](/de/guide/tools/browser/) öffnen)
2. Responsive und Dark Mode prüfen (falls gefordert)
3. [Artefakte überprüfen](/de/guide/quality/verify-artifacts/)

## Häufige Fehler

- Nur Design, keine Interaktionshinweise
- 4K-Original direkt committen
- Annehmen, das Modell liest Figma-Links ohne Export

Gute Screenshots sind mehr als „Bild da“. Bild klar, Fokus klar, Erwartung klar — dann lässt sich die Aufgabe zuverlässiger lösen.
