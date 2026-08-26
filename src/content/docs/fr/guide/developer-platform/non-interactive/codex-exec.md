---
title: codex exec
description: Point d'entrée d'exécution non interactive — dispatcher une tâche complète une fois dans scripts et CI.
locale: fr
source_locale: zh-CN
source_revision: 124836c
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Si `codex` interactif est le chat pendant que vous travaillez, **`codex exec`** est plus proche de confier un job ponctuel et obtenir un résultat à la fin.

C'est le cœur du [mode non interactif](/fr/guide/cli/non-interactive-mode/) : pas de chat aller-retour, pas de clarification en cours d'exécution — le processus se termine avec un résultat ou un échec. Ce chapitre vise les intégrateurs [plateforme développeur](/fr/guide/developer-platform/) et les lecteurs qui câblent Codex dans des scripts ou CI pour la première fois.

## Ce que cette page couvre

- Comment `exec` diffère de `codex` interactif
- Forme minimale de commande et répertoire de travail
- Exigences d'approbation et bac à sable en mode non surveillé

## Ce que fait `exec`

Considérez `codex exec` comme :

- Émettre un ordre de travail ponctuel
- Exécuter jusqu'à complétion et retourner un résultat

Une fois les instructions définies, il s'exécute en conséquence, retourne le résultat et quitte.

Il convient donc quand :

- Les frontières de tâche sont fixes
- Aucune clarification en cours d'exécution n'est nécessaire
- Vous voulez une exécution répétable plus tard

## Pourquoi ça existe

Vous ne chattez pas avec Codex en CI, et vous ne vous attendez pas à qu'il s'arrête dix fois pour poser des questions.

Usages typiques de `codex exec` :

- Automatisation de revue de code
- Jobs planifiés
- Scripts par lot
- Étapes d'analyse ou génération unique dans un pipeline

Il convient quand **les frontières de tâche sont déjà claires** ; si vous explorez encore, le mode interactif est généralement meilleur.

:::note
**Les noms de commandes et flags suivent la CLI officielle.** Après mise à niveau, exécutez `codex --help` et `codex exec --help`.
:::

## Approche minimale viable

```bash
cd /path/to/repo
codex exec --cd . "Lecture seule : comparer le diff de la branche actuelle à main, lister les 3 risques de sécurité principaux, ne pas modifier les fichiers"
```

Par défaut, l'exécution utilise un bac à sable en lecture seule. Pour autoriser l'écriture dans l'espace de travail, indiquez-le explicitement :

```bash
codex exec --cd . --sandbox workspace-write "Réparer les tests en échec, modifier uniquement src/auth et tests/auth"
```

Principes :

- Dans les scripts shell, `cd` vers un worktree propre d'abord
- Mettre les prompts dans `prompts/` versionné ou heredocs pour éviter les problèmes d'échappement shell
- En CI, juger succès/échec par **code de sortie**

## Réalité facile à manquer

En mode interactif vous pouvez dire « ce n'est pas ce que je voulais ».  
En `exec`, **si le premier prompt est mauvais, tout le run peut partir de travers**.

En écrivant des prompts `exec`, soyez plus explicite que d'habitude sur :

- Quoi faire
- Quoi ne pas faire
- Format de sortie
- Ce qui compte comme terminé
- Comment échouer quand les choses vont mal

## Idées reçues courantes

### `exec` convient aux tâches fixes

Beaucoup le traitent comme « mode CLI avancé ».

Plus précis : c'est pour des runs **stables et répétables**.

### Les prompts courts ne sont pas toujours des prompts clairs

En mode interactif, un langage vague peut être corrigé plus tard.

En `exec`, un prompt court qui omet les frontières, limites et critères de succès n'est souvent pas élégant — c'est risqué.

## Flux de travail recommandé

```text
Préparer dépôt (checkout, install, token lecture seule)
    → Pin version prompt (git sha)
    → codex exec
    → Collecter stdout / artefacts
    → Exit non-zéro échoue CI ; ne pas retry indéfiniment
```

Voir [Scripts et pipelines](/fr/guide/developer-platform/non-interactive/scripts-and-pipelines/).

## Comment le traiter

- Une commande de tâche ponctuelle scriptable
- Adapté aux scripts, CI ou cron

C'est pourquoi beaucoup d'équipes le câblent derrière `make review`, GitHub Actions, cron ou boutons de plateforme interne.

## Comparé au mode interactif

| | `codex` interactif | `codex exec` |
|---|---|---|
| Clarification | Multi-tours | Doit être clair dès le départ |
| Approbation | Humain présent | Renforcer la politique avant |
| Idéal pour | Apprentissage, exploration | CI, cron |

## Quand hésiter

- Encore en exploration des exigences, peut changer d'avis souvent : préférer le mode interactif
- La tâche est un modèle que vous voulez exécuter à répétition : utiliser `codex exec`

`codex exec` convient aux tâches déjà claires et qui valent la répétition ; si vous réfléchissez encore à voix haute, ne le précipitez pas dans des flux non interactifs.

## Erreurs courantes

- Entasser l'historique de chat long dans un seul exec
- CI utilise token d'écriture et le prompt inclut le corps PR non sanitizé
- Version CLI non pinée casse les pipelines soudainement
- Ignorer les codes de sortie non-zéro et marquer vert
- Forcer des tâches de jugement humain complexe en runs non surveillés

## Frontières de sécurité

- Non surveillé = [approbation humaine](/fr/cases/workflows/human-approval-patterns/) plus faible ; lecture seule par défaut
- Voir [Identifiants de sécurité](/fr/guide/developer-platform/ci-cd/code-review-automation/#permissions-and-security) (référence croisée dans le même chapitre)

## Liste de contrôle d'acceptation

- [ ] Local et CI utilisent le même fichier prompt
- [ ] Codes de sortie gérés correctement en CI
- [ ] Logs sans clés ni PII
- [ ] Bac à sable et règles correspondent ou sont plus stricts que le dev interactif

## Lié

- [Mode non interactif CLI](/fr/guide/cli/non-interactive-mode/)
- [Sortie structurée](/fr/guide/developer-platform/non-interactive/structured-output/)
- [Codes de sortie et retries](/fr/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Sources de référence
- Documentation CLI OpenAI Codex
---

**Statut :** obsolète  
**Produits concernés :** CLI  
**Note de révision :** Cette page couvre `codex exec`, `--cd` et l'intégration non interactive, conformément à la documentation CLI actuelle.
**Dernière vérification :** 2026-07-26
