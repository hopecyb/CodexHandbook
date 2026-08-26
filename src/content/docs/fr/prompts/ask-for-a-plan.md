---
title: Demander un plan d'abord
description: Avant que Codex n'agisse, faites-lui exposer les étapes, les risques et la validation.
locale: fr
source_locale: zh-CN
source_revision: 0a2c7c7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Beaucoup de problèmes ne viennent pas de l'impossibilité de faire, mais d'un **démarrage trop rapide**. Un « aide-moi à corriger » mélange souvent exploration, plan et exécution — et vous ne validez qu'en regardant le diff.

Dans ce cas, il est plus efficace de demander d'abord un plan plutôt que d'allonger indéfiniment le besoin.

## Quand demander un plan est indispensable

| Scénario | Pourquoi |
|---|---|
| Plusieurs fichiers ou modules | risque de toucher des zones non concernées |
| Dépôt inconnu | confirmer d'abord le périmètre compris |
| Besoin encore flou | faire émerger les désaccords tôt |
| Approbation avant exécution | séparer « autorisation d'exécuter » et « discussion d'approche » |
| Actions à haut risque | voir d'abord rollback et validation |

Une typo ou un libellé ponctuel n'exige pas forcément un plan formel — mais dès que « une dérive serait pénible », ça vaut le coup de faire une pause.

## Ce qu'un bon plan doit couvrir au minimum

Même en version minimale, ces quatre points :

1. étapes
2. fichiers ou périmètre concernés
3. risques ou points à confirmer
4. comment valider chaque étape

Sans le point 4, c'est plutôt une todo qu'un plan vérifiable.

## Trois formulations courantes

### Version minimale

```text
Ne modifie pas le code pour l'instant. Donne-moi d'abord un plan en 3 à 5 étapes : quels fichiers seront touchés et comment valider chaque étape.
```

Convient quand la direction est déjà claire et que vous voulez voir le découpage.

### Version recommandée

```text
N'exécute pas encore. Sur la base du dépôt actuel, propose un plan avec :
1. compréhension de l'objectif
2. étapes numérotées
3. fichiers ou répertoires concernés
4. risques et points à confirmer
5. méthode de validation

Ne modifie aucun fichier avant que je réponde « exécute selon le plan ».
```

Convient au développement quotidien, refonte de docs, réécriture de Prompts, ajustement de config.

### Version haut risque

```text
Ne fais aucune modification pour l'instant. Produis un plan et indique séparément :
- quelle étape risque le plus une régression
- comment revenir en arrière en cas d'échec
- quelles actions nécessitent ma confirmation
- quels tests ou contrôles manuels prouvent la fin
```

Convient aux incidents prod, config de permissions, scripts d'automatisation, refactors multi-modules.

## Un plan n'est pas meilleur parce qu'il est long

Vous voulez un intermédiaire **approuvable, corrigeable, exécutable** — pas un mémo interminable.

Trois tests de qualité :

- pouvez-vous dire clairement « ne fais pas l'étape 2, fais autre chose »
- voyez-vous d'un coup d'œil les zones critiques touchées
- savez-vous comment valider avant de commencer

Sinon, le plan n'est pas assez concret.

## Comment commenter un plan

Pas besoin de tout réécrire — orientez comme avec un collègue.

Phrases utiles :

```text
Garde les étapes 1 et 2, supprime l'étape 3.
Sépare les changements base de données en une étape à part.
Commence par une analyse en lecture seule, pas l'implémentation.
Ajoute tests de régression et plan de rollback au plan.
```

C'est souvent plus économe en contexte que « recommence ».

## Bénéfices par rapport à « commencer directement »

| Plan d'abord | Commencer directement |
|---|---|
| détecte les malentendus tôt | la mauvaise direction apparaît souvent trop tard |
| facilite approbation et collaboration | vous ne voyez que le diff final |
| aide à découper en sous-tâches | plusieurs objectifs se mélangent |
| la validation est visible à l'avance | on pense aux tests à la fin |

Beaucoup de workflows séparent « exploration » et « plan ». Voir [Explorer — planifier — exécuter — vérifier](/fr/cases/workflows/explore-plan-execute-verify/).

## Problèmes fréquents des plans

### Actions sans limites

Ex. « mettre à jour la doc et optimiser la structure » sans dire quels répertoires — le plan grossit vite.

### Implémentation sans validation

Ex. « modifier la logique, les styles, committer » sans dire comment prouver que rien n'est cassé.

### Liste de tâches sans points à confirmer

Un bon plan admet l'incertitude au lieu de prétendre que tout est acquis.

## Combinaisons recommandées

- chaîne d'exécution formelle : [Planification](/fr/guide/agent-work/planning/)
- plan réutilisable : [Anatomie d'une tâche](/fr/prompts/task-anatomy/)
- corriger en cours de route : [Progression et pilotage](/fr/guide/agent-work/progress-and-steering/)
- définir l'acceptation : [Définir le terminé](/fr/prompts/define-done/)

## Convention d'équipe utile

Dans `AGENTS.md`, vous pouvez écrire :

```md
- Changements touchant plus de 3 fichiers : plan d'abord
- Pas de commandes destructives sans confirmation
- Le plan doit inclure la validation
```

« Demander un plan d'abord » devient alors la norme, pas un rappel ponctuel.

## Sources de référence
- Documentation officielle OpenAI Codex — planification et exécution
---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page décrit uniquement la méthode de collaboration « plan d'abord » ; liens internes et structure d'exemple revus ; le corps ne dépend pas de faits volatils produit.
