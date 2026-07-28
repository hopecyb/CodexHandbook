---
title: Analyser un tableur
description: Téléversez ou référencez des données tabulaires pour obtenir des synthèses et des insights.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Analyser un tableur

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Créateurs / Métier |
| Client | App |
| Durée estimée | 30–60 minutes |

## 1. Objectif et contexte

**Objectif :** Nettoyer, synthétiser et proposer des visualisations pour des données CSV/Excel.

**Critères de succès :** Les conclusions sont reproductibles ; les chiffres clés sont traçables jusqu'aux lignes/colonnes d'origine.

## 2. Prompt recommandé

```text
Entrée : @data/sales-q1.csv
Objectif : synthétiser les ventes par région, l'évolution période sur période et le Top 3 des produits ; signaler les valeurs aberrantes.
Contraintes : ne pas modifier le fichier d'origine ; produire summary.md et des notes de graphique optionnelles.
Acceptation : chaque chiffre dans summary indique la méthode de calcul ou la colonne référencée.
```

## 3. Vérification

- Vérifier par échantillonnage 2–3 chiffres de synthèse
- Confirmer qu'aucune PII n'est écrite dans les journaux ou envoyée à l'extérieur

## 4. Voir aussi

- [Tableaux et feuilles de calcul](/guide/files-and-artifacts/tables-and-spreadsheets/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Query tabular data » et « Clean and prepare messy data » ; cet exemple se concentre sur le nettoyage en lecture seule, la synthèse et l'analyse des anomalies pour CSV/Excel, avec traçabilité des chiffres clés vers les champs d'origine, cohérent avec les scénarios officiels actuels.
