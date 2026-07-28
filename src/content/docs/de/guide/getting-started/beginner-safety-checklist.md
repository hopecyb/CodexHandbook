---
title: Sicherheits-Checkliste für Anfänger
description: "Sicherheitsprüfungen, die du vor der ersten Nutzung sehen solltest."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Vor der ersten Nutzung kannst du dich fragen: „Wenn es falsch liegt — zahle ich einen zu hohen Preis?“

Diese Liste soll das Risiko der ersten Nutzung drücken.


Vor dem Start abhaken:

- [ ] Ich nutze ein wegwerfbares Übungsverzeichnis — kein Produktions-Repo
- [ ] Im Verzeichnis liegen keine echten Secrets, Passwörter, Kundendaten
- [ ] Ich verstehe: Riskante Operationen brauchen meine Freigabe
- [ ] Ich genehmige keine Befehle oder Netz-Anfragen, die ich nicht verstehe
- [ ] Ich prüfe den Diff, bevor ich das Ergebnis annehme
- [ ] Ich weiß, wie man [rückgängig macht](/guide/getting-started/undo-and-recover/)

Konzeptergänzung: [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/) · [Sandbox und Netzwerk](/guide/foundations/sandbox-and-network/).

## Häufige Missverständnisse

### 1. Die Sicherheitsliste ist nur für besonders Vorsichtige

Sie ist für den ersten Einstieg — weil man beim ersten Mal leicht überschätzt, „alles verstehen zu müssen“.

### 2. Keine gefährlichen Befehle klicken = schon sicher genug

Häufigere Erstprobleme:

- Falsches Projekt
- Sensible Dateien mitgenommen
- Diff nicht geprüft
- Kein Plan zum Rückgängigmachen

### 3. Beim Nutzen lernen — diese Punkte vorher egal

Beim Nutzen lernen ist ok — diese Punkte vor dem Start einmal durchzugehen ist stabiler.

Erste Codex-Nutzung: Fehlerkosten zuerst niedrig halten — danach wird alles leichter.


---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE  
**Überprüfungsgrundlage:** Gegen die im Handbook bereits geprüften Kapitel zu Freigabe, Sandbox/Netzwerk, Ergebnisprüfung und Rückgängig/Wiederherstellen abgeglichen; diese Seite erklärt nur Sicherheitsvoraussetzungen und risikoarme Praxis vor der ersten Nutzung und hängt nicht von konkreten Produkt-UI-Details ab.  
**Zuletzt überprüft:** 2026-07-26
