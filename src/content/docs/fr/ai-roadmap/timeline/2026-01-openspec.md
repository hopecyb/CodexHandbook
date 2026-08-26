---
title: OpenSpec (développement piloté par spécification)
date: 2026-01-26
year: 2026
summary: "L'IA génère du code rapidement, mais le raisonnement derrière « pourquoi c'est fait ainsi » se perd souvent dans l'historique de conversation. OpenSpec introduit une approche spec-first : définir quoi construire et comment le construire avant l'implémentation, afin que humains et IA restent alignés."
phase: emerging
trend: rising
signal: well-calibrated
adoption_effort: ready-to-use
tags: [openspec, spec-driven-development, sdd, workflow, agent, ai-engineering]
authored_by: ai-assisted
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: 033715b
---

# OpenSpec

- Dates importantes :
  - Première publication (npm 0.1.0) : 2025-09-06
  - Publication de la version 1.0.0 : 2026-01-26
- Références officielles :
  - https://github.com/Fission-AI/OpenSpec
  - https://www.npmjs.com/package/@fission-ai/openspec
  - https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md
- Note : cette entrée enregistre les jalons publics et la portée d'OpenSpec comme framework de développement IA piloté par spécification.

## Ce que c'est

OpenSpec est un framework de développement piloté par spécification (Spec-Driven Development, SDD) pour la collaboration de codage avec l'IA.

D'après sa documentation officielle, il utilise des artefacts comme `proposal.md`, `specs/`, `design.md` et `tasks.md` pour séparer « pourquoi ceci », « quoi construire », « comment concevoir » et « comment exécuter » dans un processus itératif et maintenable, au lieu de laisser les décisions clés uniquement dans le contexte de chat.

## Le passage qu'il a permis

Il a déplacé beaucoup d'équipes de « prompter puis modifier immédiatement le code » vers « produire d'abord des artefacts de spécification, puis implémenter et archiver ».

Son chemin par défaut est `/opsx:propose -> /opsx:apply -> /opsx:archive`. Il relie clarification des besoins, conception de solution, découpage des tâches et archivage final dans un même workflow, réduisant la dérive sémantique dans les collaborations longues ou multi-personnes.

## Son stade actuel

Je marque actuellement OpenSpec comme `emerging`.

Il dispose déjà d'une CLI installable, d'un modèle d'artefacts clair, de chemins d'intégration entre outils et d'une version 1.0.0 publiée le 2026-01-26. Mais l'écosystème évolue encore, et les modes de déploiement organisationnel ainsi que les patterns de gouvernance restent en formation.

## Ce qu'il pourrait remplacer

Il peut remplacer une partie des habitudes de développement IA qui s'appuient seulement sur les journaux de chat pour gérer les exigences, ainsi que des processus faiblement connectés dispersés entre docs, systèmes de tâches et prompts temporaires.

Dans le travail itératif et collaboratif, des pipelines pilotés par artefacts comme OpenSpec rendent les relations exigences-conception-implémentation plus traçables.

## Ce qui pourrait le remplacer

Si un protocole standard plus unifié apparaît pour combiner spécification, exécution, vérification et archivage, OpenSpec pourrait être absorbé par des capacités plateforme de plus haut niveau.

Par exemple, des systèmes de workflow profondément intégrés aux IDE et runtimes d'agents pourraient standardiser davantage des pratiques aujourd'hui centrées sur les artefacts du dépôt.
