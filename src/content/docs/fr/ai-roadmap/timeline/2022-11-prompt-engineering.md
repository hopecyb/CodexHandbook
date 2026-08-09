---
title: Prompt Engineering
date: 2022-11-30
year: 2022
summary: "Les grands modèles de langage sont probabilistes : un même prompt peut produire des réponses différentes. Le prompt engineering réduit cette variance avec des rôles, formats et contraintes, afin de rendre les sorties plus stables et contrôlables. Il sert aussi de base aux paradigmes suivants comme les agents, function calling et skills."
phase: mainstream
trend: absorbed
signal: well-calibrated
tags: [prompt-engineering, llm, prompting, workflow, reliability]
authored_by: ai-assisted
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-09
---

# Prompt Engineering

- Jalonnement grand public : 2022-11-30 (lancement public de ChatGPT, entrée du prompting dans l'usage pratique à grande échelle)
- Références officielles :
  - https://platform.openai.com/docs/guides/prompt-engineering
  - https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- Note : cette entrée situe le moment où Prompt Engineering devient une méthode fondatrice de l'ingénierie des applications IA. Les modèles et tactiques précis doivent être développés dans le Guide.

## Ce que c'est

Prompt Engineering est une approche d'ingénierie systématique pour concevoir des instructions d'entrée qui améliorent la contrôlabilité, la cohérence et le taux d'achèvement des tâches.

Il ne s'agit pas d'écrire quelques prompts élégants. Il s'agit de construire des processus réutilisables autour de la définition de rôle, de l'organisation du contexte, des contraintes de sortie, de la décomposition en étapes et de l'itération par feedback.

## Le passage qu'il a permis

Il a fait passer l'ingénierie des applications IA de « poser une question en langage naturel et espérer un bon résultat » à « concevoir des entrées structurées et obtenir plus régulièrement la sortie visée ».

Avant sa maturation, beaucoup d'équipes utilisaient les modèles par expérimentation ad hoc ; la qualité variait fortement selon l'opérateur. Après son émergence, les équipes ont commencé à accumuler modèles, patterns et critères d'évaluation, rendant l'interaction avec les modèles reproductible, optimisable et collaborative.

Cette étape est critique, car des capacités ultérieures comme Function Calling, l'orchestration d'agents et l'empaquetage en Skills reposent toutes sur une idée de base : organiser d'abord le comportement du modèle.

## Son stade actuel

Je marque actuellement Prompt Engineering comme `mainstream`.

Il est devenu une capacité de base dans presque toutes les applications LLM. Que ce soit pour l'usage individuel, la conception produit ou le déploiement en entreprise, concevoir les prompts n'est plus optionnel.

À mesure que les modèles progressent, des prompts trop détaillés peuvent devenir contre-productifs. Si chaque étape est sur-spécifiée, le modèle a moins d'espace pour utiliser ses propres capacités de raisonnement et de planification, ce qui peut réduire la qualité globale.

En même temps, il est absorbé par des mécanismes de plus haut niveau comme les sorties structurées, l'appel d'outils, l'orchestration de workflows et les Skills réutilisables. Ces mécanismes ne remplacent pas Prompt Engineering ; ils l'élèvent d'une tactique ponctuelle à une couche système.

## Ce qu'il pourrait remplacer

Il a remplacé les premiers styles d'interaction où l'on traitait les modèles comme des boîtes de recherche ou de chat aléatoires en espérant de bons résultats.

Dans les équipes, il a aussi remplacé une grande part de savoir tacite non réutilisable, en transformant « qui pose les meilleures questions » en « comment l'équipe définit les tâches et les standards de sortie ».

## Ce qui pourrait le remplacer

Il est peu probable qu'il disparaisse totalement. Il sera plutôt enveloppé par des abstractions plus hautes.

Si des standards de graphes de tâches, des optimiseurs automatiques de prompts ou des couches d'interface modèle plus contraintes arrivent à maturité, la charge explicite d'écriture de prompts diminuera. Ses idées centrales resteront toutefois intégrées à ces systèmes.
