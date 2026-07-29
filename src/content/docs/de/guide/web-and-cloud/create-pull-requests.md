---
title: Pull Request erstellen
description: 'Von der Cloud-Aufgabe zum reviewbaren PR — Beschreibung, Umfang und menschliches Merge-Gate.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Beim ersten Cloud-Workflow ist die Aufgabe oft fertig — die Änderung aber noch nicht in einem Zustand zum Prüfen und Diskutieren. In der Teamkollaboration übernimmt das der **Pull Request**.

Ein PR ist ein reviewbarer Änderungsantrag.

Er bündelt was geändert wurde, warum, und ob getestet — an einem Ort. Cloud-Aufgaben landen für das Team oft hier.

## Inhalt

- End-to-End-Erwartung von Cloud-Aufgabe zu PR
- Was die PR-Beschreibung für Mensch und CI enthalten sollte
- Wann kein Auto-PR

## Wann einen PR öffnen

Wenn andere reviewen, CI laufen oder Merge in den Hauptbranch nötig ist: nicht bei „Branch ist fertig“ stehen bleiben — weiter zum **reviewbaren PR**.

## Empfohlener Workflow

```text
GitHub verbinden → Issue/Ziel klar → Cloud-Aufgabe (Plan bestätigen) → Branch pushen → PR öffnen → Menschen-Review + CI → Merge
```

Voraussetzung: [GitHub verbinden](/guide/web-and-cloud/connect-github/)

## Warum nicht sofort Auto-Merge

Der PR lässt Mensch und System prüfen — er ist mehr als „Code hochschieben“.

Üblich:

- Codex kann den PR öffnen
- Menschen entscheiden über Merge

So bleibt bei schiefer Richtung noch eine Prüfung.

## Prompt-Punkte für die Aufgabe

```text
Ziel: Login-Timeout aus #42 beheben
Branch: fix/42-login-timeout
Umfang: nur packages/auth und zugehörige Tests
Fertig: PR gegen main öffnen, nicht mergen
PR-Beschreibung muss enthalten: Ursache, Änderungszusammenfassung, Testbefehle und Ergebnisse, Risiko und Rollback
```

Konsistent mit [Done definieren](/prompts/define-done/) und [Anatomie einer guten Aufgabe](/prompts/task-anatomy/).

## Eine gute PR beantwortet mindestens vier Fragen

1. Warum diese Änderung?
2. Was genau wurde geändert?
3. Wie verifiziert?
4. Welche Risiken, Limits oder Lücken bleiben?

Fehlen diese Punkte, muss der Reviewer Kontext nachholen.

## PR-Qualitätscheckliste

- [ ] Titel sagt „was“, nicht „Code aktualisiert“
- [ ] Issue-Nummer verknüpft
- [ ] CI grün oder bekannte Fehler erklärt
- [ ] Diff-Größe im Teamrahmen; sonst splitten
- [ ] Keine Secrets, kein Formatierungssturm
- [ ] Screenshots/Logs bei UI-/Verhaltensänderungen

## Menschliches Gate

Auch wenn Codex PRs öffnen kann: **Merge** default durch Menschen (oder kontrollierter Bot + Branch Protection):

Siehe [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/)

## Häufige Missverständnisse

### 1. Mehrere unzusammenhängende Änderungen in einem PR

Schwer zu lesen und zurückzurollen.

### 2. Nur „behoben“, ohne Verifikation

Unklar, ob wirklich getestet oder „sollte passen“.

### 3. Codex direkt auf den Hauptbranch

Für Solo-Experimente vielleicht ein Schritt weniger — für Kollaborationsrepos zu riskant.

## Mit Review-Automatisierung

- Skill oder CI-`codex exec` für **ergänzende Review-Kommentare**
- Auto-Merge braucht eigene Governance — nicht Einsteiger-Default

## Häufige Fehler

- PR mit mehreren unzusammenhängenden Features
- Beschreibung „AI-generierte Änderung“ ohne Testangaben
- Direkt auf main mergen und Review umgehen

## Weiterlesen

- [GitHub-Integration](/guide/integrations/github/)
- [Diffs reviewen](/guide/quality/review-diffs/)
- [Desktop-App: Diff und Kommentare](/guide/desktop-app/diffs-comments-and-review/)

---

**Status:** outdated  
**Anwendbare Produkte:** Cloud / Web  
**Prüfhinweis:** „Cloud-Output in PR, dann Menschen-Review“ bleibt solide; konkrete PR-Einstiege, Automatisierung und Cloud-Takt brauchen Abgleich mit aktuellen offiziellen PR-/GitHub-Integrationsdetails vor `verified`.  
**Zuletzt geprüft:** 2026-07-26
