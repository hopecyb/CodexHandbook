---
title: Entrée et sortie vocales
description: Quand utiliser la voix avec Codex, limitations et considérations de confidentialité.
locale: fr
source_locale: zh-CN
source_revision: "192bba2"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
legacyVerification:
  status: verified
  products: App / Voice bureau (selon plan et paramètres d'espace de travail)
  basis: Les articles du centre d'aide OpenAI sur ChatGPT Voice et ChatGPT Work et Codex indiquent que Voice peut fonctionner avec Work/Codex dans l'App de bureau pour démarrer des tâches, suivre la progression et coordonner le travail ; la disponibilité dépend du plan, des paramètres d'espace de travail et de la version. Cette page se concentre sur cas d'usage, confidentialité et « parler puis confirmer par écrit ».
  checkedAt: '2026-07-26'
sidebar:
  order: 70
---

Certains clients Codex prennent en charge la **voix** : dicter une tâche ou entendre un résumé de réponse. Bon quand vos mains sont occupées ou vous voulez dicter des idées rapidement — **pas** pour lire des secrets à voix haute ou remplacer des comptes rendus de validation écrits.

La voix convient pour exprimer une orientation, préciser le contexte et assurer un suivi rapide ; les détails précis, consultables et révisables restent en texte.

## Ce qui est couvert

- Formes de tâche adaptées à la voix
- Comment la voix s'associe aux prompts écrits
- Notes de confidentialité et précision

## Cas d'usage

| Bon cas | Mauvais cas |
|---|---|
| Objectifs de haut niveau, brainstorming | Instructions précises jusqu'aux noms de variables |
| Suivis courts sur mobile | Lire des clés API ou mots de passe à voix haute |
| Besoins d'accessibilité | Spécifications devant être consultables et diffables |

Après avoir parlé, demandez à Codex de **répéter sa compréhension** ou produire un plan écrit pour votre confirmation. Voir [demander un plan](/fr/prompts/ask-for-a-plan/).

## À quoi sert la voix

Points forts :

- Rapide
- Mains libres
- Exprimer spontanément ses idées

Points faibles :

- Mots coupés
- Termes mal entendus
- Peu adapté aux chemins exacts, noms de variables, options de ligne de commande

Schéma courant : énoncer une orientation, puis confirmer par écrit.

## Conseils d'usage

1. Environnement calme, phrases courtes ; énoncer objectif / contraintes / critères de réussite par segments
2. Pour chemins de fichiers et noms de branche, **taper** ou faire épeler par l'Agent
3. Pour travail sensible, désactiver le traitement vocal cloud si option locale/désactivation existe
4. Garder les décisions importantes en texte sur issues ou PR

## Idées reçues courantes

### 1. La voix remplace entièrement la saisie ?

Non. Préférez taper pour :

- Chemins de fichiers
- Noms de branche
- Commandes
- Paramètres
- Critères d'acceptation

### 2. Plus de détails parlés ≠ moins d'erreurs

Un discours long non structuré peut disperser le propos.

### 3. Le résumé vocal remplace la revue des résultats ?

Non.
Les résumés aident l'orientation ; confirmer changements, fichiers, diffs et tests nécessite encore texte et artefacts.

## Ordre de parole utile

En commençant par la voix :

1. Ce que je veux faire
2. Ce qu'il ne faut pas faire
3. Comment vérifier à la fin

Puis demander une version écrite à confirmer.

## Confidentialité

- La voix peut être transcrite dans le cloud — ne lisez pas de données personnelles identifiantes de clients ou identifiants
- Attention aux personnes à proximité dans les espaces publics
- La politique d'équipe peut interdire la voix sur des noms de code confidentiels

## Lien avec l'entrée multimodale

- **Entrée image** : maquettes, captures → [prompting avec images](/fr/prompts/prompting-with-images/)
- **Entrée vocale** : cette page
- **Sortie** : surtout code, fichiers, diffs texte ; le résumé vocal ne remplace pas la revue

## Erreurs courantes

- Discours long non structuré ; l'Agent manque des contraintes
- Accepter de gros changements de code par voix sans lire le diff
- Décrire à voix haute des incidents de production sans retirer les informations sensibles

La voix aide à démarrer et suivre — ne remplace pas instructions précises, gestion sensible ou acceptation finale.
