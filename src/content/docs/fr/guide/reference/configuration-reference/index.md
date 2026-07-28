---
title: "Référence de configuration"
description: Index conceptuel des clés de configuration Codex utilisateur et projet — chemins et champs selon la doc officielle.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les pages de référence de configuration peuvent submerger avec clés, couches et overrides. Commencez par une question :

> **Qu'est-ce qui devrait être configuration — et qu'est-ce qui ne devrait pas ?**

Les fichiers de config unifient souvent le comportement **modèle, bac à sable, approbation, MCP**. Cette page est un **index conceptuel** ; chemins de fichiers et clés TOML/YAML doivent suivre la [documentation OpenAI Codex](https://developers.openai.com/codex) et votre version installée.

## Un principe de décision

La config contient ce qui **devrait affecter le comportement à long terme**. Généralement pas :

- Secrets
- Prose complète des règles d'équipe
- Instructions de tâche ponctuelles

Trois compartiments :

- **Préférences de comportement à long terme** → config
- **Exigences de tâche spécifiques** → prompt / `AGENTS.md` / Skill
- **Secrets** → variables d'environnement ou Secret store

Hésitant ? Changez-vous les habitudes long terme de Codex ou décrivez-vous cette tâche ?

- Habitudes long terme → config
- Cette tâche → prompt, `AGENTS.md` ou description de tâche

## Couches de configuration

| Couche | Emplacement (conceptuel) | Contenu typique |
|---|---|---|
| Utilisateur | `~/.codex/` etc. | Modèle par défaut, habitudes d'approbation personnelles |
| Projet | Config dans le dépôt | Bac à sable d'équipe, liste MCP |
| Variables d'environnement | Injection shell / CI | Clés, interrupteurs temporaires |
| Gérée | Provisionnée org | Politique obligatoire non annulable |

## Ce que chaque couche gère

- **Utilisateur** : vos défauts personnels
- **Projet** : défauts partagés pour ce dépôt
- **Variables d'environnement** : valeurs injectées à l'exécution
- **Politique gérée** : frontières fixées par l'org que vous ne pouvez pas annuler localement

Pas besoin de mémoriser la priorité le premier jour — savoir à quoi sert chaque couche :

- Utilisateur : « comment j'aime personnellement travailler »
- Projet : « comment ce dépôt veut que tout le monde travaille »
- Environnement : « valeurs pour ce run »
- Gérée : « l'org a déjà décidé »

Intro : [Bases de la config](/guide/customization/configuration/config-basics/) · Focus CLI : [Configuration CLI](/guide/cli/configuration/)

## Domaines de configuration (conceptuels)

### Modèle et raisonnement

| Intention | Notes |
|---|---|
| Modèle par défaut | ID modèle pour nouvelles sessions |
| Force de raisonnement | Niveau de complexité si supporté |
| Échantillonnage (température, etc.) | Généralement défaut ; pin pour scripts |

Contexte : [Modèles et raisonnement](/guide/foundations/models-and-reasoning/)

### Bac à sable et réseau

| Intention | Notes |
|---|---|
| Portée filesystem | Chemins écrivables, écriture hors projet |
| Accès réseau | Deny / restreint / allow |
| Domaines egress | Liste d'autorisation si supporté |

Contexte : [Bac à sable et réseau](/guide/foundations/sandbox-and-network/)

### Politique d'approbation

| Intention | Notes |
|---|---|
| Avant shell | Toujours demander / liste de confiance / auto (haut risque) |
| Avant écriture fichier | Idem |
| Appels outils MCP | Granularité par serveur ou outil |

Contexte : [Permissions et approbations](/guide/foundations/permissions-and-approvals/) · Matrice : [Matrice des permissions](/guide/reference/permission-matrix/)

### Workspace et CLI

| Intention | Notes |
|---|---|
| `cwd` par défaut | Répertoire de démarrage |
| Défauts non interactifs | approbation et bac à sable exec |
| Niveau de log | Augmenter pour dépannage |

### Serveurs MCP

| Intention | Notes |
|---|---|
| Liste serveurs | Commande, URL, transport |
| Injection env | Liée au processus MCP — pas dans Git |

[Connecter MCP](/skills/mcp/connect-an-mcp-server/)

### Extension IDE / App

Certains paramètres vivent uniquement dans l'UI d'extension ; peuvent partager le backend config utilisateur avec CLI — selon doc produit.

[Paramètres IDE](/guide/ide/settings/) · [Paramètres App de bureau](/guide/desktop-app/settings/)

## Idées reçues courantes

### 1. Tout n'appartient pas à la config

Souvent mieux dans :

- `AGENTS.md`
- Variables d'environnement
- Skill
- Description de tâche actuelle

La config n'est pas un fourre-tout.

### 2. Pas besoin de chaque clé le premier jour

La plupart commencent avec :

- Modèle
- Bac à sable
- Approbation
- MCP

Ces quatre couvrent la plupart des questions initiales.

### 3. La config projet remplace la doc d'équipe ?

La config exprime les défauts système — pas « pourquoi et quand ne pas ».

### 4. Les clés officielles sont nombreuses — apprendre quatre d'abord

- Modèle par défaut
- Portée bac à sable
- Politique d'approbation
- Connexions MCP

## vs variables d'environnement

| Type | Où |
|---|---|
| Clé API, token | Variable d'environnement ou gestionnaire de secrets |
| Interrupteurs non sensibles | Variable d'environnement ou config |
| Conventions de code | `AGENTS.md`, pas config |

## Cela devrait aller en config ?

Quatre questions :

1. Devrait s'appliquer à long terme par défaut ?
2. Est-ce sensible ?
3. Habitude personnelle ou règle projet partagée ?
4. Ajuster le comportement système ou décrire cette tâche ?

## En ajustant le comportement

1. Défaut long terme ou tâche ponctuelle ?
2. Sensible ou ordinaire ?
3. Personnel ou partagé ?

Puis placer dans config, env, `AGENTS.md`, Skill ou prompt actuel.

## Scénarios courants

| Objectif | Généralement |
|---|---|
| Pin un modèle à long terme | Config utilisateur ou projet |
| L'équipe veut tests avant éditions | `AGENTS.md` |
| Cette tâche : uniquement `docs/` | Prompt actuel |
| Clé API / token | Environnement ou Secret |
| Connecter un MCP | Config projet + env |

Plus facile que fixer des listes de clés.

Secrets Cloud : [Secrets et variables d'environnement](/guide/web-and-cloud/secrets-and-variables/)

## Discipline de changement

1. Changer une classe de config à la fois ; observer une semaine
2. Changements niveau projet via revue PR
3. Après mise à niveau CLI, lire notes de migration officielles
4. Ne jamais committer des secrets dans les fichiers de config

La config est pour les défauts à long terme — pas secrets, prose de tâche ou essais de règles d'équipe.

## Erreurs courantes

- Noms de clés doc ne correspondent pas à ancienne CLI
- Bac à sable personnel relaxé utilisé sur dépôts clients
- Config contredit `AGENTS.md` (config permet, doc interdit)

## Sources de référence
- Référence de configuration OpenAI Codex
---

**Statut :** vérifié  
**Produits concernés :** CLI / App / IDE  
**Base de vérification :** Le Help Center OpenAI documente encore des porteurs niveau utilisateur comme `~/.codex/config.toml` et `~/.codex/.env` ; cette page est explicitement un index conceptuel — ne fixe pas des noms de clés spécifiques, priorité de chemins ou champs legacy — donc `vérifié` est approprié.  
**Dernière vérification :** 2026-07-26
