---
title: Configuration CLI
description: Modèles, Bac à sable, Approbations et MCP — unifier le comportement Codex dans le terminal.
locale: fr
source_locale: zh-CN
source_revision: 48f3288
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

La configuration CLI définit le **modèle par défaut, le répertoire de travail, la rigueur des Approbations, les serveurs MCP**, et plus. Mêmes concepts que [Bases de configuration](/fr/guide/customization/configuration/config-basics/) ; cette page se concentre sur ce que les utilisateurs de terminal changent souvent.

## Où vit la config

| Couche | Rôle |
|---|---|
| Utilisateur | Valeurs par défaut personnelles sur tous les projets |
| Projet | Politique d'équipe partagée (revue avant commit) |
| Variables d'environnement | Secrets et bascules CI |

**Chemins et noms de fichiers** changent avec les versions CLI — voir [docs officielles](https://developers.openai.com/codex). Souvent un `config.toml` sous le répertoire de config utilisateur.

## Paramètres courants

### Modèle par défaut et raisonnement

Affecte vitesse, coût et succès sur les Tâches difficiles. Le scripting doit **épingler un modèle** pour des logs comparables.

### Bac à sable et réseau

| Intention | Notes |
|---|---|
| Strict | Dépôts non fiables |
| Standard | Développement quotidien |
| Assoupli | Machines personnelles de confiance uniquement, selon politique d'entreprise |

Concepts : [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/)

### Politique d'Approbation

La CLI peut demander avant shell, écriture disque ou réseau. Les équipes devraient documenter les auto-Approbations attendues dans `AGENTS.md` — efficaces seulement si alignées avec le comportement produit.

### Liste des serveurs MCP

Partagée avec [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/) ; redémarrez les sessions après les changements.

## Aligner projet et CLI

Évitez « ça marche dans l'App, échoue en CI » :

1. Documentez la version CLI minimale dans le README
2. Gardez seulement les clés **convenues par l'équipe** dans la config projet
3. Ne commitez jamais de secrets

## Dépannage

| Symptôme | Vérifier |
|---|---|
| Config ignorée | Mauvaise couche ; redémarrer la session |
| MCP non chargé | Syntaxe JSON/TOML, chemins |
| Trop d'Approbations | Mode Bac à sable et listes d'autorisation |

Plus : [Dépannage CLI](/fr/guide/cli/troubleshooting/)

---

**Statut :** revue  
**Produits concernés :** CLI  
**Dernière vérification :** 2026-07-25
