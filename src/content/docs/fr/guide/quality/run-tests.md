---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique pourquoi la vérification doit faire partie de l'acceptation d'une tâche. Les exemples d'instructions et l'ordre des contrôles ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Exécuter les tests
description: Intégrer les étapes de vérification à la tâche.
locale: fr
source_locale: zh-CN
source_revision: "8b1e5c7"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 20
reviewed_at: '2026-10-26'
---
Après une modification, il faut un moyen de vérifier qu'elle n'a rien cassé d'évident.

Cette preuve peut prendre la forme de tests automatisés, d'une compilation réussie ou d'une série de vérifications manuelles précises.

## À quelle question les tests répondent-ils ?

Les tests répondent à une question très concrète :

> **Comment savez-vous que cette modification n'a pas aussi cassé autre chose ?**

Sans vérification, le résultat peut seulement « avoir l'air à peu près correct ».

Indiquez les commandes de test dans les critères d'acceptation de votre instruction. Si le dépôt ne contient pas de tests, exigez au minimum que le démarrage ou la compilation réussisse, ou demandez des étapes de vérification manuelle.

Un travail déclaré « terminé » sans contrôle repose souvent sur une appréciation subjective.

## Idées reçues

### 1. La vérification ne concerne pas uniquement les programmeurs

Les documents, les pages, la configuration et les contenus ont eux aussi besoin de contrôles adaptés.

### 2. Un dépôt sans tests doit quand même être validé

En l'absence de tests automatisés, exigez au moins l'une des vérifications suivantes :

- Une compilation réussie
- Un démarrage réussi
- Des étapes de contrôle manuel clairement définies

### 3. Une « petite modification » ne dispense pas automatiquement de vérifier

Même un petit changement peut avoir des effets secondaires, surtout si vous connaissez encore mal le projet.

## Ordre des vérifications

Si vous ne savez pas par où commencer, suivez cet ordre :

1. Exécutez les tests pertinents s'ils existent.
2. Sinon, compilez ou démarrez le projet.
3. Si cela ne suffit pas, ajoutez quelques contrôles manuels minimaux.

Le but est d'éviter une livraison sans aucune vérification, pas d'obtenir une couverture complète d'un seul coup.

## Une phrase à ajouter directement à votre instruction

Pour une première tâche, ajoutez :

```text
Après avoir terminé, exécute les vérifications pertinentes. S'il n'y a pas de tests automatisés, indique-moi les étapes manuelles minimales pour contrôler le résultat.
```

Ainsi, même si les tests du dépôt sont incomplets, la vérification reste prévue.

## À ajouter si nécessaire

Vous pouvez aussi préciser :

```text
Indique-moi les vérifications que tu as réellement exécutées. Si tu n'as pas pu les effectuer, explique pourquoi au lieu de les considérer comme réussies.
```

La vérification peut être légère, mais elle ne peut pas disparaître si « terminé » doit avoir un sens.
