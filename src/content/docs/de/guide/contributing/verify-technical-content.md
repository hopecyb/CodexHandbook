---
legacyVerification:
  status: "verified"
  basis: "Mit dem aktuellen Statussystem des Handbuchs, mehreren abgeschlossenen Prüfrunden und dem Vorrang offizieller Quellen abgeglichen. Diese Seite beschreibt interne Standards für die Einstufung als `verified` und für eine Herabstufung."
  checkedAt: "2026-07-26"
title: Technische Inhalte prüfen
description: Technische Fakten prüfen, Schritte reproduzieren und Geltungsbereich sowie Belege festhalten.
locale: de
source_locale: zh-CN
source_revision: '7fba563'
translation_status: reviewed
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Beitragsregeln an die neuen Metadatenfelder der Website angepasst; das bedeutet nicht, dass sämtliche hier genannten Produktmechanismen erneut getestet wurden.
sidebar:
  order: 30
reviewed_at: 2026-11-19
---

Befehle, Berechtigungen, Preise und Produktfunktionen können sich zwischen Versionen ändern. Die technische Prüfung soll Leser erkennen lassen, welche Aussagen aktuell belegt sind, für welche Umgebungen sie gelten und was noch selbst geprüft werden muss.

## Ziel der Prüfung

Die Prüfung geht über sprachliche Klarheit hinaus. Wesentliche Fakten müssen zum aktuellen Produkt passen, Schritte in der angegebenen Umgebung funktionieren und Schlussfolgerungen innerhalb der belegten Grenzen bleiben.

## Vorrang der Belege

1. Verwenden Sie für Produktverhalten, Parameter und Grenzen zuerst die offizielle OpenAI-Dokumentation.
2. Für jedes als „ausgeführt“ bezeichnete Beispiel müssen ein tatsächliches Ergebnis und Umgebungsangaben vorliegen.
3. Community-Artikel können Themen aufzeigen, ersetzen aber weder offizielle Quellen noch einen tatsächlichen Testlauf.
4. Ein erreichbarer Link beweist nicht, dass sein Inhalt eine Aussage stützt; lesen Sie die Quelle.
5. Wenn sich etwas nicht bestätigen lässt, benennen Sie die Unsicherheit, statt Lücken durch Vermutungen zu füllen.

## Zu dokumentierender Geltungsbereich

- Betroffenes Produkt: App, CLI, IDE oder Cloud
- Betriebssystem, Client und Versionen wichtiger Abhängigkeiten
- Tatsächlich ausgeführte Schritte und Art der Ergebniskontrolle
- Nicht abgedeckte Plattformen, Einstiege und Randfälle
- Die konkrete Quellseite statt nur der Startseite einer Website

## Reihenfolge der Prüfung

1. Bestimmen Sie Produkt, Einstieg und Szenario der Seite.
2. Gleichen Sie veränderliche Fakten mit der aktuellen offiziellen Dokumentation ab.
3. Führen Sie behauptete Abläufe in einer sauberen Umgebung von Anfang an aus.
4. Begrenzen Sie nicht getestete oder unsichere Aussagen und nennen Sie die Einschränkung im Text.
5. Prüfen Sie interne und externe Links sowie die benötigten Voraussetzungen.

## Häufig veränderliche Informationen

Prüfen Sie nach größeren Produktveröffentlichungen zuerst:

- Befehle, Unterbefehle und Flags
- Standardberechtigungen und Sandbox-Verhalten
- Tarife, Modellnamen, Preise, Kontingente und regionale Verfügbarkeit
- MCP, Hooks und andere Integrationsschnittstellen
- Menüpositionen, Schaltflächennamen und Produkteinstiege

## Wenn etwas nicht bestätigt werden kann

Stellen Sie Vermutungen nicht als Tatsachen dar. Entfernen Sie veraltete Einzelheiten, beschreiben Sie eine stabile Methode oder halten Sie die offene Frage in einem PR oder Issue fest. Für aktuelles Verhalten, Preise und Richtlinien sind die offiziellen Quellen maßgeblich.

## Verwandte Seiten

- [Zuverlässigkeit der Inhalte](/de/guide/start-here/handbook-version-policy/)
- [Offizielle Ressourcen](/de/guide/reference/official-resources/)
