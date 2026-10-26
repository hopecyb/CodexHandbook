---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page distingue uniquement fichiers, commandes et outils et explique comment évaluer leurs risques ; ses liens internes et exemples ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer.
  checkedAt: '2026-07-26'
title: Fichiers, outils et commandes
description: Comment Codex lit et écrit des fichiers, exécute des commandes et utilise des outils.
locale: fr
source_locale: zh-CN
source_revision: "9d65338"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 40
reviewed_at: '2026-10-26'
---
La principale différence avec un robot conversationnel ordinaire est que Codex peut agir à l'aide d'**outils**.

Les fichiers sont le contenu qu'il modifie, les commandes sont les actions qu'il exécute et les outils lui donnent les moyens d'agir.

Codex intervient sur le monde réel au moyen d'**outils** :

- Lire et écrire des fichiers du projet
- Exécuter des commandes dans un terminal si les autorisations et les règles du bac à sable le permettent
- Chercher sur le Web ou ouvrir un navigateur, selon les capacités du produit et les règles applicables

## Distinguer d'abord ces trois termes

| Terme | Signification |
|---|---|
| Fichier | Contenu réel du projet, comme du code, de la documentation ou de la configuration |
| Commande | Action exécutée dans un terminal, par exemple construire, tester ou rechercher |
| Outil | Capacité utilisée par Codex pour lire ou modifier des fichiers, exécuter des commandes ou chercher sur le Web |

On peut aussi les voir ainsi :

- Les **fichiers** sont les matériaux
- Les **commandes** sont les actions
- Les **outils** sont les instruments servant à manipuler les matériaux et à agir

## Déroulement courant

Après avoir reçu une tâche, Codex peut :

1. Lire quelques fichiers pertinents pour comprendre la structure du projet
2. Rechercher du texte, examiner des dossiers ou consulter la configuration si nécessaire
3. Exécuter une commande, comme un test ou une construction, pour vérifier le résultat
4. Modifier des fichiers, puis vous présenter les changements à examiner

Lorsqu'il demande à lire des fichiers ou à lancer des commandes, il suit souvent une étape normale de la tâche.

## Idées reçues

### 1. S'il peut exécuter des commandes, peut-il tout faire ?

Pas nécessairement.

Cela dépend :

- Des outils disponibles dans le produit utilisé
- De ce que permet le bac à sable
- D'une éventuelle approbation de votre part
- Des règles supplémentaires de votre équipe

### 2. Devrait-il lancer moins de commandes et modifier directement les fichiers pour aller plus vite ?

Pas nécessairement.

Une commande de vérification peut révéler un problème plus tôt. Exécuter les tests après une modification est plus fiable que découvrir bien plus tard qu'elle a cassé quelque chose.

### 3. Que faire si je ne comprends pas une commande ?

Demandez directement :

```text
Que fait cette commande ? Que va-t-elle modifier ? Que se passe-t-il si nous ne l'exécutons pas ?
```

## Une méthode simple pour juger une action

Quand Codex veut lire ou modifier des fichiers, ou exécuter une commande, demandez-vous :

1. Cette étape est-elle liée à mon objectif ?
2. Son impact se limite-t-il aux dossiers ou fichiers attendus ?
3. Pourrais-je facilement l'annuler en cas d'erreur ?

Si vous ne savez pas répondre à l'une de ces questions, demandez une explication avant de continuer.

## Principes d'utilisation

1. **Périmètre minimum nécessaire :** nommez les dossiers et fichiers ; évitez « modifie n'importe quoi dans le dépôt »
2. **Approbation des commandes dangereuses :** suppression, push ou modification de la configuration système, par exemple
3. **Choix réfléchi des outils :** voir [Choisir un outil](/fr/guide/tools/tool-selection/)

Les panneaux d'outils et les modes de confirmation varient selon le produit ; consultez les guides correspondants.

Codex ne se contente pas de « parler ». Il agit à l'aide de fichiers, commandes et outils : surveillez donc le périmètre et les risques.

À lire ensuite :

1. [Autorisations et approbations](/fr/guide/foundations/permissions-and-approvals/)
2. [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/)
3. [Exécuter sa première tâche](/fr/guide/getting-started/run-your-first-task/)
