---
title: Anmelden und Authentifizierung
description: "Login abschließen und Identität sowie Berechtigungsstatus bestätigen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Viele Anfänger setzen „ich bin angemeldet“ mit „ich kann normal nutzen“ gleich — das ist nicht dasselbe.

Login klärt „wer du bist“; Authentifizierung und Berechtigungscheck klären „ob du in diesem Client jetzt normal starten kannst“.

Im gewählten Client den UI-Hinweisen folgen. Möglich sind:

- Browser-Weiterleitung zur Autorisierung
- SSO / Organisationskonto
- Gerätecode oder Token (CLI-Szenario)

## Was nach dem Login zu bestätigen ist

Vor allem:

- Bist du wirklich in einem nutzbaren Zustand?
- Nutzt du gerade persönliche oder Organisations-Identität?
- Wenn es noch nicht geht: eher Login-Fehler oder fehlende Berechtigung?

## Nach dem Login prüfen

- Angezeigt: dein Konto oder deine Organisation
- Projekt erstellen oder öffnen möglich
- Keine Fehler wie „keine Berechtigung für Codex“

Wenn alle drei stimmen, kannst du zum nächsten Schritt.

## Häufige Missverständnisse

### 1. Browser-Autorisierung fertig = alles ok

Manchmal hat der Browser schon autorisiert, der Client zeigt aber noch:

- Falsches Konto
- Organisationsberechtigung nicht offen
- Tarif oder Zugang passt nicht
- Lokaler Client-Status noch nicht aktualisiert

### 2. App, CLI und IDE müssen sich beim Login gleich anfühlen

Clients können unterschiedlich authentifizieren, z. B.:

- Desktop-App eher grafische Weiterleitung
- CLI ggf. Gerätecode, Token oder Browser-Autorisierung
- IDE-Erweiterung zusätzlich Editor-eigener Status

### 3. Login reicht — welche Identität egal

Besonders bei parallelem Privatkonto, Teamkonto und Organisations-SSO prüfen:

- Wer wird gerade angezeigt?
- Zu welcher Organisation gehören die aktuellen Berechtigungen?
- Unter welcher Identität landen spätere Projekte und Aufgaben?

## Wenn Login klappt, Nutzung aber nicht

Wenn du „angemeldet“ bist, aber nicht starten kannst:

1. Ist das angezeigte Konto das gewünschte?
2. Bist du in der richtigen Organisation / dem richtigen Workspace?
3. Gibt es Hinweise zu Berechtigung, Zugang oder Tarif?
4. Hängt der Client selbst oder ist er unsynchron?

Wichtig bleibt: richtige Identität und die Fähigkeit, Projekte zu erstellen und Aufgaben zu starten.

Auth-Details und Sicherheitshinweise: [https://developers.openai.com/codex](https://developers.openai.com/codex). Bei Fehlern: [Fehlerbehebungs-Index](/guide/reference/troubleshooting/).

---

**Status:** outdated  
**Geeignete Produkte:** App / CLI / IDE  
**Nachprüfhinweis:** Diese Seite betrifft Browser-Autorisierung, SSO, Gerätecode, Organisationsidentität und Client-Verfügbarkeit — Erfahrungen ändern sich schnell je Einstieg und Version; es fehlt ausreichend starke aktuelle offizielle Login-Doku für die ganze Seite, daher vorerst `outdated`.  
**Zuletzt überprüft:** 2026-07-26
