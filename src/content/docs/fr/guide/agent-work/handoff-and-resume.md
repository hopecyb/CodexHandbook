---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Recoupé avec les indications publiques actuelles d’OpenAI Developers sur les tâches longues, la continuité de l’objectif et les formes de collaboration avec Codex. La page ne conserve que la méthode stable selon laquelle une note de passation doit aider la prochaine reprise ; elle ne présente aucun bouton ou processus propre à un produit comme une règle fixe."
  checkedAt: "2026-07-26"
title: "Passation et reprise"
description: "Poursuivre un travail inachevé d’une session à l’autre."
sidebar:
  order: 40
locale: fr
source_locale: zh-CN
source_revision: f4cbe6a
translation_status: draft
translated_at: 2026-09-20
---
Cette page traite d’une question courante :

> **Si je n’ai pas terminé cette fois, comment reprendre la prochaine fois ?**

Sans passation, rouvrir la tâche peut provoquer trois problèmes :

- Vous oubliez où vous en étiez.
- Codex ignore quelles contraintes restent valables.
- La nouvelle conversation disperse l’ancien contexte et recommence les mêmes détours.

## Que conserve exactement une passation ?

Transmettre et reprendre le travail revient à laisser une fiche à la personne qui continuera. Cette « personne » peut être :

- Vous-même quelques heures plus tard.
- Une autre tâche nouvellement ouverte.
- Une autre personne qui collabore.
- Codex lorsqu’il reprend le relais.

La passation n’est donc pas un long récit : elle conserve **les informations vraiment nécessaires pour continuer**.

## Que faut-il au minimum transmettre ?

Une note de passation devrait comprendre au moins :

- L’objectif et l’état actuel.
- Les fichiers déjà modifiés.
- Les contraintes encore en vigueur.
- La prochaine action unique.
- La méthode de vérification.

Si possible, ajoutez aussi :

- Pourquoi le travail s’est arrêté à ce point.

La personne qui reprend ne verra ainsi pas seulement « à moitié terminé » ; elle saura si le temps a manqué, si une approbation est nécessaire ou si un véritable blocage est apparu.

## Malentendus fréquents

### 1. Transférer toute l’ancienne conversation suffit

En général, non. Elle contient des pistes explorées, des essais et des décisions devenues caduques. Ce qui compte, ce sont **les conclusions toujours valables maintenant**.

### 2. Plus la note est longue, mieux c’est

Deux extrêmes nuisent à la passation :

- Trop courte : des informations essentielles manquent.
- Trop longue : la prochaine action est introuvable.

Pour poursuivre, une note **brève, précise et exploitable** est souvent la meilleure.

### 3. Écrire seulement « il reste un peu, termine »

Cela aide très peu. Traduisez « terminer » en une action claire, par exemple :

- Exécuter `pnpm build`.
- Continuer la rédaction de `guide/verification.md`.
- Vérifier le rendu de l’image de titre sur `/guide/foundations/local-vs-cloud/`.

## Reprendre de façon plus sûre

Après avoir collé la note dans un nouveau fil, ne lancez pas immédiatement une grande modification. Faites d’abord trois vérifications :

1. L’objectif a-t-il changé ?
2. L’état actuel des fichiers correspond-il à la note ?
3. Pouvez-vous commencer par la « prochaine action unique » au lieu d’élargir de nouveau ?

Vous éviterez ainsi de dépendre d’un ancien contexte compressé, incomplet ou déformé.

Une bonne passation ne répète pas toute l’histoire : elle permet à la personne qui rouvre la tâche de savoir aussitôt où en est le travail, quoi faire ensuite et comment vérifier la fin.
