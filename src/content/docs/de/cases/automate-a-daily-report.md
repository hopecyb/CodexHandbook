---
caseCategory: team
directoryOrder: 110
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin wiederholbare Automatisierungsszenarien wie „Automate bug triage“ und „Turn feedback into actions“. Diese Seite definiert den Tagesbericht als „Markdown in festem Format + klarer Exit-Code + wiederverwendbares Skript oder Skill“ — ein stabiles Automatisierungs-Workflow-Muster, das nicht von einer einzelnen Integration abhängt."
  checkedAt: "2026-07-26"
title: Einen Tagesbericht automatisieren
description: Wiederkehrende Zusammenfassungsarbeit als wiederverwendbares Skript oder Skill verfestigen.
locale: de
source_locale: zh-CN
source_revision: 2149e0a
translation_status: reviewed
translated_at: 2026-10-24
reviewed_at: 2026-08-26
---

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Teams |
| Client | CLI |
| Geschätzte Dauer | 1–2 Stunden (erste Version) |

## 1. Ziel und Kontext

**Ziel:** Täglich automatisch Änderungszusammenfassung, Testergebnisse und Todo-Liste erzeugen.

**Erfolgskriterien:** Ein Befehl oder Skill liefert Markdown in festem Format; bei Fehlern gibt es einen klaren Exit-Code.

## 2. Empfohlener Prompt

```text
Ziel: Markdown-Tagesbericht von gestern bis jetzt erzeugen.
Inhalt: git-log-Zusammenfassung, CI-Status (falls lesbar), Liste offener PRs.
Ausgabe: reports/daily-YYYY-MM-DD.md
Einschränkungen: Nur lesend auf git; kein push; scripts/generate-daily.sh bereitstellen, damit der Lauf wiederholbar ist.
```

## 3. Verstetigen

- [Beispiel Automatisierungs-Skill](/de/skills/examples/automation-skill/)
- [Geplante Aufgaben](/de/skills/automations/scheduled-tasks/)
