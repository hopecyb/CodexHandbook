---
title: Équipe et entreprise
description: Adoption, standards, gouvernance et sécurité pour déployer Codex à grande échelle sans perdre le contrôle.
sidebar:
  order: 70
locale: fr
source_locale: zh-CN
source_revision: "b44c5d1"
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: Fonctionnalités organisation / équipe (selon plan)
  basis: Le Help Center OpenAI et la doc plugin/app accentuent encore l'accès par rôle, l'activation de plugins, l'approbation d'actions, les frontières de données et la responsabilité d'audit pour le déploiement Codex/ChatGPT d'équipe. Cette page est une navigation de chapitre focalisée sur le modèle de gouvernance et l'ordre de lecture — pas des chemins UI admin spécifiques.
  checkedAt: '2026-07-26'
---
Le chapitre **Équipe et entreprise** s’adresse aux responsables d’ingénierie et aux équipes plateforme et sécurité. Il explique comment passer d’un usage individuel à un usage d’équipe gérable, auditable et analysable après coup. À lire avec [Parcours d'apprentissage · Équipe](/fr/guide/learning-paths/team/) ; ce chapitre porte surtout sur la gouvernance et le déploiement.

Si vous êtes encore solo ou apprenez les bases, vous pouvez lire ceci plus tard. Il se concentre sur les frontières, le processus et la responsabilité quand beaucoup de personnes utilisent Codex ensemble.

Questions clés :

- Qui peut l'utiliser
- Quelle portée est autorisée
- Comment tracer les incidents
- Comment les extensions à haut risque sont approuvées

![Illustration : une équipe travaille avec plusieurs agents autour de règles communes, protégée par des garde-fous, une personne valide à la relecture](/illustrations/team-guardrails.webp)

## Ce que ce chapitre couvre

- Chemin du pilote petite équipe au déploiement org
- Sécurité, conformité et risque d'extension (Plugin/MCP)
- Liens croisés vers d'autres sections du handbook

## Qui devrait lire

| Rôle | Commencer par |
|---|---|
| EM / lead | [Modèle de menace](/fr/guide/team-enterprise/security/threat-model/) · [Usage acceptable](/fr/guide/team-enterprise/governance/acceptable-use/) |
| Engineering plateforme | [Règles d'équipe](/fr/guide/customization/rules/team-rules/) · [Hooks](/fr/skills/hooks/hooks-overview/) |
| Sécurité | [Risque Plugin et MCP](/fr/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injection de prompt](/fr/guide/team-enterprise/security/prompt-injection/) |

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
| Sécurité | [Modèle de menace](/fr/guide/team-enterprise/security/threat-model/) · [Risque Plugin/MCP](/fr/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injection de prompt](/fr/guide/team-enterprise/security/prompt-injection/) |
| Gouvernance | [Politique d'usage acceptable](/fr/guide/team-enterprise/governance/acceptable-use/) |

La roadmap ajoutera adoption, administration, deployment-patterns, etc. — voir [plan du chapitre](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md) (doc de planification du dépôt).

## Relation avec la personnalisation

- Couche gérée org dans [priorité AGENTS.md](/fr/guide/customization/agents-md/scope-and-precedence/)
- [Politique de règles d'équipe](/fr/guide/customization/rules/team-rules/)

## Erreurs courantes

- Acheter des sièges sans formation et standards
- Présenter des restrictions locales assouplies du bac à sable comme le réglage par défaut de l’organisation
- Approuver tous les Plugins communautaires sans liste

## Liste de contrôle d'acceptation

- [ ] AUP écrite ou politique équivalente
- [ ] Processus d'approbation pour extensions à haut risque
- [ ] Contacts d'incident clairs (sécurité/plateforme)

## Idées reçues courantes

### 1. Utilisateur solo — besoin de ce chapitre maintenant ?

Pas nécessairement en détail dès maintenant.
Mais sachez : une fois que Codex devient un système utilisé par une équipe, les problèmes ne sont pas seulement « comment prompt ».

### 2. Pourquoi tant d'audit, gouvernance, politique ?

À l'échelle équipe, les frontières se brouillent avec le temps — c'est le risque.

### 3. Première passe conceptuelle — lire quoi ?

Commencer par :

- [Risque Plugin et MCP](/fr/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Politique d'usage acceptable](/fr/guide/team-enterprise/governance/acceptable-use/)

Si votre priorité est la prise en main individuelle, revenez à ce chapitre lorsque vous aborderez le déploiement en équipe, la gestion des permissions ou les risques.
