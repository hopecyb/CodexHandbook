---
legacyVerification:
  status: "verified"
  products: "Environnements utilisant un hôte Codex local ; se référer à la documentation officielle du Codex CLI pour la confiance et la gestion avec `/hooks`"
  checkedAt: "2026-08-25"
title: Hooks
description: Exécuter scripts ou outils MCP à des étapes du cycle de vie de Codex pour contrôler, journaliser et appliquer des règles.
locale: fr
source_locale: zh-CN
source_revision: a0312e9
translation_status: draft
translated_at: 2026-09-20
---

Un Hook est un traitement automatique à une étape du cycle de vie de Codex. Il peut lancer un script ou un outil MCP au début d’une session, lors de l’envoi d’un prompt, avant ou après un appel d’outil, pendant la compression du contexte, à l’arrêt d’un sous-Agent ou à la fin de la tâche principale.

## Ce que traite cette section

- Choisir le bon événement, sans inventer un nom inexistant comme `pre_tool`.
- Distinguer le blocage avant exécution du retour d’information après exécution.
- Commencer par un Hook testable et peu risqué.
- Examiner les limites de confiance des Hooks du projet et de ceux livrés avec un Plugin.

## Ordre de lecture

1. [Présentation des Hooks](/fr/skills/hooks/hooks-overview/) : comprendre les couches de configuration, la confiance et le comportement à l’exécution.
2. [Types d’événements Hook](/fr/skills/hooks/hook-event-types/) : choisir événement et matcher selon le cycle de vie.
3. [Exemples de configuration](/fr/skills/hooks/hooks-examples/) : exécuter un exemple de garde-fou `PreToolUse` vérifiable par des tests unitaires.

## Décision rapide

| Objectif | À envisager en priorité |
|---|---|
| Refuser ou réécrire une entrée avant l’exécution d’un outil | `PreToolUse` |
| Décider quand Codex s’apprête à demander des permissions supplémentaires | `PermissionRequest` |
| Journaliser ou ajouter un retour après la fin d’un outil | `PostToolUse` |
| Vérifier ou enrichir le contexte lors de l’envoi d’un prompt | `UserPromptSubmit` |
| Demander une nouvelle étape à la tâche principale ou au sous-Agent | `Stop` / `SubagentStop` |

Un Hook ne remplace ni le bac à sable, ni les approbations, ni les règles de commandes, ni les permissions du serveur. C’est une couche de protection supplémentaire ; certains chemins d’outils hébergés ne passent pas par les Hooks locaux.

## Source officielle

- [OpenAI : Hooks](https://learn.chatgpt.com/docs/hooks)
