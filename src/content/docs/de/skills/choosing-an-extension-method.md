---
title: Den Erweiterungsmechanismus wählen
description: Wähle Prompt, AGENTS.md, Skill, MCP, Hook, Plugin oder Scheduled task anhand dessen, was dauerhaft erhalten oder automatisch ausgelöst werden soll.
locale: de
source_locale: zh-CN
source_revision: 461cac4
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Bei vielen Erweiterungsmechanismen besteht der häufigste Fehler darin, zuerst einen technischen Namen auszuwählen und anschließend ein passendes Problem zu suchen. Beginne stattdessen mit der Frage: **Was soll dauerhaft erhalten bleiben oder automatisch geschehen?**

Besonders häufig werden diese Begriffe vermischt:

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Scheduled task

Für eine „Erweiterung von Codex“ genügt manchmal ein Prompt. Erst in anderen Fällen ist ein aufwendigerer Mechanismus erforderlich.

## Auswahlgrafik

![Auswahlgrafik für Codex-Erweiterungsmechanismen](/diagrams/extension-selection-map-de.svg)

Dies ist kein Baum mit gegenseitig ausschließenden Entscheidungen. Ein ausgereifter Workflow kann `AGENTS.md`, Skill und MCP gemeinsam verwenden. Die Grafik verhindert, dass ein Mechanismus eine Aufgabe übernimmt, für die er ungeeignet ist.

## Sieben Entscheidungsfragen

### 1. Betrifft es nur die aktuelle Aufgabe?

Beginne mit einem Prompt. Beschreibe Ziel, Eingaben, Umfang, Abnahme und Berechtigungen. Das verursacht die geringsten Kosten und macht das tatsächliche Problem gut beobachtbar.

### 2. Muss es bei jeder Arbeit in diesem Repository gelten?

Schreibe es in `AGENTS.md`, etwa Testbefehle, Codestil, nicht veränderbare Verzeichnisse und Regeln zur Installation von Abhängigkeiten. Lege eine einmalige Anforderung nicht dauerhaft als Projektregel ab.

### 3. Besitzt diese Aufgabenkategorie stabile Schritte und Ausgaben?

Erstelle einen Skill. Ein Skill bewahrt wiederverwendbare Anweisungen und kann bei Bedarf Vorlagen, Referenzen, Assets oder Hilfsskripte enthalten. Solange keine festen Erfolgskriterien bestehen, erprobe den Ablauf weiter mit Prompts.

### 4. Werden Daten oder Aktionen außerhalb des Repositorys benötigt?

Bewerte MCP oder einen Connector. Liste zuerst die tatsächlich benötigten Werkzeuge und Daten auf und verwende vorzugsweise schreibgeschützte, minimal begrenzte und auditierbare Konfigurationen. Wenn lokale Dateien oder vorhandene Befehle genügen, brauchst du keine zusätzliche externe Verbindung.

### 5. Muss an einem festen Lebenszykluspunkt geprüft werden?

Verwende einen Hook, zum Beispiel zur Prüfung gefährlicher Befehle vor einem Werkzeugaufruf, zum Scannen eines Patches nach dem Schreiben oder zum Protokollieren einer Zusammenfassung am Sitzungsende. Hooks laufen automatisch. Teste deshalb Timeouts, Fehlschläge und Fehlalarme.

### 6. Soll ein Funktionspaket einheitlich an andere verteilt werden?

Erwäge ein Plugin. Ein Plugin ist eine Bündelungs- und Verteilungsebene und kann Skills, Connectoren, MCP, Hooks und Vorlagen für Scheduled tasks enthalten. Die Installation eines Plugins macht seine Verbindungen, Skripte und Hooks nicht automatisch vertrauenswürdig.

### 7. Läuft die Aufgabe manuell stabil und soll zeitgesteuert wiederholt werden?

Erstelle erst dann eine Scheduled task. Verifiziere Prompt, Skill, Berechtigungen und Ausgabeformat zunächst in einer normalen Aufgabe. Prüfe nach Beginn der Planung die ersten Läufe und behalte ein menschliches Veröffentlichungs- oder Merge-Gate.

## Szenarien

| Szenario | Empfohlene Kombination |
|---|---|
| Test- und Commitkonventionen vereinheitlichen | AGENTS.md |
| Checkliste vor jeder Zusammenführung | Skill `pr-review` |
| Ticketkontext aus Linear abrufen | MCP + Aufgaben-Prompt |
| Wöchentlicher Abhängigkeitsbericht | Scheduled task → Issue-Entwurf öffnen |
| Nach Dateischreibzugriffen Zugangsdaten im Patch erkennen | Hook oder CI; in Hochrisikofällen beides |
| Review-Ablauf und GitHub-Werkzeuge einheitlich im Team installieren | Plugin; Berechtigungen und Hooks vor Installation prüfen |
| Wöchentlichen Bericht zu Abhängigkeitsrisiken erstellen | Verifizierter Skill + Scheduled task + menschliches Review |
| Sicherheit, Tests und Wartbarkeit parallel prüfen | Mehrere schreibgeschützte Subagents, Zusammenführung durch Haupt-Agent |

## Kostendimensionen

| Mechanismus | Erstellungskosten | Wartungskosten | Sicherheitsrisiko |
|---|---|---|---|
| Prompt | Niedrig | Niedrig | Niedrig |
| AGENTS.md | Mittel | Mittel | Niedrig |
| Skill | Mittel | Mittel | Niedrig–mittel |
| MCP | Hoch | Hoch | Mittel–hoch |
| Hook | Mittel | Mittel–hoch | Mittel–hoch |
| Plugin | Niedrig bei Installation / hoch bei Eigenentwicklung | Mittel–hoch | Mittel–hoch |
| Scheduled task | Mittel | Hoch | Hoch |

## Antimuster

- **Skill-Überangebot:** Dutzende Skills mit konkurrierenden Beschreibungen installieren
- **MCP als Universalwerkzeug:** Eine API anbinden, obwohl `git` die Aufgabe bereits löst
- **Zeitplanung ohne Abnahme:** Code regelmäßig ändern, aber keine Abbruchbedingung, Laufnachweise oder menschliches Review definieren
- **Vorhandenes neu erfinden:** Eigenes MCP bauen, obwohl ein offizieller Connector existiert
- **Regel am falschen Ort:** Eine einmalige Anforderung in `AGENTS.md` schreiben und dadurch jede spätere Aufgabe mit alten Einschränkungen belasten
- **Hook-Überlastung:** Einen langsamen fachlichen Ablauf in jeden Werkzeugaufruf legen und damit Alltagsaufgaben verlangsamen oder fälschlich blockieren

## Häufige Fragen

### 1. Sollte ich sofort ein Plugin installieren und MCP verbinden?

Viele Probleme lassen sich bereits durch einen besseren Prompt, klare Umfangsgrenzen und `AGENTS.md` lösen.

### 2. Nach wie vielen Wiederholungen lohnt sich ein Skill?

Es gibt keine feste Anzahl. Wiederholung ist nur ein Signal. Wichtiger sind stabile Schritte, eindeutige Erfolgskriterien und ausreichend hohe Fehlerkosten für eine automatische Prüfung.

### 3. Mit welchen Mechanismen beginne ich normalerweise?

In den meisten Fällen mit:

- Prompt
- `AGENTS.md`
- Skill

MCP oder unbeaufsichtigte Automatisierung sind zu Beginn normalerweise nicht erforderlich.

Entscheidend ist nicht, wie fortgeschritten ein Mechanismus klingt, sondern ob die Zuständigkeit passt, die Berechtigungen minimal sind und sich das Ergebnis verifizieren lässt.

## Minimale praktische Übung

Beispiel „Aktuellen Diff vor dem Zusammenführen prüfen“:

1. Führe die Aufgabe zweimal mit einem Prompt aus und notiere die Prüfpunkte, die du jedes Mal wiederholen musst.
2. Dokumentiere feste Repository-Befehle in `AGENTS.md`, etwa `pnpm test` und das Verbot, generierte Verzeichnisse zu ändern.
3. Lege Review-Schritte, Schweregrade und Ausgabeformat in einem Skill namens `pr-review` ab.
4. Ergänze MCP oder Connector nur, wenn GitHub-PR-Kommentare oder CI-Status benötigt werden.
5. Ergänze Hook oder Scheduled task nur für eine automatische Prüfung an einem festen Ereignis.
6. Bündele die Funktionen erst als Plugin, wenn mehrere Teams sie installieren müssen.

Beantworte bei jeder zusätzlichen Ebene erneut drei Fragen: Welche neue Berechtigung entsteht, wie wird verifiziert und wie lässt sie sich deaktivieren oder zurücksetzen?

## Weiterführende Seiten

- [Karte der Erweiterungsfunktionen](/de/skills/capability-map/)
- [Muster für menschliche Genehmigungen](/de/cases/workflows/human-approval-patterns/)
- [Einen Workflow als Skill verstetigen](/de/cases/workflows/turn-a-workflow-into-a-skill/) (Roadmap-Seite)

## Offizielle Grundlage

- [Skills and Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Build Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**Status:** verified
**Unterstützte Produkte:** ChatGPT Web / Desktop-App / Codex CLI / IDE; Umfang unterscheidet sich nach Mechanismus
**Prüfgrundlage:** Zuständigkeiten, Produkteinstiege und Sicherheitsgrenzen wurden anhand der offiziellen OpenAI-Dokumentation zu Skills, Plugins, MCP, Hooks und Scheduled tasks vom 2026-08-25 geprüft.
**Zuletzt geprüft:** 2026-08-25
