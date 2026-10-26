---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique uniquement le cadre objectif, contexte, actions et critères d'acceptation pour découper une tâche ; ses liens internes et la structure de son exemple ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer.
  checkedAt: '2026-07-26'
title: Objectifs, contexte et actions
description: Décomposer une interaction réussie en objectif, contexte, actions et critères d'acceptation.
locale: fr
source_locale: zh-CN
source_revision: "280cea9"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 30
reviewed_at: '2026-10-26'
---
Certaines tâches avancent sans difficulté, tandis que d'autres dévient au fil de la conversation. La différence tient souvent à la clarté du découpage de la tâche, et non à une variation soudaine de l'intelligence du modèle.

En bref : l'objectif dit « quel résultat final obtenir », le contexte dit « sur quoi s'appuyer », les actions disent « ce qu'il peut faire » et les critères d'acceptation disent « quand considérer le travail terminé ».

Une interaction fiable avec Codex comporte généralement quatre éléments :

1. **Objectif :** que faut-il livrer ?
2. **Contexte :** informations de fond, fichiers et contraintes utiles
3. **Actions :** étapes autorisées pour Codex, comme lire, modifier et exécuter
4. **Critères d'acceptation :** ce qui compte comme terminé et la façon de le vérifier

Le guide des prompts développe ce cadre ; voir [La structure d'une bonne tâche](/fr/prompts/task-anatomy/).

## Le rôle de chaque élément

Imaginez que vous confiiez une tâche à un assistant capable d'agir :

- **Objectif :** que doit-il livrer exactement ?
- **Contexte :** que doit-il savoir avant de décider ?
- **Actions :** peut-il lire et modifier des fichiers, exécuter des commandes ou chercher en ligne ?
- **Critères d'acceptation :** selon quelle norme direz-vous « c'est terminé » ?

L'absence d'un élément peut poser problème :

- Sans objectif : il peut s'activer sans viser le bon résultat
- Sans contexte : il devinera
- Sans limites d'action : il peut en faire trop ou hésiter à agir
- Sans critères d'acceptation : vous risquez de ne pas avoir la même définition de « terminé »

## Idées reçues

### 1. Il suffit d'énoncer l'objectif

Non.

« Aide-moi à modifier la page d'accueil » indique une direction, mais ne donne pas assez de précisions pour agir de façon fiable. Codex doit aussi savoir :

- Quel fichier modifier
- Quoi conserver
- À quoi ne pas toucher
- À quoi le résultat final doit ressembler

### 2. Plus il y a de contexte, mieux c'est

Trop peu de contexte pousse à deviner ; trop de contexte noie l'essentiel. Donnez **le contexte pertinent**, pas tout ce qui existe.

### 3. Puis-je laisser Codex décider seul des actions ?

Parfois, mais c'est moins fiable pour les débutants.

Les résultats sont généralement plus cohérents si vous précisez :

- Quels fichiers il peut modifier
- Qu'il ne doit pas installer de dépendances
- Qu'il ne doit pas changer la configuration
- Qu'il doit proposer une approche avant de modifier

## Un ordre à suivre si vous hésitez

Si vous ne savez pas structurer une tâche, répondez à ces quatre questions :

1. Quel résultat final est-ce que je veux ?
2. Quels éléments de contexte et contraintes doit-il respecter ?
3. Que peut-il faire et que ne peut-il pas faire ?
4. Selon quels critères vérifierai-je que c'est terminé ?

C'est plus clair que « occupe-toi de ce problème ».

## Un petit exemple

> Objectif : organiser la hiérarchie des titres dans `notes.md`.
> Contexte : ne modifier que ce fichier ; conserver l'ordre des paragraphes.
> Actions : modifier ce fichier ; ne pas installer de dépendances.
> Critères d'acceptation : à l'ouverture du fichier, les titres vont de H1 à H3 sans sauter de niveau.

Une tâche fiable précise au minimum l'objectif, le contexte, les limites des actions et la méthode de vérification.
