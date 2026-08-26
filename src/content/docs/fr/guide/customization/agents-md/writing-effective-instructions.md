---
title: "Écrire des instructions projet efficaces"
description: Liste de contrôle pour écrire AGENTS.md — court, strict, exécutable, vérifiable.
locale: fr
source_locale: zh-CN
source_revision: 2d236a3
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Des instructions projet efficaces ressemblent à une **liste de contrôle**. L'objectif est que Codex fasse moins d'erreurs prévisibles dès la première tentative.

Lors de la première écriture d'instructions projet, un problème courant est beaucoup d'idées mais des contraintes clés floues.

## Contenu

- À quoi devraient ressembler les instructions projet
- Ce que signifie « court, strict, exécutable »
- Les modèles qui confondent le plus Codex et les humains

## Structure recommandée

```md
# Instructions projet

## Démarrage rapide (3–5 lignes)
Installation, serveur de dev, commande de test la plus courante

## À suivre obligatoirement
Liste numérotée de règles non négociables

## Code et répertoires
Conventions de nommage, emplacement, dépendances

## Définition de terminé
Ce qui compte comme « prêt à committer »

## Interdit
Indiquer explicitement ce qu'il ne faut pas faire
```

## Principes d'écriture

### 1. Mettre les contraintes strictes en tête

Placez « doit » et « ne doit pas » près du début du fichier. Quand le contexte est limité, le modèle accorde plus de poids au début — la même logique que [Priorité du contexte](/fr/guide/context/context-priority/).

### 2. Les commandes doivent être copiables-collables

Écrivez des commandes **réellement exécutables**, pas « exécuter les tests » :

```md
# Bon
pnpm test --filter @app/web

# Mauvais
Assurez-vous que les tests passent
```

### 3. Définition de terminé vérifiable

```md
## Définition de terminé
- `pnpm lint` et `pnpm test` passent sans échec
- Les nouvelles API ont des tests unitaires correspondants
- Les changements visibles pour l'utilisateur incluent des étapes de test manuel (navigateur + mobile)
```

### 4. Garder le « pourquoi » à une phrase quand possible

```md
- Ne pas éditer `generated/` : généré par code ; les éditions manuelles sont écrasées au prochain build
```

Le long contexte doit lier vers la doc officielle `docs/`.

## Ce que signifient « de bonnes instructions »

De bonnes instructions permettent aux humains et à Codex de saisir rapidement :

- Quoi faire en premier
- Quoi ne pas faire
- À quoi ressemble « terminé »

Si après lecture vous ne savez toujours pas quelle commande exécuter en premier, quoi ne pas toucher ou comment savoir que vous avez fini, ce n'est pas encore assez utile.

## Exemple de snippet playbook d'équipe

```md
## PR et Git
- Nommage de branche : préfixes `feat/`, `fix/`, `docs/`
- Une PR fait une chose ; les gros refactors ont leur propre PR
- Revue humaine du diff obligatoire avant merge, même si Codex a exécuté les tests

## Travailler avec Codex
- Pour les grandes tâches, demander « un plan d'abord ; attendre ma confirmation avant de modifier le code »
- Pour les migrations de base de données, produire le SQL de migration pour revue humaine d'abord
```

## Erreurs courantes

| Erreur | Conséquence |
|---|---|
| Empiler une encyclopédie de framework | Les commandes de test clés sont ignorées |
| Règles contradictoires | Le modèle choisit une au hasard |
| Lignes vagues comme « être élégant » | Impossible à vérifier |
| Clés ou URLs internes incluses | Risque de fuite |

## Idées reçues courantes

### 1. Plus de détails n'est pas toujours mieux

Trop dispersé, trop long, trop encyclopédique — et les règles prioritaires sont noyées.

### 2. « Suivre les conventions » compte comme instruction ?

Généralement pas assez exécutable.  
Mieux vaut donner :

- Des commandes réelles
- Des répertoires explicites
- Des critères de complétion concrets

### 3. Peut-on mélanger librement le contexte et les règles d'exécution ?

Pas recommandé.  
Mieux :

- Règles en tête
- Contexte compressé à une ligne
- Explication plus longue dans la doc

## Quand réécrire, commencer ici

Si vous avez une doc d'instructions projet dispersée, resserrez ainsi :

1. Déplacer « doit/ne doit pas » en tête
2. Transformer le langage vague en commandes ou vérifications concrètes
3. Raccourcir le long contexte ; remplacer par des liens
4. Fournir une définition de terminé minimale

De bonnes instructions projet ne visent pas la quantité — elles rendent les contraintes clés, les commandes clés et les critères de complétion suffisamment clairs pour exécuter directement.

## Rythme de maintenance

- **Mettre à jour** `AGENTS.md` chaque fois que les commandes CI changent
- Revue trimestrielle : supprimer les règles obsolètes
- Première étape d'onboarding des nouveaux membres : lire AGENTS.md et compléter le « Démarrage rapide »

## Pour aller plus loin

- [Instructions projet](/fr/guide/customization/project-instructions/)
- [Explorer—Planifier—Exécuter—Vérifier](/fr/cases/workflows/explore-plan-execute-verify/)
- [Définir terminé](/fr/prompts/define-done/)

## D’une tâche à une règle projet

Tous les bons prompts ne doivent pas aller dans `AGENTS.md`. Décidez d'abord quelle couche doit les porter.

| Contenu récurrent | Meilleur emplacement |
|---|---|
| « Ne pas modifier les dossiers générés » | Interdit dans `AGENTS.md` |
| « Relire chaque PR dans ce format » | Skill ou modèle de prompt |
| « Formater après écriture » | Hook |
| « Lire Linear/Jira avant de coder » | MCP + Skill associé |
| « Je préfère les explications en chinois » | Mémoire ou préférence personnelle |

`AGENTS.md` convient aux règles durables, partagées et vérifiables. Les processus vont dans les Skills, les contrôles automatiques dans les Hooks, l'accès externe dans MCP.

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Recoupement avec la série `AGENTS.md` actuelle de ce dépôt, les chapitres contexte et flux de travail ; cette page ne décrit que des principes d'écriture stables et un rythme de maintenance pour les instructions projet et ne traite pas les détails d'implémentation d'un client comme une promesse à long terme.  
**Dernière vérification :** 2026-07-26
