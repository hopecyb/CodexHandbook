---
title: Modèle de revue
description: Revoir un diff et les risques de changement de façon structurée.
locale: fr
source_locale: zh-CN
source_revision: 0c747c3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Modèle de revue

Dérive fréquente : la revue devient « je corrige en passant ».

Mieux : **lister les problèmes**, puis décider de modifier.

## Modèle

```text
Revois le diff actuel par rapport à 【main / branche cible】, sans modifier le code.
Dimensions :
1. dépassement du périmètre 【issue / spec】
2. logique, cas limites, gestion d'erreurs
3. sécurité (secrets, injection, permissions)
4. tests et doc alignés avec le changement
Sortie : liste par niveau 🔴 bloquant / 🟡 suggestion / 🟢 OK, chaque point avec fichier et numéro de ligne.
```

## Quand l'utiliser

- revue de PR
- revue de diff
- risque sur doc ou config

## Idées reçues

### 1. Revue = quelques avis

= recherche structurée de problèmes.

### 2. Pas de bug évident = OK

Vérifier aussi :

- hors périmètre
- tests et doc
- sécurité et limites

Le modèle **fait sortir les risques par axes fixes**, pas un « c'est bien ou pas » vague.

## Voir aussi

- [Revue avant fusion](/fr/cases/workflows/review-before-merge/)
- [Cas : revoir une PR](/fr/cases/review-a-pr/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page fournit un modèle de revue ; liens et structure revus ; pas de faits volatils produit.
