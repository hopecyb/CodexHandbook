---
title: Worktrees
description: Isolez les conversations parallèles avec des worktrees Git, puis revenez sans risque au checkout local.
locale: fr
source_locale: zh-CN
source_revision: f050c32
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Un worktree Git fournit à un même dépôt plusieurs répertoires de checkout indépendants. Chaque répertoire possède ses propres fichiers et l'état de sa branche, tout en partageant les métadonnées Git du dépôt. Les worktrees permettent à plusieurs conversations de programmation de s'exécuter en parallèle sans écraser leurs fichiers respectifs.

## Prérequis

- Le projet doit se trouver dans un dépôt Git.
- Les limites de chaque tâche doivent pouvoir être décrites et vérifiées indépendamment.
- Les tâches parallèles ne doivent pas modifier les mêmes fichiers centraux.

Si vous découvrez Codex, accomplissez d'abord les tâches de façon séquentielle en mode Local. Introduisez les worktrees lorsque les temps d'attente ou les conflits de fichiers deviennent un problème réel.

## Créer un worktree dans l'App

1. Sélectionnez **Worktree** sous la zone de saisie d'une nouvelle conversation.
2. Choisissez une branche de départ : branche principale, branche de fonctionnalité ou branche actuelle avec des modifications non indexées.
3. Envoyez le prompt ; l'App crée un worktree Git.
4. Examinez, testez et révisez le travail dans sa conversation indépendante.
5. Utilisez **Handoff** lorsque vous êtes prêt à revenir au checkout local.

Par défaut, un worktree nouvellement créé utilise un HEAD détaché. Codex peut y travailler, mais définissez la branche de destination et la méthode de fusion avant de conserver ou de partager des commits.

## Deux tâches parallèles

| Conversation | Tâche du worktree | Propriété des fichiers | Acceptation |
|---|---|---|---|
| A | Corriger une erreur de connexion | `src/auth/**` | Les tests d'authentification réussissent |
| B | Étendre la documentation d'authentification | `docs/auth/**` | Le contrôle des liens réussit |

Ne laissez pas les deux conversations modifier un lockfile ou un fichier de configuration partagé. Si cela est inévitable, attribuez la modification à une seule conversation et limitez l'autre à l'analyse.

## Contrôles avant Handoff

```bash
git status --short
git diff --check
git diff --stat
```

Exécutez ensuite les tests propres à la tâche. N'utilisez Handoff, commit ou merge qu'après avoir identifié la conversation à l'origine de chaque modification, la branche qui doit la recevoir et le résultat de la vérification.

## Scheduled tasks et Remote

- Dans un dépôt Git, une tâche planifiée peut utiliser un worktree d'arrière-plan dédié afin d'éviter les conflits avec le travail actuel.
- Remote peut piloter depuis un appareil mobile une conversation de worktree sur un ordinateur connecté. Le dépôt et les commandes restent sur cet ordinateur ou dans son environnement de développement distant.
- Un projet sans Git ne bénéficie d'aucune isolation par worktree ; une tâche planifiée agit directement dans le répertoire du projet.

## Sources officielles

- [Worktrees Git](https://learn.chatgpt.com/docs/environments/git-worktrees)
- [Travaux longs et conversations parallèles](https://learn.chatgpt.com/docs/long-running-work)

---

**Statut :** verified

**Produit concerné :** App

**Dernière vérification :** 2026-08-26
