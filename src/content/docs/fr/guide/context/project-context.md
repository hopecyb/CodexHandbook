---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique comment consigner un contexte de projet durable ; ses notions, exemples et limites ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: Contexte de projet
description: Instructions du projet et contexte des dossiers.
locale: fr
source_locale: zh-CN
source_revision: "fb3eb50"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 10
---

Le « contexte de projet » désigne les informations de fond qui restent stables dans un projet et servent à de nombreuses tâches.

Par exemple :

- L'organisation des dossiers
- Les commandes courantes
- Les conventions de style du code
- Les fichiers à ne pas modifier à la légère
- La manière de vérifier le travail terminé

Les répéter oralement à chaque tâche est fatigant et favorise les oublis.

## Ce que cela désigne concrètement

Le contexte de projet explique « comment nous travaillons habituellement sur ce projet ».

Il ne décrit pas cette tâche précise. Il indique à Codex à l'avance :

- Comment le dépôt est organisé
- Quelles pratiques restent valables dans le temps
- Quelles limites il vaut mieux respecter
- Comment le travail est normalement vérifié

Codex n'a ainsi pas à deviner les habitudes de l'équipe à chaque nouvelle tâche.

## Pourquoi cela pose souvent problème

Au début, beaucoup de personnes mettent toutes leurs exigences dans la tâche en cours.

Cela peut fonctionner un temps, puis plusieurs problèmes apparaissent :

- Il faut tout réexpliquer à chaque fois
- Les consignes varient d'une tâche à l'autre
- Certaines règles importantes sont oubliées
- Dans une longue conversation, le contexte essentiel devient moins visible

Distinguez deux catégories :

- Placez les **règles durables** dans le contexte de projet
- Inscrivez les **exigences propres à cette tâche** dans le prompt actuel

## Comment le distinguer de la tâche actuelle

La distinction la plus simple comporte deux niveaux :

- **Contexte de projet :** la manière habituelle de travailler sur ce projet
- **Prompt de tâche :** ce que vous voulez faire cette fois-ci

Par exemple :

- « Placer tous les composants dans `src/components/` » → contexte de projet
- « Cette fois, ne modifier que le texte de la bannière d'accueil » → tâche actuelle

## Idées reçues

### 1. Faut-il écrire le plus possible dans le contexte de projet ?

Les informations utiles sont celles qui :

- Restent valables longtemps
- Servent dans plusieurs tâches
- Risquent de provoquer des erreurs si elles ne sont pas précisées

Y mettre des détails ponctuels transforme les instructions du projet en bruit.

### 2. Si j'explique clairement chaque tâche, ai-je besoin d'un contexte de projet ?

Cela fonctionne à court terme, mais devient pesant :

- Vous répétez les mêmes instructions
- Vous les formulez différemment selon les tâches
- Vous pensez à une règle cette fois, puis l'oubliez la fois suivante

### 3. Le contexte de projet ne va-t-il pas rendre les règles trop rigides ?

Non, si vous le traitez comme un ensemble de règles par défaut durables, et non comme des ordres immuables.

Les véritables exceptions doivent être indiquées dans la tâche en cours.

## Où le placer généralement

Placez les conventions stables dans les instructions du projet, par exemple `AGENTS.md` ou les instructions de projet proposées par le produit :

- Structure des dossiers
- Commandes courantes
- Style du code
- Interdictions

Dans le prompt de tâche, indiquez seulement **ce qui change cette fois-ci** ; remontez les informations répétées au niveau du projet. La configuration est détaillée dans le jalon ultérieur `06-customization`.

## Comment décider si une instruction appartient au contexte de projet

Envisagez de l'y placer si ces deux conditions sont réunies :

1. Elle servira probablement encore la prochaine fois
2. L'oublier provoque régulièrement des erreurs ou une perte de temps

## Quoi consigner en priorité

Commencez par :

- Les commandes courantes
- Les conventions de dossiers
- Le style du code
- Les zones à ne pas modifier
- Les méthodes de vérification par défaut

Toute instruction qui servira probablement à nouveau mérite d'être consignée dans le contexte de projet, plutôt que retapée à chaque tâche.
