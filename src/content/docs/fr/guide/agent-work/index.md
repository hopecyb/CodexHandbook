---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Relecture croisée, section par section, avec les chapitres vérifiés de ce manuel sur la planification, le contexte, la vérification et la collaboration entre tâches. Cette page ne conserve que des principes de collaboration stables, sans transformer l’interface actuelle d’un client en contrat durable."
  checkedAt: "2026-07-26"
title: "Travail de l’agent"
description: "Amener Codex à collaborer et à mener la tâche à terme, plutôt qu’à produire une réponse ponctuelle."
sidebar:
  order: 31
locale: fr
source_locale: zh-CN
source_revision: 3eb251e
translation_status: draft
translated_at: 2026-09-20
---
Le travail de l’agent porte sur la façon de mener une tâche à un état **achevé et vérifiable**. Ce chapitre traite du moment où planifier, où confier une sous-tâche, comment corriger la trajectoire en cours de route et comment transmettre ou reprendre le travail.

Il s’agit d’une manière de collaborer, pas d’une fonction isolée. Pour beaucoup de tâches, le plus difficile n’est pas de formuler la demande, mais de parvenir jusqu’à un résultat réellement terminé et contrôlable.

## Ce que couvre ce chapitre

- Ramener une tâche complexe à un plan précis.
- Rectifier progressivement pendant l’exécution.
- Repérer les sous-problèmes à confier à un sous-agent.
- Transmettre et reprendre une tâche longue interrompue.

## Ordre de lecture conseillé

1. [Planification](/fr/guide/agent-work/planning/).
2. [Progression et réorientation](/fr/guide/agent-work/progress-and-steering/).
3. [Sous-agents](/fr/guide/agent-work/subagents/).
4. [Passation et reprise](/fr/guide/agent-work/handoff-and-resume/).

## Un cadre utile

Le travail de l’agent peut se voir comme quatre actions successives :

```text
Comprendre d’abord → planifier → réorienter pendant l’exécution → transmettre ou terminer
```

Omettre l’une de ces actions a souvent une conséquence :

- Sans compréhension, les modifications partent dans la mauvaise direction.
- Sans plan, le périmètre peut déraper au milieu du travail.
- Sans réorientation, chaque correction peut éloigner davantage du but.
- Sans passation, personne ne sait où en est une tâche interrompue.

## Malentendus fréquents

### 1. Travailler avec un agent, c’est seulement écrire un prompt plus long

Cela ne suffit pas. Le prompt n’est que le point de départ. La qualité dépend aussi :

- D’un plan.
- De corrections en cours de route.
- D’une séparation des parties complexes.
- D’un état que quelqu’un pourra reprendre.

### 2. Changer de direction à mi-parcours signifie que le travail précédent est perdu

Affiner le travail pendant l’exécution est souvent normal. Inutile de prétendre que la première demande pouvait tout anticiper.

### 3. Plus de sous-agents signifie toujours plus d’efficacité

Pas toujours. Si les limites sont floues, multiplier les sous-tâches complique au contraire la coordination du fil principal.

## Liens avec les autres chapitres

- Pour le processus complet : [Explorer → Planifier → Exécuter → Vérifier](/fr/cases/workflows/explore-plan-execute-verify/).
- Pour expliquer clairement la tâche : [Prompts](/fr/prompts/).
- Pour gérer le contexte : [Contexte](/fr/guide/context/).
- Pour travailler en parallèle : [Agents parallèles](/fr/guide/desktop-app/parallel-agents/) et [Coordination multi-agents](/fr/cases/workflows/multi-agent-coordination/).

## Commencer par le plus petit processus complet

Si vous voulez d’abord mener une tâche à terme simplement, suivez quatre étapes :

1. Formulez clairement la tâche.
2. Si elle est complexe, demandez d’abord un plan.
3. Ajustez progressivement selon les résultats de l’exécution.
4. Avant de terminer, exigez un résultat vérifiable.

Quand ces quatre étapes deviennent naturelles, apprendre les sous-agents et la passation est plus simple. L’essentiel est de maintenir le travail dans la bonne direction pendant la planification, l’exécution, les corrections et la clôture.

## Erreurs courantes

- Utiliser l’agent comme un moteur de recherche avec un objectif vague.
- Croire qu’une correction en cours de route impose de tout recommencer.
- Lancer une longue tâche sans aucun document de passation.
- Diviser le travail sans limites claires et rendre le fil principal plus confus.

## Source de référence

- Indications officielles d’OpenAI Codex sur la collaboration et l’exécution des tâches.
