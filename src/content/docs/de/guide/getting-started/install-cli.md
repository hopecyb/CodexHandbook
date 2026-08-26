---
title: CLI installieren
description: Installiere die Codex CLI und prüfe Version, Anmeldestatus und die erste Aufgabe in einem Repository.
sidebar:
  order: 40
locale: de
source_locale: zh-CN
source_revision: b12f7d0
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Mit der Codex CLI kannst du Untersuchung, Änderungen, Tests und Review im Terminal durchführen. Die offizielle Installationsseite bietet Varianten für macOS/Linux, Windows, npm und Homebrew. Wähle die Methode, die zu Betriebssystem und Softwareverwaltung passt.

## Offizielles eigenständiges Installationsprogramm für macOS/Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Führe für ein Update denselben offiziellen Installationsbefehl erneut aus. Benutzer von Windows, npm oder Homebrew wählen auf der [offiziellen Seite zur Codex CLI](https://learn.chatgpt.com/docs/codex/cli) die entsprechende Installationsregisterkarte. Übertrage den macOS/Linux-Befehl nicht unverändert auf jedes System.

## Nach der Installation prüfen

Öffne ein neues Terminalfenster und führe in einem Übungs-Repository Folgendes aus:

```bash
codex --version
codex login status
```

Wenn du noch nicht angemeldet bist:

```bash
codex login
```

Starte nach der Autorisierung im Browser im Repository-Verzeichnis eine interaktive Sitzung:

```bash
codex
```

Die erste Aufgabe kann schreibgeschützt bleiben:

```text
Ändere noch keine Dateien. Erkläre, wie dieses Projekt installiert, getestet und gebaut wird, und nenne die gelesenen Dateipfade.
```

## Fehler in dieser Reihenfolge untersuchen

1. `codex --version` findet den Befehl nicht: Öffne das Terminal erneut und prüfe `PATH` der aktuellen Shell.
2. Der Befehl ist ausführbar, kann aber nicht verwendet werden: Führe `codex login status` aus und unterscheide Installations- von Authentifizierungsproblemen.
3. Die falsche Identität ist angemeldet: Führe `codex logout` aus und melde dich erneut an.
4. Die Unternehmensumgebung lehnt den Zugriff ab: Prüfe Workspace, Anmeldemodus und verwaltete Konfiguration. Umgehe die Richtlinie nicht mit privaten Zugangsdaten.

Füge einen API-Key nicht in Shellverlauf, Ticket oder Chat ein. Wenn du dich mit einem API-Key anmelden musst, verwende wie unter [Anmeldung und Authentifizierung](/de/guide/getting-started/sign-in-and-authentication/) beschrieben die Standardeingabe.

Lies als Nächstes [Interaktiver CLI-Modus](/de/guide/cli/interactive-mode/). Weitere Probleme behandelt die [CLI-Fehlersuche](/de/guide/cli/troubleshooting/).

---

**Status:** verified

**Unterstützte Produkte:** CLI

**Prüfgrundlage:** Mit dem aktuellen Schnellstart und der Authentifizierungsdokumentation der Codex CLI abgeglichen. Verifiziert wurden das offizielle Installationsprogramm für macOS/Linux, der Start mit `codex`, die ChatGPT-Anmeldung und die Befehle zum Anmeldestatus. Für andere Installationsarten verweist die Seite auf die aktuellen offiziellen Registerkarten.

**Zuletzt geprüft:** 2026-08-26
