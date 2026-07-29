---
title: Vérifier le contenu technique
description: Comment marquer les pages vérifiées — étapes de reproduction, sources officielles et dates.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Les commandes, permissions, tarifs et fonctionnalités produit changent. La **Vérification** signifie que les lecteurs qui suivent la doc aujourd'hui obtiennent des résultats prévisibles.

## Ce que cette page couvre

Beaucoup de contributeurs doc pour la première fois confondent « ça a l'air bon pour moi » et « vérifié ».

Pour un handbook technique :

- Le premier est subjectif
- Le second signifie que vous l'avez essayé sur la version, l'environnement et les étapes actuelles

Cette page explique comment passer de « semble correct » à « preuve que ça fonctionne encore ».

## Ce que la Vérification contrôle

Pas seulement la prose — confirmer qu'un lecteur peut le faire **aujourd'hui**.

Particulièrement important car :

- Les commandes changent
- Les emplacements de menu bougent
- Les défauts de permission changent
- Les capacités produit et régions évoluent

La Vérification empêche les lecteurs de suivre une doc obsolète vers des pièges.

## Significations des statuts

| Statut | Signification |
|---|---|
| `planned` | Planifié, pas encore écrit |
| `draft` | En cours, pas finalisé |
| `review` | Complet, en attente de second passage |
| `verified` | Vérifié selon la base indiquée |
| `outdated` | Produit changé ; mise à jour nécessaire |
| `archived` | Historique ; pas dans la nav principale |

## Idées reçues courantes

### `verified` signifie des preuves, pas de la confiance

Pas un ton — c'est un état de preuve.

Marquer `verified` seulement après reproduction, vérification croisée officielle et alignement périmètre/date.

### Les articles communautaires informent les sujets, pas les faits

Les articles communautaires aident à voir quoi couvrir.

Pour :

- Noms de commandes
- Comportement des permissions
- Points d'entrée produit
- Tarifs, quotas, différences régionales

—utiliser la doc officielle ou le comportement en direct.

### La Vérification n'est pas une phrase à la fois

Les phrases peuvent chacune avoir l'air correctes pendant que le chemin entier échoue :

- Produits ne correspondent pas au périmètre de page
- Ordre des étapes incorrect
- Hypothèses non énoncées
- Le titre promet plus que le corps vérifié

Vérifier le **chemin opérationnel complet**.

## Checklist de Vérification

1. **Indiquer le périmètre** : produit (App/CLI/IDE/Cloud), OS, version CLI
2. **Reproduire étape par étape** : depuis zéro ou worktree propre
3. **Base officielle** : au moins un lien doc OpenAI ou Help Center
4. **Sources communautaires** : articles communautaires pour les sujets seulement — faits depuis l'officiel
5. **Mettre à jour la date** : pied de page `Dernière vérification : YYYY-MM-DD`
6. **Revue indépendante** : `verified` idéalement confirmé par quelqu'un autre que l'auteur

## Ordre de Vérification

1. Confirmer produit, entrée, scénario
2. Parcourir les étapes documentées
3. Vérifier croisé les faits volatils avec la doc officielle
4. Rétrograder les parties incertaines ou non reproduites
5. Mettre à jour statut et date en dernier

Préférer `review` plutôt qu'un `verified` prématuré.

## Informations volatiles

Re-vérifier trimestriellement ou sur les releases majeures :

- Noms de commandes et sous-commandes, flags
- Permissions par défaut et comportement Bac à sable
- Plans, noms de modèles, disponibilité régionale
- Noms d'événements MCP/Hook

## En cas d'échec

- Rétrograder vers `review`, `draft` ou `outdated` selon le cas
- Dans la PR, noter quelle étape diffère de la doc officielle
- Grande dérive : ouvrir une issue labellée `outdated`

## Associé

- [Politique de version du handbook](/guide/start-here/handbook-version-policy/)
- [Ressources officielles](/guide/reference/official-resources/)

`verified` signifie vérifié contre la base actuelle indiquée avec des preuves traçables — pas seulement l'intuition de l'auteur.

---

**Statut :** vérifié  
**Base de vérification :** Vérifié croisé système de statut du handbook, pratique de revue complétée et principe officiel d'abord ; décrit les standards internes pour promouvoir les pages à `verified` et quand rétrograder.  
**Dernière vérification :** 2026-07-26
