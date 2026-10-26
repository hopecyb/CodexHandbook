---
title: CLI-Fehlerbehebung
description: Authentifizierung, Berechtigungen und fehlgeschlagene Befehle untersuchen.
locale: de
source_locale: zh-CN
source_revision: "57b062f"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 70
legacyVerification:
  status: verified
  products: "CLI"
  basis: Aktuelle OpenAI-Help-Center-CLI-Einstiegs- und Config-Materialien decken weiterhin Installation, Auth, Berechtigung/Sandbox und Arbeitsverzeichnis als häufige Ursachen ab; diese Seite teilt Symptome
    in Installation, Login, Berechtigung, Verzeichnis — stabiles Fehler-Routing.
  checkedAt: '2026-07-26'
---

Bei CLI-Problemen wirken Fehler oft wie Terminalfehler — die Ursache muss aber nicht dieselbe Klasse sein.

Bei CLI-Fehlerbehebung zuerst einordnen: „nicht installiert / nicht angemeldet / keine Berechtigung / falsches Verzeichnis“.

| Symptom | Zuerst versuchen |
|---|---|
| command not found | Installation und PATH prüfen |
| Authentifizierung fehlgeschlagen | Neu anmelden; Organisationsrichtlinie prüfen |
| Permission denied | Freigabemodus und Sandbox-Einstellungen prüfen |
| Dateien im falschen Verzeichnis geändert | Aktuelles Arbeitsverzeichnis bestätigen |

## Zuerst vier Klassen

- **Befehl nicht gefunden:** meist Installation oder `PATH`
- **Befehl läuft, aber kein Zugang:** meist Authentifizierung
- **Zugang, aber nichts geht:** meist Berechtigung oder Sandbox
- **Falsches Ergebnis:** meist Verzeichnis oder Kontext

## Häufige Missverständnisse

### 1. Jeder CLI-Fehler → dasselbe Log vertiefen

Die Ursache zuerst grob einzuordnen, ist meist schneller, als sofort einzelne Fehlermeldungen im Detail zu untersuchen.

### 2. Permission denied = Programm kaputt

Oft nicht kaputt — Freigabe, Sandbox oder Policy arbeiten normal.

### 3. Befehl lief = Verzeichnis ok

Auch falsch.

Viele CLI-Probleme: nicht „Befehl läuft nicht“, sondern „im falschen Repo / Arbeitsverzeichnis“.

## Reihenfolge der Fehlersuche

1. Existiert der Befehl?
2. Login-Status?
3. Aktueller Berechtigungsmodus und Sandbox-Grenzen?
4. Ist das aktuelle Arbeitsverzeichnis das erwartete Projekt?

CLI-Fehlerbehebung: zuerst Installation, Login, Berechtigung oder Verzeichnis — dann wird die Suche klarer.

Offizielle Hinweise: [OpenAI-Codex-Dokumentation](https://developers.openai.com/codex).
