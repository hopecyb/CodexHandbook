---
title: Choisir un client Codex
description: Choisissez entre l'App de bureau, la CLI, l'intégration IDE et Cloud selon le lieu et la manière dont le travail s'effectue.
locale: fr
source_locale: zh-CN
source_revision: 1e89f67
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 2
---

Pour choisir votre premier point d'entrée Codex, inutile de comparer des dizaines de fonctionnalités. Commencez par répondre à une question : **où ce travail se déroule-t-il principalement ?**

![Schéma de sélection du client Codex : choisir l'App de bureau, la CLI, l'intégration IDE ou Cloud selon le lieu de travail](/diagrams/codex-client-selection-fr.svg)

## Choisir en 30 secondes

| Lieu de travail principal | Premier choix | Interaction la mieux adaptée |
|---|---|---|
| Entre plusieurs projets locaux et tâches parallèles | **App de bureau** | Suivre les tâches, réviser les diffs, traiter les approbations et gérer les travaux longs |
| Dans un terminal, des scripts ou un flux existant en ligne de commande | **CLI** | Confier des tâches, exécuter des commandes, combiner des scripts et automatiser |
| Dans VS Code, un éditeur compatible, Xcode ou JetBrains | **Intégration IDE** | Poser des questions avec le contexte de l'éditeur, puis modifier et réviser sur place |
| Dans des dépôts distants connectés et des environnements isolés | **Cloud** | Déléguer des exécutions distantes, paralléliser le travail et réviser les résultats plus tard |

Sans préférence nette, l'**App de bureau** constitue généralement le point de départ le plus clair. Si vous travaillez déjà principalement dans un terminal ou dans VS Code, rester dans cet environnement limite les changements de contexte.

## Le rôle de chaque point d'entrée

### App de bureau : piloter le travail local

L'App de bureau est utile lorsque vous devez garder visibles l'état des tâches, les modifications de fichiers et les approbations. Elle convient notamment pour :

- suivre plusieurs tâches ou projets en parallèle ;
- isoler des modifications concurrentes avec des worktrees ;
- réviser un diff avant de poursuivre ou de corriger le travail ;
- planifier un travail qui doit continuer à s'exécuter sur un projet local.

Exemple : confiez la correction d'une régression de connexion à une tâche et l'analyse en lecture seule d'un problème de performances à une autre, puis examinez les deux résultats séparément.

### CLI : intégrer Codex au travail dans le terminal

La CLI s'adresse aux personnes qui gèrent déjà leurs projets en ligne de commande. Elle reste au plus près des tests, de Git et des scripts, et permet de consigner facilement des étapes reproductibles dans la documentation de l'équipe.

```bash
codex
```

Exemple : démarrez Codex à la racine du dépôt et demandez-lui de reproduire un test en échec, d'identifier la cause racine, d'effectuer la modification minimale, puis de relancer le même test.

### Intégration IDE : travailler autour du code actuel

Utilisez l'intégration IDE lorsque la question est directement liée au fichier, à la sélection ou au diff que vous consultez. Deux formes d'intégration sont actuellement disponibles : VS Code, Cursor, Windsurf et les éditeurs compatibles utilisent l'extension Codex ; Xcode et les IDE JetBrains disposent de leurs propres points d'entrée Codex.

Exemple : sélectionnez une fonction difficile à comprendre, demandez à Codex d'en expliquer les entrées, les sorties et les chemins d'exception, puis de proposer des tests pour les cas limites.

### Cloud : déléguer dans un environnement distant isolé

Cloud convient aux dépôts distants connectés et aux tâches qui doivent s'exécuter indépendamment de votre ordinateur. Les tâches Cloud isolées sont adaptées à l'exploration parallèle, aux travaux longs et à une révision centralisée une fois l'exécution terminée.

Exemple : déléguez trois problèmes indépendants d'un dépôt à trois tâches Cloud, attendez leurs modifications et leurs preuves de vérification, puis examinez chaque résultat.

## Ces clients se complètent

Un même flux de travail peut passer d'un client à l'autre :

1. Clarifiez dans l'IDE un problème lié au fichier actuel.
2. Déléguez l'exploration plus longue à l'App de bureau ou à Cloud.
3. Exécutez les contrôles standard de l'équipe dans la CLI.
4. Revenez dans l'App de bureau ou l'interface de revue pour examiner le diff final.

La bonne question n'est pas « quel client est le plus puissant ? », mais **quel client est le plus proche du contexte actuel et rend le résultat le plus facile à vérifier ?**

## Deux scénarios courants

### Scénario 1 : première correction d'un bug réel

Commencez par l'App de bureau. La conversation, les modifications et les demandes d'autorisation restent visibles au même endroit. Une fois cette première boucle terminée, essayez la CLI ou l'IDE.

### Scénario 2 : l'équipe utilise déjà des commandes fixes et des conventions CI

Commencez par la CLI et consignez les commandes d'installation, de test et de formatage dans `AGENTS.md`. Codex pourra ainsi appliquer les mêmes règles du projet à chaque tâche.

## Vérifier immédiatement votre choix

Ne vous contentez pas de vérifier que le client s'ouvre. Realisez cette boucle dans un dépôt d'exercice :

1. Demandez à Codex de lire et d'expliquer un fichier.
2. Demandez une petite modification réversible.
3. Examinez le diff, pas uniquement la réponse finale.
4. Exécutez une commande de vérification.
5. Assurez-vous de savoir refuser ou restreindre une demande d'autorisation.

Consultez la [comparaison des fonctionnalités](/fr/guide/reference/feature-comparison/) pour la matrice complète et [Autorisations et bac à sable](/fr/guide/permissions-and-sandbox/) pour les limites d'exécution.

---

**Statut :** verified

**Produits concernés :** App / CLI / IDE / Cloud

**Base de vérification :** comparaison avec la documentation officielle actuelle de l'App de bureau ChatGPT, de Codex CLI, des intégrations IDE et de Cloud. Les recommandations reposent sur le lieu et le mode de travail, et distinguent l'extension compatible VS Code des intégrations propres à Xcode et JetBrains.

**Dernière vérification :** 2026-08-26
