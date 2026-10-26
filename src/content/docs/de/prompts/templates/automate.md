---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Diese Seite liefert eine Vorlage für Automatisierungsaufgaben; interne Links und Vorlagenstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab."
  checkedAt: "2026-07-26"
title: Automatisierungsvorlage
description: Wiederholaufgaben und wiederverwendbare Abläufe.
locale: de
source_locale: zh-CN
source_revision: "2aff2e7"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---


Typischer Irrtum bei Automatisierung: nur „kann es automatisch laufen?“ — ohne vorher zu klären:

- Was bei Fehlschlag?
- Wer sieht das Ergebnis?
- Kann es bei Fehlern sicher stoppen?

Kern der Automatisierungsvorlage: auch bei Problemen steuerbar bleiben.

## Vorlage

```text
Ziel: 【Wiederholaufgabe】 automatisieren als 【Skript/Skill/zeitgesteuerte Aufgabe】.
Trigger: 【manuell / Zeitplan / CI】
Eingaben: 【Datenquelle, Config-Dateien】
Constraints:
- Bei Fehlschlag klarer Exit-Code und Log-Ort
- Keine hartcodierten Secrets; Umgebungsvariablen
- Dry-run-Modus bereitstellen
Abnahme:
- Auf 【Beispieleingabe】 erwartetes Ergebnis
- Docs: Ausführen und Troubleshooting
```

## Wann diese Vorlage passt

- klar regelbasierte Wiederholaufgaben
- Skript- oder Zeitplan-Flows
- zuerst Guards wie dry-run, Logs, Exit-Codes

## Häufige Irrtümer

### 1. Automatisieren = menschliches Urteil ersetzen

Viele praxistaugliche Automationen prüfen, aggregieren oder öffnen nur Entwürfe.

### 2. Einmal gelaufen = automatisierbar

Dauerbetrieb braucht zusätzlich:

- Logs
- Exit-Codes
- dry-run
- Troubleshooting-Hinweise

Wert der Vorlage: langfristig und sicher laufen lassen.

## Verwandt

- [Prompts für lange Aufgaben](/de/prompts/long-running-tasks/)
- [Täglichen Report automatisieren (Fall)](/de/cases/automate-a-daily-report/)
