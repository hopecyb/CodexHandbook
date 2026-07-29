---
title: Persönliche Vorlieben
description: Benutzerkonfiguration, Standardmodell und UI-Gewohnheiten — ohne Teamvereinbarungen im Repo zu verunreinigen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

**Persönliche Vorlieben** sind Einstellungen, die lokal projektübergreifend gelten: Standardmodell, Theme, Freigabegewohnheiten, persönliche Skill-Pfade usw. Anders als `AGENTS.md` im Repo sollten persönliche Vorlieben **nicht** voraussetzen, dass Teamkollegen dieselben haben.

## Inhalt

- Was gehört auf die persönliche Schicht, was auf die Projektebene
- Wie Sie mit [Profile](/guide/customization/configuration/profiles/) Szenarien wechseln
- Vermeiden, dass lockere persönliche Einstellungen ins Team-Repo sickern

Prioritätsüberblick: [Personalisierung](/guide/customization/) · [Geltungsbereich und Priorität](/guide/customization/agents-md/scope-and-precedence/)

## Warum diese Schicht trennen

Viele vermischen zuerst:

- wie ich persönlich arbeiten will
- was dieses Repo verlangt
- was Firma oder Team erzwingen

Ohne Trennung entsteht leicht:

- Bei Ihnen läuft alles flüssig, Teamkollegen können es nicht reproduzieren
- Sie denken, Regeln gelten schon — tatsächlich greift nur Ihr lokaler Fallback
- Lockere Einstellungen wandern in ernsthaftere Projekte

## Was in persönliche Vorlieben gehört

| Inhalt | Beispiel |
|---|---|
| Standardmodell und Reasoning-Stufe | Maschinenleistung und Tarif |
| UI-Theme, Schrift, Benachrichtigungen | Desktop-App-[Einstellungen](/guide/desktop-app/settings/) |
| Persönliches MCP (private Werkzeuge) | Lokale DB nur lesen (Berechtigung vorsichtig) |
| Pfad zur persönlichen Skill-Bibliothek | Nicht mit Team-Plugins kollidieren |
| Terminal-Aliase, `codex`-Startverzeichnis | Siehe [CLI-Konfiguration](/guide/cli/configuration/) |

## Was nicht nur auf der persönlichen Schicht liegen darf

- Code-Stil, Testbefehle, Verzeichnisstruktur → **Projekt-`AGENTS.md`**
- Erzwungene Sandbox-Richtlinie → **Projektkonfiguration oder organisationsgesteuert**
- Compliance-Anforderungen am Kunden-Repo → **Dokumentation + CI**, nicht persönliche Erinnerung

## Empfohlene Praxis

1. **Work-/Personal-Profile trennen**: Kundenprojekte mit strengem Profile, Übungsprojekte dürfen lockerer sein
2. **In neuen Repos zuerst Projektregeln lesen**, dann entscheiden, ob persönliche Defaults temporär überschrieben werden
3. **Regelmäßig aufräumen**: ungenutzte persönliche MCP- und Skill-Drittanbieterquellen entfernen
4. Beim Gerätewechsel: Config-Liste exportieren (ohne Geheimniswerte)

## Häufige Missverständnisse

### 1. Was Sie privat mögen, ist nicht automatisch ein guter Global-Default

Sind Ihre Defaults locker, passen sie in Kunden- oder Teamprojekten oft nicht.

### 2. Persönliche Vorlieben und Projektregeln sind doch ähnlich?

Sehr unterschiedlich.  
Persönliche Vorliebe: „So arbeite ich gern.“ Projektregel: „In diesem Repo sollten alle möglichst so vorgehen.“

### 3. „Lokal ist alles okay“ reicht nicht als Urteil

Bessere Kriterien:

- Repo nicht verunreinigen
- Nicht von Defaults abhängen, die nur Sie kennen
- Beim Wechsel zu strengen Projekten keinen Schaden anrichten

## Ob es auf die persönliche Schicht gehört

Unsicher? Fragen Sie sich:

1. Ist das nur eine Gewohnheit, die mich betrifft?
2. Beeinflusst es, ob andere Ergebnisse reproduzieren können?
3. Passt es in alle Projekte?

Sind Antwort 2 oder 3 riskant, nicht leichtfertig zum Global-Default machen.

Persönliche Vorlieben sollen Ihre Arbeit handlicher machen — nicht Teamregeln ersetzen und nicht lockere Settings in jedes Projekt schleppen.

## Zum Erinnerungsfeature

Bietet das Produkt „Erinnerung“ oder persistente Vorlieben, siehe [Erinnerungen und persistenter Kontext](/guide/customization/memories-and-persistent-context/). Erinnerung eignet sich für stabile Gewohnheiten; **projektspezifische Constraints bleiben Dateien im Repo**.

## Häufige Fehler

- Firmen-API-Keys in der persönlichen Config festschreiben
- Global Shell auto-freigeben und dann Kundencode bearbeiten
- Teamkollegen nach dem Clone: „Regeln greifen nicht“ — sie wurden nie committed

## Abnahmeliste

- [ ] Je ein Beispiel für persönlich / Projekt / Organisation nennen können
- [ ] Mindestens ein Kundenprojekt mit strengem Profile konfiguriert
- [ ] Keine persönlichen Geheimnisse im Repo

---

**Status:** verified  
**Gilt für:** App / CLI / IDE  
**Prüfgrundlage:** Kreuzgeprüft gegen verifizierte Kapitel zu Projektanweisungen, Profiles, Einstellungsaufteilung und Sicherheitsgrenzen; diese Seite erklärt nur das stabile Schichtungsprinzip „persönliche Gewohnheiten dürfen Team-Repo-Regeln nicht verunreinigen“ und schreibt keine aktuelle UI eines Clients als festen Vertrag fest.  
**Zuletzt geprüft:** 2026-07-26
