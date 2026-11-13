---
title: "Mit Dateien arbeiten"
description: "Fügen Sie nur in der angegebenen Datei eine Zeile hinzu und prüfen Sie die tatsächliche Änderung."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Die festen Materialien und das Referenzergebnis des Autors sind vorhanden. Das Skript für Dateioperationen in einem temporären Verzeichnis wurde ausgeführt; ein unabhängiger Test mit einem Modell oder Lernenden steht noch aus."
prev:
  link: "/de/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Mit Codex sprechen"
next:
  link: "/de/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Klare Aufgaben formulieren"
locale: de
source_locale: zh-CN
source_revision: "ec5c2d3"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

## Voraussetzungen

Sie haben Schritt eins abgeschlossen und in `work` liegen noch die drei ursprünglichen Dateien. Bewahren Sie `starter` außerhalb des Arbeitsverzeichnisses als Ausgangsbasis auf.

## Eine überprüfbare Änderung vornehmen

```text
Füge nur in der ersten Zeile von notice.md folgenden Statuskommentar hinzu:
<!-- 状态：练习草稿，未发布 -->
Erhalte den ursprünglichen Text Zeichen für Zeichen. Ändere keine anderen Dateien und lege keine neuen an.
Nenne anschließend die Stelle der Änderung. Veröffentliche nichts und sende keine Benachrichtigung.
```

Vergleichen Sie die Datei in der Diff-Ansicht Ihres Clients oder im Editor Zeile für Zeile mit dem Original. Hier ist nur eine kleine Änderung erforderlich; ein zusätzlicher Ablauf nach dem Muster „erst planen, dann jeden Schritt bestätigen“ ist nicht nötig.

## Abschlusskriterien

Nur notice.md wurde geändert, und hinzugekommen ist genau eine Kommentarzeile; die beiden anderen Dateien bleiben unverändert. Vergleichen Sie mit dem [Ergebnis von Schritt zwei](/downloads/first-project/references/step-2-notice.md). Der Kommentar kann in gerendertem Markdown verborgen sein; prüfen Sie daher den Rohtext.

Falls das Modell den Text ändert, stellen Sie notice.md aus dem Original in `starter` wieder her und wiederholen Sie diesen Schritt. Stellen Sie nur diese Übungsdatei wieder her, nicht das gesamte Projekt. Siehe [Änderungen rückgängig machen und wiederherstellen](/de/guide/getting-started/undo-and-recover/).

[Übungspaket und Vorbereitung](/de/guide/learning-paths/beginner/)
