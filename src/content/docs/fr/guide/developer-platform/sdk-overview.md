---
title: 'Présentation du SDK : tâches locales et intégration de clients'
description: Distinguer le SDK Codex, la CLI non interactive, App Server et un service de tâches distant que vous créez vous-même.
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Le lieu d’exécution, les interfaces de threads et les limites d’intégration ont été vérifiés dans la documentation officielle du SDK et d’App Server. Seule la syntaxe de l’exemple minimal a été vérifiée ; aucun appel authentifié au modèle n’a été effectué.
  evidence:
    - label: Documentation officielle du SDK Codex
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Documentation officielle de Codex App Server
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: fr
source_locale: zh-CN
source_revision: 'e888ae6'
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

Le SDK Codex permet à un programme de contrôler un Agent Codex local. « Local » désigne la machine qui exécute le SDK et l’Agent : votre ordinateur ou un runner CI que vous gérez. N’en déduisez pas qu’il s’agit d’un service HTTP hébergé permettant de créer des tâches Cloud, de les interroger et de télécharger leurs artefacts. Voir la [documentation officielle du SDK](https://learn.chatgpt.com/docs/codex-sdk).

## Choisir l’entrée selon l’objectif d’intégration

| Objectif | Point de départ | Ce qui reste à votre charge |
|---|---|---|
| Exécuter une tâche dans un script | [`codex exec`](/fr/guide/developer-platform/non-interactive/codex-exec/) | Répertoire de travail, entrées, code de sortie et conservation des résultats |
| Exécuter et poursuivre des tâches depuis un programme | SDK Codex | Cycle de vie du programme, environnement, gestion des échecs et vérification |
| Créer un client avec sessions, approbations et événements diffusés | App Server | Interactions du client, connexion, identité et déploiement |
| Fournir une plateforme de tâches distantes multiutilisateur | Votre propre architecture de service | File d’attente, isolation des locataires, identifiants, stockage, annulation et rappels |

La dernière ligne est un choix d’architecture, et non une plateforme hébergée incluse dans le SDK. La documentation officielle présente le SDK pour l’automatisation et la CI, et App Server pour une intégration poussée des clients. Ce dernier échange requêtes et événements par JSON-RPC bidirectionnel. Voir la [documentation App Server](https://learn.chatgpt.com/docs/app-server).

## Appel minimal du SDK TypeScript

Le paquet TypeScript officiel est `@openai/codex-sdk` et exige Node.js 18 ou une version ultérieure. L’exemple suivant utilise la syntaxe des modules JavaScript pour présenter l’interface de base du même paquet ; ce n’est pas un service de production complet.

Installez la dépendance dans un répertoire d’exercice dédié et conservez la version réellement résolue ainsi que le fichier de verrouillage :

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

Préparez un `README.md` sans informations sensibles, puis enregistrez ceci dans `example.mjs` :

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'Lis uniquement le README.md du répertoire courant et résume son objet en trois points en chinois ; ne modifie aucun fichier et ne lance aucune action externe.'
);
console.log(answer.finalResponse);
```

Exécutez ensuite `node example.mjs`. Avant cela, effectuez l’authentification adaptée à l’environnement choisi et vérifiez les paramètres réels de sandbox et d’approbation. Le « lecture seule » du prompt est une contrainte de tâche, pas un remplacement des limites de l’environnement d’exécution. L’appel au modèle peut consommer votre quota ; cette page n’a exécuté ni installation ni appel pour vous.

Les méthodes et champs de retour ont été comparés à l’[exemple officiel](https://learn.chatgpt.com/docs/codex-sdk). Le site n’a vérifié que la syntaxe JavaScript : aucune version publiée du SDK n’a été verrouillée puis testée en pratique, et aucun faux résultat de réussite n’est fourni. Lors d’une reproduction, consignez version du paquet, CLI/runtime, système, mode d’authentification (sans les secrets) et résultat.

## Poursuivre et reprendre une tâche

Vous pouvez rappeler `run()` sur le même objet thread ; un ID de thread existant peut être passé à `resumeThread()`. Les threads récupérables dépendent de l’environnement de stockage des états : un ID n’est pas une URL Cloud interrogeable depuis n’importe quelle machine. Une interface Python officielle existe aussi ; vérifiez séparément noms d’interface et dépendances dans sa documentation, sans mélanger le code des deux langages. Voir [threads et interfaces de langage](https://learn.chatgpt.com/docs/codex-sdk).

Après une reprise, vérifiez que les fichiers présents correspondent à l’historique décrit dans [Transmission et reprise](/fr/guide/agent-work/handoff-and-resume/).

## Vérifications après un appel réussi

1. **Lieu d’exécution** : consignez le répertoire de travail et les fichiers réellement lus ou modifiés, pas seulement le prompt.
2. **Résultat** : examinez la réponse, les différences de fichiers et les tests. Obtenir `finalResponse` ne vaut pas acceptation métier.
3. **Nature de l’échec** : distinguez dépendances ou processus locaux, authentification, service de modèle et validation de la tâche ; ne réduisez pas toutes les erreurs à 400/429.
4. **Effet d’une nouvelle tentative** : vérifiez d’abord si des fichiers ou effets externes existent déjà, puis décidez de réessayer ; ne renvoyez pas simplement la même demande.
5. **Permissions** : l’environnement d’exécution et les outils disponibles sont sous votre responsabilité. Le nom du SDK n’implique ni Cloud, ni administration d’organisation, ni isolation multi-tenant automatique.

Ce sont les vérifications d’intégration recommandées par ce site, pas la liste des champs retournés par le SDK. Pour les champs réels, consultez les types de votre version et la documentation officielle.

## Rapports avec rappels, files d’attente et exécution distante

Votre propre runner peut exécuter le SDK, puis votre service envoyer une notification de fin. Dans ce cas, états de file, rappel HTTP, format de signature et stratégie de nouvelle tentative relèvent du protocole de votre système. Les événements diffusés par App Server ne sont pas directement une adresse Webhook.

Poursuivez avec [Limites des Webhooks et événements de tâche](/fr/guide/developer-platform/webhooks/overview/) et [Scripts et pipelines](/fr/guide/developer-platform/non-interactive/scripts-and-pipelines/). Cette page ne promet pas qu’un appel SDK crée automatiquement une tâche Codex Cloud, une URL d’artefact ou une délégation OAuth.
