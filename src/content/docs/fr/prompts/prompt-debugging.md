---
title: Dépannage des Prompts
description: Quand le résultat dévie, comment localiser le problème dans le Prompt.
locale: fr
source_locale: zh-CN
source_revision: 9b92e1f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Résultat incorrect : causes fréquentes :

- objectif non vérifiable
- contraintes floues
- contexte incomplet ou périmé
- tâche trop grosse sans plan d'abord

Le dépannage consiste à voir **quelle couche d'information manque**.

## Localiser la couche

Pas forcément tout recommencer — identifier :

1. objectif flou ?
2. périmètre qui dérape ?
3. contexte insuffisant ?
4. tâche trop large ?
5. mauvais choix d'outils ?

## Checklist dans l'ordre

1. L'objectif est-il vérifiable ?
2. Les contraintes sont-elles claires et visibles par l'Agent ?
3. Le contexte est-il périmé ou contradictoire ? (compression / ancien fil)
4. Fallait-il demander un plan d'abord ?
5. Mauvais outil ? (réseau alors qu'il ne fallait pas)

## Ce que chaque point vérifie

### 1. Objectif vérifiable

« Optimise un peu » → dérive fréquente.

### 2. Contraintes

Beaucoup de « trop de changements » viennent d'un arrêt non dit.

### 3. Contexte périmé ou contradictoire

Fil long : A dit au début, B ajouté après, état mélangé.

### 4. Plan d'abord

Grosse tâche + exécution directe = plus de dérive.

### 5. Outils

Recherche web au lieu du code local ; ou recherche avec sources vs réponse de mémoire.

## Idées reçues

### 1. Tout le Prompt est à jeter

Souvent il suffit d'ajouter :

- acceptation explicite
- périmètre réduit
- plan d'abord

### 2. Dépanner = allonger le Prompt

Parfois il faut enlever le bruit et garder les limites.

### 3. Fil long = plus de contexte utile

Vieilles contraintes, infos périmées, résidus après compression.

## Ordre de remédiation

1. réécrire un objectif vérifiable
2. préciser « modifier uniquement / ne pas toucher »
3. si gros, exiger un plan
4. sinon, réduire à un fichier ou un repro
5. sinon, nouveau fil avec les limites clés

Le cœur : quelle information n'a pas été transmise correctement — pas complexifier le discours.

Sinon : repro sur un seul fichier, ou nouveau fil avec contraintes.

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page décrit uniquement le dépannage de Prompt ; ordre de diagnostic et liens revus ; pas de faits volatils produit.
