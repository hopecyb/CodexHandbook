---
title: Was ist AGENTS.md
description: "Persistente Projektanweisungsdatei — der «Kollaborationsvertrag» für Codex, keine Architektur-Enzyklopädie."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


`AGENTS.md` ist eine **Markdown-Projektanweisung** im Repo (oder Unterverzeichnis). Codex liest sie beim Betreten des Projekts, um Coding-Stil, Testanforderungen, Commit-Normen und Tabuzonen auszurichten.

Stellen Sie sich `AGENTS.md` als Anleitung vor, „wie dieses Projekt mit Codex zusammenarbeiten will“.

Es ist weder ein High-Level-Architektur-Dokument noch das vollständige Handbuch für menschliche Neueinstellungen, sondern die Projekt-Kollaborationsregeln für Codex.

## Ein Kernkonzept

Eine **komprimierte Einsteiger-Checkliste für neue Kolleginnen und Kollegen**: nur „wie man in diesem Repo arbeitet“, keine Firmengeschichte.

| Geeignet für AGENTS.md | Nicht geeignet |
|---|---|
| Tests, Lint, Build ausführen | Vollständige API-Doku (auf formale Docs verlinken) |
| Verzeichnis- und Namenskonventionen | Tausende Zeilen historischer Designentscheidungen |
| Verbote (z. B. `main` nicht ändern, keine Secrets committen) | Temporäre Anforderungen, die sich pro Aufgabe ändern |
| Commit-Messages, PR-Checklisten | Persönliche Vorlieben ohne Codebezug |

## Minimal nutzbares Vorgehen

Im Repo-Root `AGENTS.md` anlegen:

```md
# Projektanweisungen

## Build und Tests
- Installation: `pnpm install`
- Tests: `pnpm test` (nach Logikänderungen Pflicht)
- Typcheck: `pnpm typecheck`

## Code-Stil
- TypeScript Strict Mode
- Neue Komponenten in `src/components/`, Dateiname PascalCase

## Verbote
- `pnpm-lock.yaml` nicht ändern, außer bei Dependency-Änderungen
- Keine `.env` oder API-Keys committen
- Kein `git push` ohne Bestätigung

## Definition of Done
- Relevante Tests grün
- Keine neuen Lint-Fehler
- Im PR-Beschreibung Verifikationsschritte nennen
```

Danach in neuen Aufgaben nur die **Differenz dieser Runde** schreiben, z. B.: „Layout-Bug der Login-Seite unter Safari beheben, Abnahme nach AGENTS.md.“

## Häufige Missverständnisse

### 1. Muss ich diese Regeln jedes Mal manuell wiederholen?

Meist nicht.  
Genau das leistet `AGENTS.md`: **stabile Projektregeln** ablegen, damit neue Aufgaben sie nicht erneut erklären müssen.

### 2. Heißt „geschrieben“ automatisch „Codex macht es zu 100 %“?

`AGENTS.md` ist wichtig, arbeitet aber zusammen mit:

- klaren Anforderungen dieser Aufgabe
- Berechtigungs- und Freigabemechanismen des Produkts
- Sandbox, Netzwerk und Teamrichtlinien

Es hilft beim Ausrichten — es ist kein Allzweck-Zwangsmittel.

### 3. Muss ich das als Nicht-Entwickler kennen?

Das Grundkonzept ja.  
Auch ohne selbst zu coden: Solange Codex dauerhaft an einem Projekt arbeitet, reduziert `AGENTS.md` Wiederholung und Drift.

## Wohin legen

| Ort | Geltungsbereich |
|---|---|
| Repo-Root `AGENTS.md` | Standard für das ganze Projekt |
| Unterverzeichnis-`AGENTS.md` | Dieses Verzeichnis und Unterpfade (häufig im Monorepo) |
| Benutzerhinweise | Persönliche Config oder globale Vorlieben — nicht mit Projektanweisungen vermischen |

Geltungsbereich und Konflikte: [Geltungsbereich und Priorität](/guide/customization/agents-md/scope-and-precedence/).

## Unterschied zu Skill und Slash-Befehlen

| Mechanismus | Wesen | Typische Nutzung |
|---|---|---|
| AGENTS.md | Persistente, passive Projektregeln | Stil, Tests, Tabuzonen |
| Skill | Wiederverwendbares Workflow-Paket (`SKILL.md`) | Release-Checkliste, Spezial-Review |
| Slash-Befehl | Von Ihnen ausgelöster Shortcut | `/review`, einmalige Workflows |

Projektregeln → `AGENTS.md`; **wiederholbare, teilbare Schrittfolgen** besser als [Skill](/skills/overview/).

## Wohin schreiben

Unsicher? Regel:

- **Gilt langfristig** → eher `AGENTS.md`
- **Nur diese Aufgabe** → aktueller Aufgaben-Prompt
- **Wiederholbare Schrittfolge** → Skill erwägen

Beispiele:

- „Dieses Repo prüft einheitlich mit `pnpm test`“ → `AGENTS.md`
- „Diesmal nur Login-Seite, Registrierung nicht anfassen“ → aktuelle Aufgabe
- „Vor jedem Release dieselbe Check-Pipeline“ → eher Skill

## Häufige Fehler

- Datei zu lang, Modell liest nur den Anfang — **harte Constraints in die ersten 30 Zeilen**
- Hochrisiko wie „immer auto-push“ — Konflikt mit [Berechtigungen und Freigabe](/guide/foundations/permissions-and-approvals/)
- Niemand pflegt es; Doku und echte Skriptbefehle divergieren

## Sicherheitsgrenzen

`AGENTS.md` **ersetzt** Sandbox und Freigabe **nicht**. Selbst „Befehle beliebig ausführen“ kann weiterhin Bestätigung verlangen; Team-Managed-Policies können weiter einschränken.

`AGENTS.md` sagt Codex, „wie dieses Projekt üblicherweise arbeitet“ — nicht, was Sie genau diesmal tun wollen.

## Quellen

- OpenAI-Codex: Projektkontext
- freestylefly/CodexGuide: `docs/advanced/02-agents-md.md`
- stormzhang/ai-coding-guide: `codex/11-agents-md.md`

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle OpenAI-Developers-Hinweise zu Projektkontext, Aufgabengrenzen und Freigabe/Sandbox; Inhalt beschränkt auf Zweck, Grenzen und gängige Schreibweisen von `AGENTS.md`, ohne unbestätigte Zwangsprioritätsdetails.  
**Zuletzt geprüft:** 2026-07-26
