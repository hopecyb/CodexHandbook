---
title: "Référence d'erreurs"
description: Index d'apprentissage des erreurs courantes, codes de sortie et modes d'échec — pointe vers dépannage, pas support officiel.
locale: fr
source_locale: zh-CN
source_revision: '955c0a6'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page est un index d’orientation des erreurs, sans prétendre être un dictionnaire complet. Les cinq catégories — authentification, permissions, environnement, réseau et logique de la tâche — ont été recoupées avec les chapitres actuels sur le CLI, Cloud, les permissions et la configuration ; elles ne dépendent pas d’une table fixe de codes d’erreur.
  checkedAt: '2026-07-26'
sidebar:
  order: 100
---

Face à une erreur, il est tentant de relire la même ligne en anglais et de deviner la réponse. Commencer par classer le problème est généralement plus efficace.

Déterminez s’il concerne **l’authentification, les permissions, l’environnement, le réseau ou la logique de la tâche**. Cette page résume le sens des messages fréquents et indique la suite à donner. Ce n’est pas un dictionnaire exhaustif ; pour le comportement actuel, consultez la documentation officielle et la sortie du client.

## Comment lire une erreur

Commencez par trois étapes :

1. Identifiez la catégorie des mots-clés : authentification, permissions, environnement, réseau ou contexte.
2. Repérez l’étape concernée : démarrage, installation, exécution, push ou sortie.
3. Consultez la page de dépannage correspondante.

Cette démarche est souvent plus rapide que de deviner la cause.

Index global : [Dépannage](/fr/guide/reference/troubleshooting/)

## Authentification et compte

| Message ou symptôme | Cause possible | Étape suivante |
|---|---|---|
| Authentication failed / 401 | Jeton expiré ou absence de connexion | [Connexion et authentification](/fr/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | Fonction ou modèle désactivés par l’organisation | Contacter l’administrateur ; consulter [Compte et accès](/fr/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Fréquence des requêtes ou quota | Réessayer plus tard et vérifier l’utilisation de l’offre |

## Idées reçues courantes

### 1. Un long message indique un problème plus complexe

Un message long contient souvent beaucoup de contexte. Les mots-clés utiles peuvent se limiter à quelques lignes.

### 2. Un code de sortie non nul signifie que le modèle ne sait pas réaliser la tâche

Il peut simplement indiquer :

- des permissions manquantes ;
- un réseau inaccessible ;
- un format de sortie non conforme ;
- une condition d’échec déclenchée par la tâche elle-même.

### 3. 401, 403 et 429 sont équivalents

Ces codes signalent généralement des situations différentes :

- `401` : l’authentification n’a pas abouti ;
- `403` : l’identité est connue, mais l’action n’est pas autorisée ;
- `429` : les requêtes sont trop fréquentes ; réessayez plus tard.

### 4. La dernière ligne est toujours la plus importante

Elle peut simplement résumer l’échec. Les lignes précédentes indiquent parfois l’étape déclenchante, le fichier, la commande ou l’outil en échec, ainsi qu’une cause plus précise.

## CLI et commandes

| Message ou symptôme | Cause possible | Étape suivante |
|---|---|---|
| command not found: codex | Installation absente ou problème de PATH | [Installer le CLI](/fr/guide/getting-started/install-cli/) |
| Config parse error | Syntaxe TOML/YAML | [Configuration du CLI](/fr/guide/cli/configuration/) |
| Permission denied (write) | Refus du bac à sable ou de l’approbation | [Approbations et bac à sable](/fr/guide/cli/approvals-and-sandbox/) |
| Code de sortie non nul (`exec`) | Échec de la tâche ou conditions de fin non satisfaites | Examiner les journaux stderr et préciser le prompt |

## Commencer par la catégorie

Si vous hésitez, répartissez les erreurs en cinq catégories :

| Catégorie | Premiers éléments à vérifier |
|---|---|
| Authentification | Compte, jeton et état de connexion |
| Permissions | Approbations, bac à sable et accès au dépôt |
| Environnement | Installation, PATH, configuration et dépendances |
| Réseau | Accès sortant, proxy et accessibilité du service distant |
| Logique de la tâche | Prompt, fichiers d’entrée et exigences de sortie |

Ce premier classement aide à garder une direction claire.

## Utilisation de l’index

Utilisez cette page pour orienter le diagnostic, sans la traiter comme un dictionnaire complet :

- repérez un mot-clé ;
- trouvez sa catégorie ;
- consultez la page de dépannage détaillée.

Vous pouvez aussi reformuler l’erreur en question simple :

- La connexion a-t-elle échoué ?
- Les permissions manquent-elles ?
- La commande est-elle correctement installée ?
- Le réseau est-il accessible ?
- Les instructions données à Codex sont-elles assez claires ?

Si vous ne savez pas encore où poursuivre, commencez par identifier une grande catégorie.

## Permissions et bac à sable

| Message ou symptôme | Cause possible | Étape suivante |
|---|---|---|
| User rejected tool call | Vous ou une politique avez refusé l’action | Déterminer si l’action doit être approuvée, ou modifier la tâche |
| Sandbox violation | Chemin d’écriture ou commande hors du périmètre | [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/) |
| Network access denied | Accès réseau sortant interdit | Cloud : [Accès Internet](/fr/guide/web-and-cloud/internet-access/) |

## Cloud et GitHub

| Message ou symptôme | Cause possible | Étape suivante |
|---|---|---|
| Repository access denied | Portée OAuth insuffisante | [Connecter GitHub](/fr/guide/web-and-cloud/connect-github/) |
| Clone failed | Nom du dépôt, permissions ou réseau | [Dépannage de Cloud](/fr/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Nom incorrect ou problème de portée | [Secrets et variables](/fr/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Protection de branche | [Créer des pull requests](/fr/guide/web-and-cloud/create-pull-requests/) |

## MCP et extensions

| Message ou symptôme | Cause possible | Étape suivante |
|---|---|---|
| MCP server failed to start | Chemin de commande incorrect ou dépendances manquantes | [Connecter un serveur MCP](/fr/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | API externe lente ou indisponible | Réessayer et examiner les journaux MCP |
| Unknown tool | Configuration incompatible avec la version du serveur | Redémarrer la session et mettre à jour la configuration |

## Contexte et modèle

| Message ou symptôme | Cause possible | Étape suivante |
|---|---|---|
| Context length exceeded | Conversation ou fichiers référencés avec @ trop volumineux | [Compaction](/fr/guide/context/compaction/) et réduction du périmètre |
| Model not available | Modèle non pris en charge dans la région ou l’offre | [Modèles et raisonnement](/fr/guide/foundations/models-and-reasoning/) |

## Parcours de recherche

1. **Copiez la phrase clé** dans la recherche du client ou du manuel.
2. Suivez le lien du tableau et appliquez les contrôles de la page correspondante.
3. Si le problème persiste, conservez les journaux complets et consultez les [ressources officielles](/fr/guide/reference/official-resources/).

## Informations à joindre à un signalement

- Type et version du client : App, CLI, IDE ou Cloud.
- Système d’exploitation.
- Message d’erreur complet après masquage des données sensibles.
- Utilisation éventuelle du mode non interactif ou de la CI.

## Ordre de dépannage

1. Copiez l’erreur complète ou faites une capture, sans vous limiter à la dernière ligne.
2. Identifiez sa catégorie avant de chercher une explication technique précise.
3. Retrouvez ce qui a été modifié récemment.
4. Changez une seule variable, puis réessayez une fois.
5. Si cela ne suffit pas, demandez de l’aide avec les informations complètes ou consultez la documentation officielle.

Vous éviterez de mélanger plusieurs changements et faciliterez le diagnostic par d’autres personnes.

## Sources de référence

- Documentation d’assistance OpenAI Codex
