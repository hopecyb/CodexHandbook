---
title: Modèle de diagnostic
description: Trouver la cause racine avant de discuter du correctif.
locale: fr
source_locale: zh-CN
source_revision: b89ce2b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Modèle de diagnostic

Piège : dire « diagnostique d'abord » tout en supposant qu'il va corriger tout de suite.

Le modèle **sépare chercher la cause** et **réparer**.

## Modèle

```text
Symptôme : 【message d'erreur, test en échec, rapport utilisateur】
Contexte : 【changements récents, environnement, étapes de reproduction】
Entrées : @【logs / tests / code concerné】
Contraintes : ne modifie pas le code ; liste 2–3 causes possibles et comment les vérifier.
Sortie :
1. cause la plus probable (avec preuves)
2. étapes de vérification exécutables (commandes ou points de contrôle)
3. ébauche de plan de correctif (après ma confirmation seulement)
```

## Quand l'utiliser

- bug non localisé
- test rouge, couche inconnue
- problème complexe — pas de « patch au hasard »

## Idées reçues

### 1. Diagnostiquer ralentit — autant corriger direct

Beaucoup de retouches viennent d'un diagnostic sauté.

### 2. 2–3 hypothèses, trop verbeux ?

Au contraire : on voit s'il devine.

Le modèle impose d'expliquer **pourquoi** ça casse avant **comment** changer.

## Voir aussi

- [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/)
- [Cas : corriger un bug](/fr/cases/fix-a-bug/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page fournit un modèle de diagnostic ; liens et structure revus ; pas de faits volatils produit.
