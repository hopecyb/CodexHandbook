---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique le périmètre et les risques à examiner dans un diff. Le lien interne et l'ordre des vérifications ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Examiner les diffs
description: Lire les modifications et poser les bonnes questions.
locale: fr
source_locale: zh-CN
source_revision: "f7f953f"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 10
reviewed_at: '2026-10-26'
---
Un « diff » montre exactement ce que Codex a modifié cette fois-ci.

Lors d'une première validation, beaucoup de personnes ne lisent que son résumé, sans regarder les modifications réelles. C'est surtout dans le diff que l'on repère les problèmes ; l'annonce « j'ai terminé » n'est qu'une indication.

## Que regarder dans un diff ?

Un diff répond directement à plusieurs questions essentielles :

- Quels fichiers Codex a-t-il modifiés ?
- Les modifications restent-elles dans le périmètre autorisé ?
- Quelque chose d'autre a-t-il été supprimé ou cassé par inadvertance ?
- Des éléments de débogage, des secrets ou du code provisoire ont-ils été ajoutés ?

En lisant le diff, vérifiez surtout :

1. Seuls les chemins autorisés ont-ils été modifiés ?
2. Y a-t-il des suppressions inattendues ?
3. Les noms et le style sont-ils cohérents ?
4. Reste-t-il des secrets ou des éléments de débogage ?

Pour la vue dans le produit, consultez [Diffs, commentaires et revue](/fr/guide/desktop-app/diffs-comments-and-review/).

## Vérifier la qualité du code généré par l'IA

Au-delà des fichiers modifiés, demandez-vous si le code ressemble à ce que l'on écrirait dans ce projet :

| Point à vérifier | Ce qu'il faut regarder |
|---|---|
| Nommage | Les noms de variables, fonctions et fichiers expriment-ils leur rôle, au lieu de multiplier `data`, `temp` ou `helper` ? |
| Limites des fonctions | Plusieurs responsabilités ont-elles été réunies dans une seule grande fonction ? |
| Gestion des erreurs | Les échecs fournissent-ils un contexte utile ? Des exceptions sont-elles ignorées ? |
| Tests | Des tests prouvent-ils le comportement, au lieu de ne modifier que l'implémentation ? |
| Commentaires | Expliquent-ils le *pourquoi* plutôt que de répéter le code ? |
| Simplicité | Des abstractions inutiles ont-elles été ajoutées pour donner une impression de complétude ? |

Pour une revue rapide, demandez à Codex de relire son propre diff selon ce tableau, de ne lister que les risques et de ne plus modifier les fichiers.

## Idées reçues

### 1. On peut faire une première revue sans savoir lire chaque ligne de code

Au début, nul besoin de suivre toute la logique comme une personne expérimentée. Ces trois vérifications sont déjà utiles :

- Quels fichiers ont changé
- Si des modifications sortent du périmètre prévu
- Si du contenu manifestement hors sujet a été ajouté

### 2. Modifier un seul fichier ne garantit pas la sécurité

Un petit nombre de fichiers ne signifie pas que la modification est correcte. Un périmètre réduit facilite toutefois l'examen et le retour en arrière.

### 3. Même une « petite modification » mérite d'être examinée

Les problèmes se cachent souvent dans les changements qui paraissent mineurs.

## Ordre de vérification

Pour votre premier examen d'un diff, procédez ainsi :

1. Comptez les fichiers modifiés.
2. Vérifiez si certains sortent des chemins autorisés.
3. Cherchez les suppressions accidentelles, journaux provisoires et restes de débogage évidents.
4. Vérifiez que le style et les noms s'accordent avec le projet.

Établissez d'abord ce qui a réellement changé, puis décidez si le résultat peut être accepté.
