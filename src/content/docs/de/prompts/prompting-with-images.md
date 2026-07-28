---
title: Prompts mit Bildern
description: 'Wie du bei Screenshots, Designs und Whiteboards fragen stellst, damit Ergebnisse ausführbar werden.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele „Bild → Aktion“-Aufgaben scheitern nicht, weil das Modell nichts sieht — sondern weil nur das Bild da ist und **nicht gesagt wird, worauf es achten soll**.

Ein Bild-Prompt hilft Codex bei drei Punkten:

1. Was ist dieses Bild?
2. Wohin soll die Aufmerksamkeit?
3. Welcher Aufgabe dient die Ausgabe?

## Wann Bild-Prompts passen

| Szenario | Rolle des Bildes |
|---|---|
| UI-Bug-Analyse | Anomalie-Ort und Zustand zeigen |
| Design-Umsetzung | Layout, Hierarchie, Abstände, Atmosphäre |
| Docs aus Screenshots | UI-basierte Erklärungen/Tutorials |
| Whiteboard/Flowchart | Handzeichnung → strukturierte Beschreibung |
| Ist vs. Soll | Differenzen erkennen statt Anforderungen raten |

Geht es um „Aussehen, Position, visuellen Zustand“, sind Bilder oft wirksamer als lange Texte; bei Geschäftsregeln sind Bilder eher Hilfsbeweis.

## Vierteilige Struktur für Bild-Prompts

Wie bei Text-Prompts strukturiert halten:

### 1. Bild-Identität

Was ist das Bild, woher kommt es?

Zum Beispiel:

```text
Das ist ein Screenshot der Login-Seite in Produktion, von iPhone 14 Safari.
```

### 2. Fokusbereich

Sag klar, wohin geschaut werden soll — nicht nur „finde selbst das Problem“.

Zum Beispiel:

```text
Fokus: Abstand zwischen unterem Button und Eingabefeld sowie Layout-Änderung bei geöffneter Tastatur.
```

### 3. Aufgabenziel

Analyse, Reproduktion, Code ändern, Docs schreiben, Vergleichstabelle?

Zum Beispiel:

```text
Zuerst mögliche Ursachen analysieren, noch keinen Code ändern.
Nenne 2–3 wahrscheinlich relevante Frontend-Dateien.
```

### 4. Ausgabeformat

Sag, welches Ergebnis du willst — vermeide Allgemeinplätze.

Zum Beispiel:

```text
Ausgabe:
1. Was du im Bild beobachtest
2. Mögliche Ursachen
3. Zu prüfende Dateien
4. Welche weiteren Screenshots ich nachliefern soll
```

## Drei gängige Vorlagen

### 1. Problem im Bild finden

```text
Hochgeladen: Screenshot der aktuellen Seite. Fokus: Bereich im roten Rahmen.
Beschreibe zuerst die beobachtete Anomalie, dann 2–3 mögliche Ursachen.
Noch keinen Code ändern.
```

### 2. Nach Design umsetzen

```text
Hochgeladen: Zieldesign.
Fasse Seitenstruktur, Schlüsselkomponenten, Responsive-Punkte und visuellen Stil zusammen.
Bei Umsetzung zuerst Struktur und Hierarchie halten — keine Extra-Features.
```

### 3. Ist vs. Soll vergleichen

```text
Zwei Bilder: 1 = aktueller Stand, 2 = Soll.
Vergleiche Layout, Texthierarchie, Abstände und Interaktionshinweise; gib Fix-Prioritäten.
```

## Welche Textinfos die Treffsicherheit erhöhen

Bilder fehlen oft Laufzeitkontext — hilfreich sind:

- Gerät oder Browser
- Zustand inkl. hover / focus / Fehlerzustand?
- Scrollposition
- Ist das „aktuell“ oder „Ziel“?
- Bestehendes Designsystem einhalten?

„Desktop Chrome ok, nur iOS Safari kaputt“ ist oft wertvoller als noch ein Screenshot.

## Mehrere Bilder richtig geben

### Paarweise Eingaben

Gut:

- aktuelles Bild
- Soll-Bild

oder:

- Normalzustand
- Fehlerzustand

Nicht ohne Erklärung einen Stapel hochladen und Reihenfolge raten lassen.

### Jedes Bild eine Rolle

Zum Beispiel:

```text
Bild 1: Desktop aktuell
Bild 2: Mobile aktuell
Bild 3: Design-Soll
```

So lassen sich Zuordnungen klarer ziehen.

## Typische Fehler bei Bild-Prompts

### Nur „mach es so“

Codex leitet dann alles aus dem Bild ab — auch Details, die dir egal sind, werden Pflicht.

### Nur Ausschnitt, kein Kontext

Lokale Screenshots zeigen den Punkt, aber nicht Seitenstatus, Responsive oder Overlay-Kontext.

### Design = vollständige Spec

Design zeigt Aussehen, selten Datenquellen, Randbedingungen, Interaktionslogik. Geschäftsregeln brauchen Text.

### Bild ersetzt Abnahme

Auch bei Design-Umsetzung zählen echte Seite, Diff, Breakpoints und Nutzbarkeit. Bilder sind Eingabe, nicht Abnahmeergebnis.

## Zusammenspiel mit anderen Seiten

- Bilder hochladen/verwalten: [Bilder und Screenshots](/guide/files-and-artifacts/images-and-screenshots/)
- Neue Bilder erzeugen: [Bildgenerierung](/guide/tools/image-generation/)
- Aufgabe vollständig formulieren: [Aufgabenstruktur](/prompts/task-anatomy/)
- Zuerst analysieren: [Zuerst einen Plan verlangen](/prompts/ask-for-a-plan/)

## Eine praktische Faustregel

Willst du „wie Design-Review“, lass zuerst **Beobachten**, dann **Urteilen**, dann **Empfehlen**.

Zum Beispiel:

```text
Beschreibe zuerst nur Beobachtungen aus dem Bild — keine Schlüsse.
Dann die wahrscheinlichste Ursache.
Zuletzt empfohlene Änderungsrichtung.
```

Das ist klarer als „hilf mir fixen“ und führt leichter weiter.

## Quellen
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
---

**Status:** verified  
**Anwendbare Produkte:** App / Cloud  
**Prüfgrundlage:** Struktur, Szenarien und Hinweise dieser Seite wurden anhand offizieller OpenAI-Materialien zu Bildeingabe und Datei-Upload geprüft; keine inoffiziellen Szenarioquellen und keine versionsabhängigen UI-Details.  
**Zuletzt geprüft:** 2026-07-26
