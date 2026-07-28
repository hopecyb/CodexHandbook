---
title: Mitwirken
description: "Wie Sie an diesem Handbuch Text, Fälle, Prompt-Beispiele und Übersetzungen beitragen — Prozess und Qualitätsstandards."
sidebar:
  order: 80
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Das **Codex Handbook** ist eine community-gepflegte Dokumentationssite. Willkommen: Fehler korrigieren, Seiten ergänzen, reproduzierbare Fälle und Prompt-Beispiele unter [examples/](/examples/README.md) hinzufügen.

## Inhalt dieser Seite

- Beitragstypen und Einstiege
- Schreib- und Prüfstandards
- PR- und Release-Erwartungen

## Welche Beiträge am wertvollsten sind

Wenn Sie auf der Site sehen:

- Stellen, die Sie selbst nicht verstehen
- Sidebar-Einstiege ohne ausreichende Orientierung
- Veraltete Befehle, Screenshots, Hinweise

… sind das schon wertvolle Beitragsansätze.

Sie müssen nicht „der Experte“ sein. Viele nützliche Verbesserungen kommen von Erstnutzern: „Hier setzt voraus, dass ich es schon weiß — aber ich habe es nicht verstanden.“

## Beitragstypen

| Typ | Erklärung | Leitfaden |
|---|---|---|
| Korrektur/kleine Änderung | Tippfehler, Links, ein veralteter Satz | Direkt PR |
| Neue Guide-Seite | Kapiteltext unter `src/content/docs/` | [Guide-Seite schreiben](/guide/contributing/write-a-guide/) |
| Fallstudie | `src/content/docs/cases/` | [Fallstudien-Template](/cases/use-cases/case-study-template/) |
| Prompt-Beispiel | `examples/prompts/` | [Prompt-Beispiel hinzufügen](/guide/contributing/add-a-prompt-example/) |
| Technische Prüfung | `verified` markieren, Datum | [Technische Inhalte prüfen](/guide/contributing/verify-technical-content/) |
| Übersetzung | `en/`, `zh-tw/` usw. | Roadmap M6; zuerst Quelltext stabilisieren |

## Häufige Missverständnisse

### Beitrag ≠ gleich ein ganzes Kapitel neu schreiben

Viele denken zuerst an große Neuschreibungen.

Wertvoll sind auch:

- Erklärung für Einsteiger nachziehen
- Irreführende Formulierung korrigieren
- Fehlenden Sidebar-Einstieg ergänzen
- Veraltete Befehle herabstufen oder datieren

### „Kein Experte“ ≠ „Feedback nutzlos“

Zielt die Audience auf Anfänger, sind Ihre Stolperstellen starke Signale.

Wichtig: Problem konkret machen und möglichst klarer ausdrücken — nicht nur „verstehe ich nicht“ hinterlassen.

## Grundprinzipien

1. **Vereinfachtes Chinesisch `root` = Quelltext** (soweit nicht anders angegeben)
2. **Keine** Fremdtutorial-Originale kopieren; siehe [External-Source-Integrationsplan](/docs/planning/external-source-integration.md)
3. **Flüchtige Fakten** mit `Zuletzt geprüft`-Datum
4. **Jeder Sidebar-Slug** braucht passende Markdown — sonst scheitert `npm run build`
5. Neue Seiten: `astro.config.mjs`-Sidebar synchron aktualisieren

## Erster Beitrag — so starten

Stabil:

1. Punkt wählen, an dem Sie wirklich hängen geblieben sind
2. Einordnen: Textkorrektur, Seite, Beispiel oder veraltete Info prüfen
3. Nur diesen kleinen Block ändern — Prämissen und Leserperspektive klar
4. Build laufen lassen, Site-Struktur nicht kaputtmachen

Erfolgreicher und reviewbarer als sofort ein ganzes Kapitel umzubauen.

## Lokale Entwicklung

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Vor dem Merge:

```bash
npm run build
```

## Verhaltenskodex

- Arbeit anderer respektieren; sachlich diskutieren
- Keine echten Secrets, keine Kundendaten
- Vor großen Refactors Issue oder RFC

Der erste Beitrag muss nicht lang sein. Eine echte Einsteiger-Stolperstelle klarziehen und den Build bestehen — schon sehr wertvoll.

## Verwandte Links

- Repo: <https://github.com/hopecyb/CodexHandbook>
- [Kapitel-Outline](/docs/planning/chapter-outline.md) (Planung)

---

**Status:** verified  
**Prüfgrundlage:** Gegen aktuelle Verzeichnisstruktur, Sidebar-Pflege, Seitenstatus und Beitragsprozess geprüft; Handbuch-Wartungsregeln, unabhängig von volatiler Codex-Client-UI.  
**Zuletzt geprüft:** 2026-07-26
