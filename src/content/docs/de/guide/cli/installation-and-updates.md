---
title: CLI Installation und Updates
description: Installieren, aktualisieren und Version prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beim ersten CLI-Setup scheitern viele an:

- Ob die Installation überhaupt geklappt hat
- Warum das Terminal `codex` danach nicht kennt
- Wie man nach einem Update bestätigt, welche Version gerade läuft

CLI „fertig“ heißt nicht: Befehl einmal gelaufen — sondern: Dein aktuelles Terminal findet ihn zuverlässig.

## Nach der Installation mindestens drei Checks

1. Befehl lässt sich direkt ausführen
2. Aktuelles Terminal findet ihn im `PATH`
3. Authentifizierung ist erledigt — nicht nur die Binary installiert

## Häufige Missverständnisse

### 1. Installationsskript durchgelaufen = fertig

Das Skript durchgelaufen heißt nur: „Installationsschritte liefen.“  
Danach: Erkennt dein aktuelles Terminal den Befehl?

### 2. Neues Terminalfenster fixiert es automatisch

Manchmal ja, manchmal nein.  
Ist `PATH` nicht aktualisiert, findet auch ein neues Fenster ihn nicht.

### 3. Update = nochmal installieren

Oft brauchst du zuerst Klarheit:

- Ist die aktuelle Version veraltet?
- Welche Installation aktualisierst du eigentlich?

## Prüfpflichtreihenfolge

Nach frischer Installation:

1. Kann `codex` direkt ausgeführt werden?
2. Enthält der `PATH` der aktuellen Shell den Installationsort?
3. Login / Authentifizierung abschließen
4. Versionsinfo prüfen

Praktisches Kriterium: Aktuelles Terminal findet ihn, und Authentifizierung ist möglich.

Auch: [CLI installieren](/guide/getting-started/install-cli/)  
Official Installation und Upgrade: [OpenAI-Codex-Dokumentation](https://developers.openai.com/codex).


---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Diese Seite beschreibt Prüflogik nach der Installation, setzt aber eine bestimmte aktuelle Installations-, Update- und Auth-Flow voraus; Official-Installationswege, Auth-Schritte und Versionsbefehle ändern sich stark — ohne aktuelle Official-Installationsdokumentation nicht `verified`.  
**Zuletzt geprüft:** 2026-07-26
