---
title: Prompt-Beispiel hinzufügen
description: "Reproduzierbare Prompts unter examples/prompts einreichen — mit Metadaten und Abnahmekriterien."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Prompt-Beispiele liegen im Repo-Root unter [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts), verknüpft aus dem Handbuchtext. Design: [`docs/planning/examples-system.md`](/docs/planning/examples-system.md).

## Inhalt dieser Seite

Typische Stolperstellen:

- Unklar, welcher Prompt „aufnahmefähig“ ist
- Unklar, welches Format Wiederverwendung ermöglicht

Ziel: ein Beispiel einreichen, das andere **probieren, lernen und reproduzieren** können.

## Aufnahmekriterien

Wir nehmen „reproduzierbare Beispiele mit Kontext, Grenzen und Abnahme“ — keine Inspiration-Schnipsel.

Ein brauchbares Prompt-Beispiel beantwortet mindestens:

- Wann nutzen
- Wie genau formulieren
- Wie danach urteilen, ob es geklappt hat

Klingt nur klug, ohne Prämissen und Abnahme → eher Notiz als Beispiel.

## Dateinamen

```text
examples/prompts/<category>/<slug>.md
```

`category`-Beispiele: `development`, `research`, `meta-workflows`, `team`.

## Pflicht-Metadaten (YAML-Frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Bug beheben und Tests ergänzen
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Pflichtabschnitte im Text

1. **Nutzungsszenario**
2. **Vorbereitung** (Berechtigungen, Branch, Kontextdateien)
3. **Empfohlener Prompt** (vollständig kopierbar)
4. **Abnahmekriterien** (Checkliste, objektiv prüfbar)
5. **Häufige Fehlwege**
6. **Verwandte Handbuchseiten** (Links nach `src/content/docs/`)

Optional: Minimalversion, didaktische Zerlegung, austauschbare Variablen.

## Häufige Missverständnisse

### Fokus nicht zerstreuen

Mancher schreibt viel Hintergrund und Theorie — der kopierbare Prompt verschwindet in der Mitte.

Stabiler:

- Empfohlenen Prompt zuerst vollständig
- Dann Prämissen, Variablen, Fehlwege
- Erklärung zuletzt

### Einmal selbst genutzt ≠ vollständiges Beispiel

Sie kennen Ihre Default-Prämissen — Leser nicht.

Prämissen schreiben, z. B.:

- Welcher Produkteinstieg
- Welche Dateien, Screenshots, Kontext
- Ob Dateiänderung, Befehle, Netz default erlaubt

### Keine echten Sensiblen im Beispiel

Echte Tokens, Konten, Intranet-Links, Kundendaten → ungeeignet fürs öffentliche Repo.

Beispiel lehrt Methode — nicht Ihre Produktionsumgebung.

## Abnahmekriterien-Beispiel

```markdown
## Abnahmekriterien

- [ ] Ursprünglich fehlgeschlagener Test grün
- [ ] Vereinbarter Testsuite-Umfang grün
- [ ] Diff nur aufgabenbezogene Dateien
- [ ] Kein git push
```

## Qualitätsschwelle

- Ziel und Definition of Done klar
- Berechtigungs- und Sicherheitsgrenzen erklärt
- Keine echten Secrets und kein PII
- Status `verified` braucht [unabhängige Prüfung](/guide/contributing/verify-technical-content/)

## Einreichungsablauf

Stabil:

1. Welche echte Aufgabenklasse löst das Beispiel
2. Version schreiben, die andere direkt kopieren
3. Minimale Voraussetzungen und Grenzen
4. Klar: „was zählt als Erfolg“
5. Sensibles und falsches Verzeichnis prüfen

## PR-Check

- [ ] Neuer Pfad in `examples/README.md`-Index (falls gepflegt)
- [ ] Mindestens eine Fall- oder Workflow-Seite verlinkt (optional, empfohlen)

Ein gutes Prompt-Beispiel lässt andere direkt reproduzieren und ähnliche Ergebnisse erzielen.

---

**Status:** verified  
**Prüfgrundlage:** Gegen aktuelles `examples/`-Verzeichnis, Beispiel-Frontmatter, Index und Beitragsprozess geprüft; Anforderungen an Fall-/Workflow-Links ausgerichtet, ohne volatile Client-Verhalten.  
**Zuletzt geprüft:** 2026-07-26
