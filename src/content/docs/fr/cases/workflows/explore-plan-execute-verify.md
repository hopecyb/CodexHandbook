---
title: Exploration—planification—exécution—vérification
description: Flux de travail principal par défaut de Codex — quatre points de contrôle par phase, plus fiable que « tout en une fois ».
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

C'est le flux de travail par défaut recommandé par ce manuel — de « on ne sait pas encore comment » à « prêt à fusionner ».

## Aperçu des quatre phases

```text
① Explorer     → Comprendre l'état actuel, le périmètre, les risques
② Planifier    → Étapes, fichiers, critères d'acceptation (les grandes tâches nécessitent votre confirmation)
③ Exécuter     → Modifier code/docs/config par petites étapes
④ Vérifier     → Tests, revue du diff, contrôle par rapport à la définition de terminé
```

Ne sautez pas ①② pour aller directement à ③ — cela devient souvent du « patch au hasard ». Voir [Diagnostiquer avant de corriger](/cases/workflows/diagnose-before-fixing/).

## ① Explorer

**Objectif :** Décrire l'état actuel avant de décider quoi modifier.

Exemple de prompt :

```text
Ne modifiez pas encore le code. Lisez @src/auth/ et les tests associés ; listez :
1. Le flux de connexion actuel
2. Les fichiers possiblement liés au bug de mise en page Safari
3. Un point dont vous n'êtes pas sûr et que je dois confirmer
```

Livrable : énoncé du problème, périmètre d'impact, éléments à confirmer.

## ② Planifier

**Objectif :** Une liste d'étapes vérifiable.

```text
Sur la base de l'exploration ci-dessus, proposez un plan : étapes numérotées, fichiers concernés, comment vérifier chaque étape.
N'écrivez pas de code tant que je n'ai pas répondu « exécuter selon le plan ».
```

Les changements importants ou à haut risque nécessitent d'abord une confirmation. Pour les petites tâches, on peut convenir que « un plan de moins de 3 étapes peut s'exécuter automatiquement » — l'écrire dans [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/).

## ③ Exécuter

**Objectif :** Garder des modifications petites et réversibles.

- Se concentrer sur un sous-objectif à la fois
- Privilégier les chemins couverts par les tests
- Si le plan dévie, **revenir à ②** plutôt que de forcer

Formule de guidage : « Exécutez l'étape 2 ; si le plan doit changer, arrêtez-vous et expliquez d'abord. »

## ④ Vérifier

**Objectif :** Prouver que la définition de terminé est satisfaite.

| Type de vérification | Approche |
|---|---|
| Automatique | Tests unitaires, lint, vérification de types |
| Manuelle | Lire le diff, tester manuellement les chemins critiques |
| Livrables | Captures d'écran, extraits de journaux, réponses API |

Voir [Définition de terminé](/prompts/define-done/) et [Lancer les tests](/guide/quality/run-tests/) pour les listes de contrôle.

## Adapter selon l'ampleur de la tâche

| Ampleur | Explorer | Planifier | Exécuter | Vérifier |
|---|---|---|---|---|
| Correction de typo | Peut être omis | 1 étape orale | Court | lint |
| Bug sur un seul fichier | Léger | 3–5 étapes | Moyen | tests + diff |
| Fonctionnalité multi-modules | Obligatoire | Plan écrit + confirmation | Par phases | tests complets + test manuel |
| Incident de production | Diagnostic d'abord | Plan de retour arrière d'abord | Très petites étapes | Surveillance + post-mortem |

## Modèle de cas EPXV

Les équipes peuvent intégrer les quatre phases dans le [modèle de cas](/cases/use-cases/case-study-template/) et les descriptions de PR pour un langage commun.

## Erreurs courantes

- Le plan reste dans la tête — l'exécution dérive
- La vérification se limite à « ça a l'air de tourner »
- Exploration insuffisante — mauvais module modifié

## Sources de référence

- CodexGuide — conception de tâches et méthodes de vérification
- Livre orange « chaîne complète de la demande à la livraison »

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les pages vérifiées sur la planification, le diagnostic, la définition de terminé, l'exécution des tests et `AGENTS.md` ; le contenu se limite à la chaîne principale de collaboration en quatre phases et aux points de contrôle, sans paramètres produit volatils ni détails d'entrée.
