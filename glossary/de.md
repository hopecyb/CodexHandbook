# Glossar (Deutsch)

Empfohlene Formulierungen für Übersetzungen des Codex Handbook. Stabile Term-IDs stehen in [`terms.yml`](./terms.yml). Quellsprache: vereinfachtes Chinesisch (`zh-CN`).

## Prinzipien

- Produktnamen, Protokolle und Dateinamen **nicht** übersetzen: Codex, MCP, Skill, Hook, Plugin, AGENTS.md, Token.
- Natürliches technisches Deutsch dem wörtlichen Calque vorziehen.
- Denselben Begriff auf einer Seite und im gesamten Handbuch beibehalten, außer die Produkt-UI verwendet eine andere Bezeichnung.

## Empfohlene Begriffe

| Term ID | Englisch | Deutsch | Hinweis |
|---|---|---|---|
| agent | Agent | Agent | Englisch belassen |
| approval | Approval | Freigabe | Menschliche Bestätigung vor riskanten Aktionen |
| artifact | Artifact | Artefakt / Ergebnis | Erzeugte Ausgaben |
| cloud-environment | Cloud environment | Cloud-Umgebung | |
| cloud-task | Cloud task | Cloud-Aufgabe | |
| compaction | Compaction | Komprimierung | Kontextzusammenfassung |
| context | Context | Kontext | |
| diff | Diff | Diff / Differenz | In der UI «diff» bevorzugen |
| handover | Handoff | Übergabe | |
| hook | Hook | Hook | Englisch belassen |
| interactive | Interactive mode | Interaktiver Modus | |
| mcp | MCP | MCP | Nicht übersetzen |
| non-interactive | Non-interactive mode | Nicht-interaktiver Modus | `codex exec` / Skripte |
| permission | Permission | Berechtigung | |
| plugin | Plugin | Plugin | Englisch belassen |
| profile | Profile | Profile | Benanntes Config-Bundle |
| prompt | Prompt | Prompt | Oder «Eingabeaufforderung» pädagogisch; hier Prompt |
| reasoning | Reasoning | Reasoning / Schlussfolgern | |
| sandbox | Sandbox | Sandbox | Isolierte Ausführungsumgebung |
| skill | Skill | Skill | Englisch belassen |
| steering | Steering | Steuerung / Kurskorrektur | |
| subagent | Subagent | Subagent | Englisch belassen |
| task | Task | Aufgabe | |
| thread | Thread | Thread | Gespräch + akkumulierter Kontext |
| thread-session | Thread / session | Thread / Sitzung | Einsteiger-Alias |
| token | Token | Token | Englisch belassen |
| tool | Tool | Werkzeug | |
| verification | Verification | Überprüfung | Akzeptanzkriterien |
| worktree | Worktree | Arbeitsbaum | git worktree |

## Vermeiden

| Vermeiden | Bevorzugen | Warum |
|---|---|---|
| Skill nur als «Fähigkeit» | Skill | Produktname |
| Thread und Task verwechseln | Thread / Aufgabe | Unterschiedliche Rollen |
| AGENTS.md übersetzen | AGENTS.md | Dateiname |
| Sandbox als «Sandkasten» in Tech-Docs | Sandbox | Produktüblich |
