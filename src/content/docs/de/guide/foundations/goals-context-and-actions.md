---
title: "Ziel, Kontext und Aktionen"
description: "Eine gelungene Interaktion in Ziel, Hintergrund, Aktionen und Abnahme zerlegen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Manche Aufgaben laufen schnell rund, andere ziehen sich schief — der Unterschied liegt selten daran, dass das Modell plötzlich klüger oder dümmer wird, sondern daran, ob du die Aufgabe klar zerlegt hast.

In der Kurzfassung: Das Ziel sagt „was am Ende rauskommen soll“, der Kontext „worauf basierend“, die Aktionen „wie es vorgehen darf“, die Abnahme „wann es als fertig gilt“.

Eine stabile Codex-Interaktion hat in der Regel vier Teile:

1. **Ziel**: Was am Ende geliefert werden soll
2. **Kontext**: Hintergrund, Dateien, Einschränkungen
3. **Aktionen**: Schritte, die Codex ausführen darf (lesen, ändern, ausführen)
4. **Abnahme**: Wann es fertig ist und wie du prüfst

Die Prompt-Lehre entfaltet diese vier Teile zu einem stabilen Rahmen — siehe [Struktur einer guten Aufgabe](/prompts/task-anatomy/).

## Wofür die vier Teile zuständig sind

Stell dir vor, du gibst einem ausführenden Assistenten einen Auftrag:

- **Ziel**: Was genau soll es abliefern?
- **Kontext**: Welche Voraussetzungen muss es vor dem Urteil kennen?
- **Aktionen**: Darf es Dateien lesen/ändern, Befehle ausführen, online recherchieren?
- **Abnahme**: Mit welchem Maßstab sagst du hinterher „passt“?

Fehlt ein Teil, geht es leicht schief:

- Ohne Ziel: Es ist beschäftigt — nicht unbedingt am richtigen Punkt
- Ohne Kontext: Es rät
- Ohne Aktionsgrenzen: Es macht zu viel — oder traut sich zu wenig
- Ohne Abnahme: Ihr versteht „fertig“ unterschiedlich

## Häufige Missverständnisse

### 1. Nur das Ziel klar sagen reicht

Reicht nicht.

„Hilf mir, die Startseite anzupassen“ ist nur eine Richtung — zu wenig für stabile Ausführung. Es braucht noch:

- Welche Datei
- Was behalten
- Was nicht anfassen
- Wie das Ergebnis am Ende aussehen soll

### 2. Mehr Kontext ist immer besser

Zu wenig Kontext lässt es raten; zu viel Kontext ertränkt den Fokus. Entscheidend ist **relevanter Kontext** — nicht alles hineinschütten.

### 3. Aktionen muss man nicht nennen — es entscheidet selbst

Manchmal ja — für Anfänger unstabil.

Wenn du klar schreibst:

- Welche Dateien editierbar sind
- Keine Abhängigkeiten installieren
- Keine Konfiguration ändern
- Zuerst Plan, dann handeln

wird das Ergebnis deutlich stabiler.

## Wenn du nicht weißt, wie du formulierst

Wenn die Aufgabe schwer zu organisieren ist, sortiere sie in diese vier Sätze:

1. Was soll am Ende fertig sein?
2. Auf welchen Hintergrund und welche Grenzen muss es sich stützen?
3. Was darf es tun — und was nicht?
4. Mit welchem Maßstab prüfe ich, ob es fertig ist?

Das ist klarer als nur „Hilf mir mit dem Problem“.

## Kleines Beispiel

> Ziel: Die Überschriftenhierarchie in `notes.md` klar ordnen.  
> Kontext: Nur diese eine Datei ändern; Absatzreihenfolge behalten.  
> Aktionen: Diese Datei darf editiert werden; keine Abhängigkeiten installieren.  
> Abnahme: Nach dem Öffnen sind Überschriften von H1 bis H3 durchgängig, ohne Sprünge.

Eine stabile Aufgabe nennt mindestens Ziel, Kontext, Aktionsgrenzen und Abnahmeweise klar.


---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur den Zerlegungsrahmen aus Ziel, Kontext, Aktionen und Abnahme; interne Links und Beispielstruktur wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26
