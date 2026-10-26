---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page décrit uniquement l'usage des modèles ; liens et typologie revus ; pas de faits volatils produit."
  checkedAt: "2026-07-26"
title: Modèles de prompts
description: Squelettes réutilisables par type de tâche — comprendre, créer, modifier, diagnostiquer, revoir, rechercher, automatiser.
locale: fr
source_locale: zh-CN
source_revision: "fae2ed3"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---


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
| [Comprendre](/fr/prompts/templates/understand/) | lire dépôt, doc ou matériel avant d'agir |
| [Créer](/fr/prompts/templates/create/) | fonction, texte ou artefact à partir de zéro |
| [Modifier](/fr/prompts/templates/change/) | itérer sur l'existant avec limites |
| [Diagnostiquer](/fr/prompts/templates/diagnose/) | cause racine avant code |
| [Revoir](/fr/prompts/templates/review/) | diff, PR ou changement de doc |
| [Rechercher](/fr/prompts/templates/research/) | enquête et comparaison avec sources |
| [Automatiser](/fr/prompts/templates/automate/) | tâches répétées, scripts, flux sans surveillance |

## Du modèle au workflow

Certains prompts ne servent qu'une fois. D'autres reviennent assez souvent pour être stabilisés.

| Tâche répétée | D'abord sous forme de | Une fois stable |
|---|---|---|
| Préparation de PR | Modèle de revue/modification | Skill avec checklist fixe |
| Génération de docs API | Modèle création/modification | Skill + script documentaire |
| Extension de couverture de tests | Modèle de modification | Skill + commandes de test convenues |
| Analyse de performance | Modèle diagnostic | Sous-agent ou Skill dédié |
| Vérifier le format à chaque écriture | Pas seulement un modèle | Hook |
| Lire des tickets externes avant de coder | Modèle de recherche | MCP + Skill |

Le modèle convient aux tâches lancées par une personne ; le Skill aux processus répétés ; le Hook aux contrôles automatiques ; MCP à l'accès aux systèmes externes.

## Choix rapide : quelle forme donner à cette tâche ?

Posez-vous quatre questions :

1. Cette tâche ne sera-t-elle effectuée qu'une fois ?
2. Les étapes seront-elles presque identiques la prochaine fois ?
3. Existe-t-il un format de sortie ou une liste de vérification fixe ?
4. Faut-il un système externe, un script ou un contrôle automatique ?

| Situation | Forme conseillée |
|---|---|
| Travail unique qui demande encore une discussion | Consigne complète |
| Travail répété, mais encore en cours d'ajustement | Modèle |
| Processus stable et sortie définie | Skill |
| Rôle indépendant chargé d'approfondir | Sous-agent |
| Données d'un système externe nécessaires | MCP, d'abord en lecture seule si possible |
| Vérification obligatoire à chaque étape donnée | Hook |
| Ensemble à distribuer à l'équipe | Plugin |

Une consigne plus longue n'est pas forcément meilleure. Ce qui mérite d'être réutilisé, c'est une tâche déjà vérifiée à plusieurs reprises, dont les limites et critères d'acceptation sont clairs.

## Idées reçues

### 1. Copier tel quel

Sans adapter les éléments à remplacer et sans couper le superflu, le modèle laisse la tâche sans contenu concret.

### 2. Modèle = professionnalisme automatique

Il ne décide pas :

- le vrai objectif
- où tracer la limite
- comment écrire l'acceptation

### 3. Plus le modèle est long, mieux c'est

« Assez complet sans être lourd » suffit pour débuter.

Choisissez le type, puis personnalisez — ne substituez pas la tâche par le modèle.

Principes : [Bases des prompts](/fr/prompts/basics/) et [Anatomie d'une tâche](/fr/prompts/task-anatomy/).
