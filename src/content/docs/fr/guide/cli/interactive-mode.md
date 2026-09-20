---
legacyVerification:
  status: verified
  products: CLI
  basis: L'introduction actuelle de la CLI dans l'aide d'OpenAI présente toujours le démarrage de Codex dans un terminal, l'échange pendant l'exécution et l'approbation des actions si nécessaire comme flux de base. Cette page décrit le mode interactif et les premiers pas sans dépendre d'une liste fixe de raccourcis.
  checkedAt: '2026-07-26'
title: Mode interactif
description: Dialoguer avec Codex et accomplir des tâches dans le terminal.
sidebar:
  order: 20
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 822e8f7
---

En « mode interactif », vous échangez avec Codex dans le terminal. Il peut expliquer et agir, puis attendre votre confirmation lorsque c'est nécessaire. C'est l'un des usages courants de la CLI.

Après avoir lancé une session interactive :

1. Démarrez dans le dossier du projet ou définissez le répertoire de travail conformément à la documentation.
2. Rédigez une consigne aussi soignée que dans l'application.
3. Approuvez ou refusez les appels d'outils quand cela vous est demandé.
4. Utilisez les commandes commençant par `/`, si elles existent, pour gérer la session ; consultez l'aide de votre version de la CLI.

Les conseils sur les [consignes](/fr/prompts/) restent valables.

## Tâches adaptées au mode interactif

Ce mode convient aux travaux qui exigent des décisions au fil de l'eau :

| État de la tâche | Pourquoi interagir |
|---|---|
| Les exigences ne sont pas encore complètement définies | Vous pouvez les préciser en cours de route |
| Vous devez examiner un diff avant de décider de la suite | Vous pouvez approuver ou resserrer le périmètre progressivement |
| Vous essayez un flux pour la première fois dans un projet | Vous voyez mieux ce que Codex lit et modifie |
| La tâche touche aux permissions, à des outils externes ou à l'écriture de fichiers | Une personne peut contrôler les étapes importantes |

Quand la tâche est assez stable pour ne plus nécessiter d'échanges, envisagez le [mode non interactif](/fr/guide/cli/non-interactive-mode/) ou une automatisation.

## Idées reçues

### 1. Dans le terminal, peut-on rédiger une consigne moins précise ?

Non. Seul le point d'entrée change ; la qualité de la description reste essentielle. Exprimez clairement l'objectif, les limites et les critères de fin.

### 2. Pourquoi démarrer dans le dossier du projet ?

La CLI doit savoir sur quel projet elle travaille. Un mauvais répertoire peut masquer des fichiers nécessaires, entraîner des changements au mauvais endroit ou empêcher la lecture des règles du projet.

### 3. Une demande d'approbation indique-t-elle une erreur ?

Souvent, cela signifie simplement que Codex respecte une limite de permission, pas qu'il a échoué.

## Un premier exercice simple

Pour commencer, lancez Codex à la racine du projet, ne modifiez qu'un fichier et demandez ensuite un résumé des changements.

Le mode interactif de la CLI est un flux de tâche conversationnel dans le terminal. Choisissez le bon répertoire et une consigne claire.
