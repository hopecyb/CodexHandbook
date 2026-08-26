---
title: Plugins im Überblick
description: Verstehe Bestandteile, unterstützte Oberflächen, Installationsprüfung und Vertrauensgrenzen eines Plugins.
locale: de
source_locale: zh-CN
source_revision: b2c5dae
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

ChatGPT und Codex verwenden dieselbe öffentliche Plugin-Sammlung. Ein Plugin bündelt zusammengehörige Funktionen in einem auffindbaren und installierbaren Workflow, statt ein neues Werkzeugaufrufprotokoll zu erfinden.

## Mögliche Bestandteile eines Plugins

| Bestandteil | Zweck | Prüfung durch installierende Person |
|---|---|---|
| Skills | Wiederverwendbare Schritte, Referenzen und Skripte | Passen die Anweisungen zur aktuellen Aufgabe, sind die Skripte vertrauenswürdig? |
| Connectors | Werkzeuge wie GitHub, Slack und Google Drive verbinden | OAuth-Scope, Lese-/Schreibaktionen und Umfang externer Daten |
| MCP servers | Werkzeuge und Authentifizierung definieren und strukturierte Daten zurückgeben | Serverquelle, Werkzeugliste, Protokolle und Berechtigungen |
| Browser extensions | Browserfunktionen für bestimmte Workflows bereitstellen | Umfang und Notwendigkeit des Browserzugriffs |
| Hooks | Befehle oder MCP-Werkzeuge an Lebenszykluspunkten ausführen | Genaue Definition vor Aktivierung prüfen und als vertrauenswürdig markieren |
| Scheduled task templates | Wiederverwendbaren Einstieg für Oberflächen mit geplanten Aufgaben bereitstellen | Häufigkeit, Berechtigungen, Abbruchbedingung und menschliches Review |

## Unterschied zu Skill und MCP

| Mechanismus | Hauptfrage | Beispiel in einem PR-Review-Paket |
|---|---|---|
| Skill | In welchen Schritten wird gearbeitet? | Diff lesen, Nachweise verifizieren, nach Risiko ordnen |
| MCP / Connector | Welche externen Werkzeuge können aufgerufen werden? | GitHub-PR und Kommentare lesen |
| Hook | An welchem Lebenszykluspunkt wird geprüft? | Nach einem Schreibzugriff Dateien auf Zugangsdaten prüfen |
| Plugin | Wie werden diese Funktionen gemeinsam installiert und verteilt? | „PR-Review-Paket“ des Teams |

Ein Plugin ist eine Verteilungsebene, nicht der letzte Schritt der Ausführungskette. Die Beziehung zeigt die [Karte der Erweiterungsfunktionen](/de/skills/capability-map/).

## Installation und erste Verifikation

### ChatGPT Web / Desktop-App

1. Öffne die Registerkarte Plugins.
2. Prüfe Herausgeber, Beschreibung und enthaltene Funktionen.
3. Installiere das Plugin. Wenn es einen externen Dienst verbinden möchte, prüfe die Autorisierungsreichweite separat.
4. Führe in einer neuen Chat-, Work- oder Codex-Aufgabe eine risikoarme Verifikation aus.

### Codex CLI

1. Gib `/plugins` ein, um den Plugin-Browser zu öffnen.
2. Installiere aus dem konfigurierten marketplace.
3. **Starte eine neue Sitzung** und verifiziere danach den installierten Skill oder das Werkzeug.

Die IDE-Erweiterung unterstützt derzeit keine Plugins. Schreibe keine Anleitung zur Fehlersuche „Plugin-Einstieg in der IDE nicht gefunden“. Verwende zur Plugin-Verwaltung stattdessen die ChatGPT-Desktop-App oder Codex CLI.

## Prompt für eine risikoarme Verifikation

```text
Prüfe ausschließlich das gerade installierte <plugin-name> und führe keine Schreibzugriffe aus:
1. Liste die für diese Aufgabe relevanten Skills und Werkzeuge auf.
2. Erkläre für jedes Werkzeug, ob es nur liest oder externe Nebenwirkungen erzeugen kann.
3. Führe mit Testdaten oder einer schreibgeschützten Abfrage einen minimalen Aufruf aus.
4. Berichte die tatsächlich verwendete Komponente und alle Berechtigungen, die noch menschlich bestätigt werden müssen.
```

Wenn das Plugin eine externe Verbindung benötigt, darf die erste Verifikation keine Nachricht senden, Zustände ändern, Daten löschen oder Dateien in großen Mengen schreiben.

## Einführungsprozess im Team

1. **Komponenten inventarisieren:** Skills, Connectoren, MCP, Browsererweiterungen, Hooks und Vorlagen auflisten.
2. **Quelle verifizieren:** marketplace, Repository, Herausgeber und Aktualisierungsstrategie bestätigen.
3. **Minimal autorisieren:** Mit Testkonto und schreibgeschütztem Scope testen.
4. **Isolierter Pilot:** Zuerst in einem Nicht-Produktionsprojekt oder kleinen Team verwenden.
5. **Hooks prüfen:** Hash und Verhalten von Plugin-Hooks über `/hooks` untersuchen.
6. **Ausstieg dokumentieren:** Deaktivierung, Deinstallation, Rollback und OAuth-Widerruf beschreiben.

## Wichtige Grenzen

- Eine erfolgreiche Installation beweist nicht, dass Komponenten sicher oder für die aktuellen Daten geeignet sind.
- Ein Plugin kann zur Verbindung eines externen Diensts auffordern. Die Autorisierung ist ein eigener Schritt mit hohem Risiko.
- Plugin-Hooks laufen gemeinsam mit passenden Hooks anderer Quellen und überschreiben vorhandene Hooks nicht automatisch.
- Workspace-Administratoren können verfügbare Plugins und Werkzeuge steuern. Der persönliche Katalog entspricht nicht automatisch dem erlaubten Organisationsumfang.
- Mobile eignet sich zur Verwendung bereits im Konto vorhandener Plugins; eine vollständige Verwaltungsoberfläche darf nicht vorausgesetzt werden.

## Wann kein Plugin nötig ist

- Es gibt nur eine einfache `SKILL.md` ohne Bündelungs- oder Verteilungsbedarf
- Ein einmaliges persönliches Skript wird noch schnell verändert
- Berechtigungs- und Aktualisierungsstrategie sind noch nicht stabil
- Zielbenutzer arbeiten ausschließlich in der IDE-Erweiterung

Verifiziere zuerst einen einzelnen Skill- oder MCP-Workflow. Erst danach lohnt sich normalerweise die gebündelte Verteilung.

## Abnahmecheckliste

- [ ] Zieloberfläche unterstützt Plugins
- [ ] Herausgeber und Quelle sind nachvollziehbar
- [ ] Externe Verbindungen und OAuth-Scopes wurden geprüft
- [ ] Plugin-Hooks wurden geprüft und als vertrauenswürdig markiert
- [ ] Minimale schreibgeschützte Aufgabe war erfolgreich
- [ ] Neue Sitzung erkennt den erwarteten Skill oder das Werkzeug
- [ ] Das Team besitzt Anweisungen für Deaktivierung, Rollback und Berechtigungswiderruf

## Offizielle Quellen

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Status:** verified

**Unterstützte Produkte:** ChatGPT Web / Desktop-App / Mobile; Codex Desktop und CLI; IDE-Erweiterung unterstützt keine Plugins

**Zuletzt geprüft:** 2026-08-26
