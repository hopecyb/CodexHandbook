---
title: Zuerst einen Plan verlangen
description: 'Bevor Codex loslegt: Schritte, Risiken und Überprüfung klar machen lassen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele Probleme entstehen nicht, weil etwas unmöglich wäre — sondern weil **zu schnell gestartet** wird. Ein „hilf mir, das zu fixen“ vermengt Exploration, Plan und Ausführung; am Ende bleibst du beim Diff nur noch in der passiven Abnahme.

Effektiver ist dann: zuerst einen Plan verlangen, statt die Anforderungen immer länger zu schreiben.

## Wann du unbedingt zuerst einen Plan verlangen solltest

| Szenario | Warum |
|---|---|
| Mehrere Dateien oder Module | Leicht versehentlich irrelevante Bereiche treffen |
| Unbekanntes Codebase | Zuerst prüfen, welchen Scope es verstanden hat |
| Noch schwankende Anforderungen | Uneinigkeit früh sichtbar machen |
| Freigabe vor dem Ausführen nötig | „Ausführungsfreigabe“ und „Ideen diskutieren“ trennen |
| Hochriskante Aktionen | Rollback und Überprüfung zuerst sehen |

Kleine Tippfehler oder einzelne Textänderungen brauchen keinen formellen Plan — aber sobald „schieflaufen wäre teuer“ gilt, lohnt ein kurzer Stopp.

## Was ein guter Plan mindestens enthalten sollte

Die Minimalversion deckt diese vier Punkte ab:

1. Schritte
2. Betroffene Dateien oder Scope
3. Risiken oder offene Klärungspunkte
4. Wie jeder Schritt überprüft wird

Fehlt Punkt 4, ist es eher eine To-do-Liste als ein abnahmefähiger Plan.

## Drei gängige Formulierungen

### Minimalversion

```text
Noch keinen Code ändern. Gib mir zuerst einen Plan mit 3–5 Schritten:
welche Dateien, und wie jeder Schritt überprüft wird.
```

Passt: Du kennst die grobe Richtung und willst nur sehen, wie es zerlegt.

### Empfohlene Version

```text
Noch nicht ausführen. Bitte zuerst einen Plan auf Basis des aktuellen Repos, mit:
1. Verständnis des Ziels
2. Nummerierte Schritte
3. Betroffene Dateien oder Verzeichnisse
4. Risiken und offene Punkte
5. Überprüfungsmethode

Ändere keine Dateien, bis ich „Plan ausführen“ antworte.
```

Passt: Alltag in Entwicklung, Docs, Prompt-Umschreiben, Konfiguration.

### Hochrisiko-Version

```text
Noch keine Änderungen. Erstelle zuerst einen Plan und erkläre separat:
- Welcher Schritt Regressionen am ehesten einführt
- Wie bei Fehlschlag zurückgerollt wird
- Welche Aktionen meine Bestätigung brauchen
- Welche Tests oder manuellen Checks Fertigstellung belegen
```

Passt: Produktionsprobleme, Berechtigungen, Automatisierungsskripte, modulübergreifende Refactors.

## Ein Plan muss nicht möglichst lang sein

Du brauchst ein **prüfbares, steuerbares, ausführbares Zwischen-Artefakt** — keine Abhandlung.

Ob ein Plan brauchbar ist, siehst du an drei Punkten:

- Kannst du klar sagen: „Schritt 2 weglassen, anders machen“?
- Siehst du auf einen Blick, welche kritischen Bereiche es anfasst?
- Weißt du vor dem Start, wie du abnimmst?

Wenn nicht, ist der Plan noch zu vage.

## Wie du einen Plan freigibst / korrigierst

Du musst nichts neu schreiben — steuere wie bei einem Kollegen.

Typische Lenksätze:

```text
Behalte Schritt 1 und 2, streiche Schritt 3.
Teile DB-Änderungen als eigenen Schritt ab.
Nur lesende Analyse zuerst, noch keine Implementierung.
Ergänze Regressionstests und Rollback im Plan.
```

Das spart Kontext und zieht das Ergebnis leichter zurück auf Kurs.

## Nutzen gegenüber „einfach loslegen“

| Zuerst Plan | Direkt starten |
|---|---|
| Missverständnisse früh sichtbar | Richtung oft erst nach Änderungen falsch |
| Freigabe und Zusammenarbeit leichter | Du siehst nur den finalen Diff |
| Zerlegung in Teilaufgaben möglich | Mehrere Ziele vermischen sich leicht |
| Überprüfungsmethode früh klar | Tests oft erst ganz am Ende |

Viele Workflows trennen „Exploration“ und „Plan“ bewusst. Siehe [Explore—Plan—Execute—Verify](/cases/workflows/explore-plan-execute-verify/).

## Typische Plan-Probleme

### Nur Aktionen, keine Grenzen

Z. B. „Docs aktualisieren und Struktur verbessern“, ohne Verzeichnisse und unberührte Module. Solche Pläne wachsen leicht aus.

### Nur Implementierung, keine Überprüfung

Z. B. „Komponentenlogik ändern, Styles updaten, committen“ — ohne Nachweis, dass Verhalten intakt bleibt.

### Nur Aufgabenliste, keine offenen Punkte

Gute Pläne benennen Unsicherheit, statt alle Voraussetzungen als gegeben zu tun.

## Empfohlene Kombinationen

- Formelle Ausführungskette: [Planung](/guide/agent-work/planning/)
- Plan wiederverwendbar formulieren: [Aufgabenstruktur](/prompts/task-anatomy/)
- Unterwegs korrigieren: [Fortschritt und Steuerung](/guide/agent-work/progress-and-steering/)
- Abnahme klar definieren: [Fertigstellung definieren](/prompts/define-done/)

## Eine nützliche Team-Vereinbarung

In `AGENTS.md` kannst du festschreiben:

```md
- Bei Änderungen an 3+ Dateien zuerst einen Plan
- Keine destruktiven Befehle ohne Bestätigung
- Pläne müssen Überprüfungsmethoden enthalten
```

Dann ist „zuerst Plan“ keine Ad-hoc-Erinnerung mehr, sondern Team-Default.

## Quellen

- Plan- und Ausführungsansätze in der offiziellen OpenAI-Codex-Dokumentation
- Aufgaben- und Kollaborationspraxis aus freestylefly/CodexGuide
- Codex-Workflow-Kapitel in KimYx0207《AI-Coding-Guide-Zh》
- Praktische Ausführungsmethoden aus der stormzhang-Codex-Serie
- [codex.bozhouai.com](https://codex.bozhouai.com/)

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite beschreibt nur die Kollaborationsmethode „zuerst Plan“; interne Links und Beispielstruktur wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26
