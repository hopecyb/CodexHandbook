---
title: Modèle de cas
description: Structure unifiée pour rédiger et rétrospecter des cas Codex — faciliter la capitalisation et la comparaison en équipe.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Copiez ce modèle pour créer une nouvelle page de cas ou un document de rétrospective interne.

Avant de copier, supprimez les sections inutiles selon le public réel et le livrable.

---

## Métadonnées

| Champ | À remplir |
|---|---|
| Titre du cas | |
| Public visé | Débutants / Développeurs / Créateurs / Équipes |
| Client utilisé | App / CLI / IDE / Cloud |
| Durée estimée | |
| Date de vérification | AAAA-MM-JJ |

## 1. Objectif et contexte

- **Objectif métier :** une phrase
- **Critères de succès :** observables et vérifiables
- **Hors périmètre :** exclusions explicites

## 2. Préparation

- État du compte/permissions/dépôt
- Fichiers de contexte nécessaires (`AGENTS.md`, maquettes, etc.)
- Risques : données, production, clés

## 3. Flux de travail (EPXV)

### Explorer

- Prompt d'entrée (résumé)
- Découvertes clés

### Planifier

- Liste des étapes
- Points de confirmation humaine

### Exécuter

- Portée réelle des modifications
- Écarts par rapport au plan et raisons

### Vérifier

- Tests automatiques
- Contrôles humains
- Preuves (captures, journaux, liens)

## 4. Échec et reprise

- Problèmes rencontrés
- Comment annuler ou corriger
- Ce que vous changeriez au prompt/à la configuration si c'était à refaire

## 5. Capitalisation

- Écriture dans `AGENTS.md` / Skill / Automation
- 3 conseils pour l'équipe

## 6. Sources de référence
- Liens vers la documentation officielle
- Si le cas s'inspire d'un tutoriel externe (type de tâche uniquement)
---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les flux EPXV vérifiés du manuel, la reprise après échec, les instructions de projet et la structure de la bibliothèque de cas ; cette page fournit uniquement un modèle de structure pour rédiger et rétrospecter des cas, sans déclarer de comportement produit spécifique.
