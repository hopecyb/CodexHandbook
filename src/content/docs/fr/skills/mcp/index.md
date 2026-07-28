---
title: MCP
description: Connecter outils et sources de données externes — quand MCP est vraiment nécessaire.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`MCP` est une voie standard pour que Codex se connecte à des outils et sources de données externes.

Si le Skill porte surtout sur « les étapes pour faire le travail », MCP gère « amener les outils externes ».

## Ce que couvre cette section

- Quand vous avez vraiment besoin de MCP
- Comment connecter des systèmes externes sans ouvrir les permissions trop largement
- Ce qu'il faut vérifier en premier quand la connexion ou les appels échouent

## Ordre recommandé

1. [Vue d'ensemble MCP](/skills/mcp/mcp-overview/) : séparer MCP de Skill et Plugin d'abord
2. [Connecter un serveur MCP](/skills/mcp/connect-an-mcp-server/) : câbler votre premier serveur par configuration
3. [Déboguer MCP](/skills/mcp/debugging-mcp/) : quand la connexion échoue, outils manquants ou permissions incorrectes

## Idées reçues courantes

### 1. MCP rend Codex « tout-puissant »

Ce qu'il peut faire dépend entièrement des outils exposés par le serveur MCP et des permissions que ces outils accordent.

### 2. MCP n'est qu'un problème d'intégration technique

Une fois qu'il touche de vrais systèmes, cela devient immédiatement :

- Un problème de permissions
- Un problème d'exposition de données
- Un problème d'audit

Cette section couvre donc non seulement « comment connecter » mais « comment ne pas connecter mal ».

MCP vaut le coup quand la tâche doit toucher de vrais systèmes hors du dépôt.

---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE  
**Base de vérification :** Cette section couvre comment Codex connecte actuellement MCP, emplacements de config et appariement des permissions ; la documentation publique officielle a un détail client limité — réécriture nécessaire pour les produits actuels.  
**Dernière vérification :** 2026-07-26
