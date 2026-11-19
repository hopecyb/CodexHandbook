---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique comment demander des précisions et rectifier le travail lorsque les informations manquent. Les notions, les formulations proposées et l'ordre des étapes ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Gérer l'incertitude
description: Demander des précisions plutôt qu'inventer quand il manque des informations.
locale: fr
source_locale: zh-CN
source_revision: "839ce22"
translation_status: stale
translated_at: '2026-09-20'
sidebar:
  order: 50
reviewed_at: '2026-10-26'
---
Quand les informations manquent, clarifiez-les avant de poursuivre.

Avec Codex, l'un des cas les plus gênants est de le voir combler une lacune par une réponse qui paraît plausible. Si l'hypothèse de départ est fausse, les étapes suivantes s'égarent aussi.

## Que signifie « incertitude » ?

Ici, l'incertitude désigne surtout les situations où :

- les preuves disponibles ne permettent pas encore de confirmer un point ;
- l'information pertinente ne figure pas dans le contexte actuel ;
- continuer à deviner augmenterait le risque.

Mieux vaut préciser à l'avance quand Codex doit s'arrêter pour demander confirmation.

Ajoutez ceci à votre instruction :

```text
Si les informations sont insuffisantes, pose d'abord une question. N'invente ni chemins de fichiers, ni API, ni règles métier.
```

Si vous repérez un élément inventé, arrêtez le travail, corrigez les faits et, si nécessaire, ouvrez une nouvelle conversation.

## Comment décider

Ne continuez pas sur une supposition si une conclusion présente l'un de ces signes :

- Les fichiers actuels ne contiennent aucune preuve à l'appui.
- Vous n'avez pas explicitement fourni cette règle métier.
- Elle dépend d'un fait externe dont la source n'a pas été vérifiée.
- Une erreur se répercuterait sur plusieurs étapes suivantes.

## Idées reçues

### 1. Une réponse complète ne signifie pas que Codex sait réellement

Un texte peut paraître cohérent parce que les lacunes ont été comblées, sans que ces détails existent dans votre projet.

### 2. Des informations incomplètes n'invitent pas à remplir tous les blancs

Il est utile de donner le maximum d'informations, mais les informations incomplètes sont fréquentes dans la pratique.

Deux points comptent davantage :

- Codex s'arrête pour clarifier ce qui manque.
- Vous l'autorisez à poser des questions plutôt qu'à tout deviner.

### 3. Poser des questions ne ralentit pas forcément le travail

Une étape supplémentaire au début évite souvent des corrections plus tard.

Bien des problèmes prennent de l'ampleur après un « on va commencer en devinant ».

### 4. Si vous repérez une supposition, arrêtez-vous avant de poursuivre

Arrêtez d'abord l'erreur, puis suivez cet ordre :

1. Indiquez précisément ce qui est faux.
2. Fournissez l'information correcte.
3. Si nécessaire, demandez à Codex de reprendre à partir des faits corrigés.

## Formulation à ajouter directement

Pour limiter les suppositions, écrivez :

```text
Si tu ne peux pas confirmer un point à partir des fichiers existants ou des informations que je t'ai données, pose-moi d'abord une question au lieu de combler toi-même les lacunes.
```

## Une phrase de plus

Vous pouvez aussi ajouter :

```text
S'il existe plusieurs interprétations possibles, énumère d'abord les points sur lesquels tu hésites, puis continue.
```

Le plus problématique est de traiter une supposition comme un fait et de poursuivre le travail sur cette base.
