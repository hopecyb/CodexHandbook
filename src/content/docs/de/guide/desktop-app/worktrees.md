---
title: Arbeitsbäume
description: Änderungen in isolierten Arbeitsbäumen parallel ausprobieren.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Ein **Arbeitsbaum (worktree)** dient dazu, Änderungen in einem isolierten Verzeichnis auszuprobieren und den Hauptarbeitsbereich weniger zu stören.

Denk daran als „parallelen Versuchsraum“ für dasselbe Repository — damit nicht alle Experimente den aktuellen Arbeitsbereich verstopfen.

## Wann nutzen

- Zwei Implementierungen parallel ausprobieren
- Experimentelle Refactors sollen den Hauptbranch-Arbeitsbereich nicht verschmutzen

## Wann nicht

- Das Übungsprojekt ist bereits ausreichend isoliert
- Du kennst Git noch wenig: zuerst Aufgaben seriell im Übungsverzeichnis erledigen

## Häufige Missverständnisse

### 1. Ist das einfach nur ein neuer Ordner?

Oberflächlich ähnlich — Zweck ist aber nicht nur „ein Verzeichnis mehr“, sondern isolierter Raum für verschiedene Versuche am selben Repository.

### 2. Muss ich das gleich am Anfang lernen?

Nein.

Solange du den Basis-Aufgabenfluss übst, ist es oft einfacher, Worktrees zunächst wegzulassen.

### 3. Wann lohnt sich das Lernen?

Wenn du in solche Situationen kommst:

- zwei Implementierungen ausprobieren
- Experimente nicht in den aktuellen Arbeitsbereich mischen
- im Team laufen mehrere parallele Aufgaben

Der Arbeitsbaum ist ein fortgeschrittenes Isolationswerkzeug, kein Pflichtbestandteil beim Einstieg in Codex.

---

**Status:** outdated  
**Anwendbare Produkte:** App  
**Prüfhinweis:** Diese Seite stellt Worktrees als fortgeschrittene Desktop-App-Fähigkeit vor, aber aktuelle öffentliche Official-Quellen reichen nicht aus, um Einstiege und Unterstützungsumfang der Arbeitsbaum-Funktion in der Desktop-UI Punkt für Punkt zu belegen; bis zur ergänzten Produktdokumentation besser `outdated`.  
**Zuletzt geprüft:** 2026-07-26
