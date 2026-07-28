---
title: Créer votre premier Skill
description: Un Skill pr-review soumissable from scratch, avec tests et partage équipe.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Vous savez déjà donner des tâches, mais pas encore créer un Skill ? Cette page couvre les bases du **premier** Skill.

15–30 minutes pour un Skill **réutilisable dans le dépôt** valent mieux qu'une longue théorie. Bon point de départ : un petit Skill aux limites nettes.

## Public

Vous avez fait [Première tâche](/cases/first-task/) et acceptez d'essayer dans un dépôt de test.

## Pourquoi commencer par `pr-review`

- entrée claire
- risque plus faible que « modifier le code directement »
- succès facile à juger
- bon pour comprendre déclenchement et limites

Idéal pour apprendre à figer une routine en objet réutilisable.

## Résultat visé

Un Skill sous `.agents/skills/pr-review/` qui produit une revue structurée des changements courants.

## Minimum viable

1. être reconnu
2. exécuter un flux clair de façon stable
3. ne pas faire d'actions dangereuses « en passant »

Ensuite l'itération est plus simple.

## Étapes

### 1. Créer le répertoire

```bash
mkdir -p .agents/skills/pr-review
```

### 2. Rédiger SKILL.md

```md
---
name: pr-review
description: Revoir le git diff, lister blocages, lacunes de tests et suggestions de style. Quand l'utilisateur dit review, revue ou contrôle avant merge. Ne pas utiliser pour écrire une nouvelle fonctionnalité.
---

# Revue PR

## Entrées
- Branche de comparaison par défaut : main (sinon branche par défaut)

## Flux
1. Lister fichiers modifiés et type (feature/fix/refactor/doc)
2. Pour chaque changement logique : tests manquants ? API cassée ?
3. Secrets, logs de debug, diff hors sujet trop gros
4. Sortie :
   - 🔴 Bloquant : à corriger
   - 🟡 Suggestion : devrait corriger
   - 🟢 OK : conforme AGENTS.md

## Interdit
- pas de git push
- pas de modification d'API publique non discutée
```

### 3. Essai local

Dans Codex sur ce dépôt :

```text
$pr-review Revois mes changements non commités
```

Ou : « Revois le diff selon l'équipe, focus tests. »

### 4. Explicite d'abord, implicite ensuite

1. `$pr-review` explicite
2. flux et sortie OK
3. langage naturel

Distingue contenu du Skill vs `description` de déclenchement.

### 5. Itérer description

Jamais choisi automatiquement → renforcer mots déclencheurs. Trop souvent → ajouter « quand ne pas utiliser ».

### 6. Partage équipe

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

Dans README ou `AGENTS.md` : « Avant merge : `$pr-review`. »

## Idées reçues

### 1. Le premier Skill doit tout faire

Souvent l'inverse : petit et focalisé = valeur visible plus vite.

### 2. L'enjeu n'est pas d'être « intelligent »

**Limites claires** : quoi faire / ne pas faire.

### 3. « Ça tourne » = succès

Utile si :

- autrui sait quand l'utiliser
- sortie structurée fixe
- pas d'actions dangereuses implicites

## Checklist d'acceptation

- [ ] `$pr-review` OK sans git dangereux
- [ ] conclusions par niveau, pas de généralités
- [ ] `description` = scénario en une phrase
- [ ] [Permissions et approbations](/guide/permissions-and-sandbox/) si scripts (ici aucun)

Commencer petit et stable facilite la réutilisation d'une routine claire.

## Suite

- figer [Comprendre](/prompts/templates/understand/) en Skill
- API GitHub → [MCP](/skills/mcp/mcp-overview/)

## Sources

- Exemples officiels Codex Skills et `skill-creator` (si fourni)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Le runtime supporte répertoire skills projet, `SKILL.md`, appel explicite ; exercice d'entrée stable pour le premier Skill.
