---
legacyVerification:
  status: "verified"
  products: "Organisation / Team"
  basis: "Aktuelle OpenAI-Enterprise-Dokumentation betont weiterhin rollen- und berechtigungsgebundene Verwaltung von Plugins, Apps, externen Aktionen und Quellsystemzugriff; diese Seite definiert AUP klar als Organisations-Verhaltensgrenze und behält „Gliederung zu Lernzwecken, rechtlich an lokale Anforderungen anpassen“ bei — kein offizielles Policy-Template."
  checkedAt: "2026-07-26"
title: Acceptable-Use-Policy
description: Auf Team-Ebene vereinbaren, was Codex darf und was nicht — abgestimmt mit Technik und Training.
locale: de
source_locale: zh-CN
source_revision: "0409154"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
---

Eine **Acceptable-Use-Policy (AUP)** hält als gemeinsame Regel der Organisation fest, wofür Codex verwendet werden darf, statt dies allein dem persönlichen Urteil zu überlassen. Sie ergänzt das [Bedrohungsmodell](/de/guide/team-enterprise/security/threat-model/): dort Risiko, hier **Verhaltensgrenzen**.

## Inhalt

- Themen, die eine AUP abdecken sollte
- Anschluss an HR/Compliance und technische Kontrollen
- Beispielklauseln zum Entwurf (durch die Rechtsabteilung an die örtlichen Anforderungen anpassen)

## Was die AUP steuert

Auch wenn es technisch geht: Ist es in unserem Team erlaubt?

Sie ersetzt keine technischen Policies — sie macht Organisationsgrenzen verständlich und durchsetzbar.

:::caution
Nachfolgendes ist ein **Gliederung zu Lernzwecken**, keine Rechtsberatung. Vor formaler Veröffentlichung Legal und Compliance einbinden.
:::

## Häufige Missverständnisse

### Die AUP betrifft auch die täglichen Anwender

Viele sehen Policy-Dokumente als Formalität ohne Bezug zur täglichen Arbeit.

Im Alltag tauchen aber genau diese Fragen auf:

- Welche Daten dürfen nicht an Codex
- Welche Szenarien brauchen menschliche Überprüfung
- Welche Erweiterungen und Externverbindungen sind tabu

Also nicht nur Legal-Text — praktische Nutzungsgrenze.

### Policy schreiben ≠ Team hält sich daran

Steht „Produktionsänderungen brauchen Freigabe“, die Werkzeuge erlauben aber standardmäßig eine Umgehung, wird die Policy schnell wirkungslos.

Wichtiger: AUP mit Training, Berechtigungen, Config und Audit verzahnen — nicht nur vollständig klingen.

## Empfohlene Themen

| Thema | Kernpunkte |
|---|---|
| Erlaubte Nutzung | Entwicklung, Doku, Recherche, interne Automatisierung |
| Verbotene Nutzung | Unautorisierter Zugriff, Belästigung, Umgehung von Sicherheitskontrollen |
| Datenklassifikation | Welche Repos/Daten; Regeln zu Kunden-PII |
| Output-Verantwortung | Merge nach Menschen-Review; Output nicht als Rechts-/Medizinberatung nach außen |
| Erweiterungen | Nur Plugins/MCP auf der Freigabeliste |
| Konten | Persönliche Nutzerlizenzen nicht gemeinsam verwenden; Rücknahme bei Austritt |
| Incident | Meldeweg für verdächtiges Verhalten |

## Grundstruktur

1. **Zweck und Geltungsbereich**
2. **Erlaubte Szenarien** (Link zur [Fähigkeitskarte](/de/guide/start-here/codex-capability-map/))
3. **Verbotene Szenarien**
4. **Daten und Vertraulichkeit**
5. **Menschliche Aufsicht** (Merge, Produktionsänderungen)
6. **Folgen bei Verstößen** (bestehendes Mitarbeiterhandbuch)
7. **Kontakte und Aktualisierungsdatum**

## Abgleich mit technischen Kontrollen

| AUP-Klausel | Technische Umsetzung |
|---|---|
| Kein unbefugtes Übertragen von Quellcode | Netzwerkpolicy, MCP-Freigabe |
| Produktionsänderungen brauchen Freigabe | Branch Protection, `git push` deny |
| Nur freigegebene Modelle | Organisationskonfiguration |

## Häufige Fehler

- AUP fertig, niemand trainiert
- Losgelöst von der technischen Realität (Policy verbietet, Tool erlaubt)
- Jahre unverändert, trotz neuer Features (z. B. Computer Use)

## Wann eine AUP wirksam ist

Fragen:

1. Beantwortet sie echte Nutzungsgrenzen des Teams?
2. Landet sie in Training, Config oder Freigabeprozessen?
3. Weiß das Team, wie es Verstöße erkennt und darauf reagiert?

Je mehr „ja“, desto wahrscheinlicher echte Wirkung.

## Abnahme-Checkliste

- [ ] Onboarding enthält AUP-Bestätigung
- [ ] Kein Widerspruch zu [Team-Regeln](/de/guide/customization/rules/team-rules/)
- [ ] Jährlich oder bei Major-Features erneut prüfen

Der Wert einer AUP: Codex-Nutzungsgrenzen klar schreiben und mit realen Kontrollen abstimmen.
