---
title: Environnements Cloud
description: Ce que les environnements d'exécution distants Codex Cloud incluent, leur cycle de vie et l'essentiel de configuration d'équipe.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **environnement Cloud** est la machine worker que Codex utilise lors de l'exécution de Tâches à distance.

Il affecte directement les résultats — incluant l'OS, les versions de langage, la chaîne d'outils, la politique réseau et quelle branche de repository est checkoutée. Cette page répond principalement à une question courante :

> **Pourquoi ça fonctionne en local mais échoue dans Cloud ?**

## Ce qui est couvert

- Comment les environnements Cloud diffèrent de votre machine de dev locale
- Comment les environnements se lient aux repos et branches GitHub
- Comment les équipes maintiennent une configuration Cloud reproductible

## Commencez par ces trois points

Gardez cela en tête d'abord :

- Cloud ne « lit pas tout sur votre ordinateur actuel » — il ne voit que ce qui existe dans l'environnement distant
- Les Tâches Cloud font encore face aux contraintes du monde réel : dépendances, incompatibilités de version et si le réseau peut atteindre ce dont elles ont besoin
- Tout ce que vous n'avez pas commité ou poussé en local est invisible pour Cloud par défaut

Considérez Cloud comme passer à une autre machine pour faire le travail.

## Concepts fondamentaux

```text
Repo GitHub (une branche)
        ↓ clone / checkout
Instance environnement Cloud (container ou VM — dépend du produit)
        ↓
Agent exécute la Tâche : installer deps, changer code, tester, pousser
```

Utiliser avec [Connecter GitHub](/guide/web-and-cloud/connect-github/) ; l'environnement **ne peut pas** accéder aux commits non poussés sur votre ordinateur portable.

## Local vs Cloud

- **Tâches locales** : Codex travaille autour de votre machine actuelle, devant vous
- **Tâches Cloud** : Codex s'exécute sur une machine distante que vous déléguez

Cet écart est une source courante de confusion lors de votre première utilisation de Cloud :

- « Pourquoi ne voit-il pas le fichier que j'ai changé en local ? »
- « Pourquoi n'a-t-il pas cet outil installé globalement sur ma machine ? »
- « Pourquoi ne peut-il pas atteindre la base de données que j'exécute en local ? »

La plupart du temps, **cette machine distante n'a simplement pas ces choses** — le problème est l'environnement lui-même.

## Ce qu'un environnement inclut (conceptuel)

| Composant | Description |
|---|---|
| Image de base | OS, outils de build courants |
| Runtime | Node, Python, Go, etc. (dépend de l'image et la Tâche) |
| Répertoire de travail | Chemin vers le repo cloné |
| Politique réseau | Si l'accès sortant est autorisé et quels domaines |
| Injection d'identifiants | [Secrets et variables](/guide/web-and-cloud/secrets-and-variables/) |

Pour les listes d'images concrètes et la personnalisation, voir la [documentation officielle Cloud](https://developers.openai.com/codex).

## Idées reçues courantes

### 1. Supposer que Cloud hérite automatiquement de votre environnement local

Il ne le fait pas.

Node, Python, Homebrew, Chrome ou clients de base de données sur votre machine n'apparaissent pas dans Cloud juste parce qu'ils existent en local.

### 2. Supposer que pousser le repo signifie que tout est prêt

Le code du repository n'est que le point de départ. Le succès d'une Tâche dépend aussi de :

- Comment les dépendances sont installées
- Quelles commandes démarrent ou testent le projet
- Quels Secrets sont requis
- Si la politique réseau permet l'accès aux ressources externes

### 3. Supposer qu'un échec Cloud signifie que Codex ne peut pas faire la Tâche

Beaucoup d'échecs Cloud sont des environnements mal configurés, pas une incapacité à compléter le travail.

Un ordre de dépannage sensé :

1. Le repo et la branche sont corrects ?
2. Les dépendances et versions de runtime sont correctes ?
3. Les Secrets et l'accès réseau sont disponibles ?
4. Le Prompt de Tâche est suffisamment clair ?

## Flux de configuration recommandé

1. Compléter votre première Tâche Cloud dans un **repo de test** et enregistrer les commandes d'installation des dépendances
2. Mettre les étapes reproductibles dans la doc du repo (`README`, `AGENTS.md`, ou fichiers de config d'environnement officiels)
3. Configurer les [Secrets](/guide/web-and-cloud/secrets-and-variables/) (registre privé, clés API)
4. Confirmer que la politique [accès Internet](/guide/web-and-cloud/internet-access/) respecte les exigences de sécurité
5. Valider la boucle issue → PR avec le même modèle d'environnement

## Quand Cloud est un bon choix

Utilisez ce cadre :

- Changer un projet sur votre machine et vouloir un retour immédiat : commencer en local
- Tâches longues, environnement d'équipe partagé, ou workflows GitHub distants : utiliser Cloud

Si votre workflow local n'est pas encore fluide, ne vous précipitez pas pour transformer chaque problème en « problème de configuration Cloud ».

## Alignement avec le local

Éviter « vert en local, rouge dans Cloud » :

| Pratique | Pourquoi |
|---|---|
| Fixer les versions de dépendances (lockfile) | Installations reproductibles |
| Documenter install et commandes de test dans `AGENTS.md` | Agent ne devine pas |
| Garder les versions Node/Python proches entre CI et Cloud | Moins de dérive de version |
| Utiliser Git LFS ou téléchargements au build pour gros fichiers | Taille de clone contrôlée |

## Cycle de vie

Une Tâche Cloud typique :

1. **Créer ou réutiliser** une instance d'environnement
2. **Préparer** : cloner, checkout branche, installer dépendances
3. **Exécuter** : Agent change le code, exécute des commandes
4. **Sortie** : push branche, PR, artefacts de log
5. **Détruire ou recycler** (politique varie selon le produit)

Pour les Tâches longues, suivre via [notifications App de bureau](/guide/desktop-app/notifications/) ou mobile.

## Erreurs courantes

- Supposer que Cloud pré-installe toute la chaîne d'outils de votre monorepo privé
- Dépendre de services `localhost` (base de données, API mock) sans les fournir dans l'environnement
- Exécuter des Tâches non bornées sur un repo production dès le premier essai
- Interpréter un problème d'environnement comme un problème de capacité du modèle

## Limites de sécurité

- Traiter l'environnement comme **semi-fiable** : exiger encore revue de code et protection de branche
- Injecter les chaînes de connexion DB production uniquement via Secrets, jamais dans les Prompts
- Nettoyer périodiquement les modèles d'environnement et Secrets non utilisés

## Références
- OpenAI Codex Cloud environments
---

**Statut :** obsolète  
**Produits concernés :** Cloud  
**Note de revue :** Cette page couvre la forme d'instance d'environnement, le cycle de vie, les modèles et la liaison de branche GitHub — détails que nous ne pouvons pas entièrement confirmer contre une documentation officielle Cloud actuelle forte ; elle ne doit pas être marquée `verified` jusqu'à disponibilité de docs formelles d'environnement Cloud.  
**Dernière vérification :** 2026-07-26
