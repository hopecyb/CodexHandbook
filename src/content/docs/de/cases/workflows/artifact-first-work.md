---
title: Artefakt zuerst
description: Zuerst Form und Pfad des finalen Artefakts vereinbaren, dann Schritte ableiten — geeignet für Docs, Configs, Reports und ähnliche Liefergegenstände.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Artefakt zuerst** bedeutet: Form und Speicherort des Liefergegenstands klar machen, bevor Codex die Schritte ableitet. Geeignet für Markdown-Docs, OpenAPI, Migrationsskripte, Folienumrisse und ähnliche klar umrissene Ausgaben; kombinierbar mit [Spezifikationsgetriebene Arbeit](/cases/workflows/specification-driven-work/).

## Schwerpunkte dieser Seite

- Wie man Artefaktstruktur statt Prozessdetails beschreibt
- Konsistenzprüfung bei Mehrdatei-Artefakten
- Ausrichtung an den Fähigkeiten unter [Dateien und Artefakte](/guide/files-and-artifacts/)

## Minimal brauchbares Vorgehen

```text
Ziel-Artefakte:
- docs/api/auth.md (mit 3 Abschnitten: Überblick, Endpunkte, Fehlercodes)
- Stil konsistent mit @docs/api/users.md

Zuerst Verzeichnisumriss und Stichpunkte pro Abschnitt; noch keinen Volltext;
nach meiner Bestätigung generieren und interne Links selbst prüfen.
```

## Empfohlener Workflow

```text
Artefaktliste definieren (Pfad + Format + Beispielreferenz)
    → Umriss oder Skelettdateien
    → Manuelle Bestätigung
    → Inhalt füllen + Querverlinkung
    → Überprüfen (Lint, Linkcheck, Vorschau)
```

Bei visuellen Artefakten Screenshots oder Vorschaubeschreibungen verlangen; siehe [Artefakte überprüfen](/guide/quality/verify-artifacts/).

## Häufige Fehler

- Artefaktpfad weicht von Repository-Konventionen ab (falsches Verzeichnis)
- Nur eine Datei erzeugen, Navigation und Index-Update vergessen
- Kein Abgleich mit dem Beispiel → Stilbruch
- Binäre Artefakte (pptx/docx) ohne Hinweis, wie man sie manuell öffnet und abnimmt

## Sicherheitsgrenzen

- Generierte Inhalte mit Drittanbieter-Copyright brauchen menschliche Compliance-Prüfung
- Produktions-Config-Pfade nicht überschreiben; zuerst in Branch oder unter `draft/` erzeugen

## Abnahme-Checkliste

- [ ] Alle deklarierten Dateien existieren und lassen sich öffnen
- [ ] Format stimmt mit dem Referenzbeispiel überein
- [ ] Links / Verzeichnisse / Frontmatter sind gültig
- [ ] Entspricht [Done definieren](/prompts/define-done/)

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Dateien und Artefakten, Definition of Done und Artefakt-Überprüfung. Der Inhalt fokussiert die stabile Schreib- und Liefermethode „zuerst Liefergegenstände vereinbaren, dann Schritte ableiten“.  
**Zuletzt geprüft:** 2026-07-26
