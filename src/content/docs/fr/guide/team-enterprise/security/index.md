---
title: Sécurité
description: Risques au niveau équipe, surface d'attaque et défenses — comprendre où vit le risque avant les contrôles.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Sauter dans le détail sécurité sans cadrage peut vous laisser avec du vocabulaire mais pas « ce que nous défendons ».

Cette section se lit plus clairement comme : d'où vient le risque → quelle couche bloquer ou revoir.

## Ordre recommandé

1. [Modèle de menace](/guide/team-enterprise/security/threat-model/)
2. [Risque Plugin et MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [Injection de prompt](/guide/team-enterprise/security/prompt-injection/)

## Qui devrait commencer ici

- Équipe étendant l'usage Codex
- Vous ajoutez extensions tierces, outils externes ou règles partagées
- Vous avez besoin de risques que « soyez prudent » seul ne peut pas fixer

Les pages sécurité aident à identifier ce qui doit être contrôlé par les frontières système.

---

**Statut :** vérifié  
**Produits concernés :** Scénarios équipe / entreprise  
**Base de vérification :** La doc plugin, app et intégration OpenAI continue d'accentuer les risques des connexions externes, permissions d'actions, accès source et frontières d'approbation ; cette page est une navigation de section sécurité ordonnée modèle de menace → Plugin/MCP → injection de prompt.  
**Dernière vérification :** 2026-07-26
