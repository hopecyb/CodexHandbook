---
title: Qu'est-ce que Codex
description: Expliquer en langage simple ce que Codex peut faire, ce qu'il ne peut pas, et les principaux points d'entrée.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 2
---

Codex est l'**Agent de codage et de travail IA** d'OpenAI : vous lui donnez un objectif, et il combine les fichiers du projet, les outils et vos Approbations pour lire, modifier, exécuter des commands, générer des Artefacts et vous laisser inspecter les résultats.

La documentation produit officielle se trouve sur [OpenAI Codex](https://developers.openai.com/codex). Ce handbook est un guide open source communautaire pour l'apprentissage et la pratique systématiques — il **ne remplace pas** la documentation officielle d'OpenAI.

## Ce qu'il peut faire

- **Comprendre** : Résumer les informations dans les dépôts, documents, feuilles de calcul et captures d'écran
- **Créer et modifier** : Rédiger des brouillons, modifier du code, générer des pages et de la configuration
- **Exécuter** : Lancer des commands terminal, rechercher et naviguer — avec votre autorisation
- **Collaborer** : Poursuivre les Tâches entre App, CLI, IDE, Cloud et autres points d'entrée
- **Étendre** : Connecter des flux de travail répétables et des systèmes externes via Skills, Plugins, MCP, Hooks et plus (chapitres avancés à suivre)

## Ce qu'il ne peut pas faire (important)

- Il ne peut pas remplacer votre responsabilité finale sur les faits, la sécurité et les décisions métier
- Il ne peut pas garantir qu'une seule génération soit entièrement correcte ; les résultats doivent être vérifiables
- Il ne peut pas contourner le Bac à sable, le réseau ou les politiques de l'organisation sans autorisation
- Il ne doit pas être traité comme un « pipeline de publication automatique sans revue »

## Principaux points d'entrée

| Point d'entrée | Idéal pour |
|---|---|
| Application de bureau | Par défaut pour les débutants ; projets visuels, Tâches et revue de Diff |
| CLI | Utilisateurs du terminal, scripts et automatisation |
| Extension IDE | Travailler avec les fichiers ouverts et les sélections dans l'éditeur |
| Web / Cloud | Connecter des dépôts, environnements cloud et Tâches de longue durée |
| Mobile et à distance | Surveillance, Approbations et suivi léger |

Consultez la [comparaison des fonctionnalités](/guide/reference/feature-comparison/) pour un tableau côte à côte. Pour les relations entre concepts, voir la [carte des capacités](/guide/start-here/codex-capability-map/).


---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
