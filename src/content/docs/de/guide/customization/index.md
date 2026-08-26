---
title: Personalisierung und Projektkonfiguration
description: Persönliche Vorlieben, AGENTS.md, Konfiguration und Regelpriorität — damit Codex dauerhaft nach Ihrer Weise arbeitet.
sidebar:
  order: 40
locale: de
source_locale: zh-CN
source_revision: 3a2992b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Codex stützt sich nicht nur darauf, „wie Sie diesmal fragen“, sondern auch auf **persistente Konfiguration**, um Ihre und die Team-Vereinbarungen zu merken. Dieses Kapitel trennt vor allem, welche Anforderungen im Gespräch bleiben und welche ins Projekt wandern sollen.

Wenn Sie dieselben Sätze schon wiederholen — etwa „dieses Verzeichnis nicht anfassen“, „zuerst Tests laufen lassen“ oder „standardmäßig dieses Modell verwenden“ — behandelt dieses Kapitel genau solche Fälle.

## Inhalt

- Persönliche Vorlieben, Projektanweisungen, Teamregeln und temporäre Prompts — **wer überschreibt wen**
- Was in `AGENTS.md` hingehört und was nicht
- Auf welcher Schicht Konfigurationsdateien sowie Freigabe-/Sandbox-Richtlinien liegen

## Für wen

| Leser | Zuerst lesen |
|---|---|
| Erste Aufgabe gerade zum Laufen gebracht | [Projektanweisungen](/de/guide/customization/project-instructions/) |
| Kollaborationsnormen im Repo verankern | [Was ist AGENTS.md](/de/guide/customization/agents-md/what-is-agents-md/) |
| CLI-/App-Verhalten vereinheitlichen | [Konfigurationsgrundlagen](/de/guide/customization/configuration/config-basics/) |

## Worum es in diesem Kapitel geht

Viele stoßen nach einer Weile mit Codex auf dasselbe Muster: Es gibt viele Regeln, aber sie wirken nicht zuverlässig — oder widersprechen sich an verschiedenen Stellen.

Dieses Kapitel dreht sich darum, Kollaborationsregeln sauber zu schichten:

- Was ist meine persönliche Gewohnheit
- Was ist eine gemeinsame Repo-Regel
- Was ist eine harte Grenze auf Organisationsebene
- Was ist nur eine vorübergehende Anforderung dieser Aufgabe

Ohne klare Schichtung entsteht leicht „viel geschrieben, aber wenn es gelten sollte, galt es nicht“.

## Übliche Schichten (konzeptuell)

Schichten zu verstehen, hilft gegen die Verwirrung „Regeln geschrieben, aber nicht wirksam“. Clients, organisationsgesteuerte Fähigkeiten und Versionsimplementierungen können abweichen, aber Sie können typischerweise mit diesen Schichten starten:

```text
1. Organisations-/Team-Richtlinie (falls ausgerollt)
2. Projekt-AGENTS.md / Projektanweisungen (im Repo)
3. Benutzerkonfiguration und Vorlieben (lokal ~/.codex usw.)
4. Temporäre Anforderungen und @-Verweise in der aktuellen Aufgabe
```

**Prinzip:** Je näher an „organisatorisch erzwungen“, desto weniger darf eine einzelne Aufgabe das locker aufweichen; je näher an „aktuelle Aufgabe“, desto flexibler — und desto leichter geht es mit dem Session-Ende verloren. Die konkrete Precedence richtet sich nach dem aktuellen Client und der offiziellen Dokumentation.

## Häufige Missverständnisse

### 1. Solange ich gute Prompts schreibe, brauche ich keine langfristige Konfiguration?

Für kurze Aufgaben reicht das vielleicht. Sobald die Zusammenarbeit andauert, wollen Sie wiederkehrende Anforderungen aber immer stärker „versenken“.

### 2. Alles in `AGENTS.md` stopfen reicht?

Auch nicht.  
Manches gehört besser in:

- persönliche Vorlieben
- Konfigurationsdateien
- organisationsgesteuerte Richtlinien
- den Prompt der aktuellen Aufgabe

### 3. Mehr Konfiguration ist nicht besser

Zu verstreute Einstellungen, zu lange Regeln und chaotische Schichten machen es Menschen und Werkzeugen schwerer zu wissen, wem man folgen soll.

## Navigation in diesem Kapitel

| Thema | Seiten |
|---|---|
| AGENTS.md | [Überblick](/de/guide/customization/agents-md/what-is-agents-md/) · [Geltungsbereich und Priorität](/de/guide/customization/agents-md/scope-and-precedence/) · [Projektanweisungen schreiben](/de/guide/customization/agents-md/writing-effective-instructions/) |
| Projektanweisungen | [Projektanweisungen](/de/guide/customization/project-instructions/) |
| Erinnerung | [Erinnerungen und persistenter Kontext](/de/guide/customization/memories-and-persistent-context/) |
| Mechanismuswahl | [Den richtigen Mechanismus wählen](/de/guide/customization/choosing-the-right-mechanism/) |
| Konfigurationsdateien | [Konfigurationsgrundlagen](/de/guide/customization/configuration/config-basics/) · [Profile](/de/guide/customization/configuration/profiles/) |
| Persönliche Vorlieben | [Persönliche Vorlieben](/de/guide/customization/personal-preferences/) |
| Regeln | [Erlauben und Ablehnen](/de/guide/customization/rules/allow-and-deny-patterns/) · [Befehlsregeln](/de/guide/customization/rules/command-rules/) · [Teamrichtlinien](/de/guide/customization/rules/team-rules/) |
| Beispiele | [AGENTS.md in einem Monorepo](/de/guide/customization/examples/monorepo-agents-md/) |

Die Rules-Unterseiten sind angelaufen; weitere Konfigurationsdetailseiten folgen mit dem Customization-Modul.

## Empfohlene Reihenfolge

Wenn Sie Codex-Kollaborationsregeln zum ersten Mal systematisch ordnen, können Sie so vorgehen:

1. Zuerst Projektregeln sortieren
2. Dann `AGENTS.md` ergänzen
3. Dann persönliche Vorlieben trennen
4. Zuletzt Konfigurationsdateien und feinere Regelsteuerung angehen

Das ist weniger chaotisch, als sofort Dutzende Config-Keys zu ändern.

Regeln müssen nicht zahlreich sein — der richtige Ort zählt mehr.

## Häufige Fehler

- Lange Architektur-Dokumente in `AGENTS.md` stopfen; kritische Constraints gehen unter
- Teamnormen nur im Chat wiederholen, aber nicht committen — Erfahrung der Mitwirkenden wird inkonsistent
- Lokal die Sandbox lockern und im gemeinsamen Repo annehmen, Teamkollegen hätten dieselben Berechtigungen

## Abnahmeliste

- [ ] Die Priorität der vier Konfigurationsschichten erklären können
- [ ] Im Repo eine kurze `AGENTS.md` (oder gleichwertige Projektanweisung) haben
- [ ] Sensible Operationen weiterhin über Freigabe laufen lassen — nicht auf Textregeln setzen, die das Modell „einschüchtern“

## Quellen
- OpenAI-Codex-Dokumentation: [https://developers.openai.com/codex](https://developers.openai.com/codex)
---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Aktuelle OpenAI-Hilfecenter- und Codex-Konfigurationsmaterialien beschreiben weiterhin die Schichtung aus Benutzer-`~/.codex`, organisationsgesteuerten Fähigkeiten und projektbezogenen Kollaborationshinweisen; diese Seite formuliert „Priorität“ bewusst konservativ als übliche Schichtung und vermeidet, implementierungsspezifische Details als absolute Regeln darzustellen.  
**Zuletzt geprüft:** 2026-07-26
