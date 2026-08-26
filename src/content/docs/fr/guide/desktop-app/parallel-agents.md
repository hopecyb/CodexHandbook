---
title: Conversations et Agents en parallèle
description: Utilisez des conversations et des worktrees indépendants pour faire avancer des tâches qui peuvent être acceptées séparément.
locale: fr
source_locale: zh-CN
source_revision: 6f0977b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

L'unité de base du travail parallèle est une conversation qui possède son propre contexte, ses messages, son résultat et son objectif. Une tâche se prête à une exécution parallèle lorsque **ses parties sont indépendantes, possèdent des limites de fichiers claires et peuvent être acceptées séparément**, et non simplement parce qu'elle comporte de nombreuses étapes.

![Schéma d'orchestration où le fil principal délègue des travaux indépendants à plusieurs sous-agents, puis réunit les preuves et résout les conflits](/diagrams/subagent-orchestration-fr.svg)

## Déterminer si le travail peut être parallélisé

| Peut s'exécuter en parallèle | Doit rester séquentiel |
|---|---|
| Deux investigations en lecture seule | La seconde tâche dépend de la conclusion de la première |
| Le code et la documentation occupent des répertoires distincts | Les deux tâches modifient le même fichier central |
| Deux approches produisent des prototypes séparés | Les exigences changent encore fréquemment |
| Chaque tâche dispose de tests indépendants | L'exactitude ne peut être établie qu'après intégration commune |

Les recommandations officielles déconseillent deux conversations qui écrivent dans la même source de données. Pour programmer en parallèle, utilisez des worktrees Git distincts.

## Progresser du simple au complexe

### 1. Commencer par des tâches parallèles en lecture seule

```text
Tâche : analyse le dernier échec du module d'authentification. Ne modifie aucun fichier.
Périmètre : src/auth/** et les tests correspondants.
Livrable : hypothèses sur la cause racine, chemins de preuve, incertitudes restantes
et commandes de vérification recommandées.
```

Les tâches en lecture seule ne créent pas de conflit de fusion et constituent un bon premier exercice.

### 2. Paralléliser ensuite les tâches d'écriture

Pour chaque conversation, définissez l'objectif, la propriété des fichiers, les exclusions et les critères d'acceptation :

```text
Objectif : documenter les codes d'erreur d'authentification.
Propriété : docs/auth/** uniquement.
Ne pas modifier : src/**, les lockfiles ou la configuration partagée.
Acceptation : exécuter pnpm check:links et indiquer le résultat.
```

Placez chaque conversation de programmation dans un [worktree](/fr/guide/desktop-app/worktrees/) distinct. Attribuez la configuration partagée à la conversation principale ou à un seul propriétaire désigné.

### 3. Centraliser la synthèse

Ne concaténez pas les résultats sans les réviser. La conversation principale doit vérifier :

1. que chaque tâche a respecté ses limites ;
2. que ses preuves et ses tests sont reproductibles ;
3. que les conclusions ne se contredisent pas ;
4. si les tests d'intégration doivent être relancés après la fusion.

## Travaux longs et Goal mode

Saisissez `/goal` dans l'App de bureau, la CLI ou l'IDE pour lancer Goal mode. Un goal doit définir le résultat, les contraintes et les critères de vérification. Chaque conversation possède son propre goal. L'exécution parallèle n'élargit ni l'accès au bac à sable ni les autorisations ; le travail se suspend toujours lorsqu'une opération exige une décision.

Pour une orchestration plus fine des outils, consultez [Sous-agents](/fr/guide/agent-work/subagents/).

## Sources officielles

- [Travaux de longue durée](https://learn.chatgpt.com/docs/long-running-work)
- [Worktrees Git](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Sous-agents](https://learn.chatgpt.com/docs/agent-configuration/subagents)

---

**Statut :** verified

**Produits concernés :** App, CLI, IDE

**Dernière vérification :** 2026-08-26
