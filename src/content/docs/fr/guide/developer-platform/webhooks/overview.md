---
title: Limites des Webhooks et événements de tâche
description: Distinguer les résultats locaux de Codex, les événements App Server et les rappels HTTP conçus par vos soins.
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Les modèles d’exécution et d’événements du SDK et d’App Server ont été vérifiés. La partie sur les rappels HTTP est un conseil pour une architecture personnalisée ; elle ne prétend pas qu’il existe un contrat Webhook unifié de Codex Cloud.
  evidence:
    - label: Documentation officielle du SDK
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Protocole et événements App Server
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: fr
source_locale: zh-CN
source_revision: 8a84ab8
translation_status: draft
translated_at: '2026-09-20'
---

Après la fin d’une tâche, vous pouvez notifier un système interne par une valeur de retour, un code de sortie, un flux d’événements ou un rappel HTTP. Déterminez d’abord l’émetteur et le protocole, puis décidez si un Webhook est nécessaire.

## Ne pas confondre trois mécanismes

| Mécanisme | Mode de réception | Limite |
|---|---|---|
| Exécution locale du SDK ou de la CLI | Résultat du programme ou état du processus | Ce n’est pas une API de rappel HTTP hébergée |
| Événements App Server | Notifications JSON-RPC dans une connexion établie | Il faut se connecter, initialiser et traiter les messages selon le protocole |
| Rappel depuis votre runner | Requête HTTP envoyée par votre service | Vous définissez noms d’événements, signatures, tentatives et stockage |

`turn/completed` d’App Server est une notification du protocole ; l’état final peut être terminé, interrompu ou en échec. Vérifiez l’état et le résultat métier avant de déclencher un déploiement sur le seul nom de l’événement. Voir les [événements officiels](https://learn.chatgpt.com/docs/app-server).

Cette page n’a vérifié aucun point d’enregistrement Webhook unifié pour Codex Cloud, en-tête de signature ni contrat d’événement `task.completed`. Elle ne présente donc aucune URL, aucun en-tête ni tableau d’événements comme interface officielle. Si un produit précis offre des Webhooks, suivez sa documentation versionnée.

## Quand créer un rappel personnalisé

Une tâche CI unique peut généralement enchaîner sur son code de sortie et sa sortie sauvegardée. Elle n’exige pas de récepteur public simplement parce qu’elle est « asynchrone ».

Si votre système répartit des tâches entre processus et doit mettre à jour un ticket après la fin, vous pouvez concevoir ce flux interne :

```text
Votre file → runner contrôlé exécutant SDK/CLI → sauvegarde du résultat et de l’état
                                              → votre service de notification → ticket interne
```

Il s’agit d’un conseil d’architecture du site, pas d’une fonction de déploiement incluse dans le SDK. Voir [Présentation du SDK](/fr/guide/developer-platform/sdk-overview/) pour son lieu d’exécution et ses limites d’intégration.

## Ce que votre protocole doit définir

- **Identité et intégrité** : précisez comment le destinataire vérifie l’émetteur ; choisissez une authentification étudiée et n’inventez pas un « en-tête de signature officiel ».
- **ID stables et déduplication** : conservez ID de tâche, ID d’événement et nombre de tentatives ; une livraison répétée ne doit pas répéter un effet externe.
- **État et version** : distinguez fin d’exécution, échec, interruption et acceptation métier ; versionnez la charge utile.
- **Réception durable** : confirmez seulement après stockage ou mise en file fiable. Une erreur peut être retentée ; ne répondez pas « succès » avant de perdre l’événement.
- **Portée des données** : transmettez uniquement le résumé et les références sûres nécessaires en aval ; ne journalisez pas les secrets.
- **Conditions d’arrêt** : fixez un maximum de tentatives, une reprise humaine et un moyen d’annuler les actions suivantes.

Ce sont des exigences de conception à réaliser et vérifier, pas un exemple directement exécutable. La page ne connecte pas automatiquement un système de tickets, n’envoie pas de message et ne crée pas de déploiement.

## Scénarios minimaux de validation

Dans un environnement de test, vérifiez au moins le succès, l’échec, l’annulation, les événements dupliqués, une identité incorrecte et l’indisponibilité temporaire du destinataire. Une livraison répétée ne doit produire qu’un effet métier, une annulation ne doit pas passer pour un succès et un résultat généré non validé ne doit pas être publié directement.

Pour pratiquer, partez du [cas de tri des issues](/fr/cases/use-cases/team-automation/issue-triage-suggestions/) et de la [vérification planifiée des liens](/fr/cases/use-cases/team-automation/scheduled-link-check/) ; leur état documentaire est indiqué dans leurs pages respectives.
