---
legacyVerification:
  status: "verified"
  products: "Application de bureau ChatGPT / Codex CLI / IDE ; ChatGPT Web utilise les outils MCP distants par l’intermédiaire d’un Plugin"
  basis: "Prise en charge des clients, configuration partagée, modes de transport et commandes CLI."
  checkedAt: "2026-08-25"
title: MCP
description: Relier ChatGPT et Codex à des outils et du contexte tiers de manière contrôlée.
locale: fr
source_locale: zh-CN
source_revision: 8d9ec38
translation_status: draft
translated_at: 2026-09-20
---

MCP (Model Context Protocol) répond à la question « comment un Agent accède-t-il aux outils et aux données hors du dépôt ? », pas à la question « comment définir un processus de travail ? ».

## Pour qui ?

- Les développeurs qui veulent permettre à Codex de consulter documents, maquettes, tickets ou outils internes.
- Les équipes qui doivent configurer de manière cohérente les outils externes, OAuth et des permissions minimales.
- Les personnes qui enquêtent sur un serveur configuré dont les outils n’apparaissent pas ou dont les appels échouent.

Si la tâche se limite aux fichiers du dépôt actuel, utilisez d’abord les capacités intégrées de lecture de fichiers et de terminal. Ajoutez MCP seulement si des données ou actions tierces sont réellement nécessaires.

## Ordre de lecture

1. [Présentation de MCP](/fr/skills/mcp/mcp-overview/) : distinguer les rôles de MCP, Skill et Plugin.
2. [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/) : connecter un premier serveur avec le CLI ou `config.toml`.
3. [Déboguer une connexion MCP](/fr/skills/mcp/debugging-mcp/) : vérifier successivement configuration, démarrage, authentification et outils.

## Limites actuelles de prise en charge

- L’application de bureau ChatGPT, Codex CLI et l’extension IDE partagent la configuration MCP sur un même hôte Codex.
- Les clients Codex locaux prennent en charge les serveurs STDIO et Streamable HTTP.
- ChatGPT Web ne lit pas le fichier local `~/.codex/config.toml` ; il utilise des outils MCP distants fournis par les Plugins installés.

## Trois points à retenir

1. MCP expose des outils, mais ne définit pas à votre place un processus fiable ; décrivez les étapes stables dans un Skill ou `AGENTS.md`.
2. Les capacités d’un serveur dépendent des outils qu’il expose et de la portée des identifiants utilisés.
3. Pour une première connexion, commencez en lecture seule, avec un environnement de test et peu d’outils ; n’utilisez pas un jeton d’administration de production.

## Sources officielles

- [OpenAI : Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Spécification du Model Context Protocol](https://modelcontextprotocol.io/)
