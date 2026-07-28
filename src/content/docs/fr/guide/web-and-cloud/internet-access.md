---
title: Accès Internet
description: Politique sortante Cloud, installations de dépendances et risque d'exfiltration de données — ouvrir uniquement ce dont vous avez besoin.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les Tâches Cloud ont souvent besoin d'un **accès réseau sortant** : tirer des packages npm/PyPI, appeler des API, cloner des sous-modules. En parallèle, l'accès Internet est une surface à haut risque pour **l'exfiltration de données** — un Agent pourrait envoyer le contenu du repo ou des Secrets à des services externes.

## Ce qui est couvert

- Si les environnements Cloud peuvent atteindre Internet par défaut
- Quand autoriser l'accès et comment minimiser l'exposition
- Comment cela s'articule avec le Bac à sable local et la politique Secrets

## Limite de base

« Besoin de réseau » ne signifie pas « tout ouvrir ».

Beaucoup le voient en binaire :

- Soit pas de réseau du tout
- Soit accès complet pour la commodité

L'approche habituelle est de n'accorder que ce dont la Tâche a besoin — rien en plus.

## Deux couches de « réseau »

| Couche | Signification |
|---|---|
| Sortant environnement Cloud | Si la machine distante peut atteindre Internet public ou API internes |
| Réseau outils Agent | Recherche web en session, curl, etc. (varie selon le client) |

Cette page se concentre sur les **environnements Cloud** ; concepts généraux : [Bac à sable et réseau](/guide/foundations/sandbox-and-network/).

## Pourquoi le local qui fonctionne n'implique pas que Cloud fonctionne

Localement vous pouvez réussir parce que :

- Vous êtes déjà connecté à un service sur votre machine
- Vous avez `.npmrc`, clés SSH ou config proxy en local
- Vous êtes sur le VPN de l'entreprise

Cloud n'hérite pas de cela par défaut. « Fonctionne avec `npm install` en local » n'implique pas que Cloud peut faire pareil.

## Scénarios typiques nécessitant un accès sortant

- Installer des dépendances : `npm install`, `pip install`, `go mod download`
- Tirer depuis des registres privés (nécessite [Secrets](/guide/web-and-cloud/secrets-and-variables/))
- Appeler des API tierces (paiements, cartes, passerelles LLM, etc.)
- Cloner des sous-modules ou télécharger des assets de build

## Principe de décision

Si une action réseau n'est pas requise pour cette Tâche, ne l'ouvrez pas en premier.

Exemples :

- Registres de packages pour installations : généralement requis
- Sites web aléatoires ou téléchargements supplémentaires : généralement non

## Stratégie recommandée

### Par défaut strict, ouvert à la demande

1. Confirmer la politique réseau actuelle dans [Environnements Cloud](/guide/web-and-cloud/cloud-environments/)
2. Lister les **domaines requis** (gestionnaires de packages, API entreprise) — éviter « ouvrir tout Internet »
3. Dans `AGENTS.md`, documenter les URLs autorisées et interdire de mettre des clés dans les Prompts
4. Valider avec une Tâche de test : dépendances installées ; sites non liés bloqués (si politique fine existe)

### Séparer le travail avec les Secrets

| Contenu | Où |
|---|---|
| Clés API, tokens | Secrets Cloud — pas dans le repo |
| URLs de base API autorisées | Doc ou noms de variables d'env (pas les valeurs) |
| URLs proxy / miroir | Config standard d'équipe |

## Idées reçues courantes

### 1. L'accès réseau n'est que de la commodité, pas de la sécurité

Une fois en ligne, c'est simultanément :

- Un problème de téléchargement de dépendances
- Un problème d'utilisation des identifiants
- Un problème d'exfiltration de données

### 2. Sûr tant que les Secrets ne sont pas dans le Prompt

Si l'environnement peut lire les Secrets et envoyer les résultats à l'extérieur, le risque reste.

### 3. Recherche web égale sortant Cloud

L'un est le réseau de l'environnement distant ; l'autre est le réseau des outils en session — ne les mélangez pas en dépannage.

### Mesures contre l'exfiltration de données

- Ne pas mettre les chaînes de connexion DB production dans les descriptions de Tâche
- Surveiller les tentatives d'envoyer `.env` ou fichiers de clés à l'extérieur
- Pour les repos non fiables au premier run Cloud, essayer **pas de sortant ou Bac à sable lecture seule**

## Alignement avec le développement local

`curl` local qui fonctionne ne signifie pas que Cloud peut — causes courantes de « rouge dans Cloud » :

| Symptôme | Cause possible |
|---|---|
| Échec installation dépendances | Sortant bloqué ou registre nécessite auth |
| Sous-module ne clone pas | Clé SSH non injectée via Secrets |
| Timeout API interne | Cloud pas sur le VPN entreprise |

Mesures : HTTPS + token, miroirs accessibles, ou documenter que Cloud ne peut atteindre les ressources internes.

## Erreurs courantes

- Ouverture globale du sortant pour la commodité, puis exécution de Tâches non bornées sur des repos avec Secrets
- Supposer que Cloud partage le `.npmrc` de votre ordinateur portable (non poussé ou pas dans les Secrets)
- Confondre « besoin de réseau » avec « besoin de l'outil recherche web »
- Découvrir seulement l'état de connexion local manquant quand l'installation échoue

## Checklist d'acceptation

- [ ] Domaines/services sortants requis pour les Tâches Cloud sur ce repo listés
- [ ] Secrets configurés et non commités dans Git
- [ ] Installation complète + test passé une fois sur une branche de test
- [ ] L'équipe sait quelles données ne doivent jamais apparaître dans les Prompts en réseau

## Références
- Documentation réseau et sécurité OpenAI Codex Cloud
---

**Statut :** obsolète  
**Produits concernés :** Cloud  
**Note de revue :** Cette page couvre le comportement sortant Cloud par défaut, la politique de domaines et les contrôles réseau fins — tout très dépendant du produit et de l'org ; sans documentation officielle forte de politique réseau actuelle, elle ne doit pas être marquée `verified`.  
**Dernière vérification :** 2026-07-26
