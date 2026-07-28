---
title: "Fall: Geplante Dokumentenlink-Prüfung"
description: Mit nicht-interaktivem Codex oder CI tote Links in der Site scannen — Einstiegsfall Team-Automatisierung.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Team-Maintainer, Technical Writer |
| Client | CLI + GitHub Actions |
| Geschätzte Dauer | 45–90 Minuten (inkl. erster CI-Einrichtung) |
| Prüfdatum | 2026-07-25 |

## 1. Ziel und Kontext

**Ziel:** Wöchentlich automatisch interne und kritische externe Docs-Links prüfen; tote Links per PR oder Issue melden.

**Erfolgskriterien:**

- CI oder geplanter Workflow wiederholbar
- Strukturierte Liste toter Links (Datei, Zeile, URL)
- Keine unrelated Dateiänderungen, kein Push

**Außerhalb des Umfangs:** Vollsite-Crawler, Seiten hinter Login, Performance-Tests.

## 2. Vorbereitung

- Docs-Quellen im Git-Repo (z. B. `src/content/docs/` dieses Handbuchs)
- Vorhandenes `npm run build` oder Link-Checker-Skript (optional)
- Nur-lesendes `GITHUB_TOKEN` und `OPENAI_API_KEY` in Org-Secrets

## 3. Workflow

### Erkunden

```text
Lies @src/content/docs/ und vorhandene package.json-Scripts.
Liste, ob es bereits einen Link-Check gibt; falls nicht, minimale Option vorschlagen: Markdown-Internlinks + Stichprobe offizieller Docs-Externlinks.
Keine Dateien ändern.
```

### Planen

```text
Plan liefern: Prompt-Dateipfad, CI-Workflow-Name, Felder der strukturierten JSON-Ausgabe.
Nach meiner Bestätigung Dateien anlegen.
```

### Ausführen

- `prompts/ci/link-check.md` hinzufügen
- `.github/workflows/docs-link-check.yml` hinzufügen (Skizze, siehe [Skripte und Pipelines](/guide/developer-platform/non-interactive/scripts-and-pipelines/))
- [codex exec](/guide/developer-platform/non-interactive/codex-exec/) oder reines Skript + Codex zur Nachklassifikation

### Überprüfen

- Einmal lokal `codex exec`
- CI manuell per `workflow_dispatch`
- Absichtlich toten Link einfügen, `pass: false` bestätigen

## 4. Fehler und Wiederherstellung

| Problem | Vorgehen |
|---|---|
| Externer Site temporär 503 | Harte tote Links vs. weiche Fehler im Prompt unterscheiden |
| JSON-Parse fehlgeschlagen | Constraints für [strukturierte Ausgabe](/guide/developer-platform/non-interactive/structured-output/) verschärfen |
| Quota erschöpft | Auf wöchentlich + inkrementelle Prüfung umstellen |

## 5. Verstetigen

- Nach dem dritten erfolgreichen Lauf als Skill `docs-link-audit` verstetigen
- In den [Team-Befehlsregeln](/guide/customization/rules/team-rules/) `npm run build` und nur-lesendes Git erlauben

## 6. Verwandte Kapitel

- [Lange Aufgaben verwalten](/cases/workflows/long-running-task-management/)
- [Automations geplante Aufgaben](/skills/automations/scheduled-tasks/)
- [Lernpfad für Teams](/guide/learning-paths/team/)

---

**Status:** verified  
**Geeignete Produkte:** CLI  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu nicht-interaktivem Modus, Skripten und Pipelines, strukturierter Ausgabe, Team-Regeln und Automatisierung. Der Inhalt beschränkt sich auf den stabilen Team-Automatisierungsfall „geplante Link-Prüfung, strukturierter Report und Stopp bei Fehlern“.  
**Zuletzt geprüft:** 2026-07-26
