---
title: Intégration GitHub
description: Connexion repo, PR, revue et CI — où Codex se situe dans les workflows GitHub.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

GitHub est la surface de collaboration la plus courante de Codex : les Tâches Cloud, la revue PR, Actions et le push local partagent branches et permissions.

Cette page explique comment Codex se connecte aux repos, branches, PR et revue.

Même si vous n'êtes pas un développeur senior, commencez par ce qu'il gère :

- Où le code vit
- Comment les changements sont proposés pour que d'autres les voient
- Comment la revue et la fusion se passent

## Carte des capacités

| Capacité | Entrée typique | Emplacement handbook |
|---|---|---|
| Connecter repo distant | Paramètres Cloud | [Connecter GitHub](/guide/web-and-cloud/connect-github/) |
| Changements code Cloud → PR | Tâche Cloud | [Créer une Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Revue diff locale | App de bureau / IDE | [Diffs et commentaires](/guide/desktop-app/diffs-comments-and-review/) |
| Exécuter Codex dans CI | GitHub Actions | Roadmap `08-developer-platform/ci-cd/` |
| Commentaires de revue PR auto | Actions + exec | [Mode non interactif](/guide/cli/non-interactive-mode/) |

## Normes d'équipe recommandées

```md
## GitHub × Codex (peut aller dans AGENTS.md)

- Protéger main par défaut ; Codex pousse uniquement des branches feature
- PR doit lier l'issue ; description inclut notes de test
- Codex ne doit pas fusionner les PR sauf si le bot de release est explicitement autorisé
- Secrets dans GitHub Secrets / secrets d'environnement — pas dans les Prompts
```

## Git Cloud vs local

| | Clone local | Cloud |
|---|---|---|
| Source du code | Workspace de votre machine | Clone distant |
| Commits non poussés | Visible | Non visible — pousser d'abord |
| Environnement | Vos versions Node/système | Image d'environnement configurée |
| Idéal pour | Développement quotidien | Tâches longues asynchrones, builds standardisés |

## Workflow de revue

1. Codex ou humain ouvre PR
2. Humain lit le diff (ou Skill `$pr-review`)
3. CI exécute les tests
4. Révisions guidées par commentaires — nouvelle Tâche Codex « traiter uniquement les commentaires de revue »
5. Humain fusionne

## Idées reçues courantes

### 1. Intégration GitHub ≠ « Codex développe pour moi automatiquement »

Usages plus courants :

- Lire le Contexte du repo
- Aider à organiser les diffs ou la revue
- Assister l'ouverture de PR et la correction des commentaires

### 2. Peu familier avec PR et Review ?

Approximativement :

- **PR** : proposer formellement vos changements pour que d'autres les voient
- **Review** : d'autres inspectent ces changements

Ce niveau suffit pour la plupart de cette page.

### 3. Au premier contact, séparer trois choses

Pas les tokens ou Actions en premier — mais :

> **Les changements locaux, le repo cloud et la revue PR ne sont pas la même chose.**

L'intégration GitHub consiste à intégrer Codex dans la collaboration de code existante.

## Sécurité

- Minimiser le périmètre du Token GitHub
- Rester prudent avec les patterns Actions sensibles comme `pull_request_target` (surface d'injection)
- Isolation supplémentaire pour l'automatisation sur les PR de fork

## Erreurs courantes

- Tâche Cloud suppose que des changements locaux non poussés existent
- Laisser Codex exécuter des instructions non nettoyées dans les descriptions PR (injection de Prompt)
- Mélanger formatage et changements de fonctionnalité dans une PR

## Références

- Documentation intégration GitHub OpenAI Codex
- KimYx0207 CX-10 ; stormzhang `26-git-github.md`

---

**Statut :** vérifié  
**Produits concernés :** Cloud / App / CLI  
**Base de vérification :** OpenAI Developers Codex use cases incluent encore « Review GitHub pull requests » ; le centre d'aide plugin/intégration souligne que l'accès aux repos externes dépend des permissions de l'app sous-jacente, l'accès par rôle et les limites d'action. Cette page résume le placement de collaboration et les différences de visibilité code local vs Cloud — pas une matrice de capacités fixe.  
**Dernière vérification :** 2026-07-26
