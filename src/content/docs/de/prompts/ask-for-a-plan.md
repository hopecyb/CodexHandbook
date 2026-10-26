---
title: "Wann direkt ausführen und wann zuerst einen Plan verlangen"
description: "Wähle anhand von Umfang, Unsicherheit und externen Folgen zwischen direkter Ausführung, Planung und Freigabe einer konkreten Aktion; mit zwei Prompt-Vergleichen."
contentType: prompt
audiences: [beginner, developer, creator]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Die drei Aufgabenkategorien und zwei Vergleiche sind redaktionelle Empfehlungen zur Zusammenarbeit. Autorisierungs- und Ausführungsgrenzen wurden geprüft; es handelt sich weder um feste Client-Modi noch um ein Experiment zur Erfolgsquote des Modells."
locale: de
source_locale: zh-CN
source_revision: "706f11b"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Ob zuerst ein Plan nötig ist, hängt davon ab, welche Entscheidung noch offen ist. Eine klar abgegrenzte, rückgängig zu machende Änderung kann direkt ausgeführt werden. Ist der Weg unklar, plane zuerst. Vor einer konkreten Aktion, die zusätzliche Autorisierung erfordert, halte an. Ein Plan bedeutet nicht, dass nach jedem Schritt eine Antwort des Nutzers nötig ist.

## Zuerst die Aufgabenkategorie bestimmen

| Kategorie | Erkennungsmerkmal | Was anzugeben ist | Wann anhalten |
|---|---|---|---|
| Direkt ausführen | Eingaben, Umfang und Abnahmekriterien sind klar; die Änderung ist rückgängig zu machen | Änderungsort, Fertigstellungskriterium und Ausschlüsse nennen | Wenn der Umfang überschritten wird oder notwendige Informationen fehlen |
| Zuerst planen | Architekturentscheidungen, unklarer Umfang oder mehrere voneinander abhängige Schritte | Istzustand prüfen, dann Weg, Auswirkungen und Prüfung skizzieren | Wenn eine Abwägung der Entscheidung des Nutzers bedarf oder er ausdrücklich zuerst den Plan prüfen will |
| Aktion braucht Freigabe | Eine konkrete Aktion hätte nicht autorisierte externe Folgen oder berührt eine Ausführungsberechtigung | Erst ein überprüfbares Ergebnis vorbereiten, dann Aktion, Ziel und Auswirkungen benennen | Vor dieser Aktion; die bereits erledigte Vorbereitung beibehalten |

„Drei Dateien sind betroffen“ ist keine allgemeine Freigabeschwelle. Schon eine einzige Produktionskonfiguration kann große Auswirkungen haben. Produktdialoge und tatsächliche Ausführungsberechtigungen erklärt [Berechtigungen und Sandbox](/de/guide/permissions-and-sandbox/). Diese Tabelle ist keine Berechtigungskonfiguration für alle Clients.

## Vergleich eins: lokale Textkorrektur

Aufgabe: Zwei Tippfehler in der README korrigieren, ohne ihre Struktur zu ändern.

**Gegenbeispiel mit übermäßigen Unterbrechungen:**

```text
Erstelle zuerst einen Plan und warte auf meine Freigabe, bevor du Dateien liest.
Liste nach dem Lesen die zwei geplanten Änderungen auf und warte erneut.
Halte nach jeder Änderung an und frage mich danach, ob du prüfen sollst.
```

Diese Wartezeiten klären keine notwendige Entscheidung. Sie zerlegen eine bereits klar autorisierte Aufgabe.

**Formulierung mit klarem Umfang:**

```text
Ersetze im Fließtext der README.md die zwei Vorkommen von „帐户“ durch „账户“.
Erhalte Codeblöcke, Links und alle anderen Inhalte. Erledige die Änderung
direkt, prüfe den Diff und berichte, wo du geändert hast. Falls die Zahl der
Fundstellen nicht zwei ist, erkläre zuerst die Abweichung. Weite die Aufgabe
nicht auf ein vollständiges Lektorat aus.
```

Die Abnahme umfasst genau zwei korrekte Änderungen und unveränderte, nicht betroffene Inhalte. Für diese Art von Änderung sind meist keine neuen Tests nötig; prüfe angemessen nach den bestehenden Projektregeln.

## Vergleich zwei: Website ändern und veröffentlichen

Aufgabe: Drei Tutorials aktualisieren und auf der Produktionswebsite veröffentlichen. Hier sind die Vorbereitung der Inhalte und die Wirkung der Veröffentlichung zu trennen.

**Gegenbeispiel mit unklarer Autorisierung:**

```text
Schreibe zuerst einen Plan, ändere dann die gesamte Website und stelle sie live.
```

Es bleibt offen, welche Inhalte geändert werden sollen, wohin veröffentlicht wird und ob die Live-Version ersetzt werden darf.

**Formulierung mit konkreten Grenzen:**

```text
Aktualisiere diese drei Tutorials und korrigiere zugehörige interne Links.
Lies zuerst den Istzustand und gib einen kurzen Plan. Führe anschließend die
Änderungen, den Build und die Vorschauprüfung in diesen Dateien und der
zugehörigen Navigation fortlaufend aus, ohne nach jedem Schritt zu warten.
Liefere Vorschau, Änderungsübersicht und Prüfergebnisse. Die Veröffentlichung
in Produktion ist noch nicht autorisiert. Wenn die Vorbereitung abgeschlossen
ist, nenne die zu veröffentlichende Version, die Zielumgebung und den
Rückweg und warte auf meine Bestätigung der Veröffentlichungsaktion.
```

Jetzt sollte erst die lokale Arbeit abgeschlossen und dann die endgültige Freigabe zur Veröffentlichung erfragt werden. Hat der Nutzer das konkrete Veröffentlichungsziel und die Aktion bereits ausdrücklich autorisiert, prüfe anhand der aktuellen Richtlinien, ob du fortfahren kannst. Frage nicht allein wegen der Bestätigungsformulierung in dieser Vorlage nochmals nach derselben Erlaubnis.

Beide Vergleiche sind didaktische Beispiele, keine tatsächlichen Modellausgaben oder Effizienzmessungen.

## Wann nur ein Plan erstellt werden soll

Wenn noch Lösungswege verglichen werden, eine Budgetentscheidung nötig ist oder die Gestaltung ausdrücklich zuerst geprüft werden soll, kann die Aufgabe auf Planung begrenzt werden:

```text
In dieser Runde nur planen. Lies die bestehende Implementierung und zeige
zwei Optionen, ihre Auswirkungen und die Abnahmekriterien. Benenne die
Abwägungen, die wirklich meine Entscheidung erfordern. Ändere die
Implementierung nicht. Setze erst um, wenn der Ansatz feststeht.
```

Diese ausdrückliche Phasengrenze ist einzuhalten. Die übliche Eigenständigkeit eines Agenten berechtigt nicht dazu, direkt zur Implementierung überzugehen.

## Was in einen Plan gehört

Ein ausreichender Plan nennt Ziel, betroffenen Umfang, Schritte, Prüfung und ungelöste Abwägungen. Bekannte Antworten müssen nicht zu offenen Bestätigungsfragen werden. Eine kurze, risikoarme Aufgabe braucht keine Rückrollsektion, nur um eine Vorlage zu erfüllen.

Treten während der Ausführung neue Umstände auf, unterscheide gewöhnliche Implementierungsdetails von einer Zieländerung. Löse kleine Probleme innerhalb des ursprünglichen Umfangs und erläutere sie. Prüfe bei neuen Abhängigkeiten, einem größeren Änderungskreis, Schnittstellenänderungen oder neuen externen Aktionen zuerst, ob die Autorisierung weiterhin reicht.

## Mögliche Standardregeln für Projektanweisungen

```md
- Klar abgegrenzte und rückgängig zu machende Aufgaben direkt ausführen und
  angemessen prüfen.
- Für komplexe Aufgaben zuerst einen kurzen Plan nennen. Nur warten, wenn der
  Nutzer ihn zuerst prüfen möchte oder eine notwendige Abwägung offen ist.
- Innerhalb des autorisierten Umfangs ohne wiederholte Freigabe je Schritt
  weiterarbeiten.
- Bei fehlenden Schlüsselinformationen, überschrittenem Umfang oder einer nicht
  autorisierten Aktion das konkrete Problem erläutern.
- Abgeschlossene lokale Änderungen nicht als automatische Erlaubnis zum
  Veröffentlichen, Senden von Nachrichten oder Löschen von Daten verstehen.
```

Dies sind anpassbare Empfehlungen zur Arbeitsweise; sie ersetzen keine Systemvorgaben, Organisationsrichtlinien oder Sandbox-Grenzen. Siehe [Kontextpriorität](/de/guide/context/context-priority/), [Planung](/de/guide/agent-work/planning/) und [Muster für menschliche Freigabe](/de/cases/workflows/human-approval-patterns/).
