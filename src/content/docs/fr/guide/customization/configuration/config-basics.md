---
title: "Bases de la configuration"
description: Emplacements des fichiers de configuration Codex, paramètres courants et introduction aux approbations, bac à sable et modèles.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

La configuration permet d'**unifier le comportement de Codex** sur votre machine ou dans un projet sans répéter le modèle, le niveau d'approbation ou la politique de bac à sable à chaque session.

## Sur cette page

- Où vit la configuration ; comment les niveaux projet et utilisateur s'empilent
- Ce que les gens changent le plus : modèle, approbation, bac à sable, répertoire de travail par défaut
- Frontière avec `AGENTS.md` : la configuration gère les « interrupteurs de capacité » ; AGENTS gère « comment écrire le code dans ce projet »

## Ce que la configuration contrôle réellement

La configuration est plus proche des **habitudes de travail par défaut** de Codex.

Par exemple :

- Quel modèle utiliser par défaut
- À quel point les frontières de sécurité sont strictes par défaut
- Dans quel répertoire travailler par défaut

Ce n'est pas une exigence temporaire pour une tâche — c'est comment le travail commence habituellement.

## Couches de configuration

| Couche | Emplacement typique | Contenu |
|---|---|---|
| Utilisateur | Configuration sous `~/.codex/` (noms de fichiers exacts selon la doc officielle) | Modèle par défaut, habitudes d'approbation personnelles |
| Projet | Extraits de config dans le dépôt ou fichiers projet liés à Codex | Politique bac à sable/outils partagée par l'équipe |
| Gérée | Déploiement organisation | Éléments obligatoires que les individus ne peuvent pas annuler |

**Faits volatils** (chemins, noms de champs, clés TOML) — suivez la [documentation OpenAI Codex](https://developers.openai.com/codex) ; cette page décrit les concepts et comment décider.

## Idées reçues courantes

### Plus de configuration n'est pas plus professionnel

Beaucoup veulent tout configurer dès le début.

Pour les débutants, quelques paramètres à haute fréquence suffisent généralement :

- Modèle par défaut
- Politique d'approbation/bac à sable par défaut
- Répertoire de travail par défaut

Stabiliser ceux-ci d'abord est généralement mieux qu'étudier chaque champ d'un coup.

### La configuration n'est pas les règles projet

Si une exigence est « chaque collaborateur devrait la suivre », elle appartient généralement à `AGENTS.md` ou à la doc projet, pas seulement sur votre machine.

Par exemple :

- Quelles vérifications avant commit
- Quels répertoires ne doivent pas changer
- Quelles tâches ne doivent pas auto-push

Ces éléments ne devraient pas reposer uniquement sur la configuration personnelle.

## Intentions de configuration courantes

### Modèle et raisonnement

- Développement quotidien : équilibre vitesse et qualité
- Refactors complexes : modèle de raisonnement plus puissant (si votre plan le permet)
- Scripts/CI : modèle fixe pour la reproductibilité

Contexte conceptuel : [Modèles et raisonnement](/guide/foundations/models-and-reasoning/)

### Approbation et bac à sable

| Intention | Direction de configuration |
|---|---|
| Débutant / dépôt non fiable | Approbation plus stricte ; limiter le réseau et la portée d'écriture |
| Projet personnel fiable | Réduire les interruptions dans des limites sûres |
| Dépôt entreprise | Suivre la politique gérée ; ne pas relaxer par vous-même |

Contexte conceptuel : [Permissions et approbations](/guide/foundations/permissions-and-approvals/), [Bac à sable et réseau](/guide/foundations/sandbox-and-network/)

### Cohérence CLI et App

Le même compte sur CLI et App de bureau devrait viser la **même base de sécurité** — éviter la double norme « permissions CLI complètes, App stricte ».

## Pratique minimale viable

1. Lire la section « Configuration » officielle ; confirmer les chemins de fichiers pour votre version
2. Changer une seule chose — par exemple le mode bac à sable par défaut ; observer une semaine avant d'ajuster
3. Mettre les éléments partagés par l'équipe dans la doc du dépôt ; garder les préférences personnelles en local
4. Dans `AGENTS.md`, écrire « la façon recommandée d'utiliser Codex avec ce projet », pas une copie complète de la configuration

## Comment décider où mettre quelque chose

Si vous ne savez pas si quelque chose appartient à la configuration, `AGENTS.md` ou le prompt de tâche, demandez :

1. Est-ce une habitude par défaut pour la plupart des tâches ?
2. Est-ce une préférence dont seul moi je tiens compte ?
3. Est-ce une règle que le projet entier devrait partager ?

Généralement :

- Habitudes par défaut → configuration
- Préférences personnelles → couche personnelle
- Consensus d'équipe → dépôt

## Relation avec les sujets CLI

- Utilisation interactive : [Mode interactif CLI](/guide/cli/interactive-mode/)
- Non interactif et scripts : [Mode non interactif](/guide/cli/non-interactive-mode/)
- Détail de configuration : [Configuration CLI](/guide/cli/configuration/) · [Référence de configuration](/guide/reference/configuration-reference/)

## Erreurs courantes

- Désactiver toute approbation pour la commodité tout en ouvrant un projet dans un répertoire de données de production
- Mettre des clés API dans la configuration et les committer dans Git
- La doc liste des clés de config qui ne correspondent pas à la version installée (pas de revue après mise à niveau CLI)

## Frontières de sécurité

La configuration peut inclure **listes d'autorisation de chemins, politique réseau, listes de serveurs MCP** — avant de modifier, imaginez « un prompt malveillant pourrait abuser de ce paramètre ? » En environnement entreprise, les administrateurs devraient déployer ; les individus ne devraient pas contourner la politique gérée.

La configuration convient aux défauts que vous répéteriez presque à chaque fois ; vous n'avez pas besoin de chaque règle dans les fichiers de configuration.

## Références
- Documentation de configuration OpenAI Codex
---

**Statut :** vérifié  
**Produits concernés :** CLI / App  
**Base de vérification :** Les matériaux de configuration du Help Center OpenAI utilisent encore directement `~/.codex/config.toml` et `~/.codex/.env`, et notent que l'App de bureau/IDE peut nécessiter un redémarrage pour lire ces paramètres ; cette page évite de lier des noms de clés volatils et ne conserve que le cadre stable de configuration utilisateur, politique gérée et intentions courantes comme modèle/approbation/bac à sable.  
**Dernière vérification :** 2026-07-26
