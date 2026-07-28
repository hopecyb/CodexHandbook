---
title: Erlauben und Ablehnen
description: "Mit Befehls- und Pfadregeln Agent-Operationen einschränken — persönliche Gewohnheiten und Team-Untergrenzen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Rules (Regeln)** deklarieren in Config oder Projektdateien, welche Shell-Befehle, Pfade und Werkzeugaufrufe **erlaubt oder verboten** sind — weniger manuelle Freigabe-Klicks, zugleich weniger automatisierte Gefahr.

## Inhalt

- Wie Allow-/Deny-Regeln funktionieren
- Verhältnis zu Sandbox, Freigabe-Dialogen und `AGENTS.md`
- Teamregel-Beispiele

## Was Regeln tun

Klingt „Regel“ abstrakt, denken Sie zuerst: Vorab vereinbaren, was Codex tun darf und was nicht — statt jedes Mal ad hoc zu urteilen und freizugeben.

Zwei Hauptnutzen:

- Weniger wiederkehrende, aber immer wieder bestätigte Niedrigrisiko-Aktionen
- Hochrisiko-Aktionen vorab abfangen, die nicht automatisch laufen sollen

## Regeltypen (konzeptuell)

| Typ | Beispiel |
|---|---|
| Befehls-Allowlist | `npm test`, `git status` erlauben |
| Befehls-Denylist | `rm -rf`, `curl \| bash` verbieten |
| Pfad | Kein Schreiben nach `../`, kein Lesen von `~/.ssh` |
| Netzwerk | Kein Outbound oder nur Registry-Domains |

Abgleich mit der [Berechtigungsmatrix](/guide/reference/permission-matrix/): Regeln sind **konfigurierbares** Enforcement; die Matrix beschreibt **übliche Defaults**.

## Empfohlene Schichtung

```text
Organisations-Managed-Policy (nicht überschreibbar)
    ↓
Projekt-Rules + AGENTS.md (Git-Review)
    ↓
Persönliche Allowlist-Ergänzung (nur lokal)
    ↓
Constraints im Einmal-Aufgaben-Prompt
```

## Häufige Missverständnisse

### Regeln sind nicht nur „weniger Dialoge“

Viele hören Allowlist und denken zuerst: weniger Popups, weniger Unterbrechung.

Weniger Dialoge sind nur ein Teil — wichtiger: Niedrigrisiko durchlassen, Hochrisiko stoppen.

### Regeln sind keine Sandbox

Sandbox begrenzt „wie weit man höchstens greifen darf“; Regeln vereinbaren „welche Aktionen grundsätzlich nicht laufen sollen“.

Beides zusammen nutzen — nicht eines als Ersatz für das andere.

### Team-Untergrenzen dürfen nicht nur lokal leben

Kennt nur Ihre lokale Regel „kein Push“, „kein `.env`“, können andere trotzdem reintreten.

Team-Untergrenzen gehören möglichst dorthin, wo Review möglich ist.

## Teambeispiel (schematisch, nicht Copy-Paste)

**Erlauben:**

- Paketmanager installiert Abhängigkeiten **im Projekt**
- Dokumentierte Testskripte ausführen

**Ablehnen:**

- `git push`, `git reset --hard`
- Lesen/Schreiben von `.env*` (außer explizite Aufgabe)
- Öffentliche POST-Requests mit Repo-Inhalt

Regeln gehören in team-reviewbare Dateien — nicht nur mündliche Absprachen.

## Häufige Fehler

- Allowlist zu weit (`bash` erlauben ≈ alles erlauben)
- Nur Deny, kein Allow — weiterhin zu viele Freigaben
- Widerspruch zu `AGENTS.md`

## Einstiegsempfehlung

Keine komplette Policy auf einmal. Zwei Schritte reichen zum Start:

1. 3–5 täglich laufende, risikearme Befehle klar listen
2. Einige absolut unerwünschte Hochrisiko-Aktionen klar listen

Minimale Grenze zuerst glattziehen, dann verfeinern.

## Sicherheitsgrenzen

- Regeln **ersetzen** Code-Review und Branch-Schutz **nicht**
- Bösartige Prompts können den Agent zu Umgehungsversuchen verleiten — Sandbox-Default streng halten
- Regeländerungen per PR, wie CI-Änderungen behandeln

Gute Allow-/Deny-Regeln machen vorab klar, welche Aktionen vernünftig sind und welche nicht vorkommen sollten.

---

**Status:** verified  
**Gilt für:** CLI / App  
**Prüfgrundlage:** Aktuelle OpenAI-Codex-/Plugin-Berechtigungsdokumentation betont weiterhin Schichtung von Lese-/Schreibaktionen, Freigabe, Quellengrenzen und rollenbasiertem Zugriff; diese Seite behauptet keine konkrete Regelsyntax, sondern erklärt Allow/Deny als Enforcement-Grenzmuster und trennt sie von Sandbox, Freigabe und Team-Review.  
**Zuletzt geprüft:** 2026-07-26
