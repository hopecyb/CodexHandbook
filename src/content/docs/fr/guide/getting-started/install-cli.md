---
title: Installer la CLI
description: Installer Codex CLI, vérifier sa version et son état de connexion, puis exécuter une première tâche dans un dépôt.
locale: fr
source_locale: zh-CN
source_revision: b12f7d0
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Codex CLI regroupe l'exploration, la modification, les tests et la révision dans le terminal. La page d'installation officielle propose des options pour macOS/Linux, Windows, npm et Homebrew. Choisissez celle qui correspond à votre système d'exploitation et à votre méthode de gestion des paquets.

## Programme d'installation autonome officiel pour macOS et Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Relancez ce même programme d'installation officiel pour mettre la CLI à jour. Les utilisateurs de Windows, npm et Homebrew doivent sélectionner l'onglet correspondant sur la [page officielle de Codex CLI](https://learn.chatgpt.com/docs/codex/cli) ; n'appliquez pas la commande macOS/Linux à tous les systèmes.

## Vérifications après l'installation

Ouvrez un nouveau terminal et exécutez ces commandes dans un dépôt d'entraînement :

```bash
codex --version
codex login status
```

Si vous n'êtes pas connecté :

```bash
codex login
```

Après l'autorisation dans le navigateur, démarrez une session interactive depuis le dépôt :

```bash
codex
```

La première tâche doit rester en lecture seule :

```text
Ne modifie encore aucun fichier. Explique comment ce projet est installé, testé et compilé,
et indique les chemins des fichiers utilisés comme preuves.
```

## Résoudre les problèmes dans l'ordre

1. Si `codex --version` est introuvable, rouvrez le terminal et examinez la variable `PATH` du shell actif.
2. Si la commande s'exécute mais pas Codex, utilisez `codex login status` pour distinguer un problème d'installation d'un problème d'authentification.
3. Si la mauvaise identité est active, exécutez `codex logout`, puis reconnectez-vous.
4. Si un environnement d'entreprise refuse l'accès, vérifiez l'espace de travail, la méthode de connexion et les paramètres gérés. Ne contournez pas la politique avec des identifiants personnels.

Ne collez jamais une clé API dans l'historique du shell, un ticket ou une conversation. Pour vous connecter avec une clé API, utilisez la méthode par entrée standard décrite dans [Connexion et authentification](/fr/guide/getting-started/sign-in-and-authentication/).

Poursuivez avec le [Mode interactif de la CLI](/fr/guide/cli/interactive-mode/). Pour les autres échecs, consultez le [Dépannage de la CLI](/fr/guide/cli/troubleshooting/).

---

**Statut :** vérifié

**Produits concernés :** CLI

**Base de vérification :** comparaison avec le guide de démarrage rapide et la documentation d'authentification actuels de Codex CLI, notamment le programme d'installation officiel pour macOS/Linux, le démarrage avec `codex`, la connexion avec ChatGPT et la commande d'état. Les autres méthodes d'installation renvoient vers les onglets officiels à jour.

**Dernière vérification :** 2026-08-26
