---
title: Tool Use
date: 2025-03-11
year: 2025
summary: "Ce n'est pas une invention entièrement nouvelle, mais une généralisation système de function calling. Function calling répond à « comment appeler » ; tool use élargit « ce qui peut être appelé ». Les outils incluent désormais moteurs de recherche, interpréteurs de code, navigateurs et bases de données."
phase: emerging
trend: rising
signal: well-calibrated
tags: [tool-use, tools, agent, orchestration, function-calling]
authored_by: ai-assisted
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: 902c66c
---

# Tool Use

- Jalonnement de montée en capacité : 2025-03-11
- Références officielles :
  - OpenAI (New tools for building agents) : https://openai.com/index/new-tools-for-building-agents/
  - Anthropic (Tool use overview) : https://docs.anthropic.com/en/docs/build-with-claude/tool-use
- Note d'évolution : cette entrée décrit la généralisation `Function Calling -> Tool Use`, pas un mécanisme sous-jacent séparé de Function Calling.

## Ce que c'est

Tool Use est un paradigme d'interaction plus large où les modèles ne se contentent pas d'émettre un seul ensemble d'arguments de fonction. Ils peuvent choisir, appeler, combiner et coordonner plusieurs outils externes pendant l'exécution d'une tâche.

Dans ce paradigme, function calling est une forme particulière d'interaction avec un outil. Le focus d'ingénierie s'élargit à l'accès à l'écosystème, à la stratégie d'invocation, au feedback d'exécution et à la collaboration multi-étapes.

## Le passage qu'il a permis

Il fait passer l'ingénierie des applications IA de « appels structurés vers une seule fonction/API » à « orchestration orientée tâche entre plusieurs outils ».

Cela élargit le focus de la correction des paramètres vers le choix d'outils, l'ordre d'appel, le transfert de contexte, la reprise sur erreur et la synthèse des résultats. La complexité système augmente, mais le plafond de capacité aussi.

## Pourquoi il mérite une entrée séparée

Tool Use et Function Calling appartiennent à la même ligne de capacité, mais Tool Use représente une expansion de frontière et un changement de focus d'ingénierie.

Function Calling met l'accent sur « réussir un appel ». Tool Use met l'accent sur « utiliser efficacement tout un système d'outils ». Les séparer rend visible ce point d'inflexion.

## Son stade actuel

Je marque actuellement Tool Use comme `emerging`.

Les grandes plateformes le poussent clairement comme direction de capacité centrale, mais les protocoles interplateformes, standards d'observabilité et pratiques de contrôle des coûts évoluent encore vite.

La tendance est claire, mais les meilleures pratiques ne sont pas encore totalement stabilisées.

## Ce qu'il pourrait remplacer

Il peut remplacer une partie des flux semi-automatisés construits comme « un appel de fonction + assemblage manuel des étapes ».

À mesure que Tool Use mûrit, les systèmes s'appuieront davantage sur une collaboration multi-outils dynamique pilotée par le modèle, et moins sur une orchestration codée en dur dans la logique métier.

## Ce qui pourrait le remplacer

Il sera plutôt absorbé dans des standards d'exécution de plus haut niveau que remplacé.

Des protocoles de graphes de tâches unifiés, des couches de communication agent standardisées et des plateformes de gouvernance d'exécution pourraient abstraire davantage les patterns Tool Use actuels.
