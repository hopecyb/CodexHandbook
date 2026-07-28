---
title: Projekte und Aufgaben
description: Projekte und Aufgaben in der App verwalten.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

„Projekt“ und „Aufgabe“ wirken einfach, vermischen sich aber leicht beim ersten Mal. Das Projekt ist die Datei oder das Repository, an dem du arbeitest; die Aufgabe ist das konkrete, was du Codex diesmal erledigen lässt.

Zum Beispiel:

- Das Repository deiner Dokumentationsseite → Projekt
- „Formuliere die Startseiten-Begriffe verständlicher“ → Aufgabe

Diese Begriffe sind wichtig, weil in der Desktop-App immer zwei Ebenen gleichzeitig existieren:

- In welchem Projekt du gerade arbeitest
- Was genau du diesmal von Codex willst

## Projekt

- Übungsverzeichnis oder Repository-Wurzel hinzufügen
- Pro Durchgang auf ein Projekt fokussieren, um vermischten Kontext zu vermeiden

Das „Projekt“ ist der **Arbeitsort** dieser Zusammenarbeit.  
Stimmt der Ort nicht, laufen viele Folgeprobleme schief.

## Aufgabe

- Aufgabe mit vollständigem Prompt starten
- Plan und Werkzeugaufrufe beobachten
- Bei Bedarf freigeben oder ablehnen

Die „Aufgabe“ ist der **konkrete Auftrag** dieses Durchgangs.  
Je klarer der Auftrag, desto weniger muss Codex während der Arbeit raten.

Begriffsvergleich: [Threads, Aufgaben und Projekte](/guide/foundations/threads-tasks-and-projects/)

## Häufige Missverständnisse

### 1. Warum zuerst das Projekt wählen und nicht direkt fragen?

Weil Codex wissen muss, an welchen Dateien bzw. welchem Repository es diesmal arbeitet.

Ist das Projekt falsch, häufen sich Fragen wie „warum sieht es die Dateien nicht?“ oder „warum wurde woanders geändert?“.

### 2. Können in einem Projekt viele Aufgaben liegen?

Ja.  
Stabiler ist:

- im selben Projekt
- jeweils eine klare Aufgabe
- danach die nächste starten

So vermischt sich der Kontext weniger.

### 3. Wie die Aufgabe am Anfang formulieren?

Möglichst diese drei Infos mitgeben:

- Ziel
- Einschränkungen / Umfang
- Fertigstellungskriterium

### 4. Gehört ein großer Bedarf in eine einzige Aufgabe?

Ist die Spanne groß, ist oft sicherer:

- Projekt unverändert lassen
- in mehrere Aufgaben teilen
- jede Aufgabe löst ein klares Ziel

## Übliche Reihenfolge

Beim ersten Arbeiten in der Desktop-App kannst du so vorgehen:

1. Bestätigen, dass das Projekt stimmt
2. Bestätigen, dass das Aufgabenziel nur eine Hauptsache benennt
3. Umfang und Fertigstellungskriterium ergänzen
4. Nach dem Start vor allem Plan, Werkzeugaufrufe und Änderungsergebnis beobachten

---

**Status:** verified  
**Anwendbare Produkte:** App  
**Prüfgrundlage:** Die aktuellen Desktop-Hilfeartikel im OpenAI Help Center unterscheiden weiterhin Projekt / Projektkontext von der konkreten chat/work/codex-Sitzung und erklären, dass lokale Ordner oder Projekte in der Desktop-App geöffnet werden können; diese Seite erklärt nur die Schicht „Projekt = Arbeitsort, Aufgabe = Auftrag dieses Durchgangs“.  
**Zuletzt geprüft:** 2026-07-26
