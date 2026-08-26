---
title: MCP
description: Binde Drittanbieterwerkzeuge und -kontext kontrolliert in ChatGPT und Codex ein.
locale: de
source_locale: zh-CN
source_revision: ff68431
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP (Model Context Protocol) löst die Frage, wie ein Agent Werkzeuge und Daten außerhalb des Repositorys aufruft, nicht wie ein Workflow beschrieben wird.

## Zielgruppe

- Einzelentwickler, die Codex Dokumentation, Entwürfe, Tickets oder interne Werkzeuge abfragen lassen möchten
- Teams, die externe Werkzeuge, OAuth und minimale Berechtigungen einheitlich konfigurieren
- Verantwortliche, die untersuchen, weshalb ein konfigurierter Server kein sichtbares oder ausführbares Werkzeug bereitstellt

Wenn die Aufgabe nur im aktuellen Repository liest oder schreibt, beginne mit integrierten Datei- und Terminalfunktionen. Verbinde MCP erst bei einem tatsächlichen Bedarf an Drittanbieterkontext oder -aktionen.

## Lesereihenfolge

1. [MCP-Überblick](/de/skills/mcp/mcp-overview/): Zuständigkeiten von MCP, Skill und Plugin unterscheiden
2. [Einen MCP-Server verbinden](/de/skills/mcp/connect-an-mcp-server/): Ersten Server mit CLI oder `config.toml` einbinden
3. [MCP-Verbindungen debuggen](/de/skills/mcp/debugging-mcp/): Nach Konfiguration, Start, Authentifizierung und Werkzeug untersuchen

## Aktuelle Unterstützungsgrenzen

- ChatGPT-Desktop-App, Codex CLI und IDE-Erweiterung teilen MCP-Konfiguration im selben Codex-Host.
- Lokale Codex-Clients unterstützen STDIO- und Streamable-HTTP-Server.
- ChatGPT Web liest das lokale `~/.codex/config.toml` nicht. Es verwendet Remote-MCP-Werkzeuge über installierte Plugins.

## Drei Grundregeln

1. MCP stellt Werkzeuge bereit, definiert aber keinen zuverlässigen Workflow. Stabile Abläufe gehören weiterhin in Skill oder `AGENTS.md`.
2. Die Fähigkeiten eines Servers werden durch seine Werkzeuge und den Berechtigungsumfang der zugrunde liegenden Anmeldedaten bestimmt.
3. Beginne mit schreibgeschütztem Zugriff, Testmandant und wenigen Werkzeugen. Verwende zum Ausprobieren kein Produktions-Administrator-Token.

## Offizielle Quellen

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Model Context Protocol specification](https://modelcontextprotocol.io/)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT-Desktop-App / Codex CLI / IDE; ChatGPT Web verwendet Remote-MCP-Werkzeuge über Plugins

**Prüfumfang:** Client-Unterstützung, gemeinsame Konfiguration, Transportarten und CLI-Befehle

**Zuletzt geprüft:** 2026-08-25
