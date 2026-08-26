---
title: Installation et mises à jour CLI
description: Installer, mettre à jour et confirmer votre version.
locale: fr
source_locale: zh-CN
source_revision: 6b8ceaf
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

La première installation de la CLI soulève souvent trois questions :

- L'installation a-t-elle vraiment réussi ?
- Pourquoi le terminal ne reconnaît-il toujours pas `codex` ?
- Après une mise à jour, quelle version est réellement utilisée ?

L'installation est terminée lorsque le terminal actuel trouve la commande de manière fiable, pas seulement lorsqu'un installateur s'est exécuté une fois.

## Vérifier au moins trois points

1. La commande s'exécute directement.
2. Le terminal actuel la trouve via `PATH`.
3. L'authentification est terminée, et pas seulement le téléchargement de l'exécutable.

## Idées reçues courantes

### 1. Un installateur terminé signifie que tout est terminé

Cela signifie seulement que les étapes d'installation ont été exécutées. Vérifiez ensuite que le terminal actuel reconnaît la commande.

### 2. Ouvrir un nouveau terminal règle toujours le problème

Parfois, mais pas toujours. Si `PATH` n'a pas été mis à jour, une nouvelle fenêtre peut encore ne pas trouver l'exécutable.

### 3. Mettre à jour signifie réinstaller sans vérifier

Commencez par déterminer :

- si la version actuelle est ancienne ;
- quelle installation vous êtes réellement en train de mettre à jour.

## Vérifier dans cet ordre

Après l'installation :

1. Confirmez que `codex` s'exécute directement.
2. Confirmez que le `PATH` du shell actuel contient son emplacement d'installation.
3. Terminez la connexion ou l'authentification.
4. Confirmez les informations de version.

Le critère pratique est que ce terminal trouve la commande et que l'authentification réussisse.

Voir aussi [Installer la CLI](/fr/guide/getting-started/install-cli/). Les instructions actuelles d'installation et de mise à jour figurent dans [Codex CLI](https://learn.chatgpt.com/docs/codex/cli). L'installateur autonome officiel pour macOS/Linux utilise la même commande pour l'installation et les mises à jour ; utilisez l'onglet correspondant pour Windows, npm ou Homebrew.

---

**Statut :** vérifié

**Produits concernés :** CLI

**Base de vérification :** Comparaison avec le guide CLI actuel pour les points d'entrée macOS/Linux, Windows, npm et Homebrew, les mises à jour et la connexion Codex. Les commandes exactes sont maintenues sur la page d'installation pour débutants.

**Dernière vérification :** 2026-08-26

---

**Statut :** revue  
**Produits concernés :** CLI  
**Dernière vérification :** 2026-07-25
