---
legacyVerification:
  status: verified
  products: CLI
  basis: L'introduction et la configuration actuelles de la CLI dans l'aide d'OpenAI couvrent les causes courantes liées à l'installation, l'authentification, les permissions, le bac à sable et le répertoire de travail. Cette page classe les symptômes dans ces quatre catégories de diagnostic.
  checkedAt: '2026-07-26'
title: Dépannage de la CLI
description: Diagnostiquer les échecs d'authentification, de permissions et de commandes.
sidebar:
  order: 70
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: '57b062f'
reviewed_at: '2026-10-26'
---

Les erreurs de la CLI ressemblent toutes parfois à des erreurs de terminal, mais leurs causes peuvent être différentes. Commencez par déterminer si la commande est mal installée, si la connexion a échoué, si les permissions manquent ou si le répertoire est mauvais.

| Symptôme | Premier essai |
|---|---|
| `command not found` | Vérifiez l'installation et le `PATH` |
| Échec d'authentification | Reconnectez-vous et vérifiez la politique de l'organisation |
| Permission refusée | Consultez le mode d'approbation et les réglages du bac à sable |
| Fichiers modifiés au mauvais endroit | Vérifiez le répertoire de travail courant |

## Quatre catégories de problèmes

- **Commande introuvable :** généralement l'installation ou le `PATH`.
- **Commande lancée, mais accès impossible :** généralement l'authentification.
- **Accès possible, mais action impossible :** généralement les permissions ou le bac à sable.
- **Action exécutée au mauvais endroit :** généralement le répertoire ou le contexte.

## Idées reçues

### 1. Faut-il analyser le même journal pour toutes les erreurs de CLI ?

Classer d'abord le problème est souvent plus rapide que d'étudier immédiatement chaque détail de l'erreur.

### 2. Une permission refusée signifie-t-elle que le programme est cassé ?

Souvent, elle montre plutôt qu'une règle d'approbation, le bac à sable ou une politique fonctionne comme prévu.

### 3. Une commande exécutée prouve-t-elle que le répertoire est correct ?

Non. Beaucoup de problèmes surviennent parce que la commande a été exécutée dans le mauvais dépôt ou répertoire, même si elle fonctionne.

## Ordre de dépannage

1. Vérifiez que la commande existe.
2. Vérifiez votre état de connexion.
3. Examinez les permissions et les restrictions du bac à sable.
4. Confirmez que le répertoire de travail est bien le projet attendu.

Distinguer installation, connexion, permissions et répertoire rend le dépannage de la CLI plus simple.

Voir la [documentation officielle d'OpenAI Codex](https://developers.openai.com/codex).
