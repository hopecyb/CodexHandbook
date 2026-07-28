---
title: "Anatomie d'une tâche"
description: Objectif, contexte, entrées, contraintes, acceptation et limites de permission.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Quand on formule une demande, beaucoup d'infos se dispersent : beaucoup de matière, peu de focus — Codex se trompe plus facilement.

Voici les blocs habituels d'une tâche bien structurée.

## Structure d'une tâche

Ordre suggéré :

- quel est le résultat
- pourquoi le faire
- quels matériaux sont nécessaires
- où sont les limites
- comment juger que c'est fini

L'ordre peut varier ; une fois ces éléments clairs, la tâche tient mieux la route.

## Modèle recommandé

```text
Objectif : … (produit final)
Contexte : … (importance, état actuel)
Entrées : … (fichiers / liens / contenu collé)
Contraintes : … (périmètre modifiable, style, interdictions)
Critères d'acceptation : … (conditions vérifiables)
Limites de permission : … (réseau, dépendances, config)
Si information insuffisante : pose des questions, ne devine pas.
```

## Rôle de chaque bloc

- **Objectif** : éviter une tâche sans résultat, seulement des actions
- **Contexte** : pourquoi procéder ainsi
- **Entrées** : mettre sous la main ce qu'il doit lire
- **Contraintes** : limiter dépassements et modifications « en passant »
- **Critères d'acceptation** : rendre « fini ou pas » vérifiable
- **Limites de permission** : réseau, dépendances, config — à dire tôt

## Idées reçues

### 1. Chaque section doit être remplie au maximum

Le modèle est une checklist, pas un formulaire obligatoire.  
Certaines tâches n'ont pas besoin d'un long contexte — mais vous perdez alors une partie du jugement.

### 2. Objectif et acceptation ne sont pas la même chose

- **Objectif** : le résultat visé
- **Acceptation** : comment vous prouvez qu'il est atteint

### 3. Entrées = tout coller

La pertinence compte plus que la quantité.  
L'essentiel : identifier ce qu'il **doit** consulter.

## Modèle minimal

```text
Objectif : transformer quoi en quoi
Entrées : fichiers ou pages ici
Contraintes : où modifier uniquement, quoi ne pas toucher
Acceptation : comment je vérifie que c'est fait
En cas d'incertitude : demande d'abord
```

## Exemple

```text
Objectif : rendre le hero de la page d'accueil docs plus accessible aux débutants
Entrées : src/content/docs/guide/index.md
Contraintes : ce fichier uniquement, pas de style, pas de nouveau composant
Acceptation : structure inchangée ; ton plus oral ; pnpm build OK
En cas d'incertitude : expose ta compréhension et le périmètre avant d'agir
```

Cette structure vise surtout à réduire les suppositions et faciliter l'acceptation. Adaptez le modèle — chaque section retirée, c'est une couche d'information en moins.

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page décrit uniquement la structure de tâche ; exemples et liens internes revus ; pas de dépendance à des faits volatils produit.
