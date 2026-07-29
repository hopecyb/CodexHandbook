---
title: Local vs cloud
description: Comparer les Tâches locales et Cloud et quand utiliser chacune.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

« Local » et « cloud » peuvent sembler techniques. Simplement : local signifie travailler sur votre propre ordinateur ; cloud signifie travailler sur une machine distante.

Si vous voulez juste commencer à utiliser Codex, le **local** est généralement le choix initial le plus facile.

| | Tâche locale | Tâche Cloud |
|---|---|---|
| Où ça s'exécute | Votre machine / environnement local | Environnement cloud |
| Idéal pour | Itération rapide, fichiers locaux, débogage avec secrets locaux | Dépôts distants, longues Tâches, environnements standardisés |
| À surveiller | Permissions locales et modifications accidentelles | Configuration d'environnement, injection de secrets, politique réseau |

## Comment elles se ressentent

Approximativement :

- **Tâche locale** : vous êtes à votre ordinateur et Codex aide à modifier le projet actuel
- **Tâche Cloud** : vous confiez le travail à une station distante et la laissez continuer là-bas

La différence n'est pas seulement l'emplacement. Elle inclut aussi :

- Quels fichiers sont accessibles
- S'il peut utiliser logiciels et environnements déjà sur votre machine
- Combien de temps une Tâche peut durer
- Si l'équipe a besoin d'un environnement partagé

## Pourquoi beaucoup de débutants commencent en local

Le local est plus facile à comprendre et à inspecter.

- Vous savez que les fichiers sont sur votre ordinateur
- Plus facile d'ouvrir le projet, vérifier les résultats et corriger à la main
- Les chemins d'annulation sont plus clairs en cas de problème

Pour une première exécution, compléter la boucle de Tâche compte plus que d'aller au cloud immédiatement.

## Idées reçues courantes

### 1. Cloud n'est pas automatiquement plus avancé ou plus « formel »

Si le travail consiste à modifier un projet local, consulter des fichiers locaux et itérer rapidement, le local est plus direct.

### 2. Le local est-il moins « professionnel » ?

Beaucoup de développement réel se fait en local. Le choix cloud dépend du type de Tâche, pas du sentiment d'avancement.

### 3. Comment choisir ?

Utilisez cette règle empirique :

- **Modifier un projet existant sur votre ordinateur** : choisissez local
- **Travail de longue durée, tâches en arrière-plan ou environnements de dépôt distant** : envisagez alors cloud

## Si vous hésitez

Si vous ne les distinguez toujours pas : si cela peut se faire en local, ne vous précipitez pas vers le cloud.

Passez à Cloud quand vous avez réellement besoin de :

- Très longue durée de Tâche
- Un environnement standardisé partagé
- Dépôts ou ressources distants
- Ne pas occuper votre machine locale

Beaucoup de débutants commencent par **local + App de bureau**. Détails Cloud : [Aperçu Web et Cloud](/guide/web-and-cloud/). Basculement dans l'App : [Tâches locales et Cloud](/guide/desktop-app/local-and-cloud-tasks/).

Le local convient mieux pour comprendre le flux et faire de petits changements. Cloud convient mieux pour un travail plus long, plus standardisé et plus collaboratif à distance.

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26
