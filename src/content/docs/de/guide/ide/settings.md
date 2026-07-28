---
title: Einstellungen der IDE-Erweiterung
description: Einstiegspunkte für Modell, Freigabe, Kontext und Erweiterungsverhalten in der IDE.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Einstellungen der IDE-Erweiterung verbinden **persönliche Vorlieben** und **Projektregeln**: welches Modell, wie streng Freigabe, ob geöffnete Dateien automatisch mitkommen. Konsistent mit den globalen [Konfigurationsgrundlagen](/guide/customization/configuration/config-basics/); Fokus hier auf typische Editor-Optionen.

## Inhalt dieser Seite

- Arbeitsteilung: IDE-Einstellungen vs. Nutzerkonfiguration vs. `AGENTS.md`
- Was Entwickler am häufigsten anpassen
- Wie Teams Defaults angleichen

## Wofür diese Einstellungen stehen

IDE-Einstellungen sind eher: **Default-Gewohnheiten, wenn Codex im Editor mit dir zusammenarbeitet**.

Sie betreffen Fragen wie:

- welches Modell standardmäßig
- wie eng Freigabe standardmäßig
- ob aktuelle Datei und Auswahl automatisch mitkommen

Sie definieren keine Projektregeln selbst, sondern ob die Arbeit im Editor flüssig und stabil läuft.

## Konfigurationsschichten (Wiederholung)

| Schicht | Beispiel | Priorität |
|---|---|---|
| Organisationsrichtlinie | Sandbox-Lockerung verbieten | höchste |
| Projekt-`AGENTS.md` / Projektkonfig | Testbefehle, Verzeichnisvereinbarungen | hoch |
| IDE-Erweiterungs-UI | Default-Modell, Panel-Layout | mittel |
| Einmal-Prompt | «Diesmal nicht ins Netz» | Aufgabenstufe |

Siehe [Geltungsbereich und Vorrang](/guide/customization/agents-md/scope-and-precedence/)

## Häufige Missverständnisse

### IDE-Einstellungen sind keine Projektnorm

„So ist mein Editor default“ wird oft mit „so soll das Projekt laufen“ verwechselt.

Klarer:

- Editor-Einstellungen = persönliches Nutzungserlebnis
- `AGENTS.md` und Projektkonfig = Teamkonsens

Verwandt, aber nicht dasselbe.

### Automatischer Kontext: mehr ist nicht immer besser

Aktuelle Datei, Auswahl, offene Tabs automatisch mitzunehmen ist bequem; zu viel Auto-Füllung verdünnt den Fokus.

Praktisch: genug — nicht „je mehr offen, desto stärker“.

## Häufig geänderte Einstellungen (Konzept)

### Modell und Reasoning

Beeinflusst Tempo und Qualität komplexer Aufgaben. Teams können im README „empfohlene Modellstufe“ nennen, damit Defaults nicht auseinanderlaufen und Probleme schwer reproduzierbar werden.

### Freigabe und Sandbox

Entspricht [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/):

- Einsteiger: Default oder strenger
- Vertrauenswürdige Repos: vorsichtig lockern, nicht mit Produktions-Secrets-Verzeichnissen mischen

CLI und IDE sollten dieselbe **Sicherheitsbasislinie** nutzen; CLI: [CLI-Konfiguration](/guide/cli/configuration/).

### Kontextverhalten

Manche Erweiterungen konfigurierbar:

- aktuelle Datei / Auswahl automatisch einbeziehen
- `AGENTS.md` lesen
- Kontextfenster-Optionen (versionsabhängig)

Zu viel Auto-Kontext erzeugt Rauschen; siehe [Kontext fokussiert halten](/guide/context/keep-context-focused/).

### Anmeldung und Konto

Gemeinsam mit [Anmelden und Authentifizierung](/guide/getting-started/sign-in-and-authentication/); nach Kontowechsel Erweiterungssitzung neu starten.

## Team-Ausrichtung

1. **Muss-konsistent**-Punkte ins Repo (`AGENTS.md` + optionale Projektkonfig)
2. **Persönliche Gewohnheiten** in IDE-Einstellungen, nicht in Git
3. Onboarding neuer Mitglieder: Erweiterungsversion gegen [IDE-Installation](/guide/ide/installation/) prüfen

## Was zuerst ansehen

Beim ersten Einrichten der IDE-Erweiterung reichen drei Gruppen:

1. Modell und Reasoning-Stufe
2. Freigabe / Sicherheit
3. automatischer Kontext

Sind diese drei stimmig, decken sie die meisten echten Nutzungsprobleme ab.

## Fehlerbehebung

| Phänomen | Prüfen |
|---|---|
| Einstellung wirkt nicht | Organisationsrichtlinie überschreibt? Fenster neu laden nötig? |
| Verhalten weicht von CLI ab | [Konfigurationsreferenz](/guide/reference/configuration-reference/) vergleichen |
| Erweiterung reagiert nicht | [IDE-Fehlerbehebung](/guide/ide/troubleshooting/) |

IDE-Einstellungen = „wie du im Editor mit Codex zusammenarbeitest“; Projektregeln sind eine andere Schicht — nicht vermischen.

## Quellen
- OpenAI Codex IDE settings
---

**Status:** outdated  
**Anwendbare Produkte:** IDE  
**Prüfhinweis:** Diese Seite dreht sich um Einstellungsoptionen, Auto-Kontext, Freigabe-Vorlieben und Organisationsüberschreibung; Einstiege und Namen ändern sich leicht mit Erweiterungsversionen — aktuelle Official-Einstellungsdokumentation reicht nicht für die ganze Seite.  
**Zuletzt geprüft:** 2026-07-26
