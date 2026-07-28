---
title: "Cas : correction de bug avec vérification"
description: De l'échec du test à la correction minimale et à la régression — l'exemple de boucle la plus courante pour les développeurs.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Développeurs |
| Client | CLI ou IDE (dépôt local) |
| Durée estimée | 30–60 minutes |
| Date de vérification | 2026-07-25 |

## 1. Objectif et contexte

**Objectif :** Corriger une régression capturée par un test unitaire et ajouter des tests pour éviter une récidive.

**Critères de succès :**

- Le test en échec passe à nouveau
- Toute la suite de tests reste verte
- Le diff ne concerne que les fichiers nécessaires

**Hors périmètre :** Refactorisation à grande échelle, mise à niveau majeure des dépendances.

## 2. Préparation

- Cloner le dépôt, `pnpm install` (ou selon `AGENTS.md`)
- Confirmer la reproduction locale : `pnpm test -- path/to/failing.test.ts`
- Branche : `fix/issue-123-short-desc`

## 3. Flux de travail

### Explorer

```text
Ne modifiez pas encore le code. Lisez le test en échec @tests/auth/login.test.ts et l'implémentation @src/auth/login.ts,
expliquez la cause de l'échec en 5 points maximum, en citant les assertions et les numéros de ligne de la pile.
```

### Planifier

```text
Proposez un plan de correction : quels fichiers modifier, si de nouveaux tests sont nécessaires, comment vérifier.
Attendez ma réponse « exécuter » avant de modifier le code.
```

### Exécuter

```text
Exécutez les étapes 1–2 du plan. Après chaque étape, lancez uniquement les tests concernés.
```

### Vérifier

```text
Lancez la suite de tests complète ; résumez le diff pour ma revue ; ne faites pas de git push.
```

Humain : lisez le diff, confirmez l'absence de modifications non pertinentes, vérifiez selon [Examiner le diff](/guide/quality/review-diffs/).

## 4. Échec et reprise

| Problème | Traitement |
|---|---|
| Nouveaux échecs après correction | `git stash` ou annuler le commit, réduire la portée des modifications |
| Diagnostic erroné | Revenir à l'exploration, demander une nouvelle hypothèse |
| Test flaky | Stabiliser le test avant de corriger la logique métier |

## 5. Capitalisation

- Si ce type de bug se répète, ajoutez une convention dans `AGENTS.md`
- Vous pouvez extraire le Skill `$regression-guard` : exécuter la liste des tests critiques avant fusion

## 6. Chapitres connexes

- [Diagnostiquer avant de corriger](/cases/workflows/diagnose-before-fixing/)
- [Parcours développeur](/guide/learning-paths/developer/)
- [Exécuter les tests](/guide/quality/run-tests/)

---

**Statut :** verified  
**Produits concernés :** CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur le diagnostic, l'exécution des tests, l'examen des diffs et le parcours développeur ; ce contenu se limite au cas stable « du test en échec à la correction minimale et à la validation de régression ».
