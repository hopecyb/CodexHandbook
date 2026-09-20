---
title: Erstes kleines Projekt abschließen
description: Gib Mitteilung, Prüfprotokoll und Wiederherstellungsnachweis ab, statt nur Lernnotizen zu schreiben.
contentType: path
audiences:
- beginner
level: beginner
editorialStatus: review
sidebar:
  order: 50
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Die festen Materialien und die Autorenreferenz wurden ergänzt; das Skript für Dateioperationen in einem temporären Verzeichnis wurde ausgeführt. Unabhängige Tests mit Modell oder Lesern stehen noch aus.
  evidence:
  - label: Dateioperationsprotokoll des Autors
    href: /downloads/first-project/validation/record.json
prev:
  link: /de/guide/learning-paths/beginner/04-review-results/
  label: Ergebnisse prüfen
next:
  link: /de/cases/analyze-a-spreadsheet/
  label: Mit einem wöchentlichen Verkaufsbericht weitermachen
locale: de
source_locale: zh-CN
source_revision: cc1139b
translation_status: draft
translated_at: '2026-09-20'
---

## Voraussetzungen

Die Mitteilung wurde Punkt für Punkt geprüft, facts.md und private-note.md sind unverändert, und records enthält dein eigenes Prüfprotokoll.

## Wiederherstellung einmal üben

1. Kopiere den gesamten Ordner `work` in einen neuen Ordner `backup-final` und prüfe, ob alle drei Dateien vorhanden sind.
2. Kopiere ihn erneut in einen neuen Ordner `recovery-drill`. Ändere notice.md nur in dieser Übungskopie zu einer „fehlerhaften Version für die Wiederherstellungsübung“. Der echte Ordner work bleibt unverändert.
3. Öffne die Übungsdatei und prüfe, ob sie tatsächlich geändert wurde. Kopiere dann die korrekte notice.md aus backup-final darüber.
4. Vergleiche die drei Dateien in recovery-drill einzeln mit der Sicherung und prüfe, ob die Inhalte übereinstimmen. Kontrolliere auch, dass work unverändert ist.

Dateimanager und Editor reichen aus. Vergewissere dich zuerst, dass der Zielpfad wirklich die Übungskopie ist. Falls ein Ordner mit demselben Namen bereits existiert, wähle einen neuen Namen, um andere Inhalte nicht zu überschreiben. Wenn du die Wiederherstellung nicht bestätigen kannst, halte „nicht bestätigt“ im Protokoll fest.

## Übergabefähiges Ergebnis speichern

Kopiere `templates/handoff.md` nach records. Trage anhand der tatsächlichen Arbeit Client-Version, endgültige Dateien, Grundlagen, Prüfnachweise, ungeklärte Anmeldemethode und Ergebnis der Wiederherstellung ein. Bewahre deine Aufgabenbeschreibung auf, damit du das Material beim nächsten Mal austauschen kannst.

Zur Abgabe gehören die endgültige notice.md, die ursprüngliche facts.md, deine review.md und handoff.md sowie eine wiederverwendbare Aufgabenbeschreibung. Dies sind Lehrdateien und keine Genehmigung für eine echte Veröffentlichung.

## Wann ist die Aufgabe abgeschlossen?

Die Mitteilung beruht auf Fakten und erfindet keine unbekannten Angaben; der Änderungsumfang stimmt; Fehler im mangelhaften Beispiel sind erkannt; die Wiederherstellung wurde tatsächlich durchgeführt und protokolliert; anhand der Übergabe können andere Grundlagen und offene Punkte finden. Allein „drei Aufgaben erfolgreich“ zu schreiben, belegt keinen Abschluss.

Das [Validierungsprotokoll der Dateioperationen](/downloads/first-project/validation/record.json) und das [Reproduktionsskript](/downloads/first-project/validation/reproduce.py) des Autors belegen nur den Referenzablauf für Kopie und Wiederherstellung in einem temporären Verzeichnis. Die Hauptübung benötigt kein Python, und diese Unterlagen ersetzen deine eigene Durchführung nicht.

Weiter mit dem [wöchentlichen Verkaufsbericht](/de/cases/analyze-a-spreadsheet/) oder dem [Creator-Pfad](/de/guide/learning-paths/creator/).

[Übungspaket und Vorbereitung](/de/guide/learning-paths/beginner/).
