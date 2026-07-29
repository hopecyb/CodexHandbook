---
title: "Dateien, Werkzeuge und Befehle"
description: "Erklärt, wie Codex Dateien liest und schreibt, Befehle ausführt und Werkzeuge nutzt."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Der größte Unterschied zu gewöhnlichen Chatbots: Es handelt über **Werkzeuge**.

Dateien sind der Ort, an dem es etwas ändert; Befehle sind die Art, wie es Aktionen ausführt; Werkzeuge sind der Einstieg zum Handeln.

Codex wirkt über **Werkzeuge** auf die reale Welt:

- Projektdateien lesen/schreiben
- Befehle im Terminal ausführen (soweit Berechtigungen und Sandbox-Politik es erlauben)
- Web suchen, Browser öffnen u. a. (je nach Produktfähigkeit und Politik)

## Diese drei Wörter zuerst trennen

| Wort | Bedeutung |
|---|---|
| Datei | Echte Projektinhalte — Code, Doku, Konfiguration |
| Befehl | Ein Schritt im Terminal — z. B. Build, Test, Suche |
| Werkzeug | Codex-Einstieg zum Lesen/Ändern von Dateien, Ausführen von Befehlen, Websuche |

Anders gesagt:

- **Dateien** sind Material
- **Befehle** sind Aktionen
- **Werkzeuge** sind die Geräte, mit denen es Material greift und Aktionen ausführt

## Typischer Arbeitsablauf

Nach einer Aufgabe macht Codex oft Folgendes:

1. Zuerst ein paar passende Dateien lesen, um die Projektstruktur zu verstehen
2. Bei Bedarf Text suchen, Verzeichnisse öffnen, Konfiguration prüfen
3. Zum Prüfen des Ergebnisses einen Befehl ausführen — z. B. Test oder Build
4. Nach Dateiänderungen die Diffs zur Prüfung an dich übergeben

Siehst du „Datei lesen“ oder „Befehl ausführen“, ist das oft ein normaler Schritt der Aufgabe.

## Häufige Missverständnisse

### 1. Es kann Befehle ausführen — also kann es alles?

Nicht unbedingt.

Ob es darf, hängt auch ab von:

- Welche Werkzeuge der aktuelle Produkteinstieg bereitstellt
- Ob die Sandbox es erlaubt
- Ob dieser Schritt deine Freigabe braucht
- Ob Team-Politiken zusätzliche Limits setzen

### 2. Sollte es möglichst wenig Befehle ausführen und Dateien direkt ändern — ist das schneller?

Nicht unbedingt.

Manchmal findet ein Prüfbefehl Probleme früher. Nach Codeänderungen Tests laufen zu lassen ist stabiler, als den Schaden erst hinterher zu merken.

### 3. Was, wenn ich Befehle nicht verstehe?

Wenn du etwas nicht verstehst, frag nach:

```text
Was macht dieser Befehl? Welche Inhalte ändert er? Was passiert, wenn ich ihn nicht ausführe?
```

## Eine einfache Entscheidungsregel

Wenn Codex Dateien lesen/ändern oder Befehle ausführen will, prüfe mit drei Fragen:

1. Hängt dieser Schritt mit meinem Ziel zusammen?
2. Liegt der Wirkungsbereich im erwarteten Verzeichnis oder in den erwarteten Dateien?
3. Kann ich bei Fehlern leicht zurücknehmen?

Fehlt eine Antwort — erst erklären lassen.

## Nutzungsprinzipien

1. **Minimal nötiger Umfang**: Verzeichnisse und Dateien benennen — nicht „einfach das ganze Repo ändern“
2. **Gefährliche Befehle brauchen Freigabe**: Löschen, Pushen, Systemkonfiguration ändern usw.
3. **Werkzeugwahl hat Methode**: siehe [Werkzeugauswahl](/guide/tools/tool-selection/)

Produkteinstiege unterscheiden sich in Werkzeugpanel und Bestätigung — Details in den jeweiligen Produkthandbüchern.

Codex „redet“ nicht nur — es handelt über Dateien, Befehle und Werkzeuge. Deshalb musst du Umfang und Risiko im Blick behalten.

Als Nächstes empfohlen:

1. [Berechtigungen und Freigaben](/guide/foundations/permissions-and-approvals/)
2. [Sandbox und Netzwerk](/guide/foundations/sandbox-and-network/)
3. [Erste Aufgabe ausführen](/guide/getting-started/run-your-first-task/)

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur die begrifflichen Unterschiede zwischen Dateien, Befehlen und Werkzeugen sowie die Risikoeinschätzung; interne Links und Beispielformulierungen wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26
