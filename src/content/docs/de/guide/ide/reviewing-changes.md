---
title: Änderungen in der IDE prüfen
description: Prüfe Diffs direkt neben dem Quellcode und lasse den Worktree von einem schreibgeschützten Reviewer untersuchen.
sidebar:
  order: 70
locale: de
source_locale: zh-CN
source_revision: 1ca9ffe
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

In der IDE kannst du eine Zusammenfassung und einen fokussierten Diff direkt neben dem Quellcode lesen. Dass Änderungen im Editor erscheinen, bedeutet jedoch nicht, dass sie abgenommen sind. Prüfe zuerst den Diff, führe dann die Tests aus und entscheide schließlich, welche Inhalte erhalten bleiben.

## Ein lokales Review abschließen

1. Lies die Ergebniszusammenfassung, verwende sie aber nicht als Ersatz für den Diff.
2. Klappe die geänderten Zeilen aus und prüfe jede betroffene Datei.
3. Behalte passende Änderungen und fordere Korrekturen für Inhalte außerhalb des Umfangs an.
4. Führe im Eingabebereich `/review` aus.
5. Wähle den Vergleich mit einem Basis-Branch oder die Prüfung nicht committeter Änderungen.
6. Führe im IDE-Terminal die Projekttests und statischen Prüfungen aus.
7. Bestätige den Zustand abschließend erneut mit den Git-Werkzeugen.

`/review` wird nur angezeigt, wenn das geöffnete Projekt ein Git-Repository ist. Der Befehl meldet Probleme nach Priorität geordnet und verändert den Worktree nicht. In der IDE kannst du wählen:

- **Review against a base branch:** Aktuellen Branch mit dem ausgewählten Basis-Branch vergleichen
- **Review uncommitted changes:** Änderungen im aktuellen Worktree prüfen

Standardmäßig erscheinen die Ergebnisse im aktuellen Chat. Setze `chatgpt.reviewDelivery` auf `detached`, um einen eigenen Review-Chat zu starten.

## Beispiel: Eindeutige Kriterien für den Reviewer

```text
Prüfe die aktuellen nicht committeten Änderungen. Suche vorrangig nach Fehlern, die falsches Verhalten, Datenverlust oder Sicherheitsprobleme verursachen.
Ignoriere reine Stilpräferenzen. Jedes Finding muss eine konkrete Dateiposition, Auslösebedingung und überprüfbare Auswirkung enthalten.
Wenn du keine Findings hast, nenne verbleibende Lücken in der Testabdeckung.
```

## Abnahmecheckliste

- [ ] Die geänderten Dateien entsprechen dem erlaubten Aufgabenbereich
- [ ] Keine unerwarteten Löschungen, Formatierung ganzer Dateien oder vertraulichen Dateien
- [ ] Fehlerpfade und Grenzfälle sind abgedeckt
- [ ] Tests, Linting und Typprüfung bestehen nach den Projektvorgaben
- [ ] Findings hoher Priorität wurden behoben oder das Risiko ausdrücklich akzeptiert
- [ ] `git diff --check` und `git status --short` zeigen einen erwarteten Zustand

Für zeilenbezogene Kommentare, Vormerkung oder das Verwerfen einzelner Hunks kannst du in der Desktop-App [Diffs, Kommentare und Reviews](/de/guide/desktop-app/diffs-comments-and-review/) verwenden. Allgemeine Methoden beschreibt [Diffs prüfen](/de/guide/quality/review-diffs/).

## Offizielle Grundlage

- [Code review](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)

---

**Status:** verified

**Unterstützte Produkte:** IDE

**Zuletzt geprüft:** 2026-08-26
