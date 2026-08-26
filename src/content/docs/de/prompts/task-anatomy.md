---
title: Struktur einer guten Aufgabe
description: Ziel, Hintergrund, Eingaben, Einschränkungen, Abnahme und Berechtigungsgrenzen.
locale: de
source_locale: zh-CN
source_revision: 4df3d01
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Je mehr Informationen eine Anforderung enthält, desto leichter verliert sie ihre Struktur: Materialien, Ergebnis, Grenzen und Abnahme stehen ungeordnet nebeneinander, und Codex muss die Lücken selbst füllen.

Diese Seite bietet einen direkt wiederverwendbaren Arbeitsauftrag. Du erfährst, welches Problem jeder Abschnitt löst und wie die Aufgabenbeschreibung in den Zyklus „Untersuchen, Planen, Ausführen, Verifizieren“ eintritt.

## Zielgruppe

- Personen, die Codex bereits öffnen können, aber häufig zu viele Änderungen, unvollständige Arbeit oder schwer beurteilbare Ergebnisse erhalten
- Entwickler, Kreative und Teams, die mündlich formulierte Anforderungen an einen Agent übergeben möchten
- Personen, die für Langzeitaufgaben Umfang, Berechtigungen und Abbruchbedingungen festlegen müssen

## Aufgabenstruktur

Ordne die Informationen in dieser Reihenfolge:

- Welches Ergebnis wird erwartet?
- Weshalb ist die Aufgabe erforderlich?
- Welche Materialien werden benötigt?
- Wo liegen die Grenzen?
- Woran wird der Abschluss erkannt?

Die Reihenfolge muss nicht starr sein. Wenn diese Punkte eindeutig sind, wird die Aufgabe jedoch wesentlich stabiler.

## Empfohlene Vorlage

```text
Ziel: … [Welches Endergebnis wird erwartet?]
Hintergrund: … [Weshalb ist es wichtig, wie ist der aktuelle Zustand?]
Eingaben: … [Relevante Dateien, Links oder eingefügte Inhalte]
Einschränkungen: … [Änderbarer Bereich, Stil und Verbote]
Abnahmekriterien: … [Prüfbare Fertigstellungsbedingungen]
Berechtigungsgrenzen: … [Netzwerk, Abhängigkeiten installieren, Konfiguration ändern]
Bei fehlenden Informationen: Zuerst fragen, nicht raten.
```

![Geschlossener Zyklus von der Aufgabenbeschreibung zum verifizierbaren Ergebnis](/diagrams/task-execution-loop-de.svg)

Die sechs Elemente auf der linken Seite des Diagramms sollen den Prompt nicht verlängern, sondern entscheidende Lücken schließen. Nach Beginn der Ausführung bestimmen Verifikationsnachweise den nächsten Schritt: Nur ein erfolgreiches Ergebnis wird ausgeliefert. Bei einem Fehlschlag kehrt die Aufgabe mit den Fehlerinformationen zur Beschreibung oder zum Plan zurück, statt blind weiter verändert zu werden.

## Zweck jedes Abschnitts

- **Ziel:** Verhindert Aufgaben, die nur eine Aktion, aber kein Ergebnis beschreiben
- **Hintergrund:** Hilft Codex zu verstehen, weshalb die Aufgabe so erledigt werden soll
- **Eingaben:** Stellt die tatsächlich benötigten Dateien, Links und Materialien bereit
- **Einschränkungen:** Verhindert Überschreitungen und beiläufige Zusatzänderungen
- **Abnahmekriterien:** Macht die Frage „Ist die Aufgabe fertig?“ überprüfbar
- **Berechtigungsgrenzen:** Klärt vorab Netzwerkzugriff, Installation von Abhängigkeiten und Konfigurationsänderungen

## Häufige Missverständnisse

### 1. Jeder Abschnitt muss ausführlich ausgefüllt werden

Die Vorlage ist eher eine Checkliste als ein Lückentext.  
Einige Aufgaben benötigen keinen langen Hintergrund. Wenn du ihn auslässt, fehlt allerdings auch ein Teil der Entscheidungsgrundlage.

### 2. Ziel und Abnahme sind dasselbe

Sie erfüllen unterschiedliche Aufgaben:

- Das **Ziel** beschreibt das gewünschte Ergebnis
- Die **Abnahme** beschreibt, wie du bestätigst, dass dieses Ergebnis tatsächlich erreicht wurde

### 3. Eingaben bedeuten, möglichst viele Materialien einzufügen

Mehr Eingaben sind nicht automatisch besser; entscheidend ist ihre Relevanz.  
Kennzeichne eindeutig die Materialien, die unbedingt gelesen werden müssen.

## Minimale Aufgabenvorlage

Für eine kurze, brauchbare Fassung kannst du die Vorlage so reduzieren:

```text
Ziel: Was soll in welchen Zustand gebracht werden?
Eingaben: Hier befinden sich die relevanten Dateien oder Seiten
Einschränkungen: Welche Bereiche dürfen geändert werden und welche nicht?
Abnahme: Wie prüfe ich, dass die Aufgabe wirklich abgeschlossen ist?
Bei Unsicherheit: Zuerst fragen
```

## Von einer unklaren Anfrage zur ausführbaren Aufgabe

### Ursprüngliche Anfrage

```text
Optimiere bitte die Startseite der Dokumentation.
```

Dieser Satz nennt weder Zielgruppe noch Änderungsbereich oder Kriterien für eine Verbesserung. Selbst wenn Codex Inhalt erzeugt, lässt sich kaum beurteilen, ob der Umfang überschritten wurde.

### Ausführbare Fassung

```text
Ziel: Schreibe den Text im ersten sichtbaren Bereich der Dokumentationsstartseite neu, damit Personen ohne Codex-Erfahrung innerhalb von 30 Sekunden verstehen, worum es geht und wo sie beginnen.
Hintergrund: Die aktuelle Startseite setzt voraus, dass Leser Agent, Kontext und Skill bereits verstehen, und erklärt den Einstieg nicht direkt genug.
Eingabe: src/content/docs/guide/index.md
Einschränkungen: Ändere nur diese Datei. Ändere weder Navigation, Stile noch Komponenten. Ergänze beim ersten Auftreten von Agent eine allgemein verständliche Erklärung.
Abnahmekriterien:
- Der erste sichtbare Bereich nennt Zweck des Handbuchs, Zielgruppe und ersten Leseeinstieg
- Vorhandenes Frontmatter und Überschriftenebenen bleiben erhalten
- Keine neuen unerklärten Fachbegriffe
- pnpm build besteht
Berechtigungsgrenzen: Verwandte interne Seiten dürfen gelesen werden. Kein Netzwerkzugriff, keine Installation von Abhängigkeiten und kein Git-Commit.
Bei fehlenden Informationen: Liste zuerst die fehlenden Informationen und den geplanten Änderungsbereich auf und warte auf meine Bestätigung.
```

### Erwarteter Ausführungsablauf

1. Startseite und benachbarte Einstiegsseiten lesen und die aktuellen Probleme beschreiben.
2. Einen kurzen Plan erstellen, der nur eine Datei betrifft.
3. Den Text ändern und eine Diff-Zusammenfassung zeigen.
4. `pnpm build` ausführen.
5. Für jedes der vier Abnahmekriterien den entsprechenden Nachweis berichten.

## Die eigene Aufgabenbeschreibung prüfen

Frage dich vor dem Absenden:

- Beschreibt das Ziel ein Ergebnis oder nur eine Aktion wie „optimieren“, „bearbeiten“ oder „ansehen“?
- Enthalten die Eingaben ausschließlich wirklich relevante Dateien und Materialien?
- Nennen die Einschränkungen ausdrücklich, welche Inhalte unberührt bleiben müssen?
- Kann eine andere Person bei den Abnahmekriterien eindeutig zwischen „bestanden“ und „nicht bestanden“ entscheiden?
- Müssen Netzwerkzugriff, Installation von Abhängigkeiten, externe Schreibzugriffe oder Commits vorab genehmigt werden?
- Soll Agent bei fehlenden Informationen zuerst fragen, selbst nachsehen oder anhalten?

Du kannst die Vorlage an die Größe der Aufgabe anpassen. Jeder ausgelassene Abschnitt entfernt jedoch eine Kategorie von Entscheidungsgrundlagen. Ein Tippfehler in einer Datei benötigt keinen langen Hintergrund; eine modulübergreifende Migration darf nicht nur aus einem Zielsatz bestehen.

## Nächste Schritte

- [Fertigstellungskriterien definieren](/de/prompts/define-done/)
- [Einschränkungen und Grenzen](/de/prompts/constraints-and-boundaries/)
- [Zuerst einen Plan anfordern](/de/prompts/ask-for-a-plan/)
- [Untersuchen, planen, ausführen, verifizieren](/de/cases/workflows/explore-plan-execute-verify/)

---

**Status:** verified  
**Unterstützte Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite beschreibt ausschließlich eine Methode zur Aufgabenstruktur. Beispiele und interne Links wurden geprüft; der Text hängt nicht von veränderlichen Fakten wie Produktversion, Preis oder Oberfläche ab.  
**Zuletzt geprüft:** 2026-08-25
