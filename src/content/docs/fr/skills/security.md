---
title: Sécurité et versions des Skills
description: Source d'installation, limites de permission, mise à niveau et rollback pour gouverner les Skills d'équipe.
locale: fr
source_locale: zh-CN
source_revision: 8e8c837
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Un Skill n'est pas qu'un modèle de Prompt de plus.

Il influence comment Codex agit, parfois avec scripts ou ressources.

Source douteuse, contenu non revu, dérive de version : risque comparable à MCP. Cette page couvre **choix, installation, mise à niveau et audit** en équipe.

## Contenu

- quels Skills ne pas installer
- version figée et revue des changements
- lien avec la distribution Plugin

## Pourquoi les utilisateurs doivent s'y connaître

Si vous :

- installez un Skill partagé
- référencez un Skill d'équipe
- mettez à jour un Skill
- le recommandez à des collègues

vous êtes dans la chaîne de risque.

La sécurité Skill ne repose pas que sur un admin central.

Bases : [Vue d'ensemble](/fr/skills/overview/) · [Premier Skill](/fr/skills/create-your-first-skill/)

## Modèle de menace (simplifié)

| Risque | Manifestation |
|---|---|
| Skill malveillant | fuite de secrets, shell destructif |
| permissions excessives | chemins interdits lus/écrits |
| supply chain | dépôt tiers altéré |
| Skill obsolète | incompatibilité CLI, comportement erratique |

## Avant installation

1. d'où vient-il ?
2. que fera Codex en plus ?
3. comprenez-vous `SKILL.md` et les scripts ?

Deux réponses vides sur trois → pas dans le projet formel.

## Principes d'installation

1. **Source** : marché officiel, Git interne ; méfiance gist anonyme
2. **Lecture** : `SKILL.md` et scripts avant install, permissions suspectes
3. **Isolation** : projets clients vs labo perso
4. **Minimal** : un Skill suffisant, pas dix empilés

## Idées reçues

### 1. Skill = texte sans risque réel

Il influence workflow, outils, exécution de scripts.

### 2. Skill populaire = OK en prod

Adaptation à votre dépôt, permissions et règles d'équipe.

### 3. Mise à jour Skill = mise à jour doc

Pour l'équipe, c'est une **mise à niveau de comportement automatisé** — comme une dépendance.

## Versions et mises à niveau

| Pratique | Description |
|---|---|
| Pin version | doc équipe : nom Skill + commit/tag |
| Revue changements | PR sur mise à jour Skill |
| Changelog | release notes du pack équipe |
| Rollback | copie version précédente |

Plugin pour packager Skills : [Vue d'ensemble Plugins](/fr/skills/plugins/plugins-overview/)

## Habitudes d'équipe

Skill partagé long terme :

- source fixe
- historique de versions
- notes de mise à niveau
- chemin de rollback

## Appel `$skill`

`$name` explicite = intention claire ; **choix automatique** → limiter liste et scénarios dans `AGENTS.md`.

## Checklist gouvernance

- [ ] liste blanche sources Skill
- [ ] onboarding : pack de base seulement
- [ ] revue trimestrielle des Skills encore utiles
- [ ] alignement [allow/deny](/fr/guide/customization/rules/allow-and-deny-patterns/)

## Erreurs courantes

- Skill « universel » depuis un lien chat
- `AGENTS.md` prod pointant vers chemin perso
- pas de smoke test après upgrade
- confiance sans lire `SKILL.md`

## Sources
- OpenAI Codex Skills — sécurité
---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** OpenAI Help « Skills in ChatGPT » : instructions, fichiers, code — l'utilisateur doit revoir source et risque ; gouvernance de cette page alignée.
