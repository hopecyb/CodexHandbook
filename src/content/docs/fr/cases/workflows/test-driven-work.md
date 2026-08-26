---
title: Travail piloté par les tests
description: Définir ou ajouter d'abord des tests en échec, puis guider l'implémentation — acceptation objective des modifications Codex.
locale: fr
source_locale: zh-CN
source_revision: 9fb480f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Le **travail piloté par les tests** (TDD ou « tests d'abord ») consiste à faire échouer les tests d'abord, puis à implémenter le minimum pour les faire passer. Cela convient aux dépôts avec infrastructure de tests et se relie directement à des cas comme [Corriger un bug avec vérification](/fr/cases/use-cases/software-development/fix-a-bug-with-verification/).

## Ce que couvre cette page

- Quand exiger « écrire/lancer les tests d'abord »
- Comment inciter Codex à ne pas sauter les étapes de test
- Stratégie de retour arrière quand les tests échouent

## Public visé

- Dépôts avec tests unitaires/intégration
- Bugs de régression, changements de comportement API, refactorisations

Peu adapté : prototypes sans tests, modifications ponctuelles de texte sur un site marketing. Préférer l'[EPXV](/fr/cases/workflows/explore-plan-execute-verify/) avec vérification manuelle.

## Approche minimale viable

```text
1. Écrire un test en échec pour le comportement attendu (ou pointer vers un échec existant)
2. Implémenter uniquement le code minimal pour faire passer ce test
3. Lancer la suite de tests concernée, puis la suite complète
4. Ne pas supprimer des assertions ni mocker la logique réelle juste pour passer
```

Prompt :

```text
En TDD : écrivez d'abord un test en échec pour « entrée vide retourne [] » dans @src/foo.ts ;
lancez les tests pour confirmer l'échec, puis modifiez l'implémentation ; à chaque étape, lancez uniquement le fichier de test concerné.
```

## Flux de travail recommandé

| Phase | Livrable |
|---|---|
| Rouge | Test en échec + explication de l'échec |
| Vert | Implémentation minimale + tests au vert |
| Refactor | Nettoyage sous protection des tests (étape séparée optionnelle) |

À combiner avec [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/) : lire d'abord les assertions en échec et la pile, puis modifier l'implémentation.

## Erreurs courantes

- Déclarer terminé sans lancer les tests
- Modifier les tests pour coller à une mauvaise implémentation
- Lancer un seul test mais prétendre que tout est au vert
- Relancer toute la suite E2E lente à chaque itération — utiliser `-t` ou un filtre par fichier

## Limites de sécurité

- Les commandes de test doivent rester dans le cadre des [règles de commande](/fr/guide/customization/rules/command-rules/)
- Les tests d'intégration touchant l'API de production doivent être interdits dans la spec ou utiliser des mocks

## Liste de contrôle d'acceptation

- [ ] Preuve d'échec→succès des tests (journaux ou CI)
- [ ] Suite complète ou périmètre convenu au vert
- [ ] Le diff ne contient pas de suppressions de tests non liées
- [ ] Aligné avec la [Définition de terminé](/fr/prompts/define-done/)

## Chapitres connexes

- [Lancer les tests](/fr/guide/quality/run-tests/)
- [Cas : Corriger un bug avec vérification](/fr/cases/use-cases/software-development/fix-a-bug-with-verification/)

---

**Statut :** verified  
**Produits concernés :** CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur l'exécution des tests, la définition de terminé, la correction de bug avec vérification et les règles de commande ; cette page se concentre sur le mode stable « faire échouer les tests d'abord, puis implémentation minimale pour passer ».
