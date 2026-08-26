---
title: Zum Handbuch beitragen
description: So trägst du Inhalte, Fallbeispiele, Prompt-Beispiele und Übersetzungen bei. Mit Ablauf und Qualitätsanforderungen.
sidebar:
  order: 80
locale: de
source_locale: zh-CN
source_revision: b13e05c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Das **Codex-Handbuch** ist eine von der Community gepflegte Dokumentationssite. Beiträge können Fehler korrigieren, Seiten ergänzen, reproduzierbare Fallbeispiele hinzufügen oder Prompt-Beispiele unter [examples/](https://github.com/hopecyb/CodexHandbook/tree/main/examples) bereitstellen.

## Inhalt dieser Seite

- Arten von Beiträgen und ihre Einstiegspunkte
- Schreib- und Verifikationsstandards
- Erwartungen an PR und Veröffentlichung

## Welche Beiträge besonders wertvoll sind

Wenn dir auf der Site Folgendes begegnet:

- Eine Stelle, die du selbst nicht verstehst
- Ein Navigationseintrag, dessen Inhalt keine ausreichende Orientierung bietet
- Ein veralteter Befehl, Screenshot oder Erklärungstext

dann hast du bereits einen wertvollen Ansatzpunkt gefunden.

Du musst nicht erst zur führenden Fachperson werden, bevor du helfen kannst. Viele besonders nützliche Verbesserungen entstehen gerade dann, wenn Einsteiger darauf hinweisen: „Hier wird Wissen vorausgesetzt, das ich noch nicht habe.“

## Arten von Beiträgen

| Art | Beschreibung | Anleitung |
|---|---|---|
| Korrektur oder kleine Änderung | Tippfehler, Link oder einzelner veralteter Satz | Direkt einen PR öffnen |
| Neue Anleitungsseite | Kapitelinhalt unter `src/content/docs/` | [Eine Anleitung schreiben](/de/guide/contributing/write-a-guide/) |
| Fallbeispiel | Unter `src/content/docs/cases/` | [Vorlage für Fallbeispiele](/de/cases/use-cases/case-study-template/) |
| Prompt-Beispiel | Unter `examples/prompts/` | [Ein Prompt-Beispiel hinzufügen](/de/guide/contributing/add-a-prompt-example/) |
| Technische Verifikation | Als `verified` markieren und Datum aktualisieren | [Technische Inhalte verifizieren](/de/guide/contributing/verify-technical-content/) |
| Übersetzung | `en/`, `zh-tw/` usw. | Roadmap M6; zuerst den Quelltext stabilisieren |

## Häufige Missverständnisse

### Ein Beitrag muss kein vollständiges neues Kapitel sein

Viele Personen stellen sich unter ihrem ersten Beitrag sofort ein umfangreiches neues Kapitel vor.

Auch diese Änderungen sind wertvoll:

- Eine Erklärung ergänzen, die Einsteiger verstehen
- Eine irreführende Formulierung korrigieren
- Einen fehlenden Navigationseintrag ergänzen
- Einen veralteten Befehl herabstufen oder mit einem Datum kennzeichnen

### „Ich bin kein Experte“ bedeutet nicht „Mein Feedback ist nutzlos“

Wenn Einsteiger zur Zielgruppe gehören, ist jede Stelle, an der du beim Lesen hängen bleibst, ein wichtiges Signal.

Beschreibe das Problem konkret und versuche, die Formulierung verständlicher zu machen, statt nur „Das verstehe ich nicht“ zu hinterlassen.

## Grundprinzipien

1. **Das vereinfachte Chinesisch im `root` ist der Quelltext**, sofern nicht anders angegeben.
2. **Kopiere keine** externen Anleitungen; beachte den [Plan zur Integration externer Quellen](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md).
3. **Veränderliche Fakten** müssen mit einem Datum unter `Zuletzt geprüft` gekennzeichnet werden.
4. Neue Seiten benötigen gültiges Frontmatter, einen korrekten Dateipfad und Querverweise.
5. Die Sidebars der vier aktuellen Module werden automatisch aus den Verzeichnissen erzeugt. Führe nach einer neuen Datei den Build aus und prüfe Reihenfolge sowie Einstiegspunkt.

## Ein guter Einstieg für den ersten Beitrag

Wenn dies dein erster Beitrag ist, gehe am besten so vor:

1. Wähle eine Stelle, an der du gerade selbst tatsächlich hängen geblieben bist.
2. Entscheide, ob eine Textkorrektur, neue Seite, ein Beispiel oder die Verifikation veralteter Informationen nötig ist.
3. Ändere nur diesen kleinen Bereich, erkläre aber Voraussetzungen und Leserperspektive eindeutig.
4. Führe den Build aus und prüfe, dass die Sitestruktur intakt bleibt.

Dieser Ansatz ist leichter umzusetzen und zu reviewen als eine sofortige Überarbeitung eines ganzen Kapitels.

## Lokale Entwicklung

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Vor dem Zusammenführen ausführen:

```bash
pnpm build
```

## Verhaltenskodex

- Respektiere die Arbeit anderer; diskutiere die Sache, nicht die Person
- Reiche keine echten Zugangsdaten oder Kundendaten ein
- Besprich großflächige Umstrukturierungen zuerst in einem Issue oder RFC

Dein erster Beitrag muss nicht umfangreich sein. Es ist bereits wertvoll, eine Stelle verständlich zu machen, an der Einsteiger tatsächlich scheitern, und den erfolgreichen Build nachzuweisen.

## Zugehörige Links

- Repository: <https://github.com/hopecyb/CodexHandbook>
- [Kapitelübersicht](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md) (Planungsdokument im Repository)

---

**Status:** verified  
**Prüfgrundlage:** Mit der aktuellen Verzeichnisstruktur, Sidebar-Verwaltung, den Seitenstatus und dem Beitragsablauf dieses Repositorys abgeglichen. Die Seite beschreibt Pflegevorgaben des Handbuchs und hängt nicht von veränderlichem UI-Verhalten eines Codex-Clients ab.  
**Zuletzt geprüft:** 2026-07-26
