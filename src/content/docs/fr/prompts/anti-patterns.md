---
title: Anti-patterns de Prompt
description: Formulations floues, dépassement de permissions et demandes de « raisonnement caché » à éviter.
locale: fr
source_locale: zh-CN
source_revision: 6aba346
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

On apprend souvent « comment bien écrire » — savoir ce qui **dérape le plus vite** fait gagner du temps.

Voici des pièges courants.

| Anti-pattern | Pourquoi c'est risqué |
|---|---|
| « Optimise un peu » | pas d'objectif ni de limite |
| « Tous les droits, débrouille-toi » | surface d'accident maximale |
| « Ne me demande rien, finis tout » | saute clarification et approbation |
| « Affiche tout ton raisonnement caché » | peu fiable et inutile pour valider |
| coller des logs avec secrets | fuite de credentials |

## Point commun

- ça **semble** court
- en réalité ça **supprime** les limites

Ce que vous omettez, Codex doit le deviner.

## Idées reçues

### 1. Plus « naturel » = meilleure collaboration

Le naturel va bien ; le problème c'est d'effacer les conditions clés.

### 2. « Finis sans me demander » = plus rapide

Souvent ensuite :

- mauvais périmètre
- approbations manquantes
- plus de retouches

### 3. Plus de permissions = avance plus vite

Plus de marge d'erreur — surtout quand les limites ne sont pas claires.

## Remplacer une formulation floue

### À éviter

```text
Optimise un peu
```

### Mieux

```text
Rends le hero de la page d'accueil plus accessible aux débutants ; ce fichier uniquement ; garde la structure ; donne-moi le diff et le résultat du build.
```

## Formule de remplacement

Quand la phrase devient vague :

```text
Objectif + périmètre + acceptation
```

Ex. :

- objectif : quoi changer
- périmètre : où seulement
- acceptation : comment juger

La plupart des anti-patterns ne sont pas « mal écrits » — ils **omettent** limites et acceptation.

Remplacez le flou par : objectif + contraintes + acceptation.

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page résume des anti-patterns courants ; renvois et exemples revus ; pas de faits volatils produit.
