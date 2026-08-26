---
title: Secrets et variables d'environnement
description: Choisissez correctement entre les Secrets de setup Cloud et les variables ordinaires disponibles pendant toute la conversation.
locale: fr
source_locale: zh-CN
source_revision: 08f8d64
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Les variables d'environnement Cloud et les Secrets n'ont pas le même cycle de vie. Cette distinction détermine les usages qu'ils peuvent prendre en charge sans risque ; le masquage dans l'interface n'est pas leur seule différence.

| Type | Phase de disponibilité | Contenu adapté |
|---|---|---|
| Variable d'environnement | Setup et Agent | Configuration non sensible, comme le mode d'exécution ou l'URL de base d'une API publique |
| Secret | Script de setup uniquement | Tokens de paquets privés et identifiants nécessaires à l'installation des dépendances |

Un Secret est stocké avec un chiffrement supplémentaire, déchiffré uniquement pendant l'exécution de la tâche, puis retiré avant le début de la phase Agent. Il ne s'agit pas d'un canal général permettant à un Agent d'appeler une API de production pendant son exécution.

## Exemple correct : installer un paquet prive

Créez un Secret `NPM_TOKEN` dans les paramètres de l'environnement. Le script de setup l'utilise pour créer une configuration d'authentification temporaire et installer les dépendances :

```bash
set -euo pipefail
printf '//registry.npmjs.org/:_authToken=%s\n' "$NPM_TOKEN" > ~/.npmrc
pnpm install --frozen-lockfile
rm -f ~/.npmrc
```

Pendant la phase Agent, le token n'est plus nécessaire : l'Agent utilise les dépendances déjà installées. N'utilisez jamais `echo` pour écrire un Secret dans les journaux du setup.

## Exemple incorrect

```text
Configurer une API_KEY de production comme variable d'environnement ordinaire,
puis demander a l'Agent d'appeler le service externe avec curl pour vérifier une
commande reelle.
```

Le secret resterait ainsi exposé pendant toute la phase Agent. Si l'accès réseau est ouvert, cela crée un risque d'exfiltration ou d'opération accidentelle. Utilisez plutôt des fixtures, des mocks, des identifiants de test temporaires et strictement limités, ou cantonnez au setup les préparations qui exigent une authentification.

## Reviser la configuration

1. Répertoriez les valeurs réellement nécessaires pendant les phases setup et Agent.
2. Utilisez un Secret pour les valeurs sensibles requises uniquement lors de l'installation.
3. Utilisez des variables d'environnement pour les réglages non sensibles auxquels l'Agent doit accéder.
4. Ne placez jamais ces valeurs dans les prompts, issues, PR, le dépôt ou `AGENTS.md`.
5. Exécutez un scanner de secrets et examinez les journaux du setup.
6. Renouvelez les identifiants et supprimez ceux qui ne sont plus nécessaires.

Le setup s'exécute dans une session Bash distincte. Un simple `export` ne persiste pas automatiquement pendant la phase Agent. Configurez directement comme variables d'environnement les valeurs non sensibles qui doivent rester disponibles pendant toute la conversation, au lieu de vous appuyer sur l'état temporaire du shell.

## Relation avec la CI

Les Secrets GitHub Actions et Codex Cloud sont stockes séparément et ne se synchronisent pas automatiquement. Reutiliser les mêmes **noms** de variables peut simplifier la documentation, mais ne copiez pas dans les deux systèmes un même token de production disposant de droits excessifs.

## Après une exposition

Révoquez ou renouvelez immédiatement l'identifiant, puis retirez-le des journaux, conversations, issues et de l'historique Git. Supprimer uniquement le fichier actuel ne permet pas de retirer un Secret déjà propagé.

## Source officielle

- [Environnements Cloud : variables et Secrets](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Statut :** verified

**Produit concerné :** Cloud

**Dernière vérification :** 2026-08-26
