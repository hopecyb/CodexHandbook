---
legacyVerification:
  status: verified
  products: CLI
  basis: La documentation actuelle d'introduction du centre d'aide OpenAI présente toujours Codex CLI comme l'entrée par terminal et distingue l'utilisation interactive des flux de travail plus automatisés. Cette page sert seulement de navigation dans le chapitre CLI et présente les modes interactif et non interactif sans dépendre de paramètres ou commandes d'installation précis.
  checkedAt: '2026-07-26'
title: CLI
description: Introduction pratique à l'utilisation de Codex en ligne de commande.
locale: fr
source_locale: zh-CN
source_revision: 53f6387
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 11
---

La CLI convient aux personnes qui utilisent le terminal, ainsi qu'à l'intégration avec des scripts et la CI.

Si le terme « CLI » vous est nouveau, voyez-la comme un moyen de travailler avec Codex directement dans le terminal, sans interface graphique.

Elle est particulièrement adaptée :

- Aux personnes habituées à la ligne de commande
- Aux personnes souhaitant utiliser Codex avec des scripts
- Aux équipes ayant besoin de CI ou d'automatisation

Si vous débutez totalement avec le terminal, la CLI ne doit pas forcément être votre premier choix. En revanche, si vous connaissez déjà les commandes de base comme `cd` et `ls` et savez lancer une commande dans le dossier d'un projet, elle peut être très efficace.

- [Installation et mises à jour](/fr/guide/cli/installation-and-updates/)
- [Mode interactif](/fr/guide/cli/interactive-mode/)
- [Mode non interactif](/fr/guide/cli/non-interactive-mode/)
- [Configuration de la CLI](/fr/guide/cli/configuration/)
- [Commandes et raccourcis](/fr/guide/cli/commands-and-shortcuts/)
- [Approbations et bac à sable](/fr/guide/cli/approvals-and-sandbox/)
- [Dépannage](/fr/guide/cli/troubleshooting/)

Pour la liste complète, voir la [référence des commandes CLI](/fr/guide/reference/commands/).

## Distinguer d'abord les deux modes

Pour commencer, retenez ces deux modes :

1. **Mode interactif** : discuter directement avec Codex dans le terminal.
2. **Mode non interactif** : utiliser Codex comme une commande dans un script ou une CI.

Pour un premier essai, le mode interactif est généralement plus simple. Vous pourrez aborder le mode non interactif quand vous aurez besoin d'automatisation.
