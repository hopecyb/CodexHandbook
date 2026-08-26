---
title: Einen MCP-Server verbinden
description: Konfiguriere, authentifiziere und verifiziere den ersten MCP-Server mit CLI oder config.toml.
locale: de
source_locale: zh-CN
source_revision: 972ccc3
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Dieses Kapitel verwendet die aktuellen offiziellen Schnittstellen für einen minimalen Zyklus: **Server hinzufügen → Konfiguration anzeigen → Werkzeuge in einer Sitzung bestätigen → schreibgeschützten Aufruf ausführen**.

## Voraussetzungen

- Du hast den [MCP-Überblick](/de/skills/mcp/mcp-overview/) gelesen
- `codex mcp --help` ist lokal ausführbar
- Der erste Server stammt aus einer vertrauenswürdigen Quelle und wird nur lesend verwendet
- Echte Tokens werden nicht in Befehlsverlauf, Prompt oder Repository geschrieben

## Weg A: STDIO-Server über die CLI hinzufügen

Das offizielle Beispiel verwendet den Dokumentationsserver Context7:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

Der Befehl schreibt den Server in die Codex-Konfiguration. Nach `--` folgt der Befehl zum Start des STDIO-Servers. Beim ersten Lauf muss möglicherweise ein npm-Paket heruntergeladen werden; prüfe vorher Paketname und Quelle.

## Weg B: config.toml direkt bearbeiten

Die Benutzerkonfiguration liegt standardmäßig unter `~/.codex/config.toml`. Ein vertrauenswürdiges Projekt kann außerdem `.codex/config.toml` auf Projektebene verwenden.

STDIO-Beispiel:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

Beispiel für entferntes Streamable HTTP:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`, Adresse und Werkzeugnamen sind nur Strukturbeispiele und müssen durch echte Werte aus der Serverdokumentation ersetzt werden. `bearer_token_env_var` enthält den Namen einer Umgebungsvariable, nicht das Token selbst.

## OAuth-Server

Führe nach der Konfiguration eines Servers mit OAuth-Unterstützung Folgendes aus:

```bash
codex mcp login <server-name>
```

Die MCP-Listen in Desktop-App und IDE kennzeichnen Server, die OAuth benötigen, und bieten eine Aktion Authenticate an.

## Anzeige in drei Clients

| Oberfläche | Konfigurations- oder Anzeigeeinstieg |
|---|---|
| ChatGPT-Desktop-App | Settings -> MCP servers; nach dem Speichern Restart; `/mcp` für die Verbindung |
| Codex CLI | `codex mcp add/list/login`; in der TUI `/mcp` |
| IDE-Erweiterung | Zahnradmenü -> MCP servers; nach dem Speichern Restart extension |

Alle drei verwenden im selben Codex-Host gemeinsam dieselbe Konfiguration. Es sind keine drei getrennten Dateien erforderlich. ChatGPT Web liest die lokale Konfiguration nicht.

## Prompt zur Verifikation

```text
Verwende ausschließlich die aktuell verbundenen MCP-Server für diese Prüfung:
1. Liste die Namen der Werkzeuge auf, die Entwicklungsdokumentation durchsuchen.
2. Wähle ein schreibgeschütztes Werkzeug und frage die Grundlagen des Node.js test runner ab.
3. Nenne das tatsächlich aufgerufene Werkzeug.
4. Führe keine Schreibzugriffe aus und verbinde keine anderen Dienste.
```

Abnahmenachweise: Der Server erscheint in `codex mcp list` oder `/mcp`, ein schreibgeschütztes Werkzeug gibt erfolgreich ein strukturiertes Ergebnis zurück und es werden keine sachfremden Berechtigungen verlangt.

## Optionen für minimale Berechtigungen

- `enabled_tools`: Nur aufgeführte Werkzeuge erlauben
- `disabled_tools`: Nach Anwendung der Allowlist weitere Werkzeuge ausschließen
- `enabled = false`: Konfiguration erhalten, Server aber vorübergehend deaktivieren
- `required = true`: Start fehlschlagen lassen, wenn Serverinitialisierung scheitert; für tatsächlich unverzichtbare Abhängigkeiten

## Bei einem Fehler

Ändere nicht mehrere Felder gleichzeitig auf Verdacht. Speichere den genauen Fehlertext und prüfe dann mit [MCP-Verbindungen debuggen](/de/skills/mcp/debugging-mcp/) nacheinander Konfigurationserkennung, Prozess oder Netzwerk, Authentifizierung und einzelnes Werkzeug.

## Offizielle Quelle

- [OpenAI: Connect Codex to an MCP server](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT-Desktop-App / Codex CLI / IDE

**Zuletzt geprüft:** 2026-08-25
