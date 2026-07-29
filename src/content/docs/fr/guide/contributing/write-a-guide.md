---
title: Écrire une page guide
description: Structure, frontmatter et conventions de liens croisés pour les nouveaux guides du handbook.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Cette page explique comment ajouter ou réviser des pages de style **guide** dans `src/content/docs/` (pas les cas purs ou les tableaux de référence purs).

## Ce que cette page couvre

Blocages courants :

- À quoi doit ressembler une page guide
- Tutoriel vs politique vs résumé d'index
- Comment aider réellement les nouveaux

## Rôle d'une page guide

Un guide n'est pas « déverser de l'information ». Il doit déplacer les lecteurs de « je sais que ce sujet existe » à « je sais quand l'utiliser, quoi lire en premier et quoi éviter ».

Pas seulement une liste à puces ou une fiche de commandes — il doit montrer les prochaines étapes.

## Frontmatter

```yaml
---
title: Titre de la page
description: Une phrase sur le problème que cette page résout
---
```

Pied de page unifié optionnel (correspondre aux pages existantes) :

```markdown
---

**Statut :** planned | draft | review | verified | outdated | archived
**Produits concernés :** App / CLI / IDE / Cloud
**Dernière vérification :** YYYY-MM-DD
```

## Structure recommandée

Selon [modèle d'intégration sources externes](/docs/planning/external-source-integration.md#6-推荐页面模板) (section 6, modèle de page recommandé), sections courantes :

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

Commencer par :

- Le problème principal
- Ce que les lecteurs comprennent mal
- Une approche ou règle de décision utilisable

Mieux pour les nouveaux que tous les détails d'un coup.

### Écrire pour les lecteurs, pas seulement pour vous

Pont pour les premiers visiteurs :

- Pour qui c'est
- Ce qu'ils peuvent résoudre après lecture
- Quoi saisir en premier pour un démarrage rapide

### Les guides ne remplacent pas la doc officielle

Le handbook communautaire aide la compréhension et l'accueil — mais les faits volatils nécessitent une vérification officielle.

## Liens croisés

- Les liens internes utilisent des chemins racine : `/cases/workflows/explore-plan-execute-verify/`
- Lier vers les pages autoritaires ; éviter la longue duplication
- Enregistrer les nouvelles pages dans l'`index.md` du chapitre et la sidebar `astro.config.mjs`

## Ton

- Le chinois simplifié est la source ; les traductions anglaises suivent la structure source
- Reconnaître l'incertitude (« selon la documentation officielle »)
- Éviter le récit de « Prompt magique »

## Ordre d'écriture

1. Quel problème cette page résout ?
2. Que comprennent mal ou sautent les lecteurs ?
3. Approche minimale, workflow ou règle de décision
4. Liens croisés et sources de référence

## Vérification

Avant PR, lire [Vérifier le contenu technique](/guide/contributing/verify-technical-content/). Commandes, tarifs, permissions, etc. doivent être re-vérifiés.

Un bon guide dit aux premiers lecteurs pourquoi la page existe, quoi lire en premier et où aller ensuite — pas seulement « tous les faits ».

## Sources de référence
- Documentation officielle OpenAI Codex
```
---

**Statut :** vérifié  
**Base de vérification :** Vérifié croisé frontmatter doc actuel, système de statut de pied de page, habitudes de liens croisés et maintenance sidebar ; décrit les conventions d'écriture — pas les détails de version produit spécifiques.  
**Dernière vérification :** 2026-07-26
