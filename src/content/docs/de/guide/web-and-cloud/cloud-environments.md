---
title: Cloud-Umgebungen
description: Aufbau, Lebenszyklus und Team-Konfiguration der Remote-Laufumgebung von Codex Cloud.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Eine **Cloud-Umgebung** ist die Arbeitsmaschine, auf der Codex Remote-Aufgaben ausführt.

Sie beeinflusst Ergebnisse direkt: OS, Sprachversionen, Toolchain, Netzwerkpolicy und welcher Repo-Branch vorliegt. Diese Schicht erklärt vor allem:

> **Warum läuft es lokal, in Cloud aber nicht?**

## Inhalt

- Unterschiede Cloud-Umgebung vs. lokaler Dev-Rechner
- Bindung an GitHub-Repo und Branch
- Wie Teams reproduzierbare Cloud-Konfiguration pflegen

## Zuerst diese Punkte

- Cloud „liest nicht alles auf Ihrem Rechner“ — nur was in der Remote-Umgebung liegt
- Auch Cloud braucht Abhängigkeiten, passende Versionen und Netz
- Uncommittetes / ungepushstes Lokal sieht Cloud default nicht

Stellen Sie sich Cloud als **andere Maschine** vor.

## Kernkonzept

```text
GitHub-Repo (Branch)
        ↓ clone / checkout
Cloud-Umgebungsinstanz (Container oder VM，produktspezifisch)
        ↓
Agent führt Aufgabe aus: Abhängigkeiten, Code, Tests, Push
```

Zusammen mit [GitHub verbinden](/guide/web-and-cloud/connect-github/); die Umgebung **kann keine** ungepushsten Notebook-Commits sehen.

## Lokal vs. Cloud

- **Lokale Aufgabe**: Codex arbeitet vor Ihren Augen auf diesem Rechner
- **Cloud-Aufgabe**: Codex arbeitet auf einer Remote-Maschine

Typische Erstverwirrung:

- „Warum sieht es meine gerade geänderten lokalen Dateien nicht?“
- „Warum fehlt das global installierte Tool von meinem Laptop?“
- „Warum kommt es nicht an meine lokale DB?“

Meist: **Die Remote-Maschine hat das schlicht nicht.**

## Was die Umgebung enthält (Konzept)

| Bestandteil | Erklärung |
|---|---|
| Basisimage | OS, gängige Build-Tools |
| Runtime | Node, Python, Go usw. (Image/Aufgabe) |
| Arbeitsverzeichnis | Pfad nach dem Clone |
| Netzwerkpolicy | Outbound erlaubt? Welche Domains? |
| Credential-Injection | [Secrets und Variablen](/guide/web-and-cloud/secrets-and-variables/) |

Image-Listen und Customizing: [offizielle Cloud-Dokumentation](https://developers.openai.com/codex).

## Häufige Missverständnisse

### 1. Cloud erbt automatisch die lokale Umgebung

Nein.

Lokal installiertes Node, Python, Homebrew, Chrome, DB-Clients erscheinen nicht „weil lokal vorhanden“.

### 2. Repo gepusht = alles bereit

Code ist nur der Start; Erfolg hängt ab von:

- Abhängigkeitsinstallation
- Start-/Testbefehlen
- benötigten Secrets
- Netzwerkpolicy für externe Ressourcen

### 3. Cloud-Fehler = Codex kann es nicht

Oft fehlt die Umgebung — nicht die Aufgabe.

Reihenfolge:

1. Repo und Branch korrekt?
2. Abhängigkeiten und Runtime-Versionen korrekt?
3. Secrets und Netz verfügbar?
4. Aufgaben-Prompt klar?

## Empfohlener Konfigurationsablauf

1. Erste Cloud-Aufgabe im **Testrepo**, Installationsbefehle notieren
2. Wiederkehrendes in Repo-Doku (`README`, `AGENTS.md` oder unterstützte Environment-Dateien)
3. [Secrets](/guide/web-and-cloud/secrets-and-variables/) (private Registry, API-Keys)
4. [Internetzugriff](/guide/web-and-cloud/internet-access/) an Sicherheitsanforderungen prüfen
5. Mit demselben Template Issue → PR-Kreislauf verifizieren

## Wann Cloud

- Nur lokales Projekt, sofort Ergebnis: zuerst lokal
- Lange Läufe, einheitliche Team-Umgebung, Remote-GitHub: Cloud

Wenn der lokale Flow noch wackelt, nicht vorschnell zum „Cloud-Config-Problem“ eskalieren.

## Mit lokal abstimmen

„Lokal grün, Cloud rot“ vermeiden:

| Praxis | Grund |
|---|---|
| Abhängigkeitsversionen locken (lockfile) | Reproduzierbare Installation |
| Install- und Testbefehle in `AGENTS.md` | Agent rät nicht |
| CI und Cloud ähnliche Node/Python-Versionen | Weniger Drift |
| Große Dateien via Git LFS oder Build-Download | Clone-Größe steuerbar |

## Lebenszyklus

Typische Cloud-Aufgabe:

1. Instanz **erstellen/wiederverwenden**
2. **Vorbereiten**: clone, Branch checkout, Abhängigkeiten
3. **Ausführen**: Agent ändert Code, läuft Befehle
4. **Output**: Branch-Push, PR, Log-Artifacts
5. **Zerstören oder recyclen** (produktspezifisch)

Lange Aufgaben: [Desktop-App-Benachrichtigungen](/guide/desktop-app/notifications/) oder Mobile Follow-up.

## Häufige Fehler

- Annehmen, Cloud habe die komplette Toolchain des privaten Monorepos
- `localhost`-Dienste (DB, Mock-API) ohne Bereitstellung in der Umgebung
- Erste Aufgabe unbeschränkt auf Produktionsrepo
- Umgebungsproblem als Modellfähigkeitsproblem missverstehen

## Sicherheitsgrenzen

- Umgebung als **halbvertrauenswürdig**: weiterhin Code Review und Branch Protection
- Produktions-DB-Strings nur über Secrets, nicht im Prompt
- Unbenutzte Environment-Templates und Secrets regelmäßig aufräumen

## Quellen
- OpenAI Codex Cloud environments
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud  
**Prüfhinweis:** Betrifft Instanzform, Lebenszyklus, Templates und Branch-Bindung — ohne starke aktuelle offizielle Detailbelege nicht `verified`.  
**Zuletzt geprüft:** 2026-07-26
