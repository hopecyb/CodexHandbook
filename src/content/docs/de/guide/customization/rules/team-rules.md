---
title: Teamregel-Strategie
description: "Befehls- und Pfadregeln zwischen Organisation, Repo und Person schichten — reviewbar, rückrollbar."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Wenn Teams Codex nutzen, beantwortet die **Regelstrategie**: Welche Constraints gelten firmenweit, welche pflegt das Repo, und dürfen Personen noch lockern? Governance-Sicht auf [Befehlsregeln](/guide/customization/rules/command-rules/) und [Erlauben und Ablehnen](/guide/customization/rules/allow-and-deny-patterns/).

## Inhalt

- Organisations-Managed-Policy vs. Projektregeln vs. persönliche Vorlieben
- Wie Regeländerungen Review und Release durchlaufen
- Zusammenspiel mit `AGENTS.md`, Hooks und CI

## Rolle der Teamregel-Strategie

Sie klärt: Welche Grenzen setzt die Firma einheitlich, welche das Projekt, welche sind nur persönliche Gewohnheit.

Ohne klare Schichtung entstehen zwei Probleme:

- Regeln, die teamweit gelten sollten, leben nur auf einem Laptop
- Temporäre persönliche Bequemlichkeit wird fälschlich Teamstandard

## Für wen

| Rolle | Fokus |
|---|---|
| Engineering-Lead | Untergrenzen-Deny, Audit-Anforderungen |
| Repo-Maintainer | Projekt-Allowlist, Testbefehle |
| Einzelentwickler | Lokale Ergänzungen im erlaubten Rahmen |

## Häufige Missverständnisse

### Teamregeln müssen nicht maximal einheitlich sein

Manche Grenzen gehören organisationsweit — z. B. Hochrisiko-Deny.

Alles Repos in dieselbe Form zu zwängen erzeugt aber oft zu weite oder zu enge Regeln, denen niemand wirklich vertraut.

Wichtig: Grenzen von Organisations-, Projekt- und Personalschicht klar trennen — nicht alle Regeln gleich machen.

### Persönliche Ergänzungen dürfen Team-Untergrenzen nicht schwächen

Lokale Bequemlichkeit ist okay — solange Team- oder Organisations-Untergrenzen nicht umgangen werden.

Sonst wirkt es „lokal effizienter“, legt aber Kollaborationsminen.

## Empfohlenes Schichtmodell

```text
L1 Organisations-Managed     → nicht von Projekt/Person überschreibbar
L2 Team-Template-Repo        → Rules-Fragmente für neue Repos
L3 Projekt-Rules + AGENTS.md → Git-PR-Review
L4 Persönliche Config        → nur lokal, darf L1 nicht schwächen
L5 Einmal-Aufgaben-Prompt    → temporär straffer ok; temporär lockern durch L1 begrenzt
```

Abgleich mit [AGENTS.md-Geltungsbereich](/guide/customization/agents-md/scope-and-precedence/): **Regeln ≈ Enforcement, AGENTS.md ≈ Verhaltenshinweise**; konsistent halten, keine widersprüchlichen Doppelsets.

## Grundvorgehen

1. **Zuerst „niemals erlaubt“ (Deny)**: `git push --force`, Lesen von `~/.ssh`, öffentliche POSTs mit Repo-Inhalt
2. **Dann „Alltag erlaubt“ (Allow)**: Tests, Lint, nur-lesendes Git
3. **L1 managed ausrollen** (falls Managed Configuration aktiv)
4. **Pro Service/Monorepo-Paket** L3 ergänzen, ohne L1-Konflikt
5. **Quartalsreview**: wiederkehrende „Falschblock“ und „Falschdurchlass“ aus Freigabe-Logs → Regel-PR

## Empfohlener Workflow: Regeländerung

```text
Vorschlag (Issue oder RFC) → Security/Platform-Review → PR an Regeldateien
    → typische Aufgaben im Staging-Repo → Merge → Ankündigung + Handbuchseite aktualisieren
```

Große Änderungen (z. B. Netzwerk-Outbound öffnen) aktualisieren parallel [Hooks-Audit](/skills/hooks/hooks-overview/) und [Acceptable Use](/guide/team-enterprise/governance/acceptable-use/).

## Abgleich mit Hooks und CI

| Mechanismus | Rolle |
|---|---|
| Regeln | Vor Ausführung erlauben/ablehnen |
| Hooks | Komplexe Checks, Logs, Compliance-Formate |
| CI | Merge-Gate, möglichst gleiche Skripte wie lokal |

Drei parallele Logiken vermeiden: bevorzugt **eine Wahrheitsquelle** (z. B. `tools/codex-rules.json`), die CLI und CI gemeinsam referenzieren.

## Häufige Fehler

- Nur mündlich „nicht pushen“, Regeldatei unverändert
- Lokal Sandbox gelockert und Screenshot als „Teamstandard“
- Monorepo-Teilprojekte unterschiedlich, aber eine zu weite globale Allowlist
- Keine Ankündigung bei Regeländerung — plötzlich viele Freigabe-Fails

## Welche Schicht

Drei Fragen:

1. Muss jedes Repo diese Untergrenze einhalten?
2. Gilt sie nur für das aktuelle Projekt?
3. Ist es nur meine persönliche Bequemlichkeitsergänzung?

Typisch:

- Organisationsschicht
- Projektschicht
- Personalschicht

## Sicherheitsgrenzen

- Regeln ersetzen nicht [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/) und Incident-Response
- Bei regulierten Daten: Regeln zusammen mit Datenklassifikation und Retention reviewen
- Notfall-Bypässe brauchen **Audit-Trail** und Nachbereitung

## Abnahmeliste

- [ ] L1–L3-Arbeitsteilung der Organisation skizzieren können
- [ ] Regeldateien im Repo mit klarem Owner und Review-Anforderung
- [ ] Keine Widersprüche zu `AGENTS.md`, Hooks, CI
- [ ] Kanal für „Falschblock“-Feedback (Issue-Template oder internes Formular)

Teamregel-Strategie beginnt damit zu klären, **wer welche Schicht setzt** — dann erst, wie Regeln geschrieben werden.

---

**Status:** verified  
**Gilt für:** CLI / App / Cloud (organisationsabhängig)  
**Prüfgrundlage:** Aktuelle OpenAI-Materialien zu organisationsweiten Plugins, Apps und Berechtigungen betonen weiterhin Rollen, Aktionsfreigabe, Managed Config und teamweite Steuerung; diese Seite abstrahiert Regelstrategie als Governance-Modell Organisations-/Projekt-/Personalschicht und verlangt Review und Ankündigung bei Änderungen — stabile Governance-Praxis.  
**Zuletzt geprüft:** 2026-07-26
