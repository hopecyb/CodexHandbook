---
title: Prompts pour tâches longues
description: Découper en phases, points de contrôle et informations de passation.
locale: fr
source_locale: zh-CN
source_revision: b8e9c9b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Les échecs sur les longues tâches ressemblent souvent à :

- trop faire d'un coup
- aucun point de contrôle
- contraintes qui se contredisent dans un fil long

L'enjeu n'est pas un Prompt plus long, mais une **suite de petites phases avec contrôles**.

Découpage par phase, acceptation à chaque fois :

```text
Phase 1 : recherche et options uniquement (pas de code)
Phase 2 : changement minimal
Phase 3 : tests et exécution…
À la fin de chaque phase, attends ma confirmation.
```

## Pourquoi les longues tâches dérivent

Elles mélangent :

- comprendre
- concevoir
- implémenter
- valider
- documenter la passation

Tout en « fais-le d'un coup », le risque monte vite.

## Idées reçues

### 1. Long ≠ court détaillé

Il faut surtout une **gestion par étapes**, pas seulement plus de contexte.

### 2. Lister des phases ne suffit pas

Chaque phase devrait avoir une sortie claire :

- plan seulement
- implémentation minimale
- tests et validation seulement

### 3. Un seul fil du début à la fin

Résumé, passation ou nouveau fil sont souvent plus lisibles.

## Découpage en quatre temps

1. **Recherche** : comprendre, ne pas toucher
2. **Plan** : étapes, risques, validation
3. **Exécution** : changement minimal
4. **Validation** : checks, conclusion, passation

## Formulation pratique

```text
Phase 1 : recherche et options, pas de code — attends ma confirmation
Phase 2 : changement minimal, puis rapport d'impact
Phase 3 : validation et exécution des checks pertinents
Phase 4 : résumé des changements, risques et suites possibles
```

Mieux vaut pouvoir s'arrêter entre chaque bloc que tout finir d'un trait.

Voir : [Progression et pilotage](/fr/guide/agent-work/progress-and-steering/) · [Passation et reprise](/fr/guide/agent-work/handoff-and-resume/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page traite uniquement découpage et passation des longues tâches ; liens et exemples de phases revus ; pas de faits volatils produit.
