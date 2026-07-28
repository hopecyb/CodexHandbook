# Codex Handbook

<p align="center">
  <img src="./public/icon-512.png" alt="Codex Handbook Logo" width="180" />
</p>

<p align="center">
  <img src="./public/cover.png" alt="Codex Handbook Cover" width="100%" />
</p>

<p align="center"><strong>Manuel systématique et base de connaissances pratiques pour Codex</strong></p>

<p align="center">
  <a href="./README.md">简体中文</a>
  ·
  <a href="./README.en.md">English</a>
  ·
  <a href="./README.zh-TW.md">繁體中文</a>
  ·
  <a href="./README.fr.md">Français</a>
  ·
  <a href="./README.ja.md">日本語</a>
  ·
  <a href="./README.ko.md">한국어</a>
  ·
  <a href="./README.es.md">Español</a>
  ·
  <a href="./README.de.md">Deutsch</a>
  ·
  <a href="./README.pt.md">Português</a>
  ·
  <a href="./README.vi.md">Tiếng Việt</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/fr/">Lire en ligne</a>
  ·
  <a href="./src/content/docs/fr/guide/start-here/index.md">Commencer ici</a>
  ·
  <a href="./docs/planning/content-architecture.md">Architecture du contenu</a>
  ·
  <a href="./examples/README.md">Exemples</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/"><img src="https://img.shields.io/badge/website-codexhandbook.com-1d4ed8" alt="Website" /></a>
  <a href="https://codexhandbook.com/fr/"><img src="https://img.shields.io/badge/docs-handbook-2563eb" alt="Docs" /></a>
  <a href="https://starlight.astro.build/"><img src="https://img.shields.io/badge/built%20with-Starlight-f97316" alt="Built with Starlight" /></a>
</p>

> De votre première ouverture de Codex à son utilisation dans des projets réels, des flux de travail et une capitalisation de connaissances à long terme.  
> Ce n’est pas une collection de astuces dispersées, mais un manuel pratique systématique organisé autour de `Guide / Prompts / Skills / Cas`.

## De quoi il s’agit

**Codex Handbook** est une base de connaissances systématique pour apprendre et pratiquer avec Codex. Il ne cherche pas à répondre à la question vague « que peut faire Codex ? » Il se concentre sur trois questions plus concrètes :

- Par où commencer lors de votre première rencontre avec Codex ?
- Comment décrire les tâches, organiser le contexte et vérifier les résultats lors de l’utilisation de Codex dans des projets réels ?
- Après une collaboration réussie, comment transformer cette expérience en prompts, Skills, règles, cas et actifs d’équipe ?

Si vous débutez avec Codex, ce dépôt et ce site sont votre point de départ.

## Commencer ici

### 1. Lire en ligne

L’entrée principale est [codexhandbook.com/fr](https://codexhandbook.com/fr/).  
Pour la navigation complète, la recherche, l’organisation des chapitres et les mises à jour continues, privilégiez le site web.

### 2. Premier parcours de lecture pour débutants

Nous recommandons cet ordre :

1. [Commencer ici](./src/content/docs/fr/guide/start-here/index.md)
2. [Contexte](./src/content/docs/fr/guide/context/index.md)
3. [Prompts](./src/content/docs/fr/prompts/index.md)
4. [Skills](./src/content/docs/fr/skills/index.md)
5. [Cas pratiques](./src/content/docs/fr/cases/index.md)

Ce parcours est conçu pour les nouveaux utilisateurs de Codex : il vous aide à construire une base solide avant la pratique.

## Ce que vous apprendrez

### Guide

Comprendre le choix du point d’entrée Codex, les parcours d’utilisation de base, l’organisation du contexte, les limites des permissions et les méthodes de vérification des résultats.

### Prompts

Apprendre à décrire clairement les tâches, définir les contraintes, les objectifs, les entrées et les critères d’acceptation pour que Codex produise des résultats vérifiables.

### Skills

Apprendre à concevoir, utiliser, maintenir et gouverner les Skills — transformer une collaboration réussie en capacité réutilisable à long terme.

### Cas pratiques

Comprendre les flux de travail complets via des tâches réelles : lecture de code, correction de bugs, documentation, recherche, automatisation et collaboration de livraison.

## Pour qui

- Débutants qui découvrent Codex
- Développeurs souhaitant utiliser Codex dans des projets réels
- Équipes qui doivent capitaliser prompts, règles, modèles et cas
- Professionnels de la connaissance utilisant Codex pour l’écriture, la recherche, la documentation et les présentations

## Liens rapides

| Lien | Usage |
| --- | --- |
| [Lire en ligne](https://codexhandbook.com/fr/) | Parcourir le manuel complet sur le site |
| [Guide](./src/content/docs/fr/guide/start-here/index.md) | Comprendre les parcours d’utilisation de Codex |
| [Prompts](./src/content/docs/fr/prompts/index.md) | Décrire clairement les tâches et les limites |
| [Skills](./src/content/docs/fr/skills/index.md) | Transformer l’expérience en capacités réutilisables |
| [Cas pratiques](./src/content/docs/fr/cases/index.md) | Flux de bout en bout via des tâches réelles |
| [Exemples](./examples/README.md) | Réutiliser prompts et actifs d’exemple |
| [Architecture du contenu](./docs/planning/content-architecture.md) | Comprendre la conception informationnelle du site |
| [Plan des chapitres](./docs/planning/chapter-outline.md) | Voir la couverture des sujets |

## Structure du contenu

```text
Codex Handbook
├── src/content/docs/fr/guide/   # Guide, clients, permissions, vérification
├── src/content/docs/fr/prompts/ # Méthodes de prompts et expression des tâches
├── src/content/docs/fr/skills/  # Conception, utilisation et gouvernance des Skills
├── src/content/docs/fr/cases/   # Cas de tâches réelles
├── examples/                    # Prompts copiables et exemples étendus
├── docs/planning/               # Planification et maintenance du contenu
```

## Développement local

Ce projet utilise [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) pour le site de documentation. Le contenu français se trouve dans `src/content/docs/fr/`.

Prérequis :

- Node.js `>=22.12.0`
- `pnpm`

Démarrer l’environnement de développement :

```bash
pnpm install
pnpm dev
```

Construire le site statique :

```bash
pnpm build
```

Suivre la couverture de traduction française :

```bash
pnpm i18n:status -- --locale fr
```

Le contenu français se trouve sous `src/content/docs/fr/` (miroir de la source en chinois simplifié). Glossaire : [`glossary/fr.md`](./glossary/fr.md). Au 2026-07-28, la couverture française est de **100 %** (`translation_status: draft`, revue linguistique / technique à venir).

## Principes

- **Officiel en priorité** : pour les capacités produit, règles et limites, privilégier les sources officielles.
- **Accessible aux débutants** : sans prérequis en terminal, Git, Agent ou automatisation.
- **Orienté tâches réelles** : flux réutilisables, cas et modèles — pas d’empilement de concepts abstraits.
- **Limites de sécurité claires** : permissions, écriture de fichiers, réseau, automatisation et extensions — les risques doivent être expliqués.
- **Capitalisation continue** : encourager la transformation d’une tâche réussie en prompts, Skills, règles, cas et actifs d’équipe.

## Contribuer

Nous accueillons :

- Réécritures de tutoriels accessibles aux débutants
- Cas réels reproductibles
- Prompts de qualité, modèles de Skills, exemples de configuration et matériaux de cas
- Vérification des faits et corrections de contenu obsolète
- Contenu dans d’autres langues (e.g. English, 简体中文, 繁體中文)

Pour contribuer au contenu, commencez par :

- [Guide des exemples](./examples/README.md)
- [Architecture du contenu](./docs/planning/content-architecture.md)
- [Plan des chapitres](./docs/planning/chapter-outline.md)

## Avertissement

Ce projet est un manuel pratique Codex maintenu par la communauté — pas un projet officiel OpenAI. Pour les informations sensibles au temps (fonctionnalités, tarifs, disponibilité, politiques de sécurité, détails produit), consultez les sources officielles.
