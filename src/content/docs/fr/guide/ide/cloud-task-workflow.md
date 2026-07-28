---
title: Tâches Cloud dans l'IDE
description: Déléguer des Tâches Cloud depuis l'IDE, suivre le statut et revoir la sortie distante.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Certaines intégrations IDE permettent de **déléguer des Tâches à Cloud**. Le travail s'exécute dans un environnement distant standardisé pendant que vous continuez à éditer localement ou vous éloignez. Le flux correspond au Cloud/Web pur — seul le point d'entrée est dans l'éditeur.

## Ce qui est couvert

- Quand envoyer une Tâche Cloud depuis l'IDE vs purement local
- Quoi préparer avant et après la délégation
- Ramener les diffs distants pour revue locale

## Bons cas d'usage

| Préférer Cloud | Rester local |
|---|---|
| Installations lourdes, environnements difficiles à reproduire | Petites modifications de deux lignes |
| Besoin de push branche / ouvrir PR | GitHub non connecté |
| Longues exécutions avec notifications d'Approbation téléphone | Brouillons sensibles non commités sur la machine |

Concept : [local vs cloud](/guide/foundations/local-vs-cloud/)

## Quand ce flux aide

Schéma courant :

- Vous travaillez dans l'IDE par habitude
- Mais la Tâche tourne mieux dans un environnement distant

Vous travaillez toujours dans l'IDE ; l'exécution est passée à distance.

## Prérequis

- [ ] [GitHub connecté](/guide/web-and-cloud/connect-github/)
- [ ] [Environnement](/guide/web-and-cloud/cloud-environments/) Cloud et [Secrets](/guide/web-and-cloud/secrets-and-variables/) configurés si besoin
- [ ] Changements locaux commités ou explicitement « la branche distante fait foi »

**L'IDE ne peut pas faire voir à Cloud des commits non poussés sur votre machine.**

## Idées reçues courantes

### 1. « Exécuter dans Cloud » depuis l'IDE emporte tout sur ma machine

Non.  
Les Tâches distantes voient le dépôt distant, l'environnement distant et ce que vous attachez explicitement.

### 2. Parce que l'entrée est dans l'IDE, ça se comporte comme une Tâche locale

Pas tout à fait.  
Le lieu de lancement est l'IDE ; la limite d'exécution, l'environnement et la visibilité suivent toujours les règles Cloud.

### 3. Achèvement distant égale revu et approuvé

Terminé à distance signifie seulement que c'est fini là-bas — pas que la revue locale, les tests et la validation sont complets.

## Flux recommandé

```text
1. Rédiger la Tâche dans l'IDE (objectif, branche, contraintes, acceptation)
2. Choisir « Exécuter dans Cloud » ou équivalent (selon interface produit)
3. Confirmer le plan (si mode plan activé)
4. Partir ou continuer à travailler localement → vérifier la progression dans notifications/panneau
5. Quand le distant termine : revoir le diff dans Web/App → ouvrir PR ou tirer la branche localement
6. Lancer tests localement + revue humaine → fusionner
```

Détails PR : [Créer une Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Séquence pratique première fois

1. Confirmer changements locaux commités — ou intentionnellement exclus
2. Confirmer GitHub, Secrets, branche prêts
3. Déléguer avec objectif, périmètre et acceptation clairs
4. Revoir le diff quand le distant termine
5. Ajouter tests locaux et revue humaine

La différence centrale avec les Tâches IDE locales : l'environnement d'exécution est distant.

## Lien avec la délégation App de bureau

[Tâches locales et Cloud](/guide/desktop-app/local-and-cloud-tasks/) dans l'App de bureau partagent le même backend Cloud ; la différence est surtout **l'interface d'entrée et le Contexte attaché** (l'IDE peut inclure un résumé de la sélection actuelle).

## Limites de sécurité

- Les permissions de Tâche Cloud sont bornées par la portée de connexion GitHub et la politique d'org
- Ne collez pas de clés de production dans les descriptions de Tâche ; utilisez [Secrets](/guide/web-and-cloud/secrets-and-variables/)
- Exiger encore [revue humaine](/guide/web-and-cloud/code-review/) avant fusion

## Erreurs courantes

- Continuer à éditer le même fichier localement après délégation → conflits avec la branche distante
- Pas de nom de branche → le distant pousse sur une branche partagée
- Traiter la sortie Cloud comme « acceptée » et sauter la CI

## Références

- stormzhang `10-cloud.md`, `09-ide.md`
- KimYx0207 CX-10 Cloud

---

**Statut :** obsolète  
**Produits concernés :** IDE / Cloud  
**Note de revue :** Cette page décrit la délégation IDE vers Cloud, le transfert de diff et le suivi local comme comportement actuel concret ; la doc officielle ne vérifie pas encore ligne par ligne l'expérience de délégation Cloud IDE — mieux `obsolète` jusqu'à documentation IDE/Cloud formelle.  
**Dernière vérification :** 2026-07-26
