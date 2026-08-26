---
title: Anmeldung und Authentifizierung
description: Wähle für lokale Clients und Cloud den richtigen Anmeldemodus und überprüfe die aktive Identität sicher.
sidebar:
  order: 60
locale: de
source_locale: zh-CN
source_revision: e17d14f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Für die Verwendung von OpenAI-Modellen bietet Codex zwei persönliche Anmeldemethoden:

- **Mit ChatGPT anmelden:** Nutzt das Abonnementkontingent und übernimmt Workspace-Berechtigungen sowie Datenrichtlinien von ChatGPT.
- **Mit API-Key anmelden:** Wird nach API-Nutzung abgerechnet und übernimmt Daten- und Verwaltungsrichtlinien der API-Organisation.

Lokale Arbeit in ChatGPT-Desktop-App, Codex CLI und IDE-Integration unterstützt beide Methoden. **Codex Cloud erfordert die Anmeldung mit ChatGPT.**

## Mit ChatGPT anmelden

Ein lokaler Client öffnet die Autorisierung im Browser und übergibt die Anmeldedaten anschließend zurück an den Client:

- Desktop-App: Wähle auf der abgemeldeten Seite die Fortsetzung der Anmeldung.
- CLI: Führe `codex login` aus.
- IDE: Wähle auf der abgemeldeten Seite die Anmeldung mit ChatGPT.

Prüfe nach der Anmeldung das aktive Konto und den Workspace. Das ist besonders wichtig, wenn ein persönlicher Bereich und ein Unternehmens-Workspace nebeneinander bestehen.

## Mit API-Key anmelden

Nachdem du auf der OpenAI Platform einen Key erstellt hast, darfst du ihn nicht direkt in den Befehlsverlauf schreiben. In der CLI verwendest du die Standardeingabe:

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

Öffne in der Desktop-App „Mit einer anderen Methode anmelden“ und in der IDE „Use API Key“. Ein API-Key eignet sich für lokale Arbeit und vertrauenswürdige CI, stellt aber keine Funktionen bereit, die von einem ChatGPT-Workspace oder Cloud abhängen.

## CLI-Identität prüfen und abmelden

```bash
codex login status
codex logout
```

CLI und IDE verwenden gemeinsam zwischengespeicherte Anmeldeinformationen. Wenn du dich in einer der beiden Oberflächen abmeldest, kann beim nächsten Start auch in der anderen eine erneute Anmeldung erforderlich sein.

## Sicherheit der Anmeldedaten

- Committe `~/.codex/auth.json` nicht und füge die Datei weder in Tickets, Chats noch Protokolle ein.
- Verwende vorzugsweise den Anmeldedatenspeicher des Betriebssystems. Behandle Tokens in einem Dateispeicher wie Passwörter.
- Nutze für CI eigene widerrufbare Zugangsdaten und keinen persönlichen langlebigen Key.
- Codex Cloud greift direkt auf Code-Repositorys zu. Aktiviere MFA für dein Konto; bei Organisations-SSO muss der Administrator MFA erzwingen.
- Verwende keinen privaten Key, um Organisationsbeschränkungen zu umgehen. Prüfe zuerst Workspace und verwaltete Richtlinien.

## Anmeldung erfolgreich, Verwendung trotzdem nicht möglich

Untersuche das Problem in dieser Reihenfolge:

1. Ist das aktuelle Konto oder die API-Organisation korrekt?
2. Ist der richtige ChatGPT-Workspace ausgewählt?
3. Erfordert die Zielfunktion eine ChatGPT-Anmeldung statt eines API-Keys?
4. Schränken Tarif, Platz, Rolle oder Administratorrichtlinie den Zugriff ein?
5. Prüfe erst danach Client-Cache, Netzwerk und Version.

Für die CLI stehen eigene Anmeldeprotokolle zur Verfügung, die du bei einer Supportanfrage oder Authentifizierungsfehlersuche verwenden kannst. Prüfe die Protokolle dennoch zuerst auf vertrauliche Informationen.

Tarifgrenzen behandelt [Konten, Tarife und Zugriff](/de/guide/getting-started/account-plans-and-access/). Alle Einzelheiten findest du auf der [offiziellen Authentication-Seite](https://learn.chatgpt.com/docs/auth).

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE / Cloud

**Prüfgrundlage:** Mit der aktuellen offiziellen Authentication-Seite abgeglichen. Verifiziert wurden die beiden lokalen Anmeldemethoden ChatGPT und API-Key, die ChatGPT-Anforderung für Cloud, CLI-Befehle, gemeinsam genutzter Cache und Grenzen der Anmeldedatenspeicherung.

**Zuletzt geprüft:** 2026-08-26
