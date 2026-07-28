---
title: "Vue d'ensemble des Skills"
description: Enseigner des workflows réutilisables à Codex via SKILL.md — écrire une fois, invoquer à la demande.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **Skill** est un répertoire contenant `SKILL.md` (scripts et références optionnels), qui empaquette un flux fixe en capacité **appelable automatiquement ou explicitement** par Codex.

Il convient aux méthodes déjà répétées et qui le seront encore.

## Concepts clés

### Différence avec les commandes slash

| | Commande slash | Skill |
|---|---|---|
| Déclenchement | vous tapez `/xxx` | vous pouvez `$name`, ou le modèle matche la description |
| Contexte | en général expansion immédiate | **divulgation progressive** : nom + description, corps lu à l'usage |
| Convient à | entrée fixe, fréquente, mémorisée | flux long, doc nécessaire, jugement automatique du moment |

### Divulgation progressive

Au démarrage, Codex ne voit que **name, description, chemin** de chaque Skill ; le `SKILL.md` complet se charge à l'usage. Le corps peut donc être détaillé sans saturer le contexte.

Attention : budget de caractères initial pour la liste des Skills (fraction du contexte). Mettez les scénarios de déclenchement **en tête** de `description`, sinon troncature et échec de match.

## Structure d'un répertoire Skill

```text
my-skill/
├── SKILL.md          # requis
├── scripts/          # optionnel : étapes déterministes
└── references/       # optionnel : longue doc de référence
```

Exemple minimal de `SKILL.md` :

```md
---
name: pr-review
description: Revoir le diff de la branche courante vs main, signaler risques et lacunes de tests. À utiliser pour review, PR ou contrôle avant merge. Ne pas utiliser pour écrire une nouvelle fonctionnalité.
---

## Étapes
1. Obtenir le diff vs main
2. Classer par fichier : logique, sécurité, performance, tests
3. Liste par niveau : bloquant / suggestion / nit
4. Ne pas push ni merger automatiquement
```

## Emplacements

| Type | Emplacement typique | Note |
|---|---|---|
| Skill projet | `.agents/skills/<name>/` | suit le dépôt, partagé équipe |
| Skill utilisateur | répertoire skills utilisateur (doc officielle) | personnel, multi-projets |
| Sélection officielle | via installateur | chemin géré par l'installateur |

**Ne pas** copier des chemins obsolètes ou un champ `trigger:` fictif ; référence : [doc officielle Skills](https://developers.openai.com/codex/skills).

## Déclenchement

1. **Explicite** : `$skill-name` (nom = `name` du frontmatter)
2. **Implicite** : le modèle juge si la tâche correspond à `description`

Bien écrire `description` :

- quand utiliser / ne pas utiliser
- mots-clés utilisateur (review, release, changelog)
- éviter « aide à coder » trop vague

## Workflow recommandé

1. un flux s'est répété plusieurs fois
2. brouillon `SKILL.md`, étapes en texte
3. essai `$name` et match implicite sur petite tâche
4. ajouter `scripts/` si besoin de déterminisme
5. commit dans `.agents/skills/` et PR équipe

Exercice : [Créer votre premier Skill](/skills/create-your-first-skill/)

## Confusions courantes

### 1. Skill vs Prompt ?

- **Prompt** : ce que vous dites pour cette tâche
- **Skill** : flux réutilisable pour des tâches similaires

### 2. Faut-il apprendre les Skills dès le début ?

Non. Formulez d'abord les tâches ; quand un flux se répète, envisagez un Skill.

### 3. C'est comme une commande slash ?

Pas tout à fait. Slash = raccourci ; Skill = paquet workflow avec doc complète.

Les Skills ne sont pas obligatoires au départ — ils organisent les flux répétés.

## Limites de sécurité

- scripts Skill et appels MCP héritent des approbations en vigueur
- pas de secrets en dur ; variables d'environnement ou auth MCP
- revue des Skills tiers comme des dépendances

## Erreurs fréquentes

- `description` trop longue ou vague → jamais déclenché ou faux positifs
- un Skill pour dix flux sans rapport
- scripts à la place d'étapes claires → maintenance difficile

## Sources

- Documentation OpenAI Codex Skills
- KimYx0207 CX-06 ; stormzhang `22-skills.md`

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Règles de chargement Skill actuelles (`SKILL.md`, lecture à la demande) alignées avec OpenAI Help « Skills in ChatGPT » ; cette page reste conceptuelle, sans UI versionnée.
