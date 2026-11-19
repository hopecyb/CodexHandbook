---
title: Déboguer une connexion MCP
description: "Localiser une panne MCP parmi quatre niveaux : configuration, transport, authentification et outils."
locale: fr
source_locale: zh-CN
source_revision: 'de0bea5'
translation_status: reviewed
translated_at: 2026-09-20
legacyVerification:
  status: verified
  products: ChatGPT App de bureau / Codex CLI / IDE
  checkedAt: '2026-08-25'
reviewed_at: '2026-10-26'
---

On résume souvent une panne MCP par « l'outil ne fonctionne pas ». Il est plus efficace de déterminer d'abord à quel niveau l'échec se produit, puis de ne modifier qu'une seule variable à la fois.

![Illustration : une coupe transparente en quatre couches — configuration, transport, authentification, outils — où un assistant inspecte chaque couche à la lampe pendant qu'un tuyau cassé est réparé](/illustrations/mcp-debugging.webp)

## Conserver d'abord quatre éléments de preuve

```bash
codex mcp list
codex mcp --help
node --version   # uniquement si le serveur STDIO utilise Node.js
python3 --version # uniquement si le serveur STDIO utilise Python
```

Notez également le nom du serveur, le transport utilisé (STDIO ou Streamable HTTP), le message d'erreur exact et l'interface où le problème survient (App de bureau, CLI ou IDE). Ne consignez jamais le token complet.

## Diagnostic en quatre niveaux

| Niveau | Symptôme courant | Première vérification |
|---|---|---|
| Configuration | Serveur absent de la liste | Chemin du fichier, syntaxe TOML, nom du serveur, `enabled` |
| Démarrage ou connexion | Délai d'initialisation dépassé | Commande STDIO et PATH, ou URL HTTP, TLS et proxy |
| Authentification | Erreur 401/403 ou demande de connexion | État OAuth, variable d'environnement du token, scope |
| Outil | Serveur en ligne, mais appel en échec | Nom de l'outil, arguments, liste d'autorisation, délai d'expiration |

## 1. Vérifier que la configuration est bien chargée

- Le fichier utilisateur est `~/.codex/config.toml`.
- Le fichier du projet est `.codex/config.toml` ; il n'est chargé que pour un projet de confiance.
- L'App de bureau, la CLI et l'IDE partagent la configuration sur un même Codex host. Évitez trois copies qui divergent.
- Consultez l'état réel avec `codex mcp list` ou `/mcp` dans la session. L'existence du fichier ne prouve pas que la connexion fonctionne.

## 2. Le serveur STDIO ne démarre pas

Vérifiez que `command` est disponible dans PATH, que la version du runtime répond aux exigences du serveur, que `cwd` existe et que la provenance des dépendances est fiable.

Exécuter directement la commande de démarrage montre seulement que le programme se lance. Un serveur MCP peut sembler ne jamais se terminer parce qu'il attend une entrée du protocole : cela peut être normal et ne constitue pas un test complet d'appel d'outil.

N'augmentez `startup_timeout_sec` que si l'initialisation est réellement lente. Sa valeur par défaut est de 10 secondes ; une valeur arbitrairement élevée masque parfois une mauvaise commande.

## 3. La connexion Streamable HTTP échoue

Vérifiez dans cet ordre :

1. L'URL et le certificat TLS
2. Le proxy d'entreprise ou le VPN
3. L'existence de la variable d'environnement désignée par `bearer_token_env_var`
4. La nécessité éventuelle de relancer `codex mcp login <server-name>` pour OAuth
5. La réception de la demande d'initialisation dans les journaux du serveur

Ne remplacez pas le token par une valeur statique dans `http_headers` sous prétexte de « dépanner temporairement ». Il risque de finir dans le fichier de configuration ou une capture d'écran.

## 4. Le serveur est en ligne, mais l'outil reste inutilisable

| Symptôme | Vérification |
|---|---|
| Aucun outil n'apparaît | `enabled_tools` / `disabled_tools` et liste renvoyée par le serveur |
| Tool not found | Version du serveur, renommage de l'outil, ancienne liste conservée par la session |
| Échec de validation des arguments | Comparer avec le schema de l'outil au lieu de deviner les champs depuis un ancien prompt |
| Appel expiré | Réduire la requête, puis vérifier `tool_timeout_sec` ; valeur par défaut : 60 secondes |
| Résultat vide | Vérifier dans le système source, avec le même compte, le périmètre des données et les filtres |

## Prompt de reproduction minimale

```text
Vérifie uniquement le serveur MCP <server-name> :
1. Indique les noms des outils actuellement visibles.
2. Appelle <readonly-tool> avec seulement <minimal-arguments>.
3. Conserve le type d'erreur et le message du serveur tels quels, mais masque les identifiants.
4. N'appelle aucun autre serveur et n'effectue aucune écriture.
```

## Critères de résolution

- [ ] L'état dans `codex mcp list` correspond aux attentes.
- [ ] Un outil en lecture seule réussit avec un minimum d'arguments.
- [ ] La cause racine est située à un niveau précis, et ne se résume pas à « un redémarrage a réglé le problème ».
- [ ] Les tokens temporaires, journaux de débogage et permissions étendues ont été retirés.
- [ ] La configuration de l'équipe et les consignes de correction ont été mises à jour.

## Source officielle

- [OpenAI : Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
