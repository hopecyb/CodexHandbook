---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE"
  basis: "Comparé aux listes officielles actuelles des commandes slash de l’application de bureau et des commandes de développement. Les commandes disponibles diffèrent selon l’interface ; la liste de complétion du composer reste la référence pour leur disponibilité."
  checkedAt: "2026-08-26"
title: Commandes slash et raccourcis
description: Repères rapides sur les commandes `/` et l’invocation des Skills avec `$` ; ce n’est pas un manuel complet des paramètres.
locale: fr
source_locale: zh-CN
source_revision: a34c90f
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 40
---

La première fois qu’on voit des commandes slash, on peut croire qu’il faut mémoriser tout un jargon. Il est plus simple de les considérer comme des raccourcis que l’on choisit explicitement.

Elles servent généralement à entrer rapidement dans un mode ou un processus intégré. Les commandes slash (`/command`) et l’invocation d’un [Skill](/fr/skills/overview/) avec `$name` sont liées, mais ce n’est pas la même chose. La liste précise **varie selon le produit et les droits d’accès** ; elle diffère entre l’application de bureau, la CLI, l’IDE et ChatGPT Web. Avant de les utiliser, consultez la complétion de `/` dans le composer actuel et la documentation officielle.

## Distinguer les points d’entrée

| Point d’entrée | Qui le déclenche | Usage habituel |
|---|---|---|
| Commande slash telle que `/review` | Vous saisissez `/` | Processus intégré ou configuré |
| `$skill-name` | Vous ou le modèle | Skill du projet ou de l’utilisateur |
| Langage naturel | Vous | Tâche générale |

## Les distinguer directement

- `/commande` : vous choisissez explicitement un raccourci dans la conversation.
- `$skill` : vous ou le modèle nommez un Skill à utiliser.
- Langage naturel : vous décrivez le besoin et laissez le modèle décider comment procéder.

Si vous connaissez déjà le processus à lancer, essayer une `/commande` est plus direct.

## De quoi s’agit-il ?

- Ce n’est pas une commande de terminal.
- Ce n’est pas un jargon mystérieux.
- C’est un point d’entrée textuel comparable à un bouton de raccourci dans l’interface de conversation.

Ces commandes sont utiles lorsque :

- vous savez déjà quel processus vous voulez lancer ;
- vous ne voulez pas reformuler chaque fois la même intention.

## Idées reçues courantes

### 1. Les commandes slash sont des commandes de terminal

Ce sont des raccourcis de l’interface de conversation, et non des commandes `codex ...` à exécuter dans un shell.

### 2. La liste des commandes slash ne change jamais

Les commandes disponibles peuvent varier selon le produit, la version et l’environnement. La **liste de complétion** de l’environnement actuel est plus fiable.

### 3. Une commande slash évite les approbations et le bac à sable

Si le processus sous-jacent écrit un fichier, exécute une commande ou accède au réseau, la politique en vigueur s’applique toujours.

### 4. Sans connaître les commandes slash, on ne peut pas bien utiliser Codex

Le langage naturel suffit à la plupart des tâches. Les commandes slash servent surtout à gagner du temps une fois que vous connaissez les processus proposés.

## Points d’entrée courants actuellement

### Application de bureau / IDE

- `/plan` : passer en mode de planification à plusieurs étapes.
- `/review` : examiner les modifications non validées ou comparer avec une branche de référence.
- `/status` : voir l’identifiant de la conversation, l’utilisation du contexte et les limites d’utilisation.
- `/mcp` : consulter l’état des connexions MCP.
- `/init` : créer une structure initiale `AGENTS.md` pour le projet actuel.

### Contrôles de session propres à la CLI

- `/permissions` : ajuster le mode d’autorisation de la session en cours.
- `/agent` : examiner les fils d’Agent ou passer de l’un à l’autre.
- `/model` : choisir le modèle actuel.
- `/status` : vérifier les paramètres de la session en cours.

ChatGPT Web possède son propre menu de commandes dans le composer. Ne supposez pas que les commandes de l’application de bureau ou de la CLI y sont disponibles sous le même nom.

## Points à retenir lors de l’utilisation

1. **Saisissez d’abord `/`** pour voir ce que l’environnement actuel prend en charge, plutôt que de mémoriser une liste périmée.
2. Pour un processus d’équipe récurrent, privilégiez un **Skill accompagné de documentation**, afin qu’il ne dépende pas de la connaissance d’un nom de commande par quelques habitués.
3. Les écritures déclenchées par une commande slash restent soumises au bac à sable et aux approbations.

## Essayer directement

Vous pouvez procéder ainsi :

1. Saisissez `/`.
2. Regardez les commandes disponibles dans l’environnement actuel.
3. Choisissez-en une dont le nom et l’objectif sont clairs pour vous.

## Un premier exercice

Pour un premier essai, suivez cet ordre :

1. Saisissez `/` pour voir ce que propose l’environnement actuel.
2. Essayez une commande dont vous comprenez l’objectif.
3. Observez si elle change de mode ou lance un processus.
4. Si l’équipe doit réutiliser ce processus durablement, envisagez d’en faire un Skill.

La répartition des rôles devient ainsi plus nette : les commandes slash offrent un accès rapide, tandis que les Skills conservent des processus réutilisables.

## Différence avec les commandes CLI

| | `/` dans la conversation | `codex …` dans le terminal |
|---|---|---|
| Contexte | Session actuelle et fichiers joints | Répertoire choisi avec `--cd` / `-C` |
| Usage adapté | Exploration interactive | Scripts et CI |

Considérez les commandes slash comme des raccourcis de conversation. Vérifier ce que propose effectivement l’environnement actuel est plus utile que d’en mémoriser les noms.

Pour les sous-commandes CLI, consultez le [mode interactif de la CLI](/fr/guide/cli/interactive-mode/) et le [mode non interactif](/fr/guide/cli/non-interactive-mode/). La liste complète des paramètres se trouve dans la [référence des commandes CLI](/fr/guide/reference/commands/).
