---
title: Environnements Cloud
description: Configurez les runtimes, les dépendances, le setup, le cache et le point de départ du dépôt pour Codex Cloud.
locale: fr
source_locale: zh-CN
source_revision: f7c7188
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Un environnement Cloud définit ce que Codex installe et exécute pour un dépôt. Il n'hérite pas de la configuration de votre ordinateur. Lorsqu'un travail réussit en local mais échoue dans Cloud, comparez d'abord les runtimes, les dépendances, les variables et l'accès réseau.

## Ordre d'exécution de chaque conversation

1. Créer un conteneur et extraire la branche ou le SHA du commit choisi.
2. Exécuter le script de setup ; lors de la restauration d'un cache, exécuter éventuellement le script de maintenance.
3. Appliquer la politique d'accès à Internet.
4. Exécuter la boucle de l'Agent pour lancer les commandes, modifier et vérifier, en chargeant les fichiers `AGENTS.md` applicables.
5. Renvoyer la réponse et le diff pour poursuivre ou créer une PR.

L'image `universal` par défaut comprend les langages, paquets et outils les plus courants. Fixez les versions de Python, Node.js et des autres runtimes dans les paramètres de l'environnement, puis installez les dépendances supplémentaires dans le script de setup.

## Configuration minimale reproductible

Pour un projet pnpm, fixez la même version de Node.js que dans la CI et configurez :

```bash
corepack enable
pnpm install --frozen-lockfile
```

À la racine du dépôt, placez les règles de validation dans `AGENTS.md` :

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

Le setup et l'Agent s'exécutent dans des sessions Bash distinctes. Un `export` temporaire effectué pendant le setup ne persiste pas automatiquement. Configurez les valeurs non sensibles comme variables d'environnement ou rendez-les persistantes dans la configuration du shell, conformément aux recommandations officielles.

## Cache et maintenance

Cloud peut mettre en cache l'état du conteneur jusqu'à 12 heures afin d'accélérer les nouvelles conversations et les suivis. Après restauration du cache, il extrait la branche sélectionnée pour la conversation et peut exécuter un script de maintenance afin d'actualiser les dépendances.

Toute modification du setup, de la maintenance, des variables d'environnement ou des Secrets invalide automatiquement le cache. Utilisez **Reset cache** lorsque des changements dans le dépôt rendent le cache incompatible. Dans Business et Enterprise, les utilisateurs ayant accès à un environnement peuvent partager son cache ; une réinitialisation peut donc affecter d'autres personnes du workspace.

## Variables d'environnement et Secrets

- Les variables d'environnement sont disponibles pendant le setup et la phase Agent.
- Les Secrets sont déchiffrés uniquement pour le setup, puis retirés avant le démarrage de l'Agent.
- Le setup dispose d'un accès à Internet.
- L'accès Internet de l'Agent est désactivé par défaut et peut être activé pour chaque environnement.

Ces limites sont faciles à confondre. Consultez [Secrets et variables d'environnement](/fr/guide/web-and-cloud/secrets-and-variables/).

## Liste de contrôle de l'alignement

| Contrôle | Cible |
|---|---|
| Branche ou commit de départ | Correspond à la tâche |
| Versions des runtimes | Respectent les contraintes de la CI ou de la production |
| Lockfile | Installation figée |
| Setup | Reproductible, non interactif, échec rapide |
| Commandes de vérification | Consignées dans `AGENTS.md` |
| Réseau | Uniquement les domaines et méthodes requis par l'Agent |

## Sources officielles

- [Environnements Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Image codex-universal](https://github.com/openai/codex-universal)

---

**Statut :** verified

**Produit concerné :** Cloud

**Dernière vérification :** 2026-08-26
