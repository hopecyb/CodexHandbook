---
title: Konfigurations-Profiles
description: "Benannte Config-Profile für Modell-, Sandbox- und Freigabe-Kombinationen — Entwicklung, Review, CI je eines."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

**Profile (Konfigurationsprofil)** speichert eine benannte Kombination (Modell + Sandbox + Freigabe usw.) und wechselt Szenarien mit einem Klick — ohne jedes Mal manuell umzustellen.

## Was diese Seite behandelt

- Unterschied zwischen Profile und „Default-Config ändern“
- Übliche Profile-Aufteilungen
- Wie Teams Profile-Definitionen teilen

## Was Profile steuert

Wenn „Config“ die Default-Arbeitsgewohnheit ist, ist **Profile** „ein voreingestelltes Paket für ein Szenario“.

Stellen Sie sich vor:

- Alltag: ein Satz
- Unvertraute Repos: ein Satz
- Nur-Lese-Review: ein Satz
- CI-Aufgaben: noch ein Satz

Dann müssen Sie nicht jedes Mal Dutzende Schalter drehen.

## Typische Profile-Beispiele

| Profile-Name | Absicht | Merkmale (konzeptuell) |
|---|---|---|
| `daily` | Alltag | Ausgewogenes Modell, Standard-Sandbox |
| `strict` | Unvertrautes Repo | Starke Freigabe, Netz eingeschränkt |
| `review-only` | Nur lesen | Schreibverbot oder nur Lesen |
| `ci` | Pipeline | Festes Modell, nicht-interaktiv, kein Push |

Konkrete Felder: [Konfigurationsreferenz](/guide/reference/configuration-reference/).

## Nutzung (konzeptuell)

1. In der offiziellen Doku die Profile-Syntax bestätigen (oft `[profiles.name]` in `config.toml` oder gleichwertig)
2. Profile anlegen und benennen
3. Beim Start angeben: `codex --profile strict` (Befehl laut `--help`)
4. In README notieren: „Beitragende: `daily`; CI: `ci`“

CLI-Details: [CLI-Konfiguration](/guide/cli/configuration/)

## Häufige Missverständnisse

### Mehr Profiles sind nicht automatisch flexibler

Viele legen zuerst für jedes Mini-Szenario ein Profile an — zehn Namen, niemand merkt sich die Unterschiede.

Meist reichen 2 bis 4 häufigste:

- Alltag
- Streng
- Nur-Lese-Review
- CI

Hauptsache, Risikogrenzen klar getrennt.

### Profile ersetzt kein Denken

Ein Profile zu wählen heißt nicht, dass jede Aufgabe danach absolut sicher oder passend ist.

Es setzt nur den „üblichen Startzustand“; die konkrete Aufgabe braucht weiterhin Repo- und Risikourteil.

## Arbeitsteilung mit AGENTS.md

| | Profile | AGENTS.md |
|---|---|---|
| Steuert | Fähigkeitsschalter, Modell, Sandbox | Wie in diesem Projekt geschrieben wird |
| Nach Git | Optional (projektweite Profile-Fragmente) | Ja |
| Person/Team | Persönlich lokal; Team-Profiles per PR | Team |

## Häufige Fehler

- Zehn Profiles pro Repo, niemand pflegt sie
- `ci`-Profile erlaubt weiterhin `git push`
- Profile-Namen weichen von der Doku ab — Neue nehmen das Falsche

## Einstiegsempfehlung

Beim Start mit Profiles:

1. Ein `daily` als Default behalten
2. Ein `strict` für unbekannte oder riskante Repos ergänzen
3. Bei Automatisierung ein separates `ci` hinzufügen

Damit sind die meisten Fälle abgedeckt.

Profile lohnt sich, weil Sie in unterschiedlichen Risikoszenarien schnell zu einer durchdachten Default-Kombination wechseln.

## Quellen
- OpenAI-Codex-Profiles-Dokumentation
---

**Status:** outdated  
**Gilt für:** CLI / App  
**Nachprüfhinweis:** Diese Seite beschreibt `Profile`, `codex --profile` und geteilte Profile-Strukturen zu konkret; die aktuell nachprüfbaren offiziellen Quellen reichen nicht, um diese Nutzung in der jetzigen Version als allgemein etabliert zu belegen — vor `verified` formale Doku-Belege nachziehen.  
**Zuletzt geprüft:** 2026-07-26
