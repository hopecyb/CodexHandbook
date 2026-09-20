---
caseCategory: creation
directoryOrder: 30
title: Aus einem Artikel acht bearbeitbare Folien erstellen
description: Lade Artikel, Acht-Folien-Gliederung, PPTX mit nativen Texten und Vorschauen herunter und übe Verdichtung, Quellentreue und die Prüfung chinesischer Schrift.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Die Referenz-PPTX wurde in Software importiert, alle acht Folien gerendert und nativer Text bearbeitet. Dies gilt nur für die protokollierte Umgebung und ist eine Selbstprüfung des Autors.
  environment: Artifact Tool JS / Node.js 24.19.0; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64; Arial Unicode MS mit explizit konfiguriertem Systemschriftverzeichnis.
  evidence:
    - label: Prüfablauf, Schriftkorrektur und Prüfumfang
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: Eingaben, Prompts, PPTX, PDF, acht Vorschauen und Prüfprotokoll für die eigenständige Übung
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /de/cases/write-an-article/
  label: Zuerst den belegten Artikel fertigstellen
next:
  link: /de/guide/learning-paths/creator/#4-wiederverwendbare-anweisungen-speichern
  label: Wiederverwendbare Anweisungen speichern
locale: de
source_locale: zh-CN
source_revision: '7189374'
translation_status: draft
translated_at: '2026-09-20'
---

Verdichte einen Artikel zu acht Folien und liefere eine PPTX mit bearbeitbarem Text, Vorschauen und Sprechernotizen. Bewahre Einschränkungen und Widersprüche der Quellen; erfinde keine Zahlen oder Diagramme, nur um Seiten zu füllen.

Schwierigkeit: Einstieg. Geschätzte Dauer: 60–90 Minuten, redaktionell geschätzt und nicht mit Lesern gemessen. Voraussetzung sind lokale Dateien und ein PPTX-Werkzeug oder Präsentationssoftware. Das Paket enthält einen Eingabeartikel; du kannst unabhängig üben oder nach dem [Artikelfall](/de/cases/write-an-article/) fortfahren.

[Vollständiges Paket v1.0.0 (ZIP)](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [Bearbeitbare PPTX](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## Ergebnis der Übung

![Erste Referenzfolie: zunächst eine Zusammenfassung prüfen, bevor die Nutzung ausgeweitet wird; fiktives Produkt und synthetische Quellen sind gekennzeichnet](/downloads/article-to-slides/previews/slide-01.png)

Die Referenz nutzt native Textfelder, sodass wichtige Texte bearbeitet werden können. Quellen, Produkt „Shiye“ und Person „Xiaolin“ sind fiktives Lehrmaterial unter CC0 1.0; Schriftdateien werden nicht mitgeliefert.

| Folie | Nur eine Aussage | Tatsächliche Vorschau |
|---|---|---|
| 1 | Erst prüfen, dann breiter nutzen | [Titel](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | Dateiformate und Belege haben Grenzen | [Leserfrage](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | Drei Quellen haben verschiedene Belegrollen | [Belege](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | Begrenzten Test in vier Schritten durchführen | [Methode](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | Unbelegte Funktionswerbung entfernen | [Revision](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | Diagnose-Standardeinstellung bleibt widersprüchlich | [Grenzen](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | Prüfung dokumentieren und offene Angaben ergänzen | [Nächster Schritt](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | Quellen und synthetischer Zweck nachprüfbar | [Quellen](/downloads/article-to-slides/previews/slide-08.png) |

## 1. Eingaben lesen und roten Faden wählen

Entpacke `article-to-slides/` und lies `brief.md`, `input/article.md`, `input/claim-map.csv` und `input/unresolved.md`. Kopiere nicht gleich den Referenzentwurf.

```text
Lies brief.md sowie Artikel, Faktentabelle und offene Fragen unter input/.
Entwirf acht Folien für Einzelautoren, die ein Werkzeug zum Ordnen von Notizen erstmals testen; Ziel sind etwa fünf Minuten.
Schreibe je Folie eine Kernaussage, Stichpunkte und Quellen-IDs nach my-output/outline.md.
Bewahre den fiktiven Status, die Grenzen der unterstützten Formate und den Diagnosekonflikt.
Erfinde keine Zahlen zu Genauigkeit, Preis oder Zeitersparnis; trenne Autorenempfehlungen von Produktfakten.
```

Fertig ist die Gliederung, wenn alle acht Rollen vorhanden sind, jede Folie einen Schwerpunkt hat und jeder Fakt auf einen Quellenabschnitt verweist. Fünf Minuten sind ein Ziel und kein Nachweis einer tatsächlichen Probe. Der vollständige Prompt liegt unter `prompts/01-outline.md`.

## 2. Layout mit zwei Musterfolien prüfen

Erstelle zuerst Titel- und sechste Einschränkungsfolie: Die erste prüft große Überschriften, die zweite den dichtesten Text. Der Referenzstil nutzt Dunkelblau, warmes Weiß und nativen Text; zusätzliche Dekoration ist nicht nötig.

```text
Erstelle anhand der bestätigten Acht-Folien-Gliederung zuerst Muster für Folien 1 und 6.
Nutze 16:9 und native Textfelder; wähle eine in der Umgebung verfügbare chinesische Schrift.
Bewahre auf Folie 6 P3 „standardmäßig aus“ und C2 „bei Neuinstallation standardmäßig an“ und markiere die Schlussfolgerung als ungeklärt.
Rendere und prüfe chinesische Zeichen, Zeilenumbrüche, Ränder und Quellenlesbarkeit. Wenn das Layout passt, erstelle die restlichen sechs Folien.
Speichere PPTX, acht Vorschauen, Foliennotizen und Prüfprotokoll unter my-output/.
```

Die Referenz verwendet Arial Unicode MS. Ist diese Schrift bei dir nicht vorhanden, wähle eine legal nutzbare chinesische Schrift und prüfe das Layout erneut. Ohne PPTX-Werkzeug kannst du die Gliederung und die fehlende Fähigkeit abgeben; nur mit der Gliederung ist die Übung nicht abgeschlossen.

## 3. Bearbeitbarkeit, acht Folien und Quellen prüfen

Öffne deine PPTX in Präsentationssoftware, speichere eine Testkopie, wähle wichtigen Text aus, ändere ihn, speichere und öffne die Datei erneut. Exportiere jede Folie als Vorschau und prüfe chinesische Zeichen, Umbrüche, Überlagerungen, Seitenzahl und Notizen. Acht ganzseitige Bilder sind kein Ersatz für eine bearbeitbare Präsentation.

Die Referenz wurde mit LibreOffice headless importiert und exportiert. In einer temporären PPTX-Kopie wurde der native Titeltext von „eine“ zu „zwei“ geändert und nach dem Export wieder gelesen. Dies ist kein GUI-Klicktest und beweist nicht dasselbe Verhalten in jeder Software.

![Sechste Referenzfolie: gegensätzliche Standardeinstellungen zweier Quellen und eine ausdrücklich ungeklärte Schlussfolgerung](/downloads/article-to-slides/previews/slide-06.png)

Folie 6 ist zentral für die Faktenprüfung: Entferne nicht eine Seite des Widerspruchs oder vereinfache ihn zu „standardmäßig aus“. Die linke Spalte von Folie 5 ist ein gestaltetes Gegenbeispiel des Autors und muss von der korrekten Fassung rechts getrennt bleiben. Ausführliche Quellen stehen in den PPTX-Notizen und in `solution/slide-notes.md`.

## 4. Referenzdateien prüfen und eigene Validierung notieren

Führe im vollständigen Paket aus, um die heruntergeladenen Referenzdateien zu prüfen (Python 3.10+, nur Standardbibliothek):

```sh
python3 validation/check.py
```

Das Skript prüft Hashes, acht Folien, native Texte, Notizen und Vorschauen der Referenz. Deinen neuen Entwurf unter `my-output/` prüft es nicht. Kontrolliere ihn wie zuvor in Präsentationssoftware und dokumentiere Version, Schrift, Ergebnisse und verbleibende Grenzen.

Ohne Skript kannst du PPTX/PDF dennoch Seite für Seite öffnen, darfst aber keine Hash- oder Strukturprüfung behaupten. Das [Referenz-Prüfprotokoll](/downloads/article-to-slides/validation/record.md) beschreibt den wirklichen Umfang.

## Wiederherstellung bei Problemen

| Symptom | Nächster Schritt | Nachweis der Behebung |
|---|---|---|
| Chinesisch erscheint als Kästchen | Zugriff des Renderers auf chinesische Schriften prüfen; gegebenenfalls Schrift in Kopie ersetzen | Alle acht Seiten neu gerendert, lesbar |
| Text läuft nach Schriftwechsel über | Text pro Folie kürzen, Textfelder und Weißraum anpassen, Grenzen behalten | Keine abgeschnittenen oder überlappenden Vorschauen |
| Text lässt sich nicht einzeln auswählen | Native Textobjekte statt ganzseitiger PNG verwenden | Text in Software auswählen, ändern, speichern und erneut öffnen |
| Quellenwiderspruch wurde „geglättet“ | P3, C2, C3 prüfen, beide Aussagen und „ungeklärt“ wiederherstellen | Folie 6 stimmt mit Faktentabelle überein |
| Datei öffnet nicht oder Seitenzahl falsch | Erneut exportieren und in Präsentationssoftware importieren; fehlerhafte Datei zur Diagnose behalten | Acht Seiten vorhanden, Datei öffnet |

Der erste Fehler trat wirklich auf: LibreOffice las anfangs die chinesischen Systemschriften nicht. Nach Angabe des Schriftverzeichnisses wurden alle acht Folien erneut lesbar gerendert und geprüft. Seiten mit fehlenden Zeichen wurden nicht als endgültige Vorschau verwendet.

## Abschlusskriterien und nächster Schritt

- Achtseitige PPTX öffnet sich in der protokollierten Software und wichtige Texte sind bearbeitbar.
- Alle acht Vorschauen liegen vor; Chinesisch, Umbrüche und Grenzen wurden je Seite geprüft.
- Quellen, synthetische Identität, Autorenempfehlungen und offene Widersprüche sind sichtbar.
- Das Prüfprotokoll nennt durchgeführte und nicht durchgeführte Prüfungen; Ergebnisse bleiben lokal.

Weiter mit dem [Creator-Pfad: Wiederverwendbare Anweisungen speichern](/de/guide/learning-paths/creator/#4-wiederverwendbare-anweisungen-speichern). Stabile Schritte können als eigene Vorlage dienen. Danach folgt [Einen Workflow in einen Skill überführen](/de/cases/workflows/turn-a-workflow-into-a-skill/).
