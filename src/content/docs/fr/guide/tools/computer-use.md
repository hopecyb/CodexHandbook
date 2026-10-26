---
title: Computer Use
description: Contrôle GUI avancé via écran et périphériques d'entrée — cas d'usage, risques et approbations.
locale: fr
source_locale: zh-CN
source_revision: "d4a2e11"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
legacyVerification:
  status: verified
  products: App / Codex (selon version, région et permission)
  basis: Les matériaux du centre d'aide OpenAI sur les plans Codex et capacités bureau listent encore Computer Use ; les notes de version Business confirment Codex Computer Use sur Windows à partir du 2026-05-29. Cette page résume modèle de risque, cas d'usage et limites d'approbation — sans prétendre à une disponibilité par défaut universelle.
  checkedAt: '2026-07-26'
sidebar:
  order: 50
---

**Computer Use** permet à l'Agent de voir l'écran, déplacer le pointeur et taper — au-delà du navigateur ou du terminal seul. Capacité la plus puissante ; **risque et exigences d'approbation les plus élevés**.

Computer Use opère au niveau écran, souris et clavier — différent des outils navigateur et terminal — activez-le avec prudence.

## Ce qui est couvert

- Comment Computer Use diffère du navigateur et du terminal
- tâches pour lesquelles ça vaut la peine de l'activer
- Garde-fous pour individus et équipes

## Limites de capacité

| Couche | Capacité typique |
|---|---|
| Terminal | Shell, scripts, programmes CLI |
| Navigateur | DOM web, interaction limitée |
| Computer Use | Apps bureau, dialogues système, flux multi-fenêtres |

## En quoi ça diffère

Pensez-y comme :

- Agir sur tout le bureau
- Basculer entre plusieurs fenêtres
- Cliquer de vrais boutons et dialogues système

La surface d'interface et d'information qu'il peut toucher est donc généralement plus large.

Bon pour :

- Flux de clics répétitifs dans un logiciel de présentation sans API (sous supervision)
- Copier des données entre apps (si conforme)
- vérifier le comportement de l'App de bureau elle-même

Mauvais cas :

- Codage quotidien (IDE + terminal est plus rapide)
- Opérations de production sans surveillance
- Contourner logiciels de sécurité ou DRM

## Idées reçues courantes

### 1. Capacité plus forte = choix par défaut ?

Ça vaut surtout quand :

- La tâche implique vraiment une GUI bureau
- Aucun outil plus léger et sûr ne peut faire le travail

### 2. Regarder signifie faible risque ?

La présence humaine aide, mais vous pouvez encore :

- Mal cliquer sur des dialogues de confirmation
- Ouvrir des fenêtres qui devraient rester fermées
- Introduire dans le travail des informations sensibles visibles à l’écran

### 3. Remplace toute l'automatisation GUI ?

Il convient davantage à une aide ponctuelle, à la vérification d’un processus et aux étapes graphiques sans API qu’à une automatisation de production stable, durable et sans surveillance.

## Modèle de risque

Computer Use est proche de **confier clavier et souris à l'Agent** :

- Peut ouvrir mail, chat, gestionnaire de fichiers
- Peut mal cliquer sur des dialogues de confirmation
- L'écran peut montrer des notifications sensibles

Lecture obligatoire : [permissions et approbations](/fr/guide/foundations/permissions-and-approvals/), [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/)

## Quand l'envisager

Généralement inutile pour :

- Éditer du code
- Lancer des tests
- Voir des pages web
- Recherche

Envisagez quand vous devez :

- Opérer des applications bureau
- Couvrir plusieurs fenêtres GUI
- Atteindre une interface que ni navigateur ni terminal ne peuvent

## Usage recommandé

1. **Environnement dédié** : VM ou utilisateur secondaire ; pas de fenêtres privées à l'écran
2. **Minimiser la tâche** : « vérifier la formule dans Calculatrice » pas « gérer tout mon mail »
3. **Supervision humaine** : garder l’exécution visible et se tenir prêt à l’interrompre
4. **Enregistrements/logs** : rétrospectives d'équipe (les enregistrements peuvent contenir des données sensibles)
5. **Contrôle post-tâche** : système de fichiers, presse-papiers, applications ouvertes

L'entreprise peut désactiver par défaut — suivez la politique gérée.

## vs outil navigateur

```text
Besoin seulement d'une page web ?        → outil navigateur
Besoin d'apps hors IDE ?                 → Computer Use (plus de prudence)
Seulement code et tests ?                → terminal + outils fichier
```

Voir [sélection d'outils](/fr/guide/tools/tool-selection/)

## Exemple de prompt

```text
N'opérer que Calculatrice et l'app de test locale. Ne pas ouvrir mail, chat, gestionnaire de fichiers ou toute interface admin de production.
Si une confirmation système apparaît, arrêter et expliquer avant de continuer.
```

## Erreurs courantes

- Computer Use sur le bureau principal avec des projets non fiables
- Continuer pendant que 2FA, banque ou données clients sont à l'écran
- Traiter l'automatisation GUI comme stratégie de test complète

## Liste de contrôle d'acceptation

- [ ] Activé seulement dans un environnement isolé
- [ ] Le prompt liste apps autorisées et interdictions
- [ ] Contrôle post-tâche : pas de fichiers/réseau inattendus
- [ ] La politique d'org autorise la capacité
