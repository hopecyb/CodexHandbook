---
title: CI/CD
description: Connectez Codex aux flux d'intégration continue et de release — commencez par l'automatisation à faible risque.
locale: fr
source_locale: zh-CN
source_revision: '4aeb424'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI / API / Cloud
  basis: Recoupement avec la structure actuelle de la sous-section CI/CD et l'entrée automatisation de revue de code dans ce dépôt ; le contenu se limite au principe stable d'assistance à faible risque en CI/CD avant de déléguer des actions.
  checkedAt: '2026-07-26'
---

Lors de l’intégration de Codex à la CI/CD, l’erreur la plus courante est de vouloir modifier, pousser et fusionner automatiquement dès le départ.

L'approche plus courante est de commencer en lecture seule : suggestions et rapports uniquement.

## Entrée de section

- [Automatisation de revue de code](/fr/guide/developer-platform/ci-cd/code-review-automation/)

## Ce que cette section couvre

- Revue structurée au stade PR
- Laisser l'automatisation trouver les problèmes et suggérer des corrections d'abord
- Garder les actions à haut risque derrière l'approbation humaine

Connecter Codex en CI/CD signifie généralement une assistance à faible risque d'abord, puis décider ce qui vaut la délégation.
