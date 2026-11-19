---
title: Connecter un serveur MCP
description: Configurer, authentifier et vérifier un premier serveur MCP avec la CLI ou config.toml.
legacyVerification:
  status: "verified"
  products: "App de bureau ChatGPT / Codex CLI / IDE"
  checkedAt: "2026-08-25"
locale: fr
source_locale: zh-CN
source_revision: '67b417d'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Ce chapitre suit les interfaces officielles actuelles pour réaliser un premier cycle complet : **ajouter le serveur → consulter sa configuration → confirmer les outils dans une session → faire un appel en lecture seule**.

![Illustration : un assistant branche un connecteur sur un serveur, l'autorisation allume le voyant vert, puis une requête de test part par le câble vers une base de données et revient avec un résultat](/illustrations/mcp-connect.webp)

## Avant de commencer

- Lisez la [présentation de MCP](/fr/skills/mcp/mcp-overview/).
- Vérifiez que `codex mcp --help` fonctionne sur votre machine.
- Pour la première connexion, choisissez une source fiable et un usage en lecture seule.
- N’inscrivez jamais un vrai token dans l’historique des commandes, un prompt ou le dépôt.

## Méthode A : ajouter un serveur STDIO avec la CLI

L’exemple officiel utilise le serveur de documentation Context7 :

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

Cette commande inscrit le serveur dans la configuration de Codex. Après `--` figure la commande qui démarre le serveur STDIO. Le premier lancement peut télécharger un paquet npm : vérifiez donc au préalable son nom et sa provenance.

## Méthode B : modifier directement config.toml

La configuration de l’utilisateur se trouve par défaut dans `~/.codex/config.toml`. Un projet de confiance peut aussi utiliser `.codex/config.toml` au niveau du projet.

Exemple STDIO :

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

Exemple de serveur distant en Streamable HTTP :

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`, l’adresse et les noms d’outils ne sont que des exemples de structure. Remplacez-les par les valeurs réelles indiquées dans la documentation de votre serveur. `bearer_token_env_var` contient le nom d’une variable d’environnement, pas le token lui-même.

## Serveurs OAuth

Après avoir configuré un serveur compatible avec OAuth, exécutez :

```bash
codex mcp login <server-name>
```

Les listes MCP de l’App de bureau et de l’IDE signalent également les serveurs qui nécessitent OAuth et proposent l’action Authenticate.

## Consulter la configuration dans trois clients

| Interface | Entrée de configuration ou de consultation |
|---|---|
| App de bureau ChatGPT | Settings → MCP servers ; Restart après enregistrement ; saisir `/mcp` pour voir la connexion |
| Codex CLI | `codex mcp add/list/login` ; saisir `/mcp` dans la TUI |
| Extension IDE | Menu en forme d’engrenage → MCP servers ; Restart extension après enregistrement |

Ces trois interfaces partagent la configuration sur un même hôte Codex : il n’est pas nécessaire d’entretenir trois fichiers séparés. ChatGPT Web ne lit pas la configuration locale.

## Prompt de vérification

```text
Utilise uniquement le serveur MCP actuellement connecté pour ces vérifications :
1. Liste les noms des outils disponibles pour rechercher dans la documentation
   de développement ;
2. Choisis un outil en lecture seule et recherche les bases du test runner Node.js ;
3. Indique quel outil a réellement été appelé ;
4. N’effectue aucune écriture et ne connecte pas d’autre service.
```

Preuves attendues : le serveur apparaît dans `codex mcp list` ou `/mcp`, un outil en lecture seule renvoie des données structurées, et aucune permission sans rapport n’est demandée.

## Options de permission minimale

- `enabled_tools` : autorise uniquement les outils énumérés.
- `disabled_tools` : exclut encore des outils après la liste d’autorisation.
- `enabled = false` : conserve la configuration mais désactive temporairement le serveur.
- `required = true` : fait échouer le démarrage si un serveur indispensable ne s’initialise pas.

## En cas d’échec

Ne modifiez pas plusieurs champs en devinant. Notez le message d’erreur exact, puis suivez [Déboguer une connexion MCP](/fr/skills/mcp/debugging-mcp/) pour vérifier successivement la lecture de la configuration, le processus ou le réseau, l’authentification et un outil précis.

## Source officielle

- [OpenAI : connecter Codex à un serveur MCP](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)
