---
title: Projektanweisungen
description: "Projektkontext jenseits von AGENTS.md: Rollenverteilung von README, docs und Dialogverweisen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


„Projektanweisungen“ sind der **statische Kontext**, mit dem Codex das Repo versteht — nicht auf ein Dateiformat beschränkt.

## Inhalt

- Wo projektbezogene Informationen außer `AGENTS.md` liegen sollten
- Wie README, docs und Skriptdateien die Arbeit teilen
- Was ins Repo gehört und was nur im aktuellen Dialog bleiben sollte

## Bestandteile des Projektkontexts

| Quelle | Rolle |
|---|---|
| `AGENTS.md` | Kollaborationsregeln und Befehle (Autorität: AGENTS-Serie in diesem Kapitel) |
| `README.md` | Was das Projekt ist, wie man startet |
| `docs/` | Architektur, ADR, Runbooks |
| Abhängigkeiten und Skripte | Ausführbare Wahrheit: `package.json`, `Makefile` usw. |

Codex liest diese Materialien mit Werkzeugen; entscheidend ist **eine einzige Wahrheit**. Die Startbefehle im README müssen wirklich laufen.

## Grundvorgehen

1. Im Root-`README.md` vier Abschnitte: Zweck, Installation, Entwicklung, Tests
2. **Wiederholt an Codex gerichtete Hinweise** in `AGENTS.md` versenken
3. In Aufgaben mit `@` auf konkrete Dateien zeigen, statt Volltext einzufügen:

```text
Nach den Testanforderungen in @AGENTS.md den Nullzeiger in @src/auth/login.ts beheben.
Design siehe @docs/auth-flow.md
```

## Warum das zählt

Häufig:

- README sagt A
- docs sagen B
- die wirklich lauffähigen Befehle stecken in `package.json`

Dann verwirren sich Menschen und Codex. Ziel: die „Repo-Wahrheit“ möglichst zentral und konsistent halten.

## Abgrenzung zum Gesprächskontext

- **Projektanweisungen**: über Monate relativ stabil
- **Gesprächskontext**: Ziel, Constraints und Zwischenfazits dieser Aufgabe

Taucht eine Regel in langen Aufgaben immer wieder auf, **zurückschreiben** nach `AGENTS.md` oder `docs/` — nicht in zehn Threads kopieren. Siehe [Kontext fokussiert halten](/guide/context/keep-context-focused/).

## Häufige Fehler

- Veraltetes README — Codex folgt falschen Befehlen
- Alles in ein riesiges `CONTEXT.md` stopfen, das niemand pflegt
- Sensible Informationen in öffentlichen Repo-Hinweisen

## Häufige Missverständnisse

### 1. Solange ich es im Chat erkläre, darf die Repo-Doku chaotisch sein

Kurzfristig vielleicht. Langfristig wird es schlimmer.

Beim nächsten Mal erklären Sie alles erneut — und andere sehen, was Sie diesmal gesagt haben, nicht.

### 2. `AGENTS.md` löst jedes Projekt-Dokumentationsproblem

Nein.

`AGENTS.md` eignet sich für Regeln und Kollaborationsconstraints — nicht als Ersatz für Projektorientierung, Architekturhintergrund und vollständige Betriebsanleitungen.

### 3. Mehr Dokumentation ist besser

Wichtiger:

- klare Aufteilung
- konsistenter Inhalt
- kritische Befehle lauffähig

## Aufteilungsempfehlung

- `README.md`: Was das Projekt ist, Start, Tests
- `AGENTS.md`: Kollaborationsregeln, Tabuzonen, Definition of Done
- `docs/`: Längerer Hintergrund, Architektur, Prozessbeschreibungen
- Skripte und Config: ausführbare Wahrheit

Projektanweisungen sollen Codex und Menschen dieselbe „Repo-Wahrheit“ finden lassen. Die Dokumentmenge an sich ist Nebensache.

## Abnahmeliste

- [ ] Nach Clone können Mensch (oder Codex) Tests mit README + AGENTS.md zum Laufen bringen
- [ ] Aufgabenprompts arbeiten vor allem mit @-Verweisen, ohne lange Hintergründe zu wiederholen

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle OpenAI-Developers-Hinweise zu Projektkontext und Dateikollaboration sowie verifizierte Kapitel zu Projektkontext, Dateien und Workflows; Inhalt beschränkt auf die stabile Aufteilung von README, `AGENTS.md`, `docs/` und Aufgabendialog.  
**Zuletzt geprüft:** 2026-07-26
