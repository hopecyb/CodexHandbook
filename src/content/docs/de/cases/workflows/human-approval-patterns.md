---
title: "Muster für menschliche Genehmigungen"
description: "Unterscheide Aufgabenbefugnis von Tool-Genehmigung; bereite ein prüfbares Ergebnis vor, und halte vor einer konkreten Aktion an, für die noch eine Genehmigung fehlt."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Die unterschiedlichen Aufgaben von Sandbox und Genehmigung wurden geprüft. Die folgenden Formen der Zusammenarbeit sind Empfehlungen des Handbuchs, keine einheitlichen Dialogregeln aller Clients."
  evidence:
    - label: "Offizielle Hinweise zu Sandbox und Genehmigungen"
      href: https://learn.chatgpt.com/docs/agent-approvals-security
locale: de
source_locale: zh-CN
source_revision: "f60dbb5"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---
Genehmigungen sollten sich auf eine konkrete Aktion und ihre Folgen beziehen. Die Aufgabenbefugnis beschreibt das Ziel des Nutzers; die Tool-Genehmigung entscheidet, ob eine Aktion in der aktuellen Umgebung ausgeführt werden darf. Schreiben, Befehle und Netzwerkzugriff erfordern nicht von sich aus jedes Mal eine Nachfrage. Maßgeblich sind erlaubter Umfang, Tool-Richtlinien und Sandbox gemeinsam. Siehe die [offizielle Erklärung](https://learn.chatgpt.com/docs/agent-approvals-security).

## Drei ausdrücklich wählbare Formen der Zusammenarbeit

| Form | Was weitergehen kann | Wann warten? |
|---|---|---|
| Nur lesende Analyse | Lesen, vergleichen und Vorschlag ausarbeiten | Keine Implementierungsänderung, solange der Nutzer die Umsetzung nicht autorisiert hat |
| Umsetzung im erlaubten Umfang | Angegebene Bereiche ändern, angemessen prüfen, prüfbares Ergebnis vorbereiten | Wesentliche Information fehlt, Umfang ändert sich oder neue unbefugte Aktion nötig |
| Gesonderte Genehmigung der Schlussaktion | Entwürfe, Builds, Vorschauen und Vorbereitung einer Rücknahme fertigstellen | Vor Veröffentlichung, Versand oder anderer ausdrücklich vorbehaltener Aktion |

Das sind Arbeitsabsprachen, keine Namen neuer Produktmodi. Eine klar erteilte und noch gültige Genehmigung wird nicht erneut eingeholt. Wenn eine verbindliche Richtlinie interaktive Freigabe fordert, gilt deren Mechanismus.

## Muster 1: In dieser Runde nur Vorschlag

```text
Arbeite diesmal nur lesend: prüfe das Projekt und schlage Änderungen vor. Ändere keinen Code und erstelle keinen Commit.
Falls eine Prüfung Cache, Snapshot oder Ausgabedateien schreibt, weise darauf hin. Nicht jeder „Test“ ist lesend.
```

Das passt, wenn das Ziel noch offen ist und Alternativen verglichen werden. Auch bei Leseaufgaben zählen tatsächliche Nebenwirkungen von Befehlen. „Tests dürfen laufen“ und „kein Schreiben auf die Platte“ dürfen nicht ungeprüft kombiniert werden.

## Muster 2: Lokale Arbeit durchgehend fertigstellen

```text
Du darfst diese drei Dokumente und zugehörige interne Links ändern sowie die vorhandenen Build-Prüfungen ausführen.
Erledige die Arbeit im Umfang ohne Warten nach jedem Schritt, entscheide gewöhnliche Details selbst und berichte darüber.
Veröffentliche die Website nicht und versende keine Nachrichten. Erläutere nötige Entscheidungen oder Aktionen außerhalb des Umfangs zuerst.
```

Änderung und Prüfung sind hier bereits erlaubt; vor jedem Schreibzugriff erneut zu fragen ist unnötig. Ob ein bestimmter Befehl zulässig ist, bestimmt trotzdem die Umgebung; ein Prompt kann eine Ablehnung nicht umgehen.

## Muster 3: Konkrete Veröffentlichung genehmigen

Bereite zuerst eine prüfbare Fassung vor und nenne dann:

- Genaue zu veröffentlichende Version oder Ergebnis und Prüfergebnisse.
- Zielumgebung, Empfänger oder Betroffene.
- Erwartete externe Wirkung und nötige Wiederherstellung.
- Noch fehlende Befugnis oder Bedingung.

„Diese Version auf die Testseite stellen“ ist keine Freigabe für spätere Versionen auf der Produktionsseite. Umgekehrt soll eine schon genehmigte identische Aktion nicht wegen einer allgemeinen Vorlage erneut bestätigt werden müssen.

## Nach einer Ablehnung weiterarbeiten

Bewahre die ursprüngliche Ablehnung auf und unterscheide fehlende Befugnis, Richtlinienverbot und Umgebungsfehler. Arbeite mit einer engeren, weiterhin gültigen Lösung weiter, wenn möglich. Dieselbe Grenze darf nicht durch anderes Tool, andere Befehlsschreibweise oder umformulierten Prompt umgangen werden. Falls Nutzerhandeln nötig ist, nenne blockierte Aktion, Grund und mögliche nächste Schritte.

## Was die prüfende Person kontrolliert

Passen Umfang und Ergebnis zusammen? Wurde wirklich geprüft? Sind die externen Auswirkungen verstanden? Ein Plan bedeutet keine automatische Freigabe, und „keine Befunde“ garantiert kein Nullrisiko.

Zur Arbeitsweise siehe [Aufgabenklassifizierung](/de/prompts/ask-for-a-plan/), bei widersprüchlichen Anweisungen [Kontextpriorität](/de/guide/context/context-priority/); unbeaufsichtigte Abläufe brauchen außerdem [Stopp-, Fehler- und Benachrichtigungsmechanismen](/de/skills/automations/scheduled-tasks/).
