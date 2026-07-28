---
title: Bedrohungsmodell
description: 'Wesentliche Risikoflächen von Codex in Teameumgebungen — Daten, Werkzeuge, Erweiterungen und Lieferkette.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

„Bedrohungsmodell“ heißt: Risiken vorher denken:

> **Wenn Codex wirklich an unseren Code, unsere Befehle und externe Werkzeuge angebunden ist — was kann am ehesten schiefgehen?**

Ein **Bedrohungsmodell** zerlegt das. Codex ist nicht „noch ein Chatfenster“ — es kann **Code lesen, Befehle ausführen, externe Werkzeuge aufrufen**. Dieses Kapitel legt die Hauptflächen aus; konkrete Kontrollen folgen in [Berechtigungsmatrix](/guide/reference/permission-matrix/) und [Sandbox](/guide/foundations/sandbox-and-network/).

## Inhalt

- Assets und Vertrauensgrenzen
- Typische Bedrohungen und Milderungsrichtungen
- Arbeitsteilung mit Regeln, Hooks und CI

## Warum das nicht „nur Security“ ist

Als Entwickler, Plattform, Doku oder Projektlead betrifft es Sie direkt. Typische Team-Probleme:

- Zu mächtige Tokens an Automatisierung geben
- Agent auf unvertrauenswürdigen Eingaben riskante Aktionen ausführen lassen
- Nicht wissen, welche Daten sichtbar bzw. exportierbar sind
- Erweiterungen nur nach Feature wählen, nicht nach Rechten und Herkunft

Wert des Bedrohungsmodells: Grenzen klären, bevor etwas passiert.

## Assets und Grenzen

| Asset | Beispiele |
|---|---|
| Quellcode und IP | Private Repos, unveröffentlichte Designs |
| Credentials | API-Keys, `.env`, Cloud-IAM |
| Nutzerdaten | PII, Kunden-Ticketinhalte |
| Infrastruktur | CI, Produktions-Deploy-Pipelines |

**Vertrauensgrenze:** Modell und Erweiterungen stehen default auf der **nicht voll vertrauenswürdigen** Seite; Menschen-Review und Policy enforcen an der Grenze.

## Zwei Kernfragen

Vor jeder teamweiten Anbindung:

1. Was fürchten wir am meisten zu verlieren?
2. Was fürchten wir am meisten, dass Codex falsch tut?

Frage 1 → wichtige Assets; Frage 2 → gefährliche Aktionen. Viele Kontrollstrategien drehen sich darum.

## Ein Szenario

- Codex kann Ihr privates Repo lesen
- kann ein berechtigtes Ticketsystem erreichen
- kann Shell-Befehle ausführen
- kann Ergebnisse zurück in Kommentare schreiben

Dann lohnen sich Fragen wie:

- Sieht es Unerlaubtes?
- Tut es Unerlaubtes?
- Trägt es interne Informationen nach außen?

Auf dieser Ebene wird das Bedrohungsmodell zur Risiko-Checkliste vor dem Go-live.

## Bedrohungsüberblick

| Bedrohung | Beschreibung | Milderung |
|---|---|---|
| Prompt Injection | Böswillige Issues/Seiten zu Overreach | Eingabe bereinigen, Read-only-CI, [Injection-Thema](/guide/team-enterprise/security/prompt-injection/) |
| Überrechte | Token, Sandbox zu weit | Least Privilege, Branch Protection |
| Datenexfiltration | Befehle/MCP exportieren Repo-Inhalt | Netzwerkpolicy, DLP, Audit-Hooks |
| Böswillige Erweiterungen | Ungeprüfte Plugins/MCP | [Erweiterungsrisiken](/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Lieferkette | Abhängigkeiten und Skript-Poisoning | Mit bestehendem SCA und Code Review |
| Fehlbedienung | Agent löscht DB, falscher Push | Command deny, CI ohne Push |

## Wann priorisieren

Wenn eine Fähigkeit beides erfüllt, gehört sie früh ins Modell:

- Sie erreicht wichtige Assets
- Sie führt echte Aktionen aus

Beispiele: private Repos lesen, Produktions-APIs, schreibende MCPs, automatischer Code-Push.

## Beim ersten Rollout nicht alles auf einmal

Viele wollen sofort alle Docs, Prozesse und Policies — und landen bei nichts.

Zum ersten Codex-Anschluss oft genug:

1. Top-3 wichtigste Asset-Klassen listen
2. Top-3 Aktionen listen, die der Agent nicht falsch machen soll
3. Für jede der 6 eine direkte Kontrolle

Zum Beispiel:

- Angst vor Prod-Datenleak → Prod-Credentials und Exportpfade zuerst einschränken
- Angst vor Push auf main → Branch Protection und Freigabe
- Angst vor Issue/Web-Ablenkung → externe Eingaben und Read-only-Review straffen

Unvollständig — oft nützlicher als ein großes Dokument, dem niemand folgt.

## Empfohlene Schichten

```text
L1 Identität und Tenant (SSO, Gruppen)
L2 Organisationskonfiguration und Modellpolicy
L3 Repo-Rules + AGENTS.md
L4 Sandbox / Freigabe / Hooks
L5 Menschen-Review und Branch Protection
```

## Häufige Fehler

- Nur trainieren, keine technischen Kontrollen
- Annehmen, das Modell sei „klug genug“
- Produktionsschlüssel auf vom Agent beschreibbaren Pfaden
- Alles auf „Menschen-Review reicht“ reduzieren

## Minimalversion

Zuerst diese drei:

- Risikoaktionen brauchen Freigabe
- Hochsensible Daten default nicht geben
- Automatisierung default Read-only

Damit sinken viele Teamrisiken schon. Feine Governance kann nachziehen.

## Abnahme-Checkliste

- [ ] Top-3 Assets der Organisation benennbar
- [ ] Jede Bedrohung mit Kontrolle oder dokumentierter Risikoakzeptanz
- [ ] Incident-Kontakte abgestimmt

## Verwandte Kapitel

- [Sensibler Kontext](/guide/context/sensitive-context/)
- [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/)

## Quellen

- KimYx0207 Enterprise Security
- OpenAI Enterprise Security Whitepaper (offiziell)
- CodexGuide Compliance-Praxis

---

**Status:** verified  
**Anwendbare Produkte:** Team / Enterprise  
**Prüfgrundlage:** Aktuelle OpenAI-Hinweise zu Plugins, Apps und Integrationen trennen weiterhin Externzugriff, Aktionsrechte, Freigabeanforderungen und Quellsystemgrenzen; diese Seite verdichtet Teamrisikoflächen zu Assets, Vertrauensgrenzen, typischen Bedrohungen und Schichtenkontrollen — ohne Abhängigkeit von einem konkreten Produktschalter.  
**Zuletzt geprüft:** 2026-07-26
