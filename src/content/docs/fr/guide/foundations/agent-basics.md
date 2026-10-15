---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique uniquement la différence entre collaborer avec un agent et discuter normalement ; les liens internes, notions et analogies ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: Les bases des agents
description: Comment un agent utilise des outils et progresse vers un objectif.
locale: fr
source_locale: zh-CN
source_revision: 14ab120
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Un **agent** continue d'agir pour atteindre un objectif : comprendre l'objectif → choisir un outil → observer le résultat → ajuster l'étape suivante, jusqu'à ce que le travail soit terminé ou qu'il ait besoin de vous.

Une IA conversationnelle ressemble plutôt à quelqu'un qui répond à des questions. Un agent ressemble davantage à une personne à qui l'on confie une tâche et qui avance étape par étape.

![Illustration : à gauche, un simple échange question-réponse ; à droite, un agent en boucle qui lit des fichiers, utilise des outils, vérifie et corrige](/illustrations/agent-basics.webp)

## Agent et conversation ordinaire

| | Conversation ordinaire | Agent |
|---|---|---|
| Résultat | Principalement des conseils écrits | Peut lire et écrire des fichiers, exécuter des commandes et modifier un dépôt |
| Déroulement | Une réponse | Plusieurs appels d'outils |
| Risque | Conseils trompeurs | Peut aussi abîmer des fichiers ou lancer des commandes dangereuses |
| Votre rôle | Lire la réponse | Fixer des limites, approuver des actions et vérifier le résultat |

## Une analogie simple

On peut les comparer ainsi :

- **Conversation ordinaire :** demander à un ami « Comment résoudre ce problème ? »
- **Agent :** demander à un collègue de faire une première version, puis l'examiner ensemble

En mode agent, faites davantage attention à :

- Ce à quoi il peut accéder
- La nécessité éventuelle de proposer un plan d'abord
- La façon dont vous vérifierez son travail

## Pourquoi cette distinction compte

De nombreuses erreurs viennent d'une même idée :

> Croire qu'il « se contente de parler »

Dès qu'il lit ou modifie des fichiers et exécute des commandes, il participe au travail réel au lieu de donner seulement des conseils dans une fenêtre de chat.

Si vous débutez, lisez aussi :

1. [Autorisations et approbations](/fr/guide/foundations/permissions-and-approvals/)
2. [Exécuter sa première tâche](/fr/guide/getting-started/run-your-first-task/)
3. [Vérifier le résultat](/fr/guide/getting-started/review-the-result/)

## Notions liées

- Skills, plugins et MCP étendent « ce qu'il sait faire » et « à quoi il peut se connecter » : voir [Extensions et automatisation](/fr/skills/) et la [carte des capacités](/fr/guide/start-here/codex-capability-map/)
- Approbation humaine : voir [Autorisations et approbations](/fr/guide/foundations/permissions-and-approvals/)

Un agent peut enchaîner plusieurs étapes pour atteindre un objectif ; il fait plus que répondre par un paragraphe.
