---
title: Prüfung vor dem Merge
description: Vor dem Merge mit Codex strukturierte Diff- und Risikoprüfung — klare Arbeitsteilung Mensch/Maschine.
locale: de
source_locale: zh-CN
source_revision: ce05ae9
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Prüfung vor dem Merge** bringt [Qualität und Überprüfung](/de/guide/quality/) in den Git-Ablauf: Vor dem PR-Merge prüft Codex Diff, Tests, Sicherheit und Spezifikationskonsistenz. Automatische Kommentare ersetzen kein automatisches Mergen.

## Schwerpunkte dieser Seite

- Arbeitsteilung lokale Prüfung vs. Cloud/CI-Prüfung
- Welche Dimensionen der Prüf-Prompt abdecken soll
- Wann menschliche Endfreigabe Pflicht ist

## Minimal brauchbares Vorgehen

**Lokal (Autoren-Selbstcheck)**

```text
Vergleiche den Diff des aktuellen Branches mit main (noch keinen Code ändern):
1. Geht der Umfang über das Issue hinaus?
2. Gibt es offensichtliche Sicherheitsrisiken (Secrets, Injection, Berechtigungen)?
3. Fehlen Tests oder Dokumentation?
Ausgabe als Checklist mit P0/P1.
```

**CI (Team-Gate)**

- Feste Prompt-Version + nur-lesendes Token
- Ergebnis als PR-Comment oder Check Run
- Siehe [Code-Review-Automatisierung](/de/guide/developer-platform/ci-cd/code-review-automation/)

## Empfohlene Prüfdimensionen

| Dimension | Fokus |
|---|---|
| Korrektheit | Logik, Grenzen, Fehlerbehandlung |
| Tests | Ist neues Verhalten abgedeckt? |
| Sicherheit | Secrets, Injection, Hinweise auf Dependency-Lücken |
| Wartbarkeit | Namensgebung, Duplikate, öffentliche API |
| Spezifikation | Konsistent mit Issue/Spezifikationsdokument |

Kombinierbar mit [Diffs prüfen](/de/guide/quality/review-diffs/); Hochrisiko-Punkte über [Muster für menschliche Freigabe](/de/cases/workflows/human-approval-patterns/).

## Häufige Fehler

- Modell sagt nur «LGTM» ohne konkrete Begründung
- Unbereinigte volle PR-Beschreibung in CI-Prompt (Injection-Risiko)
- Prüfung bestanden, aber CI-Tests nicht gelaufen
- Auto-Merge-Bot ohne Branch Protection

## Sicherheitsgrenzen

- Prüfung mit nur-lesenden Berechtigungen; Fixes in **neuem Commit** durch Menschen auslösen
- Keine Nutzer-PII oder Secrets in Prüflogs

## Abnahme-Checkliste

- [ ] Prüfausgabe auf konkrete Dateien/Zeilen zurückführbar
- [ ] P0-Probleme blockieren den Merge oder sind behoben
- [ ] Abgestimmt mit der Team-Review-Checklist
- [ ] Maintainer entscheidet strittige Punkte endgültig

## Verwandte Kapitel

- [Cloud Code Review](/de/guide/web-and-cloud/code-review/)
- [Pull Request erstellen](/de/guide/web-and-cloud/create-pull-requests/)

---

**Status:** verified  
**Geeignete Produkte:** CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle öffentliche Use Cases zu Code Review / Pull Requests bei OpenAI Developers sowie die bereits geprüften Kapitel zu Qualität, Diff-Prüfung und Cloud. Diese Seite bestätigt nur die stabilen Prinzipien „strukturierte Prüfung vor dem Merge, nur-lesende Prüfung und menschliche Endfreigabe“.  
**Zuletzt geprüft:** 2026-07-26
