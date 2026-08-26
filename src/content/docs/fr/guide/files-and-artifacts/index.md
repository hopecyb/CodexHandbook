---
title: Fichiers et artefacts
description: Comment Codex lit et écrit les types de fichiers, gère les sorties générées et ce qu'il faut vérifier.
sidebar:
  order: 30
locale: fr
source_locale: zh-CN
source_revision: 3a5cc3b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Codex produit souvent des **changements de fichiers dans le repo** ou de **nouveaux artefacts** (docs, images, config). Cette section couvre les bonnes pratiques par type de fichier pour ne pas finir avec « généré mais inutilisable ».

Les « fichiers » ne sont pas tous identiques — différents types nécessitent différentes instructions et Vérifications.

« Éditer du code », « traiter des tableurs », « générer des captures » et « exporter des slides » ressemblent tous à des Tâches de fichiers, mais les modes d'échec diffèrent.

## Navigation de la section

| Sujet | Page |
|---|---|
| Code et texte | [Fichiers texte et code](/fr/guide/files-and-artifacts/text-and-code-files/) |
| Captures et entrée design | [Images et captures d'écran](/fr/guide/files-and-artifacts/images-and-screenshots/) |
| PDF et longs documents | [PDF et documents](/fr/guide/files-and-artifacts/pdf-and-documents/) |
| Données tabulaires | [Tableaux et tableurs](/fr/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Slides | [Présentations](/fr/guide/files-and-artifacts/presentations/) |
| Sorties Agent | [Artefacts générés](/fr/guide/files-and-artifacts/generated-artifacts/) |

Méthode générale : [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/).

## Ce que ce chapitre couvre

Trois thèmes :

- Comment décrire la Tâche clairement
- Où les choses échouent silencieusement
- Comment vérifier à la fin

C'est un guide opérationnel par type de fichier — pas une liste de fonctionnalités.

## Principes unifiés

1. **Chemins explicites** : chemin de sortie et nommage dans le Prompt
2. **Conventions de format** : extension, encodage (UTF-8), fins de ligne correspondent au projet
3. **Conscience de la taille** : gros binaires hors Git, ou utiliser LFS/CDN
4. **Vérification humaine** : généré ≠ terminé ; voir [Définition de terminé](/fr/guide/quality/definition-of-done/)
5. **Données sensibles** : voir [Contexte sensible](/fr/guide/context/sensitive-context/)

## Idées reçues courantes

### 1. Fichier existe ≠ Tâche complète

Les problèmes sont souvent pas « a-t-il été généré ? » mais :

- Format correct ?
- Contenu précis ?
- Bon chemin ?
- Utilisable en aval ?

### 2. Tous les types de fichiers nécessitent les mêmes instructions ?

Non.

- Code : périmètre, logique, tests
- Tableurs : colonnes, types, règles d'agrégation
- Images : contenu visuel et dimensions
- Docs : structure, ton, faits

### 3. « S'ouvre bien » signifie suffisant ?

Ouvrir est le minimum — pas forcément prêt à committer, publier ou livrer.

## Ordre de lecture suggéré

Première utilisation de Codex sur des fichiers :

1. Choisir le type de fichier le plus proche de votre Tâche
2. Lire les modes d'échec courants pour ce type
3. Lire l'approche de Vérification correspondante

Plus facile que lire tout le chapitre d'un coup.

## Relation avec les outils

- Lire/écrire fichiers : outils fichier + terminal
- Voir images : [Prompt avec images](/fr/prompts/prompting-with-images/)
- Voir pages : [Outil navigateur](/fr/guide/tools/browser/)
- Générer images : [Génération d'images](/fr/guide/tools/image-generation/)

Les Tâches de fichiers échouent souvent silencieusement — format, règles ou contenu dérivent pendant que le fichier « existe ».

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Vérifié croisé avec la structure actuelle de la sous-section fichiers-et-artefacts et les pages vérifiées verify-artifacts, definition-of-done, sensitive-context et pages liées aux images ; principe stable : choisir instructions et Vérification par type de fichier.  
**Dernière vérification :** 2026-07-26
