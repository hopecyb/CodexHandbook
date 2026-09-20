---
title: 'Creator-Pfad: Quellen, Artikel, Präsentation und Wiederverwendung'
description: Mit denselben Quellen eine Faktentabelle, einen Artikel, eine bearbeitbare Präsentation mit acht Folien und wiederverwendbare Anweisungen erstellen, jeweils mit Material und Abnahmekriterien.
contentType: path
audiences: [creator, beginner]
level: beginner
outputs: [markdown, csv, pptx, png]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Vier Meilensteine wurden anhand der tatsächlichen Artikel- und Folienmaterialien angeordnet und ihre Ein- und Ausgaben abgeglichen. Einzelne Referenzprüfungen stehen in den Fallbeispielen; Zeitbedarf und selbstständiger Abschluss des gesamten Pfads durch Leser wurden noch nicht getestet.
  evidence:
    - label: Artikelmaterial und Prüfprotokoll des Autors
      href: /downloads/source-backed-article/validation/record.md
    - label: Protokoll der Präsentationsumgebung und des Renderings
      href: /downloads/article-to-slides/validation/record.md
sidebar:
  order: 10
prev:
  link: /de/guide/learning-paths/
  label: Lernpfad auswählen
next:
  link: /de/cases/write-an-article/#1-zuerst-fakten-und-widersprüche-ordnen
  label: Drei Quellen ordnen
locale: de
source_locale: zh-CN
source_revision: d1b46b1
translation_status: draft
translated_at: '2026-09-20'
---

Verfasse aus einem Quellensatz einen Artikel, wandle ihn in eine bearbeitbare Präsentation um und speichere anschließend wiederverwendbare Aufgabenanweisungen. Jeder Schritt hinterlässt Dateien, anhand derer du deinen Abschluss prüfen kannst.

Du musst in Codex einen lokalen Ordner öffnen können. Für die Präsentation brauchst du außerdem ein Werkzeug zum Erstellen von PPTX-Dateien und eine Anwendung, die sie öffnen kann; die konkrete Umgebung beschreibt das Fallbeispiel. Nicht alle Clients müssen dieselben Werkzeuge bieten. Wenn dir Dateioperationen neu sind, erledige zuerst [Mit Dateien arbeiten](/de/guide/learning-paths/beginner/02-work-with-files/).

## Ablauf und Material

| Schritt | Vorhandene Eingaben | Ergebnis | Danach |
|---|---|---|---|
| 1. Belege ordnen | Drei synthetische Quellen und ein Quellenindex | Faktentabelle, Liste von Widersprüchen und Lücken | Artikel schreiben |
| 2. Schreiben und überarbeiten | Faktentabelle, Zielgruppe, Gliederung | Artikel, Zuordnung der Aussagen, Überarbeitungsnotizen | Präsentation erstellen |
| 3. Präsentation erstellen | Artikel, Zuordnung der Aussagen und Vortragsziel | PPTX mit acht Folien, acht Vorschauen, Notizen und Prüfprotokoll | Wiederverwendbare Anweisungen speichern |
| 4. Wiederverwendung festhalten | Ergebnisse und Erfahrungen der ersten drei Schritte | Aufgabenvorlage, Abnahmeliste und ein Übertragungsprotokoll | Mit neuen Quellen erneut testen |

[Artikel-Übungspaket herunterladen](/downloads/source-backed-article/source-backed-article-1.0.0.zip) · [Präsentations-Übungspaket herunterladen](/downloads/article-to-slides/article-to-slides-1.0.0.zip)

Beide Pakete können einzeln verwendet werden. Im durchgehenden Pfad solltest du für Schritt 3 möglichst deinen eigenen fertigen Artikel verwenden. `input/` im Präsentationspaket enthält Referenzeingaben für Leser ohne fertigen Artikel oder zum Vergleichen. Sämtliche Produkte, Personen und Interviews sind synthetisches Lehrmaterial.

## 1. Belege ordnen und Widersprüche bewahren

Entpacke das Artikelpaket und lies `brief.md`, `sources/index.csv` und die drei aufgeführten Quellen. Ordne sie wie im [ersten Teil des Artikelfalls](/de/cases/write-an-article/#1-zuerst-fakten-und-widersprüche-ordnen), bevor du Fließtext schreibst.

Speichere Ergebnisse unter `my-output/` im Artikelpaket und bewahre die Originalquellen auf. Trage in der Faktentabelle Quellen-ID, Abschnitt, gestützte Aussage und Art des Belegs ein. Halte in `unresolved.md` zusätzlich Fragen fest, die durch die Quellen nicht geklärt werden.

Abgeschlossen ist der Schritt, wenn du den Widerspruch zwischen P3 und C2 zur Diagnose-Standardeinstellung findest, ohne eine Seite eigenmächtig zur endgültigen Antwort zu erklären. Das synthetische Interview bleibt als solches gekennzeichnet; erfinde keine Genauigkeits- oder Zeitersparniswerte, die die Quellen nicht nennen.

Lässt sich eine Quelle nicht öffnen oder stimmt eine ID nicht überein, stelle zuerst Dateien und Index wieder her. Rate den Inhalt nicht anhand des Dateinamens. Danach geht es weiter.

## 2. Artikel schreiben und mit Quellen abgleichen

Beginne mit der Faktentabelle und den offenen Fragen. Folge dem [Artikelfall](/de/cases/write-an-article/): Lege die Zielgruppe fest, erstelle eine Gliederung, schreibe innerhalb des festgelegten Rahmens zusammenhängend und prüfe anschließend Fakten und Ausdruck.

Liefere `article.md`, `claim-map.csv`, `unresolved.md` und Überarbeitungsnotizen. Nenne mindestens eine sachliche Korrektur und eine sprachliche Verbesserung. Das Referenzpaket enthält einen bewusst gestalteten Erstentwurf und ein tatsächliches Text-Diff; stelle das gestaltete Gegenbeispiel nicht als echten Modellfehler dar.

Fertig ist der Schritt, wenn wichtige Fakten auffindbar sind, Autorenempfehlungen von belegten Aussagen getrennt bleiben und der Diagnosewiderspruch sichtbar ist. Ist Python verfügbar, kannst du die Strukturprüfung aus dem Fall ausführen. Auch bei Erfolg musst du Satz für Satz prüfen, ob die Quellen die Schlussfolgerung tragen.

Bewahre die Dateien als Eingabe für Schritt 3 auf. Dein Artikel darf vom Referenztext abweichen, muss aber die wesentlichen Einschränkungen erhalten.

## 3. Artikel in acht Folien umwandeln

Beginne mit dem fertigen Artikel und der Faktentabelle. Bestimme anhand des [Präsentationsfalls](/de/cases/create-a-slide-deck/) Zielgruppe, ein Ziel von etwa fünf Minuten und eine Erzählfolge mit acht Folien. Prüfe das Layout zunächst anhand von Titel- und Einschränkungsfolie und erstelle dann den Rest.

Kopiere Artikel und Faktentabelle in den Eingabeordner der Präsentationsaufgabe und kennzeichne sie als deine Versionen. Zitiere nicht deinen Artikel und übernimm zugleich ungeprüft alle Schlussfolgerungen des Referenzentwurfs.

Liefere eine PPTX mit acht Folien, acht Vorschauen, Notizen zu jeder Folie und ein Validierungsprotokoll. Sie muss sich in deiner dokumentierten Präsentationssoftware öffnen lassen; wichtige Texte müssen bearbeitbar sein. Prüfe chinesischen Text und Grenzen auf jeder Folie. Quellenwidersprüche müssen auch nach der Verdichtung klar erkennbar bleiben.

Ohne PPTX-Werkzeug speichere zunächst die Gliederung und dokumentiere die fehlende Fähigkeit. Der Schritt bleibt offen, bis du ihn in einer passenden Umgebung fortsetzen kannst. Danach folgt die Wiederverwendung.

## 4. Wiederverwendbare Anweisungen speichern

Beginne mit geprüftem Artikel und Folien. Erstelle `workflow.md` anhand der folgenden Vorlage und beschreibe dein tatsächliches Vorgehen; speichere nicht nur ein letztes „Weiter“-Prompt.

```md
# Von Quellen zur Präsentation

## Diese Aufgabe
- Zielgruppe und Zweck:
- Eingabeordner, Quellenindex und unveränderliche Originaldateien:
- Ausgabeordner und benötigte Dateiformate:

## Reihenfolge
1. Fakten, Schlussfolgerungen, Widersprüche und Lücken vor dem Schreiben auflisten.
2. Zielgruppe und Aufbau festlegen, zusammenhängend schreiben und anhand der Quellen überarbeiten.
3. Artikel auf acht Folien verdichten; zuerst Titel- und Einschränkungsfolie prüfen.
4. Nativen Text, chinesische Schriftarten, alle Vorschauen und Notizen prüfen.

## Abnahme
- Wichtige Fakten sind auf Quellen zurückführbar; offene Fragen bleiben sichtbar.
- Autorenempfehlungen von Produktfakten trennen; synthetisches Material nicht als echte Aussage ausgeben.
- PPTX lässt sich öffnen und bearbeiten; Software- und Schriftumgebung je Folie festhalten.
- Ausgeführte und nicht ausgeführte Prüfungen nennen; Lieferung bleibt lokal.

## Erfahrungen
- Tatsächliche Probleme, Änderungen und Bestätigung der Wiederherstellung:
- Schritte, die nächstes Mal bleiben können:
- Fakten und Umgebung, die neu bestätigt werden müssen:
```

Probiere nun eine kleine Übertragung: Ändere die Zielgruppe von „Einzelautoren beim ersten Versuch“ zu „Kollegen, die Unterlagen zur Prüfung vorbereiten“. Verwende dieselben Quellen und erstelle nur die Gliederung neu. Dokumentiere in `reuse-check.md`, wie sich Titel, Schwerpunkt und Reihenfolge geändert haben und welche Faktengrenzen gleich blieben. Die Übung testet die Anpassbarkeit der Vorlage; sie behauptet keine neue Faktenrecherche.

Fertig bist du, wenn andere in `workflow.md` Eingaben und Ausgaben finden und erkennen, wann die Arbeit abgeschlossen ist. Das Übertragungsprotokoll muss konkrete Unterschiede enthalten und darf nicht weiter für die alte Zielgruppe schreiben. Wenn die Abfolge stabil ist, lies [Einen Workflow in einen Skill überführen](/de/cases/workflows/turn-a-workflow-into-a-skill/). Das [Beispiel eines Schreib-Skills](/de/skills/examples/writing-skill/) enthält ein vollständiges Paket mit Stilbeispielen, Faktentabelle und Umgang mit Widersprüchen; Strukturprüfungen ersetzen keine menschliche Faktenprüfung.

## Optional: mit einer Aufgabe mit klaren Zahlen beginnen

Wenn du Büroanalysen bevorzugst, bearbeite zunächst den [wöchentlichen Verkaufsbericht](/de/cases/analyze-a-spreadsheet/). Er enthält CSV, Rückerstattungen und doppelte Zeilen, eine Referenzzusammenfassung und ein unabhängiges Prüfsystem. Danach kannst du „wichtige Zahlen unabhängig berechnen und den Umgang mit Anomalien erklären“ in deine Abnahmeliste aufnehmen. Das muss nicht künstlich in den Artikel über ein fiktives Produkt eingebaut werden.

Am Ende solltest du Quellenmaterial, Artikel und Faktentabelle, bearbeitbare Präsentation, Prüfprotokolle und wiederverwendbare Anweisungen haben. Nur Links zu lesen oder Referenzantworten herunterzuladen reicht nicht aus.
