---
title: Cloud-Code-Review
description: Diffs, PRs und automatisierte Review-Vorschläge aus Cloud-Aufgaben prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

Cloud erzeugt Änderungen — trägt aber nicht die Merge-Verantwortung.

Nach Cloud-Aufgaben bleibt **Menschen-Review** die letzte Tür vor dem Merge. Diese Seite erklärt Remote-Agent-Output zu prüfen und mit GitHub-PR, CI und Skill-Review zu verknüpfen.

## Inhalt

- Unterschiede Cloud-PR vs. lokales PR-Review
- Checkliste und typische Risiken
- Codex als Review-Hilfe ohne Verantwortungsabgabe

## Warum Cloud-Review mehr Aufmerksamkeit braucht

Remote-Agents neigen eher zu:

- Unrelated Dateien mitändern
- Umgebungsdrift → große Lockfile-/Generierungs-Diffs
- Tests „gelaufen“, aber kritische Logik ungedeckt
- Vollständige PR-Beschreibung, deren Inhalt Sie noch nicht verifiziert haben

Cloud-Review wird nicht leichter — Fokus wichtiger.

## Position im Ablauf

```text
Cloud-Aufgabe fertig → Branch pushen → PR öffnen
        ↓
CI (Tests, Lint, Security-Scan)
        ↓
Menschen-Review Diff + optional Agent-Hilfe
        ↓
Merge freigeben (Branch Protection)
```

PR öffnen: [Pull Request erstellen](/guide/web-and-cloud/create-pull-requests/)

## Mindeststandard

Vor dem vollständigen Review mindestens:

1. Änderungsbereich nicht abgeschweift?
2. Kernlogik wirklich am Ziel?
3. Tests/Verifikation wirklich gemacht?
4. Keine Secrets oder gefährlichen Änderungen eingeschleppt?

Ohne diese vier ist „Aufgabe fertig“ ≠ „mergebar“.

## Menschen-Review-Checkliste

Konsistent mit [Diffs reviewen](/guide/quality/review-diffs/); Cloud zusätzlich:

| Prüfpunkt | Grund |
|---|---|
| Unrelated Dateien? | Remote-Agent „räumt nebenbei“ |
| Lockfile / generierte Dateien | Umgebungsdrift |
| Herkunft neuer Abhängigkeiten | Lieferkettenrisiko |
| Tests decken neue Logik? | Agent schreibt leere Tests |
| Auth-/Permission-Änderungen | Privilege Escalation, hardcodierte Tokens |
| Scope = Issue | Scope Creep verhindern |

## Häufige Missverständnisse

### 1. CI grün = mergebar?

CI sagt nur: diese Checks sind durch. Verständnis, Scope und akzeptables Risiko bleiben menschlich.

### 2. Vollständige PR-Beschreibung = weniger lesen?

Nein.

Beschreibung beschleunigt Kontext — ersetzt keine Faktenprüfung.

### 3. Nochmal Codex-Review = Review erledigt?

Hilfreich — Verantwortung bleibt beim Menschen.

## Codex als Review-Hilfe (kein Ersatz)

Akzeptabel:

- Lokal oder Cloud `$pr-review`-Skill auf neuem PR ([Skill erstellen](/skills/create-your-first-skill/))
- Meinungen in „Blocker / Vorschlag / nit“
- **Sie** bestätigen Blocker einzeln

Nicht akzeptabel:

- Ohne Diff-Lesen nur wegen „Agent sagt ok“ mergen
- Agent approve geschützte Branches selbst

Siehe [Verifikation und Menschen-Review](/guide/foundations/verification-and-human-review/)

## Empfohlene Reihenfolge

1. PR-Titel und Beschreibung → Ziel
2. Hauptlogik-Diff
3. Tests, generierte Dateien, Config
4. Automatisierte Kommentare und Ergänzungen

So ertrinken Sie nicht sofort in Details.

## Review-Kommentare steuern Nacharbeit

Nach Review-Kommentaren:

1. Neue Cloud- oder lokale Aufgabe: „Nur diese Review-Kommentare, Scope nicht erweitern“
2. Kommentar-Links oder Nummern anhängen
3. Neue Commits auf denselben PR
4. CI erneut + Menschen-Blick aufs Delta

GitHub-Seite: [GitHub-Integration](/guide/integrations/github/)

## Mit Automations

- Bei PR-Open Review-Skill (nur Kommentar, kein Merge)
- Siehe [Geplante und getriggerte Aufgaben](/skills/automations/scheduled-tasks/)

## Häufige Fehler

- Cloud-„Isolation“ als Freibrief, Security-Review zu überspringen
- Riesige Diffs mergen weil „CI grün“
- Review-Kommentare mit unredaktierten Prod-Logs
- „Ich habe nichts gefunden“ = „Es gibt nichts“

## Abnahme-Checkliste

- [ ] CI grün und Retry-Historie verstanden
- [ ] Mindestens eine Person hat Hauptlogik-Diff gelesen
- [ ] Scope = Issue/Aufgabenbeschreibung
- [ ] Keine Secrets im Repo

## Quellen
- [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/)
---

**Status:** outdated  
**Anwendbare Produkte:** Cloud / GitHub  
**Prüfhinweis:** Prinzip „Cloud-Output braucht Menschen-Review“ stimmt; konkrete Cloud-PR-, Auto-PR- und Remote-Review-Takte ändern sich schnell — an aktueller offizieller Flow neu ausrichten.  
**Zuletzt geprüft:** 2026-07-26
