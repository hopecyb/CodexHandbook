---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique l'accumulation et le recentrage du contexte dans un même fil ; ses notions, exemples et liens internes ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: Contexte de conversation
description: Comment les informations s'accumulent et deviennent obsolètes dans un même fil.
locale: fr
source_locale: zh-CN
source_revision: "3968049"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 30
---

Le « contexte de conversation » signifie que vos échanges précédents avec Codex, dans une même tâche, continuent d'influencer la suite. Cela peut aider, mais aussi créer des risques.

## Pourquoi c'est utile

Un même fil accumule :

- Vos objectifs et vos contraintes
- Les conclusions tirées en cours de route
- Les étapes déjà exécutées
- Les informations importantes issues des outils

Par exemple, si vous avez déjà précisé « ne modifier que la page d'accueil, sans toucher au backend », il est généralement inutile de le répéter à chaque message.

## Pourquoi cela peut poser problème

Le problème courant est que **les anciennes informations ne deviennent pas forcément caduques d'elles-mêmes**.

Par exemple :

- Vous oubliez de mettre à jour une contrainte formulée plus tôt
- La tâche change de direction, mais la conversation continue de suivre l'ancien contexte
- Une conclusion provisoire se révèle fausse, tout en continuant d'influencer les décisions

L'objectif n'est donc pas d'allonger la conversation. Plus elle dure, plus il faut la recentrer activement.

## Quand rappeler les contraintes essentielles

Même si vous avez déjà dit quelque chose, mieux vaut le rappeler aux moments clés :

- Avant de modifier réellement des fichiers
- Après un changement de direction
- Après une longue conversation
- Lorsque Codex commence à négliger une limite

Les éléments les plus utiles à rappeler sont :

- Les fichiers qui peuvent être modifiés
- Ce qu'il ne faut pas faire
- Les critères de fin de tâche
- Les contraintes toujours en vigueur

## Idées reçues

### 1. Un fil plus long facilite-t-il toujours le travail ?

Pas forcément.

Un long fil est pratique si le sujet reste le même.
Si la tâche change de direction, continuer dans l'ancien fil peut détourner la nouvelle tâche.

### 2. Je l'avais déjà dit. Pourquoi Codex s'est-il quand même trompé ?

Les informations antérieures ont pu être diluées par les échanges suivants ou ne plus correspondre assez bien à la tâche actuelle.

Au lieu de dire « tu le savais déjà », rappelez les contraintes qui restent essentielles.

### 3. Quand ouvrir un nouveau fil ?

Quelques signes :

- L'objectif a changé
- Le problème initial est résolu
- La conversation vous paraît confuse à vous-même

Ouvrir un nouveau fil est généralement plus clair que de prolonger l'ancien à tout prix.

## Comment gérer un changement de sujet

Lorsque le sujet change :

1. Ouvrez un nouveau fil.
2. Collez uniquement un résumé des contraintes encore valables.
3. Laissez de côté le contexte devenu obsolète.

Si vous restez dans le même fil, commencez par un bref message de réalignement, par exemple :

```text
À partir de maintenant, parlons uniquement de la refonte de la page d'accueil. Ne reprenons pas la discussion précédente sur les API du backend. Pour cette étape, modifions seulement les textes et les styles, sans changer la structure des données.
```

Un même fil préserve le contexte, mais transporte aussi les anciens éléments devenus inutiles. Dès que le sujet change, recentrez-le explicitement.
