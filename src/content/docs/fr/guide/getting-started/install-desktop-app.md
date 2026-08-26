---
title: Installer l'App de bureau
description: Installer l'App de bureau ChatGPT et y ouvrir un espace de travail Codex.
locale: fr
source_locale: zh-CN
source_revision: 89d6303
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Dans ce manuel, « App de bureau » désigne **l'espace de travail Codex dans l'App de bureau ChatGPT actuelle**. Des versions officielles sont disponibles pour macOS, Windows et Linux.

## Installation

1. Ouvrez la [documentation officielle de l'App de bureau ChatGPT](https://learn.chatgpt.com/docs/app).
2. Téléchargez depuis le point d'entrée officiel le programme d'installation correspondant à votre système d'exploitation.
3. Installez et ouvrez ChatGPT, puis connectez-vous avec votre compte ChatGPT ou une autre méthode disponible.
4. Démarrez une conversation, créez un projet ou ouvrez un dossier d'entraînement.
5. Ouvrez Codex, créez une tâche et décrivez le résultat attendu.

Ne téléchargez pas de programme d'installation depuis des sites tiers trouvés dans les résultats de recherche. Sur un appareil géré, respectez les règles de distribution et de mise à jour des logiciels de votre organisation.

## Vérification minimale après l'installation

Préparez un répertoire d'entraînement sans secret, puis confirmez les points suivants :

- l'App s'ouvre et affiche le compte ou l'espace de travail actuel ;
- vous pouvez ouvrir le répertoire ou ajouter des fichiers à un projet ;
- vous pouvez créer une tâche Codex et recevoir une réponse ;
- l'accès aux fichiers se limite à ce dont la tâche a besoin ;
- vous savez où trouver les résultats de la tâche, les modifications de fichiers et les contrôles d'autorisation.

Utilisez ce test rapide en lecture seule :

```text
Lis ce répertoire sans modifier les fichiers. Indique les fichiers qu'il contient,
le type de projet dont il pourrait s'agir et les noms de fichiers qui justifient ta conclusion.
```

## Problèmes courants

### L'App s'ouvre, mais Codex est absent

Vérifiez le compte, l'espace de travail et l'accès lié au forfait actuels, puis demandez-vous si l'organisation a désactivé cette fonctionnalité. Une réinstallation ne contourne ni les règles du compte ni celles de l'administrateur.

### Le système d'exploitation demande l'accès aux fichiers, à l'accessibilité ou au contrôle d'applications

Déterminez si la tâche en cours en a réellement besoin. L'ouverture d'un répertoire d'entraînement ne justifie pas un accès sans rapport au disque ou au système. Consultez [Autorisations et bac à sable](/fr/guide/permissions-and-sandbox/).

### L'interface diffère d'une capture d'écran

L'App évolue rapidement. La réussite consiste à pouvoir se connecter, choisir un emplacement de travail, démarrer une tâche et examiner son résultat, et non à retrouver un bouton à des coordonnées fixes.

Consultez [Installation et première utilisation](/fr/guide/desktop-app/installation-and-interface/) pour découvrir l'interface et [Dépannage de l'App de bureau](/fr/guide/desktop-app/troubleshooting/) en cas d'échec.

---

**Statut :** vérifié

**Produits concernés :** App

**Base de vérification :** le guide de démarrage rapide officiel actuel de l'App propose des téléchargements pour macOS, Windows et Linux, puis invite les utilisateurs connectés à choisir une conversation, un projet ou un dossier. Cette page évite volontairement les positions de boutons et les noms de paquets susceptibles d'évoluer.

**Dernière vérification :** 2026-08-26
