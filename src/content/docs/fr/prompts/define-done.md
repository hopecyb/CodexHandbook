---
title: Définir les critères de réussite
description: Rédiger des conditions de fin vérifiables.
locale: fr
source_locale: zh-CN
source_revision: "e97e854"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page traite uniquement acceptation et critères de fin ; liens internes revus ; pas de faits volatils produit.
  checkedAt: '2026-07-26'
---

On dit souvent ce qu'on veut, mais pas **quels critères permettent de dire que le travail est terminé** — d'où le jugement au feeling.

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
- modifier uniquement le texte de la page d’accueil de la documentation, sans changer la mise en page ni les composants
- `pnpm build` passe
- texte plus accessible aux débutants, moins de jargon implicite
```

## Test rapide

> **Si je confie ça à quelqu'un d'autre, peut-il dire si le résultat est validé ou refusé ?**

Si non, c'est encore trop vague.

Évitez que « fini ou pas » repose sur la devinette.

Incluez les commandes de validation pour que l'Agent les exécute : [Exécuter les tests](/fr/guide/quality/).
