---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page explique uniquement comment limiter la portée des fichiers et dossiers ; les exemples et les notions ont été vérifiés, et elle ne dépend pas de faits changeants sur les versions, prix ou interfaces du produit."
  checkedAt: "2026-07-26"
title: Contexte des fichiers et dossiers
description: Indiquer les fichiers pertinents et éviter les informations sans rapport.
locale: fr
source_locale: zh-CN
source_revision: 'e9148a3'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 20
reviewed_at: '2026-10-26'
---

Ne dites pas seulement « modifie ceci ». Indiquez aussi à Codex quels fichiers consulter et lesquels laisser de côté.

Vous savez peut-être que le problème se trouve dans un dossier précis. Sans périmètre clair, Codex risque d'inclure des fichiers sans rapport.

## Pourquoi le périmètre compte

Quand le périmètre est trop large, plusieurs problèmes apparaissent souvent :

- Codex lit de nombreux fichiers sans rapport
- Des informations inutiles occupent le contexte
- Un fichier similaire est pris pour la cible
- Les modifications dépassent ce que vous attendiez

Le contexte des fichiers et dossiers sert à fixer cette limite.

## Pourquoi délimiter les fichiers

Imaginez que vous guidiez quelqu'un vers un document dans un bureau :

- « Va le chercher » peut l'amener à fouiller la moitié de l'étage
- « Regarde seulement dans le dossier bleu de la troisième armoire » est bien plus efficace

C'est pareil pour Codex. Plus le périmètre est clair, moins il doit deviner.

## Un exemple simple

Nommez les chemins concernés :

```text
Lis uniquement src/components/Button.tsx et son fichier de test. Ne parcours pas tout le dépôt.
```

Cette phrase précise :

- Où chercher
- Où ne pas chercher
- Qu'il ne faut pas élargir le périmètre de sa propre initiative

## Idées reçues

### 1. Faut-il citer autant de fichiers liés que possible ?

Trop peu de fichiers obligent à deviner ; trop de fichiers diluent l'essentiel.
Mieux vaut fournir **uniquement ce qui est vraiment nécessaire à la tâche actuelle**.

### 2. Que faire si je ne sais pas où sont les fichiers concernés ?

Demandez d'abord à Codex de réduire le périmètre, en précisant le but :

```text
Commence par trouver les fichiers liés au style du bouton de connexion. Ne modifie encore rien.
```

Localiser avant d'agir est généralement plus fiable que de fouiller tout le dépôt et de modifier au passage.

### 3. Puis-je ne pas préciser de périmètre et laisser Codex tout trouver ?

Il peut chercher, mais cela entraîne souvent :

- Plus de fichiers lus
- Plus de temps
- Davantage de fichiers similaires pris en compte
- Un risque accru de modifications inattendues

### 4. Faut-il indiquer à la fois les dossiers et les fichiers ?

Pas nécessairement, mais soyez aussi précis que possible.

- Vous connaissez le fichier : nommez-le directement
- Vous connaissez seulement la zone : nommez le dossier
- Vous ne savez pas du tout : demandez d'abord uniquement de localiser et d'expliquer

## Trois précisions utiles dans le prompt

Si vous craignez que Codex modifie trop de choses, précisez :

1. Quels fichiers ou dossiers consulter
2. Quels endroits ne pas parcourir
3. Quels fichiers seront concernés, avant toute modification

Dans un IDE, vérifiez aussi que la racine de l'espace de travail est la bonne.

## Une formulation prête à l'emploi

Par exemple :

```text
Commence par regarder uniquement `src/pages/home/` et `src/components/Hero.tsx`.
Ne parcours pas `backend/` ni `scripts/`.
Si d'autres fichiers sont nécessaires, explique-moi pourquoi avant de continuer.
```

Délimiter les fichiers pour Codex réduit les suppositions, le bruit et les modifications involontaires.
