---
title: "Planung: Ausführung und Prüfung klar benennen"
description: "Nutze Pläne für Umfang, Abhängigkeiten und Entscheidungen, unterscheide Planung vom Warten und arbeite innerhalb bestehender Befugnisse weiter."
contentType: guide
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Diese Seite enthält Arbeitsmethoden, die mit Aufgabenklassifizierung und Berechtigungen abgeglichen wurden; sie behauptet weder ein Standardverhalten bestimmter Clients noch gemessene Effizienzgewinne."
sidebar:
  order: 10
locale: de
source_locale: zh-CN
source_revision: "a129229"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---
Ein Plan beschreibt einen Ausführungsweg, den man prüfen und anpassen kann. Er macht Lücken bei Umfang, Abhängigkeiten und Abnahme früh sichtbar. Eine größere Aufgabe bedeutet aber nicht, dass man immer wieder auf Bestätigung warten muss.

Entscheide zunächst anhand der [Aufgabenklassifizierung](/de/prompts/ask-for-a-plan/): direkt erledigen, planen und dann innerhalb der erteilten Befugnis ausführen oder in dieser Runde nur einen Vorschlag liefern. Eine ausdrückliche Bitte um „erst einen Plan, keine Dateiänderungen“ bleibt lesend. Ein Implementierungsauftrag sollte nicht mit dem Plan allein enden.

![Illustration: Ein Assistent skizziert einen Schrittplan am Whiteboard, ein Mensch zeigt vor Arbeitsbeginn auf einen Schritt, der angepasst werden soll](/illustrations/agent-planning.webp)

## Ein ausreichend genauer Plan

| Bestandteil | Wie konkret? |
|---|---|
| Ziel | Beobachtbares Verhalten nach Abschluss |
| Umfang | Betroffene Dateien, Eingaben und Ausschlüsse |
| Reihenfolge | Echte Abhängigkeiten statt jedes Tool-Aufrufs als Schritt |
| Prüfung | Ausgaben oder Kontrollen als Nachweis |
| Entscheidungen | Nur offene Fragen, die das Ergebnis beeinflussen |

Für eine neue Datengruppierung in einem Bericht reicht etwa „Definitionen prüfen → Aggregation und Darstellung ändern → Summen und Gruppen an einem Beispiel abgleichen“. Nicht für jedes Lesen, Bearbeiten oder Testen ist eine eigene Genehmigung nötig.

## Zwei unterschiedliche Planungsanfragen

**Lösung noch offen:**

```text
Analysiere in dieser Runde nur lesend zwei Exportlösungen hinsichtlich Abhängigkeiten, Kompatibilität und Wartungskosten.
Empfiehl eine Lösung und nenne die Entscheidungen, die ich treffen muss. Ändere die Implementierung nicht.
```

**Umfang steht fest, Implementierung nötig:**

```text
Setze den CSV-Export gemäß bestehenden Anforderungen um. Prüfe zuerst das Repository und erläutere einen kurzen Plan.
Implementiere und prüfe danach innerhalb des vereinbarten Umfangs fortlaufend; warte nicht nach jedem Schritt.
Falls ein neuer Dienst, eine Änderung der öffentlichen Schnittstelle oder mehr Datenzugriff nötig ist, erläutere zuerst den konkreten Grund.
```

Dies sind Beispiele des Handbuchs. Ob eine Genehmigungsabfrage erscheint, hängt von den tatsächlichen Tools, Richtlinien und Berechtigungen ab.

## Während der Ausführung anpassen

- Gewöhnliches Implementierungsdetail: Plan aktualisieren und innerhalb des genehmigten Umfangs weiterarbeiten.
- Ursprüngliche Annahme falsch: Beleg und Auswirkung erläutern und eine Alternative im Umfang anbieten.
- Entscheidung liegt beim Nutzer: konkret fragen und unabhängige Arbeit fortsetzen.
- Nicht autorisierte externe Aktion: prüfbares Ergebnis vorbereiten und vor der Aktion die entsprechende Befugnis einholen.

Ein möglicherweise auftretendes Problem ist kein Grund, die Arbeit einzustellen. Ein tatsächlicher Umfangswechsel darf aber auch nicht zugunsten des Plans ignoriert werden.

## Rückmeldung zu einem Plan

```text
Behalte Schritte 1 und 2, streiche aber das Refactoring.
Erstelle diesmal nur eine lokale Vorschau; veröffentliche nichts.
Ergänze als Abnahmebedingung: Das alte Dateiformat lässt sich weiterhin lesen.
```

Rückmeldung ändert nur ausdrücklich Betroffenes. Nicht zurückgenommene Grenzen und Abschlusskriterien bleiben gültig. Bei Unterbrechung gehören aktuelle Dateien, erledigte Prüfungen und nächster Schritt in die [Übergabenotiz](/de/guide/agent-work/handoff-and-resume/).

## Zum Schluss die Belege prüfen

Prüfe, ob das Ziel tatsächlich erreicht wurde, statt nur alle Schritte abzuhaken. Nicht gelaufene Tests, ungeprüfte Vorschauen und ungeklärte Fakten müssen genannt werden. Der vollständige Ablauf steht unter [Erkunden → Planen → Ausführen → Prüfen](/de/cases/workflows/explore-plan-execute-verify/).
