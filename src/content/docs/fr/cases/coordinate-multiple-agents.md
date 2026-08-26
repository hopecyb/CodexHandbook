---
title: Coordonner plusieurs agents
description: Cas de collaboration avec exploration parallèle, exécution partagée et fusion des résultats.
locale: fr
source_locale: zh-CN
source_revision: 5abc786
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Coordonner plusieurs agents

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Développeurs / Équipes |
| Client | Application de bureau |
| Durée estimée | Selon la tâche |

## 1. Objectif et contexte

**Objectif :** Répartir les sous-problèmes parallélisables entre plusieurs agents et fusionner les conclusions manuellement.

**Critères de succès :** Chaque sous-agent a une définition d'achèvement indépendante, sans chevauchement sur le même fichier.

## 2. Modèles recommandés

### Exploration parallèle, choix humain

```text
Agent 1 : avantages, inconvénients et charge de travail du schéma A
Agent 2 : avantages, inconvénients et charge de travail du schéma B
(vous choisissez, puis un seul agent exécute)
```

### Isolation par worktree

Différents agents modifient des branches distinctes dans des [git worktree](/fr/guide/desktop-app/worktrees/) différents, fusion manuelle à la fin.

## 3. Règles de coordination (à inscrire dans AGENTS.md)

- Chaque agent a des frontières de répertoire explicites
- Interdiction du `git push` en parallèle
- CI unifié avant fusion

## 4. Voir aussi

- [Coordination multi-agents](/fr/cases/workflows/multi-agent-coordination/)
- [Sous-agents](/fr/guide/agent-work/subagents/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** La documentation actuelle des offres Codex d'OpenAI Help Center indique toujours que l'application de bureau prend en charge les agents Codex parallèles, le support worktree intégré et la délégation cloud ; cette page résume uniquement le mode de collaboration « exploration parallèle, isolation par frontières de répertoire, éviter le push parallèle, fusion manuelle des conclusions », sans dépendre d'un flux d'interface unique.
