---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: La documentation actuelle d'introduction à Codex CLI dans le centre d'aide OpenAI distingue toujours les modes d'approbation et classe selon le risque la lecture de fichiers, leur écriture et l'exécution de commandes. Cette page explique seulement pourquoi l'approbation existe, quand être prudent et comment évaluer la portée d'une action ; elle ne fixe pas les valeurs par défaut du produit.
  checkedAt: '2026-07-26'
title: Autorisations et approbations
description: Comprendre quand Codex doit vous demander d'approuver une action.
locale: fr
source_locale: zh-CN
source_revision: 5b1b5f8
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 70
---

Codex ne devrait pas effectuer d'opérations risquées sans votre accord. **L'approbation** est le point de contrôle de votre collaboration avec Codex.

Si Codex pouvait lire n'importe quel fichier, accéder librement au réseau et exécuter toute commande, une mauvaise compréhension de la tâche pourrait coûter cher.

## Ce qu'il faut prendre en compte

- L'autorisation de lire ou d'écrire hors du projet actuel
- L'autorisation d'accéder au réseau
- L'autorisation d'exécuter certaines commandes shell
- L'existence de règles obligatoires imposées par l'équipe via une configuration gérée

## Ce que contrôle l'approbation

Voyez l'approbation comme une demande de confirmation avant une étape risquée.

Codex devrait par exemple s'arrêter pour vous demander avant de :

- Écrire dans des fichiers
- Exécuter des commandes susceptibles de modifier le système
- Accéder à des chemins hors du projet
- Lire ou envoyer du contenu par le réseau

Une demande de confirmation ne signifie pas forcément que Codex s'est trompé. Souvent, cela montre qu'il respecte une limite de sécurité.

## Idées reçues

### 1. Pourquoi agit-il parfois directement et me demande-t-il parfois mon accord ?

Les opérations n'ont pas toutes le même niveau de risque.

- Lire un fichier ordinaire présente un risque relativement faible.
- Modifier de nombreux fichiers, accéder au réseau ou exécuter des commandes peut être plus risqué.

### 2. Dois-je toujours cliquer sur Autoriser ?

Vérifiez au moins ces trois points :

1. Que veut-il faire ?
2. Où cette action aura-t-elle un effet ?
3. Est-ce bien ce que vous souhaitiez ?

### 3. Si je refuse, toute la tâche sera-t-elle perdue ?

Généralement non. Vous pouvez refuser et demander à Codex de poursuivre autrement, de façon plus sûre.

## Une règle simple pendant l'utilisation

- Si vous ne comprenez pas la demande, n'approuvez pas encore.
- Soyez particulièrement prudent pour tout accès hors du projet actuel.
- Regardez de plus près les accès réseau, les commandes et les modifications de fichiers en masse.
- En cas de doute, demandez à Codex pourquoi cette autorisation est nécessaire.

## Les différents niveaux d'explication

| Niveau | Ce qu'il explique | Où lire |
|---|---|---|
| Concept (cette page) | Pourquoi une approbation est nécessaire | — |
| Différences entre produits | Comment chaque client demande une confirmation | [Guides des produits](/fr/guide/) |
| Stratégie d'instruction | Comment définir les limites d'autorisation d'une tâche | [Définir les contraintes](/fr/prompts/constraints-and-boundaries/) |

Les règles officielles et les valeurs par défaut peuvent changer. Consultez [developers.openai.com/codex](https://developers.openai.com/codex).

L'approbation vous laisse décider de ce que Codex a le droit de faire.
