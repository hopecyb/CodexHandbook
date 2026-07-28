---
title: Hooks
description: An festen Ausführungspunkten prüfen, loggen und blockieren — wann stoppen, wann nur aufzeichnen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ein Hook fügt an einem festen Zeitpunkt automatisch Prüfung oder Aufzeichnung ein.

Er kümmert sich um Checks, Logs und Sperren an Ablaufknoten — nicht darum, wie die Aufgabe selbst gelöst wird.

## Inhalt

Diese Gruppe behandelt drei Fragen:

- Wann genau einen Hook auslösen?
- Problem verhindern oder nur aufzeichnen?
- Erste Hook-Konfiguration: wie risikoarm starten?

## Lesereihenfolge

1. [Hooks-Überblick](/skills/hooks/hooks-overview/): Hook ≠ Skill ≠ MCP
2. [Hook-Ereignistypen](/skills/hooks/hook-event-types/): vorne, hinten, oder Sitzungsanfang/-ende
3. [Hook-Konfigurationsbeispiele](/skills/hooks/hooks-examples/): „nur loggen / zuerst blockieren / leichte Eingabeprüfung“

## Konfigurationsreihenfolge

Nicht sofort die strengste Block-Politik. Besser:

1. Zuerst `log`
2. Dann `warn`
3. Dann `block`

So prüfst du leichter:

- Sitzt das Ereignis richtig?
- Wie viele Fehlalarme?
- Verlangsamt es den Alltag?

Hooks sind kleine Schleusen an Ablaufknoten — zum Prüfen, Aufzeichnen oder Sperren.

---

**Status:** outdated  
**Anwendbare Produkte:** CLI / App (versionsabhängig)  
**Nachprüfhinweis:** Hook-Support, Ereignismodell und Konfigurationseinstiege hängen stark von der Client-Version ab; bis 2026-07-26 reichen öffentliche Quellen nicht für stabile Freigabe dieser Gruppe — vorerst `outdated`.  
**Zuletzt geprüft:** 2026-07-26
