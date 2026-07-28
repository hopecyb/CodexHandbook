---
title: Bases de l'Agent
description: Comment un Agent progresse vers un objectif en appelant des outils et en itérant.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **Agent** ne s'arrête pas à un tour de questions-réponses. Il : comprend l'objectif → choisit des outils → observe les résultats → ajuste l'étape suivante — jusqu'à la fin ou jusqu'à ce qu'il ait besoin de vous.

## Agent vs chat ordinaire

| | Chat ordinaire | Agent |
|---|---|---|
| Sortie | Surtout des suggestions textuelles | Peut lire/écrire des fichiers, exécuter des commands, modifier le dépôt |
| Processus | Une réponse | Plusieurs appels d'outils |
| Risque | Conseils trompeurs | Peut aussi casser des fichiers ou exécuter des commands dangereuses |
| Votre rôle | Lire | Définir les limites, approuver, accepter |

## Concepts liés

- Skill / Plugin / MCP : étendent **ce qu'il peut faire** et **à quoi il se connecte** — chapitres avancés à suivre ; voir la [carte des capacités](/guide/start-here/codex-capability-map/) pour les différences
- Approbation humaine : voir [Permissions et Approbations](/guide/foundations/permissions-and-approvals/)


---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
