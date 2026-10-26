---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Comparaison effectuée avec les pages officielles actuelles sur l’App, le CLI, l’IDE, le Cloud, l’authentification et les tarifs. Le tableau ne retient que les capacités clairement décrites concernant le lieu de travail, le contexte, la revue et la connexion ; il évite de classer des fonctions changeantes comme fortes, moyennes ou faibles."
  checkedAt: "2026-08-26"
title: Comparaison des fonctionnalités
description: Comparer l’App de bureau, le CLI, l’IDE et le Cloud selon le lieu de travail, l’environnement d’exécution et la méthode de revue.
sidebar:
  order: 30
locale: fr
source_locale: zh-CN
source_revision: 'b3d30b0'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Ce tableau compare uniquement les **principaux modes de travail relativement stables**. Il ne transforme pas de petites fonctions qui changent vite en promesses durables. Servez-vous d’abord du [schéma de choix du client](/fr/guide/choose-your-client/) pour décider, puis vérifiez ici les différences.

## Comparaison principale

| Point d’entrée | Lieu de travail | Contexte principal | Méthode de revue | Tâches typiques |
|---|---|---|---|---|
| Application de bureau ChatGPT | Projets, conversations et fichiers locaux | Dossiers ouverts, projets et tâches | Résumé de la tâche, fichiers, diff et interface d’approbation | Coordination de plusieurs projets, tâches longues, opérations sur fichiers et ordinateur |
| Codex CLI | Terminal actuel et dépôt local | Répertoire de travail, sortie des commandes et état Git | Commandes, diff et résumé des résultats dans le terminal | Exploration, modification, tests, scripts et CI |
| Intégration IDE | Éditeur actuel | Fichiers ouverts, sélection et conversation récente | Résumé des modifications et diff à côté du code | Explication locale, changements progressifs et revue dans l’éditeur |
| Codex Cloud | Environnement distant isolé | Dépôt connecté et configuration de l’environnement | Journaux Cloud, résumé, diff et PR | Tâches longues en arrière-plan, essais parallèles et collaboration à distance |

## Installation et identité

| Élément | App de bureau | CLI | IDE | Cloud |
|---|---|---|---|---|
| Accès | Application de bureau macOS / Windows / Linux | Ligne de commande locale | Extension compatible VS Code ; intégrations propres à Xcode et JetBrains | Web et intégrations distantes compatibles |
| Connexion ChatGPT | Prise en charge | Prise en charge | Prise en charge | Obligatoire |
| Connexion locale par clé API | Prise en charge | Prise en charge | Prise en charge | Non prise en charge |
| Mode de facturation principal | Abonnement ChatGPT ou consommation API | Abonnement ChatGPT ou consommation API | Abonnement ChatGPT ou consommation API | Abonnement ChatGPT et permissions de l’espace de travail |

Le travail local connecté avec une clé API suit des règles de facturation, d’administration et de traitement des données différentes de la connexion ChatGPT. Une clé API ne donne pas non plus accès aux capacités exigeant un espace de travail ChatGPT ou le Cloud. Pour les abonnements et quotas actuels, consultez toujours les pages officielles à jour.

## Combinaisons courantes

### Cycle de développement individuel

```text
L’IDE repère un problème local → le CLI exécute un test ciblé → l’App de bureau examine la tâche longue et le diff
```

### Cycle d’équipe à distance

```text
Démarrer depuis GitHub / GitLab / Linear / Slack → exécuter dans un Cloud isolé
→ une personne examine le résumé et le diff → créer une PR
```

### Parcours d’apprentissage débutant

```text
Ouvrir un dossier d’exercice dans l’App de bureau → demander une petite tâche
→ examiner la demande de permission → examiner le diff → lancer la vérification
```

## Ne remplacez pas la vérification sur place par ce tableau

Plugins, Scheduled tasks, notifications, modèles et politiques d’organisation évoluent rapidement. Consultez directement le client actuel et la documentation officielle pour savoir :

- si une fonctionnalité apparaît sur le compte utilisé ;
- si elle dépend de l’abonnement, de la région ou des règles de l’administrateur ;
- quels sont les noms actuels des commandes, raccourcis ou éléments d’interface ;
- si une connexion par clé API donne accès à une capacité ChatGPT ou Cloud donnée.

Le principe de choix reste simple : **l’IDE pour les modifications ciblées du code, le CLI pour les cycles dans le terminal, l’App de bureau pour coordonner les tâches locales et le Cloud pour une exécution distante isolée.**
