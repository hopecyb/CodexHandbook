---
title: "Portée et priorité de AGENTS.md"
description: "Comprendre précisément comment les règles globales, celles de la racine du projet et celles du répertoire courant sont découvertes et fusionnées."
contentType: reference
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Les règles officielles de découverte et de fusion ont été vérifiées point par point ; les exemples de répertoires et les conseils de vérification du chargement sont pédagogiques, sans prétendre avoir été testés sur tous les clients."
  evidence:
    - label: "AGENTS.md"
      href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: fr
source_locale: zh-CN
source_revision: b5f31cc
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Codex construit une chaîne d'instructions au début de chaque exécution. Il faut d'abord comprendre l'ordre de découverte des fichiers `AGENTS.md` eux-mêmes, plutôt que de supposer un classement mêlant politique d'organisation, configuration et prompts.

## Ordre officiel de découverte

1. **Niveau global** : dans le répertoire personnel de Codex (par défaut `~/.codex`), Codex cherche d'abord `AGENTS.override.md`, puis `AGENTS.md` si le premier est absent. Ce niveau ne retient que le premier fichier non vide.
2. **Niveau projet** : de la racine du projet (généralement la racine Git) jusqu'au répertoire de travail courant, Codex examine dans chaque répertoire `AGENTS.override.md`, `AGENTS.md`, puis les noms de fichiers de repli configurés. Il retient au plus un fichier par répertoire.
3. **Fusion** : les contenus sont concaténés de la racine vers le répertoire courant. Les fichiers les plus proches de ce dernier arrivent plus tard et peuvent donc remplacer des consignes antérieures.

Codex ignore les fichiers vides. Il arrête le chargement lorsque le contenu combiné atteint `project_doc_max_bytes`, dont la limite par défaut est de 32 KiB.

## Exemple de monorepo

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

Si l'exécution démarre dans `services/payments`, le fichier `AGENTS.md` à la racine est chargé en premier. Dans `services/payments`, la présence de `AGENTS.override.md` fait ignorer le fichier `AGENTS.md` du même répertoire.

Placez à la racine les règles valables pour tout le dépôt, comme le gestionnaire de paquets, les tests communs et les interdictions de sécurité. Dans les fichiers imbriqués, n'ajoutez que les règles propres au service. Évitez de recopier 80 % du même contenu.

## Articulation avec le prompt de la tâche

`AGENTS.md` porte les conventions du projet durables et versionnables. Le prompt précise l'objectif, le périmètre et les critères d'acceptation de la tâche en cours. Par exemple :

```text
Respecte les fichiers AGENTS.md applicables. Pour cette tâche, modifie uniquement
services/payments/retry.ts et ses tests. Ne renouvelle pas les clés.
Exécute make test-payments et rapporte le résultat réel.
```

Un prompt ne peut pas rendre disponibles des capacités interdites par les limites du système, de l'organisation, du bac à sable ou des permissions. En cas de conflit, demandez à Codex d'énumérer les sources des instructions concernées et leur portée. Distinguez les conventions de projet ajustables des véritables limites d'exécution. Si le périmètre est clair, déjà autorisé et sans conflit avec une instruction de niveau supérieur, poursuivez ; ne signalez un blocage concret que si une information ou une permission manque réellement. Voir la comparaison complète dans [Priorité du contexte](/fr/guide/context/context-priority/).

## Vérifier ce qui a réellement été chargé

Démarrez une nouvelle session depuis le répertoire visé et demandez :

```text
Avant de commencer, énumère dans l'ordre les sources AGENTS.md / AGENTS.override.md
chargées pour cette exécution et résume séparément les contraintes ajoutées par
chaque fichier. Ne modifie aucun fichier.
```

`AGENTS.md` est lu au démarrage. Après une modification, vérifiez-la dans une nouvelle exécution ou une nouvelle session ; ne supposez pas que la session actuelle l'a rechargé automatiquement.

## Fichiers de repli et capacité

Si vous disposez déjà d'un fichier `TEAM_GUIDE.md`, vous pouvez configurer :

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

Un nom de repli ne s'applique que si aucun fichier de priorité supérieure n'existe dans le même répertoire. Avant d'augmenter la limite, supprimez les doublons et le contexte inutile afin de ne pas écarter les règles importantes.

## Source officielle

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
