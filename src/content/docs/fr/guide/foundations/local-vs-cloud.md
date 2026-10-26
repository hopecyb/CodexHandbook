---
title: Local vs cloud
description: Comparer les tâches locales et cloud et savoir quand choisir chaque mode.
locale: fr
source_locale: zh-CN
source_revision: "9569b3c"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 50
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Les articles actuels du centre d’aide OpenAI sur l’utilisation de Codex avec un forfait ChatGPT distinguent les flux locaux exécutés sur votre appareil des tâches cloud exécutées dans des environnements gérés par OpenAI. L’article sur ChatGPT Work et Codex confirme aussi que Work sur le Web et sur mobile s’exécute dans le cloud. Cette page résume les usages et compromis entre local et cloud, sans dépendre d’un forfait ou d’un point d’entrée précis.
  checkedAt: '2026-07-26'
---
« Local » et « cloud » peuvent sembler techniques. Simplement : local signifie travailler sur votre propre ordinateur ; cloud signifie travailler sur une machine distante.

Si vous voulez juste commencer à utiliser Codex, le **local** est généralement le choix initial le plus facile.

| | tâche locale | tâche Cloud |
|---|---|---|
| Où ça s'exécute | Votre machine / environnement local | Environnement cloud |
| Idéal pour | Itération rapide, fichiers locaux, débogage avec secrets locaux | Dépôts distants, longues tâches, environnements standardisés |
| À surveiller | Permissions locales et modifications accidentelles | Configuration d'environnement, injection de secrets, politique réseau |

![Illustration : à gauche, travail avec l’agent sur votre ordinateur ; à droite, des conteneurs cloud isolés en parallèle qui renvoient les résultats](/illustrations/local-vs-cloud.webp)

## À quoi ressemble le travail dans chaque environnement

Approximativement :

- **tâche locale** : vous êtes à votre ordinateur et Codex aide à modifier le projet actuel
- **tâche Cloud** : vous confiez le travail à une station distante et la laissez continuer là-bas

La différence n'est pas seulement l'emplacement. Elle inclut aussi :

- Quels fichiers sont accessibles
- S'il peut utiliser logiciels et environnements déjà sur votre machine
- Combien de temps une tâche peut durer
- Si l'équipe a besoin d'un environnement partagé

## Pourquoi beaucoup de débutants commencent en local

Le local est plus facile à comprendre et à inspecter.

- Vous savez que les fichiers sont sur votre ordinateur
- Plus facile d'ouvrir le projet, vérifier les résultats et corriger à la main
- Les chemins d'annulation sont plus clairs en cas de problème

Pour une première exécution, mener une tâche jusqu’à sa vérification compte plus que d'aller au cloud immédiatement.

## Idées reçues courantes

### 1. Le cloud n’est pas forcément plus avancé ni plus adapté au travail professionnel

Si le travail consiste à modifier un projet local, consulter des fichiers locaux et itérer rapidement, le local est plus direct.

### 2. Le local est-il moins « professionnel » ?

Beaucoup de développement réel se fait en local. Le choix cloud dépend du type de tâche, pas d’une impression de sophistication.

### 3. Comment choisir ?

Utilisez cette règle empirique :

- **Modifier un projet existant sur votre ordinateur** : choisissez local
- **Travail de longue durée, tâches en arrière-plan ou environnements de dépôt distant** : envisagez alors le cloud

## Si vous hésitez

Si vous ne les distinguez toujours pas : si cela peut se faire en local, ne vous précipitez pas vers le cloud.

Passez au cloud quand vous avez réellement besoin de :

- Très longue durée de tâche
- Un environnement standardisé partagé
- Dépôts ou ressources distants
- Ne pas occuper votre machine locale

Beaucoup de débutants commencent par **local + App de bureau**. Détails Cloud : [Aperçu Web et Cloud](/fr/guide/web-and-cloud/). Basculement dans l'App : [tâches locales et Cloud](/fr/guide/desktop-app/local-and-cloud-tasks/).

Le local convient mieux pour comprendre le flux et faire de petits changements. Le cloud convient mieux pour un travail plus long, plus standardisé et plus collaboratif à distance.
