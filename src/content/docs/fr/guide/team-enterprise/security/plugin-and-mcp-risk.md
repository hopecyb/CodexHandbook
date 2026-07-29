---
title: "Risque Plugin et MCP"
description: Ce que les extensions peuvent accéder, comment les équipes approuvent et surveillent — vue unifiée du risque pour Skills, Plugins et MCP.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Les **Plugins** et **serveurs MCP** connectent Codex aux systèmes externes : tickets, bases de données, APIs internes. Plus de capacité signifie une surface de [modèle de menace](/guide/team-enterprise/security/threat-model/) plus large pour exfiltration et emprise excessive. Lire avec [Vue d'ensemble MCP](/skills/mcp/mcp-overview/) et [Vue d'ensemble Plugins](/skills/plugins/plugins-overview/).

Vous n'avez pas besoin de définitions parfaites le premier jour. Point central : connecter Codex à l'extérieur augmente capacité et risque.

Que ce soit appelé Plugin ou MCP, demandez :

- Ce qu'il peut lire
- Ce qu'il peut écrire
- Qui approuve
- Comment les incidents sont tracés

## Ce que cette page couvre

- Catégories de risque d'extension
- Listes d'approbation et pin de version
- Isolation pendant debug et incidents

## Catégories de risque

| Type | Exemple | Contrôle |
|---|---|---|
| Lecture données | MCP lit DB client | Compte lecture seule, permissions row-level |
| Écriture données | Auto-fermeture tickets, changement config | Approbation humaine, double confirmation |
| Réseau | Outbound arbitraire | Liste d'autorisation egress |
| Identifiants | Token OAuth sur disque | Gestion des secrets, tokens à courte durée |
| Supply chain | Tampering mise à jour serveur tiers | Pin version, verrou hash |

## Flux d'approbation équipe (recommandé)

```text
Demande (objectif, classe de données, permissions) → revue sécurité/architecture
    → entrer dans dépôt « liste approuvée » ou répertoire interne
    → pin version + propriétaire
    → re-revue trimestrielle ou sur upgrade majeur
```

MCP personnel expérimental **ne devrait pas** partager les tokens de dépôt production.

## Pratiques minimales

1. **Deny par défaut** les installs MCP distantes non listées
2. **MCP local** peut encore lire tout le disque — utilisateur OS dédié ou conteneur
3. **Logs** : nom d'outil et résumé de paramètres (rédigé) — voir [audit Hook](/skills/hooks/hooks-examples/)
4. **Skill vs MCP** : Skill décrit le flux, MCP exécute les appels externes — union des permissions ; appliquer la politique la plus stricte

## Erreurs courantes

- « Marketplace officiel » = « revu sécurité »
- Dev et prod partagent une app OAuth MCP
- `DEBUG=*` en debug dump les tokens dans les logs CI

## Idées reçues courantes

### 1. Plugin vs MCP flou — ça compte tôt ?

Pas beaucoup au début.

Les deux connectent Codex aux systèmes externes — permissions et risque s'appliquent dans les deux cas.

### 2. Pourquoi « lecture seule d'abord » ?

Lecture seule signifie généralement :

- Pilote plus facile
- Plus facile de prouver la valeur
- Rayon d'explosion plus faible sur les erreurs

### 3. Installer et oublier ?

Même les fonctionnalités pratiques nécessitent :

- Quelles données elle accède
- Si elle écrit en retour
- Comment les identifiants sont gérés

Pour les extensions externes : permissions et frontières avant la force des fonctionnalités.

## Liste de contrôle d'acceptation

- [ ] Liste d'approbation écrite ou processus équivalent
- [ ] Chaque MCP production a propriétaire et classification des données
- [ ] Cohérent avec la politique [Sécurité Skill](/skills/security/)

## Sources de référence
- [Débogage MCP](/skills/mcp/debugging-mcp/)
---

**Statut :** vérifié  
**Produits concernés :** CLI / App / Cloud  
**Base de vérification :** La doc plugin du Help Center OpenAI accentue encore la capacité app/plugin contrainte par accès par rôle, contrôle d'actions, confirmation, frontières domaine/source et permissions des sources sous-jacentes ; mappé ici à une vue unifiée du risque Plugin/MCP avec lecture seule d'abord, pin de version, propriétaires et listes d'approbation.  
**Dernière vérification :** 2026-07-26
