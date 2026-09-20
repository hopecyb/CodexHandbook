---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page traite uniquement des risques et des remèdes après la compaction d'une longue conversation. Concepts, exemples et liens internes ont été revus ; le contenu ne dépend pas de détails produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: "Compaction du contexte"
description: "Ce que la compaction d'une longue conversation conserve et risque de perdre."
locale: fr
source_locale: zh-CN
source_revision: "c6c9d03"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 50
---

La « compaction du contexte » signifie que, lorsqu'une conversation devient trop longue, le système conserve une version raccourcie des échanges précédents pour permettre à la tâche de continuer. En contrepartie, **des détails peuvent se perdre**.

## Pourquoi cela affecte le résultat

Les débutants pensent souvent : « Il devrait se souvenir intégralement de tout ce que j'ai dit. »

Ce n'est pas toujours le cas. Après la compaction d'une longue tâche, les détails les plus exposés sont :

- Les petites restrictions précises
- Une exception temporaire mais importante
- La liste des fichiers autorisés que vous aviez donnée
- Les cas limites des critères d'acceptation

La compaction n'est pas une erreur ; c'est un mécanisme auquel vous devez contribuer.

## Que rappeler après la compaction

La compaction peut perdre des détails. **Répétez** les contraintes essentielles, les critères d'acceptation et la liste des fichiers autorisés, ou placez-les dans les instructions du projet.

Rappelez en priorité :

- Quels fichiers peuvent être modifiés
- Ce qu'il ne faut absolument pas toucher
- Ce qui compte comme terminé
- Ce qui a déjà été fait

## Idées reçues

### 1. Compaction signifie-t-elle oubli total ?

Plus précisément, l'essentiel de la tâche peut rester, mais aucun détail secondaire n'est garanti intact.

### 2. Faut-il tout redire depuis le début à chaque fois ?

Non. Rappeler les informations les plus importantes, les plus faciles à perdre et les plus difficiles à corriger suffit généralement.

### 3. Quelles informations ne faut-il pas supposer conservées ?

En général :

- Le périmètre des fichiers
- Les interdictions
- Les critères d'acceptation
- Les décisions importantes déjà confirmées

## Comment rattraper une compaction

Si la tâche est devenue longue, rédigez vous-même un court résumé intermédiaire, par exemple :

```text
Contraintes actuellement valables :
1. Ne modifier que le répertoire docs
2. Ne pas changer la structure des routes
3. Terminé signifie que le texte de l'accueil est à jour et que le build réussit
```

C'est plus fiable que de dépendre de toute la longue conversation.

Pour le concept de base, voir [Tokens, contexte et compaction](/fr/guide/foundations/tokens-context-and-compaction/).

Dans une longue tâche, n'énoncez pas les limites essentielles une seule fois. Après compaction, prenez l'initiative de rappeler les règles importantes.
