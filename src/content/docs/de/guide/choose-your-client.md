---
title: Den passenden Codex-Client auswählen
description: Wähle anhand des Arbeitsorts und der Interaktionsweise zwischen Desktop-App, CLI, IDE-Erweiterung und Cloud.
sidebar:
  order: 2
locale: de
source_locale: zh-CN
source_revision: 1e89f67
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Beim ersten Einstieg in Codex musst du nicht Dutzende Funktionen vergleichen. Beantworte zunächst eine Frage: **Wo findet diese Arbeit hauptsächlich statt?**

![Auswahl eines Codex-Clients: Vom Arbeitsort zur Desktop-App, CLI, IDE-Erweiterung oder Cloud](/diagrams/codex-client-selection-de.svg)

## In 30 Sekunden entscheiden

| Die Arbeit findet hauptsächlich hier statt | Bevorzugter Einstieg | Am besten geeignete Interaktion |
|---|---|---|
| Zwischen mehreren lokalen Projekten und parallelen Aufgaben | **Desktop-App** | Aufgaben verfolgen, Diffs prüfen, Genehmigungen bearbeiten und längere Arbeiten verwalten |
| Im Terminal, in Skripten oder bestehenden Kommandozeilenabläufen | **CLI** | Aufgaben direkt übergeben, Befehle ausführen und Skripte mit Automatisierungen kombinieren |
| In VS Code, einem kompatiblen Editor, Xcode oder JetBrains | **IDE-Integration** | Mit Editor-Kontext fragen, Änderungen direkt vornehmen und prüfen |
| In einem verbundenen Remote-Repository und einer isolierten Umgebung | **Cloud** | Aufgaben in der Cloud ausführen, parallel bearbeiten und Ergebnisse später prüfen |

Wenn du keine klare Präferenz hast, ist die **Desktop-App** meist der anschaulichste Einstieg. Arbeitest du bereits dauerhaft im Terminal oder in VS Code, sparst du durch den Verbleib in deiner vertrauten Oberfläche Kontextwechsel.

## Welche Aufgabe die vier Einstiege jeweils lösen

### Desktop-App: Steuerzentrale für lokale Arbeit

Die Desktop-App eignet sich für Arbeiten, bei denen Aufgabenstatus, Dateiänderungen und Genehmigungen übersichtlich bleiben sollen. Sie ist besonders geeignet, um:

- mehrere Aufgaben oder Projekte gleichzeitig zu verfolgen
- parallele Änderungen mit Worktrees zu isolieren
- nach einer Diff-Prüfung Rückfragen oder Korrekturen anzustoßen
- länger laufende Arbeit an lokalen Projekten zu organisieren

Beispiel: Eine Aufgabe behebt eine Login-Regression, eine andere untersucht ausschließlich lesend einen Leistungsengpass. Anschließend prüfst du beide Ergebnisse getrennt.

### CLI: Codex in den Terminal-Workflow integrieren

Die CLI richtet sich an Personen, die ihre Projekte bereits über die Kommandozeile verwalten. Sie liegt direkt neben Testbefehlen, Git und Skripten und erleichtert es, identische Abläufe in der Teamdokumentation festzuhalten.

```bash
codex
```

Beispiel: Starte Codex im Stammverzeichnis des Repositorys. Lass zuerst den fehlschlagenden Test ausführen, die Ursache bestimmen und die kleinste Änderung implementieren. Verifiziere den Fix anschließend mit demselben Testbefehl.

### IDE-Integration: Am aktuellen Code arbeiten

IDE-Integrationen eignen sich, wenn eine Frage eng mit der gerade geöffneten Datei, Auswahl oder Diff zusammenhängt. Derzeit gibt es zwei Arten der Unterstützung: VS Code, Cursor, Windsurf und andere kompatible Editoren verwenden die Codex-Erweiterung; Xcode und JetBrains-IDEs besitzen jeweils eigene Codex-Integrationen.

Beispiel: Markiere eine schwer verständliche Funktion, lass Ein- und Ausgaben sowie Fehlerpfade erklären und fordere anschließend Tests für Grenzfälle an.

### Cloud: Aufgaben an eine isolierte Remote-Umgebung delegieren

Cloud eignet sich für verbundene Remote-Repositorys und Aufgaben, die unabhängig vom lokalen Rechner ausgeführt werden sollen. Cloud-Aufgaben laufen in isolierten Umgebungen und eignen sich für parallele Untersuchungen, längere Aufgaben und die gebündelte Prüfung nach Abschluss.

Beispiel: Delegiere drei voneinander unabhängige Repository-Probleme an drei Cloud-Aufgaben. Warte auf ihre Änderungen und Verifikationsnachweise und prüfe die Ergebnisse dann einzeln.

## Du musst dich nicht auf einen Einstieg beschränken

Ein Workflow kann mehrere Oberflächen nacheinander nutzen:

1. Kläre in der IDE eine Frage zur aktuellen Datei.
2. Übergib eine längere Untersuchung an die Desktop-App oder Cloud.
3. Führe in der CLI die vereinbarten Prüfbefehle des Teams aus.
4. Prüfe den endgültigen Diff in der Desktop-App oder einer Code-Review-Oberfläche.

Entscheidend ist nicht, welcher Einstieg „am leistungsfähigsten“ ist, sondern **welcher deinem aktuellen Kontext am nächsten ist und dessen Ergebnisse sich am einfachsten prüfen lassen**.

## Zwei typische Szenarien

### Szenario 1: Zum ersten Mal einen Bug in einem echten Projekt beheben

Beginne mit der Desktop-App. Dort siehst du Aufgabengespräch, Änderungen und Berechtigungsanfragen gleichzeitig. Nachdem du einen vollständigen Zyklus abgeschlossen hast, kannst du CLI oder IDE ausprobieren.

### Szenario 2: Das Team hat feste Befehle und CI-Konventionen

Beginne mit der CLI und dokumentiere Installations-, Test- und Formatierungsbefehle in `AGENTS.md`. So kann Codex bei jeder Aufgabe dieselben Projektregeln befolgen.

## Die Auswahl sofort verifizieren

Prüfe nicht nur, ob sich der Client öffnen lässt. Schließe in einem Übungs-Repository den folgenden Zyklus ab:

1. Lass Codex eine Datei lesen und erklären.
2. Fordere eine kleine, umkehrbare Änderung an.
3. Prüfe den Diff statt nur die abschließende Antwort.
4. Führe einen Verifikationsbefehl aus.
5. Vergewissere dich, dass du Berechtigungsanfragen ablehnen oder enger fassen kannst.

Eine vollständige Gegenüberstellung findest du unter [Funktionsvergleich](/de/guide/reference/feature-comparison/), die Sicherheitsgrenzen unter [Berechtigungen und Sandbox](/de/guide/permissions-and-sandbox/).

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE / Cloud

**Prüfgrundlage:** Mit den aktuellen offiziellen Informationen zur ChatGPT-Desktop-App, Codex CLI, IDE und Cloud abgeglichen. Die Empfehlungen richten sich nach Arbeitsort und Interaktionsweise und unterscheiden die VS-Code-kompatible Erweiterung ausdrücklich von den jeweiligen Integrationen für Xcode und JetBrains.

**Zuletzt geprüft:** 2026-08-26
