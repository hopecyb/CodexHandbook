---
title: CLI-Befehlsreferenz
description: 'Kurzreferenz gängiger Codex-CLI-Unterbefehle und Parameter — Lernindex, kein Ersatz für die offizielle Dokumentation.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Die Befehlsreferenz hilft vor allem beim Einstieg entscheiden — Parameter nicht sofort pauken:

> **Interaktiver Einstieg oder einmaliger Befehls-Einstieg?**

Diese Seite sammelt gängige **Codex-CLI**-Einstiege zum Suchen und Vergleichen. **Namen, Parameter und Defaults ändern sich mit der Version** — vor dem Ausführen `codex --help` und Unterbefehl-`--help`; maßgeblich [OpenAI Codex Docs](https://developers.openai.com/codex).

## Wann nutzen

- Interaktiv oder einmaliger Befehl?
- Chat-artige Bedienung oder skriptartige Ausführung?
- CLI klar, aber welche Einstiegsklasse?

## Einstiegswahl

- Parallel schauen, chatten, fixen: `codex`
- Aufgabe einmal abgeben, Ergebnis zurück: `codex exec`

Für CLI-Einsteiger löst das die meisten Einstiegsfragen.

## Befehlsüberblick (illustrativ)

| Einstieg | Nutzen | Details |
|---|---|---|
| `codex` | Interaktive TUI-Sitzung | [Interaktiver Modus](/guide/cli/interactive-mode/) |
| `codex exec` (oder Äquivalent) | Nicht-interaktive Einzel-/Pipeline-Aufgabe | [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/) |
| Config-bezogen | Nutzer-/Projektkonfiguration lesen/schreiben | [CLI-Konfiguration](/guide/cli/configuration/) |

:::caution[Versionsempfindlich]
Parameternamen unten sind gängige Community-Schreibweisen und **stimmen nicht zwingend mit Ihrer CLI überein**. Nach Upgrades `--help` erneut prüfen.
:::

## Häufige Missverständnisse

### 1. Nicht alle Befehle merken

Zuerst wissen, welche Einstiegsklasse passt — Rest live per `--help`.

### 2. `codex exec` ist nicht einfach „stärkeres `codex`“

Eher unüberwacht, Skript, CI — nicht nur „stärkerer“ interaktiver Einstieg.

### 3. Parameter sehen ≠ sofort drehen

Viele hängen an Version, Umgebung und Security-Policy — Absicht verstehen, dann entscheiden.

### 4. Befehlsreferenz ≠ Bedienungstutorial

Sie ist:

- Einstiegskarte
- Parameterindex
- Umschlagplatz „welche Seite detaillierter?“

## Interaktiver Modus (Konzept)

```bash
# Interaktive Sitzung am Repo-Root starten (illustrativ)
codex

# Typische Sitzungsaktionen (laut TUI)
# - Aufgabenbeschreibung eingeben
# - / Slash-Befehle → siehe slash-commands
# - Shell- / Schreibdatei-Freigaben
```

Slash: [Slash-Befehle](/guide/reference/slash-commands/)

## Einstiegsentscheidung

1. Zuerst `codex --help`
2. Dann interaktiv oder `exec`
3. Bei konkretem Unterbefehl dessen `--help`

So stecken Sie nicht sofort in der ganzen Parametertabelle fest.

## Schnellstart

1. `codex --help`
2. Parallel arbeiten → `codex`
3. CI/Skript → `codex exec` vertiefen

Leichter als sofort Parameterdetails.

## Nicht-interaktives exec (Konzept)

```bash
# Arbeitsverzeichnis und einmaliger Prompt (illustrativ)
codex exec --cwd /path/to/repo "Ihre vollständige Aufgabenbeschreibung"

# Häufige Absichten (Parameternamen offiziell)
# --cwd          Arbeitsverzeichnis
# --model        festes Modell
# --sandbox      Sandbox-Policy
# --approval     Freigabe-Policy (besonders unüberwacht)
# stdin-Pipe     Prompt aus Datei oder Upstream
```

Sicherheit: [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/)

## Config und Auth (Konzept)

| Aktion | Erklärung |
|---|---|
| Login | Wie [Anmelden und Authentifizierung](/guide/getting-started/sign-in-and-authentication/) |
| Config-Dateien | Nutzer-/Projektebene: [Konfigurationsreferenz](/guide/reference/configuration-reference/) |
| MCP | [MCP verbinden](/skills/mcp/connect-an-mcp-server/) |

## Exit-Codes und Automatisierung

Nicht-interaktiv nutzt meist **Exit-Codes** für CI:

- `0`: Aufgabe wie vereinbart fertig
- Nicht-`0`: Fehler oder menschliche Intervention — Log-Artifacts prüfen

CLI-Befehlssseite: Einstiege und Absichten — nicht Parameter pauken.

Stderr in CI nicht ignorieren; Logs für [Diagnose zuerst](/cases/workflows/diagnose-before-fixing/) behalten.

## Unterschied zu Chat-Slash

| | Terminal `codex` | Sitzung `/` |
|---|---|---|
| Doku | Diese Seite + Produkthandbuch | [slash-commands](/guide/reference/slash-commands/) |
| Geeignet | Skripte, CI | Interaktives Explorieren |

## Troubleshooting

| Phänomen | Wohin |
|---|---|
| Befehl fehlt | [CLI installieren](/guide/getting-started/install-cli/) |
| Config greift nicht | [CLI-Konfiguration](/guide/cli/configuration/) |
| Freigabe blockiert CI | Prompt straffen + Read-only-Sandbox |

[CLI-Troubleshooting](/guide/cli/troubleshooting/)

---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Als Einstiegskarte geschrieben, aber Kern um `codex`, `codex exec`, Sitzungs-`/` und Parameterabsichten — hochvolatile CLI-Details; nach aktueller offizieller Befehlsdoku wieder `verified`.  
**Zuletzt geprüft:** 2026-07-26
