---
title: Notifications et activité
description: Configurez les alertes pour les tâches terminées, les demandes d'autorisation et les questions en attente de réponse.
locale: fr
source_locale: zh-CN
source_revision: 0869db2
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Les notifications vous indiquent qu'une tâche requiert votre attention. Elles ne remplacent pas la révision. L'App de bureau peut vous avertir lorsqu'un tour se termine et gérer séparément les alertes liées aux demandes d'autorisation et aux questions.

## Configuration recommandée

Ouvrez **Settings → Notifications** :

| Événement | Recommandation | Motif |
|---|---|---|
| Fin d'un tour | Notifier lors d'une exécution en arrière-plan | Inutile de surveiller une tâche longue en continu |
| Autorisation | Activer | Une demande sans réponse suspend la tâche |
| Question | Activer | Codex a besoin de votre réponse lorsqu'un contexte essentiel manque |

Le système d'exploitation doit également autoriser l'App de bureau ChatGPT à envoyer des notifications. Les activer dans l'App ne suffit pas si le système refuse l'autorisation.

## Gérer plusieurs conversations dans Activity

Lorsque Activity est disponible, sélectionnez la cloche dans la barre latérale pour afficher les conversations non lues, en cours ou en attente d'une réponse. Le raccourci est :

- macOS : `Cmd + Option + U`
- Windows : `Ctrl + Alt + U`

Les filtres dépendent de l'interface actuelle et peuvent inclure Work, Chat, Pinned et Scheduled. Un ordre de traitement utile est : autorisation ou saisie attendue → échec → tâche terminée en attente de révision → tâche toujours en cours.

## Que faire après une notification

- **Terminé :** ouvrez le diff et la sortie de vérification ; une notification ne vaut pas acceptation.
- **Demande d'autorisation :** confirmez la commande, la ressource cible, l'impact et la réversibilité.
- **Réponse attendue :** ajoutez uniquement le contexte nécessaire, sans élargir la tâche au passage.
- **Échec :** trouvez la première erreur significative, puis décidez de relancer ou d'ajuster les contraintes.

Les notifications de la CLI et de l'IDE fonctionnent différemment. L'IDE ne possède pas de paramètres de notification distincts. La CLI propose une configuration avancée pour les notifications de fin dans le TUI ou par programme externe. Les paramètres de l'App de bureau ne constituent pas un interrupteur global.

## Sources officielles

- [Notifications](https://learn.chatgpt.com/docs/notifications)
- [Paramètres de l'App de bureau](https://learn.chatgpt.com/docs/app/settings)

---

**Statut :** verified

**Produit concerné :** App

**Dernière vérification :** 2026-08-26
