---
legacyVerification:
  status: "verified"
  basis: "Vérifié au regard du système de statuts actuel du manuel, de plusieurs séries de révisions achevées et du principe de priorité aux sources officielles. Cette page décrit les critères internes pour passer une page à `verified` et les principes de rétrogradation."
  checkedAt: "2026-07-26"
title: Vérifier le contenu technique
description: Distinguer le statut éditorial, la vérification des sources et les essais d’exemples ; consigner le périmètre, l’environnement et les preuves.
locale: fr
source_locale: zh-CN
source_revision: cfb077d
translation_status: draft
translated_at: 2026-09-20
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Consignes de contribution mises à jour pour les nouveaux champs de métadonnées du site ; cela ne signifie pas que tous les mécanismes produit cités ici ont été exécutés à nouveau.
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

### Le statut éditorial et la méthode de vérification sont deux champs distincts

`editorialStatus` indique l’avancement de la rédaction et de la révision. `verification.kind` indique le type de contrôle réellement effectué ; `verified` ne permet pas de déduire qu’un exemple a été exécuté.

| Méthode de vérification | Conclusion permise | Preuves obligatoires |
|---|---|---|
| `editorial` | La structure, la formulation ou les références internes ont été relues | Résumé du contrôle et date |
| `source-checked` | Les faits dans le périmètre indiqué concordent avec les sources | Liens vers les sources précises, résumé et date |
| `run-tested` | L’exemple a été exécuté dans l’environnement consigné | Environnement, traces d’exécution et de révision, résumé et date |

`run-tested` ne garantit pas le fonctionnement sur toutes les plateformes. Le résumé doit préciser ce qui a été contrôlé et ce qui ne l’a pas été ; un autocontrôle par calcul indépendant ne constitue pas une révision par une deuxième personne. Les anciens enregistrements sans preuves restent dans `legacyVerification` et ne deviennent pas automatiquement un nouveau statut de vérification.

```yaml
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Structure et liens internes vérifiés ; l’exemple n’a pas été exécuté.
```

Les vérifications des sources et les essais utilisent une liste `evidence` dont chaque élément comporte `label` et `href`. Les essais exigent aussi `environment`, avec le système, la version du client concerné et celles des dépendances. La compilation rejette les enregistrements d’essai sans environnement ou liens vers les preuves. La présence d’un lien ne prouve pas à elle seule que la preuve suffit : les responsables doivent lire l’enregistrement.

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
3. **Base officielle** : citer des sources officielles précises pour les faits relatifs au produit ; pour les exercices de méthode stables, utiliser de vraies entrées et des traces de contrôle sans revendiquer un aval officiel
4. **Sources communautaires** : articles communautaires pour les sujets seulement — faits depuis l'officiel
5. **Mettre à jour la date** : `verification.checkedAt` doit correspondre à la date réelle du contrôle ; ne pas rafraîchir en masse d’anciennes dates comme si une nouvelle révision avait eu lieu
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

- [Politique de version du handbook](/fr/guide/start-here/handbook-version-policy/)
- [Ressources officielles](/fr/guide/reference/official-resources/)

`verified` signifie vérifié contre la base actuelle indiquée avec des preuves traçables — pas seulement l'intuition de l'auteur.
