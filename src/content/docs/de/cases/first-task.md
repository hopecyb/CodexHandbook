---
title: Erste Aufgabe
description: Mit einem klaren Prompt eine kleine Änderung abschließen und das Ergebnis prüfen lernen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Erste Aufgabe

Das folgende Beispiel geht standardmäßig von der **Desktop-App** aus; CLI und IDE können denselben Prompt verwenden.

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Einsteiger |
| Client | Desktop-App (empfohlen) |
| Geschätzte Dauer | 15–20 Minuten |

## 1. Ziel und Kontext

**Ziel:** In einem Übungsprojekt eine sichere Dateiänderung durchführen.

**Erfolgskriterien:** Nur die angegebene Datei wird geändert, das Ergebnis entspricht der Akzeptanzbeschreibung, und du kannst den Diff lesen.

## 2. Vorbereitung

- Client installiert und angemeldet
- Übungsprojekt angelegt (mit `hello.md` oder einer ähnlichen Datei)

## 3. Empfohlener Prompt

```text
Ziel: Am Ende von hello.md einen Abschnitt «Heutige Übung» mit einer Liste aus drei Stichpunkten anhängen.
Einschränkungen: Nur hello.md ändern; vorhandenen Inhalt nicht löschen; keine Netzwerkanfragen ausführen.
Akzeptanz: Am Dateiende erscheinen die Überschrift und genau drei Listeneinträge.
Wenn Informationen fehlen, frag mich zuerst; rate nicht.
```

## 4. Ausführung und Prüfung

1. Zuerst einen kurzen Plan anfordern (oder selbst danach fragen)
2. Bei der Freigabe zum Schreiben von Dateien den Pfad bestätigen
3. Danach den Diff Zeile für Zeile mit den Akzeptanzkriterien abgleichen

## 5. Nächste Schritte

- [Prompt-Grundlagen](/prompts/basics/)
- [Überprüfung](/guide/verification/)
- [Hier starten](/guide/start-here/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite ist eine risikoarme Einstiegsübung im Handbuch: beschränkt auf das Ändern einer einzelnen Datei, ohne Netz, mit der Anforderung, den Diff zu lesen und jedes Akzeptanzkriterium zu prüfen. Die zugehörigen Vorkapitel (Installation, Übungsprojekt, Überprüfung) wurden kreuzgeprüft; der Inhalt hängt nicht von produktspezifischen Versionsdetails ab.  
**Zuletzt geprüft:** 2026-07-26
