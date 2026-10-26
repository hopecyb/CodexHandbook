---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique que le terminal peut effectuer plus d'actions que les outils de fichiers et comporte davantage de risques. Elle insiste sur la compréhension des commandes avant approbation, leur périmètre d'écriture, leur accès réseau et les moyens de récupération. Ces principes ont été recoupés avec les chapitres du manuel sur les permissions, la vérification et les outils.
  checkedAt: '2026-07-26'
title: Shell et terminal
description: Capacités et risques de l'exécution de commandes.
sidebar:
  order: 20
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "1438fc7"
reviewed_at: 2026-10-26
---

Le terminal est l'un des moyens les plus directs de faire agir Codex. Il est efficace, mais demande une attention particulière aux risques.

## Pourquoi il est puissant et risqué

Les outils de fichiers manipulent surtout du texte. Le terminal agit directement sur le système d'exploitation et l'environnement d'exécution. Une fois utilisé, il peut faire bien plus que lire :

- Installer.
- Compiler.
- Tester.
- Supprimer.
- Créer un commit.
- Envoyer du code.

Avant de lancer une commande, déterminez où elle peut apporter des modifications.

Quelques principes :

- Comprenez la commande avant de l'approuver.
- Évitez `rm -rf`, les envois forcés, les modifications de configuration SSH et autres actions semblables, sauf si elles sont nécessaires et bien comprises.
- Intégrez les commandes de vérification aux critères d'acceptation.

Pour l'entrée correspondante dans l'application, voir le [terminal intégré](/fr/guide/desktop-app/integrated-terminal/).

## Pourquoi le risque est plus élevé

Le terminal ne se contente pas de suggérer : il exécute réellement. Une commande peut installer des dépendances, supprimer des fichiers, lancer des tests, réécrire une configuration ou envoyer du code. Si vous ne la comprenez pas, demandez une explication avant de l'autoriser.

## Quand utiliser le terminal

Il convient pour lancer des tests, compiler le projet, consulter l'état des fichiers et exécuter les scripts déjà présents. Pour voir l'apparence d'une page, consulter une information publique récente ou modifier quelques lignes connues, il n'est pas forcément le premier choix.

## Idées reçues

### 1. Faut-il maîtriser les commandes pour utiliser le terminal ?

Pas besoin de savoir en écrire beaucoup au départ. Il faut néanmoins comprendre approximativement ce que fait la commande, si elle modifie des fichiers ou le système, et si elle est liée à la tâche.

### 2. Une commande de test est-elle toujours sûre ?

Non. La plupart des tests présentent peu de risques, mais vérifiez s'ils écrivent beaucoup de fichiers, accèdent au réseau ou appellent un script que vous ne comprenez pas.

### 3. Que faire face à une commande incomprise ?

Demandez directement :

```text
Que fera cette commande ? Quels éléments modifiera-t-elle ?
Que se passera-t-il si nous ne l'exécutons pas ?
```

## Une consigne réutilisable

```text
Avant d'exécuter une commande, explique son but, si elle écrit des fichiers,
si elle accède au réseau et comment revenir à un état sûr en cas d'échec.
```

Avant de l'exécuter, vérifiez où cette commande peut apporter des changements.
