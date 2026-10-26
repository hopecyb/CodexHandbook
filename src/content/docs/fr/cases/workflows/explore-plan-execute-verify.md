---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Recoupement avec les pages vérifiées du manuel sur la planification, le diagnostic, la définition de terminé, les tests et AGENTS.md ; cette page couvre la collaboration en quatre phases et ses points de contrôle, sans options produit susceptibles de changer.
  checkedAt: '2026-07-26'
title: Explorer—planifier—exécuter—vérifier
description: Adapter l'exploration, la planification, l'exécution et la vérification à la portée et aux incertitudes de la tâche, et préciser les décisions qui exigent une pause.
locale: fr
source_locale: zh-CN
source_revision: "4a95760"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---
C'est la méthode recommandée par ce manuel pour organiser une tâche, du moment où « on ne sait pas encore comment faire » jusqu'au résultat prêt à être accepté. Quatre phases ne signifient pas quatre approbations. Une petite tâche au périmètre clair peut être menée sans interruption ; il faut attendre une décision si la solution reste indéterminée ou si une autorisation nécessaire manque. Commencez par les [niveaux de tâche](/fr/prompts/ask-for-a-plan/).

## Aperçu des quatre phases

```text
① Explorer   → Comprendre l'état actuel, le périmètre et les risques
② Planifier → Étapes, fichiers, critères d'acceptation et arbitrages nécessaires
③ Exécuter  → Modifier code, documentation ou configuration dans le périmètre autorisé
④ Vérifier  → Tests, revue du diff et comparaison avec la définition de terminé
```

Si l'état actuel est incertain, explorez et planifiez d'abord pour éviter les corrections au hasard. Une correction de faute de frappe clairement délimitée n'exige pas quatre interactions. Voir [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/).

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

Le prompt ci-dessus limite explicitement la demande à la planification ; il faut donc attendre. Si la réalisation est déjà autorisée, demandez plutôt un plan bref suivi d'une exécution et d'une vérification continues dans le périmètre convenu. La pause dépend de l'autorisation, des arbitrages nécessaires et des permissions réelles, pas du nombre d'étapes du plan.

## ③ Exécuter

**Objectif :** Garder des modifications petites et réversibles.

- Se concentrer sur un sous-objectif à la fois
- Privilégier les chemins couverts par les tests
- Pour les détails courants de mise en œuvre, mettre le plan à jour et continuer ; si les hypothèses ou le périmètre changent, revenir à ② pour déterminer si une nouvelle décision est nécessaire

Formule de guidage : « Terminez le travail dans le périmètre autorisé ; si vous devez l'élargir, expliquez les conséquences précises et les choix possibles. »

## ④ Vérifier

**Objectif :** Prouver que la définition de terminé est satisfaite.

| Type de vérification | Approche |
|---|---|
| Automatique | Tests unitaires, lint, vérification de types |
| Manuelle | Lire le diff, tester manuellement les chemins critiques |
| Livrables | Captures d'écran, extraits de journaux, réponses API |

Voir [Définition de terminé](/fr/prompts/define-done/) et [Lancer les tests](/fr/guide/quality/run-tests/) pour les listes de contrôle.

## Adapter selon l'ampleur de la tâche

| Ampleur | Explorer | Planifier | Exécuter | Vérifier |
|---|---|---|---|---|
| Correction de typo | Vérifier le texte visé | Peut rester implicite | Court | Examiner le diff et vérifier selon les règles du projet |
| Bug sur un seul fichier | Léger | 3–5 étapes | Moyen | Tests + diff |
| Fonctionnalité multi-modules | Identifier les dépendances | Plan écrit ; attendre les arbitrages nécessaires | Réaliser par phases dans le périmètre autorisé | Tests selon l'impact + tests manuels |
| Incident de production | Diagnostic d'abord | Plan de retour arrière d'abord | Très petites étapes | Surveillance + rétrospective |

## Modèle de cas EPXV

Les équipes peuvent intégrer les quatre phases dans le [modèle de cas](/fr/cases/use-cases/case-study-template/) et les descriptions de PR pour un langage commun.

## Erreurs courantes

- Le plan reste dans la tête — l'exécution dérive
- La vérification se limite à « ça a l'air de tourner »
- Exploration insuffisante — mauvais module modifié
