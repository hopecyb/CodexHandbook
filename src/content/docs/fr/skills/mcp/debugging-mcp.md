---
title: Déboguer les connexions MCP
description: Dépannage systématique quand les serveurs MCP ne démarrent pas, les outils expirent ou les résultats semblent incorrects.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP amène des systèmes externes dans Codex. Les échecs se regroupent souvent en trois catégories : **processus ne démarre pas**, **auth incorrecte**, **logique d'outil ou timeout**. Cette page donne un ordre de vérification pour ne pas deviner la config.

## Contenu

- Reproduction minimale pour les problèmes MCP
- Liste de contrôle journaux et configuration
- Quand suspecter l'implémentation du serveur vs Codex

Associé : [Vue d'ensemble MCP](/skills/mcp/mcp-overview/) · [Connecter un serveur MCP](/skills/mcp/connect-an-mcp-server/)

## Flux de triage

```text
1. Le serveur peut démarrer seul dans un terminal ?
2. Syntaxe JSON/TOML et chemin de config corrects ?
3. Les variables d'environnement sont visibles dans le processus MCP ?
4. La session Codex a été redémarrée pour charger la nouvelle config ?
5. Un seul appel d'outil expire ou a de mauvais paramètres ?
```

## Échecs de démarrage

| Vérification | Notes |
|---|---|
| Chemin de commande | `npx`, `uvx`, chemin absolu sur PATH ? |
| Versions des dépendances | Versions Node/Python conformes aux exigences du serveur MCP ? |
| Exécution manuelle | Exécuter commande + args de la config dans le shell |
| Transport | stdio vs HTTP/SSE conforme aux docs ? |

## Échecs d'authentification

- Clé API injectée via variable d'environnement (pas dans le dépôt)
- MCP OAuth peut nécessiter ré-autorisation à expiration
- Proxy d'entreprise bloquant sortant MCP

Index des variables d'environnement : [variables d'environnement](/guide/reference/environment-variables/)

## Appels d'outils anormaux

| Symptôme | Cause possible |
|---|---|
| Outil introuvable | Version serveur vs schéma client incompatible |
| Timeout | API externe lente ; augmenter timeout ou optimiser requête |
| Résultat vide | Noms de paramètres incorrects ; vérifier journaux serveur MCP |
| Texte illisible | Encodage non UTF-8 |

Dans le prompt, demander à l'Agent d'**afficher la structure de retour de l'outil** (masquée) pour le débogage.

## Habitudes de débogage sûres

- Utiliser des clés API de **tenant de test**, pas production
- Ne pas coller des Token complets dans les journaux de chat
- Si MCP est suspect, déconnecter immédiatement et rotation des clés

Index d'erreurs : [référence d'erreurs](/guide/reference/error-reference/)

## Erreurs courantes

- Config modifiée mais session Codex non redémarrée
- Config MCP incohérente entre IDE et CLI
- Niveau de log serveur MCP toujours debug ; captures soumises avec secrets

## Liste de validation

- [ ] Peut démarrer le serveur MCP indépendamment dans le terminal
- [ ] Au moins un appel d'outil en lecture seule a réussi
- [ ] Modèle de config MCP standard d'équipe documenté

## Sources de référence

- Spécification Model Context Protocol et guide de débogage
- KimYx0207 CX-07
- stormzhang `21-mcp.md`

---

**Statut :** obsolète  
**Produits concernés :** CLI / IDE / App  
**Base de vérification :** Le dépannage dépend de comment les clients Codex actuels chargent, affichent et invoquent les outils MCP — risque de changement élevé ; réécriture nécessaire selon docs actuelles.  
**Dernière vérification :** 2026-07-26
