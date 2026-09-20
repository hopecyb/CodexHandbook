---
title: Vue d'ensemble de MCP
description: Comprendre le client, le serveur, les outils, l'authentification et les limites de sécurité de MCP.
locale: fr
source_locale: zh-CN
source_revision: 37e55d9
translation_status: draft
translated_at: 2026-09-20
---

MCP transforme le souhait d'un modèle d'utiliser une capacité externe en appel d'outil structuré. Il convient pour accéder à des documents tiers, à un navigateur, à Figma, à un système de tickets ou à des services internes.

## Chaîne d'appel

```text
Codex dans une tâche
  -> client MCP (fourni par le Codex host)
  -> serveur MCP (processus local ou service distant)
  -> système externe (documents, conception, tickets, API interne)
  -> résultat structuré renvoyé à la tâche
```

| Composant | Ce dont il est responsable | Ce dont il n'est pas responsable |
|---|---|---|
| Codex host | Lire la configuration, connecter les serveurs et proposer les outils à l'Agent | Définir les permissions métier du serveur |
| Serveur MCP | Définir les outils, l'authentification, les arguments et les résultats structurés | Garantir automatiquement la sécurité des outils |
| Skill | Préciser quand et dans quel ordre utiliser les outils | Établir une connexion réseau |
| Plugin | Regrouper et distribuer Skills, Connectors, MCP et autres capacités | Constituer un autre protocole d'outils |

## Transports de serveur actuellement pris en charge

### STDIO

Codex lance un processus local et communique avec lui par l'entrée et la sortie standard. Cette méthode convient aux outils de développement locaux et aux services qui ne tournent que sur la machine actuelle.

Point de vigilance : ce processus hérite de l'environnement d'exécution local. Il faut examiner la commande, la provenance des dépendances et les variables d'environnement qui lui sont transmises.

### Streamable HTTP

Codex se connecte à une adresse distante. La documentation officielle actuelle confirme la prise en charge des Bearer tokens, d'OAuth et de l'authentification par session ChatGPT pour les serveurs de confiance fournis par OpenAI.

Point de vigilance : le service distant reçoit les arguments des outils. Vérifiez TLS, l'identité, les journaux, la conservation des données et les permissions des outils.

## Associer MCP, Skill et Plugin

Prenons la vérification hebdomadaire des tickets prioritaires :

| Couche | Contenu |
|---|---|
| MCP | Fournit des outils tels que `search_issues` et `get_issue` |
| Skill | Fixe les filtres, les preuves requises et le format du rapport |
| Plugin | Distribue à l'équipe le Skill, le Connector et la définition MCP |
| Scheduled task | Exécute à heure fixe la tâche déjà vérifiée |

Ces mécanismes ont des responsabilités distinctes : ils ne forment pas une échelle de progression. Consultez la [carte des capacités d'extension](/fr/skills/capability-map/) pour la vue d'ensemble.

## Quand connecter MCP vaut la peine

| Utile | Pas encore nécessaire |
|---|---|
| Consulter plusieurs fois le même système externe | Consulter une seule page Web publique |
| Avoir besoin d'arguments et de résultats d'outils structurés | Les opérations sur les fichiers du dépôt suffisent |
| Avoir besoin d'OAuth ou d'un contrôle fin des outils | Seules des opérations d'écriture très privilégiées existent, sans environnement de test |
| Permettre à l'équipe de réutiliser une connexion commune | Impossible de vérifier la provenance du serveur |

## Niveaux de sécurité

1. **Essai en lecture seule** : documents publics ou espace de test ; seuls les outils de consultation sont activés.
2. **Validation en équipe** : limiter projet, rôles et liste d'outils autorisés ; consigner les échecs et les durées.
3. **Écritures limitées** : petites modifications réversibles avec approbation humaine.
4. **Exploitation gouvernée** : autorisations révocables, configuration vérifiable, journaux expurgés et environnements isolés.

N'inscrivez pas de token dans un prompt, dans Git ou dans un en-tête HTTP statique. Préférez OAuth, `bearer_token_env_var` ou la transmission d'une variable d'environnement.

## Liste de contrôle avant connexion

- [ ] La provenance, la version et la commande de démarrage du serveur peuvent être examinées.
- [ ] Les outils de lecture et d'écriture sont distingués dans la liste.
- [ ] Un espace de test ou un compte aux permissions minimales est utilisé.
- [ ] Les arguments et résultats susceptibles d'apparaître dans les journaux distants sont identifiés.
- [ ] Les écritures disposent de procédures d'approbation, de retour arrière et d'audit.
- [ ] L'équipe sait désactiver le serveur et révoquer les autorisations.

## Étape suivante

Passez à [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/) : commencez par un serveur en lecture seule, puis vérifiez la connexion avec `codex mcp list` et `/mcp`.

## Sources officielles

- [OpenAI : Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [OpenAI : Plugins](https://learn.chatgpt.com/docs/plugins)
