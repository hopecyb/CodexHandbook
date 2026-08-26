---
title: Diagnostiquer avant de corriger
description: Problèmes de production et bugs tenaces — établir une chaîne de preuves avant de toucher au code.
locale: fr
source_locale: zh-CN
source_revision: bd7e38b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Demander à Codex de corriger un bug immédiatement entraîne souvent beaucoup de retours en arrière. Le flux de diagnostic met l'accent sur : **symptômes → hypothèses → preuves → correction minimale**.

## Quand l'utiliser

- Cause d'échec de test peu claire
- Alertes de production, rapports utilisateur « intermittents »
- Problème persistant après la dernière correction

## Étapes

### 1. Geler les modifications

```text
Ne modifiez pas encore le code métier. Listez : étapes de reproduction, journaux pertinents, commits récents liés.
```

### 2. Réduire le périmètre

- Dichotomie : quel commit a introduit le problème ?
- Isolation : dépôt ou cas de test minimal de reproduction

### 3. Formuler des hypothèses

Demander à Codex de produire :

```text
Hypothèse A : … Vérification : …
Hypothèse B : … Vérification : …
```

### 4. Vérifier les hypothèses (lecture seule en priorité)

Lancer des tests ciblés, ajouter des journaux temporaires (branche jetable), consulter la surveillance.

### 5. Correction minimale

Corriger une cause racine à la fois ; éviter les refactorisations « tant qu'on y est ».

### 6. Vérification de régression

Cas d'échec d'origine + scénarios adjacents + test empêchant la récurrence.

## Modèle de prompt

```text
Suivez « diagnostiquer avant de corriger » :
1. Lisez @path/to/failing-test et l'implémentation ; expliquez l'échec (citez les numéros de ligne de la pile)
2. Donnez 2 hypothèses et comment les vérifier en lecture seule
3. Après ma confirmation d'une hypothèse, écrivez la correction ; après correction, lancez uniquement les tests concernés
```

## Rapport avec l'EPXV

Le diagnostic est une version approfondie de la phase **Explorer** ; à l'étape Planifier, documenter aussi « comment revenir en arrière si l'hypothèse est fausse ».

## Erreurs courantes

- Modifier le code sans reproduction
- Un seul patch corrigeant trois problèmes — difficile à revoir
- Supprimer les journaux temporaires sans ajouter de tests permanents

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur la planification, la qualité et la reprise après échec ; cette page confirme uniquement la méthode stable « chaîne de preuves d'abord, puis correction minimale », sans dépendre de l'implémentation côté produit.
