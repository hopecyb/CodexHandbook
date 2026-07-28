---
title: Plugins
description: Distribution d'extensions en équipe — les Plugins sont une couche de packaging, pas un nouveau type de capacité.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les Plugins résolvent surtout comment livrer et gérer un ensemble d'extensions pour que d'autres les installent.

Ils portent sur :

- Packaging
- Distribution
- Mises à niveau
- Gouvernance des permissions

Ce n'est pas un nouveau type de capacité distinct.

## Quand cette section s'applique

Principalement deux situations :

- Vous allez livrer un pack d'extensions à toute l'équipe
- Vous voulez juger si un Plugin vaut l'installation

Pour l'apprentissage personnel, une page de vue d'ensemble suffit souvent.

## Entrée dans cette section

- [Vue d'ensemble des Plugins](/skills/plugins/plugins-overview/) : comment Plugin se relie à Skill et MCP, et pourquoi c'est une couche de distribution

## Idées reçues courantes

### 1. Installer un Plugin est automatiquement sûr

Un Plugin ne rend les capacités plus faciles à distribuer — pas implicitement fiables ou à faible permission.

### 2. Plus de fonctionnalités signifie qu'il vaut l'installation

Mieux vaut vérifier d'abord :

- La source est fiable ?
- Quelle est l'ampleur des permissions ?
- L'équipe peut mettre à niveau, rollback et auditer ?

Un Plugin est un pack de distribution d'extensions — pas un remplacement de Skill ou MCP.

---

**Statut :** obsolète  
**Produits concernés :** App / CLI  
**Base de vérification :** Catalogue Plugin, politique d'installation et support des surfaces évoluent encore ; cette section fixe ces détails trop rigidement — marqué `outdated` en attendant réécriture pour le catalogue Plugin actuel.  
**Dernière vérification :** 2026-07-26
