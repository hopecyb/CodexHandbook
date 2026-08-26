---
title: "Mode non interactif"
description: Jobs par lot, scripts et pipelines — comprendre quelles tâches conviennent d'abord, puis les commandes et le design de sortie.
locale: fr
source_locale: zh-CN
source_revision: e226a62
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Beaucoup entendent d'abord « mode non interactif » et pensent « Codex sans chat ».

Le mode non interactif sert à mettre Codex dans des scripts, CI ou jobs par lot pour qu'une commande complète une tâche stable.

## Ordre recommandé

1. [codex exec](/fr/guide/developer-platform/non-interactive/codex-exec/)
2. [Scripts et pipelines](/fr/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [Sortie structurée](/fr/guide/developer-platform/non-interactive/structured-output/)
4. [Codes de sortie et retries](/fr/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Ce que cette section résout

- Transformer une tâche en étape CLI
- Laisser la CI juger succès, échec et retry
- Rendre la sortie facile pour les scripts en aval

Cela convient quand les scripts et pipelines ont besoin d'un handoff stable — pas d'un chat aller-retour.

---

**Statut :** vérifié  
**Produits concernés :** CLI / API / Cloud  
**Base de vérification :** Recoupement avec la structure actuelle de la sous-section non interactif et les liens d'entrée dans ce dépôt ; cette page ne regroupe que « le mode non interactif convient aux scripts, batch et pipelines » sans promettre des flags de commande spécifiques.  
**Dernière vérification :** 2026-07-26
