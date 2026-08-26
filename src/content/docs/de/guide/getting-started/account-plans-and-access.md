---
title: Konten, Tarife und Zugriff
description: Unterscheide ChatGPT-Tarife, nutzungsabhängige API-Key-Abrechnung und Berechtigungen in Organisations-Workspaces.
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: 7e2e8e6
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Codex kann derzeit über einen **ChatGPT-Tarif** oder mit einem **nutzungsabhängig abgerechneten API-Key** verwendet werden. Beide Zugriffsarten bieten jedoch nicht dieselben Einstiege und Verwaltungsgrenzen.

## Zuerst die Zugriffsart wählen

| Art | Geeignet für | Verfügbarkeitsgrenzen |
|---|---|---|
| Anmeldung mit ChatGPT | Persönliche interaktive Nutzung, Desktop, Cloud und Organisations-Workspaces | Unterliegt Kontingent des ChatGPT-Tarifs, Workspace-Rolle und Administratorrichtlinien |
| Anmeldung mit API-Key | Lokales Codex, Skripte und CI | Abrechnung nach API-Nutzung; einige Funktionen mit ChatGPT-Workspace- oder Cloud-Abhängigkeit sind nicht verfügbar |

Auf der aktuellen offiziellen Pricing-Seite sind ChatGPT Work und Codex in Tarifen wie Free, Go, Plus, Pro, Business, Edu und Enterprise enthalten. Preise, Kontingente, Modelle und enthaltene Funktionen können sich jedoch ändern. Dieses Handbuch kopiert keine Preistabelle. Verwende die [aktuelle offizielle Pricing-Seite](https://learn.chatgpt.com/docs/pricing).

## Weshalb ein vorhandenes Konto trotzdem keinen Zugriff garantiert

Die Anmeldung ist nur die erste Ebene. Der endgültige Zugriff hängt außerdem davon ab:

1. Ob der aktuelle Tarif den gewünschten Einstieg oder die Funktion umfasst.
2. Ob das Produkt in deiner Region derzeit verfügbar ist.
3. Ob die Organisation dir einen Platz, eine Rolle und Workspace-Berechtigungen zugewiesen hat.
4. Ob ein Administrator Anmeldeart, Modell oder lokale Funktionen über eine verwaltete Konfiguration einschränkt.
5. Ob dein Verbrauch das aktuelle Zeitfenster- oder Wochenlimit erreicht hat.

## Checkliste für Einzelbenutzer

- Du kannst dich auf der offiziellen Seite beim richtigen ChatGPT-Konto anmelden
- Du weißt, ob du ein Tarifkontingent oder nutzungsabhängige API-Abrechnung verwendest
- Der Ziel-Client zeigt die richtige Identität an
- Bei einem Kontingenthinweis prüfst du die aktuelle Nutzung, statt den Client wiederholt neu zu installieren

## Checkliste für Team- und Unternehmensbenutzer

- Der richtige Workspace ist ausgewählt, nicht der persönliche Bereich mit derselben E-Mail-Adresse
- Der Administrator hat Mitglieder, Plätze und Rollen konfiguriert
- SSO, MFA, Datenaufbewahrung und Regionsrichtlinien erfüllen die Anforderungen der Organisation
- Eine verwaltete Konfiguration erzwingt lokal keinen anderen Anmeldemodus
- Der API-Key gehört zur richtigen API-Organisation und wird nicht mit Richtlinien des ChatGPT-Workspaces verwechselt

## Beispiel für die Einordnung

Wenn du dich in der CLI mit einem API-Key anmelden kannst, die Cloud-Schaltfläche aber nicht verfügbar ist, muss kein Installationsfehler vorliegen. Cloud erfordert eine ChatGPT-Anmeldung und unterliegt ChatGPT-Tarif sowie Workspace-Berechtigungen. Der API-Key deckt hauptsächlich lokale und programmatische Abläufe ab.

Fahre mit [Anmeldung und Authentifizierung](/de/guide/getting-started/sign-in-and-authentication/) fort.

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE / Cloud

**Prüfgrundlage:** Mit den aktuellen offiziellen Seiten zu Pricing und Authentication abgeglichen. Die Seite dokumentiert Zugriffsmodell und Reihenfolge der Fehlersuche, ohne veränderliche Preise, Kontingente oder Funktionslisten festzuschreiben.

**Zuletzt geprüft:** 2026-08-26
