---
title: Définir le terminé
description: Rédiger des conditions de fin vérifiables.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

On dit souvent ce qu'on veut, mais pas **à quel point c'est fini** — d'où le jugement au feeling.

Les critères de fin, c'est comment vous allez valider le résultat.

Ils doivent être **observables** :

- faible : « meilleure qualité de code »
- fort : « `npm test` passe ; le composant `Button` supporte `disabled` ; capture Storybook alignée avec le design »

## Pourquoi « fini » reste flou

Objectif et critères de fin se mélangent :

- **objectif** : le résultat visé
- **critères de fin** : comment confirmer qu'il est atteint

« Corriger ce bug » = objectif ;  
« reproduction stable, tests OK, pas de nouvelles erreurs console » = critères de fin.

## Idées reçues

### 1. « Ça a l'air bon » suffit

Risqué sur les petites tâches : tests, cas limites et effets de bord passent à la trappe.

### 2. Des phrases flatteuses ne remplacent pas des critères

Il faut pouvoir vérifier, pas résumer en discours.

### 3. Build OK = terminé

Souvent un point parmi d'autres — pas garantie de :

- comportement correct
- périmètre respecté
- texte adapté au lecteur
- sources vérifiées

## Trois familles utiles

- **fonctionnel** : le comportement attendu
- **technique** : build / tests / lint
- **périmètre** : uniquement ce qui était convenu

Exemple :

```text
Critères d'acceptation :
- texte hero docs uniquement, pas layout ni composants
- `pnpm build` passe
- texte plus accessible aux débutants, moins de jargon implicite
```

## Test rapide

> **Si je confie ça à quelqu'un d'autre, peut-il dire passé / échoué ?**

Si non, c'est encore trop vague.

Évitez que « fini ou pas » repose sur la devinette.

Incluez les commandes de validation pour que l'Agent les exécute : [Exécuter les tests](/guide/verification/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page traite uniquement acceptation et critères de fin ; liens internes revus ; pas de faits volatils produit.
