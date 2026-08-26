---
title: Vollständige Anleitung zu Scheduled tasks
description: Wähle eigenständige oder chatgebundene Aufgaben und konfiguriere lokales Projekt, Worktree, Berechtigungen, Prompt und Review-Zyklus.
locale: de
source_locale: zh-CN
source_revision: 7b79596
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Die eigentliche Schwierigkeit einer Scheduled task liegt nicht in der Uhrzeit. Jeder unbeaufsichtigte Lauf braucht stabile Eingaben, enge Berechtigungen, prüfbare Ausgaben und Abbruchbedingungen.

![Sicherheitszyklus von manueller Verifikation über geplante Ausführung und menschliches Review bis zur Anpassung](/diagrams/scheduled-task-safety-loop-de.svg)

## Zielgruppe

- Einzelbenutzer, die tägliche oder wöchentliche Berichte erstellen, Dokumentation prüfen oder PRs nachverfolgen möchten
- Entwickler, die regelmäßige Pflegeaufgaben in einem lokalen Projekt oder isolierten Worktree ausführen möchten
- Verantwortliche, die Berechtigungen, Fehlerbehandlung und gemeinsam genutzte Team-Skills beurteilen

## Unterstützungsgrenzen

| Oberfläche | Funktionen | Wichtige Einschränkung |
|---|---|---|
| ChatGPT Web | Läufe erstellen, verwalten und anzeigen; hochgeladene Dateien, verbundene Werkzeuge, Skills und Plugins verwenden | Kein direkter Zugriff auf lokale Ordner |
| ChatGPT-Desktop-App | Aufgaben erstellen und verwalten; lokales Projekt oder Git-Worktree auswählbar | Für lokale Dateien müssen Rechner und App laufen und das Projekt vorhanden sein |
| Codex CLI | Prompt, Skill und Skript vorbereiten und manuell testen | Keine Scheduled-Verwaltungsoberfläche |
| IDE-Erweiterung | Befehle und Änderungen im Workspace verifizieren | Keine Scheduled-Verwaltungsoberfläche |

## 1. Eigenständige oder chatgebundene Aufgabe wählen

### Eigenständige Scheduled task

Jeder Lauf beginnt mit dem gespeicherten Prompt und erscheint als eigener Eintrag unter Scheduled. Geeignet sind unabhängige Tages- und Wochenberichte oder Zustandsprüfungen von Projekten. Eine Aufgabe kann auch mehrere Projekte abdecken.

### Chatgebundene Scheduled task

Die Aufgabe kehrt nach Zeitplan in denselben Chat zurück und übernimmt den vorhandenen Kontext. Geeignet ist das für die Abfrage von Langzeitaufgaben, Nachverfolgung eines PR-Status, fortlaufende Forschung oder Arbeit, die vorherige Diskussionen benötigt.

Entscheidungsregel: Soll jeder Lauf neu beginnen, verwende eine eigenständige Aufgabe. Muss derselbe Problemkontext fortgesetzt werden, verwende eine chatgebundene Aufgabe.

## 2. Ausführungsmaterialien wählen

### Ausführung im Web

Lege beständige Anweisungen im Aufgaben-Prompt oder Skill ab und stelle Materialien als hochgeladene Dateien, Project oder verbundenen Dienst bereit. Schreibe nicht „Lies latest.csv von meinem Desktop“, denn Web kann nicht direkt auf lokale Pfade zugreifen.

### Lokales Projekt in der Desktop-App

Für ein Git-Repository stehen zwei Wege bereit:

- **Lokales Projekt:** Arbeitet direkt im Haupt-Checkout und kann Dateien berühren, die du gerade bearbeitest.
- **Eigener Worktree:** Isoliert Änderungen im Hintergrund von deiner unfertigen Arbeit und eignet sich für Aufgaben mit Schreibzugriff.

Nicht-Git-Projekte laufen direkt im Projektverzeichnis. Häufige Worktree-Aufgaben können viele Worktrees ansammeln. Archiviere nicht mehr benötigte Läufe, damit sie nicht versehentlich dauerhaft erhalten bleiben.

## 3. Zuerst manuell verifizieren

Führe in einem normalen Chat exakt denselben Prompt mit demselben Modell, derselben Reasoning-Intensität und denselben Werkzeugen aus. Bestätige mindestens:

- Die Eingaben bleiben ohne spontane Erklärung eindeutig
- Bei „keine Änderung“ endet die Aufgabe ruhig
- Menschen können die Ausgabe schnell prüfen
- Befehle, Skill und verbundene Werkzeuge funktionieren
- Bei fehlenden Berechtigungen oder Materialien hält die Aufgabe an und erklärt den Bedarf, statt zu raten

Prüfe die ersten geplanten Läufe und passe danach Prompt oder Häufigkeit an.

## 4. Direkt anpassbarer Aufgaben-Prompt

```text
Erstelle eine eigenständige Scheduled task:

Name: Wöchentliche Prüfung defekter Dokumentationslinks
Zeit: Jeden Montag um 09:00 Uhr in der aktuellen Zeitzone
Ausführungsort: Eigener Worktree des aktuellen Git-Projekts

Bei jedem Lauf:
1. Lies nur docs/, src/content/docs/, examples/ und public/diagrams/.
2. Führe pnpm check:links aus.
3. Wenn die Prüfung besteht, berichte nur die Anzahl geprüfter Dateien und Links und ändere keine Dateien.
4. Wenn die Prüfung fehlschlägt, liste „Quelldatei, ungültiges Ziel, vorgeschlagener Fix“ auf; korrigiere Links nicht automatisch.
5. Verwende kein Netzwerk, installiere keine Abhängigkeiten, committe und pushe nicht und erstelle keinen PR.
6. Wenn der Befehl fehlt, Abhängigkeiten fehlen oder das Ergebnis unsicher ist, halte an und nenne die konkrete menschlich zu klärende Aktion.

Fertigstellung: Beende diesen Lauf nach Ausgabe eines prüfbaren Berichts und versuche ihn nicht erneut.
```

Der Prompt legt Zeit, Projekt, Lesebereich, Befehl, Erfolgs- und Fehlerpfad, Verbote sowie Abbruchbedingung fest. Die Zeitplanung löst nur einen neuen Lauf aus und ersetzt keine Aufgabenbeschreibung.

## 5. Berechtigungen und menschliches Review

Scheduled tasks laufen unbeaufsichtigt und verwenden die Standardsandbox.

| Sandbox-Modus | Typisches Ergebnis |
|---|---|
| read-only | Dateiänderungen, Netzwerkzugriff und Steuerung lokaler Apps schlagen fehl |
| workspace-write | Arbeitsbereich beschreibbar; Schreiben außerhalb des Arbeitsbereichs, Netzwerk und App-Steuerung schlagen standardmäßig fehl |

Beginne mit den engsten Berechtigungen, die die Aufgabe erfüllen. Wenn Netzwerk oder weiterreichender Dateizugriff nötig sind, verwende eine eindeutige Allowlist. Erhöhe nicht die gesamten Berechtigungen, nur um einen einzelnen Fehlschlag zu beseitigen.

Ein menschliches Review sollte erhalten bleiben bei:

- Externem Versand von Nachrichten oder Veröffentlichung von Inhalten
- Änderungen des Produktionszustands
- Zusammenführen eines PR oder Push auf den Haupt-Branch
- Massenlöschung, Migration und Berechtigungsänderungen
- Diff außerhalb des erwarteten Umfangs oder fehlgeschlagenen Tests

## 6. „Keine Änderung“, Fehlschlag und Abbruch gestalten

Eine beständige Aufgabe braucht drei Pfade:

1. **Findings vorhanden:** Nachweise, Schweregrad und nächsten Schritt ausgeben.
2. **Keine Änderung:** Prüfbereich knapp berichten, ohne erfundene Probleme zu erzeugen.
3. **Nicht ausführbar:** Fehlende Materialien oder Berechtigungen nennen, anhalten und auf einen Menschen warten.

Eine chatgebundene Abfrage braucht zusätzlich eine Abbruchbedingung, etwa „anhalten, wenn der PR zusammengeführt oder geschlossen wurde, dreimal derselbe Fehler auftrat oder menschliche Genehmigung nötig ist“.

## Scheduled tasks sind keine ereignisgesteuerte CI

Wenn eine Aufgabe sofort nach einem `push`, einer PR-Erstellung oder Veröffentlichung laufen muss, verwende GitHub Actions, CI, Webhook oder Codex SDK als Ereigniseinstieg. Minütliche Abfragen sind kein genauer Ereignisauslöser.

## Abnahmecheckliste

- [ ] Der Prompt wurde vollständig in einem normalen Chat verifiziert
- [ ] Eigenständige oder chatgebundene Aufgabe wurde bewusst gewählt
- [ ] Web-Materialien oder lokales Projekt sind zur Laufzeit verfügbar
- [ ] Standardsandbox reicht aus oder zusätzliche Berechtigungen sind begründet
- [ ] Findings, keine Änderung, Fehlschlag und Abbruch sind definiert
- [ ] Die ersten drei Läufe wurden menschlich stichprobenartig geprüft
- [ ] Häufige Worktrees besitzen eine Archivierungs- und Bereinigungsstrategie
- [ ] Kritische Schreibzugriffe erfordern weiterhin menschliche Bestätigung

## Offizielle Quellen

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI: Sandboxing](https://learn.chatgpt.com/docs/permissions/sandboxing)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT Web / Desktop-App; CLI und IDE für Vorbereitung und Tests

**Zuletzt geprüft:** 2026-08-26
