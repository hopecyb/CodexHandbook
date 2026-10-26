---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Ce choix d'outils guidé par la tâche a été recoupé avec les chapitres actuels du manuel et les catégories d'outils. Privilégier les fichiers pour le contenu du projet, le terminal pour les commandes de vérification, la recherche pour les faits publics et le navigateur pour une page réelle.
  checkedAt: '2026-07-26'
title: Choisir un outil
description: Quand utiliser le terminal, la recherche, le navigateur ou un autre outil.
sidebar:
  order: 10
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "9fdb366"
reviewed_at: 2026-10-26
---

« Choisir un outil » consiste à trouver la méthode efficace et sûre pour accomplir la tâche. Il est généralement plus clair de partir du type de travail.

## Quels critères examiner ?

Demandez-vous :

- Quel outil correspond le mieux à la tâche actuelle ?
- Lequel donne le résultat au moindre coût ?
- Lequel comporte le moins de risques et se vérifie le plus facilement ?

Un mauvais choix ne provoque pas forcément un échec, mais il ajoute souvent du temps, des détours et des surprises évitables.

| Besoin | À privilégier |
|---|---|
| Modifier des fichiers du dépôt | Outils de fichiers |
| Exécuter des tests ou une compilation | Terminal |
| Vérifier des faits publics | Recherche Web |
| Examiner une page réelle | Navigateur (avancé) |

Précisez dans votre consigne quels outils sont autorisés ou interdits pour éviter un accès réseau ou une installation de dépendances imprévus.

## Si le choix n'est pas évident

Posez-vous trois questions :

1. S'agit-il d'un projet local ou d'un fait extérieur ?
2. Faut-il effectuer une action ou seulement observer un résultat ?
3. Quel outil permet de réaliser cette étape dans le périmètre le plus restreint ?

Par exemple, examinez les changements de code avec les outils de fichiers, vérifiez une compilation dans le terminal, regardez une page actuelle dans le navigateur et confirmez une information publique récente par la recherche Web.

## Idées reçues

### 1. Le plus puissant n'est pas toujours le meilleur

Un outil plus puissant peut avoir un effet plus large, présenter plus de risques et demander une meilleure compréhension de ses actions.

### 2. Le terminal sait presque tout faire, mais n'est pas toujours le premier choix

Le navigateur montre plus directement l'apparence réelle d'une page. Pour un numéro de version public, une recherche Web convient mieux qu'une série de commandes exécutées un peu partout.

### 3. Comment choisir quand on hésite ?

Retenez cette règle :

- **Lire ou modifier le projet :** outils de fichiers.
- **Lancer une vérification ou une compilation :** terminal.
- **Contrôler des faits publics :** recherche.
- **Voir le rendu réel d'une page :** navigateur.

### 4. Une tâche peut employer plusieurs outils

Les tâches réelles les combinent souvent : lire des fichiers puis compiler, chercher un fait public puis corriger la documentation, ou examiner une page dans le navigateur puis réparer son code. Choisissez l'outil le plus adapté à chaque étape sans vous imposer un seul outil pour toute la tâche.

## Une consigne réutilisable

```text
Pour cette tâche, privilégie les fichiers et le terminal. Ne fais pas
de recherche sur Internet. Si un contrôle dans le navigateur est nécessaire,
explique d'abord pourquoi.
```

Commencez par l'outil le plus restreint et le plus proche de la tâche, plutôt que par celui dont les effets sont les plus larges.
