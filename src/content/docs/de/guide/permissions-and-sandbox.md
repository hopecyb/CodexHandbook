---
title: Berechtigungen und Sandbox
description: Verstehe Sandbox, Genehmigungen, Netzwerkzugriff sowie lokale und Cloud-Ausführungsgrenzen anhand einer Entscheidungskette.
sidebar:
  order: 14
locale: de
source_locale: zh-CN
source_revision: 6b29dc6
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Für eine sichere Nutzung von Codex musst du zwei Kontrollebenen gemeinsam betrachten: **Die Sandbox legt fest, welche Bereiche technisch erreichbar sind. Die Genehmigungsrichtlinie legt fest, ob Codex vor dem Überschreiten der aktuellen Grenze fragen muss.**

![Ablauf von Codex-Sandbox und Genehmigung: Eine Aktion durchläuft zuerst die Sandbox-Grenze, fordert bei Überschreitung menschliche Genehmigung an und hinterlässt schließlich Verifikationsnachweise](/diagrams/sandbox-approval-flow-de.svg)

## Zuerst diesen Unterschied verstehen

| Kontrolle | Beantwortete Frage | Typische Objekte |
|---|---|---|
| Sandbox | Welche Bereiche kann diese Aktion höchstens erreichen? | Projektdateien, externe Pfade, Systemfunktionen und Netzwerk |
| Genehmigungsrichtlinie | Muss vor dem Überschreiten der aktuellen Grenze ein Mensch gefragt werden? | Abhängigkeiten installieren, Netzwerk verwenden, in externe Verzeichnisse schreiben, Anwendungen starten |
| Aufgabeneinschränkungen | Was soll und was darf diese Aufgabe nicht tun? | Änderbare Verzeichnisse, verbotene Aktionen, Abnahmebefehle |
| Menschliches Review | Sind die ausgeführten Ergebnisse akzeptabel? | Diff, Protokolle, Tests und externe Nebenwirkungen |

Aufgabeneinschränkungen ersetzen die Sandbox nicht; die Sandbox ersetzt kein abschließendes Review. Sie regeln Absicht, Ausführungsgrenzen und Ergebnisabnahme.

## Wie eine Aktion die Sicherheitsgrenzen durchläuft

Wenn Codex einen Befehl oder Werkzeugaufruf vorbereitet, kannst du den Ablauf so verstehen:

1. Zuerst wird geprüft, ob die Aktion innerhalb der aktuellen Sandbox liegt.
2. Innerhalb der Grenze wird sie ausgeführt und ihre Ausgabe protokolliert; ein Dialog muss dabei nicht erscheinen.
3. Außerhalb der Grenze fordert Codex je nach Genehmigungsrichtlinie eine Erlaubnis an oder lehnt die Aktion direkt ab.
4. Du kannst ablehnen, eine enger begrenzte Aktion verlangen oder genau diese einzelne Aktion genehmigen.
5. Prüfe nach der Ausführung weiterhin Diff, Tests und Zustand externer Systeme und bestätige, dass das Ergebnis dem Aufgabenziel entspricht.

Die Sandbox gilt ebenso für Unterprozesse und Befehle, die Codex startet. Eine Aktion umgeht die Grenze nicht deshalb, weil sie innerhalb eines Skripts stattfindet.

## Lokale Ausführung und Cloud haben unterschiedliche Grenzen

| Umgebung | Wichtigste Isolierung | Netzwerk | Was du prüfen solltest |
|---|---|---|---|
| Lokale Aufgaben in App / CLI / IDE | Sandbox des Betriebssystems und aktuelle Genehmigungsrichtlinie | Lokale Aufgaben sollten sich normalerweise nicht standardmäßig auf externes Netzwerk verlassen; Zugriff ausdrücklich genehmigen oder konfigurieren | Arbeitsbereich, Befehl, externe Pfade und Zweck des Netzwerkzugriffs |
| Cloud-Aufgabe | Von OpenAI verwalteter isolierter Container | Netzwerk kann für die Setup-Phase konfiguriert werden; in der Agent-Phase ist es standardmäßig deaktiviert, sofern es nicht ausdrücklich aktiviert wird | Repository, Umgebungskonfiguration, erlaubte Domains, zurückgegebener Diff und Verifikationsnachweise |

Secrets einer Cloud-Umgebung werden in der Setup-Phase verwendet und vor Beginn der Agent-Phase entfernt. Verwende weiterhin minimale Berechtigungen und lege keine sachfremden Produktionszugangsdaten in der Aufgabenumgebung ab.

## Genehmigungsanfragen in vier Schritten beurteilen

### 1. Mit der Aufgabe abgleichen

Dient dieser Schritt tatsächlich dem aktuellen Ziel? „Könnte nützlich sein“ reicht als Begründung für eine Genehmigung nicht.

### 2. Mit dem Umfang abgleichen

Greift die Anfrage auf das aktuelle Projekt, ein externes Verzeichnis, das Netzwerk oder eine Systemanwendung zu? Je genauer Pfad, Domain und Befehl sind, desto leichter lässt sich die Anfrage beurteilen.

### 3. Nebenwirkungen abgleichen

Liest die Aktion nur, oder schreibt sie Dateien, installiert Software, sendet Daten oder verändert einen Remote-Zustand? Externe Nebenwirkungen erfordern normalerweise mehr Vorsicht als lokal umkehrbare Änderungen.

### 4. Verifikation und Wiederherstellung abgleichen

Wie lässt sich der Erfolg bestätigen? Kann die Aktion bei einem Fehlschlag rückgängig gemacht werden? Wenn diese Fragen unbeantwortet sind, lass Codex zunächst eine Erklärung oder eine kleinere Alternative liefern.

## Konkretes Beispiel: Abhängigkeiten installieren

Angenommen, Codex möchte Folgendes ausführen:

```bash
pnpm install
```

Verlasse dich nicht nur darauf, dass dir der Befehl bekannt vorkommt. Prüfe:

- Benötigt die aktuelle Aufgabe tatsächlich noch nicht installierte Abhängigkeiten?
- Wird der Befehl im richtigen Repository-Verzeichnis ausgeführt?
- Auf welches Paket-Repository muss er zugreifen?
- Ändert er eine Sperrdatei?
- Welche Tests oder Builds werden nach der Installation ausgeführt?

Wenn du nur vorhandenen Code verifizieren möchtest und die Abhängigkeiten bereits installiert sind, kannst du ablehnen und zuerst die vorhandene Umgebung verwenden lassen.

## Grenzen im Prompt formulieren

Du kannst den Ausführungsbereich direkt in der Aufgabe beschreiben:

```text
Ändere nur src/auth und tests/auth.
Verwende zuerst die installierten Abhängigkeiten und greife nicht auf das Netzwerk zu oder aktualisiere Versionen.
Wenn ein Zugriff auf externe Pfade oder das Netzwerk erforderlich ist, nenne vorher Zweck, Ziel und kleinste mögliche Aktion.
Führe abschließend pnpm test --filter auth aus und berichte Befehlsausgabe sowie verbleibende Risiken.
```

Damit ist die Absicht eindeutiger. Die tatsächlichen Ausführungsgrenzen werden weiterhin von Sandbox, Genehmigungsrichtlinie und verwalteter Teamkonfiguration durchgesetzt.

## Häufige Irrtümer

- **Eine Genehmigungsanfrage bedeutet immer Gefahr:** Auch reguläre Installation, Netzwerkzugriff oder Schreiben außerhalb des Projekts können eine Genehmigung erfordern. Entscheidend sind Notwendigkeit und Umfang.
- **Ohne Dialog ist die Aktion vollständig sicher:** Sie kann bereits innerhalb der Sandbox liegen. Prüfe trotzdem die tatsächlichen Änderungen.
- **Eine Genehmigung öffnet dauerhaft alles:** Dauer und Umfang hängen von Produkt und Richtlinie ab. Lies die Anfrage genau.
- **Subagents besitzen eigene Berechtigungen:** Sie erben Sandbox und Berechtigungsmodus der Hauptaufgabe und erhalten nicht automatisch weitergehenden Zugriff.
- **Hooks ersetzen die Sandbox:** Hooks sind eine zusätzliche Schutz- und Auditebene, kein Ersatz für erzwungene Isolierung durch das Betriebssystem.

Produktspezifische Einstellungen findest du unter [CLI-Genehmigungen und Sandbox](/de/guide/cli/approvals-and-sandbox/) und [Desktop-App-Einstellungen](/de/guide/desktop-app/settings/). Die Aufgabenformulierung behandelt [Einschränkungen und Grenzen](/de/prompts/constraints-and-boundaries/).

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE / Cloud

**Prüfgrundlage:** Mit den aktuellen Codex-Informationen zu Sandbox, Genehmigungen und Sicherheit abgeglichen. Die Seite unterscheidet Ausführungsgrenzen des Betriebssystems, Genehmigungsrichtlinie, Aufgabeneinschränkungen und menschliches Review und beschreibt die unterschiedlichen Netzwerkmodelle für lokale Ausführung und Cloud.

**Zuletzt geprüft:** 2026-08-26
