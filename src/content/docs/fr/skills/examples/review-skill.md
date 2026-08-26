---
title: "Exemple : Skill d'examen"
description: Exemple de Skill basé sur pr-review, adapté à la réutilisation ou l'ajustement en équipe.
locale: fr
source_locale: zh-CN
source_revision: 5fb154c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Exemple : Skill d'examen

Cet exemple correspond au `pr-review` de [Créer votre premier Skill](/fr/skills/create-your-first-skill/), ajustable selon les besoins de l'équipe.

## SKILL.md

```md
---
name: pr-review
description: Examine le git diff, liste les problèmes bloquants, lacunes de tests et suggestions de style. À utiliser quand l'utilisateur mentionne review, examen ou vérification avant fusion. Ne pas utiliser pour écrire de nouvelles fonctionnalités.
---

# Examen de PR

## Entrées
- Branche de comparaison par défaut : main (sinon branche par défaut du dépôt)

## Flux
1. Lister les fichiers modifiés et le type de changement (fonctionnalité/correction/refactorisation/documentation)
2. Pour chaque changement logique : tests manquants ? API cassée ?
3. Vérifier présence de secrets, logs de débogage, diff hors sujet trop volumineux
4. Sortie : 🔴 bloquant / 🟡 suggestion / 🟢 OK

## Interdictions
- Ne pas faire git push
- Ne pas modifier d'API publique non discutée
```

## Essai

```text
$pr-review Examine mes modifications non commitées
```

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Examiner un diff et produire des conclusions structurées reste un scénario typique de Codex ; cette page fournit un squelette indicatif de `SKILL.md`, sans dépendre d'une interface volatile.  
**Dernière vérification :** 2026-07-26
