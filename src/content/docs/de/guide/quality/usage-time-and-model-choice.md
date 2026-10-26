---
title: Nutzung, Zeitaufwand und Modellwahl
description: Abonnementkontingent, API-Kosten, Wartezeit und Nacharbeit getrennt erfassen. Modelle anhand vergleichbarer Aufgaben wählen, ohne Verbrauch mit Qualität gleichzusetzen.
contentType: guide
audiences: [beginner, creator, developer, team]
level: intermediate
outputs: [csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: Offizielle Erläuterungen zu Nutzung, API-Preisen und Abrechnung von Reasoning wurden geprüft. Vorlagen und Berechnungen sind Lehrbeispiele; es gibt keine Messungen zu Modellgeschwindigkeit, Kosten oder Zeitersparnis.
  evidence:
    - label: Offizielle Codex-Nutzung und Preise
      href: https://learn.chatgpt.com/docs/pricing
    - label: Offizielle API-Preise
      href: https://developers.openai.com/api/docs/pricing
    - label: Leitfaden zu Reasoning-Modellen
      href: https://developers.openai.com/api/docs/guides/reasoning
assets:
  - path: /downloads/usage-log/usage-log-1.0.0.zip
    purpose: Vorlagen für Laufkosten und Dauer, Kontingent-Snapshots und Quellenhinweise
    license: CC0-1.0
    version: 1.0.0
locale: de
source_locale: zh-CN
source_revision: "8b68d92"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-10-25
---

Klären Sie zuerst, was Sie erfassen: das verbleibende Kontingent eines Kontos, die Kosten eines API-Aufrufs, Wartezeit oder menschlichen Aufwand für Prüfung und Nacharbeit. Diese Größen haben unterschiedliche Einheiten und sind nicht austauschbar.

[Protokollvorlagen herunterladen](/downloads/usage-log/usage-log-1.0.0.zip) · [Ausfüllhinweise](/downloads/usage-log/README.md)

## Vier getrennte Konten führen

| Größe | Was erfasst wird | Häufige Fehlinterpretation |
|---|---|---|
| Abonnementkontingent | Im aktuellen Fenster angezeigter Restprozentsatz und Zeitpunkt der Zurücksetzung | Den Restprozentsatz unmittelbar in Dollar oder eine feste Anzahl von Aufgaben umrechnen |
| API-Kosten | Tatsächliche Nutzung des Aufrufs, Modell und geltender Preis; Rechnung abgleichen | Den Abonnementpreis als API-Tarif verwenden oder eine Schätzung für die tatsächliche Abbuchung halten |
| Wartezeit | Beginn, Ende, Warteschlange und Wiederholungen derselben Aufgabe | Nur den letzten erfolgreichen Durchlauf erfassen und Zeit für Fehlschläge weglassen |
| Menschlicher Aufwand | Prüfung und Nacharbeit getrennt messen | Sämtliche Wartezeit des Modells als eingesparte Arbeitszeit zählen |

Die [offizielle Preiserklärung](https://learn.chatgpt.com/docs/pricing) beschreibt, dass die Nutzung einer Aufgabe von Modell, Kontext, Reasoning, Werkzeugen und Cache abhängt. Schätzungen der Nachrichtenanzahl sind keine festen Obergrenzen. Maßgeblich für das aktuelle Kontingent ist die Nutzungsanzeige; in einer CLI-Sitzung hilft `/status`. Nutzung mit einem API-Schlüssel wird nach API-Tarifen abgerechnet.

Ein Kontingent-Snapshot kann andere Aufgaben oder eine zurückgesetzte Nutzungsperiode enthalten. Ein Rückgang um 5 % zwischen zwei Zeitpunkten beweist nicht, dass diese Aufgabe immer 5 % verbraucht. Daraus lässt sich auch keine feste Zahl verbleibender Durchläufe versprechen.

## Vor einer API-Schätzung die Abrechnungsgrundlage prüfen

Ermitteln Sie den zutreffenden Preis nach Modell, Kategorie von Eingabe-, Cache- und Ausgabetokens sowie Servicebedingungen. Rechnen Sie dann mit der tatsächlichen Nutzung und berücksichtigen Sie andere abrechenbare Posten separat. Dieses Handbuch führt keine zweite feste Modellpreisliste. Siehe [API-Preise](https://developers.openai.com/api/docs/pricing).

Reasoning-Tokens werden wie Ausgabetokens berechnet. Prüfen Sie, ob ein Nutzungsfeld den Reasoning-Anteil bereits enthält, damit er nicht doppelt addiert wird. Welche Reasoning-Stufen ein Modell unterstützt, steht im [Reasoning-Leitfaden](https://developers.openai.com/api/docs/guides/reasoning).

Lehrbeispiel: Angenommen, ein Aufruf hat 10.000 Eingabe- und 2.000 Ausgabetokens, ohne Cache oder weitere Gebühren. Bei **fiktiven** Preisen von 2 Dollar je Million Eingabetokens und 10 Dollar je Million Ausgabetokens ergibt sich eine Schätzung von 0,04 Dollar. Das zeigt nur die Umrechnung der Einheiten; es ist weder ein Modellangebot noch eine echte Rechnung.

## Einstellungen mit denselben Aufgaben vergleichen

Wählen Sie Aufgaben mit klaren Abnahmekriterien und erstellen Sie mit den aktuell verfügbaren Einstellungen eine Ausgangsbasis. Eingaben, Werkzeugrechte, Projektanweisungen und Bewertungsverfahren bleiben gleich. Ändern Sie jeweils nur einen wesentlichen Faktor: Modell oder Reasoning-Einstellung.

Vergleichen Sie Korrektheit, Grenzen, Belege und Nacharbeit einzeln, nicht bloß die Antwortgeschwindigkeit. Wenn eine leichtere Einstellung die Abnahme nicht zuverlässig erfüllt, untersuchen Sie zuerst, ob Material fehlt, der Umfang unklar ist oder das Reasoning nicht ausreicht. Eine höhere Einstellung ersetzt weder Quellenprüfung noch Tests.

Dies ist eine Empfehlung zur Bewertung, keine Messung, nach der ein bestimmtes Modell stets gewinnt. Mit den [drei Prompt-Vergleichen](/de/prompts/comparison-lab/) und den [Workflow-Bewertungsbeispielen](/de/guide/quality/workflow-evaluation/) können Sie eigene Beobachtungen festhalten.

## Bedingungen der Stichprobe dokumentieren

Das [Laufprotokoll](/downloads/usage-log/runs.csv) enthält Eingabehash, tatsächliche Modellkennung, Client, Reasoning-Einstellung, Abrechnungsweg, Zeiten, Wiederholungen, Ergebnis und Kostenbeleg. Das [Kontingent-Snapshot-Protokoll](/downloads/usage-log/allowance-snapshots.csv) hält Fenster und Zurücksetzungszeit gesondert fest.

Bewahren Sie Fehlschläge und Unterbrechungen auf. Menschliche Prüfung und Nacharbeit werden getrennt erfasst. Unbekannte Felder bleiben leer und werden erläutert; null würde fälschlich keinen Verbrauch suggerieren. Verwenden Sie Kontoaliase und veröffentlichen Sie keine Schlüssel, Kontodaten oder privaten Logs.

Die bereitgestellten Tabellen enthalten noch keine gemessenen Läufe. Ohne passende menschliche Ausgangsbasis wird kein Prozentsatz eingesparter Zeit berechnet; ohne wiederholte Stichproben wird kein stabiler Geschwindigkeitsvorteil behauptet. Kürzere Wartezeit des Modells kann sich bei mehr Nacharbeit trotzdem nicht lohnen.

## Beim Annähern an ein Limit

Sichern Sie bisherige Ergebnisse, offene Punkte und den Wiedereinstieg. Prüfen Sie, ob die Aufgabe in wiederholten Versuchen feststeckt oder irrelevantes Material liest. Begrenzen Sie nicht notwendige Arbeiten entsprechend dem Ziel, aber behalten Sie Qualitäts- und Sicherheitskriterien bei. Lassen Sie entscheidende Prüfungen nicht aus, nur um vor Ende des Kontingents fertig zu werden.

Wenn Sie fortfahren müssen, prüfen Sie zunächst Ihr aktuelles Kontingent und den Abrechnungsweg. Dieser Artikel schaltet nicht automatisch auf API-Abrechnung um, kauft keine Credits und ändert keine Kontoeinstellungen. Teams können im [zweiwöchigen Pilotpfad](/de/guide/learning-paths/team/) Gründe für die Wahl und Bedingungen für eine Rückkehr dokumentieren.

Aktuelle Modelle, Unterschiede zwischen den Produkten und Aufgabenempfehlungen: [Modellwahl nach Aufgabe](/de/guide/reference/model-selection/).
