---
title: "Préférences personnelles"
description: Configuration utilisateur, modèles par défaut et habitudes UI — sans polluer les conventions d'équipe dans le dépôt.
locale: fr
source_locale: zh-CN
source_revision: e447e66
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Les **préférences personnelles** sont des paramètres sur votre machine qui s'appliquent à tous les projets : modèle par défaut, thème, habitudes d'approbation, chemins Skill personnels, etc. Contrairement à `AGENTS.md` dans le dépôt, les préférences personnelles ne devraient **pas** supposer que les coéquipiers sont identiques.

## Contenu

- Ce qui appartient à la couche personnelle versus la couche projet
- Comment associer avec les [Profils](/fr/guide/customization/configuration/profiles/) pour basculer de scénario
- Comment éviter que des paramètres personnels relaxés fuient dans les dépôts d'équipe

Vue d'ensemble de la priorité : [Personnalisation](/fr/guide/customization/) · [Portée et priorité](/fr/guide/customization/agents-md/scope-and-precedence/)

## Pourquoi séparer cette couche

Beaucoup mélangent cela au début :

- Comment j'aime personnellement travailler
- Ce que ce dépôt exige
- Ce que l'entreprise ou l'équipe impose

Si vous ne les séparez pas, vous obtenez plus tard :

- Votre setup local semble fluide, mais les coéquipiers ne peuvent pas le reproduire
- Vous croyez que les règles sont actives quand seule votre machine compense
- Vous apportez des paramètres relaxés dans un projet plus sérieux

## Contenu d'équipe qui ne devrait pas vivre uniquement dans la couche personnelle

- Style de code, commandes de test, structure de répertoires → **`AGENTS.md` projet**
- Politique de bac à sable obligatoire → **configuration projet ou gestion organisation**
- Exigences de conformité pour les dépôts clients → **documentation + CI**, pas seulement la mémoire personnelle

## Pratiques recommandées

1. **Séparer les Profiles travail/personnel** : utiliser un Profile strict pour les projets clients ; les projets de pratique peuvent être relaxés
2. **Lire les règles projet en entrant dans un nouveau dépôt**, puis décider si annuler temporairement les défauts personnels
3. **Nettoyer régulièrement** : MCP et Skills personnels ; supprimer les sources tierces non utilisées
4. En changeant de machine ou réinstallant, exporter une liste de contrôle de configuration (sans valeurs secrètes)

## Idées reçues courantes

### 1. Ce que j'aime habituellement n'est pas toujours un bon défaut global

Si vos habitudes par défaut sont relaxées, elles peuvent être inappropriées dans les projets clients ou d'équipe.

### 2. Les préférences personnelles et les règles projet sont fondamentalement pareilles ?

Elles diffèrent beaucoup.  
Les préférences personnelles sont « je suis habitué à travailler ainsi » ; les règles projet sont « tout le monde dans ce dépôt devrait essayer de travailler ainsi ».

### 3. « Ma machine est bien » ne suffit pas pour juger si le setup est raisonnable

Meilleurs critères :

- Ne pollue pas le dépôt
- Ne dépend pas de défauts que seul vous connaissez
- Ne cause pas de dommage en passant à un projet strict

## Comment décider si quelque chose appartient à la couche personnelle

Quand vous hésitez si un paramètre appartient à la couche personnelle, demandez :

1. Est-ce une habitude dont seul moi je tiens compte ?
2. Affectera-t-il la reproduction des résultats par d'autres ?
3. Est-il approprié de l'apporter dans chaque projet ?

Si les questions 2 ou 3 penchent dangereusement, ne le définissez pas légèrement comme défaut global.

Les préférences personnelles existent pour que votre propre flux de travail soit naturel ; elles ne sont pas un filet de sécurité pour les règles d'équipe, et vous ne devriez pas déverser des paramètres relaxés dans chaque projet.

## Et la fonctionnalité Memory

Si le produit offre « mémoire » ou préférences persistantes, voir [Mémoires et contexte persistant](/fr/guide/customization/memories-and-persistent-context/). La mémoire convient aux habitudes stables ; **les contraintes spécifiques au projet devraient encore venir des fichiers du dépôt**.

## Erreurs courantes

- Clé API d'entreprise codée en dur dans la configuration personnelle
- Auto-approuver globalement le shell sur votre machine tout en traitant du code client
- Les coéquipiers clonent le dépôt et se plaignent que « les règles ne marchent pas » — car les règles n'ont jamais été commitées

## Liste de contrôle d'acceptation

- [ ] Vous pouvez donner un exemple pour chaque couche personnelle, projet et organisation
- [ ] Vous avez configuré au moins un Profile strict pour un projet client
- [ ] Aucun secret personnel dans le dépôt

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE  
**Base de vérification :** Recoupement avec les chapitres vérifiés du handbook sur instructions projet, Profiles, division des responsabilités des paramètres et frontières de sécurité ; cette page ne décrit que le principe stable de couche que les habitudes personnelles ne devraient pas polluer les règles du dépôt d'équipe et ne traite pas l'UI de paramètres actuelle d'un client comme contrat fixe.  
**Dernière vérification :** 2026-07-26
