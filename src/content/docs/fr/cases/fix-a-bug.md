---
title: "Corriger un bug : par où commencer"
description: Choisissez le parcours de correction adapté à votre situation, puis poursuivez avec le cas complet et exécutable.
locale: fr
source_locale: zh-CN
source_revision: 27c707b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Cette page sert de point d'entrée rapide. Les étapes complètes, le code exécutable, les preuves de tests rouge/vert et les prompts propres à chaque phase sont regroupés dans [Corriger un bug avec vérification](/fr/cases/use-cases/software-development/fix-a-bug-with-verification/), afin d'éviter que deux versions ne divergent.

## Identifier l'étape manquante

| Situation actuelle | Point de départ |
|---|---|
| Vous savez seulement que le résultat est incorrect, sans reproduction stable | [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/) |
| Un test échoue de manière fiable | [Corriger un bug avec vérification](/fr/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Vous ne connaissez pas le module | [Comprendre une base de code](/fr/cases/understand-a-codebase/) |
| La correction est terminée et prête à être fusionnée | [Réviser une PR](/fr/cases/review-a-pr/) |
| Le test lui-même est instable | Commencez par [Exécuter les tests](/fr/guide/quality/run-tests/) ; un test flaky ne constitue pas une preuve de correction |

## Boucle de preuves minimale

Quel que soit le langage ou le framework, conservez cette chaîne de preuves :

1. Reproduisez le problème initial de façon fiable avec une commande précise.
2. Conservez l'assertion en échec, la sortie d'erreur et les conditions d'entrée.
3. Expliquez la cause racine avant d'appliquer la correction minimale.
4. Faites réussir le test initialement en échec et les nouveaux tests de limites.
5. Exécutez des contrôles de régression plus larges.
6. Lisez le diff manuellement et refusez toute modification sans rapport.

L'étape 4 sans l'étape 1 ne prouve pas que le test couvre le problème initial. De même, une suite complète au vert sans révision du diff ne prouve pas que le périmètre de la modification est correct.

## Pratiquer directement

Le dépôt contient un exemple JavaScript de remise sur un panier, sans dépendance tierce :

```bash
# Starter: one test is expected to fail
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# Reference solution: all three tests are expected to pass
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Tous les fichiers se trouvent dans [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix).

---

**Statut :** verified
**Produits concernés :** CLI / IDE
**Base de vérification :** cette page d'entrée ne maintient que le choix du parcours et une boucle d'ingénierie stable. Les commandes censées échouer puis réussir ont été exécutées dans le dépôt actuel.
**Dernière vérification :** 2026-08-25
