---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique uniquement les bases de la génération à partir du contexte par les modèles de langage ; ses liens internes et notions ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer.
  checkedAt: '2026-07-26'
title: IA et modèles de langage
description: Comprendre comment les modèles de langage génèrent des réponses à partir du contexte.
locale: fr
source_locale: zh-CN
source_revision: "ccdac83"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: '2026-10-26'
---
Un modèle de langage utilise les textes, fichiers et résultats d'outils que vous lui fournissez pour **prédire la sortie suivante la plus plausible**. Il sait compléter, organiser, rédiger et poursuivre un travail à partir du contexte. Il ne connaît pas spontanément les informations que vous ne lui avez pas données et ne garantit pas que chaque résultat soit exact.

Un modèle de langage ne lit pas vos pensées et ne comprend pas automatiquement votre projet. Il ne peut produire qu'un résultat qui « semble plausible » à partir de ce que vous lui donnez.

Cela explique pourquoi :

- Sans contexte essentiel, il risque de deviner
- Avec des informations contradictoires, il risque de dévier
- Il peut aider à rédiger, organiser et analyser, mais vous ne pouvez pas lui déléguer entièrement la responsabilité de l'exactitude

## Ce qu'il fait

Voyez le modèle de langage comme un système particulièrement doué pour poursuivre un échange, organiser des informations et compléter ce qui manque.

Il voit :

- Votre description de la tâche
- Les fichiers fournis
- Les résultats renvoyés par les outils

Il s'appuie ensuite sur ces informations pour produire ce qu'il juge être la prochaine étape la plus appropriée.

Il raisonne à partir du contexte actuel ; il ne connaît pas la réponse de manière indépendante.

## Ce que cela implique pour vous

- **La qualité des entrées fixe la limite :** un objectif flou peut faire dévier le résultat
- **Le contexte est limité :** un long historique peut être compressé ou tronqué ; voir [Tokens, contexte et compression](/fr/guide/foundations/tokens-context-and-compaction/)
- **La vérification est indispensable :** surtout pour les chiffres, le droit, la sécurité et les contenus publiés à l'extérieur

## Idées reçues

### 1. Il est assez intelligent pour connaître le contexte que je n'ai pas indiqué

En général, non.

Il peut deviner, mais rien ne garantit qu'il devinera juste.
Les informations que vous connaissez sans les lui avoir communiquées sont souvent à l'origine des erreurs.

### 2. S'il peut écrire du code ou de la documentation, il a forcément compris

Pas nécessairement.

Il génère souvent quelque chose de convaincant. Une apparence correcte ne garantit pas l'adéquation à votre projet, environnement ou objectif.

### 3. Avec un modèle de langage, je n'ai plus besoin de juger

Vous devez toujours déterminer :

- S'il a compris la tâche
- S'il est en train de deviner
- Si ses conclusions doivent être vérifiées

## La différence avec un moteur de recherche

Un moteur de recherche renvoie surtout des pages existantes. Codex ressemble davantage à un système qui **utilise des outils et produit des modifications réalisables** selon votre objectif. Dans les deux cas, vous devez évaluer la fiabilité.

Les modèles de langage sont surtout utiles lorsqu'ils disposent d'assez de contexte pour poursuivre rapidement votre objectif.
