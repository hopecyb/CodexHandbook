---
title: Web et Cloud (aperçu)
description: Navigation d'entrée pour les Tâches Cloud, les environnements, les Secrets et la revue de PR.
sidebar:
  order: 13
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud convient pour exécuter des Tâches dans un **environnement distant standardisé**, connecter GitHub et produire des PR. Commencez par [local vs cloud](/guide/foundations/local-vs-cloud/) et consultez la [documentation officielle Cloud](https://developers.openai.com/codex).

Les Tâches ne s'exécutent pas sur votre ordinateur portable — elles continuent dans un environnement distant.

Scénarios typiques :

- Tâches longues
- Vous ne voulez pas surveiller votre machine
- Vous avez besoin de workflows repo distant et PR directement

Cloud n'est pas toujours la première chose que vous touchez, mais une fois que vous travaillez avec des repos distants, des PR et des Tâches longues asynchrones, vous l'utiliserez probablement.

## Navigation de la section

| Phase | Page |
|---|---|
| Connexion | [Connecter GitHub](/guide/web-and-cloud/connect-github/) |
| Environnement | [Environnements Cloud](/guide/web-and-cloud/cloud-environments/) |
| Identifiants | [Secrets et variables d'environnement](/guide/web-and-cloud/secrets-and-variables/) |
| Sortie | [Créer une Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Qualité | [Revue de code Cloud](/guide/web-and-cloud/code-review/) |
| Collaboration | [Déléguer et suivre](/guide/web-and-cloud/delegate-and-follow-up/) |
| Réseau | [Accès Internet](/guide/web-and-cloud/internet-access/) |
| Dépannage | [Dépannage Cloud](/guide/web-and-cloud/troubleshooting/) |
| Intégration | [Intégration GitHub](/guide/integrations/github/) |

Démarrez des Tâches Cloud depuis l'App de bureau : [Tâches locales et Cloud](/guide/desktop-app/local-and-cloud-tasks/). Déléguez depuis l'IDE : [Tâches Cloud IDE](/guide/ide/cloud-task-workflow/).

## Ordre de lecture suggéré

Lors de votre première prise de contact avec Cloud :

1. [Connecter GitHub](/guide/web-and-cloud/connect-github/)
2. [Secrets et variables d'environnement](/guide/web-and-cloud/secrets-and-variables/)
3. Flux PR, revue de code et collaboration

Comprendre comment cela se connecte aux repos, aux permissions et aux secrets vous évite des efforts avant de plonger dans l'automatisation.

Cloud est pour le travail sur des repos distants qui continue après que vous quittez votre machine — pas simplement « workflow local dans un navigateur ».

---

**Statut :** obsolète  
**Produits concernés :** Cloud  
**Note de revue :** Cette page de navigation a encore une valeur structurelle, mais elle dépend de capacités à forte évolution — connexion GitHub, Secrets, PR, suivi mobile, accès réseau ; marquer `outdated` jusqu'à que chaque sous-page soit alignée avec la documentation officielle Cloud actuelle.  
**Dernière vérification :** 2026-07-26
