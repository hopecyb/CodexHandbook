---
title: Entrée et sortie vocales
description: Quand utiliser la voix avec Codex, limitations et considérations de confidentialité.
locale: fr
source_locale: zh-CN
source_revision: f94ad9e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Certains clients Codex prennent en charge la **voix** : dicter une Tâche ou entendre un résumé de réponse. Bon quand vos mains sont occupées ou vous voulez dicter des idées rapidement — **pas** pour lire des secrets à voix haute ou remplacer des enregistrements d'acceptation écrits.

La voix convient à la direction, l'arrière-plan et le suivi rapide ; les détails précis, consultables et révisables restent en texte.

## Ce qui est couvert

- Formes de Tâche adaptées à la voix
- Comment la voix s'associe aux Prompts écrits
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
- Vider des idées de la tête

Points faibles :

- Mots coupés
- Termes mal entendus
- Peu adapté aux chemins exacts, noms de variables, drapeaux CLI

Schéma courant : parler la direction, puis confirmer par écrit.

## Conseils d'usage

1. Environnement calme, phrases courtes ; énoncer objectif / contraintes / critères de terminé par segments
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
3. Comment Vérifier à la fin

Puis demander une version écrite à confirmer.

## Confidentialité

- La voix peut être transcrite dans le cloud — ne lisez pas de PII client ou identifiants
- Attention aux personnes à proximité dans les espaces publics
- La politique d'équipe peut interdire la voix sur des noms de code confidentiels

## Lien avec l'entrée multimodale

- **Entrée image** : maquettes, captures → [Prompting avec images](/fr/prompts/prompting-with-images/)
- **Entrée vocale** : cette page
- **Sortie** : surtout code, fichiers, diffs texte ; le résumé vocal ne remplace pas la revue

## Erreurs courantes

- Discours long non structuré ; l'Agent manque des contraintes
- Accepter de gros changements de code par voix sans lire le diff
- Décrire à voix haute des incidents de production non assainis

La voix aide à démarrer et suivre — ne remplace pas instructions précises, gestion sensible ou acceptation finale.

---

**Statut :** vérifié  
**Produits concernés :** App / Voice bureau (selon plan et paramètres d'espace de travail)  
**Base de vérification :** Les articles du centre d'aide OpenAI sur ChatGPT Voice et ChatGPT Work et Codex indiquent que Voice peut fonctionner avec Work/Codex dans l'App de bureau pour démarrer des Tâches, suivre la progression et coordonner le travail ; la disponibilité dépend du plan, des paramètres d'espace de travail et de la version. Cette page se concentre sur cas d'usage, confidentialité et « parler puis confirmer par écrit ».  
**Dernière vérification :** 2026-07-26
