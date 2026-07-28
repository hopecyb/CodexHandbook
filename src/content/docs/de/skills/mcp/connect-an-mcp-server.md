---
title: MCP-Server verbinden
description: Konfiguration, Auth, Verifikation und Troubleshooting — erstes MCP-Werkzeug sicher anbinden.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Fokus: Verbindungs- und Verifikationsablauf. Protokolldetails und Server-Entwicklung: offizielle MCP-Doku.

## Vor dem Start

- [ ] Sicherheitsgrenzen in [MCP-Überblick](/skills/mcp/mcp-overview/) verstanden
- [ ] Testkonto nur-lesen oder Sandbox
- [ ] Aktuelle Codex-Client-Version unterstützt MCP (laut offizieller Doku)

## Empfohlener Ablauf

### 1. Servertyp wählen

| Typ | Hinweis | Risiko |
|---|---|---|
| Lokaler stdio-Server | Prozess auf dem Rechner | mittel: Prozessrechte = deine Nutzerrechte |
| Remote HTTP/SSE | Gehosteter Dienst | mittel–hoch: TLS, Token-Rotation nötig |

Erster Anschluss: **offizielles Beispiel oder nur-lesen lokaler Server**.

### 2. Konfiguration hinzufügen

Ort je nach CLI/App; oft Nutzer- oder Projekt-`mcp`-Block. Struktur illustrativ (**Feldnamen laut offizieller Doku**):

```json
{
  "mcpServers": {
    "example-readonly": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_TOKEN": "Aus Umgebungsvariable lesen, nicht im Repo hardcoden"
      }
    }
  }
}
```

Prinzipien:

- Secrets über Umgebungsvariablen oder Secret Manager
- Konfigänderungen per Git-Review (außer Secrets)

### 3. Client neu starten oder neu laden

Nach MCP-Konfig meist Codex-Sitzung neu starten, damit die Serverliste aktualisiert.

### 4. Werkzeuge sichtbar prüfen

In der Aufgabe klar verlangen:

```text
Liste die aktuell verfügbaren MCP-Werkzeuge (nur Name und ein Satz Erklärung).
Rufe dann ein Testwerkzeug nur lesend auf und zeige das Ergebnis.
Keine Schreibaktionen.
```

### 5. Kleine Schritte ausprobieren

Echte, risikoarme Aufgabe, z. B.: „Mit MCP den Titel von Ticket #123 holen, Status nicht ändern.“

## Auth-Modi

| Modus | Geeignet für |
|---|---|
| API Key / PAT | Persönliche Entwicklung, regelmäßig rotieren |
| OAuth | Nutzer-Autorisierung, SaaS |
| Unauth lokal | Nur lokales Mock, nicht ins Netz |

Bei Fehlern: Token abgelaufen, Env nicht durchgereicht, Firmenproxy blockiert.

## Debug-Checkliste

| Symptom | Mögliche Ursache |
|---|---|
| Werkzeugliste leer | Falscher Konfigpfad, Prozessstart fehlgeschlagen |
| Aufruf-Timeout | Netz, VPN, Server down |
| Berechtigung verweigert | Token-Scope zu klein |
| Modell ruft nie Werkzeuge | Aufgabe verlangt es nicht; oder Werkzeug-`description` unklar |

## Zusammenspiel mit Freigabe

Beim ersten Aufruf unbekannter Werkzeuge kann der Client nachfragen — erwartet. In Teamregeln nicht „alle MCP-Schreibaktionen dauerhaft erlauben“ fördern.

## Quellen
- OpenAI Codex MCP-Konfigurationsdokumentation
- Server-Beispiele auf modelcontextprotocol.io
---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE  
**Nachprüfhinweis:** Beschreibt aktuelle MCP-Server-Konfig, Reload und Verifikation — stark versions- und clientabhängig; vorerst nicht `verified`.  
**Zuletzt geprüft:** 2026-07-26
