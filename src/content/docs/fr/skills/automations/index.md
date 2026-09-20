---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web et application de bureau ; CLI et IDE servent seulement à préparer et tester, sans interface de gestion"
  checkedAt: "2026-08-26"
title: Tâches planifiées
description: Répéter à une heure prévue, dans ChatGPT, une tâche déjà vérifiée.
locale: fr
source_locale: zh-CN
source_revision: 759c38e
translation_status: draft
translated_at: 2026-09-20
---

Une Scheduled task (tâche planifiée) permet à ChatGPT de répéter un travail en arrière-plan selon un calendrier. Elle convient aux rapports périodiques, aux suivis continus et à l’entretien récurrent. Ce n’est pas un système générique de webhooks, d’événements de dépôt ou d’automatisation CI.

## Vérifier d’abord si ce mécanisme convient

| Adapté | Peu adapté |
|---|---|
| Sources d’entrée stables et sortie vérifiable | Problème à redéfinir à chaque exécution |
| Déclenchement par heure ou intervalle | Déclenchement exact lors d’un push Git ou de l’ouverture d’une PR |
| Contrôles en lecture seule, résumés et brouillons | Fusion non supervisée sur la branche principale ou suppressions en masse |
| Condition claire pour « aucun changement » et pour l’arrêt | Nouvelles tentatives sans limite après un échec |

## Points d’entrée actuels pour la gestion

- Créez et gérez les tâches planifiées depuis ChatGPT Web ou l’application de bureau.
- Codex CLI et l’extension IDE n’ont pas d’interface de gestion des Scheduled tasks ; ils sont utiles pour tester d’abord un prompt, un Skill ou un script.
- L’application de bureau peut faire travailler une tâche dans un projet local ou un worktree isolé, à condition que la machine soit allumée, que l’application fonctionne et que le projet soit encore sur le disque.
- Une tâche planifiée sur le Web peut utiliser un contexte téléversé, des outils connectés, des Skills et des Plugins, mais n’accède pas directement à un dossier local de l’ordinateur.

## Dans cette section

- [Guide complet des tâches planifiées](/fr/skills/automations/scheduled-tasks/) : choisir le mode d’exécution, rédiger un prompt durable, définir permissions et critères d’acceptation.

## Source officielle

- [OpenAI : Scheduled tasks](https://learn.chatgpt.com/docs/automations)
