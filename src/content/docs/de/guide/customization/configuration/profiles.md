---
title: Konfigurationsprofile
description: Lege eine benannte Gruppe von Einstellungen in einer eigenen Konfigurationsdatei ab und ergänze damit die Basiskonfiguration der Codex CLI.
sidebar:
  order: 20
locale: de
source_locale: zh-CN
source_revision: 7043ada
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Der aktuelle CLI-Parameter `--profile <name>` ergänzt die grundlegende Benutzerkonfiguration um `$CODEX_HOME/<name>.config.toml`. Er ist hauptsächlich für CLI-Szenarien gedacht und darf nicht als allgemeiner „Ein-Klick-Modus“ der Desktop-App beschrieben werden.

## Minimales Beispiel

Die Basiskonfiguration enthält gemeinsame Standardwerte:

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Profil für ein schreibgeschütztes Review:

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

Start:

```bash
codex --profile review
# Kurzform
codex -p review
```

Prüfe die Semantik anhand deiner lokalen Version:

```bash
codex --help
```

Die aktuelle Hilfe sollte den Pfad der Profildatei und die Art der Ergänzung erläutern. Weicht deine Version ab, sind ihre lokale Ausgabe und die offizielle Konfigurationsreferenz maßgeblich.

## Geeignete Verwendungszwecke für Profile

| Profil | Zweck | Beispielgrenze |
|---|---|---|
| `review` | Schreibgeschützte Prüfung | Nur lesen, keine Schreibzugriffe |
| `workspace` | Alltägliche Projektänderungen | Nur in den Arbeitsbereich schreiben, Genehmigung nach Bedarf |
| `ci` | Nicht interaktive Prüfung | Festes Ausgabeformat, kein Push |

Ein Profil speichert lediglich einen Ausgangspunkt für eine Gruppe von Einstellungen. Es überschreibt keine Vorgaben der Organisation und macht einen Prompt nicht automatisch sicher. Verwende insbesondere `danger-full-access` nicht in einem leichtfertig eingesetzten Standardprofil.

## Nicht mit Permission Profiles verwechseln

- **Konfigurationsprofil:** `--profile name` wählt `<name>.config.toml`, das verschiedene Codex-Einstellungen ergänzen kann.
- **Permission Profile (Beta):** `default_permissions` und `[permissions.<name>]` definieren Datei- und Netzwerkgrenzen.

Beide Mechanismen heißen „Profile“, erfüllen aber unterschiedliche Zwecke und verwenden verschiedene Konfigurationsstrukturen. Das aktuelle Permission Profile wird außerdem nicht mit dem alten `sandbox_mode` kombiniert. Konfiguriere genau eines der beiden Berechtigungssysteme.

## Grenzen für Teams

Konfigurationsprofile liegen im Codex-Home-Verzeichnis des Benutzers und sind in der aktuellen Version keine automatisch versionsverwaltete Projektkonfiguration. Ein Team kann geprüfte Beispieldateien dokumentieren, die Mitglieder ausdrücklich installieren und kontrollieren. Gehe nicht davon aus, dass ein persönliches Profil nach dem Klonen des Repositorys automatisch aktiviert wird.

## Abnahme

1. Führe `codex --help` aus und bestätige, dass die aktuelle Version `-p/--profile` unterstützt.
2. Teste `review` mit einer schreibgeschützten Aufgabe.
3. Fordere einen Lesezugriff außerhalb des Arbeitsbereichs oder einen Schreibzugriff an und bestätige, dass die erwartete Grenze greift.
4. Prüfe die wirksame Konfiguration und verlasse dich nicht nur auf den Dateinamen.

## Offizielle Grundlage

- [Codex-Konfigurationsschema](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Konfigurationsebenen im Quellcode der Codex CLI](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)

---

**Status:** verified

**Unterstützte Produkte:** CLI

**Zuletzt geprüft:** 2026-08-26 (lokal mit `codex-cli 0.148.0`)
