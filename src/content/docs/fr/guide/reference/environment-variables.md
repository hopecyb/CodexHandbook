---
title: "Variables d'environnement"
description: Objectif, couche et sécurité des variables d'environnement liées à Codex — supplément à la référence de configuration.
locale: fr
source_locale: zh-CN
source_revision: '58fd37b'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI / App / IDE / Cloud
  basis: 'La documentation de configuration du Help Center OpenAI décrit toujours `~/.codex/.env`, l’injection par la CI ou à l’exécution et les secrets des plateformes. Cette page porte sur les principes stables : valeurs adaptées ou non aux variables d’environnement et rôle de conteneur local de `.env`, sans figer une liste de noms de variables.'
  checkedAt: '2026-07-26'
sidebar:
  order: 80
---

Les variables d’environnement suscitent souvent deux réactions : les juger trop techniques ou vouloir y placer toute la configuration. Elles servent simplement à transmettre des valeurs aux programmes au moment de l’exécution, notamment des informations sensibles et des options.

Elles permettent d’**injecter des clés, de modifier temporairement des options et d’adapter l’exécution en CI**, sans enregistrer les valeurs sensibles dans des fichiers de configuration ou dans Git. Cette page est un index conceptuel. Pour les noms exacts, consultez la [documentation officielle](https://developers.openai.com/codex) et `codex --help`.

## Contenu de cette page

- Quand préférer les variables d’environnement aux fichiers de configuration.
- Comment répartir les réglages entre utilisateur, projet, secrets Cloud et CI.
- Les conventions de nommage courantes et les risques de fuite.

## Principe de décision

Envisagez en priorité une variable d’environnement si la valeur :

- ne doit pas être enregistrée dans Git ;
- varie selon la machine, l’utilisateur ou l’environnement ;
- ne doit s’appliquer que pendant cette exécution.

C’est pourquoi les jetons, options temporaires et valeurs injectées par la CI sont souvent transmis de cette manière plutôt qu’inscrits en dur.

Voir la [référence de configuration](/fr/guide/reference/configuration-reference/) et, pour Cloud, les [secrets et variables](/fr/guide/web-and-cloud/secrets-and-variables/).

## Contenus adaptés aux variables d’environnement

| Type | Exemple d’usage | À éviter |
|---|---|---|
| Jeton d’authentification | Clé API, PAT GitHub | Enregistrement dans le dépôt |
| Option temporaire | Niveau des journaux de débogage | Configuration métier durable |
| Injection CI | Mode de revue en lecture seule | Jeton autorisant l’écriture en production |
| Sous-processus MCP | Clé d’un service tiers | Valeur en clair dans `AGENTS.md` |

## Ne pas en faire un tiroir universel

Évitez d’y placer une valeur simplement parce que c’est possible. Distinguez :

- **valeurs sensibles ou différences à l’exécution** : variables d’environnement ;
- **conventions durables de l’équipe** : fichiers de configuration ou documentation ;
- **règles de travail** : `AGENTS.md` ou Skill.

Vous saurez ainsi plus facilement où chercher lors d’un dépannage.

## Ce qu’est un fichier `.env`

Le fichier `.env` est souvent le premier contact avec les variables d’environnement. Il ne constitue pas un autre centre de configuration : de nombreux outils l’utilisent pour **charger plusieurs variables d’environnement à la fois** pendant le développement local.

- La variable d’environnement correspond à la valeur transmise.
- `.env` est un conteneur local courant pour ces valeurs.

Par conséquent :

- la commodité de `.env` ne garantit pas sa sécurité ;
- `.env.example` doit montrer les noms, sans contenir de véritables clés ;
- en production ou en CI, on utilise généralement un gestionnaire de secrets.

## Ce qui ne devrait pas reposer uniquement sur ces variables

- Conventions de code et structure des répertoires : `AGENTS.md`.
- Modèle par défaut choisi par l’équipe : configuration du projet, pour les parties non sensibles.
- Listes d’autorisation complexes : [règles](/fr/guide/customization/rules/allow-and-deny-patterns/).

## Idées reçues courantes

### 1. Toute la configuration peut être stockée dans les variables d’environnement

Elles conviennent aux valeurs, beaucoup moins à un ensemble complet de règles d’équipe ou à de longues explications.

### 2. Une valeur dans `.env` est forcément protégée

Elle peut encore fuiter si le fichier est commité, visible pendant un partage d’écran ou imprimé dans un journal.

### 3. `unset` élimine tout risque

Des traces peuvent subsister dans l’historique du shell, les processus enfants, les journaux et les fichiers ou captures déjà enregistrés.

### 4. Il suffit d’envoyer le même `.env` en production

Dans la CI, Cloud et les plateformes gérées, on procède plutôt ainsi :

- configurer les secrets dans la console de la plateforme ;
- injecter les variables à l’exécution ;
- garder les véritables valeurs hors des fichiers du dépôt.

## Niveaux et priorité : schéma conceptuel

```text
Politique obligatoire de l’organisation, le cas échéant
    ↓ prend le pas sur
Variables d’environnement injectées par le shell ou la CI
    ↓ combinaison avec les fichiers selon les règles officielles
Fichiers de configuration utilisateur ou projet
```

Si une clé est définie à plusieurs endroits, appliquez la **priorité indiquée dans la documentation officielle**. Pour le dépannage, examinez la configuration effective ou les journaux.

## Ordre de décision pratique

1. La valeur est-elle sensible ?
2. Est-elle destinée à un usage local personnel ou à la CI / Cloud ?
3. Doit-elle être conservée durablement ou seulement pendant cette exécution ?
4. Relève-t-elle d’une variable locale, d’un secret CI ou d’un secret Cloud ?

Cela évite de placer une valeur correcte au mauvais endroit.

## Scénarios courants

| Scénario | Approche plus sûre |
|---|---|
| Déboguer localement une API tierce | Variable locale ou `.env` exclu de Git |
| Partager un exemple avec l’équipe | Commiter `.env.example` sans véritables valeurs |
| GitHub Actions / CI | Secrets de la plateforme |
| Appeler un service privé depuis une tâche Cloud | Secret Cloud |
| Fournir une clé à un serveur MCP | Environnement du processus parent ou injection d’un secret |

Évitez de conserver durablement de véritables clés en clair dans les fichiers du dépôt.

## Usages typiques

### Développement local

Exportez le jeton personnel dans `~/.zshrc` ou dans `.envrc` avec direnv ; **ne commitez pas** `.env`.

### CLI non interactif

La CI injecte les variables depuis son gestionnaire de secrets avant de lancer `codex exec`. Voir le [mode non interactif](/fr/guide/cli/non-interactive-mode/).

### Serveurs MCP

Les processus MCP héritent souvent de l’environnement de leur parent. Référencez `$VAR` dans la configuration plutôt que d’y écrire la valeur. Voir [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/).

### Cloud

Configurez les secrets du dépôt dans la console Cloud avec les mêmes noms que les références utilisées dans la tâche.

Les variables d’environnement conviennent aux valeurs changeantes, sensibles ou nécessaires uniquement à l’exécution. Elles ne remplacent pas les règles durables ni la documentation.

## Liste de contrôle de sécurité

- [ ] Ajouter `.env` à `.gitignore`.
- [ ] Masquer les jetons avant d’écrire dans les journaux.
- [ ] Remplacer les clés qui ont fuité.
- [ ] Limiter les droits au minimum nécessaire, par exemple avec un jeton CI en lecture seule.

## Erreurs courantes

- Commiter `.env.example` après y avoir ajouté de véritables clés.
- Afficher un jeton dans une commande `export` pendant un partage d’écran.
- Supposer que `unset` protège aussi les processus enfants ; vérifiez leur arborescence.

## Sources de référence

- Documentation OpenAI Codex sur la configuration et l’environnement
