---
title: Vue d'ensemble des Plugins
description: Empaqueter Skills, MCP et connecteurs d'app pour distribution et gestion unifiée en équipe.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un Plugin est comme un paquet d'installation : il regroupe des extensions préconfigurées pour que d'autres les installent.

Le **Plugin** empaquette Skills, serveurs MCP, intégrations d'app et plus en unités **installables, mises à jour, gouvernables** — en particulier « une personne configure, toute l'équipe réutilise ».

## Différence centrale

| Autonome | Via Plugin |
|---|---|
| Copier manuellement répertoires Skill | Installation/mise à niveau en un clic |
| Chaque personne configure JSON MCP | Serveurs préconfigurés et notes de permissions |
| Docs dispersées | L'éditeur fournit manifest et notes de version |

Le Plugin est la **couche de distribution et composition**. Les capacités restent dans Skill, MCP, connecteurs — voir [carte des capacités](/skills/capability-map/).

## Plugin vs Skill vs MCP

Version courte :

- **Skill** : Indiquer à Codex « suivez ces étapes »
- **MCP** : Indiquer à Codex « ces outils externes sont appelables »
- **Plugin** : Empaqueter le tout pour installation et gouvernance

Beaucoup de confusion vient de traiter les trois comme la même chose.

## Composition typique

```text
Paquet Plugin
├── Skills (optionnel)
├── Définitions de serveurs MCP (optionnel)
├── Connecteurs d'app / flux OAuth (optionnel)
└── Métadonnées : version, déclaration de permissions, changelog
```

## Quand utiliser Plugin

| Utiliser Plugin | Passer Plugin |
|---|---|
| Pack d'amélioration Figma/Linear/GitHub pour toute l'équipe | Script personnel ponctuel |
| Besoin de gestion de version et rollback | Un seul `SKILL.md` suffit |
| Extensions allowlist entreprise seulement | Prototype expérimental |

## Quand s'intéresser au Plugin

- Apprentissage personnel, écrire quelques Skills : peut attendre
- Livrer un pack d'extensions à l'équipe : temps de s'intéresser au Plugin

Le Plugin résout surtout **distribution et gouvernance** — pas une exigence Codex du premier jour.

## Installation et gestion (conceptuelle)

1. Choisir Plugin depuis **marketplace officiel ou liste approuvée par l'équipe**
2. Lire notes de permissions : quels dépôts, quels SaaS
3. Après installation, redémarrer session ; vérifier liste d'outils et Skills
4. Mettre à jour régulièrement ; essayer versions majeures d'abord dans dépôt de staging

Boutons et commands exacts suivent l'UI actuelle App desktop / CLI.

## Idées reçues courantes

### 1. Installer un Plugin ne signifie pas sécurité automatique

Le Plugin distribue les capacités plus commodément — pas des permissions implicitement sûres. Vérifier encore :

- Ce qu'il peut accéder
- S'il agit en votre nom à l'extérieur
- Si la source est fiable

### 2. Tout ce qui est installable ne vaut pas à garder

Les extensions que l'équipe peut maintenir, récupérer et auditer conviennent à l'activation long terme.

## Sécurité et confidentialité

- Installer seulement des sources fiables ; revoir portées OAuth que le Plugin demande
- Séparer « lire fichiers de design » de « envoyer messages en mon nom »
- Révoquer auth connecteur en offboarding ou changement de rôle
- Superposer avec [permissions et approbations](/guide/foundations/permissions-and-approvals/) — ne pas supposer que Plugin apporte sa propre sécurité

## Comparé à Claude Code / autres écosystèmes

« Plugin » signifie des choses différentes selon les produits. Comparer : **ce qui est regroupé, modèle de permissions, open source auditable ou non** — voir [comparaison des fonctionnalités](/guide/reference/feature-comparison/).

## Erreurs courantes

- Un Plugin par petit Skill — maintenance explose
- Jamais mettre à jour après installation — manquer correctifs de sécurité
- Plugin expérimental activé dans dépôt de production

## Sources de référence
- Documentation Plugins OpenAI Codex
---

**Statut :** obsolète  
**Produits concernés :** App / CLI  
**Base de vérification :** OpenAI Help confirme que Plugin regroupe Skills, Apps et modèles d'app, mais cette page décrit encore des flux d'installation, mise à niveau et gouvernance trop spécifiques au-delà de la base publique stable actuelle.  
**Dernière vérification :** 2026-07-26
