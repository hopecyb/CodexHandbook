---
title: MCP
description: Externe Werkzeuge und Datenquellen anbinden — und wann MCP wirklich nötig ist.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`MCP` ist ein Standardanschluss: Codex verbindet über MCP externe Werkzeuge und Datenquellen.

Skills tragen eher „Arbeitsschritte“; MCP trägt „externe Werkzeuge anschließen“.

## Inhalt dieser Gruppe

- Wann MCP wirklich nötig ist
- Externe Systeme anbinden, ohne Berechtigungen zu weit zu öffnen
- Bei Verbindungs-/Aufrufproblemen zuerst welche Klassen prüfen

## Empfohlene Reihenfolge

1. [MCP-Überblick](/skills/mcp/mcp-overview/): MCP vs. Skill vs. Plugin
2. [MCP-Server verbinden](/skills/mcp/connect-an-mcp-server/): ersten Server nach Konfig-Idee anschließen
3. [MCP debuggen](/skills/mcp/debugging-mcp/): keine Verbindung, Werkzeug fehlt, Berechtigung falsch

## Häufige Missverständnisse

### 1. Mit MCP kann Codex „alles“

Was geht, hängt nur davon ab, welche Werkzeuge der MCP-Server exponiert und welche Berechtigungen sie haben.

### 2. MCP ist nur Technikanschluss

Sobald echte Systeme hängen, wird es zugleich:

- Berechtigungsfrage
- Datenexpositionsfrage
- Audit-Frage

Also nicht nur „wie anschließen“, sondern „wie nicht chaotisch anschließen“.

MCP lohnt erst, wenn die Aufgabe echte Systeme außerhalb des Repos braucht.

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Nachprüfhinweis:** Gruppe betrifft aktuelle MCP-Anbindung, Konfigorte und Berechtigungszusammenspiel; öffentliche Quellen decken Client-Details begrenzt — nach aktuellem Produkt neu schreiben.  
**Zuletzt geprüft:** 2026-07-26
