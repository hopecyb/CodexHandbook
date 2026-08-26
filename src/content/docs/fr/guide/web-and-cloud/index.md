---
title: Vue d'ensemble de Web et Cloud
description: Parcourez le flux de tâches distantes, de la connexion du dépôt et d'un environnement reproductible jusqu'à la révision et à la pull request.
locale: fr
source_locale: zh-CN
source_revision: 5861c62
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 13
---

Codex Cloud exécute les tâches de programmation dans des environnements Cloud isolés. Il convient aux tâches longues en arrière-plan, aux tentatives parallèles et aux travaux lancés depuis GitHub, GitLab (Beta), Linear ou Slack. Il ne contrôle pas votre ordinateur à distance et ne voit pas automatiquement les fichiers locaux qui n'ont pas été poussés.

## Cycle de vie d'une tâche Cloud

```text
Se connecter avec ChatGPT
  → connecter GitHub / GitLab
  → créer un environnement pour le dépôt
  → extraire la branche ou le commit choisi
  → exécuter le script de setup pour installer les dépendances
  → laisser l'Agent modifier et vérifier dans les limites de la politique réseau
  → examiner le résumé, les journaux et le diff
  → poursuivre dans la conversation ou créer une PR
  → fusionner après révision humaine et CI
```

Cloud apporte isolation, reproductibilité et parallélisme. Il ne supprime pas la révision.

## Local ou Cloud

| Choisir le local | Choisir Cloud |
|---|---|
| Le travail dépend de fichiers non commités ou de services locaux | Les entrées se trouvent dans un dépôt distant |
| Vous devez interagir avec un processus en temps réel | La tâche peut s'exécuter indépendamment en arrière-plan |
| La modification est petite et rapide | Le travail exige plusieurs étapes de build/test ou des tentatives parallèles |
| Un outil requis n'existe que sur cet ordinateur | Des scripts peuvent recréer l'environnement |

Lisez [Exécution locale et Cloud](/fr/guide/foundations/local-vs-cloud/) avant de choisir.

## Ordre d'apprentissage recommandé

1. [Connecter GitHub](/fr/guide/web-and-cloud/connect-github/) : n'autoriser que les dépôts requis.
2. [Environnements Cloud](/fr/guide/web-and-cloud/cloud-environments/) : fixer les outils, les versions et le setup.
3. [Secrets et variables d'environnement](/fr/guide/web-and-cloud/secrets-and-variables/) : séparer les Secrets réservés au setup des variables ordinaires.
4. [Accès à Internet](/fr/guide/web-and-cloud/internet-access/) : l'accès de l'Agent est désactivé par défaut ; n'ouvrir que les domaines et méthodes nécessaires.
5. [Déléguer et poursuivre](/fr/guide/web-and-cloud/delegate-and-follow-up/) : fournir l'objectif, les contraintes et les critères d'acceptation.
6. [Créer des pull requests](/fr/guide/web-and-cloud/create-pull-requests/) et [Révision de code](/fr/guide/web-and-cloud/code-review/) : transformer un résultat en livrable fusionnable.
7. [Dépannage Cloud](/fr/guide/web-and-cloud/troubleshooting/) : diagnostiquer les couches dépôt, setup, réseau et tâche.

Si vous partez de l'App de bureau ou de l'IDE, lisez aussi [Tâches locales et Cloud](/fr/guide/desktop-app/local-and-cloud-tasks/) ou [Tâches Cloud depuis l'IDE](/fr/guide/ide/cloud-task-workflow/).

## Premier exercice

Utilisez un dépôt de test sans identifiant de production. Demandez uniquement à Codex de corriger les liens de documentation et d'exécuter le vérificateur de liens. La réussite signifie que l'environnement démarre, que le diff ne contient que les fichiers attendus, que la sortie de la commande est visible et que le résultat peut devenir une PR. Une page affichant « terminé » ne constitue pas une preuve d'acceptation suffisante.

## Sources officielles

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Environnements Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Statut :** verified

**Produit concerné :** Cloud

**Dernière vérification :** 2026-08-26
