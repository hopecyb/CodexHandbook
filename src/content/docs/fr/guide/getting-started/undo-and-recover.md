---
title: Annuler et récupérer
description: Revenir en arrière en toute sécurité lorsque les résultats sont insatisfaisants.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 100
---

Lorsque les résultats dépassent la portée ou que la qualité est faible :

1. Utilisez la fonction annuler / restaurer les changements du client (selon l'interface actuelle)
2. Si le projet utilise Git : annulez les changements de l'arbre de travail à votre manière habituelle (les débutants peuvent ignorer Git et s'appuyer sur le répertoire d'entraînement)
3. Démarrez un nouveau Fil avec des contraintes plus strictes et réessayez

La prévention vaut mieux que la récupération : petite portée de fichiers, interdictions explicites, plan avant exécution.

## Utiliser les points de récupération comme outil d’exploration

La récupération ne sert pas seulement après une erreur. Elle aide aussi avant d'explorer plusieurs options.

Bons moments pour créer un point de récupération :

- Comparer deux directions d'implémentation
- Demander une refactorisation large à un Agent
- Tester scripts d'automatisation ou remplacements en lot
- Penser que le besoin changera bientôt

Rythme plus sûr : confirmer l'état sûr, demander les fichiers affectés, créer un point de récupération ou vérifier Git, modifier petit, relire diff et vérification, puis garder, revenir ou essayer une autre piste.

---

**Statut :** review  
**Produits concernés :** App / CLI / IDE  
**Dernière vérification :** 2026-07-25
