---
title: Ein Prompt-Beispiel hinzufügen
description: Reiche unter examples/prompts einen reproduzierbaren Prompt mit Metadaten und Abnahmekriterien ein.
sidebar:
  order: 20
locale: de
source_locale: zh-CN
source_revision: cd78464
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Prompt-Beispiele liegen im Stammverzeichnis des Repositorys unter [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts) und werden aus dem Handbuchtext verlinkt. Die Gestaltungsregeln findest du unter [System für Prompts, Skills und Fallbeispiele](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md).

## Inhalt dieser Seite

Typische Schwierigkeiten sind:

- Es ist unklar, welche Prompts überhaupt eine Aufnahme wert sind
- Es ist unklar, welches Format eine direkte Wiederverwendung durch andere ermöglicht

Diese Seite erklärt, wie du ein Beispiel einreichst, das andere **tatsächlich ausprobieren, zum Lernen verwenden und reproduzieren** können.

## Aufnahmekriterien

Aufgenommen werden reproduzierbare Beispiele mit Kontext, Grenzen und Abnahmekriterien, keine bloßen Ideenfragmente.

Ein geeignetes Prompt-Beispiel beantwortet mindestens drei Fragen:

- Wann wird es verwendet?
- Wie lautet es konkret?
- Woran lässt sich anschließend erkennen, ob die Aufgabe gut erledigt wurde?

Ein klug klingender Text ohne Voraussetzungen und Abnahmekriterien ist eher eine Notiz als ein Beispiel.

## Dateinamen

```text
examples/prompts/<category>/<slug>.md
```

Beispiele für `category`: `development`, `research`, `meta-workflows`, `team`.

## Erforderliche Metadaten (YAML-Frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Einen Bug beheben und Tests ergänzen
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Erforderliche Abschnitte

1. **Einsatzszenario**
2. **Vorbereitung** (Berechtigungen, Branch, Kontextdateien)
3. **Empfohlener Prompt** (vollständig kopierbar)
4. **Abnahmekriterien** (objektiv prüfbare Checkliste)
5. **Häufige Fehlerbilder**
6. **Zugehörige Handbuchseiten** (Links nach `src/content/docs/`)

Optional: Kurzfassung, didaktische Erläuterung und austauschbare Variablen.

## Häufige Missverständnisse

### Den Schwerpunkt nicht verstreuen

Manche Beiträge enthalten so viel Hintergrund, Theorie und weiterführende Erklärung, dass der tatsächlich kopierbare Prompt dazwischen kaum zu finden ist.

Eine stabilere Reihenfolge ist:

- Zuerst den empfohlenen Prompt vollständig formulieren
- Danach Voraussetzungen, Variablen und Fehlerbilder ergänzen
- Erklärende Inhalte zuletzt hinzufügen

### Einmal selbst verwendet ist noch kein vollständiges Beispiel

Du kennst die Voraussetzungen, die du bei der eigenen Verwendung stillschweigend angenommen hast. Leser kennen sie nicht.

Lege sie deshalb ausdrücklich offen, zum Beispiel:

- Für welchen Produkteinstieg das Beispiel gedacht ist
- Welche Dateien, Screenshots oder sonstigen Kontextinformationen benötigt werden
- Ob Dateiänderungen, Befehlsausführung oder Netzwerkzugriff standardmäßig erlaubt sind

### Keine echten vertraulichen Daten in Beispiele schreiben

Ein Beispiel mit echten Tokens, Konten, internen Links oder Kundendaten gehört nicht in ein öffentliches Repository.

Das Beispiel soll eine Methode vermitteln, nicht deine Produktionsumgebung offenlegen.

## Beispiel für Abnahmekriterien

```markdown
## Abnahmekriterien

- [ ] Der ursprünglich fehlgeschlagene Test besteht
- [ ] Die vereinbarte Testsuite besteht
- [ ] Der Diff betrifft nur aufgabenrelevante Dateien
- [ ] `git push` wurde nicht ausgeführt
```

## Qualitätsanforderungen

- Ziel und Fertigstellungsdefinition sind eindeutig
- Berechtigungs- und Sicherheitsgrenzen sind beschrieben
- Keine echten Zugangsdaten und keine personenbezogenen Daten
- Der Status `verified` erfordert eine [unabhängige Verifikation](/de/guide/contributing/verify-technical-content/)

## Ablauf für Beiträge

Diese Reihenfolge ist in der Regel zuverlässig:

1. Bestimme zunächst, welche Art realer Aufgabe das Beispiel löst.
2. Formuliere dann einen Prompt, den andere direkt übernehmen können.
3. Nenne die mindestens erforderlichen Voraussetzungen und Grenzen.
4. Beschreibe eindeutig, was als Erfolg gilt.
5. Prüfe abschließend auf vertrauliche Informationen und den richtigen Verzeichnisort.

## PR-Checkliste

- [ ] Der neue Dateipfad wurde gegebenenfalls in den Index von `examples/README.md` aufgenommen
- [ ] Mindestens eine Fallbeispiel- oder Workflow-Seite verlinkt das Beispiel (optional, aber empfohlen)

Ein gutes Prompt-Beispiel ermöglicht anderen, den Ablauf direkt zu reproduzieren und ein vergleichbares Ergebnis zu erhalten.

---

**Status:** verified  
**Prüfgrundlage:** Mit dem aktuellen Verzeichnis `examples/`, dem Frontmatter vorhandener Beispiele, der Indexierung und dem Beitragsablauf dieses Repositorys abgeglichen. Die Anforderungen entsprechen der bestehenden Linkstruktur von Fallbeispielen und Workflows und hängen nicht vom veränderlichen Verhalten eines bestimmten Codex-Clients ab.  
**Zuletzt geprüft:** 2026-07-26
