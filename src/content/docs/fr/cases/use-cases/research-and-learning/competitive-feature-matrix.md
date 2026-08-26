---
title: "Cas : matrice comparative de fonctionnalités"
description: Recherche sourcée et livrable tabulaire — flux de travail réutilisable même pour les lecteurs non techniques.
locale: fr
source_locale: zh-CN
source_revision: d90f5f1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Produit, opérations, chercheurs |
| Client | App ou CLI |
| Durée estimée | 45 minutes |
| Date de vérification | 2026-07-25 |

## 1. Objectif et contexte

**Objectif :** Produire un tableau comparatif de 3–5 concurrents (fonctionnalités, indices tarifaires, cas d'usage), chaque conclusion avec source.

**Critères de succès :**

- Tableau Markdown + annotations « à confirmer »
- Pas de prix ou numéros de version inventés
- Pas de secrets internes dans la documentation externe

## 2. Préparation

- Dimensions de comparaison explicites (dans le prompt ou `@brief.md`)
- Activer la [recherche web](/fr/guide/tools/web-search/) (si le produit le prend en charge)

## 3. Flux de travail

Suivre [Recherche avec sources](/fr/cases/workflows/research-with-sources/) :

```text
Comparer la fonctionnalité « collaboration d'équipe » chez A/B/C :
pour chaque dimension, 1–2 phrases + URL source ;
documentation officielle prioritaire sur les blogs ;
si le prix ne peut pas être vérifié, marquer « à confirmer » ;
sortie en tableau markdown, ne pas modifier d'autres fichiers du dépôt.
```

**Vérification :** ouvrir manuellement 3 URL ; vérifier les dates et la [politique de vérification](/fr/guide/start-here/handbook-version-policy/).

## 4. Échec et reprise

- Sources conflictuelles : présenter les deux versions, ne pas forcer l'unification
- Contexte trop long : découper en « d'abord A vs B, puis ajouter C »

## 5. Capitalisation

- Modèle de tableau comparatif dans le répertoire de modèles ou la base de connaissances de l'équipe
- Conversion possible en Skill : `source-backed-research`

## 6. Chapitres connexes

- [Centré sur les livrables](/fr/cases/workflows/artifact-first-work/)
- [Valider les sources](/fr/guide/quality/validate-sources/)

---

**Statut :** verified  
**Produits concernés :** App / CLI  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur la recherche sourcée, la recherche web, la validation des sources et la politique de version ; le contenu se limite à la structure stable « produire un tableau comparatif concurrentiel sourcé », sans figer des prix ou versions produit spécifiques.
