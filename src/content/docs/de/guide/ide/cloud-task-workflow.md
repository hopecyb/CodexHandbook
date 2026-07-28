---
title: Cloud-Aufgaben in der IDE
description: Cloud-Aufgaben aus der IDE delegieren, Status verfolgen und Remote-Ergebnisse prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Einige IDE-Integrationen erlauben, Aufgaben an die **Cloud zu delegieren**. Die Aufgabe läuft in einer remote standardisierten Umgebung — du kannst lokal weitereditieren oder den Rechner verlassen. Ablauf ähnlich wie reines Cloud/Web, nur der Einstieg sitzt im Editor.

## Inhalt

- Wann Cloud-Aufgaben aus der IDE statt rein lokal
- Was vor und nach der Delegation vorzubereiten ist
- Wie Remote-Diffs zurück in die lokale Überprüfung kommen

## Geeignete Szenarien

| Cloud geeignet | Lokal bleiben |
|---|---|
| Schwere Installationen, schwer reproduzierbare Umgebung | Zwei Zeilen schnell ändern |
| Branch pushen / PR öffnen nötig | GitHub nicht verbunden |
| Lange Läufe, Freigabehinweise am Handy | Enthält lokale, uncommitted sensible Entwürfe |

Konzept: [Lokal und Cloud](/guide/foundations/local-vs-cloud/)

## Wann dieser Workflow passt

Häufig, wenn:

- du in der IDE arbeitest
- die Aufgabe selbst aber besser remote läuft

Du bleibst also in der IDE, die Ausführungsumgebung ist aber remote.

## Voraussetzungen

- [ ] [GitHub verbunden](/guide/web-and-cloud/connect-github/)
- [ ] Cloud-[Umgebung](/guide/web-and-cloud/cloud-environments/) und [Secrets](/guide/web-and-cloud/secrets-and-variables/) konfiguriert (falls nötig)
- [ ] Lokale Änderungen committed oder klar „Remote-Branch ist maßgeblich“

**Die IDE ersetzt nicht den Cloud-Zugriff auf lokal ungeschobene Commits.**

## Häufige Missverständnisse

### 1. „In der Cloud ausführen“ in der IDE nimmt automatisch alles vom Rechner mit?

Nein.  
Remote-Aufgaben sehen Remote-Repo, Remote-Umgebung und das, was du explizit übergibst.

### 2. Einstieg in der IDE = fast wie lokale Aufgabe?

Auch nicht.  
Der Startpunkt ist die IDE, Ausführungsgrenzen, Umgebung und sichtbare Inhalte folgen trotzdem dem Cloud-Modell.

### 3. Remote fertig ≠ Überprüfung bestanden

Remote-Abschluss heißt nur: dort gelaufen — nicht, dass lokales Review, Tests und finale Bestätigung erledigt sind.

## Empfohlener Ablauf

```text
1. In der IDE Aufgabenbeschreibung schreiben (Ziel, Branch, Einschränkungen, Abnahme)
2. «In der Cloud ausführen» oder äquivalenten Einstieg wählen (laut Produkt-UI)
3. Plan bestätigen (falls Plan-Modus aktiv)
4. Weggehen oder lokal weiterarbeiten → Fortschritt über Benachrichtigung/Panel
5. Nach Remote-Abschluss: Diff in Web/App ansehen → PR öffnen oder Branch lokal pullen
6. Lokal testen + manuelles Review → mergen
```

PR-Details: [Pull Request erstellen](/guide/web-and-cloud/create-pull-requests/)

## Übliche Reihenfolge

Beim ersten Cloud-Task aus der IDE:

1. Klären, ob lokale Änderungen committed sind oder absichtlich weggelassen werden
2. GitHub, Secrets und Branch vorbereiten
3. Mit klarem Ziel, Umfang und Abnahmekriterien starten
4. Nach Remote-Abschluss Diff ansehen
5. Lokal Tests und manuelle Überprüfung nachziehen

Der Kernunterschied IDE-Cloud vs. lokal: Ist die Ausführungsumgebung remote?

## Bezug zur Desktop-App-Delegation

[Lokale und Cloud-Aufgaben](/guide/desktop-app/local-and-cloud-tasks/) der Desktop-App und IDE-Delegation teilen dasselbe Cloud-Backend; Unterschied vor allem **Einstiegs-UI und Kontextanhänge** (IDE kann eine Zusammenfassung der aktuellen Auswahl mitschicken).

## Sicherheitsgrenzen

- Cloud-Aufgaben-Berechtigungen folgen GitHub-Verbindungsrahmen und Organisationsrichtlinien
- Keine Produktionsgeheimnisse in die Aufgabenbeschreibung; [Secrets](/guide/web-and-cloud/secrets-and-variables/) nutzen
- Vor dem Merge weiterhin [manuelle Überprüfung](/guide/web-and-cloud/code-review/)

## Häufige Fehler

- Nach Delegation lokal dieselbe Datei weiterändern → Konflikt mit Remote-Branch
- Kein Branchname → Remote pusht auf gemeinsamen Branch
- Cloud-Output als „abgenommen“ nehmen und CI überspringen

---

**Status:** outdated  
**Anwendbare Produkte:** IDE / Cloud  
**Prüfhinweis:** Diese Seite beschreibt konkrete aktuelle Erweiterungsfähigkeiten für IDE→Cloud-Delegation und Diff-Rückführung; aktuelle Official-Quellen reichen nicht für Punkt-für-Punkt-Belege — bis zur formalen IDE/Cloud-Doku besser `outdated`.  
**Zuletzt geprüft:** 2026-07-26
