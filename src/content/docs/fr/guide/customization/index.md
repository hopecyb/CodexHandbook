---
title: "Personnalisation et configuration projet"
description: Préférences personnelles, AGENTS.md, configuration et priorité des règles — pour que Codex continue à travailler à votre façon au fil du temps.
sidebar:
  order: 40
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Codex ne repose pas seulement sur « comment vous demandez cette fois » ; il repose aussi sur une **configuration persistante** pour retenir vos conventions et celles de votre équipe. Ce chapitre sépare principalement ce qui devrait rester dans la conversation de ce qui devrait s'ancrer dans le projet.

Si vous commencez à répéter les mêmes choses — comme « ne pas toucher ce répertoire », « exécuter les tests d'abord » ou « utiliser ce modèle par défaut » — ce chapitre traite ce type de problème.

## Contenu

- Qui annule qui entre préférences personnelles, instructions projet, règles d'équipe et prompts temporaires
- Ce qui appartient à `AGENTS.md` et ce qui n'y appartient pas
- Quelle couche gère les fichiers de configuration et la politique d'approbation/bac à sable

## Pour qui

| Lecteur | Commencer ici |
|---|---|
| Première tâche qui fonctionne | [Instructions projet](/guide/customization/project-instructions/) |
| Codifier les normes de collaboration dans le dépôt | [Qu'est-ce que AGENTS.md](/guide/customization/agents-md/what-is-agents-md/) |
| Comportement CLI/App cohérent | [Bases de la configuration](/guide/customization/configuration/config-basics/) |

## Ce que ce chapitre traite

Après un moment d'utilisation de Codex, beaucoup rencontrent le même type de problème : beaucoup de règles écrites, mais elles ne semblent pas pleinement efficaces, ou différents endroits se contredisent.

Ce chapitre traite principalement comment bien superposer les règles de collaboration :

- Quelle est mon habitude personnelle
- Quelle est une règle partagée du dépôt
- Quelle est une frontière stricte au niveau organisation
- Quelle est seulement une exigence temporaire pour cette tâche

Quand la superposition est floue, il est facile d'obtenir « beaucoup écrit, mais ça n'a pas pris effet quand il le fallait ».

## Couches courantes (conceptuel)

Comprendre les couches aide à éviter la confusion de « j'ai écrit des règles mais elles ne s'appliquaient pas ». Les clients, capacités gérées par l'organisation et implémentations de version peuvent différer, mais vous pouvez généralement commencer avec les couches ci-dessous :

```text
1. Politique gérée organisation/équipe (si déployée)
2. AGENTS.md / instructions projet au niveau projet (dans le dépôt)
3. Configuration et préférences utilisateur (machine locale, ex. ~/.codex)
4. Exigences temporaires et références @ dans la tâche actuelle
```

**Principe :** Plus c'est proche de « imposé par l'organisation », moins ça devrait être relaxé à la légère par une seule tâche ; plus c'est proche de « la tâche actuelle », plus c'est flexible — et plus c'est facile à perdre quand la session se termine. Pour la priorité réelle, suivez le client actuel et la documentation officielle.

## Idées reçues courantes

### 1. Si je peux écrire des prompts, je n'ai pas besoin de configuration à long terme ?

Pour les courtes tâches cela peut à peine suffire, mais une fois la collaboration continue, vous voulez progressivement ancrer les exigences répétées vers le bas.

### 2. Peut-on tout mettre dans `AGENTS.md` ?

Pas vraiment.  
Certaines choses conviennent mieux dans :

- Préférences personnelles
- Fichiers de configuration
- Politique gérée par l'organisation
- Le prompt de tâche actuel

### 3. Plus de configuration n'est pas toujours mieux

Quand la configuration est dispersée, les règles trop longues et les couches en désordre, les humains et les outils ont plus de mal à savoir quoi suivre.

## Navigation du chapitre

| Sujet | Pages |
|---|---|
| AGENTS.md | [Vue d'ensemble](/guide/customization/agents-md/what-is-agents-md/) · [Portée et priorité](/guide/customization/agents-md/scope-and-precedence/) · [Écrire des instructions efficaces](/guide/customization/agents-md/writing-effective-instructions/) |
| Instructions projet | [Instructions projet](/guide/customization/project-instructions/) |
| Mémoire | [Mémoires et contexte persistant](/guide/customization/memories-and-persistent-context/) |
| Choix du mécanisme | [Choisir le bon mécanisme](/guide/customization/choosing-the-right-mechanism/) |
| Configuration | [Bases de la configuration](/guide/customization/configuration/config-basics/) · [Profils](/guide/customization/configuration/profiles/) |
| Préférences personnelles | [Préférences personnelles](/guide/customization/personal-preferences/) |
| Règles | [Allow et Deny](/guide/customization/rules/allow-and-deny-patterns/) · [Règles de commandes](/guide/customization/rules/command-rules/) · [Politique d'équipe](/guide/customization/rules/team-rules/) |
| Exemples | [AGENTS.md dans un monorepo](/guide/customization/examples/monorepo-agents-md/) |

La couverture des règles a commencé ; plus de pages de détail de configuration seront ajoutées à mesure que le module de personnalisation grandit.

## Ordre suggéré

Quand vous organisez les règles de collaboration Codex pour la première fois, vous pouvez suivre cet ordre :

1. Organiser d'abord les règles projet
2. Puis ajouter `AGENTS.md`
3. Puis séparer les préférences personnelles
4. Enfin gérer les fichiers de configuration et les contrôles de règles plus fins

C'est moins chaotique que changer une pile de clés de config tout de suite.

Les règles n'ont pas besoin d'être nombreuses ; les mettre au bon endroit compte plus.

## Erreurs courantes

- Entasser un long document d'architecture dans `AGENTS.md`, noyant les contraintes clés
- Répéter les normes d'équipe dans le chat sans les committer dans le dépôt, donc des expériences incohérentes pour les collaborateurs
- Relaxer le bac à sable sur votre machine personnelle en supposant que les coéquipiers dans un dépôt partagé ont les mêmes permissions

## Liste de contrôle d'acceptation

- [ ] Vous pouvez expliquer la priorité des quatre couches de configuration
- [ ] Le dépôt a un `AGENTS.md` court (ou instructions projet équivalentes)
- [ ] Les opérations sensibles passent encore par l'approbation au lieu de compter sur des règles textuelles pour « effrayer » le modèle

## Références

- Documentation OpenAI Codex : [https://developers.openai.com/codex](https://developers.openai.com/codex)
- Références de structure de pratique communautaire : sujets AGENTS.md freestylefly/CodexGuide, stormzhang/ai-coding-guide `11-agents-md.md`

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Les matériaux actuels du Help Center OpenAI et de configuration Codex décrivent encore clairement la couche entre configuration utilisateur `~/.codex`, capacités gérées par l'organisation et instructions de collaboration au niveau projet ; cette page réécrit la « priorité » comme une description de couche commune plus conservatrice pour éviter d'écrire des détails d'implémentation spécifiques comme règles absolues.  
**Dernière vérification :** 2026-07-26
