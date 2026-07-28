---
title: Connecter un serveur MCP
description: Configurer, authentifier, vérifier et dépanner — connecter votre premier outil MCP en sécurité.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cette page porte sur la connexion et la vérification ; les détails de protocole et le développement de serveurs sont dans la documentation officielle MCP.

## Avant de commencer

- [ ] Comprendre les limites de sécurité dans [Vue d'ensemble MCP](/skills/mcp/mcp-overview/)
- [ ] Avoir un compte de test en lecture seule ou sandbox
- [ ] Confirmer que la version actuelle du client Codex supporte MCP (docs officielles)

## Flux recommandé

### 1. Choisir le type de serveur

| Type | Notes | Risque |
|---|---|---|
| Serveur stdio local | Processus sur votre machine | Moyen : permissions du processus = votre utilisateur |
| HTTP/SSE distant | Service hébergé | Moyen–élevé : TLS, rotation de Token requis |

Pour la première connexion, commencez par un **exemple officiel ou serveur local en lecture seule**.

### 2. Ajouter la configuration

L'emplacement de config varie selon CLI/App ; couramment bloc `mcp` au niveau utilisateur ou projet. Structure illustrative (**noms de champs selon docs officielles**) :

```json
{
  "mcpServers": {
    "example-readonly": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_TOKEN": "Lire depuis variable d'environnement — ne pas coder en dur dans le dépôt"
      }
    }
  }
}
```

Principes :

- Injecter les secrets via variables d'environnement ou gestionnaire de secrets
- Les changements de config passent par revue Git (sauf secrets)

### 3. Redémarrer ou recharger le client

Après changement de config MCP, redémarrer généralement la session Codex pour rafraîchir la liste des serveurs.

### 4. Vérifier que les outils sont visibles

Dans une tâche, demander explicitement :

```text
Lister les outils MCP actuellement disponibles (noms et descriptions en une ligne seulement).
Puis appeler un outil de test en lecture seule et afficher le résultat.
Ne pas effectuer des opérations d'écriture.
```

### 5. Essayer par petits pas

Choisir une tâche réelle mais à faible risque, ex. : « Utiliser MCP pour récupérer uniquement le titre du ticket #123 ; ne pas changer le statut. »

## Modes d'authentification

| Mode | Convient à |
|---|---|
| API Key / PAT | Dev personnel ; rotation régulière |
| OAuth | Auth au niveau utilisateur ; bon pour SaaS |
| Local sans auth | Mock local seulement ; ne pas exposer sur le réseau |

En cas d'échec vérifier : Token expiré, variable d'environnement non passée au processus, proxy d'entreprise bloquant.

## Liste de dépannage

| Symptôme | Cause possible |
|---|---|
| Liste d'outils vide | Chemin de config incorrect, processus n'a pas démarré |
| Timeout d'appel | Réseau, VPN, serveur down |
| Permission denied | Portée du Token insuffisante |
| Le modèle n'appelle jamais les outils | Tâche ne demandait pas ; ou description d'outil peu claire |

## Travailler avec l'approbation

Le premier appel à un outil inconnu peut demander confirmation — c'est attendu. Ne encouragez pas « toujours autoriser toutes les écritures MCP » dans la politique d'équipe.

## Sources de référence

- Documentation de configuration MCP OpenAI Codex
- Exemples de serveurs modelcontextprotocol.io

---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE  
**Base de vérification :** Décrit directement la configuration actuelle de serveur MCP, rechargement et étapes de vérification — très sensible à la version et au client ; pas encore adapté à `verified`.  
**Dernière vérification :** 2026-07-26
