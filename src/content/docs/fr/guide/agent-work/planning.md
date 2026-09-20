---
title: "Planifier : clarifier le parcours d’exécution et la vérification"
description: "Utilisez un plan pour traiter le périmètre, les dépendances et les choix ; distinguez planification et attente, puis avancez dans le cadre déjà autorisé."
contentType: guide
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Cette page propose une méthode de travail, recoupée avec la classification des tâches et les permissions ; elle ne prétend ni décrire le comportement par défaut d’un client ni mesurer un gain d’efficacité."
sidebar:
  order: 10
locale: fr
source_locale: zh-CN
source_revision: 8696afd
translation_status: draft
translated_at: 2026-09-20
---
Un plan est un parcours d’exécution que l’on peut vérifier et ajuster. Il aide à repérer tôt les lacunes de périmètre, de dépendances et de critères d’acceptation. Une tâche plus importante n’exige pas pour autant des pauses répétées pour demander confirmation.

Commencez par la [classification des tâches](/fr/prompts/ask-for-a-plan/) : terminer directement, planifier puis exécuter dans le cadre autorisé, ou ne produire qu’une proposition pour cette fois. Une demande explicite de « proposer d’abord, sans modifier les fichiers » reste en lecture seule. Une demande d’implémentation ne doit pas se terminer avec un plan seulement.

## Un plan suffisamment précis

| Élément | Niveau de précision attendu |
|---|---|
| Objectif | Comportement observable une fois le travail terminé |
| Périmètre | Fichiers, entrées et exclusions concernés |
| Ordre | Véritables dépendances, sans transformer chaque appel d’outil en étape |
| Vérification | Sorties et contrôles qui prouveront l’achèvement |
| Choix | Seules les décisions encore ouvertes qui influent sur le résultat |

Pour ajouter un regroupement de données à un rapport existant, on peut prévoir « vérifier les définitions → modifier l’agrégation et l’affichage → comparer totaux et groupes sur un échantillon ». Il n’est pas nécessaire de demander une autorisation distincte pour chaque lecture, modification et test.

## Deux demandes de plan différentes

**La solution reste à déterminer :**

```text
Pour cette fois, analyse en lecture seule deux solutions d’export selon leurs dépendances, leur compatibilité et leur coût de maintenance.
Recommande une option et indique les choix que je dois faire. Ne modifie pas l’implémentation.
```

**Le périmètre est fixé et il faut implémenter :**

```text
Termine l’export CSV selon les exigences existantes. Inspecte d’abord le dépôt et donne un plan bref,
puis implémente et vérifie sans interruption dans le périmètre convenu. N’attends pas après chaque étape.
Si un nouveau service, une modification de l’interface publique ou un accès élargi aux données est nécessaire, explique d’abord pourquoi.
```

Ces exemples ont été conçus pour ce manuel. L’apparition d’une boîte d’approbation dépend des outils, politiques et permissions réels.

## Adapter le plan pendant l’exécution

- Détail d’implémentation ordinaire : mettez le plan à jour et continuez dans le cadre autorisé.
- Hypothèse initiale erronée : expliquez les preuves et les conséquences, puis proposez une autre solution dans le périmètre.
- Choix réservé à l’utilisateur : posez une question précise et poursuivez les travaux indépendants de la réponse.
- Action externe non autorisée : préparez un résultat examinable, puis demandez l’autorisation avant l’action.

Ne cessez pas le travail pour un problème seulement possible, mais ne suivez pas le plan au point d’ignorer un changement de périmètre avéré.

## Donner un retour sur le plan

```text
Garde les étapes 1 et 2, mais retire la refactorisation.
Cette fois, fais seulement un aperçu local ; ne publie pas.
Ajoute un critère d’acceptation : l’ancien format de fichier reste lisible.
```

Le retour ne change que ce qu’il mentionne clairement. Les contraintes et critères non retirés restent valables. Si le travail s’interrompt, consignez les fichiers actuels, les contrôles effectués et la prochaine étape dans une [note de passation](/fr/guide/agent-work/handoff-and-resume/).

## Revenir aux preuves à la fin

Vérifiez que l’objectif du plan est vraiment atteint, au lieu de simplement cocher toutes les étapes. Notez clairement les tests non exécutés, les aperçus non examinés et les faits non vérifiés. Voir le processus complet [Explorer → Planifier → Exécuter → Vérifier](/fr/cases/workflows/explore-plan-execute-verify/).
