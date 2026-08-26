---
title: Multi-agent
date: 2025-06-13
year: 2025
summary: "Un agent unique est limité par la longueur de contexte et l'exécution séquentielle. Les systèmes multi-agent découpent les tâches complexes en rôles parallèles — l'un cherche, l'autre analyse, un autre rédige — comme une vraie collaboration d'équipe. Cela augmente fortement le plafond des workflows longs et complexes."
phase: emerging
trend: rising
signal: well-calibrated
tags: [multi-agent, agent, orchestration, collaboration, llmops]
authored_by: ai-assisted
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-09
reviewed_at: 2026-08-26
source_revision: df11adc
---

# Multi-agent

- Jalonnement grand public en ingénierie LLM : 2025-06-13
- Références officielles :
  - Anthropic (cadre d'ingénierie) : https://www.anthropic.com/engineering/building-effective-agents
  - Anthropic (système en production) : https://www.anthropic.com/engineering/multi-agent-research-system
  - OpenAI (cas d'application) : https://openai.com/index/consensus/
- Note historique (IA classique) :
  - Contract Net Protocol (1980) : https://reidgsmith.com/The_Contract_Net_Protocol_Dec-1980.pdf
- Note : cette entrée situe le moment où Multi-agent devient mainstream dans l'ingénierie des applications LLM, pas l'origine la plus ancienne du concept en IA.

## Ce que c'est

Multi-agent est une architecture système où plusieurs agents logiciels se répartissent le travail, collaborent et fusionnent leurs résultats pour accomplir une tâche.

Ici, « multi-agent » signifie plusieurs agents programmatiques, pas une équipe humaine. Chaque agent peut prendre un rôle différent : planification, retrieval, exécution, revue ou synthèse, tandis qu'une couche d'orchestration gère routage des tâches, passage d'état et fusion des résultats.

## Le passage qu'il a permis

Il a fait passer l'ingénierie des applications IA de « exécution sérielle par agent unique » à « exécution collaborative parallèle multi-rôles ».

Dans les patterns mono-agent, les tâches complexes sont souvent limitées par la taille de contexte, la vitesse de raisonnement en un seul fil et la variance qualité due au mélange des rôles. Les systèmes multi-agent décomposent les responsabilités, parallélisent recherche, raisonnement, vérification et rédaction, puis agrègent et vérifient les résultats au niveau orchestration.

Cela déplace les systèmes IA de « capables de répondre à des questions » vers « capables de terminer de manière fiable des workflows complexes ».

## Pourquoi la date est 2025-06-13

Multi-agent n'est pas un concept nouveau en IA. Il a des racines anciennes dans la recherche en intelligence distribuée, avec Contract Net Protocol en 1980 comme jalon précoce.

Mais dans le contexte de l'ingénierie LLM, 2025-06-13 est un meilleur jalon : Anthropic a partagé publiquement la construction d'un système de recherche multi-agent en production et ses gains pratiques, signalant le passage d'une discussion expérimentale à une pratique d'ingénierie réutilisable.

## Son stade actuel

Je marque actuellement Multi-agent comme `emerging`.

Il a été validé par des équipes de tête et se diffuse dans davantage d'outillages et de produits. Mais les standards d'orchestration, d'observabilité, de gouvernance des coûts, de reprise sur échec et d'interopérabilité restent en évolution rapide.

En bref, Multi-agent est déjà un consensus de tendance, mais pas encore une pratique standard par défaut.

## Ce qu'il pourrait remplacer

Il peut remplacer une partie des conceptions où « un seul agent gère tout », surtout pour les workflows longs, les tâches incertaines et les travaux nécessitant plusieurs étapes de vérification.

À mesure que l'orchestration mûrit, les équipes dépendront moins de prompts géants en une fois et de grands appels de modèle uniques, et davantage de « découpage de rôles + exécution parallèle + validation agrégée ».

## Ce qui pourrait le remplacer

Il sera plutôt absorbé par des abstractions d'orchestration supérieures qu'éliminé.

Des compilateurs automatiques de graphes de tâches, protocoles de communication agent standardisés et plateformes d'orchestration qualité pourraient industrialiser les pratiques multi-agent actuelles.
