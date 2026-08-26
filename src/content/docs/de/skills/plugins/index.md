---
title: Plugins
description: Durchsuche, installiere und verwalte wiederverwendbare Pakete aus Skills, Connectoren, MCP, Hooks und Aufgabenvorlagen.
locale: de
source_locale: zh-CN
source_revision: 33c9fe2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Ein Plugin ist eine Einheit zum Bündeln und Verteilen von Funktionen. Es kann Skills, Connectoren, MCP-Server, Browsererweiterungen, Hooks und Vorlagen für Scheduled tasks enthalten. Die eigentliche Arbeit führen weiterhin diese enthaltenen Komponenten aus.

## Zielgruppe

- Benutzer, die ein fertiges Funktionspaket aus der öffentlichen Sammlung installieren möchten
- Verantwortliche, die Teamabläufe, Werkzeuge und Schutzmechanismen als versionierte Einheit verteilen möchten
- Administratoren, die Quelle, Berechtigungen externer Dienste und Plugin-Hooks prüfen müssen

## Derzeit unterstützte Oberflächen

| Oberfläche | Durchsuchen/Installieren | Verwenden |
|---|---|---|
| ChatGPT Web und Desktop-App | Registerkarte Plugins | Chat und Work |
| ChatGPT Mobile | Kein primärer Verwaltungseinstieg | Bereits im Konto vorhandene Plugins verwenden |
| Codex in der ChatGPT-Desktop-App | Registerkarte Plugins | Codex-Aufgaben |
| Codex CLI | Browser unter `/plugins`; nach Installation neue Sitzung starten | Codex-Umgebung |
| IDE-Erweiterung | **Unterstützt keine Plugins** | Einzelne in der IDE unterstützte Funktionen wie MCP oder Skill verwendbar |

## Leseeinstiege

- [Plugins im Überblick](/de/skills/plugins/plugins-overview/): Komponenten, Unterstützungsgrenzen, Installationsprüfung und Sicherheitsreview verstehen
- [Karte der Erweiterungsfunktionen](/de/skills/capability-map/): Plugin, Skill, MCP, Hook und Scheduled task vergleichen

## Fragen vor der Installation

1. Wer sind Quelle und verantwortlicher Maintainer?
2. Welche Skills, Connectoren, MCP-Server, Browserfunktionen und Hooks sind enthalten?
3. Müssen externe Konten verbunden werden, und welche Scopes erhält das Plugin?
4. Wurden Hooks unter `/hooks` geprüft und als vertrauenswürdig markiert?
5. Wie deaktiviert, aktualisiert und entfernt das Team das Plugin und widerruft Berechtigungen?

## Offizielle Quelle

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT Web / Desktop-App / Mobile; Codex Desktop und CLI; IDE-Erweiterung unterstützt keine Plugins

**Zuletzt geprüft:** 2026-08-26
