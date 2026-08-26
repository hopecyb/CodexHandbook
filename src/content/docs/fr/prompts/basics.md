---
title: Bases des Prompts
description: Les éléments essentiels d'un bon Prompt.
locale: fr
source_locale: zh-CN
source_revision: b2a486e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Au début, on a tendance à se concentrer sur « si la formulation est sophistiquée ».  
Pour Codex, l'essentiel est de clarifier ces points :

- ce que vous voulez qu'il fasse exactement
- jusqu'où il peut aller, et ce qu'il ne doit pas toucher
- ce qui compte comme terminé
- en cas d'incertitude : demander d'abord, chercher d'abord, ou s'arrêter d'abord

Un bon Prompt met surtout les limites de la tâche au clair — pas besoin d'écrire comme une incantation.

## Contenu

Il aide surtout à éviter ces problèmes courants :

- objectif trop vague, résultat du type « optimise un peu »
- périmètre non précisé, Codex modifie trop de choses
- pas de critères d'acceptation, jugement au feeling à la fin
- rien de dit quand l'info manque, donc il devine

## Comment voir un Prompt

Vous pouvez le voir comme un ticket de tâche.  
Un ticket acceptable répond au minimum à :

- quoi faire
- pourquoi
- avec quels matériaux
- ce qu'il ne faut pas toucher
- à quoi ressemble le « passé »

Si ces éléments ne sont pas clairs, même les plus belles phrases ne rattrapent pas.

## Trois niveaux d'écriture (reprise dans la bibliothèque de cas)

- **Version minimale** : quand l'objectif est déjà très clair
- **Version recommandée** : objectif, contexte, entrées, contraintes, acceptation, permissions
- **Version pédagogique** : explique pourquoi chaque paragraphe existe

## Idées reçues courantes

### 1. Plus le Prompt est long, mieux c'est

L'important est la pertinence.  
Une longue digression hors sujet dilue les vraies limites.

### 2. Si l'objectif est dit, le reste peut être omis

Avec seulement l'objectif, on oublie facilement :

- le périmètre des changements
- les contraintes de style
- la façon de valider
- quoi faire en cas d'incertitude

### 3. Le Prompt sert surtout à « apprendre au modèle à réfléchir »

Pour un débutant, une lecture plus utile : le Prompt réduit les malentendus.

## Une structure minimale suffisante

Si vous ne voulez pas tout apprendre d'un coup, commencez par ces 4 lignes :

```text
Objectif : ce que je veux que tu fasses
Périmètre : ce que tu peux modifier uniquement
Acceptation : à quoi ressemble le terminé
En cas d'incertitude : demande d'abord, ne devine pas
```

C'est déjà bien plus clair qu'un « aide-moi à optimiser ça ».

## Quand utiliser la version minimale ou la version complète

### La version minimale convient

- petite modification sur un seul fichier
- objectif très concret
- vous connaissez bien le dépôt et la tâche

### La version recommandée est plus sûre

- plusieurs fichiers
- projet inconnu
- risque plus élevé
- besoin d'approbation, de tests ou de relecture

Pour la plupart des débutants, commencer par la **version recommandée** est en général plus prudent.

Le cœur d'un bon Prompt : moins de suppositions, moins de dérives, moins de dépassements.

Exemples : [Première tâche](/fr/cases/first-task/) et [Anatomie d'une tâche](/fr/prompts/task-anatomy/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page ne traite que de méthodes générales de Prompt ; les liens internes ont été revus, et le corps ne dépend pas de faits volatils (version produit, tarifs, interface, etc.).
