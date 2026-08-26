---
title: Mode non interactif
description: Intégrez codex exec aux scripts et aux pipelines de CI, aux tâches planifiées et à l'automatisation.
locale: fr
source_locale: zh-CN
source_revision: a1cefbe
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Le mode non interactif permet à Codex d'accomplir une tâche **sans conversation dans un TTY**. C'est le point d'entrée destiné aux développeurs qui souhaitent intégrer un Agent à des scripts ou à la CI.

Au lieu d'échanger plusieurs messages, vous fournissez la tâche complète à une exécution unique, semblable à une commande.

## Contenu de cette page

- Quand préférer une exécution non interactive à une session `codex` interactive.
- Quelles précautions supplémentaires prendre pour la sécurité et les approbations sans surveillance.
- Comment ce mode s'articule avec la [configuration](/fr/guide/cli/configuration/).

## Tâches adaptées

| Adapté | Inadapté |
|---|---|
| Prompt de revue fixe dans la CI | Exigences nécessitant plusieurs échanges de clarification |
| Vérification nocturne des liens de documentation | Refactoring exploratoire |
| Génération de code à partir d'un modèle prédéfini | Décisions produit ambiguës |

## Modèle d'exécution

Une exécution non interactive :

1. reçoit une **description complète de la tâche** dans les arguments ou sur stdin ;
2. s'exécute dans un répertoire de travail défini ;
3. indique la réussite ou l'échec du processus par un code de sortie ;
4. produit des journaux ou une sortie structurée destinée aux étapes suivantes.

Le point d'entrée actuel est `codex exec`. Après toute mise à jour, relancez `codex exec --help` pour vérifier chaque option employée par vos scripts.

## Exemple minimal fonctionnel

```bash
# Run one read-only review at the repository root
codex exec --cd . "List security risks in the diff against main; do not modify files"
```

Par défaut, `codex exec` utilise un bac à sable en lecture seule. La progression est écrite sur `stderr`, tandis que la réponse finale de l'Agent est envoyée sur `stdout`. Vous pouvez donc rediriger uniquement le résultat final :

```bash
codex exec --cd . "Write release notes for the last 10 commits" > release-notes.md
```

Conseils pratiques :

- Dans un script shell, placez-vous d'abord avec `cd` dans un worktree propre.
- Placez la tâche dans un heredoc ou dans un fichier versionné sous `prompts/`.
- Récupérez le code de sortie et faites échouer la CI si le processus échoue.

## Concevoir la sécurité

Une exécution sans surveillance signifie que **vous n'êtes pas présent pour refuser une action** :

| Principe | Mise en oeuvre |
|---|---|
| Moindre privilège | Token en lecture seule et bac à sable restreint |
| Aucun push | La CI ouvre une PR ou téléverse un artefact |
| Prompt fixe | Ne concaténez pas directement du texte de PR non assaini dans le prompt |
| Audit | Conservez les journaux et les artefacts de diff |

Consultez les [modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/) et la section `08-developer-platform/non-interactive/` de la feuille de route.

## Comparaison avec le mode interactif

| | Interactif | Non interactif |
|---|---|---|
| Point d'entrée | TUI `codex` | `exec` / pipeline |
| Humain dans la boucle | Fort | Faible ; à concevoir à l'avance |
| Adapté à l'apprentissage | Oui | Non |
| Adapté à la CI | Non | Oui |

Consultez le [mode interactif de la CLI](/fr/guide/cli/interactive-mode/).

## Convertir une tâche interactive

Ne collez pas l'historique complet d'une conversation dans un script. Condensez-le en une petite spécification :

| Élément | Contenu à préciser |
|---|---|
| Objectif | Le résultat unique attendu |
| Entrées | Fichiers, diff, journaux ou stdin à lire |
| Interdictions | Pas de modification, d'accès Internet, de push ni d'interruption de la CI |
| Sortie | Résumé texte, JSON, fichier de rapport ou code de sortie |
| Acceptation | Commandes qui doivent réussir et chaînes qui ne doivent pas apparaître |

Un prompt non interactif doit se lire comme un ordre de travail : limites claires, entrées complètes et conditions d'échec explicites. Conservez en mode interactif les tâches qui exigent encore une décision produit, un arbitrage de conception ou une autorisation.

## Idées reçues courantes

### 1. Ce mode est plus efficace : faut-il donc l'apprendre en premier ?

Non. Il s'exécute rapidement et laisse peu de place aux clarifications.

### 2. Quelle est la principale différence ?

- **Interactif :** vous pouvez interroger, ajuster et approuver pendant l'exécution.
- **Non interactif :** une spécification prédéfinie est exécutée en une fois.

### 3. Quand faut-il l'éviter ?

Attendez si vous :

- apprenez encore à rédiger une tâche ;
- ne savez pas encore comment accepter le résultat ;
- ne maîtrisez pas les notions de base sur les approbations, le bac à sable et les autorisations.

Utilisez le mode non interactif pour automatiser des flux interactifs que vous connaissez déjà.

## Erreurs courantes

- Copier tout l'historique d'une session interactive dans un seul appel `exec`.
- Donner à la CI des identifiants de production et des droits d'écriture.
- Ne pas fixer la version de la CLI, au risque de modifier soudainement le comportement du pipeline.

## Référence

- Documentation OpenAI de Codex CLI

---

**Statut :** verified

**Produit concerné :** CLI

**Base de vérification :** comparaison avec la documentation actuelle du mode non interactif concernant `codex exec`, `--cd`, le bac à sable en lecture seule par défaut, la progression sur `stderr` et la réponse finale sur `stdout`.

**Dernière vérification :** 2026-08-26
