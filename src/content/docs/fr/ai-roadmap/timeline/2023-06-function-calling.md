---
title: Function Calling
date: 2023-06-13
year: 2023
summary: "Les modèles sont fondamentalement des générateurs de texte : ils peuvent décrire des actions, pas les exécuter. Function Calling introduit un « menu de capacités » qui permet au modèle de choisir des outils et de remplir des arguments structurés. Une réponse devient alors une action exécutable."
phase: mainstream
trend: stable
signal: well-calibrated
tags: [function-calling, tools, api, orchestration, reliability]
authored_by: ai-assisted
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-09
---

# Function Calling

- Date de publication officielle : 2023-06-13
- Références officielles :
  - Annonce OpenAI : https://openai.com/index/function-calling-and-other-api-updates/
  - Guide de documentation OpenAI : https://platform.openai.com/docs/guides/function-calling
- Note d'évolution : cette ligne de capacité a ensuite été généralisée dans le récit plus large de `Tool Use`. Voir `2025-03-tool-use`.

## Ce que c'est

Function Calling est une capacité qui force la sortie du modèle à respecter des signatures de fonction strictes (schéma JSON de paramètres) et à déclencher l'exécution d'outils ou d'API externes.

Sa valeur centrale n'est pas l'action de « appeler une fonction » en soi. Le point clé est de convertir l'intention du modèle en requêtes d'interface structurées, exécutables, vérifiables et traçables.

## Le passage qu'il a permis

Il a fait passer l'ingénierie des applications IA de « le modèle donne des suggestions en langage naturel » à « le modèle produit des instructions exécutables qui entrent dans les pipelines système ».

Avant Function Calling, beaucoup de systèmes devaient reparcourir le texte produit par le modèle, une opération fragile et difficile à contrôler. Après son arrivée, les développeurs ont pu organiser l'exécution directement autour de signatures, de validation de paramètres et de gestion d'erreurs, ce qui a fortement amélioré la fiabilité.

Cette étape a rendu les systèmes d'agents, l'orchestration de workflows et l'automatisation métier véritablement ingénierables.

## Son stade actuel

Je marque actuellement Function Calling comme `mainstream`.

L'invocation structurée d'outils est devenue une capacité de base des systèmes LLM de production, et la plupart des applications IA sérieuses en dépendent sous une forme ou une autre.

Sa frontière s'étend aussi des appels d'arguments de fonction vers une interaction plus large avec les outils, contexte dans lequel apparaît ensuite le récit Tool Use.

## Ce qu'il pourrait remplacer

Il remplace des chaînes fragiles du type « instruction textuelle + parsing par regex + rattrapage manuel ».

À mesure que ce pattern mûrit, les développeurs s'appuient moins sur des contraintes de prompt lâches et davantage sur des interfaces typées avec boucles de feedback d'exécution.

## Ce qui pourrait le remplacer

Il sera plus probablement absorbé par des abstractions de plus haut niveau qu'éliminé.

Les futurs cadres de Tool Use, protocoles d'orchestration multi-outils et environnements d'exécution standardisés intégreront probablement Function Calling comme couche fondatrice.
