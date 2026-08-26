---
title: "Fall: Issue-Triage und Label-Vorschläge"
description: Mit Codex neue Issues lesen und Labels sowie Zuständige vorschlagen — leichte Team-Automatisierung.
locale: de
source_locale: zh-CN
source_revision: 23380ad
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Maintainer, PM |
| Client | Cloud oder CLI + GitHub |
| Geschätzte Dauer | 60 Minuten |
| Prüfdatum | 2026-07-25 |

## 1. Ziel und Kontext

**Ziel:** Für neu geöffnete Issues strukturierte Vorschläge erzeugen: `type`, `priority`, empfohlene Labels, ob Security-Review nötig.

**Erfolgskriterien:**

- JSON-Ausgabe von GitHub Action parsebar
- Issues nicht automatisch schließen/mergen — nur kommentieren oder Labels setzen (braucht Workflow-Berechtigung)
- Keine Secret-Leaks

**Außerhalb des Umfangs:** Automatische Sprint-Zuweisung, Meilenstein-Änderungen.

## 2. Vorbereitung

- Repo hat `CONTRIBUTING.md` oder Issue-Templates mit Label-Bedeutung
- Label-System in `AGENTS.md` beschrieben
- Nur-lesen oder eingeschränktes `issues: write`-Token

## 3. Workflow (EPXV-Kurzfassung)

**Erkunden:** `@.github/ISSUE_TEMPLATE/` und Label-Verteilung der letzten 10 geschlossenen Issues.

**Planen:** JSON-Schema definieren: `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Ausführen:** `codex exec` mit Issue-Title + Body (auf [Prompt-Injection](/de/guide/team-enterprise/security/prompt-injection/)-Bereinigung achten).

**Überprüfen:** An 3 historischen Issue-Fixtures mit menschlichen Labels vergleichen; Übereinstimmung > 80 %, bevor live.

## 4. Fehler und Wiederherstellung

- Modell schlägt falsche Labels vor: manuell überschreiben + Gegenbeispiele als Few-Shot in den Prompt
- Bösartiger Issue-Body: HTML strippen, Längenlimit, Anweisungen im Body nicht ausführen

## 5. Verstetigen

- Optional an internes Ticketsystem über [Webhook](/de/guide/developer-platform/webhooks/overview/) anbinden
- Retro in die [Fallvorlage](/de/cases/use-cases/case-study-template/) schreiben

## 6. Verwandte Kapitel

- [GitHub-Integration](/de/guide/integrations/github/)
- [Muster für menschliche Freigabe](/de/cases/workflows/human-approval-patterns/)

---

**Status:** verified  
**Geeignete Produkte:** CLI / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle öffentliche Use Cases zu automatisiertem Bug-Triage / Review bei OpenAI Developers sowie die bereits geprüften Kapitel zu menschlicher Freigabe, Webhooks, GitHub-Integration und Team-Automatisierung. Diese Seite bestätigt nur das stabile Automatisierungsmuster „strukturierte Label-Vorschläge erzeugen, menschliche Endentscheidung behalten“.  
**Zuletzt geprüft:** 2026-07-26
