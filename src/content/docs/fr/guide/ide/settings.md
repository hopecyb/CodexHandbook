---
title: Paramètres de l'extension IDE
description: Modèle, Approbations, Contexte et configuration du comportement de l'extension dans l'IDE.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les paramètres de l'extension IDE relient **préférences personnelles** et **règles de projet** : quel modèle, rigueur des Approbations, attachement automatique des fichiers ouverts, etc. Aligné avec [Bases de configuration](/guide/customization/configuration/config-basics/) globales ; cette page se concentre sur les options éditeur courantes.

## Ce qui est couvert

- Paramètres IDE vs config utilisateur vs `AGENTS.md`
- Paramètres que les développeurs ajustent le plus souvent
- Comment les équipes alignent les valeurs par défaut

## Ce que contrôlent ces paramètres

Les paramètres IDE sont plus proches de : **habitudes par défaut quand Codex travaille avec vous dans l'éditeur**.

Ils répondent à des questions comme :

- Modèle par défaut
- Rigueur d'Approbation par défaut
- Attacher automatiquement fichier et sélection actuels

Ils ne définissent pas les règles de projet — ils façonnent si l'éditeur paraît fluide et prévisible.

## Couches de configuration (rappel)

| Couche | Exemples | Priorité |
|---|---|---|
| Politique gérée org | Interdire d'assouplir le Bac à sable | La plus haute |
| `AGENTS.md` projet / config projet | Commandes de test, conventions de répertoire | Élevée |
| Interface paramètres extension IDE | Modèle par défaut, disposition du panneau | Moyenne |
| Prompt de Tâche unique | « Pas de réseau cette fois » | Niveau Tâche |

Voir [portée et priorité](/guide/customization/agents-md/scope-and-precedence/)

## Idées reçues courantes

### Les paramètres IDE ne sont pas les standards de projet

Ne confondez pas « comment j'aime configurer mon éditeur » avec « comment ce projet doit fonctionner ».

- Paramètres éditeur → UX personnelle
- `AGENTS.md` et config projet → accord d'équipe

Liés mais pas identiques.

### Plus de Contexte automatique n'est pas toujours mieux

Attacher automatiquement fichier actuel, sélection et onglets aide jusqu'à diluer la focalisation de la Tâche.

« Assez » bat « tout ouvrir ».

## Paramètres couramment ajustés (conceptuels)

### Modèle et raisonnement

Affecte vitesse vs qualité sur les Tâches difficiles. Les équipes peuvent noter le niveau de modèle recommandé dans le README pour que tout le monde ne débogue pas des valeurs par défaut différentes.

### Approbations et Bac à sable

Correspond à [permissions et Approbations](/guide/foundations/permissions-and-approvals/) :

- Débutants : garder défaut ou plus strict
- Dépôts de confiance : assouplir prudemment ; ne pas mélanger avec répertoires de secrets de production

CLI et IDE devraient partager la **même base de sécurité** ; CLI : [Configuration CLI](/guide/cli/configuration/).

### Comportement du Contexte

Certaines extensions configurent :

- Inclure automatiquement fichier / sélection actuels
- Lire `AGENTS.md`
- Options de fenêtre de Contexte (selon version)

Trop de Contexte auto ajoute du bruit ; voir [garder le Contexte focalisé](/guide/context/keep-context-focused/).

### Connexion et compte

Partagé avec [connexion et authentification](/guide/getting-started/sign-in-and-authentication/) ; redémarrer la session d'extension après changement de compte.

## Alignement d'équipe

1. Mettre les éléments **à respecter obligatoirement** dans le dépôt (`AGENTS.md` + config projet optionnelle)
2. Garder les **habitudes personnelles** dans les paramètres IDE — pas dans Git
3. Intégration nouveau membre : vérifier la version d'extension selon [Installation IDE](/guide/ide/installation/)

## Focus première fois

À la première configuration, vérifiez trois catégories :

1. Modèle et niveau de raisonnement
2. Approbation / sécurité
3. Contexte automatique

Les ajuster couvre la plupart des frictions réelles.

## Dépannage

| Symptôme | Vérifier |
|---|---|
| Paramètres non appliqués | Override politique org ? Recharger la fenêtre ? |
| Diffère de la CLI | Comparer [référence de configuration](/guide/reference/configuration-reference/) |
| Extension non réactive | [Dépannage IDE](/guide/ide/troubleshooting/) |

Les paramètres IDE sont comment vous et Codex coopérez dans l'éditeur ; les règles de projet sont une couche séparée — ne les mélangez pas.

## Références

- Paramètres IDE OpenAI Codex
- stormzhang `18-config.md`, `09-ide.md`

---

**Statut :** obsolète  
**Produits concernés :** IDE  
**Note de revue :** Cette page couvre entrées de paramètres IDE, Contexte auto, préférences d'Approbation et overrides org — noms et interface changent souvent ; manque de doc officielle forte sur les paramètres pour supporter toute la page.  
**Dernière vérification :** 2026-07-26
