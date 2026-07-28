---
title: Créer une présentation
description: Cas de génération d'une présentation démontrable, du plan au livrable.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Créer une présentation

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Créateurs |
| Client | App |
| Durée estimée | 1–2 heures |

## 1. Objectif et contexte

**Objectif :** Générer une présentation structurée selon le thème (Markdown/HTML/PPT, selon les capacités de l'environnement).

**Critères de succès :** Le nombre de diapositives correspond au plan, chaque page est explicable, aucune donnée inventée.

## 2. Prompt recommandé

```text
Thème : [sujet de la présentation]
Public : [profil de l'audience]
Durée : [nombre de minutes]
Proposez d'abord les chapitres et le titre de chaque diapositive + 3 points clés, sans générer le fichier final.
Après confirmation, sortie dans le répertoire slides/, format : [mdx/html/pptx].
Contraintes : les données doivent indiquer la source ou être marquées « exemple » ; pas de requêtes réseau sans approbation.
```

## 3. Vérification

- Lire chaque diapositive pour vérifier qu'elle tient en une minute
- Vérifier les sources des graphiques et des chiffres

## 4. Voir aussi

- [Capacités de présentation](/guide/files-and-artifacts/presentations/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Generate slide decks », décrit comme la manipulation de fichiers pptx avec génération d'images ; ce contenu reste au niveau du flux stable « plan d'abord, sortie selon l'environnement, chiffres avec source ou marqués exemple ».
