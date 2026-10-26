---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Recoupé avec les descriptions actuelles d’OpenAI Developers sur les longues tâches, la vérification et l’avancement par étapes, ainsi qu’avec les chapitres vérifiés de ce manuel sur la planification, la qualité et le contexte. Cette page ne conserve que le principe stable selon lequel une correction locale vaut mieux qu’une reprise complète.
  checkedAt: '2026-07-26'
title: Progression et réorientation
description: Ramener Codex sur la bonne voie avec une instruction courte lorsqu’une tâche commence à dévier.
sidebar:
  order: 20
locale: fr
source_locale: zh-CN
source_revision: "c9ea3be"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---
Quand l’exécution dévie, deux réactions sont fréquentes :

- Ne rien dire et la laisser continuer dans la mauvaise direction.
- Dire « arrête, recommence tout ».

Le plus souvent, on peut **réorienter** le travail en cours : conserver ce qui est juste et corriger seulement ce qui s’écarte du but.

## À quoi sert la réorientation

Elle précise comment poursuivre l’étape en cours, par exemple :

- Quelle partie est correcte et doit être conservée.
- Où le travail a commencé à dévier et doit s’arrêter.
- Quelle étape privilégier ensuite.

## Qu’est-ce que réorienter ?

C’est un **changement local de direction** pendant l’exécution. Cela devient utile lorsque :

- Codex a compris l’objectif, mais l’ordre des étapes convient mal.
- La moitié du travail est juste et ne doit pas être perdue.
- Une nouvelle information modifie les étapes à venir.
- Une refactorisation ou extension inutile est sur le point de commencer.

## Un modèle très utile

Une instruction en cours de tâche peut être courte :

```text
Arrête-toi à l’étape actuelle. Conserve A et B ; abandonne la direction prise pour C ;
à l’étape suivante, fais seulement D. Ne commence pas E.
```

Elle précise quatre choses :

1. Où s’arrêter.
2. Ce qu’il faut conserver.
3. Ce qu’il faut abandonner.
4. Ce qu’il faut faire ensuite, et rien d’autre.

## Malentendus fréquents

### 1. Si le travail dévie, faut-il tout arrêter et recommencer ?

Si la moitié du travail est déjà correcte, tout recommencer signifie souvent :

- Réexpliquer le contexte.
- Perdre les éléments déjà alignés.
- Risquer une nouvelle dérive au tour suivant.

### 2. Dire simplement « ce n’est pas bon » ne devrait-il pas suffire ?

Généralement non. Il est plus efficace de préciser :

- Ce qu’il faut conserver.
- Ce qu’il faut abandonner.
- La priorité actuelle.

### 3. Réorienter et refaire le plan, est-ce pareil ?

- **Réorienter** : la trajectoire générale est bonne, seule une correction locale est nécessaire.
- **Replanifier** : l’objectif, les hypothèses ou le périmètre touché ont changé.

## Pourquoi corriger par petites étapes

| Correction locale | Recommencer entièrement |
|---|---|
| Préserve le travail déjà aligné | Écarte aussi ce qui était correct |
| Consomme moins de contexte | Demande de réexpliquer le contexte |
| Facilite la maîtrise du périmètre | Peut provoquer une nouvelle dérive |
| Ressemble à une collaboration normale | Ressemble à répéter toute la commande |

## Quand réorienter, quand revenir au plan

Vous pouvez décider ainsi :

- **Seuls l’ordre, la portée ou le format de sortie posent problème** : réorientez d’abord.
- **L’objectif, les hypothèses ou la zone affectée ont changé** : revenez au plan.

## Trois façons courantes de réorienter

### 1. Réduire le périmètre

Quand la tâche prend trop d’ampleur :

```text
Occupe-toi d’abord de la page de connexion seulement. N’étends pas le travail à l’inscription ni à la récupération du mot de passe.
```

### 2. Modifier l’ordre

Quand l’action est juste, mais arrive trop tôt :

```text
Ajoute d’abord la vérification et les tests, puis reprends les modifications de l’implémentation.
```

### 3. Modifier la forme du résultat

Quand vous voulez une analyse avant la mise en œuvre :

```text
Ne modifie pas encore les fichiers. Donne d’abord un tableau comparant la solution actuelle à celle que tu proposes.
```

## Ce qu’une bonne instruction de réorientation devrait contenir

- Le point où s’arrêter.
- La partie à garder.
- La direction à ne pas poursuivre.
- La nouvelle priorité.
- L’autorisation ou non de continuer l’exécution.

Par exemple :

```text
Conserve ton diagnostic de la cause, mais ne lance pas encore la refactorisation.
À l’étape suivante, propose seulement une correction minimale et les contrôles nécessaires.
```

## Quand revenir à la planification

La réorientation convient aux écarts locaux. Revenez à la [planification](/fr/guide/agent-work/planning/) si :

- L’objectif même de la tâche a changé.
- Une information nouvelle invalide une hypothèse initiale.
- Le périmètre affecté s’élargit nettement.
- Deux ou trois corrections successives n’ont pas remis le travail sur la bonne voie.

Si l’écart n’est plus local, revenez directement à la planification.

## Erreurs courantes

- Dire seulement « faux » sans dire ce qui ne va pas.
- Lui demander de choisir la correction sans donner de priorité.
- Employer des mots qui déclenchent une reprise totale alors qu’il fallait seulement suspendre une étape.
- Tenter de poursuivre une nouvelle tâche avec une seule phrase ajoutée.

Lorsqu’une dérive apparaît, une courte instruction peut indiquer ce qu’il faut garder, arrêter et faire ensuite.

## Pages associées

- Pour définir le parcours d’exécution : [Planification](/fr/guide/agent-work/planning/).
- Pour le processus complet : [Explorer → Planifier → Exécuter → Vérifier](/fr/cases/workflows/explore-plan-execute-verify/).
- Pour déléguer les sous-tâches : [Sous-agents](/fr/guide/agent-work/subagents/).
- Pour reprendre après une interruption : [Passation et reprise](/fr/guide/agent-work/handoff-and-resume/).
