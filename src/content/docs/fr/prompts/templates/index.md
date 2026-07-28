---
title: Modèles de Prompts
description: Squelettes réutilisables par type de tâche — comprendre, créer, modifier, diagnostiquer, revoir, rechercher, automatiser.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Modèles de Prompts

Deux réactions fréquentes aux « modèles » :

- trop rigides, on n'en veut pas
- copier-coller sans savoir quoi adapter

Un modèle sert surtout à **ne pas oublier les blocs clés** — il ne pense pas à votre place.

L'objectif : garder la structure de tâche, pas produire la seule bonne réponse.

## Comment les utiliser

1. choisir le type le plus proche
2. remplacer le contenu entre `【】` par votre cas réel
3. supprimer les sections inutiles
4. ajouter contraintes et acceptation propres à cette fois

C'est un échafaudage, pas une réponse type.

| Modèle | Quand l'utiliser |
|---|---|
| [Comprendre](/prompts/templates/understand/) | lire dépôt, doc ou matériel avant d'agir |
| [Créer](/prompts/templates/create/) | fonction, texte ou artefact from scratch |
| [Modifier](/prompts/templates/change/) | itérer sur l'existant avec limites |
| [Diagnostiquer](/prompts/templates/diagnose/) | cause racine avant code |
| [Revoir](/prompts/templates/review/) | diff, PR ou changement de doc |
| [Rechercher](/prompts/templates/research/) | enquête et comparaison avec sources |
| [Automatiser](/prompts/templates/automate/) | tâches répétées, scripts, flux sans surveillance |

## Idées reçues

### 1. Copier tel quel

Sans adapter les placeholders et sans couper le superflu, le modèle vide la tâche.

### 2. Modèle = professionnalisme automatique

Il ne décide pas :

- le vrai objectif
- où tracer la limite
- comment écrire l'acceptation

### 3. Plus le modèle est long, mieux c'est

« Assez complet sans être lourd » suffit pour débuter.

Choisissez le type, puis personnalisez — ne substituez pas la tâche par le modèle.

Principes : [Bases des Prompts](/prompts/basics/) et [Anatomie d'une tâche](/prompts/task-anatomy/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page décrit uniquement l'usage des modèles ; liens et typologie revus ; pas de faits volatils produit.
