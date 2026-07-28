---
title: Browser-Werkzeug
description: "Webseiten öffnen, UI-Status prüfen und Frontend-Verhalten verifizieren — Fähigkeiten und Grenzen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Das **Browser-Werkzeug** lässt den Agent in kontrollierter Umgebung echte Seiten öffnen: DOM lesen, Screenshots, manchmal einfache Interaktion. Geeignet für Frontend-Abnahme, Doku-Link-Checks, Designabgleich — nicht als Security-Audit und nicht für beliebiges Produktions-Admin.

Anders als Suche: Suche findet Infos; Browser öffnet wirklich.

## Welche Probleme es löst

Typisch:

- Wie sieht die Seite jetzt aus
- Was passiert beim Klick
- Layout bei echter Breite kaputt?

Code lesen oder Textbeschreibungen reichen oft nicht — Seite wirklich öffnen.

## Inhalt dieser Seite

- Was das Browser-Werkzeug kann und nicht kann
- Unterschied zu Web-Suche und Computer Use
- Sicher autorisieren und einschränken

## Fähigkeitsüberblick

| Geeignet | Nicht geeignet |
|---|---|
| Lokalen Dev-Server für Layout öffnen | Massencrawling ToS-beschränkter Sites |
| Öffentliche Doku-Links auf 404 prüfen | Auto-Login auf unautorisierten Systemen |
| Statische Seite vs. Umsetzung | Ersatz für volles E2E-Framework |
| Sichtbaren Text zur Debug-Hilfe | Sites mit komplexer Human-Verification |

Auswahlhintergrund: [Werkzeugwahl](/guide/tools/tool-selection/)

## Vergleich mit anderen Werkzeugen

| Werkzeug | Input | Output |
|---|---|---|
| Web-Suche | Query | Zusammenfassung und Links |
| Browser | URL / lokal | Seitenstruktur, Screenshot, Interaktionsergebnis |
| Computer Use | Ganzes GUI | Beliebige App-Bedienung (schwerer, sensibler) |

## Häufige Missverständnisse

### 1. Kein Ersatz für Automatisierungstests

Hilft prüfen, screenshotten, etwas klicken — ersetzt kein Testsystem.

### 2. Öffnet sich ≠ in Ordnung

Öffnen heißt nur „Seite existiert“; Layout, Text, Interaktion, Links weiter prüfen.

### 3. Wann nutzen?

Häufig:

- Lokales Layout prüfen
- Links auf 404
- Grober Abgleich Seite vs. Design
- „Code sieht richtig aus — echte Seite auch?“

## Entscheidungskriterium

Fragen Sie:

- „Wie rendert es wirklich?“
- „Was sieht man auf der Seite?“
- „Was meldet die Seite nach dem Klick?“

Dann oft besser als reine Textanalyse.

## Empfohlener Workflow

1. **Lokales Frontend**: zuerst `npm run dev`, dann `http://localhost:PORT/path`
2. **Aufgabe klar**: „Login-Formular bei 375px Overflow?“ statt „schau die Seite an“
3. **Grenzen**: kein Outbound, kein Formular an Produktion
4. **Abnahme**: [Artefakte überprüfen](/guide/quality/verify-artifacts/) und Screenshots

## Direkt nutzbare Formulierung

```text
Nur http://localhost:4321/guide/foundations/local-vs-cloud/ — Hero-Layout und Cover-Look prüfen.
Kein Outbound, keine Formulare absenden.
Bei Problemen Screenshot-Beleg und Änderungsvorschlag.
```

## Sicherheitsgrenzen

- Default: Browser erreicht **alles, was Maschine/Umgebung erreicht** — inkl. Intranet-Admin
- Im Prompt: `nur localhost` oder Domain-Allowlist
- Keine untrusted-Repo-Aufgaben in Browserprofilen mit persönlichem Login
- Cloud-Browser-Policy: [Cloud-Umgebungen](/guide/web-and-cloud/cloud-environments/) und Netzrichtlinie

Freigabe: [Berechtigungen und Freigabe](/guide/foundations/permissions-and-approvals/)

## Häufige Fehler

- Produktions-URL ohne Read-only-Grenze
- Browser-Screenshot als „Test bestanden“ ohne Automation
- Mit Web-Suche verwechseln: Suche ersetzt kein echtes Rendering

## Abnahmeliste

- [ ] Zugriffsradius im Prompt festgeschrieben
- [ ] Kritische visuelle Probleme mit Screenshot oder Text
- [ ] Konsistent mit Unit/E2E oder bekannte Differenz dokumentiert

---

**Status:** verified  
**Gilt für:** App / Codex (versions- und berechtigungsabhängig)  
**Prüfgrundlage:** OpenAI Help Center beschreibt eingebauten Desktop-App-Browser (Work/Codex: Tabs, Download, Annotation, seitenweise Freigabe). Fokus: Szenarien, Unterschied zu Suche/Computer Use, Sicherheitsgrenzen.  
**Zuletzt geprüft:** 2026-07-26
