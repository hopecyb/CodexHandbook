---
title: Exécuter votre première tâche
description: Réaliser un petit changement avec un prompt clair.
locale: fr
source_locale: zh-CN
source_revision: 'f203611'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 80
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: 'Recoupement avec les chapitres déjà vérifiés du manuel sur les bases des prompts, l’examen du résultat, l’annulation et les projets d’entraînement. La page décrit une méthode stable : commencer par une tâche limitée, vérifiable et réversible.'
  checkedAt: '2026-07-26'
---

L'exemple ci-dessous utilise par défaut l'**App de bureau** ; vous pouvez utiliser le même prompt dans le CLI ou l’IDE.

Beaucoup de personnes essaient de faire construire à Codex « un site web complet » ou « refactoriser tout le projet » dès la première exécution. Cela dérape souvent rapidement.

Une petite première tâche est plus sûre. Compléter la boucle entière une fois compte plus que de commencer grand.

## Pourquoi garder la première tâche si petite

Une bonne première tâche répond généralement aux trois critères :

- Portée de changement réduite
- Résultat vérifiable d'un coup d'œil
- Facile à annuler si quelque chose tourne mal

Cette page utilise donc un minuscule exemple d'entraînement.

## Exemple de tâche

Dans votre projet d'entraînement, dites à Codex :

```text
Objectif : Ajouter une section « Pratique du jour » à la fin de hello.md avec une liste à puces de trois éléments.
Contraintes : Modifier uniquement hello.md ; ne pas supprimer le contenu existant ; ne pas faire de requêtes réseau.
Acceptation : Le fichier se termine par ce titre et exactement trois éléments de liste.
Si des informations manquent, demandez-moi d'abord — ne devinez pas.
```

## Ce que fait chaque partie du prompt

Ce prompt sépare plusieurs éléments critiques :

- **Objectif** : quoi faire
- **Contraintes** : ce qui ne doit pas être modifié
- **Acceptation** : comment savoir que c'est terminé
- **Demandez-moi d'abord si des informations manquent** : l'empêcher de deviner

Ce n'est pas un modèle fixe — cela rend simplement explicites les parties les plus faciles à laisser vagues.

## Idées reçues courantes

### 1. Une première tâche plus grande vous apprend plus

La première exécution consiste à compléter la boucle entière, pas à faire le plus gros travail possible.

### 2. Une fois le prompt écrit, laissez-le improviser

Pour la première tâche, surveillez trois choses :

- Si la portée reste dans les limites
- S'il modifie les fichiers que vous avez nommés
- Si le résultat correspond à l'acceptation

### 3. S'il se trompe à la première tâche, c'est que je fais mal

La première tâche est censée inclure :

- Repérer ce qui a mal tourné
- Signaler le problème
- Savoir comment revenir en arrière

## Pendant l'exécution

1. Laissez Codex proposer un court plan, ou demandez-lui d’en fournir un
2. Lors de l'approbation des écritures de fichiers, confirmez que les chemins sont corrects
3. Une fois terminé, allez à [Examiner le résultat](/fr/guide/getting-started/review-the-result/)

## Ordre suggéré

Suivez ces cinq étapes :

1. Choisissez un projet d'entraînement sécurisé
2. Donnez une petite tâche qui ne touche qu'un seul fichier
3. Avant d'approuver, vérifiez ce qui va changer
4. Après la fin, vérifiez portée et résultats
5. Si vous n'êtes pas satisfait, annulez ou orientez avec une correction précise

Après ces cinq étapes, le rythme de collaboration devient beaucoup plus clair.

## Ce qu'il faut vérifier à la fin

Concentrez-vous sur trois choses :

1. N'a-t-il modifié que `hello.md` ?
2. La fin du fichier contient-elle vraiment cette nouvelle section ?
3. Y a-t-il exactement trois éléments de liste ?

Si ces trois points sont satisfaits, votre première petite tâche est globalement réussie.

## S'il s'est trompé

Se tromper la première fois est normal. Vous pouvez continuer ainsi :

```text
Vous avez trop modifié. Annulez les modifications sur les autres fichiers et gardez uniquement les changements de hello.md.
```

Ou :

```text
Ne faites plus de modifications. Dites-moi exactement ce que vous venez de changer.
```

Bases du prompting : [Bases du prompt](/fr/prompts/basics/).
