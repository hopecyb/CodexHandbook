---
title: Was ist Codex
description: "Erklärt in verständlicher Sprache, was Codex kann, was nicht, und welche Einstiege es gibt."
locale: de
source_locale: zh-CN
source_revision: 6c6582f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 2
---

Codex ist der von OpenAI bereitgestellte **KI-Programmier- und Arbeits-Agent**. Du gibst ihm ein Ziel; er kombiniert Projektdateien, Werkzeuge und deine Freigaben, um Inhalte zu lesen und zu ändern, Befehle auszuführen, Ergebnisse zu erzeugen — und Prozess sowie Änderungen zur Prüfung an dich zurückzugeben.

Er wirkt eher wie ein digitaler Kollege, der Werkzeuge bedienen kann. Du legst Ziel, Grenzen und Abnahmekriterien fest; er recherchiert, ändert Dateien und führt Schritte aus — die letzte Entscheidung bleibt bei dir.

Maßgeblich für das Produkt ist die offizielle Dokumentation unter [OpenAI Codex](https://developers.openai.com/codex). Dieses Handbook ist ein community-basiertes Open-Source-Guide für systematisches Lernen und Praxis — es ersetzt die offizielle Dokumentation nicht.

## Was unterscheidet es von gewöhnlichem KI-Chat

Viele, die Codex zum ersten Mal sehen, halten es für „etwas stärkere Chat-KI“. Der Unterschied liegt vor allem in der Ausführungsfähigkeit.

| Was du sonst nutzt | So kannst du es verstehen |
|---|---|
| Gewöhnlicher Chatbot | Gibt Tipps, erklärt Konzepte, schreibt Text |
| Codex | Antwortet nicht nur — es kann auch **Dateien lesen und ändern, Befehle ausführen und Artefakte erzeugen** |

Gewöhnliche Chat-Tools bleiben bei der Antwort; Codex greift in dem von dir erlaubten Rahmen aktiv ein.

## Welche Aufgaben eignen sich

Wenn eine Aufgabe mehr braucht als „darüber reden“ — Material lesen, etwas ändern, Schritte ausführen, Ergebnisse liefern — eignet sie sich gut für Codex.

Geht es nur um ein Konzept, einen Impuls oder einen allgemeinen Rat, reicht oft auch gewöhnliche Chat-KI.

## Wofür du es nutzen kannst

Auch ohne Programmierhintergrund helfen diese Szenarien zum Einstieg:

- **Material lesen und ordnen**: Dokumente, Meeting-Notizen, Screenshots, Tabellen zusammenfassen
- **Inhalte schreiben und überarbeiten**: Texte polieren, Verzeichnisse ergänzen, Doku anpassen
- **Kleine Projekte**: Eine Seite aufsetzen, eine Konfiguration ändern, eine Vorlage ergänzen
- **Probleme finden und beheben**: Helfen, wo es hakt und was als Nächstes zu prüfen ist
- **Wiederkehrende Arbeit automatisieren**: Feste Abläufe zuerst von Codex durchlaufen lassen

Wer Code schreibt, kann es in den Entwicklungsfluss einbauen; wer nicht, kann es als Assistenten nutzen, der Schritte wirklich ausführt.

## Was es kann

- **Verstehen**: Informationen aus Repos, Dokumenten, Tabellen und Screenshots zusammenfassen
- **Erstellen und ändern**: Texte schreiben, Code anpassen, Seiten und Konfiguration erzeugen
- **Ausführen**: Mit deiner Freigabe Terminalbefehle, Suche und Browser nutzen
- **Zusammenarbeiten**: Aufgaben zwischen App, CLI, IDE, Cloud und weiteren Einstiegen fortsetzen
- **Erweitern**: Über Skills, Plugins, MCP, Hooks u. a. wiederkehrende Abläufe und externe Systeme anbinden (fortgeschrittene Kapitel folgen)

## Was es nicht kann (wichtig)

- Es ersetzt nicht deine finale Verantwortung für Fakten, Sicherheit und Geschäftsentscheidungen
- Es garantiert nicht, dass eine Generation auf Anhieb korrekt ist; Ergebnisse müssen prüfbar sein
- Es darf ohne Freigabe Sandbox-, Netzwerk- oder Organisationsregeln nicht umgehen
- Es sollte nicht als „automatische Release-Pipeline ohne Abnahme“ behandelt werden

## Grundhaltung beim Einsatz

Nutze Codex als Assistenten — gib die Verantwortung nicht mit ab.

Lass es zuerst machen, prüfen und ändern; bestätige am Ende selbst:

- Hat es die richtigen Stellen geändert?
- Hat es dein Ziel falsch verstanden?
- Sind die genannten Fakten glaubwürdig?
- Können die Änderungen Nebenwirkungen haben?

## Typischer Ablauf

So sieht der übliche Ablauf aus:

1. Du nennst ein Ziel
2. Es antwortet oder schlägt einen Plan vor
3. Zum Ändern von Dateien oder Ausführen von Befehlen kann es deine Freigabe anfordern
4. Danach zeigt es, was geändert wurde
5. Du prüfst, ob das Ergebnis deinen Erwartungen entspricht

Ein vollständiges Beispiel findest du unter [Erste Aufgabe ausführen](/de/guide/getting-started/run-your-first-task/).

## Wichtige Einstiege

| Einstieg | Geeignet für |
|---|---|
| Desktop-App | Standard für Anfänger; Projekte, Aufgaben und Diff-Überprüfung sichtbar |
| CLI | Terminal-Nutzer, Skripte und Automatisierung |
| IDE-Erweiterung | Arbeit im Editor mit offenen Dateien und Auswahl |
| Web / Cloud | Repos verbinden, Cloud-Umgebung und lange Aufgaben |
| Mobil und remote | Überwachen, freigeben und leicht nachverfolgen |

Vergleichstabelle: [Funktionsvergleich](/de/guide/reference/feature-comparison/). Konzeptuelle Zusammenhänge: [Fähigkeitskarte](/de/guide/start-here/).

## Als Nächstes

Wenn du nur drei Punkte mitnehmen willst:

1. Codex ist mehr als Chat — mit Freigabe führt es auch Aktionen aus
2. Aufgaben brauchen klares Ziel, klare Grenzen und „wann gilt es als fertig“
3. Jedes Ergebnis prüfen — nicht blind vertrauen

Weiterführende Seiten:

1. [Codex-Client wählen](/de/guide/choose-your-client/)
2. [Begriffe für Anfänger](/de/guide/start-here/terminology-for-beginners/)
3. [Erste Aufgabe ausführen](/de/guide/getting-started/run-your-first-task/)

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur die Grundposition von Codex, passende Aufgaben und die Zusammenarbeit; interne Links und Konzeptformulierungen wurden geprüft, und der Text enthält keine feinkörnigen, schnell veränderlichen Produktdefaults.  
**Zuletzt überprüft:** 2026-07-26
