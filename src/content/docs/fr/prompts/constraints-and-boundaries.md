---
title: Définir les contraintes
description: Limiter le périmètre modifiable, le style et les interdictions.
locale: fr
source_locale: zh-CN
source_revision: 617fa41
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Beaucoup d'échecs ne viennent pas d'un objectif totalement absent, mais de **limites floues**.

« Aide-moi à modifier cette page » peut signifier pour Codex :

- texte seulement
- style aussi
- composants
- nouvelles dépendances

Alors que vous vouliez peut-être : « ce paragraphe uniquement, pas la structure ».

Les contraintes répondent : jusqu'où aller, et quoi ne jamais toucher.

## Contenu

Elles évitent surtout :

- modifications « en passant »
- actions hors périmètre
- toucher des couches non prévues
- « terminé » avec un coût trop élevé

## Contraintes courantes

« Qu'est-ce qu'il ne faut absolument pas faire ? »

- modifier uniquement les fichiers/répertoires listés
- ne pas changer le contrat API / la base de données
- pas de nouvelle dépendance
- pas de requête réseau
- garder la config des outils de formatage

## Objectif vs contrainte

- **Objectif** : ce que vous voulez obtenir
- **Contrainte** : les lignes à ne pas franchir

Exemple :

```text
Objectif : clarifier le texte du Hero de la page d'accueil
Contraintes : pas de changement de mise en page, pas de nouvelle dépendance, pas de modification du comportement du CTA
```

Sans contraintes, « plus clair » devient souvent un redesign plus large.

## Idées reçues

### 1. Les contraintes limitent-elles la qualité ?

Souvent, des limites claires rapprochent le résultat du vrai besoin en évitant les détours.

### 2. « Ne change pas trop » suffit

Trop vague. Mieux :

- uniquement `src/content/docs/...`
- pas de composants
- pas d'API
- pas d'installation

### 3. Les contraintes ne servent qu'aux tâches à risque

Les petites tâches aussi : une phrase vague invite à élargir le scope.

## Squelette utile

```text
Contraintes :
- modifier uniquement 【répertoire/fichier】
- ne pas toucher 【composants / API / base / config】
- pas de nouvelle dépendance
- si info insuffisante, demander — ne pas deviner
```

## Quand détailler davantage

- vieux projet, dette technique
- correctif local uniquement
- règles d'architecture ou de style strictes
- permissions, réseau, installation de dépendances

L'objectif dit quoi faire ; les contraintes disent où s'arrêter.

Écrivez les limites de permission avec les contraintes pour limiter les dépassements « en passant ». Voir [Définir le terminé](/fr/prompts/define-done/) et [Permissions et bac à sable](/fr/guide/permissions-and-sandbox/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page traite uniquement contraintes et limites ; liens internes revus ; pas de faits volatils produit.
