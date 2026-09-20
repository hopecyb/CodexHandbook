---
title: Politique de version du handbook
description: Statut du contenu, dates de vérification et mises à jour continues.
locale: fr
source_locale: zh-CN
source_revision: a608dc3
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 8
---

## Mises à jour continues

Ce handbook n'est pas figé durablement sur une seule version de Codex. Le produit évolue : chaque page précise la portée des vérifications au moyen de son statut, de sa date de vérification et d'éléments concrets. La date seule n'est pas une note de fiabilité.

## Sommaire

- Pourquoi ce handbook ne peut pas supposer que rien ne changera
- Comment lire le statut et la date de vérification en haut d'une page
- Quelle source suivre en cas de conflit avec la documentation officielle

## Statuts des pages

| Statut | Signification |
|---|---|
| planned | Prévu, pas encore rédigé |
| draft | En cours de rédaction |
| review | Contenu terminé, en attente de révision |
| verified | Vérifié selon les éléments indiqués |
| outdated | À mettre à jour après une évolution du produit |
| archived | Conservé à titre historique, hors navigation principale |

## Comment lire le statut d'une page

- `planned` : pas encore rédigée
- `draft` : en cours, mais pas encore stable
- `review` : l'essentiel est rédigé, mais doit encore être revu
- `verified` : vérifiée selon les éléments indiqués
- `outdated` : peut avoir été juste auparavant ; attention aux informations périmées
- `archived` : conservée comme référence, hors du parcours principal actuel

## Vérifications et mises à jour du contenu

Le haut de chaque page affiche séparément son statut éditorial, sa méthode de vérification, sa date de vérification et les éléments applicables. `editorial` désigne une révision éditoriale, `source-checked` une vérification des sources et `run-tested` un exemple réellement exécuté dans l'environnement indiqué. Ces méthodes ne sont pas interchangeables. Les notes historiques restent séparées et ne deviennent pas automatiquement une preuve d'exécution actuelle.

[Mises à jour et corrections](/fr/guide/updates/) présente les changements précis et leurs effets. Au bas des pages dont le corps est en chinois, un brouillon de correction GitHub peut être ouvert avec les informations de la page courante. Il faut le vérifier et retirer toute donnée sensible avant l'envoi.

## Source officielle

Pour le comportement du produit, référez-vous à la [documentation Codex d'OpenAI](https://developers.openai.com/codex). Ce dépôt est un guide communautaire. En cas de conflit, la documentation officielle prévaut ; vous pouvez aussi ouvrir une issue.

## Malentendus fréquents

### 1. Une information inscrite dans le handbook ne reste pas forcément vraie indéfiniment

Ces sujets changent particulièrement vite :

- Méthodes d'installation
- Connexion et gestion des comptes
- Autorisations, modèles et options de configuration
- Comportement de Cloud et points d'entrée du produit

### 2. `review` ne signifie pas que la page est inutilisable

Le contenu principal existe, mais n'a pas atteint le niveau de confirmation le plus élevé. La page peut tout de même servir de référence.

### 3. En cas de conflit avec la documentation officielle, ne faites pas une moyenne des deux

Consultez le handbook pour comprendre les notions et les parcours ; consultez la documentation officielle pour le comportement actuel et la syntaxe exacte des paramètres.

## Comment juger la fiabilité d'une page

Si une page vous semble périmée, vérifiez trois points :

1. Si son statut éditorial en haut est `review`, `verified` ou `outdated`
2. Depuis combien de temps elle n'a pas été vérifiée
3. Si elle traite d'une notion ou d'un sujet vite changeant, comme l'installation, la configuration ou les autorisations

Pour le comportement, les paramètres et les règles en vigueur, la documentation officielle actuelle fait foi.
