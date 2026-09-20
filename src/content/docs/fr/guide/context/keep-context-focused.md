---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique uniquement comment recentrer le contexte ; ses notions, points de contrôle et liens internes ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: Garder le contexte ciblé
description: Délimiter la portée, ouvrir de nouveaux fils et transmettre le travail.
locale: fr
source_locale: zh-CN
source_revision: "5a55fa8"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 60
---

De nombreuses tâches deviennent confuses au fil des échanges parce que le contexte se disperse.

Garder le contexte ciblé consiste à traiter un objectif clair à la fois, sans mélanger anciens et nouveaux problèmes.

## Pourquoi la conversation devient confuse

« En dire plus par précaution » ne fonctionne pas toujours. On ne peut pas accumuler le contexte sans limite.

Si une même tâche rassemble :

- Le problème initial
- Un nouveau problème ajouté en passant
- Des idées apparues en cours de route
- Des détails déjà discutés mais désormais secondaires

L'essentiel finit par se brouiller.

## Pourquoi la tâche dévie

Les causes courantes sont :

- Plusieurs objectifs dans une même conversation
- Des contraintes énoncées plus tôt, puis oubliées même par vous
- Des problèmes résolus qui continuent à occuper l'attention
- Une nouvelle demande introduite sans redéfinir le périmètre

Vous avez l'impression d'apporter des précisions, tandis que Codex reçoit un objectif de plus en plus dispersé.

## Pratiques de base

- Un objectif par tâche
- Résumer régulièrement « terminé / à faire / contraintes toujours valables »
- Utiliser des points de contrôle pour les tâches longues
- Utiliser la [transmission et la reprise](/guide/agent-work/handoff-and-resume/) entre les sessions

## Signes qu'il faut recentrer

Recentrez la tâche lorsque :

- Vous devez remonter la conversation pour savoir où vous en êtes
- Vous discutez déjà d'un second problème dans la même tâche
- Les demandes « tant qu'on y est » se multiplient
- Codex cite d'anciennes conclusions devenues sans intérêt

## À quoi sert chaque pratique

### Un objectif par tâche

Ne demandez pas, dans une seule tâche, de :

- Corriger un bug
- Réécrire des textes
- Faire une refonte au passage
- Examiner encore un autre problème

Les séparer clarifie le périmètre et facilite la vérification.

### Résumer régulièrement « terminé / à faire / contraintes toujours valables »

Cela permet de recalibrer la tâche en cours de route. Pour une tâche longue, les deux parties gardent ainsi le même état en tête.

### Des points de contrôle pour les tâches longues

Un point de contrôle consiste à terminer une petite étape, vérifier la direction, puis passer à la suivante.

Par exemple : d'abord « localiser le problème », ensuite « proposer une solution », enfin « effectuer la modification ».

### Une transmission entre les sessions

Si la tâche ne peut pas être terminée en une session, laissez une courte transmission qui conserve son état essentiel.

## Un message de recentrage prêt à l'emploi

En cours de tâche, vous pouvez écrire :

```text
Recentrons-nous.
Terminé : A.
À faire : B.
Contraintes toujours valables : ne modifier que le frontend, pas l'API ; ne pas installer de nouvelles dépendances.
Prochaine étape uniquement : C.
```

## Erreurs fréquentes

### 1. Énoncer toutes les exigences d'un coup sans les hiérarchiser

Plus d'informations ne signifient pas forcément plus de clarté. Si la tâche principale et les demandes annexes sont mélangées, Codex risque davantage de perdre le fil.

### 2. Continuer dans l'ancienne conversation alors que la tâche a changé

Si la direction a changé, ouvrir un nouveau fil peut être plus clair que prolonger l'ancien à tout prix.

### 3. Faire trop de modifications sans vérifier les étapes

Plus on modifie de choses d'un coup, plus il est difficile de déterminer à quel moment le travail a dévié.

Garder le contexte ciblé ne signifie pas moins parler : cela signifie conserver les informations encore utiles et écarter celles qui ne le sont plus. Quand le contexte se brouille, l'exécution risque aussi de dévier.
