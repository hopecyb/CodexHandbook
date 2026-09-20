---
title: "Quand agir directement et quand demander un plan"
description: "Choisir entre exécution directe, planification et approbation d’une action précise selon le périmètre, l’incertitude et l’impact externe, avec deux comparaisons de prompts."
contentType: prompt
audiences: [beginner, developer, creator]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Les trois catégories de tâches et les deux comparaisons sont des conseils de collaboration éditoriaux. Les limites d’autorisation et d’exécution ont été vérifiées ; il ne s’agit pas de modes fixes du client ni d’une expérience sur le taux de réussite du modèle."
locale: fr
source_locale: zh-CN
source_revision: 706f11b
translation_status: draft
translated_at: 2026-09-20
---

Demander un plan dépend des décisions qui restent à prendre. Une modification au périmètre clair et facile à annuler peut être exécutée directement. Si la démarche est incertaine, planifiez d'abord. Avant une action précise qui exige une autorisation supplémentaire, arrêtez-vous. Demander un plan n'implique pas d'attendre une réponse de l'utilisateur après chaque étape.

## Commencer par classer la tâche

| Catégorie | Critères | Consignes recommandées | Quand s'arrêter |
|---|---|---|---|
| Exécuter directement | Entrées, périmètre et critères d'acceptation clairs ; modification réversible | Préciser où intervenir, ce qui constitue l'achèvement et les exclusions | Si le travail sort du périmètre ou si une information indispensable manque |
| Planifier d'abord | Choix d'architecture, périmètre incertain ou plusieurs étapes interdépendantes | Examiner l'état actuel, puis proposer la démarche, les effets et la vérification | Si un arbitrage revient à l'utilisateur ou si celui-ci demande expressément de revoir le plan d'abord |
| Action soumise à approbation | Une action précise aurait un effet externe non autorisé ou franchirait une limite de permission | Préparer un résultat examinable, puis nommer l'action, sa cible et ses effets | Avant cette action, en conservant le travail préparatoire déjà fait |

« Trois fichiers sont concernés » n'est pas un seuil d'approbation universel : un seul fichier de configuration de production peut avoir un effet considérable. Pour les fenêtres de confirmation du produit et les permissions réelles, voir [Permissions et bac à sable](/fr/guide/permissions-and-sandbox/). Ce tableau n'est pas la configuration des permissions de tous les clients.

## Comparaison 1 : corriger un texte local

Tâche : corriger deux fautes dans le README sans changer sa structure.

**Contre-exemple avec trop d'arrêts :**

```text
Dresse d'abord un plan et attends mon accord avant de lire les fichiers.
Après lecture, indique les deux changements prévus et attends mon accord.
Arrête-toi après chaque changement pour me demander, puis demande si tu dois vérifier.
```

Ces attentes n'apportent aucune décision nécessaire ; elles fragmentent une tâche déjà clairement autorisée.

**Formulation au périmètre précis :**

```text
Dans le corps de README.md, remplace les deux occurrences de « 帐户 » par « 账户 ».
Préserve les blocs de code, les liens et le reste du contenu. Effectue directement
les modifications, vérifie le diff et indique où tu es intervenu. Si tu ne
trouves pas exactement deux occurrences, explique l'écart avant de poursuivre ;
n'élargis pas la tâche à une révision complète du texte.
```

L'acceptation porte sur deux changements exacts et l'absence de modifications annexes. En général, cette tâche ne nécessite pas de nouveaux tests ; effectuez les vérifications adaptées selon les règles du projet.

## Comparaison 2 : modifier puis publier un site

Tâche : mettre à jour trois tutoriels et les publier sur le site de production. Il faut distinguer la préparation du contenu de l'effet de la publication.

**Contre-exemple à l'autorisation imprécise :**

```text
Écris d'abord un plan, puis modifie tout le site et mets-le en ligne.
```

Cette demande ne précise ni les contenus à modifier, ni la destination de publication, ni l'autorisation de remplacer la version en ligne.

**Formulation aux limites concrètes :**

```text
Mets à jour ces trois tutoriels et corrige leurs liens internes associés.
Lis l'état actuel et présente un plan bref, puis effectue les modifications,
la compilation et la vérification de l'aperçu dans ces fichiers et la navigation
concernée, sans attendre à chaque étape. Livre l'aperçu, un résumé des changements
et les résultats de vérification. La publication en production n'est pas encore
autorisée. Une fois la préparation terminée, indique la version à publier,
l'environnement cible et la méthode de retour arrière, puis attends ma
confirmation pour l'action de publication.
```

Dans ce cas, terminez le travail local avant de demander l'autorisation finale de publier. Si l'utilisateur a déjà explicitement autorisé la cible et l'action de publication précises, déterminez selon la politique en vigueur s'il est possible de poursuivre ; ne redemandez pas la même autorisation uniquement parce que ce modèle contient une demande de confirmation.

Ces deux comparaisons sont des exemples pédagogiques, ni des sorties réelles du modèle ni des mesures d'efficacité.

## Quand se limiter au plan

Si vous comparez encore des solutions, avez besoin d'un arbitrage budgétaire ou souhaitez explicitement examiner la conception avant de passer à l'exécution, limitez la tâche au plan :

```text
Pour ce tour, fais uniquement une proposition. Lis l'implémentation existante,
présente deux options, leur impact et leurs critères de vérification. Signale
les arbitrages qui nécessitent réellement ma décision. Ne modifie pas
l'implémentation. Passe à l'exécution une fois l'approche choisie.
```

Cette limite de phase explicite doit être respectée. L'autonomie habituelle de l'agent ne permet pas de passer directement à l'implémentation.

## Que conserver dans un plan

Un plan suffisant expose l'objectif, le périmètre touché, les étapes, la vérification et les arbitrages non résolus. Une réponse déjà connue n'a pas à devenir une question en attente de confirmation. Une tâche courte et peu risquée n'a pas besoin d'une section de retour arrière uniquement pour satisfaire un modèle.

Si une situation nouvelle apparaît pendant l'exécution, distinguez les détails ordinaires de mise en œuvre d'un changement d'objectif. Réglez les petits problèmes dans le périmètre initial et expliquez-les. Pour une nouvelle dépendance, un changement plus large, une modification d'interface ou une nouvelle action externe, vérifiez d'abord si l'autorisation couvre toujours l'action.

## Règles par défaut à inscrire dans les conventions du projet

```md
- Exécuter directement les tâches au périmètre clair et réversibles, avec une
  vérification adaptée.
- Pour les tâches complexes, présenter d'abord un plan bref ; attendre seulement
  si l'utilisateur veut d'abord l'examiner ou si un arbitrage nécessaire l'exige.
- Avancer sans confirmations répétées, tant que l'on reste dans le périmètre autorisé.
- Expliquer le problème précis si une donnée essentielle manque, si le périmètre
  est dépassé ou si une action non autorisée est requise.
- Ne pas considérer la fin des modifications locales comme une autorisation
  automatique de publier, d'envoyer des messages ou de supprimer des données.
```

Ces conseils de travail peuvent être ajustés ; ils ne remplacent pas les règles système, les politiques de l'organisation ni le bac à sable. Voir [Priorité du contexte](/fr/guide/context/context-priority/), [Planification](/fr/guide/agent-work/planning/) et [Schémas d'approbation humaine](/fr/cases/workflows/human-approval-patterns/).
