---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page présente uniquement une méthode de structuration des tâches. Les exemples et les liens internes ont été vérifiés ; le texte ne dépend pas de détails variables du produit, comme la version, le prix ou l’interface."
  checkedAt: "2026-08-25"
title: "Anatomie d’une bonne tâche"
description: Objectif, contexte, entrées, contraintes, acceptation et limites de permission.
locale: fr
source_locale: zh-CN
source_revision: "98c0511"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Quand une demande contient beaucoup d’informations sans structure, le résultat attendu, les limites et les critères d’acceptation se mélangent. Codex doit alors combler lui-même les vides.

Cette page propose une fiche de tâche réutilisable. Elle explique le rôle de chaque partie et montre comment la demande s’inscrit dans une boucle « explorer, planifier, exécuter, vérifier ».

## Pour qui ?

- Les personnes qui savent déjà ouvrir Codex, mais obtiennent parfois trop de modifications, un travail incomplet ou un résultat difficile à vérifier.
- Les développeurs, créateurs et équipes qui transforment une demande orale en tâche confiée à un Agent.
- Toute personne qui doit définir la portée, les permissions et les conditions d’arrêt d’une tâche longue.

## Structure d’une tâche

Vous pouvez organiser la demande autour de ces questions :

- Quel résultat faut-il obtenir ?
- Pourquoi le faire ?
- Quels matériaux sont nécessaires ?
- Où sont les limites ?
- Comment reconnaître que le travail est terminé ?

L’ordre peut varier, mais des réponses explicites rendent l’exécution plus stable.

## Modèle recommandé

```text
Objectif : … (livrable final)
Contexte : … (pourquoi c’est important, état actuel)
Entrées : … (fichiers, liens, contenu fourni)
Contraintes : … (périmètre modifiable, style, actions interdites)
Critères d’acceptation : … (conditions de fin observables)
Limites de permission : … (accès à Internet, installation de dépendances, modification de configuration)
Si des informations manquent : poser une question d’abord, sans deviner.
```

![De la description de tâche à un résultat vérifiable](/diagrams/task-execution-loop-fr.svg)

Les six éléments à gauche du schéma ne servent pas à allonger le prompt, mais à réduire les lacunes importantes. Une fois la tâche lancée, les preuves de vérification déterminent la suite : livrer si elle réussit ; sinon, revenir à la demande ou au plan avec les éléments de l’échec, au lieu de modifier à l’aveugle.

## Rôle de chaque partie

- **Objectif** : définir un résultat, pas seulement une action.
- **Contexte** : aider Codex à comprendre pourquoi cette approche compte.
- **Entrées** : rendre accessibles les fichiers, liens et matériaux indispensables.
- **Contraintes** : empêcher l’élargissement involontaire du périmètre.
- **Critères d’acceptation** : rendre la fin du travail vérifiable.
- **Limites de permission** : préciser à l’avance l’accès au réseau, l’installation de dépendances et les changements de configuration.

## Malentendus fréquents

### 1. Chaque partie doit être longue

Ce modèle ressemble davantage à une liste de contrôle qu’à un formulaire à remplir. Certaines tâches n’ont pas besoin d’un long contexte, mais l’omettre enlève aussi des éléments utiles à la décision.

### 2. Objectif et acceptation désignent la même chose

Ils ont deux rôles différents :

- **L’objectif** décrit le résultat souhaité.
- **L’acceptation** explique comment constater qu’il a été atteint.

### 3. Les entrées consistent à tout coller

La pertinence compte plus que la quantité. Indiquez clairement les matériaux que l’Agent doit absolument consulter.

## Modèle minimal de tâche

Pour commencer avec une version courte et utilisable :

```text
Objectif : transformer quoi en quel résultat
Entrées : fichiers ou pages concernés
Contraintes : ce qui peut être modifié et ce qui doit rester intact
Acceptation : comment je vérifierai que le travail est terminé
En cas d’incertitude : poser une question d’abord
```

## D’une demande vague à une tâche exécutable

### Demande initiale

```text
Améliore la page d’accueil de la documentation.
```

Cette phrase ne précise ni le public, ni le périmètre modifiable, ni ce qui rendrait la page meilleure. Même si Codex produit quelque chose, il sera difficile de savoir s’il a dépassé les limites attendues.

### Version exécutable

```text
Objectif : réécrire le texte du premier écran de la page d’accueil pour qu’une personne découvrant Codex comprenne en 30 secondes de quoi il s’agit et par où commencer.
Contexte : la page actuelle suppose que le lecteur connaît déjà les Agents, le contexte et les Skills ; les indications d’entrée ne sont pas assez directes.
Entrée : src/content/docs/guide/index.md
Contraintes : modifier uniquement ce fichier ; ne pas toucher à la navigation, aux styles ni aux composants ; expliquer simplement « Agent » à sa première apparition.
Critères d’acceptation :
- Le premier écran indique clairement l’objet du manuel, son public et la première page à lire.
- Le frontmatter et la hiérarchie des titres existants sont conservés.
- Aucun terme technique nouveau n’est introduit sans explication.
- La commande pnpm build réussit.
Limites de permission : lecture autorisée des pages liées du site ; pas d’accès à Internet, pas d’installation de dépendances, pas de commit Git.
Si des informations manquent : lister les éléments absents et les modifications envisagées, puis attendre ma confirmation.
```

### Déroulement attendu

1. Lire d’abord la page d’accueil et les pages d’entrée voisines, puis expliquer le problème actuel.
2. Proposer un plan court limité à un fichier.
3. Modifier le texte et montrer un résumé du diff.
4. Exécuter `pnpm build`.
5. Présenter, pour chacun des quatre critères d’acceptation, l’élément qui prouve qu’il est rempli.

## Comment vérifier votre demande

Avant de l’envoyer, demandez-vous :

- L’objectif décrit-il un résultat, ou seulement une action comme « optimiser », « traiter » ou « regarder » ?
- Les entrées contiennent-elles seulement les fichiers et matériaux vraiment pertinents ?
- Les contraintes disent-elles ce qu’il ne faut pas toucher ?
- Une autre personne pourrait-elle juger chaque critère d’acceptation comme « réussi » ou « échoué » ?
- L’accès au réseau, l’installation de dépendances, l’écriture dans un service externe ou un commit nécessitent-ils une autorisation préalable ?
- Si une information manque, l’Agent doit-il d’abord demander, examiner ou s’arrêter ?

Vous pouvez raccourcir le modèle selon la taille de la tâche. Mais supprimer une partie retire aussi une catégorie d’éléments utiles à la décision. Une coquille dans un seul fichier n’exige pas un long contexte ; une migration touchant plusieurs modules ne peut pas se limiter à une phrase d’objectif.

## Pour aller plus loin

- [Définir les critères de fin](/fr/prompts/define-done/)
- [Contraintes et limites](/fr/prompts/constraints-and-boundaries/)
- [Quand exécuter directement et quand planifier d’abord](/fr/prompts/ask-for-a-plan/)
- [Explorer, planifier, exécuter, vérifier](/fr/cases/workflows/explore-plan-execute-verify/)
