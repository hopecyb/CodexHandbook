---
title: "Ergebnisse prüfen"
description: "Üben Sie das Finden von Fehlern an einem festen fehlerhaften Beispiel und prüfen Sie danach Ihre eigene Ankündigung."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Die festen Materialien und das Referenzergebnis des Autors sind vorhanden. Das Skript für Dateioperationen in einem temporären Verzeichnis wurde ausgeführt; ein unabhängiger Test mit einem Modell oder Lernenden steht noch aus."
  evidence:
    - label: "Protokoll der Dateioperationen des Autors"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/de/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Klare Aufgaben formulieren"
next:
  link: "/de/guide/learning-paths/beginner/05-complete-first-project/"
  label: "Das erste kleine Projekt abschließen"
locale: de
source_locale: zh-CN
source_revision: "e426ec4"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

## Zuerst ein bekannt fehlerhaftes Beispiel ansehen

Öffnen Sie die [vom Autor absichtlich fehlerhaft erstellte Ankündigung](/downloads/first-project/references/flawed-notice.md), vergleichen Sie sie mit `facts.md` und notieren Sie jeden falschen Satz, die zugehörige Fakt-Nummer und die Korrektur. Das Beispiel ist keine Modellausgabe und belegt nicht, dass ein bestimmter Prompt zwangsläufig scheitert.

Lockern Sie die Berechtigungen Ihres echten Arbeitsverzeichnisses nicht absichtlich, um Änderungen außerhalb des erlaubten Bereichs hervorzurufen. Das feste fehlerhafte Beispiel reicht aus, um Fehlererkennung zu üben und Ergebnisse wiederholt zu vergleichen.

## Danach das eigene Ergebnis prüfen

Kopieren Sie `templates/review.md` aus dem Paket in einen neuen Ordner `records` außerhalb des Arbeitsverzeichnisses und füllen Sie jeden Punkt aus:

- Sind Uhrzeit, Ort, Teilnehmerzahl, Kosten und Vorbereitung korrekt?
- Bleibt die Anmeldeart unbekannt, und stützen die Fakt-Nummern den Text?
- Wurde nur notice.md geändert? Sind die ursprünglichen Fakten und die Notiz unverändert?
- Wurden zusätzliche Dateien erstellt oder gelöscht oder Daten nach außen gesendet?

Kennzeichnen Sie unbekannte Punkte als nicht geprüft. Bewerten Sie sie nicht nur deshalb als bestanden, weil das Modell „fertig“ sagt.

## Abschlusskriterien

Benennen Sie die vier sachlichen Fehler im Beispiel eigenständig und sehen Sie dann in den [Prüfschlüssel](/downloads/first-project/references/review-key.md): Endzeit, Teilnehmerzahl, erfundene Anmeldeart und die Umdeutung des freiwilligen Mitbringens eines Buchs zu einer Pflicht. Falls Ihre eigene Ankündigung Fehler enthält, korrigieren und prüfen Sie sie erneut.

Bewahren Sie Ihr tatsächlich ausgefülltes Prüfprotokoll auf; kopieren Sie die Referenz des Autors nicht als Nachweis für einen eigenen Abschluss. Weitere Hinweise: [Diffs prüfen](/de/guide/quality/review-diffs/).

[Übungspaket und Vorbereitung](/de/guide/learning-paths/beginner/)
