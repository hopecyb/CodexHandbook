---
title: Berechtigungsmatrix
description: 'Konzeptuelle Gegenüberstellung von Codex-Operationstypen, Freigabepunkten und Produktdifferenzen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Die **Berechtigungsmatrix** hilft auch normalen Nutzern: Warum reagiert Codex bei derselben Formulierung an verschiedenen Einstiegen anders?

Unterschiedliche **Operationen** lösen an unterschiedlichen **Produkteinstiegen** unterschiedliche Freigabe- und Sandbox-Verhalten aus. Die Matrix hilft Teams abzustimmen, „was Menschen explizit freigeben müssen“ — **Risiko- und Verhaltensvergleich**, keine Compliance-Vorschrift. Defaults: [offizielle Docs](https://developers.openai.com/codex) und Organisationspolicies.

## Was die Tabelle zeigt

Bei Freigabe, Limit oder Ablehnung denken viele zuerst:

- Modell kaputt
- Formulierung falsch
- Gestern ging es, heute nicht

Oft liegt der Unterschied an Einstieg, Policy und Risikostufe.

## Kernpunkt

Nicht jedes „hilf mir damit“ hat dasselbe Risiko.

Zum Beispiel:

- Eine Datei lesen
- Eine Datei ändern
- Einen Befehl ausführen
- Ins Netz
- Code pushen

Alles „Aufgabe ausführen“ — Risiko nicht dieselbe Stufe. Deshalb Freigaben, Limits und Blocks an verschiedenen Stellen.

Grundlagen: [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/)

## Operationsrisikostufen

| Stufe | Beispiele | Typische Erwartung |
|---|---|---|
| L0 Lesen | Projekttext lesen, Code suchen | Meist automatisch |
| L1 Schreiben | Projektdateien ändern, formatieren | Oft Bestätigung oder auto in Sandbox |
| L2 Ausführen | Shell, Package-Manager, Tests | Oft Bestätigung |
| L3 Outbound | curl, npm registry, API | Strenge Bestätigung oder Verbot |
| L4 Overreach | Pfade außerhalb, git push, DB löschen | Block oder starke Bestätigung |
| L5 GUI | Computer Use, Systemdialoge | Höchste Sensibilität, oft default aus |

## Lesart

Nicht jedes Feld pauken. Nutzen:

- Operationsklasse der aktuellen Aufgabe bestimmen
- Ob der aktuelle Einstieg typischerweise blockiert
- Ob Erklärung nachreichen, auf Freigabe warten oder Einstieg wechseln

Auch als Vorab-Einschätzung.

## Matrix (Konzept — typische Defaults)

**Y** = oft explizite Zustimmung oder Policy-Limit · **A** = auto bei vertrauenswürdiger Config · **—** = version/policyabhängig · **N** = meist nicht erlaubt

| Operation | Desktop-App | CLI interaktiv | IDE | Cloud |
|---|---|---|---|---|
| Repo-Dateien lesen | A | A | A | A |
| Dateien im Repo schreiben | Y/A | Y | Y/A | Y/A |
| Testbefehle | Y/A | Y | Y/A | Y/A |
| Globale Abhängigkeiten installieren | Y | Y | Y | Y |
| Öffentliches Netz | Y | Y | Y | Y |
| Sensitive Dateien wie `.env` lesen | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| Pfade außerhalb des Projekts | N/Y | N/Y | N/Y | N |
| MCP-Drittanbieter-Tools | Y | Y | Y | Y |
| Browser-URL öffnen | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

Hinweise:

- **Cloud** läuft in Remote-Sandbox — kein Laptop-Dateisystem
- **IDE** ähnlich App, andere Freigabe-UI
- **Managed Policy** kann alles auf Y oder N zwingen

## Häufige Missverständnisse

### 1. Ob es geht, hängt nicht nur vom Modell ab

Oft:

- Erlaubt der Einstieg es?
- Lässt die Policy durch?
- Reichen die Rechte?

### 2. Cloud nicht automatisch freier oder sicherer

Sicherheit hängt an Sandbox, Netz, Secrets, Branch Protection und Freigabe zusammen.

### 3. Regeln schreiben ≠ Risiko verschwindet

Doku-Regeln, Freigabe-Policy, Techniklimits und Menschen-Review oft zusammen.

### 4. Blockiert ≠ Sie haben falsch gemacht

Oft:

- Dieser Schritt ist riskanter
- Einstieg ungeeignet
- Klarere Freigabe oder leichtere Variante nötig

## Config und Doku umsetzen

| Mechanismus | Wirkung |
|---|---|
| Sandbox-Modus | Begrenzt L3/L4 auch wenn Agent „will“ |
| Freigabe-Policy | Ob L1–L3 Popups zeigen |
| `AGENTS.md` | Projektverbote (z. B. kein Push) |
| Branch Protection | GitHub blockiert ungeprüfte Merges |
| Hooks | Checks vor Commit (siehe Hooks-Roadmap) |

[Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) · [Konfigurationsreferenz](/guide/reference/configuration-reference/)

## Wann vorsichtiger werden

Bei einer der folgenden Eigenschaften:

- Ändert Dateien
- Führt Befehle aus
- Geht ins Netz
- Berührt sensible Daten
- Sendet Ergebnisse aus dem Repo

L-Nummer nicht nötig — aber: nicht mehr „kurz drüberschauen“-Risiko.

Die Matrix ist ein Vorhersagewerkzeug: warum blockiert, ob vorsichtiger, oder leichtere Variante.

## Teamstrategien (Beispiele)

| Szenario | Empfehlung |
|---|---|
| Open-Source-Übungsrepo | Standard-Sandbox + Testbefehle erlaubt |
| Firmen-Monorepo | Streng + kein Push + PR mit Menschen-Review |
| CI `codex exec` | Read-only oder begrenztes Verzeichnis + kein Push |
| Cloud produktionsnah | Secrets minimal + Branch Protection |

## Häufige Irrtümer

| Irrtum | Tatsache |
|---|---|
| «Cloud ist sicherer» | Hängt an Secrets, Review, Netzpolicy |
| «IDE führt kein Shell aus» | Kann über Agent-Tools |
| «Verbot Push in Doku = kein Push» | Braucht Sandbox + Git-Rechte + Menschen-Review |

---

**Status:** outdated  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfhinweis:** Risikostufen-Idee nützlich; Matrix mit vielen Annahmen zu Defaults, Freigabepunkten und Fähigkeiten je Einstieg — ohne aktuelle offizielle Per-Einstieg-Matrix nicht `review`/`verified`.  
**Zuletzt geprüft:** 2026-07-26
