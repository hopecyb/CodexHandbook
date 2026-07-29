---
title: IA et modèles de langage
description: Comprendre comment les modèles de langage génèrent des réponses à partir du Contexte.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Les modèles de langage **prédisent une sortie plausible suivante** à partir du texte, des fichiers et des résultats d'outils que vous fournissez. Ils sont forts sur les motifs, les brouillons et le Raisonnement de type recherche, mais ils ne « connaissent » pas intrinsèquement les secrets absents de votre machine, et ils ne garantissent pas que les faits sont toujours corrects.

## Ce que cela signifie pour vous

- **La qualité de l'entrée fixe le plafond** : des objectifs vagues mènent à la dérive
- **Le Contexte est limité** : les longs historiques sont compactés ou tronqués — voir [Tokens, Contexte et compaction](/guide/foundations/tokens-context-and-compaction/)
- **Vous devez vérifier** : surtout les chiffres, textes juridiques, sécurité et tout ce qui est publié à l'extérieur

## Comment cela diffère d'un moteur de recherche

Les moteurs de recherche renvoient surtout des pages web existantes ; Codex est plus proche d'**appeler des outils et générer des changements exécutables** sous votre objectif. Les deux exigent que vous jugiez la fiabilité.

---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
