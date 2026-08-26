---
title: MCP-Verbindungen debuggen
description: Grenze MCP-Fehler auf Konfiguration, Transport, Authentifizierung oder Werkzeug ein.
locale: de
source_locale: zh-CN
source_revision: 829c1e9
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP-Fehler werden häufig nur als „Werkzeug funktioniert nicht“ beschrieben. Schneller ist es, zuerst die fehlerhafte Ebene zu bestimmen und dann genau eine Variable zu ändern.

## Zuerst vier Nachweise sichern

```bash
codex mcp list
codex mcp --help
node --version   # Nur wenn der STDIO-Server Node.js verwendet
python3 --version # Nur wenn der STDIO-Server Python verwendet
```

Notiere außerdem Servername, STDIO oder Streamable HTTP, genauen Fehlertext und betroffene Oberfläche aus Desktop-App, CLI oder IDE. Speichere kein vollständiges Token.

## Triage auf vier Ebenen

| Ebene | Typisches Symptom | Erste Prüfung |
|---|---|---|
| Konfiguration | Server fehlt in der Liste | Dateipfad, TOML-Syntax, Servername und `enabled` |
| Start/Verbindung | Initialisierung läuft in Timeout | STDIO-Befehl und PATH oder HTTP-URL, TLS und Proxy |
| Authentifizierung | 401/403 oder Anmeldeaufforderung | OAuth-Zustand, Token-Umgebungsvariable und Scope |
| Werkzeug | Server ist online, Aufruf schlägt fehl | Werkzeugname, Parameter, Allowlist und Werkzeug-Timeout |

## 1. Tatsächliches Laden der Konfiguration bestätigen

- Die Benutzerdatei lautet `~/.codex/config.toml`.
- Die Projektdatei lautet `.codex/config.toml` und wird nur in vertrauenswürdigen Projekten geladen.
- Desktop-App, CLI und IDE teilen die Konfiguration im selben Codex-Host. Erstelle keine voneinander abweichenden Kopien.
- Prüfe den tatsächlichen Zustand mit `codex mcp list` oder `/mcp` in einer Sitzung. Die bloße Existenz einer Datei beweist keinen Erfolg.

## 2. STDIO-Server startet nicht

Prüfe, ob `command` in PATH liegt, die Laufzeitversion den Serveranforderungen entspricht, `cwd` existiert und die Abhängigkeitsquelle vertrauenswürdig ist.

Das direkte Ausführen des Startbefehls beweist nur, dass die ausführbare Datei startet. Wenn ein MCP-Server auf Protokolleingaben wartet, ist ein dauerhaft laufender Prozess normal und noch kein vollständiger Test eines Werkzeugaufrufs.

Erhöhe `startup_timeout_sec` nur bei einer nachgewiesen langsamen Initialisierung. Der Standardwert beträgt 10 Sekunden; ein sehr hoher Wert verdeckt häufig nur einen falschen Befehl.

## 3. Streamable-HTTP-Verbindung schlägt fehl

Prüfe in dieser Reihenfolge:

1. URL und TLS-Zertifikat
2. Unternehmensproxy oder VPN
3. Vorhandensein der Umgebungsvariable, auf die `bearer_token_env_var` zeigt
4. Ob OAuth ein erneutes `codex mcp login <server-name>` erfordert
5. Ob das Serverprotokoll eine Initialisierungsanfrage empfangen hat

Schreibe ein Token zur „vorübergehenden Fehlersuche“ nicht als statischen Wert in `http_headers`. Es gelangt sonst leicht in Konfigurationsdateien und Screenshots.

## 4. Server online, Werkzeug nicht verwendbar

| Symptom | Prüfung |
|---|---|
| Werkzeug erscheint überhaupt nicht | `enabled_tools` / `disabled_tools` und vom Server zurückgegebene Werkzeugliste |
| Tool not found | Serverversion, umbenanntes Werkzeug und alte Werkzeugliste in der Sitzung |
| Parametervalidierung schlägt fehl | Werkzeugschema lesen, Felder nicht aus einem alten Prompt erraten |
| Aufruf läuft in Timeout | Anfrage verkleinern und `tool_timeout_sec` prüfen; Standard 60 Sekunden |
| Leeres Ergebnis | Datenumfang und Filter mit demselben Konto im Quellsystem prüfen |

## Prompt für eine minimale Reproduktion

```text
Prüfe ausschließlich den MCP-Server <server-name>:
1. Berichte die derzeit sichtbaren Werkzeugnamen.
2. Rufe <readonly-tool> ausschließlich mit <minimal-arguments> auf.
3. Erhalte Fehlertyp und Servermeldung unverändert, aber blende Zugangsdaten aus.
4. Rufe keinen anderen Server auf und führe keine Schreibzugriffe aus.
```

## Abnahme der Fehlerbehebung

- [ ] Der Zustand in `codex mcp list` entspricht der Erwartung
- [ ] Ein schreibgeschütztes Werkzeug ist mit minimalen Parametern erfolgreich
- [ ] Die Ursache liegt auf einer konkreten Ebene statt nur bei „nach Neustart behoben“
- [ ] Vorübergehende Tokens, Debug-Protokolle und breite Berechtigungen wurden entfernt
- [ ] Teamkonfiguration und Beschreibung des Fixes wurden aktualisiert

## Offizielle Quelle

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT-Desktop-App / Codex CLI / IDE

**Zuletzt geprüft:** 2026-08-25
