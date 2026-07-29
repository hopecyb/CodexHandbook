---
title: Bac à sable et réseau
description: Isolation d'exécution, accès réseau et limites de risque.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 80
---

Le **Bac à sable** limite les parties du système de fichiers et du système qu'un Agent peut toucher, réduisant le rayon d'explosion des erreurs. L'**accès réseau** est une couche de risque distincte : il peut fuiter des informations sensibles des Prompts ou récupérer des données non fiables.

## Position par défaut pour les débutants

1. Pour la première pratique, désactivez l'accès réseau inutile, ou autorisez uniquement ce dont vous avez clairement besoin
2. Ne mettez pas de secrets de production dans un projet d'entraînement
3. Lorsque vous voyez des demandes de « se connecter » ou « écrire sur des chemins sensibles », faites une pause, lisez, puis approuvez

Paramètres produit : App de bureau [Paramètres](/guide/desktop-app/settings/) ; détails officiels : [https://developers.openai.com/codex](https://developers.openai.com/codex).

---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
