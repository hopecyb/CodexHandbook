---
title: Erste Aufgabe ausführen
description: "Mit klaren Prompts eine kleine Änderung abschließen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Das folgende Beispiel geht von der **Desktop-App** aus; CLI/IDE können denselben Prompt nutzen.

Viele wollen beim ersten Mal Codex gleich „eine komplette Website bauen“ oder „das ganze Projekt refaktorieren“ lassen — das gerät leicht außer Kontrolle.

Eine kleine erste Aufgabe ist stabiler. Den kompletten Ablauf durchzuziehen zählt mehr als sofort Großes.

## Warum die erste Aufgabe so klein sein sollte

Die erste Aufgabe sollte idealerweise:

- kleinen Änderungsumfang haben
- auf einen Blick prüfbar sein
- bei Fehlern leicht rückgängig zu machen sein

Deshalb hier ein sehr kleines Übungsbeispiel.

## Beispielaufgabe

Im Übungsprojekt zu Codex sagen:

```text
Ziel: Am Ende von hello.md einen Abschnitt «Heutige Übung» mit einer dreizeiligen Stichpunktliste anhängen.
Einschränkungen: Nur hello.md ändern; bestehende Inhalte nicht löschen; keine Netzwerkanfragen.
Abnahme: Am Dateiende erscheinen diese Überschrift und genau drei Listeneinträge.
Fehlen Informationen, frag zuerst nach — nicht raten.
```

## Wofür die Prompt-Teile da sind

Dieser Prompt trennt wichtige Punkte klar:

- **Ziel**: Was tun
- **Einschränkungen**: Was nicht wild ändern
- **Abnahme**: Wann es „fertig“ ist
- **Fehlen Infos, frag nach**: Verhindert eigenmächtiges Raten

Kein festes Template — nur die Teile, die sonst leicht unklar bleiben, klar geschrieben.

## Häufige Missverständnisse

### 1. Je größer die erste Aufgabe, desto mehr „echtes Können“

Beim ersten Mal zählt der komplette Kreislauf — nicht, alles auf einmal groß zu machen.

### 2. Prompt geschrieben — danach dem Modell freigeben

In der ersten Aufgabe besonders auf drei Dinge achten:

- Umfang überschritten?
- Arbeitet es an den genannten Dateien?
- Erfüllt das Ergebnis die Abnahme?

### 3. Erster Fehler = ich kann es nicht

Zur ersten Aufgabe gehört auch:

- Merken, was schiefging
- Das Problem benennen können
- Wissen, wie man es zurückholen lässt

## Während der Ausführung

1. Kurzen Plan verlangen (oder selbst einfordern)
2. Beim Freigeben von Dateischreiben den Pfad prüfen
3. Danach zu [Ergebnis prüfen](/guide/getting-started/review-the-result/)

## Ausführungsreihenfolge

Diese 5 Schritte:

1. Sicheres Übungsprojekt wählen
2. Kleine Aufgabe mit nur einer Datei geben
3. Vor der Freigabe klar sehen, was es anfassen will
4. Danach Umfang und Ergebnis prüfen
5. Unzufrieden → rückgängig oder präzise nachsteuern

Nach diesen 5 Schritten sitzt der Kollaborationsrhythmus schon besser.

## Was du danach prüfen solltest

Drei Punkte:

1. Hat es nur `hello.md` geändert?
2. Steht der Abschnitt wirklich am Dateiende?
3. Sind es genau drei Listeneinträge?

Wenn alle drei stimmen, ist diese kleine Aufgabe im Kern gelaufen.

## Wenn es falsch lag

Fehler beim ersten Mal sind normal. So kannst du weitermachen:

```text
Du hast zu viel geändert. Nimm Änderungen an anderen Dateien zurück und behalte nur die Änderungen an hello.md.
```

Oder:

```text
Ändere erst nichts weiter. Sag mir, was du gerade geändert hast.
```

Prompt-Prinzipien: [Prompt-Grundlagen](/prompts/basics/).

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE  
**Überprüfungsgrundlage:** Gegen die im Handbook bereits geprüften Kapitel Prompt-Grundlagen, Ergebnis prüfen, Rückgängig/Wiederherstellen und Übungsprojekt abgeglichen; der Inhalt beschränkt sich auf die stabile Übungsmethode „erste Aufgabe klein, prüfbar, rücknehmbar“.  
**Zuletzt überprüft:** 2026-07-26
