---
title: Webhooks
description: Intégration événementielle — les webhooks reçoivent des notifications ; ils ne remplacent pas le design de flux de travail.
locale: fr
source_locale: zh-CN
source_revision: b718fb3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

« Webhook » semble abstrait.  
Simplement : quand quelque chose arrive, un système vous notifie activement.

Dans l'intégration Codex, cela répond à « quand un événement externe arrive, comment déclencher la suite ? »

## Entrée de section

- [Vue d'ensemble Webhooks](/fr/guide/developer-platform/webhooks/overview/)

## Ce que cette section couvre

- Comment les systèmes externes poussent des événements vers vous
- Quoi câbler après qu'un événement arrive
- Pourquoi un webhook n'est qu'un trigger, pas un design d'automatisation complet

Un webhook est comme une sonnette — il dit « quelque chose a arrivé » ; vous connectez encore le flux de travail.

---

**Statut :** vérifié  
**Produits concernés :** API / Cloud  
**Base de vérification :** Recoupement avec la structure actuelle de la sous-section webhooks et les liens d'entrée dans ce dépôt ; cette page ne décrit les webhooks que comme triggers d'événements dans l'intégration, sans fixer les champs d'événements ou contrats d'implémentation.  
**Dernière vérification :** 2026-07-26
