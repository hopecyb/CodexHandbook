---
title: Hook-Ereignistypen
description: Hook-Auslösepunkte in der Codex-Ausführungskette — Validierung, Logs und Block an der richtigen Phase.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hier geht es darum, wann derselbe Check greifen soll.

**Hook-Ereignisse** sind die Zeitpunkte, an denen das System deine konfigurierte Logik aufruft. Nur mit klarem Ereignistyp landen „Audit und Validierung“ aus dem [Hooks-Überblick](/skills/hooks/hooks-overview/) in der Konfig — ohne jeden Werkzeugaufruf zu bremsen.

## Inhalt

- Häufige Ereignisphasen und Einsatzfälle
- Teilung mit [Befehlsregeln](/guide/customization/rules/command-rules/)
- Performance und Fehlschlag-Strategie bei der Konfiguration

## Ein Entscheidungsprinzip

Nicht zuerst fragen „kann dieser Hook das?“  
Sondern: Willst du **vor** der Aktion stoppen oder **danach** aufzeichnen?

Viele falsch platzierte Hooks scheitern am Timing.

:::note
**Ereignisnamen und Felder richten sich nach der [offiziellen Hooks-Dokumentation](https://developers.openai.com/codex).** Die Tabelle ist konzeptionell gruppiert; nach CLI-Upgrade `--help` und Release Notes prüfen.
:::

## Ereignisgruppen (Konzept)

| Phase | Typische Ereignisse (Konzeptnamen) | Geeignet für |
|---|---|---|
| Sitzung | `session.start` / `session.end` | Umgebungscheck, Änderungszusammenfassung, Audit-Fußnote |
| Vor Werkzeug | `tool.call.before` / `pre_tool_use` | Gefährliche Befehle blockieren, Secret-Muster scannen |
| Nach Werkzeug | `tool.call.after` / `post_tool_use` | Strukturiertes Log, Metriken, maskiertes Archiv |
| Prompt | `user_prompt.submit` | Policy-Scan, Längenlimit |
| Artefakt | `artifact.create` | Lizenzkopf, Dateityp-Whitelist |
| Integration | `pr.before_create` (falls unterstützt) | Issue-Nummer, Changelog-Format |

Dieselbe Logik nicht an mehreren Ereignissen doppelt hängen — den **frühsten Block-Punkt** wählen.

## Phasen verstehen

- **Sitzung**: Aufgabe startet oder endet
- **Vor Werkzeug**: Befehl/Werkzeug noch nicht ausgeführt
- **Nach Werkzeug**: Aktion geschehen — loggen, zusammenfassen, nachprüfen
- **Prompt**: Nutzerinhalt gerade eingereicht
- **Artefakt**: Datei/Ergebnis gerade erzeugt

Zuerst diese Ebene, Ereignisnamen später.

## Bezug zur Regel-Engine

```text
Nutzer-Prompt → (optional) Prompt-Hook
    → Modell schlägt Werkzeugaufruf vor
    → Regel-Engine allow/deny
    → (optional) pre_tool-Hook → Ausführen → post_tool-Hook
```

- **Regeln**: deklarativ, schnell, bekannte Befehlsmuster
- **Hooks**: imperative Skripte, komplexe Politik und externe Systeme

## Häufige Irrtümer

### 1. Vorher oder nachher — egal, solange geprüft wird

Großer Unterschied.

Nebenwirkungen verhindern → möglichst früh.  
Erst in `post_tool` finden ist oft zu spät.

### 2. Mehr/feinere Ereignisse = professioneller

Besser „wenig und treffsicher“ — einen passenden Punkt richtig setzen.

### 3. Ereignistypen sind nur Technikdetails

Sie bestimmen:

- Ob Risiko rechtzeitig gestoppt wird
- Ob Logs nützlich sind
- Ob die Interaktion langsam wird

## Fehlschlag-Strategie

| Strategie | Wann |
|---|---|
| `block` | Sicherheitsverstoß, harte Compliance |
| `warn` | Stil, Empfehlungschecks |
| `log` | Nur beobachten, nicht blockieren |

Bei Timeout/Crash **sicherheitshalber**: Produktion eher block oder fail-closed, Fehler für Diagnose loggen.

## Unsicher, wohin hängen?

Vereinfacht:

- Gefährliche Aktion stoppen → Pre-Ereignisse
- Aufzeichnen, was passiert ist → Post-Ereignisse
- Opening-Check oder Closing-Summary → Sitzungsereignisse

Reicht für die meisten Konfigs.

## Minimale Konfig-Idee

1. Ein Ereignis wählen (Start: `post_tool` nur Read-Log)
2. Skript liest JSON-Payload von stdin (Werkzeugname, Argument-Zusammenfassung, Arbeitsverzeichnis)
3. Exit `0` = ok, sonst nach Strategie block/warn
4. Unit-Test: festes JSON-Fixture

Erst klären: stoppen oder aufzeichnen — dann das Ereignis wählen.

Vollständige Beispiele: [Hook-Konfigurationsbeispiele](/skills/hooks/hooks-examples/).

## Häufige Fehler

- In `post_tool` blockieren, was `pre_tool` gehört (Nebenwirkung schon da)
- LLM oder langsames Netz im Hook → Interaktion tot
- Payload mit Secrets in Klartext-Logs
- Hook nicht versioniert → abweichende Team-Umgebungen

## Sicherheitsgrenzen

- Hook-Skript-Berechtigung ≤ überwachter Agent-Berechtigung
- Siehe [Team-Hook-Fälle](/skills/hooks/hooks-overview/#empfohlene-team-fälle) und [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/)

## Abnahme-Checkliste

- [ ] Häufigstes Team-Ereignis und Begründung nennen
- [ ] Lesbare Fehlermeldung bei Fehlschlag
- [ ] Skript mit Unit-Tests oder Fixtures
- [ ] Konfig in Code-Review

## Quellen
- OpenAI Codex Hooks-Referenz
---

**Status:** outdated  
**Anwendbare Produkte:** CLI / App (versionsabhängig)  
**Nachprüfhinweis:** Kern sind Ereignisgruppen, Payload und Fehlschlag-Strategie — volatile Implementierungsdetails; öffentliche Quellen reichen am 2026-07-26 nicht für „stabil“.  
**Zuletzt geprüft:** 2026-07-26
