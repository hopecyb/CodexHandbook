---
title: Modèle de modification
description: Itérer sur l'existant avec des limites claires.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Modèle de modification

Pour « changer un peu quelque chose qui existe déjà ».

Commencez par le **périmètre de modification**.

## Modèle

```text
Objectif : sur 【fonctionnalité/fichier existant】, réaliser 【changement précis】.
Contexte : 【pourquoi, impact】
Entrées : @【chemins concernés】
Contraintes :
- garder 【API / style / comportement】 sauf autorisation explicite
- diff minimal, pas de refactor hors sujet
- après chaque étape, lancer uniquement 【tests pertinents】
Acceptation :
- 【description du changement de comportement】
- tests concernés passent
- diff limité aux fichiers nécessaires
```

## Quand l'utiliser

- page ou composant existant
- bug précis
- texte, interaction ou config
- insister : « cette zone seulement, pas de refactor en passant »

## Idées reçues

### 1. Modifier = plus simple, donc moins à écrire

Au contraire : vieux code, contraintes cachées — les limites comptent plus.

### 2. « Diff minimal » = peu de lignes

= **uniquement** ce qui sert l'objectif.

### 3. « Comportement inchangé » sans précision

Dites ce qui compte comme « comportement actuel ».

## Ce que le modèle évite

- trop modifier
- dévier du sujet
- toucher des couches non autorisées

Un Prompt de modification dit **quoi** changer et **jusqu'où** seulement.

## Voir aussi

- [Définir le terminé](/prompts/define-done/)
- [Contraintes et limites](/prompts/constraints-and-boundaries/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page fournit un modèle de modification ; liens et structure revus ; pas de faits volatils produit.
