---
title: Kontext und Dateien
description: "Projekt-, Datei- und Gesprächskontext sowie gängige Eingabetypen verwalten."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 15
---

# Kontext und Dateien

Kontext ist die Information, die Codex in diesem Moment sehen, referenzieren und für Aktionen nutzen kann.

In deinem Kopf ist alles klar — die Gegenseite sieht aber wichtige Materialien nicht und liegt daneben.  
Bei Codex gilt dasselbe. Ohne guten Kontext ertrinken auch starke Prompts im Rauschen.

## Was Kontext umfasst

Stell dir Infos vor, auf die ein neuer Kollege in einem Chat angewiesen wäre:

- Die Aufgabe, die du gibst — das aktuelle Problem
- Die Dateien, die du öffnest — Hintergrundmaterial
- Regel-Dokumente im Repo — Teamvereinbarungen
- Die Gesprächshistorie — sein Gedächtnis zu dieser Aufgabe

Zusammen ist das der Kontext, auf den es sich stützt.

## Typische Fehlerquellen
Viele „warum hat es das schon wieder falsch verstanden?“-Fälle kommen nicht von einem „dummen“ Modell, sondern von Kontextproblemen, z. B.:

- Zu wenig Information → es muss raten
- Zu viel Information → der Fokus geht unter
- Du denkst, es kennt die Datei — hast es aber nicht klar gesagt
- Das alte Gespräch läuft zu lange → frühe Infos sind nicht mehr fokussiert

Der einfache Maßstab dieser Seite:

> **Lass es wirklich relevante Information sehen — und irrelevante nicht den Platz stehlen.**
## Kontextmanagement

- [Projektkontext](/guide/context/project-context/) — `AGENTS.md`, Repo-Vereinbarungen
- [Datei- und Verzeichniskontext](/guide/context/file-and-folder-context/) — @-Referenzen und Umfang
- [Gesprächskontext](/guide/context/conversation-context/) — Thread und Komprimierung
- [Fokussiert halten](/guide/context/keep-context-focused/) — irrelevantes Rauschen vermeiden
- [Sensibler Kontext](/guide/context/sensitive-context/) — Secrets und Privatsphäre

Wie du Hintergrund im Prompt organisierst: [Ziele und Kontext](/prompts/goals-and-context/).

## Dateien und Artefakte

Neben „sag ihm, was zu tun ist“ musst du oft auch „ihm etwas zeigen“.

Dieses „etwas“ kann sein:

- Code oder Dokumentation
- Ein Screenshot
- Ein PDF
- Eine Tabelle
- Eine Präsentation

Je nach Dateityp unterscheiden sich Leseweise, passende Fragen und Abnahme etwas.

## Dateien und Artefakte

- [Text- und Codedateien](/guide/files-and-artifacts/text-and-code-files/)
- [Bilder und Screenshots](/guide/files-and-artifacts/images-and-screenshots/)
- [PDF und Dokumente](/guide/files-and-artifacts/pdf-and-documents/)
- [Tabellen und Spreadsheets](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [Präsentationen](/guide/files-and-artifacts/presentations/)

## Empfohlene Lesereihenfolge

Nicht alles auf einmal. Diese Reihenfolge hilft:

1. Zuerst [Datei- und Verzeichniskontext](/guide/context/file-and-folder-context/) — verstehen, „welche Dateien es sehen soll“
2. Dann [Fokussiert halten](/guide/context/keep-context-focused/) — Aufgaben nicht zerreden
3. Je nach Materialtyp die passende Datei-Kapitelseite

Kontext ist der Informationshaufen, den Codex beim Urteilen griffbereit hat; richtig gegeben, werden Ergebnisse leichter richtig.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite ist interne Navigation und Methodenüberblick; der Rahmen „Aufgabe, Dateimaterial, Projektregeln und Gesprächshistorie bilden gemeinsam den Kontext“ wurde mit den aktuellen Kontext- und Dateiverarbeitungs-Kapiteln Punkt für Punkt abgeglichen und hängt nicht von schnell veränderlichen UI-Details ab.  
**Zuletzt überprüft:** 2026-07-26
