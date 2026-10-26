---
title: PDF et documents
description: Périmètre, outils et vérification lorsque Codex lit, résume ou génère des PDF et longs documents.
locale: fr
source_locale: zh-CN
source_revision: '1f4f82b'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 30
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: 'Recoupement avec les pages vérifiées contexte fichier/dossier, verify-artifacts, sensitive-context et gestion fichier/image ; principes stables : limiter le périmètre, surveiller erreurs OCR/mise en page, ouvrir et vérifier après génération.'
  checkedAt: '2026-07-26'
---

Les PDF sont courants pour specs, articles, scans et rapports exportés. Contrairement au texte brut, les PDF sont **structurellement complexes, volumineux et difficiles à comparer par diff** — ils nécessitent une conception de tâche explicite.

La plupart des problèmes PDF : compréhension incomplète de la structure ou périmètre trop large.

## Ce que cette page couvre

- Comment faire « lire » correctement le contenu PDF à l'Agent
- Conventions de format et chemin lors de génération ou mise à jour de PDF
- vérification au-delà de « fichier existe »

## Pourquoi les PDF sont délicats

Les PDF peuvent combiner :

- Images scannées
- Mise en page multi-colonnes
- En-têtes et pieds de page
- Tableaux
- Images et texte mixtes

Un périmètre plus clair (« quelle section, quelle sortie ») signifie généralement de meilleurs résultats.

## Lire des PDF

### Approche recommandée

1. **Spécifier le chemin** : `docs/spec.pdf` ou référence @ (selon support client)
2. **Indiquer l'objectif** : résumé, comparer un chapitre, extraire données de tableau
3. **Page ou section** : limiter le périmètre sur longs docs pour économiser le contexte
4. **Contenu sensible** : contrats, scans d'ID — suivre [contexte sensible](/fr/guide/context/sensitive-context/)

### Limites

- PDF scannés peuvent nécessiter OCR ; vérifier ponctuellement les résultats
- Mise en page complexe, colonnes, notes de bas de page peuvent perdre la structure
- Ne pas entasser de gros PDF dans une tâche — segmenter ou convertir en plan Markdown d'abord

## Idées reçues courantes

### 1. PDF entier ≠ points clés fiables

Pour PDF longs, complexes ou scannés :

- Spécifier la plage
- Spécifier la tâche
- Traiter par segments

### 2. PDF scannés vs texte diffèrent beaucoup

Les scans reposent sur OCR ; les erreurs OCR se propagent aux résumés et extractions.

### 3. Fichier PDF existe ≠ terminé

Vérifier aussi :

- S'ouvre correctement
- Pas de texte illisible
- Nombre de pages, TOC, tableaux corrects
- Polices CJK intégrées si nécessaire

## Générer ou mettre à jour des PDF

| Approche | Convient |
|---|---|
| Compiler depuis Markdown/LaTeX | Docs techniques, rapports (reproductible) |
| Imprimer depuis HTML | Mise en page simple |
| Génération par bibliothèque (ex. reportlab) | Tickets, étiquettes programmatiques |

Dans le prompt spécifier :

- Chemin et nom de fichier de sortie
- Taille de page, langue, polices (PDF CJK en particulier)
- S'il faut committer (gros binaires souvent artefact ou release)

## Modèle de prompt copier-coller

```text
Lire uniquement les pages 12–18 de `docs/spec.pdf` et extraire les critères d'acceptation.
Ne pas résumer le document entier.
Si OCR ou mise en page incertaine, le dire explicitement.
```

## Politique du dépôt

- Gros PDF : **Git LFS** ou hors repo
- Quand le diff est illisible, vérifier par **ouverture du fichier** + [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/)
- Sorties générées : [Vérifier les artefacts générés](/fr/guide/files-and-artifacts/generated-artifacts/)

## Erreurs courantes

- « Changer un mot dans le PDF » sans source éditable (`.md` / `.tex`)
- PDF confidentiel dans repo public puis traitement Cloud
- Accepter sur « fichier existe » sans ouvrir

## Checklist d'acceptation

- [ ] PDF s'ouvre dans le lecteur/environnement d'impression cible
- [ ] Nombre de pages, TOC, tableaux clés correspondent à l'attente
- [ ] Taille du repo et politique LFS respectent les normes d'équipe

Pour les PDF, un périmètre plus étroit est plus stable. Après génération, ouvrir et confirmer le contenu — pas seulement la présence.
