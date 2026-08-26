---
title: Scheduled tasks
description: Führe bereits verifizierte Aufgaben in ChatGPT zeitgesteuert wiederholt aus.
locale: de
source_locale: zh-CN
source_revision: f32c13f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Eine Scheduled task lässt ChatGPT eine Aufgabe nach einem Zeitplan im Hintergrund wiederholen. Sie eignet sich für regelmäßige Berichte, fortlaufende Nachverfolgung und wiederkehrende Pflege. Sie ersetzt keine beliebigen Webhooks, Repository-Ereignisse oder CI-Automatisierungen.

## Zuerst die Eignung prüfen

| Geeignet | Nicht geeignet |
|---|---|
| Stabile Eingabequellen und prüfbare Ausgaben | Problem muss bei jedem Lauf neu definiert werden |
| Zeit- oder intervallgesteuert | Muss exakt durch Git push, Öffnen eines PR oder anderes Ereignis ausgelöst werden |
| Schreibgeschützte Prüfung, Zusammenfassung oder Entwurf | Unbeaufsichtigte Zusammenführung in den Haupt-Branch oder Massenlöschung |
| Eindeutiger Zustand „keine Änderung“ und Abbruchbedingungen | Unbegrenzte Wiederholung nach einem Fehler |

## Aktuelle Verwaltungsoberflächen

- Scheduled tasks werden in ChatGPT Web oder in der Desktop-App erstellt und verwaltet.
- Codex CLI und IDE-Erweiterung besitzen keine Verwaltungsoberfläche für Scheduled. Dort kannst du Prompt, Skill oder Skript zunächst testen.
- In der Desktop-App kann eine Aufgabe ein lokales Projekt oder einen isolierten Worktree verwenden. Dafür müssen Rechner und App laufen und das Projekt weiterhin auf dem Datenträger vorhanden sein.
- Scheduled tasks im Web können hochgeladenen Kontext, verbundene Werkzeuge, Skills und Plugins verwenden, aber nicht direkt auf lokale Ordner zugreifen.

## Seiten dieser Gruppe

- [Vollständige Anleitung zu Scheduled tasks](/de/skills/automations/scheduled-tasks/): Ausführungsart wählen, beständigen Prompt schreiben und Berechtigungen sowie Abnahme konfigurieren

## Offizielle Quelle

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT Web / Desktop-App; CLI und IDE nur für Vorbereitung und Tests, ohne Verwaltungsoberfläche

**Zuletzt geprüft:** 2026-08-26
