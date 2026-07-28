---
title: Muster für menschliche Freigabe
description: Wann freigeben, ablehnen oder Codex anhalten — und wie man diese Regeln klar formuliert.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Freigabe hält irreversible Aktionen beim Menschen. Diese Seite fasst gängige Muster zusammen.

## Freigabe-Schichten

```text
Automatisch sichere Zone (lesen, analysieren, planen)
    ↓
Bestätigungszone (Dateien schreiben, Befehle ausführen, Netz)
    ↓
Zwang zum Menschen (push, Daten löschen, nach außen senden, Produktionsconfig ändern)
```

Konkrete Dialoge variieren je nach [Produkteinstieg](/guide/); das Prinzip ist gleich.

## Muster 1: Zuerst planen, dann ausführen

```text
Regel: Ohne meine «Plan freigeben»-Antwort dürfen keine Repository-Dateien geändert werden.
```

Geeignet: unbekannte Codebasis, produktionsnah, großer Diff.

## Muster 2: Befehl-Whitelist

In [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/) festhalten:

```md
Ohne Nachfrage erlaubt: pnpm test, pnpm lint, git status, git diff
Jedes Mal bestätigen: git push, npm publish, Datenbank-Migrationen
```

Bei Konflikt mit Hosting-Policy gilt die **strengere** Regel.

## Muster 3: Zweistufiges Mergen

1. Codex öffnet Draft-PR oder lokalen Branch
2. Mensch merged nach CI + Review

Cloud-Szenarien: [Pull Request erstellen](/guide/web-and-cloud/create-pull-requests/).

## Muster 4: Nur-lesen-Aufklärung

```text
Diese Runde nur lesen: Dateien lesen, Tests laufen lassen, lokale API curl’en;
Schreiben auf Disk und git commit verboten.
```

Für Audits, Lernen fremder Projekte, Diagnose von Produktionsproblemen.

## Wann ablehnen und neu starten

| Signal | Empfehlung |
|---|---|
| Plan passt nicht zum Ziel | Ausführung ablehnen, Planüberarbeitung verlangen |
| Änderungsumfang wächst | Stoppen, Aufgabe zerlegen |
| Tests übersprungen | Merge ablehnen, Überprüfung nachfordern |
| Ein Befehl ist unerklärlich | Ablehnen, Erklärung verlangen |

## Verhältnis zu Automations

Auch unbeaufsichtigte Aufgaben brauchen bei Design menschliche Bestätigungspunkte; siehe [Geplante und Hintergrundaufgaben](/skills/automations/scheduled-tasks/).

## Häufige Fehler

- Dauerhaft «immer erlauben» anhaken und Risiken vergessen
- Freigabe als Formsache, Diff nicht lesen
- Mündliches «nicht übertreiben» statt klarer Muster

## Abnahme-Checkliste

- [ ] Vor Aufgabenstart erklärt, welches Freigabemuster gilt
- [ ] Hochrisiko-Aktionen haben Zweit-Review oder CI-Gate
- [ ] Team hat einheitliche Policy für `git push` & Co.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle offizielle Leitlinien zu Autonomy / Approval Boundaries bei OpenAI Developers sowie die bereits geprüften Kapitel zu Freigabe, Befehlsregeln, PR und Automatisierung. Diese Seite bestätigt nur das stabile Kollaborationsprinzip „welche Aktionen automatisch weiterlaufen und welche für Menschen stoppen“.  
**Zuletzt geprüft:** 2026-07-26
