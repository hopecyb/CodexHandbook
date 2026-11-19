---
title: ChatGPT- und Codex-Modelle auswählen
description: Wähle Modell und Denkaufwand für Chat, Schreiben, Tabellen, Programmierung oder Recherche und beurteile anschließend Tarife und tatsächliche Nutzung.
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: Offizielle Dokumentation zu Modellen, Chat-Denkstufen und Tarifen geprüft; Aufgabenempfehlungen sind redaktionell, ohne Messungen der Erfolgsquote, Geschwindigkeit oder Kosten der Modelle.
  evidence:
    - label: Modelle in Work und Codex
      href: https://learn.chatgpt.com/docs/models
    - label: Chat-Modelle und Denkstufen
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: Tarife und Nutzung
      href: https://learn.chatgpt.com/docs/pricing
locale: de
source_locale: zh-CN
translation_status: stale
reviewed_at: 2026-10-26
translated_at: 2026-10-25
source_revision: "20eb508"
---

**Probiere GPT‑6.1 Sol für komplexe Aufgaben, Luna für klar umrissene kleine Aufgaben und Astra für besonders anspruchsvolle Probleme. Wähle im normalen Chat Instant, Thinking oder Pro.** Kläre zuerst, welches Produkt du verwendest, und lies dann die passende Tabelle.

[Work / Codex](#work-codex) · [Normaler Chat](#chat) · [Tarife und Preise](/de/chatgpt-pricing/) · [Tatsächliche Nutzung erfassen](/de/guide/quality/usage-time-and-model-choice/)

:::note[Geltungsbereich · 2026-10-24]
Modelle, Einstellungen und Kontingente hängen von Konto, Client, Workspace und Einführungsstand ab. Dies ist eine datierte Referenz; Empfehlungen sind Ausgangspunkte und garantieren nicht, dass die empfohlenen Modelle für dein Konto freigeschaltet sind. Prüfe die Menüs und Nutzungsregeln von Chat, Work und Codex jeweils separat.
:::

<span id="work-codex"></span>

## Work / Codex: mit der Aufgabe beginnen

Diese Szenarien sind redaktionelle Empfehlungen. Beginne mit der Standardeinstellung für den Denkaufwand, die dein Client unterstützt. Prüfe zuerst Unterlagen und Aufgabenrahmen, bevor du ein leistungsfähigeres Modell auswählst.

| Aufgabe | Empfohlener Ausgangspunkt | Wann mehr Denkaufwand oder ein anderes Modell sinnvoll ist | Praxis und Prüfung |
|---|---|---|---|
| Felder extrahieren, Formate umwandeln, kurze Texte überarbeiten | GPT‑6 Luna | Probiere Sol, wenn trotz klarer Eingaben weiterhin Felder fehlen oder Grenzfälle falsch behandelt werden | [Nutzung und Nacharbeit erfassen](/de/guide/quality/usage-time-and-model-choice/) |
| Aus mehreren Quellen einen Artikel schreiben | GPT‑6.1 Sol | Erwäge Astra, wenn Quellenwidersprüche ungelöst bleiben oder Anforderungen wiederholt übersehen werden | [Einen Artikel schreiben](/de/cases/write-an-article/) |
| Verkaufsdaten analysieren und einen Wochenbericht erstellen | GPT‑6.1 Sol | Erhöhe den Denkaufwand, wenn die Verarbeitung von Erstattungen, die Entfernung von Dubletten oder Berechnungen zur Veränderung gegenüber der Vorperiode weiterhin fehlerhaft sind; prüfe die Ergebnisse durch unabhängige Kontrollrechnungen | [Verkaufsbericht](/de/cases/analyze-a-spreadsheet/) |
| Fehler beheben oder mehrere Dateien ändern | GPT‑6.1 Sol | Erwäge Astra bei schwer auffindbaren Dateiabhängigkeiten oder wiederholt fehlgeschlagenen Korrekturen | [Einen Bug beheben und prüfen](/de/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Mit mehreren Quellen und strengen Vorgaben recherchieren | GPT‑6.1 Sol; bei schwierigen Problemen Astra erwägen | Erhöhe den Denkaufwand, wenn widersprüchliche Belege nicht zusammengeführt werden oder Vorgaben wiederholt verloren gehen | [Ergebnis prüfen](/de/guide/quality/) |

## Eigenschaften und Abwägungen der Modelle

| Modell | Hauptzweck | Abwägungen und Grenzen |
|---|---|---|
| GPT‑6 Luna | Effizientes Modell für klare, wiederkehrende und häufige Aufgaben | Geeignet für kleine Aufgaben; komplexe Urteile erfordern sorgfältigere Prüfung |
| GPT‑6.1 Sol | Alltagsmodell für komplexe Arbeit mit ausgewogenem Verhältnis von Leistung und Kosten | Offiziell als nahe an Astra bei geringeren Kosten positioniert, aber nicht bei jeder Aufgabe gleichwertig |
| GPT‑6 Astra | Leistungsfähigste Option für schwierige Aufgaben mit mehreren Schritten | Sinnvoll bei hohen Ergebnisanforderungen; bei einfachen Aufgaben lohnt sich der zusätzliche Verbrauch möglicherweise nicht |
| GPT‑6 Sol und GPT‑5.6-Reihe | Frühere Optionen, die im Client weiterhin verfügbar sein können | Bewährte Abläufe können bestehen bleiben; bei neuen Aufgaben zunächst die aktuell empfohlenen Modelle vergleichen |

Der [offizielle Modellleitfaden](https://learn.chatgpt.com/docs/models) führt 6.1 Sol für Work und Codex auf. Daraus folgt nicht, dass der normale Chat eine gleichnamige Option bietet. Modellbeschreibungen für Work/Codex und die GPT‑6-Anzeige in Chat müssen im jeweiligen Produktkontext gelesen werden.

<span id="chat"></span>

## Normaler Chat: die Denkstufe wählen

| Option | Empfohlene Verwendung | Abwägung |
|---|---|---|
| Instant | Alltagsfragen, Übersetzungen, kurze Überarbeitungen | Priorisiert schnelle Antworten |
| Thinking · Medium | Lernen, Optionen vergleichen, allgemeine Analyse | Ausgangspunkt für gründliche Analyse |
| Thinking · High | Mathematik, Entscheidungen mit vielen Bedingungen, komplexe Codefragen | Mehr Denkzeit für schwierige Fragen |
| Extra High | Besonders schwierige Probleme mit wiederholter Prüfung | Nach Bedarf und je nach Tarifverfügbarkeit |
| Pro / GPT‑6 Pro | Schwierige Aufgaben und längere Arbeitsabläufe | Nutzt Astra; abhängig von Tarif und Kontingent |

Zum Prüfzeitpunkt nennt die Chat-Dokumentation Medium und High für Plus; Extra High und Pro gehören zu höheren Tarifen. Think in Free / Go ist nicht mit den gleichnamigen Fähigkeiten bezahlter Tarife gleichzusetzen. Die Aufforderung „Denke gründlich nach“ erhöht in Instant unter Plus / Pro nicht automatisch die Denkstufe; nutze dafür das Menü. [Offizielle Chat-Dokumentation](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## Wann mehr oder weniger Denkaufwand sinnvoll ist

- Das Ergebnis erfüllt die Abnahmekriterien: Behalte die Einstellung bei oder probiere dieselbe Aufgabe mit einer leichteren Einstellung.
- Unterlagen oder Ziele fehlen: Ergänze zuerst Eingaben und Anforderungen; mehr Denkaufwand ersetzt keine fehlenden Belege.
- Bedingungen werden wiederholt übersehen oder die Argumentation ist nicht schlüssig: Halte die Eingaben konstant und erhöhe schrittweise den Denkaufwand oder wechsle das Modell.
- Auch hohe Einstellungen scheitern wiederholt: Zerlege die Aufgabe und prüfe Werkzeugberechtigungen sowie die Validierungsmethode.

Modell und Denkaufwand sind getrennte Entscheidungen. Mehr Denkaufwand benötigt meist mehr Zeit und Tokens. Prüfe die unterstützten Stufen je Modell und Client; übertrage Chat-Einstellungen nicht direkt auf Codex. [Grundlagen zu Modellen und Schlussfolgern](/de/guide/foundations/models-and-reasoning/)

## Ist ein anderer Tarif nötig?

Probiere bei gelegentlicher Nutzung zunächst den kostenlosen Zugang. Vergleiche zuerst Plus, wenn du häufig schreibst, analysierst oder programmierst. Vergleiche Pro, wenn du regelmäßig an Grenzen stößt oder tatsächlich mehr Fähigkeiten beziehungsweise Kapazität benötigst. Ob Go passt, hängt von den benötigten Funktionen und dem lokalen Preisabstand ab.

Dies ist eine Entscheidungsreihenfolge, keine allgemeingültige Rangliste zum Preis-Leistungs-Verhältnis. **Auch in Pro-Tarifen gelten Nutzungslimits für die Modelle.** Prüfe Abonnementkosten, zusätzliche Credits und API-Gebühren getrennt; ein Verhältnis von Einzelpreisen entspricht nicht dem Einsparverhältnis einer vollständigen Aufgabe.

[Tarifwahl und Preisquellen](/de/chatgpt-pricing/) · [Konten, Tarife und Zugriff](/de/guide/getting-started/account-plans-and-access/)

## Wie sich der Nutzen beurteilen lässt

Vergleiche mit denselben Eingaben, verfügbaren Werkzeugen und Abnahmekriterien. Erfasse Wartezeit, Fehlschläge und Wiederholungen, menschliche Prüfung sowie Nacharbeit getrennt. Bevorzuge die leichteste Einstellung, die zuverlässig die Kriterien erfüllt, statt nur die Antwortgeschwindigkeit zu vergleichen.

[Lade die Nutzungsprotokolle herunter und fülle sie aus](/de/guide/quality/usage-time-and-model-choice/), oder nutze die [drei Prompt-Vergleichsübungen](/de/prompts/comparison-lab/). Das bestehende Prompt-Experiment hat die tatsächlich verwendeten Modellbezeichnungen nicht erfasst und **kann keine Modellrangliste begründen**.

## Was tun, wenn das Modell nicht verfügbar ist?

Prüfe zunächst, ob du Chat, Work oder Codex verwendest, dann Client-Version, Tarif, Workspace-Berechtigungen und den Rücksetzzeitpunkt des Kontingents. Nutze ein verfügbares Modell für eine kleinere Aufgabe oder sichere den Fortschritt und warte. Die Auswahl eines Modellnamens erteilt keine Zugriffsrechte.

[Zugriff prüfen](/de/guide/getting-started/account-plans-and-access/) · [Fehlerbehebung](/de/guide/reference/troubleshooting/)

## Quellen und Aktualisierungen

Produktfakten stammen aus den oben genannten offiziellen Quellen; Aufgabenempfehlungen sind redaktionelle Einschätzungen. Diese Seite enthält keine Leistungsmessungen der Modelle. Preisaufzeichnungen werden separat auf der Preisseite gepflegt; prüfe vor dem Kauf die tatsächlichen Angaben beim Bezahlen.

- 2026-10-24: Erste Fassung des Leitfadens mit getrennten Empfehlungen für Chat und Work/Codex sowie Links zu Praxisfällen, Nutzungsprotokollen und Preisquellen.
