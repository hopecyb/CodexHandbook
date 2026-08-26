---
title: Planification
description: Planifier d'abord, puis exécuter.
locale: fr
source_locale: zh-CN
source_revision: 75099ef
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Un plan doit inclure : étapes, fichiers concernés, risques, approche de Vérification. Vous approuvez le plan — pas seulement le bouton « démarrer ». Voir [Demander un plan](/fr/prompts/ask-for-a-plan/)

## Ajouter trois éléments aux tâches à haut risque

Si une tâche touche plusieurs fichiers, systèmes externes, permissions, scripts d'automatisation ou règles d'équipe, le plan doit aussi préciser :

| Élément | Pourquoi c'est important |
|---|---|
| Frontière de permissions | Quelles actions sont lecture seule, lesquelles demandent confirmation humaine |
| Méthode de récupération | Comment revenir à un état sûr si la piste est mauvaise |
| Déploiement par étapes | Valider d'abord dans un dossier test, projet exemple ou petit périmètre |

Demandez un plan découpé : analyse lecture seule, changement minimal, vérification, rollback. Toute écriture externe ou en lot doit être listée avant exécution.

---

**Statut :** en revue  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25
