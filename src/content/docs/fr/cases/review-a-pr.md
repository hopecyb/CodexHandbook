---
title: Examiner une PR
description: Utiliser Codex pour une revue structurée du diff avant la fusion.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Examiner une PR

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Développeurs / Équipes |
| Client | CLI / IDE / Cloud |
| Durée estimée | 20–40 minutes |

## 1. Objectif et contexte

**Objectif :** Détecter avant la fusion l'extension de périmètre, les risques de sécurité et les lacunes de tests.

**Critères de succès :** La sortie de la revue est traçable jusqu'à des fichiers/lignes précis ; les P0 sont traités ou bloquent la fusion.

## 2. Prompt recommandé

```text
Comparez le diff de la branche actuelle avec main (ne modifiez pas encore le code) :
1. Dépasse-t-il le périmètre de l'issue ?
2. Y a-t-il des risques de sécurité évidents (clés, injection, permissions) ?
3. Manque-t-il des tests ou de la documentation ?
Produisez une checklist, marquez P0/P1, avec les chemins de fichiers.
```

## 3. Capitalisation d'équipe

- Utiliser le Skill [`$pr-review`](/skills/examples/review-skill/)
- Intégration CI : voir [Automatisation de la revue de code](/guide/developer-platform/ci-cd/code-review-automation/)

## 4. Voir aussi

- [Modèle de revue](/prompts/templates/review/)
- [Revue avant fusion](/cases/workflows/review-before-merge/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Review GitHub pull requests », en mettant l'accent sur la détection des régressions et des problèmes potentiels avant la revue humaine ; cet exemple ne demande qu'une revue structurée du diff avec P0/P1 et chemins de fichiers, sans dépendre d'une interface ou d'une commande fixe.
