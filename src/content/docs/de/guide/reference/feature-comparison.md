---
title: Funktionsvergleich
description: Vergleiche Desktop-App, CLI, IDE und Cloud nach Arbeitsoberfläche, Ausführungsort und Review-Methode.
sidebar:
  order: 30
locale: de
source_locale: zh-CN
source_revision: f2f0528
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Diese Matrix vergleicht nur **stabile, grundlegende Arbeitsweisen** und verspricht keine dauerhaft unveränderten Detailfunktionen. Triff die erste Entscheidung mit der [Client-Auswahlgrafik](/de/guide/choose-your-client/) und prüfe hier anschließend die Unterschiede.

## Zentrale Gegenüberstellung

| Einstieg | Arbeitsort | Stärkster Kontext | Wichtigste Review-Methode | Typische Aufgaben |
|---|---|---|---|---|
| ChatGPT-Desktop-App | Lokale Projekte, Chats und Dateien | Geöffnete Ordner, Projekte und Aufgaben | Aufgabenzusammenfassung, Dateien, Diff und Genehmigungsoberfläche | Koordination mehrerer Projekte, Langzeitaufgaben, Datei- und Computeraktionen |
| Codex CLI | Aktuelles Terminal und lokales Repository | Arbeitsverzeichnis, Befehlsausgabe und Git-Zustand | Befehle, Diffs und Ergebniszusammenfassung im Terminal | Untersuchung, Änderungen, Tests, Skripte und CI |
| IDE-Integration | Aktueller Editor | Geöffnete Dateien, Auswahl und letzter Dialog | Änderungszusammenfassung und Diff neben dem Code | Lokale Erklärungen, kleine Änderungen und Review im Editor |
| Codex Cloud | Isolierte Remote-Umgebung | Verbundenes Repository und Umgebungskonfiguration | Cloud-Protokolle, Zusammenfassung, Diff und PR | Langzeitaufgaben im Hintergrund, parallele Versuche und Remote-Zusammenarbeit |

## Installation und Identität

| Element | Desktop-App | CLI | IDE | Cloud |
|---|---|---|---|---|
| Einstieg | Desktop-Anwendung für macOS / Windows / Linux | Lokale Kommandozeile | VS-Code-kompatible Erweiterung; eigene Integrationen für Xcode und JetBrains | Web und unterstützte Remote-Integrationen |
| ChatGPT-Anmeldung | Unterstützt | Unterstützt | Unterstützt | Erforderlich |
| Lokale Anmeldung mit API-Key | Unterstützt | Unterstützt | Unterstützt | Nicht unterstützt |
| Wichtigste Abrechnungsbeziehung | ChatGPT-Tarif oder API-Nutzung | ChatGPT-Tarif oder API-Nutzung | ChatGPT-Tarif oder API-Nutzung | ChatGPT-Tarif und Workspace-Berechtigungen |

Lokale Arbeit mit API-Key und Arbeit mit ChatGPT-Anmeldung unterliegen unterschiedlichen Abrechnungs-, Verwaltungs- und Datenverarbeitungsrichtlinien. Ein API-Key stellt außerdem keine Funktionen bereit, die einen ChatGPT-Workspace oder Cloud erfordern. Aktuelle Tarife und Kontingente stehen immer auf den offiziellen Live-Seiten.

## Häufige Kombinationen

### Persönlicher Entwicklungszyklus

```text
Lokales Problem in der IDE bestimmen → genauen Test in der CLI ausführen → Langzeitaufgabe und Diff in der Desktop-App prüfen
```

### Remote-Zyklus im Team

```text
Über GitHub / GitLab / Linear / Slack starten → isoliert in Cloud ausführen → Zusammenfassung und Diff menschlich prüfen → PR erstellen
```

### Lernzyklus für Einsteiger

```text
Übungsverzeichnis in der Desktop-App öffnen → kleine Aufgabe stellen → Berechtigungsanfrage prüfen → Diff ansehen → Verifikation ausführen
```

## Die Matrix ersetzt keine aktuelle Prüfung

Plugins, Scheduled tasks, Benachrichtigungen, Modelle und Organisationsrichtlinien ändern sich schnell. Prüfe bei folgenden Fragen die aktuelle Client-Oberfläche und offizielle Dokumentation:

- Wird eine bestimmte Funktion für das aktuelle Konto angezeigt?
- Unterliegt die Funktion Einschränkungen durch Tarif, Region oder Administratorrichtlinie?
- Wie heißen Befehle, Tastenkombinationen oder UI-Elemente in der aktuellen Version?
- Unterstützt eine API-Key-Anmeldung eine bestimmte ChatGPT- oder Cloud-Funktion?

Die Auswahlregel bleibt einfach: **Lokaler Code in der IDE, vollständiger Terminalzyklus in der CLI, Koordination lokaler Aufgaben in der Desktop-App und isolierte Remote-Ausführung in Cloud.**

---

**Status:** verified

**Unterstützte Produkte:** App / CLI / IDE / Cloud

**Prüfgrundlage:** Mit den aktuellen offiziellen Seiten zu App, CLI, IDE, Cloud, Authentication und Pricing abgeglichen. Die Matrix enthält nur eindeutig bestätigte Angaben zu Arbeitsort, Kontext, Review und Anmeldegrenzen und bewertet veränderliche Funktionen nicht mehr spekulativ als stark, mittel oder schwach.

**Zuletzt geprüft:** 2026-08-26
