---
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: 'Cette page a été recoupée avec les principes d''introduction déjà vérifiés sur les autorisations, l''examen du résultat, la récupération après échec, Git et l''espace de travail. Elle décrit la méthode stable : s''arrêter, examiner le périmètre, privilégier l''annulation, puis retrouver un état sûr. Elle ne présente aucun bouton d''annulation d''un client comme une interface immuable.'
  checkedAt: '2026-07-26'
title: Annuler et revenir à un état sûr
description: Revenir en arrière sans risque quand le résultat ne convient pas.
locale: fr
source_locale: zh-CN
source_revision: 5e7a06e
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 100
---

Une inquiétude fréquente lors de la première utilisation de Codex est : s'il se trompe, pourrai-je revenir en arrière ?

Dans la plupart des cas, oui, à condition de suivre une méthode prudente.

Si le résultat sort du périmètre prévu ou manque de qualité :

1. Utilisez la fonction d'annulation ou de restauration des modifications du client, selon son interface actuelle.
2. Si le projet utilise Git, annulez les modifications de l'arbre de travail par une méthode que vous connaissez. Les débutants peuvent commencer sans Git dans un dossier d'entraînement jetable.
3. Ouvrez une nouvelle conversation, resserrez les contraintes et réessayez.

Souvent, il vaut mieux réduire le périmètre dès le départ : limiter les fichiers modifiables, préciser les interdictions et examiner un plan avant l'exécution.

## Distinguer « annuler » et « récupérer »

- **Annuler** : revenir sur la modification précise qui ne vous convient pas.
- **Récupérer** : ramener le projet à un état dont vous savez qu'il est sûr.

Annuler une modification sur un petit fichier d'entraînement est généralement facile. La situation se complique si :

- Codex a modifié plusieurs fichiers ;
- vous avez ensuite apporté vous-même d'autres changements ;
- vous ne savez plus qui a modifié quoi.

Arrêtez les modifications et délimitez d'abord leur portée.

## Que faire après une première erreur ?

1. Cessez les modifications : ne demandez pas à Codex d'en faire davantage dans la précipitation.
2. Vérifiez quels fichiers il a modifiés.
3. Utilisez en priorité la fonction d'annulation du produit, si elle existe.
4. Si le projet utilise déjà Git, revenez en arrière avec une méthode Git que vous connaissez.
5. Une fois l'état sûr retrouvé, reformulez des instructions plus claires avant de réessayer.

## Si vous ne connaissez pas encore Git

Le mot « récupération » peut effrayer les débutants, comme s'il fallait d'abord apprendre beaucoup de commandes Git. Ce n'est pas nécessaire pour commencer.

Vous pouvez :

- Vous exercer dans un dossier jetable.
- Ne laisser Codex modifier qu'un petit fichier à la fois.
- Annuler directement un résultat qui ne vous convient pas.

Apprenez ensuite les méthodes de retour arrière avec Git lorsque vous commencerez à traiter de vrais projets.

## Mieux vaut prévenir que réparer

Ces habitudes réduisent nettement le risque qu'une erreur devienne difficile à corriger :

- Indiquez exactement quel fichier peut être modifié.
- Demandez un plan avant l'exécution.
- Contrôlez chaque étape terminée au lieu de laisser s'accumuler les modifications.
- Faites confirmer les opérations risquées à l'avance.

## Utiliser les points de récupération pour explorer

La récupération ne sert pas seulement après une erreur. Elle peut aussi être préparée avant d'explorer d'autres solutions.

Pensez à créer un point de récupération avant :

- De comparer deux approches de mise en œuvre
- De demander à un agent une refonte de grande ampleur
- D'essayer un script d'automatisation ou un remplacement en lot
- De travailler sur des exigences susceptibles de changer rapidement

Voici un rythme plus prudent :

```text
Confirmer l'état sûr actuel
→ Demander à Codex quels fichiers seront touchés
→ Créer un point de récupération ou vérifier l'état Git
→ Exécuter une petite modification
→ Examiner le diff et les résultats des vérifications
→ Conserver, annuler ou essayer une autre approche
```

Si le client propose des points de contrôle ou une fonction de relecture, vous pouvez privilégier ces fonctions intégrées. Dans un projet Git, une branche, un stash ou un petit commit peuvent aussi servir de point de récupération. L'essentiel n'est pas de mémoriser une commande, mais de ne pas étendre les modifications lorsque leur portée reste incertaine.

Se tromper n'est pas grave en soi. Continuer à modifier sans savoir ce qui a été touché est bien plus difficile à corriger.
