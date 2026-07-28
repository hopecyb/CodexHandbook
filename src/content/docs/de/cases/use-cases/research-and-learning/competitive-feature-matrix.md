---
title: "Fall: Wettbewerbs-Feature-Matrix"
description: Recherche mit Quellen und Tabellen-Artefakt — Workflow, den auch Nicht-Entwickler wiederverwenden können.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Produkt, Operations, Forschende |
| Client | App oder CLI |
| Geschätzte Dauer | 45 Minuten |
| Prüfdatum | 2026-07-25 |

## 1. Ziel und Kontext

**Ziel:** Vergleichstabelle für 3–5 Wettbewerber (Funktionen, Preishinweise, Einsatzszenarien) erzeugen; jede Schlussfolgerung mit Quelle.

**Erfolgskriterien:**

- Markdown-Tabelle + Kennzeichnung «zu bestätigen»
- Keine erfundenen Preise oder Versionsnummern
- Keine internen Geheimnisse in öffentlichen Docs

## 2. Vorbereitung

- Vergleichsdimensionen klar (vorher im Prompt oder `@brief.md`)
- [Websuche](/guide/tools/web-search/) aktivieren (falls das Produkt es unterstützt)

## 3. Workflow

Folge [Recherche mit Quellen](/cases/workflows/research-with-sources/):

```text
Vergleiche die «Teamkollaboration»-Funktionen von A/B/C:
Pro Dimension 1–2 Sätze + Quell-URL;
Offizielle Docs vor Blogposts;
Preise, die nicht überprüfbar sind, als «zu bestätigen» markieren;
Markdown-Tabelle ausgeben, andere Repository-Dateien nicht ändern.
```

**Überprüfung:** 3 URLs manuell öffnen; Datum und [Versionspolicy](/guide/start-here/handbook-version-policy/) prüfen.

## 4. Fehler und Wiederherstellung

- Quellenkonflikt: beide Positionen nebeneinander, nicht erzwingen
- Kontext zu lang: in «zuerst A vs. B, dann C hinzufügen» zerlegen

## 5. Verstetigen

- Vergleichstabellen-Vorlage in vereinbartes Vorlagenverzeichnis oder Wissensbasis
- Optional als Skill `source-backed-research`

## 6. Verwandte Kapitel

- [Artefakt zuerst](/cases/workflows/artifact-first-work/)
- [Quellen validieren](/guide/quality/validate-sources/)

---

**Status:** verified  
**Geeignete Produkte:** App / CLI  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Recherche mit Quellen, Websuche, Quellenvalidierung und Versionspolicy. Der Inhalt beschränkt sich auf die stabile Recherchefall-Struktur „Vergleichstabelle mit Quellen erzeugen“ und schreibt keine konkreten Preise oder Produktversionen fest.  
**Zuletzt geprüft:** 2026-07-26
