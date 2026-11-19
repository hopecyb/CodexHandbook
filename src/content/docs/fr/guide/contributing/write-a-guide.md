---
legacyVerification:
  status: "verified"
  basis: "Vérifié à partir du frontmatter actuel des documents du dépôt, de l’ancien système de statuts en pied de page, des liens croisés et de la gestion de la sidebar. Cette page décrit les conventions de rédaction et les conseils de structure du manuel, sans dépendre d’une version précise du produit."
  checkedAt: "2026-07-26"
title: Écrire une page guide
description: Structure, frontmatter et conventions de liens croisés pour les nouveaux guides du manuel.
locale: fr
source_locale: zh-CN
source_revision: '4eddfb9'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: 2026-11-19
---

Cette page explique comment ajouter ou réviser des pages de style **guide** dans `src/content/docs/` (pas les cas purs ou les tableaux de référence purs).

## Ce que cette page couvre

Blocages courants :

- À quoi doit ressembler une page guide
- Tutoriel vs politique vs résumé d'index
- Comment aider réellement les nouveaux

Les sections suivantes distinguent ces questions pour vous aider à écrire un guide compréhensible et facile à maintenir.

## Rôle d'une page guide

Un guide n’est pas terminé lorsqu’on y accumule des informations. Il doit amener le lecteur de « je sais que ce sujet existe » à « je vois à peu près quand l’utiliser, quoi lire d’abord et quels pièges éviter ».

Il ne se limite donc pas à une liste de notions ou de commandes : il indique aussi la suite du parcours.

## Frontmatter

```yaml
---
title: Titre de la page
description: Une phrase sur le problème que cette page résout
---
```

Les champs de maintenance du dépôt sont gérés par les outils de validation et ne sont pas affichés dans le texte ni dans le pied de page. Conservez uniquement les informations nécessaires pour comprendre et utiliser la page. Vérifiez les faits susceptibles d’évoluer, comme les commandes, les tarifs et les autorisations, avec [Vérifier le contenu technique](/fr/guide/contributing/verify-technical-content/) et indiquez directement dans le texte les limites d’application utiles.
## Structure recommandée

Choisissez les sections selon le [modèle d’intégration des sources externes](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/external-source-integration.md#6-%E6%8E%A8%E8%8D%90%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF). Combinaisons courantes :

- Quel problème la page résout
- Pour qui elle est
- Approche minimale viable
- Workflow recommandé
- Erreurs courantes
- Limites de sécurité
- Checklist d'acceptation
- Sources de référence

Les how-tos produit peuvent être riches en étapes ; les pages concept peuvent utiliser tableaux et diagrammes.

## Idées reçues courantes

### Toutes les pages ne sont pas une encyclopédie

Quand on rédige son premier guide, il est facile d’y mettre tout ce que l’on sait et d’en perdre le fil directeur. Il vaut souvent mieux :

- Le problème principal
- Ce que les lecteurs comprennent mal
- Une approche ou règle de décision utilisable

Cela aide généralement davantage les débutants que de leur présenter tous les détails à la fois.

### Écrire pour les lecteurs, pas seulement pour vous

Vous connaissez le contexte, mais pas les lecteurs qui arrivent pour la première fois. Ajoutez les repères qui leur manquent :

- Pour qui c'est
- Ce qu'ils peuvent résoudre après lecture
- Quoi saisir en premier pour un démarrage rapide

### Les guides ne remplacent pas la doc officielle

Le manuel communautaire aide à comprendre, relier et mettre en pratique les informations. Les faits susceptibles de changer doivent toutefois être vérifiés dans la documentation officielle.

## Liens croisés

- Les liens internes utilisent des chemins racine : `/fr/cases/workflows/explore-plan-execute-verify/`
- Lier vers les pages de référence faisant autorité ; éviter la longue duplication
- Enregistrer les nouvelles pages dans l'`index.md` du chapitre et la sidebar `astro.config.mjs`

## Ton

- Le texte source est rédigé en chinois simplifié pour les praticiens ; cette traduction s’adresse aux lecteurs francophones
- Reconnaître l'incertitude (« selon la documentation officielle »)
- Éviter le récit de « prompt magique »

## Ordre d'écriture

1. Quel problème cette page résout ?
2. Que comprennent mal ou sautent les lecteurs ?
3. Approche minimale, workflow ou règle de décision
4. Liens croisés et sources de référence

## vérification

Avant PR, lire [Vérifier le contenu technique](/fr/guide/contributing/verify-technical-content/). Commandes, tarifs, permissions, etc. doivent être re-vérifiés.

Un bon guide dit aux premiers lecteurs pourquoi la page existe, quoi lire en premier et où aller ensuite — pas seulement « tous les faits ».

## Sources de référence
- Documentation officielle OpenAI Codex
