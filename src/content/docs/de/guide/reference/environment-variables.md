---
title: Umgebungsvariablen
description: 'Zweck, Schichten und Sicherheit Codex-bezogener Umgebungsvariablen — ergänzender Index zur Konfigurationsreferenz.'
locale: de
source_locale: zh-CN
source_revision: 603ee7b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Bei Umgebungsvariablen landen viele in Extremen: zu „low-level“ oder „alles reinpacken“. Direkt gesagt: Zur Laufzeit Werte an Programme übergeben — besonders für Sensitive und Schalter.

Umgebungsvariablen dienen oft dazu, **Keys zu injizieren, Schalter zu überschreiben, CI anzupassen**, ohne Sensitive in Config-Dateien oder Git. Konzeptindex; konkrete Namen: [offizielle Docs](https://developers.openai.com/codex) und `codex --help`.

## Inhalt dieser Seite

- Was eher Env-Var als Config-Datei
- Arbeitsteilung Nutzer, Projekt, Cloud Secrets, CI
- Typische Namen und Leak-Risiken

## Entscheidungsweise

Priorität Env-Var, wenn mindestens eines zutrifft:

- Nicht ins Git
- Variiert nach Maschine, Nutzer, Umgebung
- Nur für diesen Lauf

Deshalb Tokens, temporäre Schalter, CI-Injection oft als Env-Var statt hardcodiert.

Config-Schlüssel: [Konfigurationsreferenz](/de/guide/reference/configuration-reference/); Cloud: [Secrets und Variablen](/de/guide/web-and-cloud/secrets-and-variables/).

## Was in Env-Vars gehört

| Typ | Beispielabsicht | Nicht |
|---|---|---|
| Auth-Token | API-Key, GitHub PAT | Ins Repo committen |
| Temporäre Schalter | Debug-Loglevel | Langfristige Business-Config |
| CI-Injection | Read-only-Review-Modus | Prod-Schreib-Token |
| MCP-Subprozess | Drittanbieter-Service-Key | Klartext in `AGENTS.md` |

## Kein Universal-Schublade

Teams rutschen oft in „passt schon in Env“.

Klarer trennen:

- **Sensitive, Laufzeitdifferenz**: Env-Var
- **Langfristige Team-Vereinbarung**: Config oder Doku
- **Workflow-Regeln**: `AGENTS.md` oder Skill

Dann wissen Sie bei Troubleshooting, wohin schauen.

## Was `.env` ist

Viele treffen Env-Vars zuerst als `.env` — und missverstehen.

`.env` ist kein zweites Config-Center. Viele Tools laden damit nur **Env-Vars in Batch** für lokale Entwicklung.

- Env-Var = der Wert selbst
- `.env` = häufiges lokales Behältnis

Also:

- `.env` bequem ≠ sicher
- `.env.example` für Beispielnamen, keine echten Keys
- Prod/CI: Secret-Manager

## Nicht nur über Env-Vars

- Coding-Normen, Verzeichnisstruktur → `AGENTS.md`
- Geteilte Modell-Defaults → Projektconfig (nicht-sensibel)
- Komplexe Allowlists → [Regeln](/de/guide/customization/rules/allow-and-deny-patterns/)

## Häufige Missverständnisse

### 1. Env-Vars für alle Configs?

Gut für „Werte“, schlecht für ganze Teamregeln und Langzeit-Doku.

### 2. In `.env` = sicher?

Commit, Screen-Share, Logs — Leak bleibt möglich.

### 3. Nach `unset` absolut sicher?

Risiken noch in:

- Shell-Historie
- Kindprozess-Vererbung
- Logs
- Frühere Dateien/Screenshots

### 4. Lokal `.env` → Prod auch einfach `.env` committen?

In CI/Cloud/Hosted oft:

- Secrets in der Plattform-UI
- Zur Laufzeit injizieren
- Keine echten Werte als Repo-Dateien

## Schichten und Priorität (Konzept)

```text
Organisationszwang (falls vorhanden)
    ↓ überschreibt
Shell- / CI-injizierte Env-Vars
    ↓ mit Config-Dateien gemerged (Regeln offiziell)
Nutzer- / Projekt-Config-Dateien
```

Bei Mehrfachsetzung: **offizielle Priorität**; Troubleshooting: „effektive Config“ oder Logs.

## Häufige Entscheidungsreihenfolge

1. Sensibel?
2. Persönlich lokal oder CI/Cloud?
3. Lang speichern oder nur dieser Lauf?
4. Lokal Env, CI-Secret oder Cloud-Secret?

Weniger „Wert richtig, Ort falsch“.

## Typische Szenarien

| Szenario | Stabilere Praxis |
|---|---|
| Lokal Drittanbieter-API debuggen | Lokale Env oder `.env`, nicht committen |
| Team-Beispielconfig | `.env.example` committen, keine echten Werte |
| GitHub Actions / CI | Plattform-Secrets |
| Cloud-Aufgabe an private Services | Cloud Secrets |
| MCP-Server braucht Key | Elternprozess-Env oder Secret-Injection |

Unklar: echte Keys möglichst nicht langfristig als normale Repo-Dateien.

## Häufige Nutzung

### Lokale Entwicklung

In `~/.zshrc` oder direnv `.envrc` persönliche Tokens — **kein** Commit von `.env`.

### CLI nicht-interaktiv

CI injiziert aus Secret-Store, dann `codex exec`. Siehe [Nicht-interaktiver Modus](/de/guide/cli/non-interactive-mode/).

### MCP-Server

MCP erbt oft Eltern-Env; in Config `$VAR` referenzieren, nicht hardcodieren. Siehe [MCP verbinden](/de/skills/mcp/connect-an-mcp-server/).

### Cloud

Repo-Secrets in der Cloud-Konsole; Namen = Referenzen in der Aufgabe.

Env-Vars für Veränderliches, Sensibles, Laufzeit-Nötiges — nicht für Langzeitregeln oder Erklärungen.

## Sicherheitscheckliste

- [ ] `.env` in `.gitignore`
- [ ] Logs vor Token-Ausgabe redaktieren
- [ ] Geleakte Keys rotieren
- [ ] Least-Privilege-Scope (Read-only-CI-Token usw.)

## Häufige Fehler

- `.env.example` mit echten Keys committen
- Bei Screen-Share `export` sichtbarer Tokens
- Nach `unset` Kindprozesse für sicher halten — Prozessbaum prüfen

## Quellen
- OpenAI Codex configuration / environment-Dokumentation
---

**Status:** verified  
**Anwendbare Produkte:** CLI / App / IDE / Cloud  
**Prüfgrundlage:** OpenAI Help Center Config-Doku beschreibt weiterhin `~/.codex/.env`, CI-/Laufzeit-Injection und Plattform-Secrets; Fokus auf stabile Prinzipien „was in Env, was nicht, `.env` nur lokaler Container“ — keine feste Variablennamensliste.  
**Zuletzt geprüft:** 2026-07-26
