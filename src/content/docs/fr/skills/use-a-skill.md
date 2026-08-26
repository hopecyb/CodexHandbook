---
title: Utiliser un Skill
description: Déclenchement explicite et implicite, et bien rédiger description.
locale: fr
source_locale: zh-CN
source_revision: fa190cf
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Idée reçue : « installé = actif tout seul ». Utiliser un Skill, c'est faire suivre à Codex un **workflow prédéfini**.

Déclenchement **explicite** (vous nommez) ou **implicite** (le modèle choisit). La distinction évite des heures de dépannage.

# Utiliser un Skill

## Modes de déclenchement

1. **Explicite** : `$skill-name` (nom = `name` du frontmatter)
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

Pas toujours. `$name` est plus net pour forcer ; le naturel peut choisir mal ou ignorer le Skill.

### 3. Pas de déclenchement = Skill cassé

Peut être : mauvais nom, `description` trop vague, tâche sans mots déclencheurs.

Vérifiez aussi si le Skill « ressemble à un outil qu'on sélectionnerait ».

## Ordre de test

1. `$skill-name` explicite
2. sortie conforme ?
3. ajuster `description`
4. tester le déclenchement en langage naturel

Sépare « problème de contenu » et « conditions d'auto-déclenchement ».

## Bien écrire description

- quand utiliser / ne pas utiliser
- mots-clés (review, release, changelog)
- éviter « aide à coder »
- scénarios clés **en tête** (budget de caractères sur la liste)

## Test de clarté

Après lecture de `description`, on doit savoir **quand oui, quand non**.

Si « ça fait tout » → trop vague.

Voir [Vue d'ensemble des Skills](/fr/skills/overview/).

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Le runtime Codex supporte encore référence explicite par nom et match automatique ; OpenAI Help confirme l'usage automatique quand utile. Page sur déclenchement et rédaction.
