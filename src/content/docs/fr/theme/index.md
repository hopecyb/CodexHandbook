---
title: Thèmes Codex
description: "Comprendre ce qu'est Codex Dream Skin, comment l'installer et changer d'image, pourquoi il utilise l'injection CDP, et quelles limites de sécurité vérifier avant d'utiliser des thèmes."
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-07-29
---

# Thèmes Codex

Changer la peau de Codex peut sembler être une simple affaire d'esthétique. En réalité, Codex Dream Skin propose une approche complète du thème de bureau : conserver les interactions natives de Codex, ne pas modifier le paquet officiel, et injecter depuis l'extérieur les fonds, couleurs et ambiances visuelles dans l'interface réelle.

## Qu'est-ce que Codex Dream Skin ?

Codex Dream Skin est un projet open source qui permet de personnaliser l'app de bureau Codex. Il place un fond d'écran 16:9 derrière Codex et l'adapte automatiquement au mode clair ou sombre, à la position du sujet et à la palette. La barre latérale, les cartes de suggestion, le sélecteur de projet et la zone de saisie restent des contrôles natifs interactifs.

![Codex Dream Skin appliquant un fond 16:9 à l'accueil de Codex](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

_Accueil réel de l'app de bureau Codex après application du thème ; barre latérale, cartes et zone de saisie restent natives._

L'approche diffère fortement des anciennes modifications binaires :

| Approche | Modifie les fichiers officiels | Casse la signature | Contrôles natifs utilisables | Liberté d'image |
| --- | --- | --- | --- | --- |
| Injection CDP (Dream Skin) | Non | Non | Oui | Élevée |
| Modification de `app.asar` | Oui | Oui | Partielle | Moyenne |
| Basculer clair/sombre officiellement | Non | Non | Oui | Aucune |

Modifier `app.asar` consistait à décompresser les ressources de Codex, modifier CSS et images, puis recompresser. C'est fragile : la signature devient invalide, chaque mise à jour peut imposer de recommencer, et les outils de sécurité peuvent bloquer l'app.

L'injection CDP ne modifie aucun binaire officiel. Elle injecte styles et scripts depuis l'extérieur via un port de débogage, sans toucher à `.app`, `app.asar` ni à la signature.

Ce que l'outil peut faire : changer de thème, changer d'image, enregistrer plusieurs thèmes et restaurer l'apparence officielle en une action.

Ce qu'il ne doit pas faire :

- Le script d'installation n'écrit pas silencieusement d'API Key ni de Base URL tierce ; thème et configuration de relais restent séparés.
- Il ne modifie pas le répertoire d'installation officiel ni la signature.
- CDP se limite à `127.0.0.1` ; pendant l'exécution du thème, évitez tout programme local d'origine inconnue.

Le projet précise qu'il ne s'agit pas d'un produit officiel OpenAI. En restaurant puis désinstallant, Codex revient à l'apparence officielle et la connexion CDP est coupée.

Liens du projet :

| Type | URL | Usage |
| --- | --- | --- |
| GitHub du projet | [github.com/Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin) | Lire le code source, le README, les issues et les guides d'installation |
| Site du projet | [codex-dream-skin.org](https://codex-dream-skin.org/) | Lire la présentation, l'explication technique, les limites de sécurité et les tutoriels |
| Téléchargements | [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) | Télécharger les installateurs macOS `.dmg` et Windows `.exe` |
| Bibliothèque de thèmes / Studio en ligne | [DreamSkin.cc](https://dreamskin.cc/) | Explorer, essayer, créer et proposer des thèmes |

## Installation et prise en main

Avant l'installation, ouvrez Codex une fois et vérifiez que l'app se lance, se connecte et se ferme correctement. L'outil pourra ainsi trouver le bon environnement local.

### macOS

Sur macOS, téléchargez généralement le `.dmg` depuis les Releases du projet. Après installation, glissez `Codex Dream Skin.app` dans Applications, puis gérez thèmes, fonds et restauration depuis la barre de menus.

Si macOS indique que l'app est « endommagée » ou refuse de l'ouvrir, Gatekeeper bloque probablement une app non signée. N'autorisez l'ouverture dans Réglages système > Confidentialité et sécurité qu'après avoir vérifié la source.

### Windows

Sur Windows, téléchargez généralement l'installateur depuis les Releases, ou suivez le flux PowerShell documenté. Après installation, utilisez l'icône de la zone de notification pour gérer thèmes et fonds.

Si SmartScreen affiche un avertissement bleu, l'installateur manque souvent d'un certificat de signature. Continuez seulement si la source est fiable.

### Problèmes courants

| Symptôme | Cause | Solution |
| --- | --- | --- |
| macOS indique « endommagée » | App non signée bloquée par Gatekeeper | Réglages système -> Confidentialité et sécurité -> Ouvrir quand même |
| Avertissement bleu SmartScreen | Certificat de signature absent | Informations complémentaires -> Exécuter quand même |
| Aucun effet après installation | Codex n'a pas été lancé une première fois | Ouvrir Codex, se connecter, quitter, puis installer Dream Skin |
| Le thème casse après une mise à jour de Codex | Des chemins internes ont pu changer | Télécharger le dernier installateur et installer par-dessus |

Une installation par-dessus ne supprime pas les thèmes ni les images existants.

## Images et gestion des thèmes

Après installation, cliquez sur « Changer le fond » depuis la barre de menus macOS ou la zone de notification Windows, puis choisissez une image.

![Aperçu et changement de thème dans Codex Dream Skin](/theme/codex-dream-skin/article/codex-dream-skin-gallery.jpg)

_Après changement d'image, vérifiez aussi l'accueil, la barre latérale, la zone de saisie et les pages de tâches pour garder une interface lisible en usage réel._

Une fois l'image choisie, le moteur analyse localement luminosité, couleur dominante, position du sujet et côté le moins chargé, puis génère des variables adaptées. Les thèmes peuvent être enregistrés, nommés et changés en une action.

Gothic Void Crusade est le thème par défaut de l'installateur public, contribué par la communauté. Vous pouvez aussi importer n'importe quel fond pur en 16:9.

Règles d'image :

- Recommandé : `2560 x 1440` en 16:9, sans fenêtre, barre latérale, texte ni logo incrusté.
- Ne placez pas le sujet sur la zone de saisie, la barre latérale ou les cartes de Codex.
- Évitez les fonds trop lumineux, chargés ou contrastés.
- Avant partage public ou usage commercial, vérifiez les droits d'image, personnages, marques, polices et propriété intellectuelle.

Les images hors de ces règles peuvent fonctionner, mais le contenu natif peut masquer le sujet ou réduire la lisibilité.

## Comment ça marche

### Injection CDP

CDP, Chrome DevTools Protocol, est le protocole de débogage à distance de Chromium. Les DevTools de Chrome l'utilisent pour déboguer des pages mobiles : le navigateur ouvre un port local, puis un outil externe peut injecter CSS et JavaScript.

L'app de bureau Codex est construite avec Electron, donc avec Chromium. Le flux de Dream Skin peut se résumer ainsi :

![Schéma d'injection CDP de l'article](/theme/codex-dream-skin/article/cdp-injection-flow.png)

```text
Démarrer l'outil de thème
  -> Ouvrir Codex avec un point CDP local
  -> Se connecter au processus de rendu Chromium de Codex
  -> Injecter le CSS du thème et un DOM décoratif
  -> Codex continue de fonctionner, tandis que la couche de thème prend l'apparence en charge
```

Lors de l'arrêt de l'injecteur, l'outil vérifie PID, chemin de l'exécutable et heure de démarrage pour éviter de fermer le mauvais processus.

Le CSS injecté préserve les interactions natives de la barre latérale, de la zone de saisie et des cartes. Le fond reste sous les contrôles, avec un voile dégradé translucide pour préserver la lisibilité.

### Couleurs adaptatives : calcul local, pas d'envoi

Quand l'image change, Dream Skin la réduit localement dans Canvas, extrait couleur dominante, luminosité et position du sujet, puis calcule des variables CSS en HSL : accent, secondaire, surbrillance, etc.

En mode sombre, il part d'une dominante foncée pour calculer accents, couleurs secondaires et gris neutres. En mode clair, il part de gris clairs et calcule texte et accents plus sombres. À chaque changement d'image, toute la palette est recalculée.

Côté routes, l'accueil garde le fond complet et le voile dégradé ; dans une page de tâche, le fond devient une couche ambiante plus discrète pour laisser la priorité au contenu.

## Pour finir

L'injection CDP consiste à injecter des styles depuis l'extérieur de l'application, sans modifier les binaires officiels. Cette idée ne concerne pas seulement Codex : toute app Electron pourrait théoriquement personnaliser ses thèmes ainsi, si elle prend en charge un port CDP.

Le besoin d'un environnement de développement personnalisé est réel. Un bon thème n'est pas seulement « plus cool » : il doit préserver les interactions natives, être restaurable, inspectable, et ne pas mélanger amélioration visuelle et configuration du modèle.
