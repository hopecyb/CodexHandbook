---
title: Computer Use
description: Contrôle GUI avancé via écran et périphériques d'entrée — cas d'usage, risques et Approbations.
locale: fr
source_locale: zh-CN
source_revision: c783afc
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Computer Use** permet à l'Agent de voir l'écran, déplacer le pointeur et taper — au-delà du navigateur ou du terminal seul. Capacité la plus puissante ; **risque et exigences d'Approbation les plus élevés**.

Computer Use opère au niveau écran, souris et clavier — différent des outils navigateur et terminal — activez-le avec prudence.

## Ce qui est couvert

- Comment Computer Use diffère du navigateur et du terminal
- Tâches pour lesquelles ça vaut la peine de l'activer
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

- Flux de clics répétitifs dans un logiciel de démo sans API (sous supervision)
- Copier des données entre apps (si conforme)
- Vérifier le comportement de l'App de bureau elle-même

Mauvais cas :

- Codage quotidien (IDE + terminal est plus rapide)
- Opérations de production sans surveillance
- Contourner logiciels de sécurité ou DRM

## Idées reçues courantes

### 1. Capacité plus forte = choix par défaut ?

Ça vaut surtout quand :

- La Tâche implique vraiment une GUI bureau
- Aucun outil plus léger et sûr ne peut faire le travail

### 2. Regarder signifie faible risque ?

La présence humaine aide, mais vous pouvez encore :

- Mal cliquer sur des dialogues de confirmation
- Ouvrir des fenêtres qui devraient rester fermées
- Tirer des infos sensibles à l'écran dans le flux de travail

### 3. Remplace toute l'automatisation GUI ?

Mieux pour aide ad hoc, vérification de flux et étapes GUI sans API — pas pour automatisation de production stable longue durée sans surveillance.

## Modèle de risque

Computer Use est proche de **confier clavier et souris à l'Agent** :

- Peut ouvrir mail, chat, gestionnaire de fichiers
- Peut mal cliquer sur des dialogues de confirmation
- L'écran peut montrer des notifications sensibles

Lecture obligatoire : [permissions et Approbations](/fr/guide/foundations/permissions-and-approvals/), [Bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/)

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
2. **Minimiser la Tâche** : « Vérifier la formule dans Calculatrice » pas « gérer tout mon mail »
3. **Humain dans la boucle** : rester visible ; prêt à interrompre
4. **Enregistrements/logs** : rétrospectives d'équipe (les enregistrements peuvent contenir des données sensibles)
5. **Contrôle post-Tâche** : système de fichiers, presse-papiers, applications ouvertes

L'entreprise peut désactiver par défaut — suivez la politique gérée.

## vs outil navigateur

```text
Besoin seulement d'une page web ?        → outil navigateur
Besoin d'apps hors IDE ?                 → Computer Use (plus de prudence)
Seulement code et tests ?                → terminal + outils fichier
```

Voir [sélection d'outils](/fr/guide/tools/tool-selection/)

## Exemple de Prompt

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
- [ ] Le Prompt liste apps autorisées et interdictions
- [ ] Contrôle post-Tâche : pas de fichiers/réseau inattendus
- [ ] La politique d'org autorise la capacité

---

**Statut :** vérifié  
**Produits concernés :** App / Codex (selon version, région et permission)  
**Base de vérification :** Les matériaux du centre d'aide OpenAI sur les plans Codex et capacités bureau listent encore Computer Use ; les notes de version Business confirment Codex Computer Use sur Windows à partir du 2026-05-29. Cette page résume modèle de risque, cas d'usage et limites d'Approbation — sans prétendre à une disponibilité par défaut universelle.  
**Dernière vérification :** 2026-07-26
