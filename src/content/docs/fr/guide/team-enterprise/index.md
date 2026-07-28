---
title: "Équipe et entreprise"
description: Adoption, standards, gouvernance et sécurité pour scaler Codex sans perdre le contrôle.
sidebar:
  order: 70
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Le chapitre **Équipe et entreprise** est pour les leads engineering, plateforme et sécurité — faire passer Codex de la productivité individuelle à quelque chose que les équipes peuvent gérer, auditer et apprendre. Associer avec [Parcours d'apprentissage · Équipe](/guide/learning-paths/team/) ; ce chapitre penche gouvernance et déploiement.

Si vous êtes encore solo ou apprenez les bases, vous pouvez lire ceci plus tard. Il se concentre sur les frontières, le processus et la responsabilité quand beaucoup de personnes utilisent Codex ensemble.

Questions clés :

- Qui peut l'utiliser
- Quelle portée est autorisée
- Comment tracer les incidents
- Comment les extensions à haut risque sont approuvées

## Ce que ce chapitre couvre

- Chemin du pilote petite équipe au déploiement org
- Sécurité, conformité et risque d'extension (Plugin/MCP)
- Liens croisés vers d'autres sections du handbook

## Qui devrait lire

| Rôle | Commencer par |
|---|---|
| EM / lead | [Modèle de menace](/guide/team-enterprise/security/threat-model/) · [Usage acceptable](/guide/team-enterprise/governance/acceptable-use/) |
| Engineering plateforme | [Règles d'équipe](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| Sécurité | [Risque Plugin et MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injection de prompt](/guide/team-enterprise/security/prompt-injection/) |

## Modèle de gouvernance (conceptuel)

```text
Politique (gérée org, AUP)
    ↓
Standards (AGENTS.md, liste d'extensions approuvées)
    ↓
Application (règles, bac à sable, Hooks, CI)
    ↓
Observation (audit, métriques, rétrospectives)
```

## Navigation du chapitre (starter)

| Sujet | Pages |
|---|---|
| Sécurité | [Modèle de menace](/guide/team-enterprise/security/threat-model/) · [Risque Plugin/MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injection de prompt](/guide/team-enterprise/security/prompt-injection/) |
| Gouvernance | [Politique d'usage acceptable](/guide/team-enterprise/governance/acceptable-use/) |

La roadmap ajoutera adoption, administration, deployment-patterns, etc. — voir [plan du chapitre](/docs/planning/chapter-outline.md) (doc de planification du dépôt).

## Relation avec la personnalisation

- Couche gérée org dans [priorité AGENTS.md](/guide/customization/agents-md/scope-and-precedence/)
- [Politique de règles d'équipe](/guide/customization/rules/team-rules/)

## Erreurs courantes

- Acheter des sièges sans formation et standards
- Bac à sable personnel relaxé devient défaut org
- Approuver tous les Plugins communautaires sans liste

## Liste de contrôle d'acceptation

- [ ] AUP écrite ou politique équivalente
- [ ] Processus d'approbation pour extensions à haut risque
- [ ] Contacts d'incident clairs (sécurité/plateforme)

## Idées reçues courantes

### 1. Utilisateur solo — besoin de ce chapitre maintenant ?

Pas forcément une lecture profonde encore.  
Mais sachez : une fois Codex un système d'équipe, les problèmes ne sont pas seulement « comment prompt ».

### 2. Pourquoi tant d'audit, gouvernance, politique ?

À l'échelle équipe, les frontières se brouillent avec le temps — c'est le risque.

### 3. Première passe conceptuelle — lire quoi ?

Commencer par :

- [Risque Plugin et MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Politique d'usage acceptable](/guide/team-enterprise/governance/acceptable-use/)

Si vous préférez l'onboarding personnel d'abord, reporter ce chapitre jusqu'au déploiement équipe, permissions ou contrôle des risques.

---

**Statut :** vérifié  
**Produits concernés :** Fonctionnalités organisation / équipe (selon plan)  
**Base de vérification :** Le Help Center OpenAI et la doc plugin/app accentuent encore l'accès par rôle, l'activation de plugins, l'approbation d'actions, les frontières de données et la responsabilité d'audit pour le déploiement Codex/ChatGPT d'équipe. Cette page est une navigation de chapitre focalisée sur le modèle de gouvernance et l'ordre de lecture — pas des chemins UI admin spécifiques.  
**Dernière vérification :** 2026-07-26
