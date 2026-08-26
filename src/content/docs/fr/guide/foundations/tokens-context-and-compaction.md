---
title: Tokens, Contexte et compaction
description: Fenêtres de Contexte, utilisation et compaction.
locale: fr
source_locale: zh-CN
source_revision: b33848c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 100
---

Un **Token** est l'unité que les modèles utilisent pour traiter le texte. La **fenêtre de Contexte** est la quantité d'information utilisable efficacement en un tour.

Quand la conversation ou les fichiers deviennent trop volumineux, le système peut **compacter** : garder des résumés, abandonner le détail. Après compaction, l'Agent peut « oublier » des contraintes antérieures.

## Pratique

- Mettez les contraintes clés dans le message actuel ou les notes de projet — pas seulement au fond de l'ancienne conversation
- Démarrez un nouveau Fil quand le sujet change
- Théorie et tactiques : [Compaction du Contexte](/fr/guide/context/compaction/) et [Garder le Contexte ciblé](/fr/guide/context/keep-context-focused/)

Cette page est conceptuelle ; `05` explique comment les gérer.

---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
