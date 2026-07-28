---
title: GitHub verbinden
description: 'Codex Cloud an GitHub-Repos anbinden — Berechtigungen, Branches und Umgebungen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Nach der GitHub-Verbindung kann Codex in der **Remote-Umgebung** Repos klonen, Branches öffnen, pushen und PRs erstellen — Voraussetzung für Cloud-Workflows.

## Inhalt

- Warum verbinden, welche Rechte autorisieren
- Checkliste vor und nach der Verbindung
- Arbeitsteilung mit lokalen Desktop-Aufgaben

## Beziehungsdiagramm

```text
Ihr GitHub-Repo
    ↕（OAuth / GitHub App，produktspezifisch）
Codex Cloud-Umgebung
    ↕
Cloud-Aufgaben, die Sie in Web/App starten
```

Die lokale [Desktop-App](/guide/desktop-app/) kann weiterhin den lokalen Clone ändern; Cloud passt zu **standardisierter Umgebung, Weiterlaufen ohne Laptop, Freigabe vom Handy**. Siehe [Lokal und Cloud](/guide/foundations/local-vs-cloud/).

## Häufige Missverständnisse

### 1. Ich habe schon lokal ein Repo — warum noch GitHub verbinden?

Cloud-Aufgaben sehen das Remote-Repo, nicht Ihre lokale Kopie.

### 2. Verbunden = sieht alle lokalen Änderungen?

Nicht gepushte lokale Änderungen sieht Cloud in der Regel nicht.  
Häufige Verwechslung.

### 3. Worauf bei der Verbindung achten?

Zuerst prüfen:

- Repo-Scope nicht zu groß
- Branch Protection
- Secrets korrekt an sicherer Cloud-Stelle

Nach der Verbindung sieht Cloud das Remote-Repo — nicht den ungepushsten lokalen Stand.

## Vor der Verbindung

- [ ] Push-Rechte am Zielrepo (oder Fork-Strategie nur für PRs)
- [ ] Branch Protection bekannt: direkter Push auf main verboten?
- [ ] Keine Secrets im Repo; Cloud nutzt [Secrets-Konfiguration](/guide/web-and-cloud/secrets-and-variables/)
- [ ] Organisation erlaubt Drittanbieter-GitHub-Integrationen

## Empfohlene Schritte (Konzept)

1. In Codex Web/Cloud-Einstellungen **GitHub-Verbindung** öffnen
2. Organisation und Repo-Scope wählen (**möglichst minimale Repo-Liste**)
3. OAuth-Rechte prüfen: meist Code lesen, PRs öffnen; Schreibrechte je Aufgabe
4. Kleine Cloud-Aufgabe im Testrepo verifizieren
5. Danach Default-Branch und Umgebungsvariablen (falls nötig)

Buttons und UI richten sich nach dem aktuellen Produkt.

## Berechtigungen und Sicherheit

| Praxis | Grund |
|---|---|
| Dedizierter Maschinenuser oder Bot-Account (Team) | Audit und Rücknahme bei Austritt |
| Nicht alle privaten Repos autorisieren | Fehlbedienungsfläche senken |
| Branch Protection + erforderliches Review | Cloud-Output trotzdem Menschen-Review |
| Verbundene Repo-Liste regelmäßig prüfen | Verlassene Projekte trennen |

## Typische Aufgaben danach

- Remote Issue umsetzen → [Pull Request erstellen](/guide/web-and-cloud/create-pull-requests/)
- PR-Review und Follow-up → [GitHub](/guide/integrations/github/)-Integration
- Mit [Automations](/skills/automations/scheduled-tasks/) kombinieren

## Häufige Fehler

- Persönliches GitHub an Produktions-Org-Repos mit persönlicher Policy
- Annehmen, Cloud sehe ungepushte lokale Commits
- Erste Aufgabe unbeschränkt auf großem Monorepo

## Quellen
- OpenAI Codex Cloud / GitHub-Integrationsdokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud / Web  
**Prüfhinweis:** Abhängig von aktueller GitHub-Verbindung, Autorisierungsmodell, Repo-Scope und Cloud-UI — hochvolatile Integrationsdetails; nach aktueller offizieller Verbindungsdokumentation wieder `verified`.  
**Zuletzt geprüft:** 2026-07-26
