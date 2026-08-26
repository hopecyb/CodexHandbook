---
title: Referenz der CLI-Befehle
description: Kurzübersicht häufiger Codex-CLI-Unterbefehle und Parameter als Lernindex, nicht als Ersatz für das offizielle Handbuch.
sidebar:
  order: 50
locale: de
source_locale: zh-CN
source_revision: bdc537d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Eine Befehlsreferenz hilft vor allem bei der Wahl des Einstiegs. Du musst nicht sofort alle Parameter auswendig lernen:

> **Brauche ich jetzt den interaktiven Einstieg oder einen einmaligen Befehlsaufruf?**

Diese Seite fasst die aktuellen stabilen Einstiege der **Codex CLI** zum Suchen und Vergleichen zusammen. Führe vor der Verwendung weiterhin `codex --help` und `--help` für den Unterbefehl aus. Den vollständigen Reifegrad und alle Parameter findest du unter [Developer commands](https://learn.chatgpt.com/docs/developer-commands).

## Wann diese Seite hilft

Häufige Fragen an die Befehlsreferenz sind:

- Soll ich eine interaktive Sitzung starten oder einen einmaligen Befehl ausführen?
- Ist diese Aufgabe eher dialogorientiert oder skriptgesteuert?
- Ich möchte die CLI verwenden, weiß aber nicht, welchen Einstieg ich nachschlagen soll.

## Einstieg wählen

- Während der Arbeit beobachten, Rückfragen stellen und korrigieren: `codex`
- Aufgabe einmal übergeben und nach dem Lauf das Ergebnis erhalten: `codex exec`

Für Einsteiger beantwortet diese Unterscheidung bereits die meisten Fragen zur Wahl des Einstiegs.

## Übersicht der stabilen Befehle

| Einstieg | Zweck | Ausführliche Beschreibung |
|---|---|---|
| `codex` | Interaktive TUI-Sitzung | [Interaktiver Modus](/de/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | Nicht interaktive Einzel- oder Pipelineaufgabe | [Nicht interaktiver Modus](/de/guide/cli/non-interactive-mode/) |
| `codex doctor` | Diagnosebericht zu Installation, Konfiguration, Authentifizierung, Laufzeit, Git und Terminal erstellen | [CLI-Fehlersuche](/de/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | Authentifizierung verwalten | [Anmeldung und Authentifizierung](/de/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | Gespeicherte Sitzung fortsetzen oder verzweigen | [Übergabe und Fortsetzung](/de/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | MCP-Server verwalten | [MCP verbinden](/de/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Plugins installieren, auflisten und entfernen | [Plugins](/de/skills/plugins/) |

:::caution[Unterschiedliche Reifegrade]
Die offizielle Referenz enthält außerdem experimentelle, Beta- und veraltete Befehle. Diese Grundlagenübersicht vermischt sie nicht mit stabilen Einstiegen. Prüfe bei Bedarf zuerst Reifegrad und Risiko in der offiziellen Tabelle.
:::

## Häufige Missverständnisse

### 1. Du musst die Befehle der Referenz nicht vollständig auswendig lernen

Wichtiger ist, die geeignete Einstiegskategorie zu kennen. Die verbleibenden Details kannst du vor Ort mit `--help` nachschlagen.

### 2. `codex exec` ist nicht nur eine fortgeschrittene Version von `codex`

Der Befehl ist auf unbeaufsichtigte Ausführung, Skripte und CI ausgerichtet, nicht einfach ein leistungsfähigerer interaktiver Einstieg.

### 3. Ein sichtbarer Parameter muss nicht sofort geändert werden

Viele Parameter hängen von Version, Umgebung und Sicherheitsrichtlinie ab. Verstehe zuerst die Absicht und entscheide dann, ob eine Änderung nötig ist.

### 4. Eine Befehlsreferenz ist kein Bedienungstutorial

Sie ist:

- Eine Karte der Einstiege
- Ein Parameterindex
- Eine Weiterleitung zu ausführlicheren Seiten

## Interaktiver Modus

```bash
# Interaktive Sitzung im Stammverzeichnis des Repositorys starten
codex

# Häufige Aktionen innerhalb der Sitzung, abhängig von der TUI
# - Aufgabenbeschreibung eingeben
# - Slash-Befehl / verwenden → siehe Seite zu Slash-Befehlen
# - Shell- und Dateischreibanfragen genehmigen
```

Slash-Befehle: [Kurzübersicht der Slash-Befehle](/de/guide/reference/slash-commands/)

## Reihenfolge für die Einstiegsentscheidung

Gehe beim Einstieg in die CLI so vor:

1. Führe zuerst `codex --help` aus.
2. Entscheide anschließend zwischen interaktivem Modus und `exec`.
3. Wenn du einen konkreten Unterbefehl verwendest, lies dessen eigenes `--help`.

So gerätst du nicht sofort in eine vollständige Parametertabelle.

## Schnellstart

Wenn du direkt beginnen möchtest:

1. Führe `codex --help` aus.
2. Starte für dialogbegleitete Arbeit `codex`.
3. Befasse dich erst für CI oder Skripte mit `codex exec`.

Das ist leichter als ein Einstieg über sämtliche Parameterdetails.

## Nicht interaktives exec

```bash
# Arbeitsverzeichnis und einmaligen Prompt angeben
codex exec --cd /path/to/repo "Deine vollständige Aufgabenbeschreibung"

# Derzeit häufig verwendete Parameter
# --cd, -C       Arbeitsverzeichnis
# --model        Modell fixieren
# --sandbox      Sandbox-Richtlinie
# --ask-for-approval, -a  Genehmigungsrichtlinie
# stdin-Pipeline Prompt aus Datei oder vorgeschaltetem Befehl lesen
```

Sicherheit: [Muster für menschliche Genehmigungen](/de/cases/workflows/human-approval-patterns/)

## Konfiguration und Authentifizierung

| Aktion | Beschreibung |
|---|---|
| Anmeldung | Entspricht [Anmeldung und Authentifizierung](/de/guide/getting-started/sign-in-and-authentication/) |
| Konfigurationsdatei | Benutzer- oder Projektebene, siehe [Konfigurationsreferenz](/de/guide/reference/configuration-reference/) |
| MCP | [MCP verbinden](/de/skills/mcp/connect-an-mcp-server/) |

## Exitcodes und Automatisierung

Der nicht interaktive Modus signalisiert CI den Erfolg oder Fehlschlag normalerweise durch einen **Exitcode**:

- `0`: Aufgabe wurde wie vereinbart abgeschlossen
- Ungleich `0`: Fehlschlag oder menschliches Eingreifen erforderlich; Protokollartefakt prüfen

Diese Seite dient der Wahl des Einstiegs und der Einordnung von Befehlen. Du musst keine Parameter auswendig lernen, um anzufangen.

Ignoriere `stderr` in CI nicht. Bewahre Protokolle für [Erst diagnostizieren, dann beheben](/de/cases/workflows/diagnose-before-fixing/) auf.

## Unterschied zu Slash-Befehlen im Chat

| | Terminalbefehl `codex` | `/` innerhalb einer Sitzung |
|---|---|---|
| Dokumentation | Diese Seite und Produkthandbuch | [Slash-Befehle](/de/guide/reference/slash-commands/) |
| Geeignet für | Skripte und CI | Interaktive Untersuchung |

## Fehlersuche

| Symptom | Ziel |
|---|---|
| Befehl nicht vorhanden | [CLI installieren](/de/guide/getting-started/install-cli/) |
| Konfiguration greift nicht | [CLI-Konfiguration](/de/guide/cli/configuration/) |
| Genehmigungsanfrage blockiert CI | Prompt enger fassen und schreibgeschützte Sandbox verwenden |

[CLI-Fehlersuche](/de/guide/cli/troubleshooting/)

---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Mit der aktuellen Reifegradtabelle unter Developer commands abgeglichen. Die Seite listet nur stabile Einstiege und verifiziert `--cd` / `-C` sowie Sandbox- und Genehmigungsparameter. Experimentelle und veraltete Befehle bleiben außerhalb der Grundlagenübersicht.

**Zuletzt geprüft:** 2026-08-26
