---
legacyVerification:
  status: verified
  products: CLI
  basis: La documentation actuelle de configuration dans l'aide d'OpenAI utilise encore ~/.codex/config.toml et ~/.codex/.env comme exemples vérifiables. Cette page évite de dépendre de noms de champs précis et résume les objectifs, niveaux et limites de risque courants de la configuration CLI.
  checkedAt: '2026-07-26'
title: Configuration de la CLI
description: Harmoniser dans le terminal le modèle, le bac à sable, les approbations et MCP.
sidebar:
  order: 40
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 0a9b2ad
---

La configuration de la CLI détermine notamment le **modèle par défaut, le répertoire de travail, la rigueur des approbations et les serveurs MCP**. Les concepts sont ceux des [bases de la configuration](/fr/guide/customization/configuration/config-basics/) ; cette page se concentre sur les réglages courants des utilisateurs du terminal.

## Ce que couvre cette page

En découvrant la configuration, on peut l'imaginer comme un unique « panneau de paramètres avancés ». Deux erreurs en résultent : ne rien configurer et répéter les mêmes choix à chaque lancement, ou mélanger préférences personnelles, règles d'équipe et essais temporaires au point de rendre le diagnostic difficile.

L'important est de distinguer les valeurs à conserver longtemps de celles à modifier seulement pour une tâche.

## Ce que contrôle la configuration

Voyez-la comme les habitudes de travail par défaut de Codex dans le terminal :

- **Modèle :** celui utilisé par défaut.
- **Bac à sable et approbation :** jusqu'où Codex peut agir et quand il demande votre accord.
- **Répertoire de travail :** le projet dans lequel il travaille.
- **MCP et extensions :** les capacités externes à sa disposition.

Codex peut fonctionner sans configuration poussée, mais vous répéterez alors plus souvent les mêmes choix.

## Où placer les réglages

| Niveau | Usage |
|---|---|
| Utilisateur | Préférences personnelles valables dans plusieurs projets |
| Projet | Politique commune à l'équipe, à examiner avant le commit |
| Variables d'environnement | Secrets et options injectés dans la CI |

Les **chemins et noms de fichiers** peuvent changer selon la version de la CLI ; consultez la [documentation officielle](https://developers.openai.com/codex). `config.toml`, ou un fichier équivalent dans le dossier utilisateur, est un exemple courant.

## Idées reçues

### Tous les réglages n'ont pas leur place dans le projet

Ne mélangez pas votre modèle favori, un chemin propre à votre ordinateur et une politique d'approbation commune à l'équipe. Mettez les préférences personnelles durables au niveau utilisateur, les accords valables pour le dépôt au niveau projet, et les valeurs injectées pour la CI, un script ou une seule exécution dans les variables d'environnement.

### Configurer ne donne pas immédiatement tous les droits

Inscrire une politique dans la configuration ne garantit pas l'autorisation de toutes les actions futures. Le comportement réel dépend aussi du client, de l'environnement, des politiques hébergées et de la tâche. La configuration établit des valeurs par défaut, non un privilège permanent.

## Réglages souvent modifiés

### Modèle et intensité de raisonnement par défaut

Ils influent sur la vitesse, le coût et les chances de réussir une tâche complexe. Dans un script, fixer le modèle facilite la comparaison des journaux.

### Bac à sable et réseau

| Intention | Usage |
|---|---|
| Strict | Dépôt non fiable |
| Standard | Développement quotidien |
| Assoupli | Environnement personnel de confiance seulement, selon la politique de l'entreprise |

Voir [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/).

### Politique d'approbation

La CLI peut demander avant d'exécuter une commande shell, d'écrire sur disque ou d'accéder au réseau. Une équipe peut préciser dans `AGENTS.md` les commandes dont l'autorisation est attendue ; cela ne vaut que dans les limites des politiques réelles du produit.

### Liste des serveurs MCP

Elle partage des réglages avec [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/). Redémarrez la session après une modification.

## Un ordre de configuration suffisant

Il n'est pas nécessaire de maîtriser tous les champs dès le départ :

1. Fixez le modèle que vous utilisez le plus souvent.
2. Vérifiez que le répertoire de travail par défaut correspond au projet.
3. Choisissez le degré de prudence des approbations et du bac à sable.
4. Ajoutez ensuite MCP, l'automatisation et les extensions avancées.

Les deux premiers concernent surtout l'usage quotidien ; les deux autres exigent davantage d'attention aux risques.

## Aligner le projet et la CLI

Pour éviter « cela marche dans l'application, mais échoue dans la CI » :

1. Notez dans le README la version minimale recommandée de la CLI.
2. Réservez la configuration du projet aux décisions communes de l'équipe.
3. Ne placez jamais de secrets dans le dépôt.

## Dépannage

| Symptôme | Vérification |
|---|---|
| Réglages sans effet | Mauvais niveau modifié ? Redémarrage nécessaire ? |
| MCP non chargé | Syntaxe JSON/TOML et chemins |
| Trop de demandes d'approbation | Mode du bac à sable et liste d'autorisations |

Voir aussi [Dépannage de la CLI](/fr/guide/cli/troubleshooting/).

Traitez la configuration comme des habitudes de travail par défaut. Fixez les choix que vous répétez presque toujours ; les fonctions avancées peuvent attendre.

## Source de référence

- Configuration de la CLI Codex d'OpenAI.
