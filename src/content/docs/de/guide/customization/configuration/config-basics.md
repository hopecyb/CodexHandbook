---
title: Konfigurationsgrundlagen
description: "Ort der Codex-Config, häufige Optionen und Einstieg in Freigabe, Sandbox und Modell."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Config-Dateien lassen Codex-Verhalten lokal oder im Projekt **vereinheitlichen**, ohne Modell, Freigabestufe oder Sandbox-Richtlinie in jeder Session neu zu setzen.

## Inhalt dieser Seite

- Wo Config liegt, wie Projekt- und Benutzerebene sich überlagern
- Was am häufigsten geändert wird: Modell, Freigabe, Sandbox, Standard-Arbeitsverzeichnis
- Grenze zu `AGENTS.md`: Config steuert „Fähigkeitsschalter“, AGENTS steuert „wie in diesem Projekt Code geschrieben wird“

## Was Config eigentlich steuert

Config ist näher an den **Standard-Arbeitsgewohnheiten** von Codex.

Zum Beispiel:

- Welches Modell standardmäßig
- Wie eng die Sicherheitsgrenzen standardmäßig
- In welchem Verzeichnis standardmäßig gearbeitet wird

Es steuert nicht die temporären Anforderungen einer einzelnen Aufgabe, sondern wie die Arbeit meist beginnt.

## Config-Schichten

| Schicht | Typischer Ort | Inhalt |
|---|---|---|
| Benutzer | Config unter `~/.codex/` (Dateinamen laut offizieller Doku) | Standardmodell, persönliche Freigabegewohnheiten |
| Projekt | Config-Fragmente im Repo oder `codex`-bezogene Projektdateien | Team-geteilte Sandbox-/Werkzeug-Richtlinien |
| Managed | Von der Organisation ausgerollt | Pflichtfelder, die Personen nicht überschreiben dürfen |

**Flüchtige Fakten** (Pfade, Feldnamen, TOML-Keys) richten Sie nach der [OpenAI-Codex-Dokumentation](https://developers.openai.com/codex); diese Seite beschreibt Konzepte und Entscheidungsweise.

## Häufige Missverständnisse

### Mehr Config ist nicht professioneller

Beim ersten Kontakt wollen viele alles konfigurieren, was geht.

Für Einsteiger reichen oft wenige Hochfrequenz-Einstellungen:

- Standardmodell
- Standard-Freigabe-/Sandbox-Richtlinie
- Standard-Arbeitsverzeichnis

Diese zuerst stabil setzen ist meist besser, als sofort alle Felder zu erforschen.

### Config ist keine Projektregel

Soll „alle Mitwirkenden das einhalten“, gehört es meist in `AGENTS.md` oder Projektdoku — nicht nur in Ihre lokale Config.

Zum Beispiel:

- Welche Checks vor dem Commit
- Welche Verzeichnisse unantastbar
- Welche Aufgabenarten kein Auto-Push

Das darf nicht nur auf persönlicher Config ruhen.

## Häufig geänderte Config-Absichten

### Modell und Reasoning

- Alltag: Tempo und Qualität ausbalancieren
- Komplexe Refactors: stärkeres Reasoning-Modell (falls Tarif erlaubt)
- Skripte/CI: festes Modell für Reproduzierbarkeit

Hintergrund: [Modelle und Reasoning](/guide/foundations/models-and-reasoning/)

### Freigabe und Sandbox

| Absicht | Config-Richtung |
|---|---|
| Einsteiger / unvertrautes Repo | Strengere Freigabe, Netzwerk und Schreibbereich einschränken |
| Vertrautes Privatprojekt | Unter Sicherheitsvoraussetzungen weniger Unterbrechungen |
| Unternehmens-Repo | Managed Policy folgen, nicht selbst lockern |

Hintergrund: [Berechtigungen und Freigabe](/guide/foundations/permissions-and-approvals/), [Sandbox und Netzwerk](/guide/foundations/sandbox-and-network/)

### CLI- und App-Konsistenz

Dasselbe Konto sollte in CLI und Desktop-App dieselbe **Sicherheitsgrundlinie** anstreben — vermeiden Sie „CLI Vollzugriff, App streng“.

## Minimal nutzbares Vorgehen

1. Offizielles „Configuration“-Kapitel lesen, Dateipfade der aktuellen Version bestätigen
2. Nur eine Sache ändern — z. B. Standard-Sandbox-Modus — eine Woche beobachten, dann nachjustieren
3. Team-geteilte Punkte in Repo-Doku, persönliche Vorlieben lokal
4. In `AGENTS.md` schreiben „wie Codex mit diesem Projekt empfohlen genutzt wird“ — nicht die ganze Config kopieren

## Wohin gehört was

Unsicher, ob etwas in Config, `AGENTS.md` oder Aufgaben-Prompt gehört? Fragen:

1. Ist das eine Default-Gewohnheit für die meisten Aufgaben?
2. Ist das nur meine persönliche Vorliebe?
3. Ist das eine Regel, die das ganze Projekt teilen soll?

Meist:

- Default-Gewohnheit → Config
- Persönliche Vorliebe → persönliche Schicht
- Teamkonsens → Repo

## Bezug zu CLI-Themen

- Interaktiv: [CLI-Interaktionsmodus](/guide/cli/interactive-mode/)
- Nicht-interaktiv und Skripte: [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/)
- Config-Details: [CLI-Konfiguration](/guide/cli/configuration/) · [Konfigurationsreferenz](/guide/reference/configuration-reference/)

## Häufige Fehler

- Alle Freigaben abschalten und Projekte in Produktionsdatenverzeichnissen öffnen
- API-Keys in Config schreiben und committen
- Dokumentierte Config-Keys passen nicht zur installierten Version (nach CLI-Upgrade nicht nachgeprüft)

## Sicherheitsgrenzen

Config kann **Pfad-Allowlists, Netzwerkrichtlinien, MCP-Serverlisten** enthalten — vor Änderungen fragen: „Kann ein bösartiger Prompt diese Config ausnutzen?“ In Unternehmen rollen Admins aus; Managed Policy nicht umgehen.

Config eignet sich für Defaults, die Sie fast jedes Mal erneut wählen würden — nicht dafür, alle Regeln in die Config-Datei zu stopfen.

## Quellen

- OpenAI-Codex-Konfigurationsdokumentation
- stormzhang/ai-coding-guide: `codex/18-config.md`
- KimYx0207 CX-04 Projektanweisungen und Berechtigungskonfiguration (Fakten offiziell nachprüfen)

---

**Status:** verified  
**Gilt für:** CLI / App  
**Prüfgrundlage:** Aktuelle OpenAI-Help-Center-Config-Materialien nutzen weiterhin `~/.codex/config.toml` und `~/.codex/.env` und erwähnen, dass Desktop-App/IDE ggf. Neustart brauchen; diese Seite vermeidet volatile Key-Namen und behält den stabilen Rahmen „Benutzerconfig, Managed Policy, gängige Absichten zu Modell/Freigabe/Sandbox“.  
**Zuletzt geprüft:** 2026-07-26
