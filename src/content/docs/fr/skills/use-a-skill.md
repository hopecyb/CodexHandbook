---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Le runtime Codex supporte encore référence explicite par nom et match automatique ; OpenAI Help confirme l'usage automatique quand utile. Page sur déclenchement et rédaction."
  checkedAt: "2026-07-26"
title: Utiliser un Skill
description: Déclenchement explicite et implicite, et bien rédiger description.
locale: fr
source_locale: zh-CN
source_revision: '5fd7e53'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
---

Idée reçue : « installé = actif tout seul ». Utiliser un Skill, c'est faire suivre à Codex un **workflow prédéfini**.

Déclenchement **explicite** (vous nommez) ou **implicite** (le modèle choisit). Cette distinction facilite le diagnostic des problèmes de déclenchement.


![Illustration : deux façons d'appeler un skill côte à côte — à gauche une main désigne directement une boîte à outils (appel explicite), à droite l'assistant lit les étiquettes et choisit lui-même la bonne (déclenchement implicite)](/illustrations/skills-trigger.webp)

## Modes de déclenchement

1. **Explicite** : appeler `$skill-name` dans un environnement compatible ; le nom doit correspondre à `name` dans le frontmatter
2. **Implicite** : le modèle juge si la tâche correspond à `description`

## Les distinguer

- **Explicite** : « utilise ce Skill »
- **Implicite** : vous ne nommez pas, mais la tâche ressemble au scénario du Skill

Au début, privilégiez l'**explicite** pour vérifier :

- reconnaissance du Skill
- comportement attendu
- nom et description corrects

## Exemple

```text
$pr-review Revois mes changements non commités
```

Ou en langage naturel : « Revois le diff selon les habitudes de l'équipe, focus tests. »

## Idées reçues

### 1. Un Skill écrit se déclenche toujours seul

Dépend de `description` et de la ressemblance de la tâche.

### 2. Langage naturel = `$name`

Pas toujours. `$name` exprime clairement le choix du Skill et convient à sa vérification ou à son utilisation explicite. Le langage naturel est plus pratique, mais le modèle peut choisir le mauvais Skill ou ne pas en utiliser.

### 3. Pas de déclenchement = Skill cassé

Peut être : mauvais nom, `description` trop vague, tâche sans mots déclencheurs.

Vérifiez aussi si le Skill « ressemble à un outil qu'on sélectionnerait ».

## Ordre de test

1. `$skill-name` explicite
2. sortie conforme ?
3. ajuster `description`
4. tester le déclenchement en langage naturel

Cela permet de distinguer un défaut du Skill d’une condition de déclenchement automatique mal définie.

## Bien écrire description

- quand utiliser / ne pas utiliser
- mots-clés (review, release, changelog)
- éviter « aide à coder »
- scénarios clés **en tête** (budget de caractères sur la liste)

## Test de clarté

Après lecture de `description`, on doit savoir **quand oui, quand non**.

Si « ça fait tout » → trop vague.

Voir [Vue d'ensemble des Skills](/fr/skills/overview/).
