---
title: "AGENTS.md dans un monorepo"
description: Modèles d'exemple pour placer les instructions projet, la portée et les commandes de test dans une structure multi-paquets mono-dépôt.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Dans un monorepo avec plusieurs apps, paquets partagés et différentes stacks — un seul `AGENTS.md` géant fait que l'Agent **modifie le mauvais paquet** ou exécute les mauvais tests. Cette page donne un modèle d'**instructions en couches** réutilisable (exemple — adaptez pour votre dépôt).

## Ce que cette page couvre

- Comment la racine et les sous-paquets divisent l'écriture des instructions
- Comment aligner les fichiers @ et les contraintes de chemin avec les frontières de paquets
- Cohérence avec les commandes d'environnement CI / Cloud

## Pourquoi les instructions en couches comptent plus ici

Si un dépôt normal est une maison, un monorepo est un immeuble.

Différentes pièces, résidents et règles.  
Si vous ne postez qu'une très longue notice à l'entrée, Codex rencontre souvent deux problèmes :

- Voit tout mais ne sait pas quelle couche s'applique maintenant
- Voulait modifier un paquet mais touche autre chose

Le point est de faire suivre les règles les frontières de répertoires clairement — pas d'ajouter mécaniquement plus de fichiers `AGENTS.md`.

## Structure recommandée (exemple)

```text
repo-root/
  AGENTS.md              # Global : politique de branche, conventions de commit, interdictions
  apps/web/AGENTS.md     # Frontend : framework, commandes de test, conventions de routage
  apps/api/AGENTS.md     # Backend : style API, discipline de migration
  packages/shared/       # Lien depuis la racine uniquement, ou courte note sous-répertoire
```

Le `AGENTS.md` racine devrait inclure :

- Répertoires que l'Agent **ne doit pas** modifier (ex. `infra/prod/`)
- **Liens propriétaire ou doc** pour chaque sous-paquet
- Commande d'installation globale : `pnpm install` à la racine

## Idées reçues courantes

### 1. À mesure que les répertoires grandissent, ne pas tout empiler à la racine

Beaucoup de premières tentatives d'instructions monorepo mettent toutes les contraintes dans le `AGENTS.md` racine.

Résultat :

- Fichier très long
- Les règles pertinentes pour la tâche actuelle ne ressortent pas
- Les conventions spécifiques aux sous-paquets sont noyées

Pratique plus stable : consensus global à la racine ; règles spéciales locales dans les sous-paquets.

### Les notes de sous-paquet réduisent les éditions erronées — elles ne dupliquent pas les règles racine

Si `apps/web` et `apps/api` diffèrent en commandes de dev, commandes de test et contraintes, écrire ces différences dans chaque répertoire aide Codex à éviter les mauvais chemins.

## Snippet de modèle AGENTS.md sous-paquet

```markdown
## Portée
Modifier uniquement `apps/web/**` sauf si la tâche exige explicitement des changements cross-paquet.

## Développement
- Installation : `pnpm install` à la racine du dépôt
- Dev : `pnpm --filter web dev`
- Test : `pnpm --filter web test`
- Vérification de types : `pnpm --filter web typecheck`

## Dépendances
Importer les types partagés depuis `@acme/shared` ; ne pas copier-coller.
```

## Coordination du prompt de tâche

Pour les refactors cross-paquet, **lister les chemins explicitement** :

```text
Objectif : utiliser le nouveau client API dans apps/web
Changements autorisés : apps/web/**, packages/api-client/**
Interdit : modifier directement le serveur apps/api
Acceptation : pnpm --filter web test && pnpm --filter api-client test
```

Voir [Contexte fichier et répertoire](/guide/context/file-and-folder-context/)

## Cloud et CI

Les monorepos sur Cloud échouent souvent car **l'installation n'est pas à la racine** ou le filtre est incorrect. Dans le `AGENTS.md` racine, indiquer :

- Le répertoire de travail par défaut est la racine du dépôt
- Commandes de filtre pour les tâches mono-paquet
- Stratégie de cache (si turborepo/nx, noter le graphe de tâches)

[Environnements Cloud](/guide/web-and-cloud/cloud-environments/)

## Erreurs courantes

- Instructions uniquement dans `apps/web` ; l'Agent modifie le lockfile à la racine
- Commandes de test incohérentes par sous-paquet, non documentées
- `AGENTS.md` de sous-paquet en conflit avec la doc racine

## Racine versus sous-paquet : comment décider

Quand vous hésitez si une note appartient à la racine ou au sous-paquet, demandez :

1. Est-ce un consensus que chaque paquet doit suivre ?
2. Cela ne tient que pour un répertoire ?
3. Si cette règle est au mauvais endroit, l'Agent modifiera la mauvaise portée ?

Plus proche de (1) → racine ; plus proche de (2) et (3) → sous-paquet.

## Liste de contrôle d'acceptation

- [ ] Racine et au moins un sous-paquet ont chacun des notes de portée lisibles
- [ ] Chaque paquet peut exécuter sa commande de test seul
- [ ] Les tâches cross-paquet indiquent les chemins autorisés dans le prompt

AGENTS.md dans un monorepo n'a pas besoin d'être centralisé ; « consensus global » et « règles locales par répertoire » appartiennent chacun au bon endroit.

## Références

- Playbook monorepo freestylefly/CodexGuide
- Chapitre grand dépôt codex.bozhouai.com
- Pratiques monorepo et Git stormzhang

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Recoupement avec les chapitres actuels du handbook sur `AGENTS.md`, contexte fichier/répertoire et environnements Cloud ; le contenu de la page se limite aux modèles d'exemple d'instructions en couches monorepo et à l'organisation des commandes, sans traiter les points d'entrée produit spécifiques ou l'implémentation gérée comme contrats fixes.  
**Dernière vérification :** 2026-07-26
