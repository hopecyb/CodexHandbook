---
title: Tableaux et tableurs
description: Lire, nettoyer, analyser et exporter CSV, Excel et données tabulaires — sans casser la structure ou l'encodage.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Les Tâches de tableur sont une catégorie classique d'échec silencieux : séparateur, encodage, en-têtes, formules ou format de date — une erreur casse tout en aval.

## Ce que cette page couvre

- Lecture/écriture sécurisée de CSV / Excel avec Codex
- Structure de Prompt pour Tâches d'analyse de données
- Vérification des comptages et nombres

## Choix de format

| Format | Avantages | Attention |
|---|---|---|
| CSV | Diff textuel, universel | Encodage (UTF-8 BOM), séparateur, quoting |
| TSV | Moins de conflits de virgules | Identique à CSV |
| XLSX | Feuilles multiples, formules | Binaire, diff difficile ; utiliser des bibliothèques |
| Google Sheets | Collaboration | Souvent via MCP ou export CSV |

Petites données pour Git : **préférer CSV/TSV**. Rapports complexes : **source CSV + script pour générer XLSX**.

Trois questions :

- Besoin de diff, traçabilité, reproductibilité : CSV / TSV
- Livrer aux utilisateurs Excel : exporter XLSX
- Ne pas confondre « format de vue » avec « meilleur format de traitement »

## Lire et analyser

Forme de Prompt recommandée :

```text
Fichier : data/sales_2025.csv
Encodage : UTF-8
Tâche : Résumer les revenus par région, sortie summary.csv
Contraintes : Ne pas modifier la source ; traiter les blancs comme 0 ; deux décimales
Vérification : Afficher les 5 premières lignes + nombre total de lignes
```

Contexte : [Contexte fichier et dossier](/guide/context/file-and-folder-context/)

## Pourquoi les tableurs échouent silencieusement

Pièges courants :

- Dates en texte vs date
- Blancs comme 0 vs ignorer vs erreur
- Quelle colonne est la clé unique
- Arrondi pour décimales et devises
- Si le fichier source peut changer

Sans clarté, Codex peut « terminer » avec des résultats non fiables.

## Écrire et nettoyer

- Spécifier **noms de colonnes, ordre, types** (dates en ISO 8601)
- Traiter les grands tableaux par lots pour éviter les explosions mémoire
- Déduplication et clés de fusion dans la Tâche — ne pas laisser l'Agent deviner la « clé primaire »

## Idées reçues courantes

### 1. S'ouvre dans Excel ≠ correct

« S'ouvre » et « données intactes » sont différents.

### 2. A l'air bien dans Excel ≠ bien en aval

Les erreurs peuvent apparaître seulement quand un autre système consomme :

- Mauvais encodage
- Ordre des colonnes changé
- Types numériques changés
- Formules converties en valeurs

### 3. Laisser l'Agent décider blancs, dates, clés

Généralement éviter — règles explicites plus stables.

## Cinq choses à indiquer pour les Tâches tableur

1. Fichier d'entrée
2. Nom du fichier de sortie
3. Colonnes à garder, agréger ou nettoyer
4. Traitement des blancs, dates, doublons
5. Comment vérifier les résultats

Beaucoup plus stable que « nettoyer cet Excel ».

Python : `pandas` ; Node : `csv-parse` / `xlsx` — documenter la norme du projet dans `AGENTS.md`.

## Vérification

- Comptages de lignes et totaux vérifiés croisés avec la source
- Ouvrir Excel et confirmer que les dates ne sont pas stockées comme nombres incorrectement
- [Vérifier les artefacts](/guide/quality/verify-artifacts/) : comparaison d'échantillons

Pour les tableurs, la clarté sur colonnes, types, règles et acceptation compte le plus.

## Erreurs courantes

- CSV illisible dans Excel (BOM manquant ou mauvais encodage)
- Totaux float sans règles d'arrondi
- Éditer des formules dans Excel sans script reproductible

## Checklist d'acceptation

- [ ] Noms de colonnes et types correspondent au contrat aval
- [ ] Totaux/échantillons correspondent à vérification manuelle ou SQL
- [ ] Fichier source non écrasé accidentellement (ou changement visible dans le diff)

## Sources de référence
- [Définir les contraintes](/prompts/constraints-and-boundaries/)
---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Vérifié croisé avec les pages vérifiées Contexte fichier/dossier, verify-artifacts, contraintes ; principe stable : indiquer explicitement colonnes, types, blancs, dates, Vérification — pas une seule bibliothèque comme seule implémentation.  
**Dernière vérification :** 2026-07-26
