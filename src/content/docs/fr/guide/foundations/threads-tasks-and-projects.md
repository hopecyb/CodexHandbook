---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique seulement les trois niveaux que sont le projet, la conversation et la tâche. Les liens internes et les notions ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Conversations, tâches et projets
description: Comprendre le lien entre conversations, tâches et espaces de travail.
locale: fr
source_locale: zh-CN
source_revision: c360452
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 60
---

Les termes varient légèrement selon les produits. Ce manuel les emploie ainsi :

- **Projet / espace de travail** : le dossier ou la racine du dépôt associé à Codex
- **Conversation / fil** : un échange continu dans lequel le contexte s'accumule
- **Tâche** : un travail ayant un objectif précis, qui peut comporter plusieurs appels d'outils

Ces notions sont souvent confondues. On se demande alors :

- Pourquoi Codex se souvient-il encore de ce que j'ai dit plus tôt ?
- Pourquoi continue-t-il dans l'ancienne direction alors que j'ai changé de question ?
- Pourquoi ouvrir une nouvelle conversation dans le même projet ?

Le projet détermine où Codex travaille, la conversation détermine quel échange il poursuit, et la tâche précise ce que vous lui demandez maintenant. Distinguer ces trois niveaux facilite bien des décisions.

![Illustration : vue en coupe d’une grande boîte projet contenant plusieurs dossiers de tâches, chacun avec quelques fils de conversation](/illustrations/threads-tasks-projects.webp)

## Distinguer les trois niveaux

- **Projet / espace de travail** : le dépôt ou le dossier dans lequel vous faites travailler Codex
- **Conversation / fil** : votre échange continu actuel avec lui
- **Tâche** : un objectif précis au sein de cet échange

Un projet peut comporter plusieurs conversations.
Une conversation peut contenir plusieurs tâches.
Les problèmes apparaissent souvent quand la tâche change, mais que la conversation conserve l'ancien contexte.

## Conseils pratiques

- **Ouvrez une nouvelle conversation** quand le sujet change, pour éviter que l'ancien contexte interfère.
- Pour une longue tâche, définissez des phases et des points de contrôle ; voir [Instructions pour les tâches longues](/fr/prompts/long-running-tasks/).
- Pour poursuivre d'une conversation à l'autre, rédigez un résumé de passation ; voir [Passation et reprise](/fr/guide/agent-work/handoff-and-resume/).

## Idées reçues

### 1. Faut-il toujours garder la même conversation dans un même dépôt ?

Pas nécessairement. Le dépôt peut rester le même alors que la tâche change. Quand le sujet change, l'ancien contexte peut devenir gênant.

### 2. Une nouvelle conversation fait-elle perdre tout le contexte ?

Ce n'est pas forcément un problème. Souvent, il est utile d'écarter le contexte superflu et de ne reprendre que ce qui compte pour la tâche actuelle.

### 3. Tâche et conversation signifient-elles la même chose ?

Non. La conversation est comme un contenant ; la tâche est un travail précis effectué à l'intérieur.

Le projet définit où Codex travaille, la conversation détermine l'historique qu'il conserve, et la tâche précise ce qu'il doit accomplir maintenant.
