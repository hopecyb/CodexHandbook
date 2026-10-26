---
title: "Référence de configuration"
description: Index conceptuel des clés de configuration Codex utilisateur et projet — chemins et champs selon la doc officielle.
locale: fr
source_locale: zh-CN
source_revision: '8f692ed'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI / App / IDE
  basis: La documentation de configuration du Help Center OpenAI mentionne toujours les fichiers utilisateur `~/.codex/config.toml` et `~/.codex/.env`. Cette page reste un index conceptuel et ne présente pas des clés précises, des priorités de chemins ou d’anciens champs comme des faits immuables ; son statut est donc « verified ».
  checkedAt: '2026-07-26'
sidebar:
  order: 60
---

Les références de configuration peuvent sembler complexes, avec leurs clés, leurs niveaux et leurs règles de priorité. Commencez par une question :

> **Quels comportements faut-il régler dans la configuration, et quels problèmes faut-il résoudre ailleurs ?**

Les fichiers de configuration servent souvent à harmoniser le **modèle, le bac à sable, les approbations et MCP**. Cette page est un **index conceptuel**. Pour les chemins de fichiers et les clés TOML/YAML précis, consultez la [documentation OpenAI Codex](https://developers.openai.com/codex) correspondant à la version installée.

## Un principe de décision

La configuration convient aux réglages **destinés à influencer durablement le comportement**. Elle ne convient généralement pas :

- aux valeurs sensibles ;
- au texte complet des règles d’équipe ;
- aux instructions d’une tâche ponctuelle.

Distinguez trois catégories :

- **Préférences durables de comportement** : configuration.
- **Exigences d’une tâche précise** : prompt, `AGENTS.md` ou Skill.
- **Valeurs sensibles** : variables d’environnement ou gestionnaire de secrets.

En cas de doute, demandez-vous si vous modifiez les habitudes de Codex ou décrivez la tâche actuelle. Les premières relèvent généralement de la configuration ; la seconde, du prompt, d’`AGENTS.md` ou de la description de tâche.

## Niveaux de configuration

| Niveau | Emplacement conceptuel | Contenu typique |
|---|---|---|
| Utilisateur | `~/.codex/`, entre autres | Modèle par défaut, préférences personnelles d’approbation |
| Projet | Fichiers de configuration du dépôt | Bac à sable de l’équipe, liste MCP |
| Variables d’environnement | Injection par le shell ou la CI | Clés et options temporaires |
| Géré | Paramètres imposés par l’organisation | Politiques obligatoires non modifiables localement |

## Rôle de chaque niveau

- **Utilisateur** : vos préférences personnelles par défaut.
- **Projet** : les comportements par défaut partagés dans ce dépôt.
- **Variables d’environnement** : les valeurs injectées temporairement à l’exécution.
- **Politique gérée** : les limites fixées par l’organisation que vous ne pouvez pas modifier localement.

Au début, inutile de mémoriser toutes les règles de priorité. Retenez le rôle de chaque niveau : « mes habitudes », « les habitudes partagées du dépôt », « les valeurs de cette exécution » et « les limites imposées par l’organisation ».

Introduction : [Bases de la configuration](/fr/guide/customization/configuration/config-basics/) · Terminal : [Configuration du CLI](/fr/guide/cli/configuration/)

## Domaines de configuration : index conceptuel

### Modèle et raisonnement

| Intention | Précision |
|---|---|
| Modèle par défaut | Identifiant du modèle utilisé dans les nouvelles sessions |
| Intensité du raisonnement | Niveau destiné aux tâches complexes, si pris en charge |
| Échantillonnage, dont la température | Conserver généralement les valeurs par défaut ; les fixer pour les scripts |

Contexte : [Modèles et raisonnement](/fr/guide/foundations/models-and-reasoning/)

### Bac à sable et réseau

| Intention | Précision |
|---|---|
| Périmètre du système de fichiers | Chemins accessibles en écriture, autorisation d’écrire hors du projet |
| Accès réseau | Interdit, restreint ou autorisé |
| Domaines de destination | Liste d’autorisation, si prise en charge |

Contexte : [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/)

### Politique d’approbation

| Intention | Précision |
|---|---|
| Avant une commande shell | Toujours demander, liste de confiance ou mode automatique à haut risque |
| Avant l’écriture d’un fichier | Même principe |
| Appels d’outils MCP | Réglage par serveur ou par outil |

Contexte : [Permissions et approbations](/fr/guide/foundations/permissions-and-approvals/) · [Matrice des permissions](/fr/guide/reference/permission-matrix/)

### Espace de travail et CLI

| Intention | Précision |
|---|---|
| `cwd` par défaut | Répertoire de démarrage |
| Valeurs par défaut du mode non interactif | Approbations et bac à sable pour `exec` |
| Niveau de journalisation | L’augmenter pour le dépannage |

### Serveurs MCP

| Intention | Précision |
|---|---|
| Liste des serveurs | Commandes, URL et modes de transport |
| Injection de variables d’environnement | Associée au processus MCP, sans enregistrer les valeurs dans Git |

[Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/)

### Extensions IDE et App

Certains réglages ne figurent que dans l’interface de l’extension. Ils peuvent partager la configuration utilisateur du CLI ; vérifiez les indications du produit.

[Paramètres de l’IDE](/fr/guide/ide/settings/) · [Paramètres de l’App de bureau](/fr/guide/desktop-app/settings/)

## Idées reçues courantes

### 1. Tout réglage possible doit figurer dans un fichier de configuration

Certains éléments ont plutôt leur place dans `AGENTS.md`, une variable d’environnement, un Skill ou la description de la tâche actuelle. La configuration n’est pas un conteneur universel.

### 2. Il faut comprendre toutes les clés dès le début

Commencez par le modèle, le bac à sable, les approbations et MCP. Ces quatre domaines couvrent la plupart des questions initiales.

### 3. La configuration du projet remplace la documentation d’équipe

Elle exprime des comportements par défaut du système. Elle ne remplace pas les explications sur les raisons d’un choix et les circonstances dans lesquelles il ne faut pas l’appliquer.

### 4. Il faut apprendre toutes les clés officielles d’un coup

Le modèle par défaut, le périmètre du bac à sable, la politique d’approbation et les connexions MCP suffisent généralement pour commencer.

## Configuration et variables d’environnement

| Type | Emplacement |
|---|---|
| Clé API ou jeton | Variable d’environnement ou gestionnaire de secrets |
| Option non sensible | Variable d’environnement ou configuration |
| Conventions de code | `AGENTS.md`, pas la configuration |

## Décider si un élément relève de la configuration

Posez-vous quatre questions :

1. Doit-il s’appliquer durablement par défaut ?
2. Contient-il des informations sensibles ?
3. S’agit-il d’une préférence personnelle ou d’une règle partagée du projet ?
4. Ajuste-t-il le comportement du système ou décrit-il seulement cette tâche ?

Ces questions aident à choisir le bon emplacement.

## Ajuster le comportement de Codex

Pour choisir où intervenir, distinguez :

1. un comportement durable d’une exigence ponctuelle ;
2. une valeur sensible d’un réglage ordinaire ;
3. une préférence personnelle d’une règle partagée.

Vous pourrez alors choisir entre le fichier de configuration, une variable d’environnement, `AGENTS.md`, un Skill et le prompt actuel.

## Scénarios courants

| Objectif | Emplacement habituel |
|---|---|
| Conserver un modèle précis par défaut | Configuration utilisateur ou projet |
| Exiger des tests avant de modifier du code | `AGENTS.md` |
| Limiter cette tâche à `docs/` | Prompt actuel |
| Fournir une clé API ou un jeton | Variable d’environnement ou secret |
| Connecter un service MCP | Configuration du projet et variables d’environnement |

Partir de l’objectif est souvent plus simple que parcourir une liste de clés.

Cloud : [Secrets et variables d’environnement](/fr/guide/web-and-cloud/secrets-and-variables/)

## Discipline de modification

1. Modifiez une seule catégorie de configuration à la fois et observez les effets pendant une semaine.
2. Faites examiner les changements du projet dans une PR.
3. Après une mise à jour du CLI, comparez les changements décrits dans les notes officielles de migration.
4. Ne placez pas de clés dans un fichier de configuration destiné à être commité.

La configuration contient surtout des comportements durables par défaut. Elle ne remplace ni le stockage des secrets, ni la description des tâches, ni les règles d’équipe.

## Erreurs courantes

- Utiliser des clés de la documentation qui ne correspondent pas à une ancienne version du CLI.
- Appliquer à un dépôt client un bac à sable assoupli pour son usage personnel.
- Créer une contradiction avec `AGENTS.md` : la configuration autorise une action que les instructions interdisent.

## Sources de référence

- Référence de configuration OpenAI Codex
