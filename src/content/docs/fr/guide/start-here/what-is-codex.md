---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique uniquement ce qu'est Codex, les tâches adaptées et la manière de collaborer avec lui ; ses liens internes et notions ont été vérifiés, sans conserver de valeurs par défaut détaillées susceptibles de changer."
  checkedAt: "2026-07-26"
title: Qu'est-ce que Codex ?
description: Une présentation simple de ce que Codex peut faire, de ses limites et de ses points d'accès.
locale: fr
source_locale: zh-CN
source_revision: "0f376b6"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 2
reviewed_at: 2026-10-26
---

Codex est l'**agent de programmation et de travail IA d'OpenAI**. Donnez-lui un objectif : il peut utiliser les fichiers du projet, des outils et vos approbations pour lire et modifier du contenu, exécuter des commandes et produire un résultat. Il vous présente ensuite le processus et les changements pour vérification.

Il ressemble à un collègue numérique capable d'utiliser des outils. Vous définissez l'objectif, les limites et les critères d'acceptation ; il recherche, modifie des fichiers et exécute les étapes. La décision finale vous revient.

Pour la documentation officielle du produit, consultez [OpenAI Codex](https://developers.openai.com/codex). Ce manuel est un guide communautaire open source pour apprendre et pratiquer, pas un remplacement de la documentation officielle.

![Illustration : vous remettez une fiche de tâche à Codex, qui avance entre ordinateur, documents et terminal en cochant chaque étape](/illustrations/what-is-codex.webp)

## Quelle différence avec une conversation IA ordinaire ?

Beaucoup voient d'abord Codex comme « une IA conversationnelle plus puissante ». La principale différence est sa capacité à agir.

| Outil habituel | Une façon de le comprendre |
|---|---|
| Robot conversationnel ordinaire | Donne des conseils, explique des notions, rédige du texte |
| Codex | En plus de répondre, peut **lire et modifier des fichiers, exécuter des commandes et créer des livrables** |

Les outils conversationnels répondent surtout. Codex peut agir directement dans les limites que vous autorisez.

## Quelles tâches lui conviennent ?

Si une tâche demande plus qu'une discussion — lire des documents, modifier quelque chose, exécuter des étapes ou produire un résultat — Codex peut vous aider.

Si vous souhaitez seulement une explication, une idée courte ou un conseil général, une IA conversationnelle classique peut suffire.

## À quoi peut-il servir ?

Même si vous ne programmez pas, pensez à ces exemples :

- **Lire et organiser des informations :** résumer documents, comptes rendus, captures d'écran et tableaux
- **Rédiger et réviser :** améliorer un article, compléter un sommaire, modifier une documentation
- **Créer de petits projets :** construire une page, changer une configuration, ajouter un modèle
- **Chercher et corriger un problème :** localiser une erreur et déterminer quoi examiner ensuite
- **Automatiser un travail répétitif :** lui confier une première exécution d'un processus établi

Les développeurs peuvent l'intégrer à leur travail ; les autres peuvent l'utiliser comme assistant capable d'exécuter des étapes.

## Que peut-il faire ?

- **Comprendre :** résumer les informations de dépôts, documents, tableaux et captures
- **Créer et modifier :** rédiger, changer du code, générer des pages et des configurations
- **Exécuter :** lancer des commandes, chercher et naviguer avec votre autorisation
- **Collaborer :** poursuivre des tâches entre App, CLI, IDE et Cloud
- **Étendre :** relier des processus répétitifs et des systèmes externes avec Skills, Plugins, MCP et Hooks (les chapitres avancés seront complétés ensuite)

## Que ne peut-il pas faire ? (Important)

- Remplacer votre responsabilité finale sur les faits, la sécurité et les décisions métier
- Garantir un résultat parfait du premier coup ; le résultat doit être vérifiable
- Contourner sans autorisation le bac à sable, le réseau ou les règles de l'organisation
- Servir de « chaîne de publication automatique sans vérification »

## Une règle de jugement simple

Utilisez Codex comme assistant sans lui céder la responsabilité.

Laissez-le rechercher ou modifier, puis confirmez :

- A-t-il modifié le bon endroit ?
- A-t-il mal compris votre objectif ?
- Les faits qu'il donne sont-ils fiables ?
- Ses changements peuvent-ils avoir des effets secondaires ?

## Un déroulement courant

Le processus ressemble souvent à ceci :

1. Vous énoncez un objectif.
2. Codex répond ou propose un plan.
3. S'il doit modifier des fichiers ou exécuter des commandes, il peut demander votre approbation.
4. Une fois terminé, il indique ce qui a changé.
5. Vous vérifiez que le résultat correspond à vos attentes.

Un exemple complet figure dans [Exécuter sa première tâche](/fr/guide/getting-started/run-your-first-task/).

## Principaux points d'accès

| Point d'accès | Adapté à |
|---|---|
| Application de bureau | Choix de départ pour les débutants ; projets, tâches et revue des différences en mode visuel |
| CLI | Utilisateurs du terminal, scripts et automatisation |
| Extension IDE | Travail sur les fichiers ouverts et les sélections dans l'éditeur |
| Web / Cloud | Dépôts connectés, environnements cloud et longues tâches |
| Mobile et accès distant | Surveillance, approbations et suivi léger |

Consultez le [comparatif des fonctions](/fr/guide/reference/feature-comparison/) et la [carte des capacités](/fr/guide/start-here/) pour relier les notions.

## Pour continuer

Si vous ne retenez que trois points :

1. Codex ne se limite pas à discuter ; il peut agir après autorisation.
2. Définissez l'objectif, les limites et les critères de fin d'une tâche.
3. Vérifiez chaque résultat au lieu de lui faire confiance aveuglément.

Continuez avec :

1. [Choisir un client Codex](/fr/guide/choose-your-client/)
2. [Terminologie pour débutants](/fr/guide/start-here/terminology-for-beginners/)
3. [Exécuter sa première tâche](/fr/guide/getting-started/run-your-first-task/)
