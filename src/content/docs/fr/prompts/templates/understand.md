---
title: Modèle de compréhension
description: Construire une vision commune avant de modifier.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Modèle de compréhension

Beaucoup de tâches bloquent faute de **compréhension partagée minimale**.

Pour « comprendre d'abord, décider ensuite ».

## Modèle

```text
Objectif : comprendre 【sujet / module / zone du dépôt】 pour préparer 【implémentation / modification / revue】.
Contexte : 【type de projet, stack, issue liée】
Entrées : 【@chemins, liens doc, captures】
Contraintes : analyse lecture seule ; ne modifie aucun fichier ; pas de commandes destructives.
Sortie :
1. 5–8 points sur concepts clés ou responsabilités des modules
2. 3 fichiers/répertoires les plus liés à 【objectif】 et pourquoi
3. 3 questions à confirmer
Acceptation : je peux décider du périmètre de la prochaine tâche à partir de cette sortie.
```

## Quand l'utiliser

- nouveau sur un dépôt
- module inconnu
- avant modification : cartographier les liens

## Idées reçues

### 1. Comprendre ≠ résumer

Il faut aussi :

- fichiers les plus pertinents
- ce qui reste flou
- par où commencer ensuite

### 2. Pas besoin de tout le détail d'un coup

La ligne directrice avant l'excavation complète.

Le modèle sert à **resserrer** la prochaine tâche.

## Voir aussi

- [Explorer — planifier — exécuter — vérifier](/cases/workflows/explore-plan-execute-verify/)
- [Cas : comprendre un dépôt](/cases/understand-a-codebase/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page fournit un modèle de compréhension ; liens et structure revus ; pas de faits volatils produit.
