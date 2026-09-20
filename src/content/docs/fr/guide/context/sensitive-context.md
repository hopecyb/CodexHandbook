---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique uniquement la minimisation et la suppression des données sensibles ; ses notions, exemples de risques et conseils ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: Contexte sensible
description: Secrets, vie privée et documents à ne pas partager.
locale: fr
source_locale: zh-CN
source_revision: "a83db07"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

Traitez dès le départ comme sensible toute information que vous ne voudriez pas voir consultée, copiée, transmise ou conservée durablement dans l'historique d'une tâche.

## Pourquoi se poser la question avant

De nombreux problèmes de sécurité surviennent non parce qu'une personne a voulu enfreindre une règle, mais parce qu'elle pensait d'abord à « résoudre le problème ».

Par exemple :

- Coller un fichier `.env` entier pour déboguer
- Coller des données client brutes pour aider Codex à comprendre
- Coller tel quel un message d'erreur contenant un vrai jeton, par commodité

Ces gestes paraissent pratiques sur le moment, mais peuvent être difficiles à réparer ensuite.

Ne fournissez pas à Codex, pour un exercice ou en production :

- Des clés API, mots de passe ou cookies de session
- Des données client ou numéros d'identité non anonymisés
- Des documents internes non publiés dont un contrat interdit la diffusion externe

Utilisez des espaces réservés comme `YOUR_API_KEY`. Si un secret a été divulgué, renouvelez-le selon la procédure de votre organisation.

## Comment décider en cas de doute

Si vous hésitez sur le caractère sensible d'un contenu, posez-vous deux questions :

1. Y aurait-il un risque si une personne extérieure le voyait ?
2. Serais-je mal à l'aise s'il restait longtemps dans l'historique de la tâche ?

Si la réponse à l'une des deux est oui, traitez-le comme sensible.

## Ne comptez pas sur « ça devrait aller »

Lorsqu'on utilise pour la première fois un outil d'IA, on peut se dire :

- « Je ne le colle que temporairement »
- « Codex va juste y jeter un œil »
- « Ce fichier ne sera pas vraiment envoyé ailleurs »

Dès qu'une information entre dans le déroulement de la tâche, elle doit être traitée comme sensible. Les précautions se prennent de préférence avant.

## Les contenus les plus faciles à oublier

Au-delà des mots de passe et des clés, sont souvent sensibles :

- Les listes de clients
- Les numéros de téléphone, adresses e-mail et numéros d'identité
- Les captures internes et projets non publiés
- Les fichiers de configuration contenant de vraies adresses de production ou des jetons d'accès

Une information sensible ne se résume donc pas à une clé `sk-...`.

## Jusqu'où anonymiser ?

Il ne faut pas forcément tout supprimer. Conservez seulement **le minimum nécessaire pour résoudre le problème**.

Vous pouvez :

- Préserver la structure
- Remplacer les valeurs réelles
- Retirer les éléments d'identification
- Supprimer les champs sans rapport avec le problème actuel

Vous pouvez conserver :

- Les noms des champs
- Les types d'erreurs
- L'ordre des appels

Mais remplacez :

- Les vraies clés
- Les vraies adresses e-mail
- Les vrais numéros de téléphone
- Les vrais noms de clients

## Si vous devez fournir des informations, faites-le plus prudemment

Quelques pratiques plus sûres :

- Remplacer les clés par de fausses valeurs ou des espaces réservés
- Anonymiser les données de vrais utilisateurs
- Ne garder que les champs nécessaires au diagnostic
- Décrire les symptômes plutôt que coller tout le contenu sensible brut, quand c'est possible

Par exemple :

```text
Remplace la vraie clé API par YOUR_API_KEY et la vraie adresse e-mail par user@example.com.
```

## Si vous les avez déjà partagées par erreur

Agissez selon le niveau de risque :

1. Empêchez toute diffusion supplémentaire.
2. Renouvelez immédiatement les clés, mots de passe ou jetons concernés.
3. Signalez l'incident et prenez les mesures prévues par votre organisation.

Pour résoudre un problème, ne fournissez par défaut que le minimum nécessaire au diagnostic. Anonymisez ou utilisez des espaces réservés chaque fois que possible.
