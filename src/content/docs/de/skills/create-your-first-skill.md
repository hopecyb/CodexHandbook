---
title: Ersten Skill erstellen
description: Von null einen commitbaren pr-review-Skill — inkl. Test und Team-Sharing.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Wenn du Aufgaben schon verteilst, aber noch keinen echten Skill gebaut hast, zeigt diese Seite den Grundablauf.

In 15–30 Minuten einen **im Repo wiederverwendbaren** Skill zu bauen hilft oft mehr als lange Theorie. Guter Start: ein kleiner Skill mit klaren Grenzen.

## Für wen

Du kannst die [erste Aufgabe](/cases/first-task/) durchziehen und willst in einem Test-Repo experimentieren.

## Warum mit `pr-review` starten

Vorteile:

- Eingabe relativ klar
- Weniger riskant als „direkt Code ändern“
- Erfolg leicht beurteilbar
- Übt Auslösearten und Grenzformulierungen

Ideal, um ein Arbeitsmuster wiederverwendbar zu formulieren.

## Zielergebnis

Unter `.agents/skills/pr-review/` ein Skill, der zu aktuellen Änderungen strukturierte Review-Hinweise ausgibt.

## Mindestziele

Beim ersten Skill reicht:

1. Erkennbar sein
2. Einen klaren Ablauf stabil ausführen
3. Keine gefährlichen Aktionen „nebenbei“

Danach wird Iteration leichter.

## Schritte

### 1. Verzeichnis anlegen

```bash
mkdir -p .agents/skills/pr-review
```

### 2. SKILL.md schreiben

```md
---
name: pr-review
description: "Prüft den git Diff, listet Blocker, Testlücken und Stilhinweise. Nutzen, wenn der Nutzer Review, Prüfung oder Checks vor dem Merge erwähnt. Nicht für neue Features."
---

# PR-Review

## Eingabe
- Standard-Vergleichsbranch: main (sonst Default-Branch)

## Ablauf
1. Geänderte Dateien und Typen listen (Feature/Fix/Refactor/Docs)
2. Pro Logikänderung: fehlen Tests? API-Bruch?
3. Prüfen auf Secrets, Debug-Logs, zu große irrelevante Diffs
4. Ausgabe:
   - 🔴 Blocker: muss behoben werden
   - 🟡 Empfehlung: sollte behoben werden
   - 🟢 OK: erfüllt AGENTS.md-Anforderungen

## Verboten
- Kein git push
- Keine unbesprochenen öffentlichen APIs ändern
```

### 3. Lokal ausprobieren

Repo in Codex öffnen und versuchen:

```text
$pr-review Bitte prüfe meine aktuellen uncommitteten Änderungen
```

Oder natürlichsprachlich: „Prüfe den Diff nach Teamgewohnheit, Fokus auf Tests.“

### 4. Zuerst explizit, dann implizit

Nicht sofort Auto-Auslösung testen.

Reihenfolge:

1. `$pr-review` explizit
2. Ablauf und Ausgabe prüfen
3. Dann natürlichsprachlich

So trennst du Skill-Inhalt von unklarer `description`.

### 5. description iterieren

Wird der Skill **nie automatisch gewählt**: Auslösewörter in der `description` schärfen oder ergänzen. Wird er **zu oft falsch gewählt**: „Wann nicht“ ergänzen.

### 6. Mit dem Team teilen

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

In Team-README oder `AGENTS.md` einen Satz: „Vor dem Merge `$pr-review` nutzen.“

## Häufige Missverständnisse

### 1. Der erste Skill muss maximal vollständig sein

Oft umgekehrt: Je kleiner und fokussierter, desto klarer der Nutzen.

### 2. Skills müssen „klug“ klingen

Wichtiger: **klare Grenzen**.

Was er tut und was nicht, schlägt „beeindruckend wirken“.

### 3. „Läuft“ = Erfolg

Ein nützlicher Skill erfüllt mindestens:

- Andere wissen, wann er greift
- Ausgabe hat feste Struktur
- Keine gefährlichen Nebenaktionen

## Abnahme-Checkliste

- [ ] `$pr-review` läuft durch und führt keine gefährlichen Git-Operationen aus
- [ ] Ausgabe enthält gestufte Schlüsse, keine Allgemeinplätze
- [ ] `description` nennt das Auslöseszenario in einem Satz
- [ ] Gegen [Berechtigungen und Freigabe](/guide/permissions-and-sandbox/) geprüft (dieses Beispiel hat keine Skripte)

Ein „kleiner, stabiler“ Skill macht klare Arbeitsmuster leichter wiederverwendbar.

## Nächste Schritte

- [Verstehen—Planen—Ausführen—Prüfen](/prompts/templates/understand/) als Skill absichern
- Bei GitHub-API-Bedarf [MCP](/skills/mcp/mcp-overview/) einbinden

## Quellen

- Offizielle OpenAI-Codex-Skills-Beispiele und `skill-creator` (falls vorhanden)

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE  
**Prüfgrundlage:** Die aktuelle Codex-Laufzeit unterstützt projektinterne Skill-Verzeichnisse, Skills über `SKILL.md` und explizite Probeläufe; diese Seite ist eine stabile Einstiegsübung für den ersten Skill.  
**Zuletzt geprüft:** 2026-07-26
