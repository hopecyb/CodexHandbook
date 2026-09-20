---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique le rôle et la formulation d'une définition de terminé. Les notions, les exemples et la liste de contrôle ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Définition de terminé
description: Une liste de critères de fin commune aux personnes et aux équipes.
locale: fr
source_locale: zh-CN
source_revision: f55e9f7
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 60
---

Une « définition de terminé » consiste simplement à préciser à l'avance ce qui doit être accompli pour considérer la tâche comme finie.

Sans cela, une situation fréquente se présente :

- Vous pensez qu'il reste quelque chose à faire.
- Codex pense avoir terminé.
- Aucun des deux n'a forcément tort : les critères n'étaient pas alignés.

## Pourquoi c'est important

Bien des reprises de travail viennent de critères de « terminé » mal définis au départ.

Par exemple :

- Suffit-il de modifier le texte, ou faut-il aussi vérifier l'aperçu de la page ?
- Suffit-il que la compilation réussisse, ou faut-il vérifier manuellement que le bouton fonctionne ?
- Suffit-il que la fonctionnalité marche, ou faut-il aussi compléter la documentation ?

Si ces points ne sont pas précisés au départ, chacun peut juger le résultat selon ses propres critères.

Exemple de définition de terminé minimale pour une personne :

- [ ] Diff examiné
- [ ] Critères d'acceptation vérifiés un par un
- [ ] Tests ou vérification manuelle effectués
- [ ] Aucun secret ajouté au dépôt
- [ ] Points à suivre consignés

Une version destinée aux équipes sera développée lors d'un prochain jalon de gouvernance.

## Idées reçues

### 1. La définition de terminé n'a pas besoin d'être formelle ou compliquée

Au début, trois points suffisent déjà :

- Ce qu'il faut modifier
- Comment valider le résultat
- Dans quels cas la tâche n'est pas terminée

### 2. Ce n'est pas la même chose que l'objectif

On peut les distinguer ainsi :

- **Objectif** : le résultat souhaité
- **Définition de terminé** : la manière de prouver que ce résultat est atteint

Par exemple :

- Objectif : corriger le texte du bouton de la page d'accueil
- Définition de terminé : ne modifier que la page d'accueil ; afficher le nouveau texte sur le bouton ; vérifier que l'aperçu de la page est correct

### 3. Inutile d'écrire un long texte à chaque fois

Ce n'est pas nécessaire.

La clarté compte davantage que la longueur.

## Un modèle court

Vous pouvez commencer par ceci :

```text
Critères de fin :
1. Ne modifier que le périmètre indiqué
2. Produire un résultat conforme à mes exigences
3. Effectuer les vérifications et m'indiquer comment contrôler le résultat
```

La définition de terminé sert surtout à expliciter le niveau de travail attendu, afin que vous et Codex évaluiez le résultat de la même manière.
