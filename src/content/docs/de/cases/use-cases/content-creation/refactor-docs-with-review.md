---
title: Dokumentationssite mit Prüfung refactoren
description: "Fall: In einem Astro/Starlight-Docs-Projekt Links und Kapitel batchweise aktualisieren — kleine Diffs, Build-Überprüfung."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Dieser Fall zeigt eine **Content-Engineering**-Aufgabe: Mehrdatei-Markdown, Sidebar-Config, Build-Überprüfung. Der Stack ähnelt diesem Handbuch; das Muster lässt sich auf jede Static Site übertragen.

## Metadaten

| Feld | Wert |
|---|---|
| Bereich | Content-Erstellung / Docs-Engineering |
| Einstieg | CLI oder IDE |
| Risiko | mittel (viele Links und Navigation) |
| Dauer | 1–3 Stunden (je nach Umfang) |

Vorlage: [Fallvorlage](/cases/use-cases/case-study-template/)

## Hintergrund

Nach einem neuen Kapitel muss die Docs-Site:

1. Sidebar-Slugs in `astro.config` aktualisieren
2. Relative Links im Text korrigieren
3. `npm run build` fehlerfrei

Menschen übersehen leicht Slugs; geeignet für Agent **nach Checkliste ausführen + Build-Abnahme**.

## Vorbereitung

- [ ] Sauberer Git-Branch
- [ ] Lokal `npm run build` erfolgreich
- [ ] Neue Seitenpfade und Zielposition in der Sidebar notiert

## Aufgaben-Prompt (Beispiel)

```text
Ziel: environment-variables.md für 12-reference anlegen und in Sidebar sowie Index-Links einbinden.
Einschränkungen: Nur src/content/docs und astro.config.mjs ändern; keine Dependency-Upgrades.
Akzeptanz: npm run build erfolgreich; keine toten Links.
Schritte: Zuerst Config, dann md, zuletzt 12-reference/index.md aktualisieren.
```

## Ausführungs-Hinweise

- **Zuerst Config, dann Inhalt**: verhindert Build-Fehler wegen missing slug
- Pro Batch 3–5 Dateien committen — leichter zu reviewen
- [Erkunden—Planen—Ausführen—Überprüfen](/cases/workflows/explore-plan-execute-verify/) nutzen

## Prüfung

- [ ] Jeder Sidebar-Slug hat eine passende Datei
- [ ] Interne Links folgen der Relativpfad-Konvention
- [ ] Build-Log ohne Starlight-Warnungen (falls das Team Null-Warnungen verlangt)

## Fehlerwiederherstellung

| Problem | Vorgehen |
|---|---|
| Sidebar-Slug-Fehler | Gegen Astro-Docs Slug anpassen oder md ergänzen |
| Tote Links | Zielpfad `grep`en; Link ändern oder Seite nachlegen |
| Build-OOM | In Batches ändern; lokal Node-Speicher erhöhen |

## Retro

- Beim dritten Mal «neues Kapitel + Sidebar» als Skill verstetigen
- ROADMAP-Punkte abhaken, damit Docs und Plan nicht auseinanderlaufen

## Referenzquellen
- Tatsächlicher M2-Docs-Iterationsablauf dieses Repos
---

**Status:** verified  
**Geeignete Produkte:** CLI / IDE  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Content-Artefakten, EPXV, Build-Abnahme und Fallvorlage. Der Inhalt beschränkt sich auf den stabilen Content-Engineering-Fall „Mehrdatei-Docs-Site in kleinen Schritten ändern, Build prüfen, Fehler wiederherstellen“.  
**Zuletzt geprüft:** 2026-07-26
