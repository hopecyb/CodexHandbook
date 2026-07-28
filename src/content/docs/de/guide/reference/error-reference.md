---
title: Fehler- und Hinweisreferenz
description: 'Lernindex gängiger Fehlermeldungen, Exit-Codes und Ursachen — zeigt auf Troubleshooting, ersetzt keinen offiziellen Support.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele starren bei Fehlern auf eine englische Zeile und raten. Zuerst **klassifizieren** ist meist effektiver.

Bei Fehlern zuerst: eher **Auth, Berechtigung, Umgebung, Netz oder Aufgabenlogik**? Diese Seite fasst Sinn und nächsten Schritt häufiger Hinweise — kein vollständiges Fehlerlexikon; aktuelles Verhalten: offizielle Docs und Client-Ausgabe.

## Fehler zuerst so lesen

1. Schlüsselwörter: Auth, Berechtigung, Umgebung, Netz, Kontext
2. Phase: Start, Install, Ausführung, Push, Ausgabe
3. Zur Fachseite

Globaler Index: [Troubleshooting](/guide/reference/troubleshooting/)

## Auth und Konto

| Hinweis oder Phänomen | Mögliche Ursache | Nächster Schritt |
|---|---|---|
| Authentication failed / 401 | Token abgelaufen, nicht angemeldet | [Anmelden und Authentifizierung](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | Org sperrt Feature/Modell | Admin; Plan [Konto und Zugang](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Zu häufig oder Quote | Später retry; Plan-Nutzung prüfen |

## Häufige Missverständnisse

### 1. Langer Fehler ≠ komplexeres Problem

Oft nur Kontext; nützlich ist oft ein kurzes Schlüsselwort.

### 2. Nicht-null Exit ≠ Modell kann es nicht

Kann sein:

- Rechte fehlen
- Netz fehlt
- Ausgabeformat unerfüllt
- Aufgabe selbst setzt Fehlschlag

### 3. 401 / 403 / 429 sind verschieden

- `401`: Auth nicht in Ordnung
- `403`: bekannt, aber nicht erlaubt
- `429`: zu schnell, später wieder

### 4. Letzte Zeile nicht immer die wichtigste

Manchmal nur „finale Zusammenfassung“; nützlich darüber:

- Welcher Schritt
- Welche Datei, Befehl oder Werkzeug
- Ursprünglichere Ursache

## CLI und Befehle

| Hinweis oder Phänomen | Mögliche Ursache | Nächster Schritt |
|---|---|---|
| command not found: codex | Nicht installiert oder PATH | [CLI installieren](/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML-Syntax | [CLI-Konfiguration](/guide/cli/configuration/) |
| Permission denied (write) | Sandbox oder Freigabe abgelehnt | [Freigaben und Sandbox](/guide/cli/approvals-and-sandbox/) |
| Nicht-null Exit (exec) | Aufgabe fehlgeschlagen oder Done-Kriterien | stderr-Logs; Prompt straffen |

## Zuerst klassifizieren

Fünf Klassen:

| Klasse | Zuerst prüfen |
|---|---|
| Auth | Konto, Token, Login-Status |
| Berechtigung | Freigabe, Sandbox, Repo-Rechte |
| Umgebung | Install, PATH, Config, Abhängigkeiten |
| Netz | Outbound, Proxy, Erreichbarkeit |
| Aufgabenlogik | Prompt, Eingabedateien, Ausgabeanforderungen |

Nach der Klasse läuft Troubleshooting seltener schief.

## Nutzung

Als Fehler-Triage-Tabelle, nicht als volles Lexikon:

- Schlüsselwort sehen
- Klasse finden
- Zur konkreteren Troubleshooting-Seite

Oder den Fehler in direkte Fragen übersetzen:

- Login kaputt?
- Keine Rechte?
- Befehl nicht installiert?
- Netz unerreichbar?
- Anforderungen an Codex unklar?

Unklar wohin: zuerst mit dieser Seite in die Großklasse.

## Berechtigung und Sandbox

| Hinweis oder Phänomen | Mögliche Ursache | Nächster Schritt |
|---|---|---|
| User rejected tool call | Sie oder Policy abgelehnt | Freigeben oder Aufgabe ändern |
| Sandbox violation | Schreibpfad oder Befehl über Grenzen | [Sandbox und Netzwerk](/guide/foundations/sandbox-and-network/) |
| Network access denied | Outbound gesperrt | Cloud: [Internetzugriff](/guide/web-and-cloud/internet-access/) |

## Cloud und GitHub

| Hinweis oder Phänomen | Mögliche Ursache | Nächster Schritt |
|---|---|---|
| Repository access denied | OAuth-Scope zu klein | [GitHub verbinden](/guide/web-and-cloud/connect-github/) |
| Clone failed | Repo-Name, Rechte, Netz | [Cloud-Troubleshooting](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Name oder Scope | [Secrets und Variablen](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Branch Protection | [PR erstellen](/guide/web-and-cloud/create-pull-requests/) |

## MCP und Erweiterungen

| Hinweis oder Phänomen | Mögliche Ursache | Nächster Schritt |
|---|---|---|
| MCP server failed to start | Befehlspfad, fehlende Abhängigkeit | [MCP verbinden](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | Externe API langsam/down | Retry; MCP-Logs |
| Unknown tool | Config ≠ Serverversion | Sitzung neu; Config aktualisieren |

## Kontext und Modell

| Hinweis oder Phänomen | Mögliche Ursache | Nächster Schritt |
|---|---|---|
| Context length exceeded | Chat oder @-Dateien zu groß | [Komprimierung](/guide/context/compaction/) · Scope verkleinern |
| Model not available | Region oder Plan | [Modelle und Reasoning](/guide/foundations/models-and-reasoning/) |

## So nutzen

1. **Schlüsselzeile** in Client- oder Handbuchsuche kopieren
2. Tabelle → Fachseite und Checkliste
3. Weiter ungelöst: vollständige Logs, [offizielle Ressourcen](/guide/reference/official-resources/)

## Bei Reports mitgeben

- Client-Typ und Version (App / CLI / IDE / Cloud)
- Betriebssystem
- Redaktierter voller Fehlertext
- Nicht-interaktiv? CI?

## Fehlerreihenfolge

1. Voller Fehler (nicht nur letzte Zeile)
2. Klasse bestimmen, nicht sofort Technik raten
3. Was gerade geändert?
4. Eine Variable ändern und einmal retryen
5. Sonst mit voller Info Mensch/offizielle Docs

Vermeidet vermischte Änderungen; anderen hilft die Lokalisierung.

## Quellen

- OpenAI Codex Support-Dokumentation
- stormzhang FAQ- und Troubleshooting-Kapitel
- KimYx0207 Fehler-Sammlung (offiziell nachprüfen)

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Positioniert als Fehler-Triage-Index, kein Lexikon; Klassifikation Auth/Berechtigung/Umgebung/Netz/Aufgabenlogik mit CLI-, Cloud-, Berechtigungs- und Config-Kapiteln abgeglichen; keine feste Fehlercode-Tabelle.  
**Zuletzt geprüft:** 2026-07-26
