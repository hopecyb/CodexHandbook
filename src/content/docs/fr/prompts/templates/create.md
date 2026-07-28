---
title: Modèle de création
description: Implémenter une fonctionnalité, un texte ou un artefact from scratch.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Modèle de création

Deux pièges en création from scratch :

- objectif large sans limite
- lancer la génération avant d'avoir assez d'info

Le modèle fixe d'abord **produit, usage et contraintes**.

## Modèle

```text
Objectif : créer 【nom du livrable】 pour 【usage / utilisateurs】.
Contexte : 【conventions, style, limites de dépendances】
Entrées : 【spec, croquis, références @fichiers】
Contraintes :
- modifier/créer uniquement dans 【périmètre de chemins】
- ne pas introduire 【exclusions】
- opérations à risque : exécuter après mon approbation
Acceptation :
- 【résultat observable 1】
- 【résultat observable 2】
- étapes d'auto-test fournies
Si information insuffisante : liste les hypothèses et demande, ne devine pas.
```

## Quand l'utiliser

- page, composant, script ou doc from scratch
- livrable connu, pas encore commencé
- cadrer avant d'agir

## Idées reçues

### 1. Créer = laisser carte blanche

Il faut préciser :

- pour qui
- à quoi ça sert
- style ou stack interdits

### 2. Le contexte est optionnel

En création, il oriente souvent tout le livrable.

### 3. « Ça a l'air bien » comme acceptation

Impossible de juger la fin proprement.

Le pire : démarrer sans « quoi » et « pour qui ».

## Voir aussi

- [Travail piloté par la spécification](/cases/workflows/specification-driven-work/)
- [Définir le terminé](/prompts/define-done/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page fournit un modèle de création ; liens et structure revus ; pas de faits volatils produit.
