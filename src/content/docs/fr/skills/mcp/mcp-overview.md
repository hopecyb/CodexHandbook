---
title: Vue d'ensemble MCP
description: Model Context Protocol — connecter Codex en sécurité à des outils et sources de données externes.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP est une voie standard pour que Codex se connecte à des outils et sources de données externes.

Si vous voulez que Codex interroge Jira, lise une base de connaissances, accède à des API internes ou opère un outil contrôlé, il faut un mécanisme pour **comment connecter, ce qui peut être appelé et comment les permissions sont gérées**. **MCP (Model Context Protocol)** répond à cela.

## Contenu

- Quel problème MCP résout : Codex ne peut pas atteindre les vrais systèmes seul
- Partage des responsabilités avec Skill et Plugin
- Pourquoi MCP doit faire partie de la gouvernance de sécurité

## Ce que ce n'est pas

MCP n'est pas :

- Coller des mots de passe de compte directement à Codex
- Laisser le modèle se connecter comme il veut
- Rendre implicitement fiables tous les services tiers

C'est un chemin de câblage normalisé pour que connecter des systèmes externes soit plus contrôlable et auditable.

## Concepts clés

```text
Codex  ←→  client MCP  ←→  serveur MCP  ←→  système externe
```

| Composant | Rôle |
|---|---|
| Serveur MCP | Expose un ensemble d'outils (ex. `search_issues`, `get_user`) |
| Configuration | Indique à Codex comment démarrer/connecter au serveur |
| Appels d'outils | Le modèle choisit des outils dans une tâche ; vous approuvez souvent |

MCP ne fournit **pas** la logique métier. Votre serveur implémente les règles lecture/écriture ; Codex choisit quel outil utiliser dans la tâche.

## Où MCP se situe

Le Skill ressemble plus à un « manuel d'opérateur » ; MCP gère les « interfaces d'outils ».

- Le Skill explique les étapes
- MCP remet certains outils externes à Codex

Ils apparaissent souvent ensemble :  
Le Skill définit le flux ; une étape du flux appelle un outil MCP.

## Relation avec Skill et Plugin

| | MCP | Skill | Plugin |
|---|---|---|---|
| Nature | Protocole d'outils | Instructions de workflow | Paquet de distribution |
| Contenu typique | Wrappers API | Étapes et standards | Skill + MCP + connecteurs d'app |
| Mainteneur | Vous ou serveur tiers | Vous ou équipe | Éditeur |

Combinaison courante : **le Skill définit le flux**, une étape **appelle des outils MCP** pour récupérer des listes de tickets.

## Quand envisager MCP

Si la tâche ne nécessite que lecture/écriture dans le dépôt courant, vous n'avez généralement pas besoin de MCP.  
Si elle doit toucher de vrais systèmes **hors** du dépôt, commencez à évaluer MCP, API ou autres intégrations contrôlées.

## Cas d'usage

| Convient à MCP | Peu adapté à MCP |
|---|---|
| Interroger tickets Linear/Jira | Changements de code purement dans le dépôt |
| Base de docs/connaissances en lecture seule | Simple `curl` sans besoin de réutilisation |
| Outils internes contrôlés | Écritures DB production à haut privilège non auditées |

## Idées reçues courantes

### 1. MCP signifie que Codex peut tout faire

Il ne peut faire que ce que le serveur MCP expose et ce que ces outils permettent.

### 2. MCP est technique seulement, pas sécurité

Une fois que MCP touche de vrais systèmes, c'est aussi :

- Permissions
- Exposition de données
- Audit
- Chaîne d'approvisionnement

### 3. Avec MCP, plus besoin de Skill ou docs

Encore nécessaire. MCP résout « peut appeler des outils », pas « quel flux suivre ou quand ne pas appeler ».

## Limites de sécurité

- **Moindre privilège** : lecture seule, projets scoped, IP scoped
- **Identifiants** : OAuth ou Token à courte durée — pas dans le prompt, pas dans Git
- **Approbation humaine** : écritures, suppressions en masse, messages sortants doivent être revus
- **Chaîne d'approvisionnement** : connecter seulement des serveurs fiables ; revoir la source MCP tiers

Entreprise : roadmap `11-team-enterprise/security/plugin-and-mcp-risk`.

## Ordre d'intégration

1. Lire la doc MCP officielle ; confirmer le format de config client actuel
2. Commencer par un serveur d'exemple **en lecture seule** officiel ou communautaire
3. Vérifier un seul appel d'outil dans un projet de test
4. Connecter les vrais systèmes avec un runbook

Étapes : [Connecter un serveur MCP](/skills/mcp/connect-an-mcp-server/)

## Commencer en lecture seule

Dès que MCP touche un système réel, il entre dans la chaîne permissions, données et audit. Le chemin le plus sûr : données de test, validation d'équipe en lecture seule, petites écritures réversibles avec approbation humaine, puis gouvernance avec rôles, audit et auth révocable.

Si la valeur du serveur vient d'écritures privilégiées, séparez d'abord outils de lecture et outils d'écriture.

## Checklist avant connexion

- Quels outils le serveur expose-t-il ? Y a-t-il des écritures ?
- Où sont les identifiants, et peut-on les révoquer par personne/projet/environnement ?
- Les logs peuvent-ils contenir données client, documents internes ou fragments secrets ?
- Un appel d'outil a-t-il été testé en sandbox ?
- Les écritures ont-elles confirmation humaine, rollback et audit ?

## Erreurs courantes

- Serveur MCP trop permissif « pour la commodité »
- Traiter MCP comme remplacement du Skill (le flux reste dans Skill ou `AGENTS.md`)
- Changements de config MCP hors revue de code

## Sources de référence
- [Model Context Protocol](https://modelcontextprotocol.io/)
- Documentation MCP OpenAI Codex
---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE  
**Base de vérification :** Contenu conceptuel mélangé avec jugements sur « format de config client » et « comportement d'approbation » ; au 2026-07-26 la base officielle publique est insuffisante pour vérification complète.  
**Dernière vérification :** 2026-07-26
