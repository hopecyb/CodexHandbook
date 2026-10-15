---
legacyVerification:
  status: verified
  products: IDE
  basis: La documentation actuelle du centre d'aide OpenAI sur l'utilisation de Codex avec un forfait ChatGPT prend toujours en charge l'extension IDE Codex, aux côtés de la CLI et de l'application de bureau comme clients locaux. Cette page guide seulement le chapitre IDE et souligne la méthode stable fondée sur le fichier actif, la sélection et l'examen du diff.
  checkedAt: '2026-07-26'
title: Extension IDE
description: 'Utiliser Codex dans l''éditeur : installation, contexte, tâches locales et cloud, revue et réglages.'
locale: fr
source_locale: zh-CN
source_revision: c2fa50b
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 12
---

L'extension IDE convient au travail où l'on **écrit tout en examinant le diff** : ouvrez un fichier, sélectionnez du code et décrivez une tâche dans le panneau latéral. Ce chapitre couvre tout le parcours, du choix de l'éditeur à la revue du résultat.

Si vous écrivez habituellement du code ou modifiez des documents dans un éditeur, l'IDE est souvent le point de départ le plus naturel.

Le fichier ouvert et la sélection actuelle peuvent servir de contexte, ce qui aide à limiter la portée des petites modifications.

![Illustration : un bloc de code sélectionné dans l’éditeur ; dans le panneau latéral, un assistant propose une modification avec un bouton d’acceptation](/illustrations/ide.webp)

## Navigation du chapitre

| Sujet | Page |
|---|---|
| Choix de l'éditeur | [Éditeurs pris en charge](/fr/guide/ide/supported-editors/) |
| Installation | [Installation](/fr/guide/ide/installation/) |
| Contexte | [Contexte de l'éditeur](/fr/guide/ide/editor-context/) · [Sélection et fichiers ouverts](/fr/guide/ide/selected-code-and-open-files/) |
| Flux de travail | [Tâches locales](/fr/guide/ide/local-task-workflow/) · [Tâches cloud](/fr/guide/ide/cloud-task-workflow/) |
| Qualité | [Examiner les modifications](/fr/guide/ide/reviewing-changes/) |
| Configuration | [Paramètres](/fr/guide/ide/settings/) |
| Dépannage | [Dépannage](/fr/guide/ide/troubleshooting/) |

Pour commencer : [installer l'extension IDE](/fr/guide/getting-started/install-ide-extension/) · [choisir un client Codex](/fr/guide/choose-your-client/)

## Trois points à remarquer d'abord

Lors de votre première utilisation, notez que :

1. L'extension peut se référer au fichier actuellement ouvert.
2. Une sélection permet de définir un périmètre plus précis.
3. Vous devez tout de même examiner le diff après la modification.

L'extension IDE convient aux petites tâches que l'on peut vérifier au fur et à mesure. Il reste nécessaire de maîtriser le périmètre et d'examiner le résultat.
