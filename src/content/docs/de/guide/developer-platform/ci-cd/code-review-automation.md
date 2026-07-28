---
title: Code-Review-Automatisierung
description: 'Codex-Review in CI- oder PR-Abläufe einbinden — Prompt, Berechtigungen und menschliche Gates.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Codex in die **Pull-Request-Pipeline** zu legen, kann vor dem Menschen-Review offensichtliche Probleme fangen — **ersetzt** aber weder verantwortliches Review noch Tests. Diese Seite beschreibt umsetzbare Automatisierungsmuster.

## Was diese Seite behandelt

- Wie man Codex in CI sicher aufruft
- Was ein Review-Prompt enthalten sollte
- Wie Ergebnisse als PR-Kommentar landen, ohne automatisch zu mergen

## Zuerst die Rolle verstehen

„Code-Review-Automatisierung“ heißt: Codex macht die erste Runde Vorsortierung — die Entscheidung bleibt beim Menschen.

Am besten geeignet für:

- Offensichtliche Risiken früh markieren
- Schwerpunkte im Diff strukturieren
- Wiederkehrende Checks vorwegnehmen

Nicht geeignet, um allein zu entscheiden „dieser PR darf gemerged werden“.

Verwandt: [Nicht-interaktiver Modus](/guide/cli/non-interactive-mode/) · [SDK-Überblick](/guide/developer-platform/sdk-overview/)

## Empfohlene Architektur

```text
PR opened / updated
    → CI job (Read-only-Token)
    → codex exec oder API prüft Diff
    → Bericht / PR-Kommentar hochladen
    → Mensch entscheidet über Merge
```

## Häufige Missverständnisse

### Automatisches Review und automatische Freigabe sind nicht dasselbe

Beim ersten Anschluss überschätzen Teams oft: Wenn es automatisch lesen kann, kann es auch automatisch entscheiden.

Realistischer: Es eignet sich als Vorschlags- und Vorsortierungsschicht — nicht als letzte Verantwortungsschicht.

### Nicht jeder PR verdient sofort ein schweres Review

Bei kleinen, wenig wertvollen PRs oder unklaren Regeln erzeugt schweres Auto-Review oft nur Rauschen.

Ein guter Start: leichtes Diff-Review und prüfen, ob es dem Team wirklich Zeit spart.

## Prompt-Vorlage — Kernpunkte

```text
Du bist ein Code-Review-Assistent. Prüfe nur den Diff relativ zum Base-Branch.
Ausgabe: kritische Probleme / Vorschläge / nit; je Eintrag Datei und Zeile.
Kein Repository ändern; keine Netzwerkanfragen.
Bei zu großem Diff nur <Pfadliste> prüfen.
```

Versioniert unter `prompts/ci-review.md` ablegen.

## Berechtigungen und Sicherheit

| Prinzip | Vorgehen |
|---|---|
| Read-only | CI-Token ohne Push (oder nur Bot-Kommentare) |
| Festes Modell | Vergleichbarkeit der Review-Qualität über die Zeit |
| Injection-Schutz | Unbereinigte PR-Beschreibung nicht in den System-Prompt mischen |
| Secrets | Token in GitHub Secrets speichern |

[Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) · [Umgebungsvariablen](/guide/reference/environment-variables/)

## Qualitätsgates

- Fehlgeschlagener Review-Job ≠ Merge muss blockieren (zuerst advisory möglich)
- Von erforderlichen Status Checks trennen: rote Tests blockieren, AI-nits warnen
- Regelmäßig manuell mit AI-Review vergleichen (False Negatives / False Positives)

## Verhältnis zu Cloud

Komplexe Repos können in [Cloud](/guide/web-and-cloud/) erst voll testen und dann reviewen; `exec` in CI eignet sich für **leichtes Diff-Review**.

## Häufige Fehler

- CI mit Schreibrechten und Prompt, der zu „bitte Push den Fix“ injiziert wird
- Review-Ausgabe so lang, dass Menschen-Review untergeht
- Diff-Größe nicht begrenzt → Timeout und Quotenverbrauch

Der größte Nutzen der Code-Review-Automatisierung: vor dem Menschen-Review offensichtliche Probleme aussortieren — nicht die Merge-Verantwortung ersetzen.

## Abnahme-Checkliste

- [ ] CI-Verhalten bei Fork-PRs ist sicher (keine Secret-Leaks)
- [ ] Review-Ausgabe strukturiert und optional maschinenlesbar
- [ ] Team-Dokumentation klärt die Rolle von AI-Review

## Quellen

- OpenAI Codex CI-Beispiele
- KimYx0207 Review/PR-Kapitel
- stormzhang CI-Tutorials
- Git/GitHub-Teil auf codex.bozhouai.com

---

**Status:** verified  
**Anwendbare Produkte:** CLI / API / Cloud  
**Prüfgrundlage:** OpenAI Developers beschreibt Codex weiterhin für Testen, Review und die Vorbereitung von Änderungen; offizielle Use Cases enthalten weiterhin „Review GitHub pull requests“. Diese Seite fasst nur sichere CI-Anbindung und Gate-Muster zusammen und behauptet weder feste Befehle noch eine einzige Implementierung.  
**Zuletzt geprüft:** 2026-07-26
