---
title: "Référence d'erreurs"
description: Index d'apprentissage des erreurs courantes, codes de sortie et modes d'échec — pointe vers dépannage, pas support officiel.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beaucoup fixent une ligne en anglais et devinent. Classifier le problème d'abord fonctionne généralement mieux.

Décidez si cela ressemble à **auth, permissions, environnement, réseau ou logique de tâche**. Cette page résume messages fréquents et étapes suivantes — pas un dictionnaire complet d'erreurs ; comportement le plus récent = doc officielle et sortie client.

## Comment lire une erreur

1. Classe de mot-clé : auth, permissions, environnement, réseau, contexte
2. Étape : démarrage, installation, exécution, push, sortie
3. Sauter vers la page sujet correspondante

Souvent plus rapide que deviner.

Index global : [Dépannage](/guide/reference/troubleshooting/)

## Authentification et compte

| Message ou symptôme | Cause probable | Étape suivante |
|---|---|---|
| Authentication failed / 401 | Token expiré, non connecté | [Connexion et authentification](/guide/getting-started/sign-in-and-authentication/) |
| Politique organisation | Org a désactivé fonctionnalité ou modèle | Contacter admin ; [Compte et accès](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Trop fréquent ou quota | Retry plus tard ; vérifier usage du plan |

## Idées reçues courantes

### 1. Erreur longue ≠ problème plus dur

Le signal utile est souvent un court mot-clé dans une longue stack.

### 2. Exit non-zéro ≠ le modèle ne peut pas faire la tâche

Peut être permissions, réseau, format de sortie ou conditions d'échec de tâche.

### 3. 401 / 403 / 429 diffèrent

- `401` : problème d'authentification
- `403` : authentifié mais pas autorisé
- `429` : trop rapide — retry plus tard

### 4. La dernière ligne n'est pas toujours la cause racine

Les lignes précédentes peuvent montrer étape, fichier, commande ou raison sous-jacente.

## CLI et commandes

| Message ou symptôme | Cause probable | Étape suivante |
|---|---|---|
| command not found: codex | Non installé ou PATH | [Installer CLI](/guide/getting-started/install-cli/) |
| Config parse error | Syntaxe TOML/YAML | [Configuration CLI](/guide/cli/configuration/) |
| Permission denied (write) | Deny bac à sable ou approbation | [Approbations et bac à sable](/guide/cli/approvals-and-sandbox/) |
| Exit non-zéro (exec) | Tâche échouée ou critères de complétion non atteints | Vérifier stderr ; renforcer prompt |

## Cinq catégories

| Catégorie | Vérifier |
|---|---|
| Auth | Compte, token, connexion |
| Permissions | Approbation, bac à sable, accès dépôt |
| Environnement | Installation, PATH, config, dépendances |
| Réseau | Egress, proxy, accessibilité distant |
| Logique de tâche | Prompt, fichiers d'entrée, exigences de sortie |

Classer d'abord — la direction reste plus claire.

## Comment utiliser cette page

Traitez-la comme table de triage — pas dictionnaire complet :

- Repérer mot-clé
- Trouver catégorie
- Ouvrir page de dépannage détaillée

Ou traduire en questions simples :

- Pas connecté ?
- Pas de permission ?
- Commande non installée ?
- Réseau inaccessible ?
- Instructions floues à Codex ?

Utilisez cette page pour atteindre la bonne catégorie quand incertain.

## Permissions et bac à sable

| Message ou symptôme | Cause probable | Étape suivante |
|---|---|---|
| User rejected tool call | Vous ou politique a rejeté l'action | Confirmer si approbation était correcte ; ou changer tâche |
| Sandbox violation | Chemin ou commande hors limites | [Bac à sable et réseau](/guide/foundations/sandbox-and-network/) |
| Network access denied | Egress bloqué | Cloud : [Accès internet](/guide/web-and-cloud/internet-access/) |

## Cloud et GitHub

| Message ou symptôme | Cause probable | Étape suivante |
|---|---|---|
| Repository access denied | Scope OAuth insuffisant | [Connecter GitHub](/guide/web-and-cloud/connect-github/) |
| Clone failed | Nom dépôt, permissions, réseau | [Dépannage Cloud](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Mauvais nom ou scope | [Secrets et variables](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Protection de branche | [Créer pull requests](/guide/web-and-cloud/create-pull-requests/) |

## MCP et extensions

| Message ou symptôme | Cause probable | Étape suivante |
|---|---|---|
| MCP server failed to start | Chemin commande, dépendance manquante | [Connecter MCP](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | API externe lente ou down | Retry ; vérifier logs MCP |
| Unknown tool | Config/version serveur incompatible | Redémarrer session ; mettre à jour config |

## Contexte et modèle

| Message ou symptôme | Cause probable | Étape suivante |
|---|---|---|
| Context length exceeded | Conversation ou fichiers @ trop grands | [Compaction](/guide/context/compaction/) · réduire portée |
| Model not available | Limitation région ou plan | [Modèles et raisonnement](/guide/foundations/models-and-reasoning/) |

## Utiliser cette page

1. **Copier phrase clé** dans recherche client ou handbook
2. Suivre table vers liste de contrôle sujet
3. Encore bloqué : garder log complet ; voir [Ressources officielles](/guide/reference/official-resources/)

## Aider les autres à vous aider

Inclure :

- Type et version client (App / CLI / IDE / Cloud)
- Système d'exploitation
- Texte d'erreur complet (rédigé)
- Non interactif ? CI ?

## Ordre de dépannage

1. Capture d'écran ou copier erreur complète — pas seulement dernière ligne
2. Classifier avant deviner détail technique
3. Rappeler ce qui a changé récemment
4. Changer une variable et retry une fois
5. Puis demander avec contexte complet

Éviter mélanger plusieurs changements.

## Sources de référence
- Documentation support OpenAI Codex
---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Positionnée comme index de triage d'erreurs, pas dictionnaire complet ; cinq catégories recoupées avec chapitres CLI, Cloud, permissions et configuration actuels — pas de table de codes d'erreur fixe requise.  
**Dernière vérification :** 2026-07-26
