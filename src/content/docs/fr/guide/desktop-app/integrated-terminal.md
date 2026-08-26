---
title: Terminal intégré
description: Exécutez des commandes dans le projet ou worktree actuel et vérifiez les résultats avec des sorties réelles.
locale: fr
source_locale: zh-CN
source_revision: 918b2bf
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Chaque conversation de l'App de bureau ChatGPT dispose d'un terminal limité au projet ou au worktree actuel. Ce terminal ne sert pas uniquement à consulter les journaux : c'est aussi la fenêtre de preuves qui permet de vérifier les conclusions de Codex.

Ouvrez-le avec l'icône de terminal en haut à droite de l'App, ou appuyez simultanément sur `Ctrl` et la touche accent grave. ChatGPT peut lire la sortie actuelle du terminal ; vous pouvez donc lui demander d'analyser un build en échec ou un serveur de développement en cours d'exécution.

## Flux de vérification minimal

Dans un projet JavaScript, vous pourriez exécuter :

```bash
git status --short
pnpm test
pnpm run lint
```

Les commandes varient selon le projet. Consultez d'abord `README.md`, `package.json` ou les règles du projet. Ajoutez les commandes confirmées au prompt :

```text
Après la modification, exécute pnpm test et pnpm run lint.
Indique le code de sortie de chaque commande. Si l'une échoue, ne prétends pas
que la tâche est terminée.
```

Consignez au minimum les commandes exécutées, leur réussite ou leur échec, la première erreur significative de chaque échec et les contrôles qui n'ont pas été lancés.

## Gérer les processus de longue durée

Un serveur de développement continue de s'exécuter ; cela ne signifie pas que la commande est bloquée. Après son démarrage, vérifiez :

- si la sortie contient une URL locale ;
- si la page s'ouvre dans un navigateur ;
- si des erreurs d'exécution apparaissent ensuite dans le terminal.

Envoyez un signal d'interruption lorsque vous devez l'arrêter. Ne lancez pas de serveurs en double uniquement parce qu'aucune nouvelle sortie n'est apparue depuis quelque temps.

## Actions réutilisables

Si vous exécutez souvent la même commande, définissez une Action dans l'environnement local. Elle devient un raccourci dans l'App de bureau et s'exécute dans le terminal intégré. Les Actions conviennent aux vérifications à faible risque telles que `test`, `lint` et `build`. Ne les utilisez pas pour masquer un déploiement en production ou une suppression de base de données.

## Limites de sécurité

- Ne collez aucun secret de production dans une conversation ou dans l'historique du terminal.
- Pour une commande inconnue, demandez d'abord son objectif, son impact et la méthode de retour arrière.
- Ne relancez pas aveuglément une suppression, une migration ou un déploiement en production.
- La possibilité technique d'exécuter une commande dans le terminal ne vaut pas autorisation métier.

La documentation officielle cite des commandes courantes comme `git status`, `git pull --rebase`, les tests et le lint. La documentation de votre projet reste la source de vérité pour ses commandes.

## Sources officielles

- [Terminal intégré](https://learn.chatgpt.com/docs/integrated-terminal)
- [Environnements locaux](https://learn.chatgpt.com/docs/environments/local)

---

**Statut :** verified

**Produit concerné :** App

**Dernière vérification :** 2026-08-26
