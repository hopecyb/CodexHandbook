---
title: Transformer un flux de travail en Skill
description: La troisième répétition du même flux mérite un Skill — déclencheur, instructions et acceptation au même endroit.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Quand la même catégorie de tâche (contrôles de release, synchronisation de doc, scans de sécurité) est accomplie **une troisième fois** en copiant-collant des prompts, envisagez un [Skill](/skills/overview/). Ce chapitre fait le lien entre les [méthodes de flux de travail](/cases/workflows/) et le système d'extensions.

## Ce que résout cette page

- Quand passer d'un modèle de prompt à un Skill
- Ce qu'un Skill doit contenir (instructions, ressources, scripts)
- Comment partager et versionner en équipe

## Signaux qui valent la capitalisation

- Étapes fixes + liste d'acceptation fixe
- Besoin de modèles ou scripts dans le dépôt
- Plusieurs personnes doivent avoir un comportement cohérent
- Souhait que le modèle **rappelle automatiquement** le flux sur les tâches pertinentes

Pas besoin de capitaliser : exploration ponctuelle, petites corrections fortement liées au contexte du jour.

## Approche minimale viable

1. **Rédiger clairement SKILL.md** : quand déclencher, entrées/sorties, interdictions
2. **Joindre `references/`** : checklists, exemples de diff
3. **`scripts/` optionnel** : commandes de vérification reproductibles (alignées sur les [règles de commande](/guide/customization/rules/command-rules/))
4. **Mentionner le nom du Skill** dans le README du dépôt ou AGENTS.md
5. **Essayer 2–3 fois**, puis marquer `verified`

Pour commencer : [Créer votre premier Skill](/skills/create-your-first-skill/)

## Flux de travail recommandé

```text
Extraire prompt et critères d'acceptation d'un cas réussi
    → réduire au corps du Skill (supprimer le langage oral, garder les contraintes)
    → ajouter une description de déclencheur (« avant fusion », « avant release »)
    → revue PR d'équipe
    → placer dans examples/ du dépôt, plugin d'équipe ou bibliothèque de skills interne
```

Comparer avec [Transformer un flux en automatisation](/skills/automations/scheduled-tasks/) : les Skills sont une **guidance interactive** ; les Automations sont **planifiées/sans surveillance**.

## Erreurs courantes

- Skill plus long que la lecture de `AGENTS.md`
- Pas de liste d'acceptation — qualité d'exécution qui dérive
- Scripts nécessitant des secrets locaux sans note SECURITY
- Duplication et contradiction avec les règles Hooks

## Limites de sécurité

- Voir [Sécurité et version des Skills](/skills/security/)
- Les Skills d'équipe doivent figurer sur la liste d'approbation des extensions (voir [Risques Plugin et MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Liste de contrôle d'acceptation

- [ ] Un nouveau collègue peut accomplir la tâche avec le Skill seul
- [ ] Conditions de déclenchement claires, faible taux de faux déclenchements
- [ ] Version ou CHANGELOG pour les Skills d'équipe
- [ ] Liens croisés vers les documents de flux source

## Sources de référence
- Dans le dépôt [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) et [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)
---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les cas d'usage publics actuels d'OpenAI Developers sur « Save workflows as skills », ainsi que les chapitres vérifiés sur les Skills, l'automatisation, les règles de commande et les risques d'extension ; le contenu se limite aux conseils stables sur quand capitaliser des flux répétés en Skills et comment organiser instructions et acceptation.
