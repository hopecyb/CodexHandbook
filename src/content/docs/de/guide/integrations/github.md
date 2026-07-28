---
title: GitHub-Integration
description: "Repo-Anbindung, PR, Review und CI — Codex in GitHub-Workflows."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

GitHub ist die häufigste Code-Kollaborationsfläche für Codex: Cloud-Aufgaben, PR-Review, Actions und lokaler Push teilen Branches und Berechtigungen.

Hier: Wie Codex in „Repo, Branch, PR, Review“ einsteigt.

Auch ohne Senior-Dev-Hintergrund zuerst:

- Wo liegt der Code
- Wie werden Änderungen zur Ansicht vorgeschlagen
- Wie laufen Review und Merge

## Fähigkeitskarte

| Fähigkeit | Typischer Einstieg | Handbuch |
|---|---|---|
| Remote-Repo verbinden | Cloud-Einstellungen | [GitHub verbinden](/guide/web-and-cloud/connect-github/) |
| Cloud: Code ändern, PR öffnen | Cloud-Aufgabe | [Pull Request erstellen](/guide/web-and-cloud/create-pull-requests/) |
| Lokal Diff prüfen | Desktop-App / IDE | [Diffs und Kommentare](/guide/desktop-app/diffs-comments-and-review/) |
| Codex in CI | GitHub Actions | Roadmap `08-developer-platform/ci-cd/` |
| PR Auto-Review-Kommentar | Actions + exec | [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/) |

## Empfohlene Teamnorm

```md
## GitHub × Codex (kann in AGENTS.md)

- Default Branch-Schutz main; Codex nur Feature-Branches pushen
- PR muss Issue verlinken; Beschreibung mit Testnachweis
- Codex mergt keine PRs, außer Release-Bot klar autorisiert
- Secrets: GitHub Secrets / Environment Secrets — nicht in den Prompt
```

## Cloud vs. lokales Git

| | Lokaler Clone | Cloud |
|---|---|---|
| Codequelle | Arbeitsbereich auf Ihrer Maschine | Remote-Clone |
| Ungepushte Commits | Sichtbar | Unsichtbar — zuerst push |
| Umgebung | Ihre Node-/Systemversion | Konfiguriertes Image |
| Geeignet | Alltag | Asynchrone Langaufgaben, Standard-Builds |

## Review-Workflow

1. Codex oder Mensch öffnet PR
2. Mensch liest Diff (oder `$pr-review`-Skill)
3. CI läuft Tests
4. Kommentare treiben Revision — neue Codex-Aufgabe „nur Review-Kommentare“
5. Mensch mergt

## Häufige Missverständnisse

### 1. GitHub-Integration ≠ „Codex entwickelt automatisch für mich“

Häufiger:

- Repo-Kontext lesen
- Diff oder Review ordnen
- Beim Öffnen von PRs und Beheben von Kommentaren helfen

### 2. PR / Review noch unklar?

Grob:

- **PR**: Ihre Änderung formell zur Ansicht vorschlagen
- **Review**: Andere prüfen die Änderung

Reicht für den Großteil dieser Seite.

### 3. Beim ersten Kontakt zuerst trennen

Nicht zuerst Token oder Actions — sondern:

> **Lokale Änderung, Cloud-Repo und PR-Review sind drei verschiedene Dinge.**

GitHub-Integration schließt Codex an bestehende Code-Kollaboration an.

## Sicherheit

- GitHub-Token-Scope minimal
- Vorsicht bei sensiblen Actions-Mustern wie `pull_request_target` (Injection)
- Automation auf Fork-PRs braucht extra Isolation

## Häufige Fehler

- Cloud-Aufgabe nimmt ungepushte lokale Änderungen an
- Codex führt unbereinigte Anweisungen in PR-Beschreibungen aus (Prompt-Injection)
- Derselbe PR mischt Formatierung und Feature-Änderung

## Quellen
- OpenAI-Codex-GitHub-Integrationsdokumentation
---

**Status:** verified  
**Gilt für:** Cloud / App / CLI  
**Prüfgrundlage:** OpenAI Developers Codex-Use-Cases enthalten weiterhin „Review GitHub pull requests“; Help Center zu Plugins/Integrationen betont Repo-Zugriff über App-Berechtigungen, Rollen und Aktionsgrenzen. Seite fasst Kollaborationsposition von Repo, Branch, PR, Review, CI sowie Sichtbarkeitsunterschied lokal vs. Cloud zusammen.  
**Zuletzt geprüft:** 2026-07-26
