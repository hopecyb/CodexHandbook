---
title: Shell und Terminal
description: Fähigkeiten und Risiken der Befehlsausführung.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Das Terminal ist einer der direktesten Wege, Codex handeln zu lassen — effizient, aber Sie müssen Risiken verstehen.

## Warum stark und gefährlich

Dateiwerkzeuge bearbeiten Text; das Terminal wirkt auf OS und Laufzeitumgebung.

Im Terminal kann aus Lesen werden:

- Installieren
- Bauen
- Testen
- Löschen
- Committen
- Pushen

Vor Nutzung klären, was geändert wird.

Stark und riskant. Prinzipien:

- Vor Freigabe den Befehl verstehen
- `rm -rf`, Force-Push, SSH-Config usw. verbieten — außer voll verstanden und nötig
- Verifikationsbefehle in Abnahmekriterien

Produkteinstieg: [Integriertes Terminal](/guide/desktop-app/integrated-terminal/)

## Warum Terminal höheres Risiko hat

Es gibt nicht nur Rat — es führt wirklich aus.

Zum Beispiel:

- Dependencies installieren
- Dateien löschen
- Tests laufen lassen
- Config umschreiben
- Code pushen

Befehl unklar → zuerst nachfragen, dann erlauben.

## Wann Terminal passt

Geeignet:

- Tests
- Builds
- Dateistatus
- Vorhandene Projektskripte

Weniger zuerst:

- Seitenoptik
- Neueste öffentliche Quellen
- Ein–zwei bekannte Textstellen

## Häufige Missverständnisse

### 1. Ohne viele Befehle schreiben zu können trotzdem nutzbar

Nicht alles schreiben müssen — mindestens verstehen:

- Was will der Befehl ungefähr
- Ob Dateien/System geändert werden
- Ob er zur aktuellen Aufgabe passt

### 2. Testbefehl = immer sicher?

Nicht automatisch.  
Meist niedrigeres Risiko, trotzdem prüfen:

- Viele Schreibvorgänge?
- Netz?
- Unklare Skripte?

### 3. Unklar?

Nachfragen:

```text
Was tut dieser Befehl? Was ändert er? Was passiert, wenn er nicht läuft?
```

## Direkt nutzbare Formulierung

```text
Vor dem Ausführen Zweck, Schreibzugriff, Netz und Wiederherstellung bei Fehlschlag erklären.
```

Vor dem Lauf klären, was der Befehl wo ändert.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Terminal hat höhere Aktionsfähigkeit und Risiko als Dateiedits; vor Freigabe Befehl verstehen, Schreibradius, Netz und Recovery klären — mit Berechtigungs-, Überprüfungs- und Werkzeugkapiteln abgeglichen.  
**Zuletzt geprüft:** 2026-07-26
