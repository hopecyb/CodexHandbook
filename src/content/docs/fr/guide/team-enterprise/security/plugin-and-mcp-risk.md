---
title: Risque Plugin et MCP
description: Les ressources auxquelles les extensions peuvent accéder, comment les équipes approuvent et surveillent — vue unifiée du risque pour Skills, Plugins et MCP.
locale: fr
source_locale: zh-CN
source_revision: "bf027ad"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 20
legacyVerification:
  status: verified
  products: CLI / App / Cloud
  basis: La doc plugin du Help Center OpenAI accentue encore la capacité app/plugin contrainte par accès par rôle, contrôle d'actions, confirmation, frontières domaine/source et permissions des sources sous-jacentes ; mappé ici à une vue unifiée du risque Plugin/MCP avec lecture seule d'abord, versions fixes, propriétaires et listes d'approbation.
  checkedAt: '2026-07-26'
---
Les **Plugins** et **serveurs MCP** connectent Codex aux systèmes externes : tickets, bases de données, APIs internes. Plus de capacité signifie une surface de [modèle de menace](/fr/guide/team-enterprise/security/threat-model/) plus large pour exfiltration et actions non autorisées. Lire avec [Vue d'ensemble MCP](/fr/skills/mcp/mcp-overview/) et [Vue d'ensemble Plugins](/fr/skills/plugins/plugins-overview/).

Vous n'avez pas besoin de définitions parfaites le premier jour. Point central : connecter Codex à l'extérieur augmente capacité et risque.

Que ce soit appelé Plugin ou MCP, demandez :

- Ce qu'il peut lire
- Ce qu'il peut écrire
- Qui approuve
- Comment les incidents sont tracés

## Ce que cette page couvre

- Catégories de risque d'extension
- Listes d’approbation et versions fixes
- Isolation pendant le débogage et les incidents

## Catégories de risque

| Type | Exemple | Contrôle |
|---|---|---|
| Lecture données | MCP lit DB client | Compte lecture seule, permissions au niveau des lignes |
| Écriture données | Auto-fermeture tickets, changement config | Approbation humaine, double confirmation |
| Réseau | Connexions sortantes arbitraires | Liste des destinations réseau autorisées |
| Identifiants | Token OAuth sur disque | Gestion des secrets, tokens à courte durée |
| Chaîne d’approvisionnement | Mise à jour malveillante d’un serveur tiers | Version fixe, verrouillage par hash |

## Flux d'approbation équipe (recommandé)

```text
Demande (objectif, classe de données, permissions) → revue sécurité/architecture
    → entrer dans dépôt « liste approuvée » ou répertoire interne
    → version fixe + responsable
    → nouvelle revue chaque trimestre ou à chaque mise à niveau majeure
```

MCP personnel expérimental **ne devrait pas** partager les tokens de dépôt production.

## Pratiques minimales

1. **Refuser par défaut** l’installation de serveurs MCP distants absents de la liste
2. **MCP local** peut encore lire tout le disque — utilisateur OS dédié ou conteneur
3. **Logs** : nom d'outil et résumé des paramètres expurgé des informations sensibles — voir [audit Hook](/fr/skills/hooks/hooks-examples/)
4. **Skill vs MCP** : Skill décrit le flux, MCP exécute les appels externes — union des permissions ; appliquer la politique la plus stricte

## Erreurs courantes

- « Marketplace officiel » = « revu sécurité »
- Dev et prod partagent une app OAuth MCP
- Activer `DEBUG=*` pendant le débogage et exposer les tokens dans les journaux CI

## Idées reçues courantes

### 1. Plugin vs MCP flou — ça compte tôt ?

Pas beaucoup au début.

Les deux connectent Codex aux systèmes externes — permissions et risque s'appliquent dans les deux cas.

### 2. Pourquoi « lecture seule d'abord » ?

Lecture seule signifie généralement :

- Pilote plus facile
- Plus facile de prouver la valeur
- Conséquences moins graves en cas d’erreur

### 3. Installer et oublier ?

Même les fonctionnalités pratiques nécessitent :

- À quelles données elles accèdent
- Si elles écrivent dans le système externe
- Comment les identifiants sont gérés

Pour les extensions externes : permissions et frontières avant la force des fonctionnalités.

## Liste de contrôle d'acceptation

- [ ] Liste d'approbation écrite ou processus équivalent
- [ ] Chaque MCP production a propriétaire et classification des données
- [ ] Cohérent avec la politique [Sécurité Skill](/fr/skills/security/)

## Sources de référence
- [Débogage MCP](/fr/skills/mcp/debugging-mcp/)
