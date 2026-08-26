---
title: Paramètres
description: Configurez le comportement quotidien de l'App de bureau, ses raccourcis, ses notifications et son apparence.
locale: fr
source_locale: zh-CN
source_revision: c599d50
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 90
---

Les paramètres personnalisent le comportement de l'App. Ils ne constituent pas toute la configuration des autorisations Codex. Conservez d'abord les valeurs par défaut et ne modifiez un réglage qu'après en avoir compris la portée.

Appuyez sur `Cmd + ,` sous macOS ou `Ctrl + ,` sous Windows, ou ouvrez Settings depuis le menu de l'application.

## Quatre sections à vérifier en premier

### General

- Déterminez si `Cmd + Enter` doit être utilisé pour envoyer un prompt multiligne.
- Déterminez si **Prevent sleep while running** permet à une tâche locale longue de continuer pendant votre absence.
- Le comportement de suivi détermine si un nouveau message réoriente immédiatement l'exécution actuelle ou attend le tour suivant.

Ce dernier réglage change le comportement d'une clarification. Réorientez l'exécution actuelle pour une correction urgente. Ouvrez une conversation distincte pour une exigence sans rapport.

### Keyboard shortcuts

Recherchez des commandes, modifiez leurs raccourcis ou restaurez les valeurs par défaut. Si un raccourci en ligne diffère de celui de votre App, utilisez celui affiché ici.

### Notifications

Choisissez quand afficher les notifications de fin de tour et si les demandes d'autorisation et les questions doivent être signalées. Consultez [Notifications et activité](/fr/guide/desktop-app/notifications/) pour des recommandations détaillées.

### Appearance

Choisissez l'apparence claire, sombre ou système, puis ajustez la couleur d'accentuation, l'arrière-plan, le premier plan, la police de l'interface, la police du code et leur taille. Pour les longues révisions de code, privilégiez le contraste et la lisibilité plutôt que les effets de thème.

## Ce que ces paramètres ne contrôlent pas

- Les règles du dépôt se trouvent dans `AGENTS.md`.
- La configuration persistante de la CLI et de l'Agent se trouve principalement dans `config.toml`.
- Le bac à sable, la politique d'approbation et la politique de l'organisation déterminent ensemble la disponibilité des fichiers, du réseau et des commandes.
- Une politique d'organisation gérée peut limiter les choix d'une personne.

La présence d'un réglage ne garantit donc pas que la tâche actuelle possède l'autorisation correspondante. Lorsqu'une opération est refusée, lisez [Autorisations et bac à sable](/fr/guide/permissions-and-sandbox/) avant d'élargir l'accès.

## Vérifier chaque modification

Ne modifiez qu'une catégorie de paramètres à la fois et vérifiez-la avec une conversation à faible risque. Consignez la valeur précédente. Si le comportement ne correspond pas à vos attentes, restaurez d'abord la valeur par défaut, puis contrôlez la version de l'App, les autorisations du système d'exploitation et la politique de l'organisation.

## Sources officielles

- [Paramètres de l'App de bureau ChatGPT](https://learn.chatgpt.com/docs/app/settings)
- [Principes de configuration Codex](https://learn.chatgpt.com/docs/config)
- [Autorisations](https://learn.chatgpt.com/docs/permissions)

---

**Statut :** verified

**Produit concerné :** App

**Dernière vérification :** 2026-08-26
