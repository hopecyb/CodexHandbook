---
title: Référence des commandes CLI
description: Index des principales commandes et options de Codex CLI, en complément de la documentation officielle.
locale: fr
source_locale: zh-CN
source_revision: 6091bcc
translation_status: draft
translated_at: 2026-09-20
---

Cette référence sert surtout à choisir un point d'entrée, sans apprendre tous les paramètres par cœur :

> **Dois-je ouvrir une session interactive ou lancer une commande ponctuelle ?**

Cette page recense les points d'entrée actuellement **Stable** de Codex CLI pour faciliter la recherche et la comparaison. Avant de les utiliser, exécutez `codex --help` et le `--help` de chaque sous-commande. La liste complète des paramètres et de leur niveau de maturité figure dans les [Developer commands](https://learn.chatgpt.com/docs/developer-commands).

## Quand utiliser cette page

- Pour choisir entre une session interactive et une commande ponctuelle.
- Pour déterminer si la tâche se prête à une conversation ou à un script.
- Quand vous savez que le CLI convient, mais hésitez sur la commande.

## Choisir un point d'entrée

- Pour discuter et intervenir au fil du travail : `codex`.
- Pour confier une tâche unique et récupérer le résultat à la fin : `codex exec`.

Cette distinction répond déjà à la plupart des questions des personnes qui débutent avec le CLI.

## Aperçu des commandes Stable

| Commande | Usage | Détails |
|---|---|---|
| `codex` | Session TUI interactive | [Mode interactif](/fr/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | Tâche non interactive, ponctuelle ou en pipeline | [Mode non interactif](/fr/guide/cli/non-interactive-mode/) |
| `codex doctor` | Rapport de diagnostic sur l'installation, la configuration, l'authentification, l'environnement d'exécution, Git et le terminal | [Dépannage du CLI](/fr/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | Gestion de l'authentification | [Connexion et authentification](/fr/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | Reprise ou bifurcation d'une session enregistrée | [Transfert et reprise](/fr/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | Gestion des serveurs MCP | [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Installation, liste et suppression des Plugins | [Plugins](/fr/skills/plugins/) |

:::caution[Niveaux de maturité différents]
La référence officielle contient aussi des commandes Experimental, Beta et Deprecated. Cette liste de base ne les mélange pas aux commandes Stable ; vérifiez leur maturité et leurs risques avant de les employer.
:::

## Idées reçues

### 1. Inutile de mémoriser toutes les commandes

Repérez d'abord la catégorie adaptée à votre tâche, puis consultez `--help` pour les options nécessaires.

### 2. `codex exec` n'est pas une version avancée de `codex`

Il vise plutôt les scripts, la CI et les exécutions sans surveillance ; il ne s'agit pas d'un mode interactif plus puissant.

### 3. Voir une option ne signifie pas qu'il faut l'activer

De nombreuses options dépendent de la version, de l'environnement et de la politique de sécurité. Comprenez leur effet avant de les choisir.

### 4. Une référence de commandes n'est pas un tutoriel

Elle fournit :

- une carte des points d'entrée ;
- un index des paramètres ;
- des liens vers les pages plus détaillées.

## Mode interactif : principe

```bash
# Démarrer une session interactive à la racine du dépôt (exemple)
codex

# Actions courantes dans la session (selon la TUI)
# - Saisir la description de la tâche
# - Utiliser les commandes / : voir la page slash-commands
# - Approuver les demandes d'exécution shell ou d'écriture de fichiers
```

Voir la [référence des commandes slash](/fr/guide/reference/slash-commands/).

## Choisir la commande

Pour débuter avec le CLI :

1. Lancez `codex --help`.
2. Choisissez entre le mode interactif et `exec`.
3. Consultez le `--help` de la sous-commande retenue.

Vous éviterez ainsi de vous perdre immédiatement dans la liste complète des options.

## Démarrage rapide

1. Lancez `codex --help`.
2. Pour discuter pendant le travail, lancez `codex`.
3. Pour la CI ou les scripts, étudiez `codex exec`.

## `exec` non interactif : principe

```bash
# Répertoire de travail et instruction ponctuelle (exemple)
codex exec --cd /path/to/repo "Description complète de votre tâche"

# Options courantes
# --cd, -C       répertoire de travail
# --model        modèle choisi
# --sandbox      politique de bac à sable
# --ask-for-approval, -a  politique d'approbation
# Entrée standard  instruction lue depuis un fichier ou une autre commande
```

Sécurité : [modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/).

## Configuration et authentification : principe

| Action | Précision |
|---|---|
| Se connecter | Voir [Connexion et authentification](/fr/guide/getting-started/sign-in-and-authentication/) |
| Fichiers de configuration | Niveaux utilisateur et projet : [Référence de configuration](/fr/guide/reference/configuration-reference/) |
| MCP | [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/) |

## Codes de sortie et automatisation

Le mode non interactif communique généralement le résultat à la CI par son **code de sortie** :

- `0` : tâche accomplie selon les critères convenus ;
- code différent de `0` : échec ou intervention humaine nécessaire ; consultez les journaux.

Les pages de commandes CLI servent à choisir une entrée et à comprendre son usage, sans apprendre tous les paramètres par cœur.

Dans la CI, conservez stderr et les journaux pour [diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/).

## Commandes terminal et commandes slash dans la session

| | Terminal `codex` | `/` dans une session |
|---|---|---|
| Documentation | Cette page et le guide produit | [Commandes slash](/fr/guide/reference/slash-commands/) |
| Usage adapté | Scripts et CI | Exploration interactive |

## Dépannage

| Problème | Consulter |
|---|---|
| Commande introuvable | [Installer le CLI](/fr/guide/getting-started/install-cli/) |
| Configuration non appliquée | [Configuration du CLI](/fr/guide/cli/configuration/) |
| Approbation bloquant la CI | Préciser l'instruction et utiliser un bac à sable en lecture seule |

[Dépannage du CLI](/fr/guide/cli/troubleshooting/)
