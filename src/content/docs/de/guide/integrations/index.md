---
legacyVerification:
  status: "verified"
  products: "Integrations"
  basis: "OpenAI Help Center zu Plugins/Apps betont weiterhin: Integration über Plugins, Apps und Templates; Admins steuern Rollen, Lese-/Schreibaktionen, Bestätigung und Datengrenzen. Fokus: Designprinzipien, Berechtigungsschichtung, Einführungsreihenfolge — nicht flüchtige UI eines externen Systems."
  checkedAt: "2026-07-26"
title: Integrationen (Überblick)
description: "GitHub, Ticketsysteme, Chat und interne Plattformen an Codex — Grenzen, Berechtigungen und Rückkopplung."
sidebar:
  order: 55
locale: de
source_locale: zh-CN
source_revision: "140102c"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---

Codex-Integration heißt nicht nur „noch ein Tool anschließen“, sondern den Agent in deine bestehenden Arbeitsabläufe zu setzen: Code-Hosting, Ticketfluss, Notifications, interne Plattformen, Wissensbasen.

Vor dem Bau klären:

- Wer darf die Automatisierungskette auslösen
- Was Codex lesen und zurückschreiben darf
- Bei Fehlern: wer erfährt es, wer verantwortlich ist, wie Rollback

## Was Integration verändert

**Integration** = Codex nicht nur im Chat, sondern in den Systemen, die du ohnehin nutzt.

Zum Beispiel:

- GitHub: PRs lesen und Kommentare einreichen
- Ticketsystem: Hintergrund lesen, Handlungsvorschläge erzeugen
- Nach Aufgabenabschluss Ergebnis in den Chat

Integration ändert, ob Codex in echte Workflows eintritt — oder nur im Dialog antwortet.

## Häufige Missverständnisse

### Mehr Integration ≠ besser

Viele Teams wollen GitHub, Jira, Slack, Wissensbasis, interne APIs auf einmal.

Erster Pilot: **eine möglichst kurze Kette mit erkennbarem Nutzen**.

Realistisch:

- Mehr Anschlüsse → unklarere Berechtigungsgrenzen
- Fehler schwerer zu lokalisieren
- Team verliert Vertrauen

### „Kann automatisch“ ≠ „soll sofort automatisch“

Versuchung: sofort Status ändern, Code ändern, benachrichtigen, mergen.

Üblicher Start:

- Zuerst lesen
- Dann Vorschläge erzeugen
- Dann menschliche Bestätigung
- Zuletzt Auto-Writeback erwägen

Grenzen und Verantwortung bleiben klarer.

## Drei Fragen vor der Integration

### 1. Daten lesen oder Systemzustand ändern?

| Typ | Risiko | Empfehlung |
|---|---|---|
| Nur Lesen | Relativ niedrig | Hier starten |
| Entwurf / Kommentar | Mittel | Menschliches Review |
| Status ändern / PR öffnen / Nachricht | Höher | Begrenzt + Audit + Rollback |

Viele wollen sofort „auto ändern“ — Schritt 1 oft nur **Kontext lesen und vorschlagen**.

### 2. Synchron oder asynchrone Automation?

| Szenario | Besser geeignet |
|---|---|
| In der Session Issue abfragen | MCP / interaktive Aufgabe |
| Nach PR-Öffnung Review-Entwurf | Cloud / CI / Automation |
| Tägliche Statuszusammenfassung | Cron / Hintergrundautomation |

Dasselbe System, mehrere Anschlüsse — nicht zwingend vereinheitlichen.

### 3. Menschen helfen oder Entscheidungen ersetzen?

Default: Codex auf der **Vorschlagsebene**, nicht als Endentscheider.

Zum Beispiel:

- PR-Review-Kommentarentwurf automatisch
- Issue-Zusammenfassung automatisch
- Standardmäßig weder automatisch zusammenführen noch Produktionskonfigurationen ändern oder Tickets mit hohem Risiko schließen

## Häufige Integrationstypen

### GitHub und Code-Hosting

Häufigste und reifste Klasse.

Geeignet:

- Cloud-Aufgabe: Repo lesen, Branch, PR
- CI: nicht-interaktives Review
- Nach Review-Kommentar zweite Fixes

Einstieg: [GitHub-Integration](/de/guide/integrations/github/) und [Web und Cloud](/de/guide/web-and-cloud/).

### Tickets und Projektmanagement

Linear, Jira, Trello oder interne Bedarfssysteme.

Geeignet:

- Vor Codeänderung Issue-Hintergrund lesen
- Nach Labels/Status Routing-Vorschläge
- Iterationsfortschritt zusammenfassen

Oft zuerst **Nur-Lese-MCP + Skill-Flow**.

### Chat und Notifications

Slack, Mail, Enterprise-IM.

Geeignet:

- Fertig / Fail / Freigabe wartend benachrichtigen
- Täglicher/wöchentlicher Report, Änderungszusammenfassung

Achtung: Notification ≠ einziges Audit; wichtige Aufgaben behalten Logs und Ticket-Spuren.

### Interne Plattformen und Wissensbasen

Developer-Portal, Runbook, interne APIs, Docs-Site.

Geeignet:

- Teamnormen und On-Call-Handbücher in den Kontext
- Codex interne Fähigkeiten in festen Grenzen

Hier zählen **Berechtigungsschichtung und Inhaltsvertrauen**.

## Vor der Umsetzung entscheiden

Schnell „lohnt sich zuerst?“:

1. Wiederholt sich die Arbeit im Team schon
2. Entsteht Wert vor allem durch Lesen und Ordnen
3. Kann Mensch bei unvollkommenem Ergebnis leicht auffangen

Alle drei ja → gute Erstkandidaten.

## Empfohlene Einführungsreihenfolge

Risiko aufsteigend:

1. Eine externe Quelle nur-lesend
2. Codex erzeugt Zusammenfassung/Vorschlag, führt nicht aus
3. Menschliche Freigabe und Notification
4. Zuletzt Auto-Writeback

Zuerst Wert beweisen, dann Berechtigungen erweitern.

## Minimal nutzbares Integrationsschema

Beispiel „PR erzeugt Review-Entwurf automatisch“:

1. GitHub löst Aufgabe aus
2. Codex liest Diff und Regeln
3. Kommentarentwurf oder Checkliste
4. Mensch bestätigt, ob übernehmen

Leichter live und vertrauenswürdiger als „auto ändern und auto mergen“.

## Risikokontroll-Checkliste

- [ ] Owner je Integration klar
- [ ] Drei Stufen: nur lesen / kommentieren / schreiben
- [ ] Nachvollziehbar: was gelesen, was geschrieben
- [ ] Fail → Notification, nicht Zufallsentdeckung
- [ ] Sensible Daten: Security-Assessment

Erste Integration: Codex zuerst „sehen“ und „vorschlagen“ lassen — leichter als sofort „ändern“ und „ausführen“.

## Navigation in diesem Kapitel

| Integration | Seite |
|---|---|
| GitHub | [GitHub-Integration](/de/guide/integrations/github/) |
| Slack / Linear / Jira usw. | Offizielle Doku und MCP/Automation-Kapitel; Handbuch ergänzt schrittweise |

## Bezug zu anderen Kapiteln

- Connectoren und Packaging: [Plugins-Überblick](/de/skills/plugins/plugins-overview/)
- Externe Daten: [MCP-Überblick](/de/skills/mcp/mcp-overview/)
- Zeitgesteuert und Hintergrund: [Geplante und Hintergrundaufgaben](/de/skills/automations/scheduled-tasks/)
- Cloud-Repo-Kollaboration: [Web und Cloud](/de/guide/web-and-cloud/)

## Quellen
- Offizielle OpenAI-Codex-Integrations- und Entwicklerdokumentation
