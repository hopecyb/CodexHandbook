---
title: Hooks
description: Ajouter contrôles, journaux et blocages à des nœuds d'exécution fixes — quand bloquer, quand seulement enregistrer.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un Hook insère automatiquement un contrôle ou un enregistrement à un moment fixe.

Il gère vérification, journalisation et interception aux nœuds du flux, pas la définition de la tâche elle-même.

## Contenu

Ce groupe traite surtout trois questions :

- Quand déclencher un Hook
- Bloquer un problème ou seulement le consigner
- Comment commencer une première configuration Hook à faible risque

## Ordre de lecture

1. [Vue d'ensemble des Hooks](/skills/hooks/hooks-overview/) : distinguer Hook, Skill et MCP
2. [Types d'événements Hook](/skills/hooks/hook-event-types/) : avant/après, début/fin de session
3. [Exemples de configuration Hook](/skills/hooks/hooks-examples/) : journal seul / blocage / contrôle léger des entrées

## Ordre de configuration

Ne commencez pas par la politique de blocage la plus stricte. Ordre plus adapté :

1. D'abord `log`
2. Puis `warn`
3. Puis `block`

Cela permet de vérifier d'abord :

- Si l'événement est bien accroché
- Le taux de faux positifs
- Si les performances ralentissent l'usage quotidien

Un Hook est une petite porte sur un nœud du flux : vérifier, consigner ou intercepter.

---

**Statut :** obsolète  
**Produits concernés :** CLI / App (selon version)  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Le support, le modèle d'événements et les points d'entrée de configuration des Hooks dépendent fortement de la version client ; au 2026-07-26 la documentation publique officielle ne permet pas de stabiliser ce groupe — marqué `outdated`.
