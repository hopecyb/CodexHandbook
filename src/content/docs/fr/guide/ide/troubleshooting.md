---
legacyVerification:
  status: verified
  products: IDE
  basis: L'aide actuelle d'OpenAI reconnaît toujours l'extension IDE comme une entrée officielle. Cette page répartit les problèmes entre extension sans réponse, connexion et espace de travail ou contexte. C'est un cadre de diagnostic stable, non un manuel des codes d'erreur.
  checkedAt: '2026-07-26'
title: Dépannage dans l'IDE
description: Diagnostiquer les problèmes de chargement, de contexte et de synchronisation de l'extension.
sidebar:
  order: 90
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "ebb21de"
reviewed_at: '2026-10-26'
---
Le dépannage dans l'IDE diffère de celui de la CLI. Beaucoup de problèmes ressemblent à une « extension en panne », alors qu'ils viennent souvent de **l'espace de travail, de la connexion ou du contexte de l'éditeur**.

Commencez par distinguer une extension qui n'a pas démarré d'une extension active mais alimentée par un mauvais contexte.

| Symptôme | Premier essai |
|---|---|
| Extension sans réponse | Mettez à jour l'extension et l'éditeur ; consultez les journaux de l'hôte d'extension |
| Connexion perdue | Authentifiez-vous de nouveau |
| Mauvais contexte | Vérifiez la racine de l'espace de travail ouvert |

## Trois catégories de problèmes

- **Aucune réaction :** souvent un problème de chargement de l'extension.
- **S'ouvre mais reste inutilisable :** souvent un problème de connexion ou d'authentification.
- **Réponses inadaptées ou changements au mauvais endroit :** souvent un problème d'espace de travail ou de contexte.

## Idées reçues

### 1. L'icône est visible : l'extension fonctionne-t-elle ?

L'icône montre seulement que l'extension est installée. Elle ne prouve pas que la session actuelle fonctionne.

### 2. Un mauvais contexte signifie-t-il que le modèle comprend mal ?

Souvent, c'est plutôt la racine du projet, la sélection des fichiers ou l'espace de travail qui ne correspond pas à la tâche.

### 3. Faut-il réinstaller l'extension en premier ?

Pas immédiatement. Vérifiez d'abord la version de l'éditeur, celle de l'extension, l'état de connexion et l'espace de travail. Cela suffit souvent à localiser la cause.

## Ordre de dépannage

1. Vérifiez que l'extension répond.
2. Confirmez l'état de connexion.
3. Vérifiez la racine de l'espace de travail et les fichiers ouverts.
4. Si le problème persiste, consultez les journaux de l'extension.

Dans l'IDE, la cause vient fréquemment de l'espace de travail, de la connexion ou de la source du contexte ; l'extension elle-même n'est pas nécessairement endommagée.

Voir la [documentation officielle d'OpenAI Codex](https://developers.openai.com/codex).
