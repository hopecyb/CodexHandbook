---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: La documentation actuelle des modèles de l'API OpenAI cite encore Web search parmi les outils disponibles. Cette page présente une méthode stable pour compléter les faits, privilégier les sources primaires et vérifier les conclusions dans les textes d'origine ; elle ne dépend d'aucune interface particulière.
  checkedAt: '2026-07-26'
title: Recherche Web
description: Compléter les faits grâce à la recherche et indiquer les sources.
sidebar:
  order: 30
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "7adcb92"
reviewed_at: 2026-10-26
---

La recherche Web permet de compléter des faits. Elle ne doit pas tirer la conclusion finale à votre place.

Elle convient pour trouver de la documentation publique, des codes d'erreur et des notes de version. Elle ne suffit pas à rendre une conclusion définitive en matière juridique ou médicale.

Demandez les sources, ouvrez-les et vérifiez-les vous-même. Utilisez aussi la méthode de [vérification des sources](/fr/guide/quality/validate-sources/).

## À quoi sert la recherche

Elle aide surtout à repérer :

- Où chercher.
- Quelles informations méritent une vérification approfondie.
- S'il existe une source plus fiable.

Son rôle est de trouver des pistes ; il faut ensuite revenir au texte original pour les confirmer.

## Idées reçues

### 1. Un résultat trouvé est-il forcément fiable ?

Non. Pouvoir trouver une information ne la rend pas crédible ; un résumé fluide n'est pas nécessairement exact.

### 2. Dans quels cas effectuer une recherche ?

Par exemple pour consulter la documentation officielle, comprendre un message d'erreur, vérifier une évolution de version ou retrouver un fait sur une page publique.

### 3. Peut-on citer directement le résumé des résultats ?

Vérifiez d'abord :

1. Examinez les sources proposées.
2. Ouvrez la page d'origine.
3. Résumez-la avec vos propres mots.

### 4. Quand la recherche seule ne suffit-elle pas ?

Associez-la à d'autres outils ou à une vérification humaine pour une décision juridique, médicale ou financière à forts enjeux, pour confirmer le comportement réel d'une page, ou pour examiner des fichiers locaux d'un projet plutôt que des ressources publiques.

## Ordre de recherche

1. Cherchez des termes proches de la question.
2. Privilégiez la documentation officielle et les sources primaires.
3. Ouvrez les textes d'origine pour vérifier les détails.
4. Décidez alors si la conclusion peut figurer dans votre résultat.

## Une consigne réutilisable

```text
Effectue d'abord une recherche et privilégie les sources officielles.
Ajoute des liens cliquables aux conclusions ; ne t'appuie pas seulement
sur les résumés des résultats.
```

La recherche fournit des pistes et des sources. Revenez aux documents d'origine avant de conclure.
