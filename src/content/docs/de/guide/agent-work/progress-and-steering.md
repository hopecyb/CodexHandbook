---
title: Fortschritt und Steuerung
description: "Wenn die Richtung unterwegs abdriftet — mit kurzen Anweisungen Codex zurückholen."
locale: de
source_locale: zh-CN
source_revision: "c9ea3be"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 20
legacyVerification:
  status: verified
  products: "App / CLI / IDE / Cloud"
  basis: Kreuzgeprüft gegen aktuelle OpenAI-Developers-Hinweise zu langen Aufgaben, Überprüfung und schrittweisem Vorgehen sowie verifizierte Planungs-, Qualitäts- und Kontextkapitel; nur „lokale Korrektur
    vor Abriss“ als stabiles Kollaborationsprinzip.
  checkedAt: '2026-07-26'
---

Während der Ausführung gibt es oft nur zwei spontane Reaktionen:

- Nichts sagen und weiterdriften lassen
- „Stopp, alles neu“

Besser: während der Ausführung **steuern** — Richtiges behalten, nur das Abgeirrte korrigieren.

## Was Steuerung tut

Steuerung ergänzt, wie der aktuelle Schritt laufen soll:

- Was richtig ist → behalten
- Was driftet → nicht fortsetzen
- Was als Nächstes Priorität hat

## Was „Steuerung“ heißt

Lokale **Kurskorrektur** am aktuellen Ausführungszustand.

Das ist häufig nötig, wenn:

- Ziel verstanden, Schrittfolge unideal
- Hälfte richtig — nicht alles umwerfen
- Neue Information → Folgeaktionen anpassen
- Unnötiger Refactor oder Aufblähung droht

## Häufigstes Template

Sehr kurz:

```text
Bei aktuellem Schritt stoppen. A und B behalten; Richtung bei C verwerfen; als Nächstes nur D. E nicht starten.
```

Vier Teile:

1. Wo stoppen
2. Was behalten
3. Was aufgeben
4. Was als Nächstes ausschließlich erledigt werden soll

## Häufige Fallen

### 1. Drift → alles stoppen und neu?

Wenn die Hälfte stimmt, kostet Komplettabriss:

- Kontext neu erklären
- Schon Ausgerichtetes verlieren
- Neue Runde kann wieder driften

### 2. „Falsch“ reicht — es weiß schon wo?

Meist nicht.

Besser explizit:

- Was behalten
- Was aufgeben
- Was jetzt Priorität hat

### 3. Steuerung = Neu planen?

- **Steuerung**: Route grundsätzlich ok, lokal korrigieren
- **Neu planen**: Ziel, Prämisse oder Wirkungsbereich geändert

## Warum kleine Korrektur besser wirkt

| Kleine Korrektur | Abriss und neu |
|---|---|
| Ausgerichtetes behalten | Auch Richtiges weg |
| Weniger Kontext | Hintergrund neu erklären |
| Umfang leichter steuern | Drift-Risiko erneut |
| Echte Kollaboration | Wiederholte Bestellung |

## Wann steuern, wann planen

- **Nur Reihenfolge, zu großer Umfang, falsches Ausgabeformat**: zuerst steuern
- **Ziel, Prämisse oder Wirkungsfläche geändert**: zurück zur Planung

## Drei gängige Steuerungsarten

### 1. Umfang verkleinern

```text
Nur Login-Seite; Registrierung und Passwort-Reset nicht erweitern.
```

### 2. Reihenfolge ändern

```text
Zuerst Überprüfung und Tests, dann weiter an der Implementierung.
```

### 3. Ausgabeform ändern

```text
Noch keine Dateien ändern. Zuerst Vergleichstabelle: Ist-Ansatz vs. Vorschlag.
```

## Was gute Steuerung möglichst enthält

- Stopp-Position
- Zu behalten
- Nicht fortsetzen
- Neue Priorität
- Ob Weiterausführung erlaubt

Klar:

```text
Behalte deine Einschätzung der Ursache bei, beginne aber noch kein Refactoring. Ergänze als Nächstes nur einen Plan für die minimale Korrektur und die Prüfschritte.
```

## Wann zurück zu „neu planen“

Steuerung für lokale Drift; zurück zur [Planung](/de/guide/agent-work/planning/) wenn:

- Ziel selbst geändert
- Neue Informationen widerlegen die bisherigen Annahmen
- Wirkungsbereich klar größer
- Schon zwei–drei Korrekturen, immer noch Drift

Ist es keine lokale Abweichung mehr — zurück zur Planphase.

## Häufige Fehler

- Nur „falsch“, ohne wo
- „Entscheide selbst, wie du fixst“ ohne Priorität
- Nur einen Schritt pausieren wollen — Formulierung triggert Voll-Neustart
- Schon neue Aufgabe — mit einem Nachsatz weiterzwingen

Bei Drift unterwegs: kurz „was behalten, was stoppen, was als Nächstes nur“.

## Empfohlene Kombinationen

- Pfad zuerst klären: [Planung](/de/guide/agent-work/planning/)
- Als Hauptkette: [Explore—Plan—Execute—Verify](/de/cases/workflows/explore-plan-execute-verify/)
- An andere delegieren: [Subagents](/de/guide/agent-work/subagents/)
- Nach Unterbrechung weiter: [Übergabe und Fortsetzen](/de/guide/agent-work/handoff-and-resume/)
