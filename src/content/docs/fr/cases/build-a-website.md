---
title: Créer un site web
description: Cas de prototypage d'une page prévisualisable localement, des besoins au rendu.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Créer un site web

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Créateurs / Développeurs |
| Client | App / IDE |
| Durée estimée | 2–4 heures |

## 1. Objectif et contexte

**Objectif :** Créer une page statique ou un petit site prévisualisable localement à partir d'un besoin simple.

**Critères de succès :** Ouverture dans le navigateur, style conforme à la description, aucune modification de fichier non pertinente.

## 2. Prompt recommandé

```text
Objectif : créer une page d'atterrissage pour [produit/événement], avec titre, trois fonctionnalités et un bouton CTA.
Technologie : HTML + CSS (ou le framework existant du projet), adapté au mobile.
Contraintes : ne modifier que les fichiers de page sous src/ ; ne pas introduire de nouvelles dépendances sans mon approbation.
Acceptation : pnpm dev permet la prévisualisation ; capture d'écran des blocs principaux.
Proposez d'abord un plan fil de fer, attendez ma confirmation avant d'écrire le code.
```

## 3. Vérification

- Prévisualiser localement à chaque point de rupture
- Vérifier qu'aucune configuration ou fichier de verrouillage n'a été modifié par erreur

## 4. Voir aussi

- [Modèle de création](/prompts/templates/create/)
- [Travail centré sur les livrables](/cases/workflows/artifact-first-work/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Get from idea to proof of concept », « Build responsive front-end designs » et « Deploy an app or website » ; cet exemple se limite à un prototype de site ou de page d'atterrissage, avec fil de fer d'abord, périmètre de modification restreint et validation par prévisualisation navigateur.
