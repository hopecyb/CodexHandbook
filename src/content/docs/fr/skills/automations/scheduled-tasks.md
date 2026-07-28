---
title: "Tâches planifiées et en arrière-plan"
description: Automations — exécuter Codex sans surveillance selon des déclencheurs ; concevoir obligatoirement approbations et conditions de sortie.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les **Automations** permettent à Codex d'exécuter des tâches automatiquement selon un **calendrier, des événements de dépôt ou des déclencheurs externes** : vérification des mises à jour de dépendances, synchronisation documentaire, scan de santé périodique, etc.

## Contenu de cette page

- Quand automatiser et quand garder un humain dans la boucle
- Quatre axes de conception : déclenchement, exécution, notification, échec
- Lien avec les tâches Cloud, scripts CLI locaux

## Comparaison avec les tâches manuelles

| | Tâche manuelle | Automation |
|---|---|---|
| Démarrage | Vous lancez | Planification/événement |
| Supervision | Vous pouvez interrompre | Notifications et journaux requis |
| Risque | Jugement sur le moment | Erreurs pouvant se propager en masse |
| Convient à | Exploration, refactorisation | Répétitif, règles claires |

## Conception d'automatisation sécurisée

### 1. Conditions de déclenchement explicites

```text
Bon : chaque lundi à 09h00, vérifier les liens morts dans docs/
Mauvais : surveiller en continu et modifier le code automatiquement
```

### 2. Permissions minimales

- Scan en lecture seule préférable à la soumission automatique
- Si ouverture automatique de PR : compte bot dédié et protection de branche

### 3. Conditions de sortie

- Pause après N échecs consécutifs
- Diff dépassant un seuil de lignes → passage en manuel
- Arrêt si répertoire interdit par `AGENTS.md`

### 4. Notifications

- Slack/e-mail/mobile : terminé, échec, approbation requise
- Conservation des journaux pour audit

### 5. Points de relecture humaine

| Peut être entièrement automatique | Nécessite un humain |
|---|---|
| Générer un brouillon de PR | Fusionner sur main |
| Lister les dépendances obsolètes | Monter une version majeure |
| Synchroniser la documentation publique | Publier une annonce externe |

## Modèles typiques

### Maintenance périodique

- Rapport de vulnérabilités des dépendances → ouvrir une issue, ne pas modifier le lockfile directement
- Rappel de diff entre fichiers de traduction et texte source

### Piloté par événements

- Nouvelle PR ouverte → exécuter le Skill review (commentaires, pas de push)
- Issue étiquetée `bug` → brouillon d'étapes de reproduction

### Tâches longues

Découper en plusieurs Automations + [Reprise et transfert](/guide/agent-work/handoff-and-resume/), éviter d'épuiser le contexte en une seule fois.

## Lien avec Cloud / CLI

- **Cloud** : adapté à l'automatisation distante intégrée à GitHub
- **CLI + cron/CI** : adapté au réseau interne et pipelines personnalisés
- Choix : [Local et Cloud](/guide/foundations/local-vs-cloud/) et [Web et Cloud](/guide/web-and-cloud/)

## Erreurs courantes

- Automatisation faisant `git push` directement sur la branche principale
- Pas d'alerte en cas d'échec, dépôt qui se dégrade en silence
- Tâche exploratoire planifiée — gaspille le quota et difficile à valider

## Liste de validation

- [ ] Déclenchement, permissions, notifications et conditions de sortie documentés
- [ ] Un cycle complet testé sur un fork ou dépôt de test
- [ ] L'équipe connaît le compte bot et les règles d'approbation

## Sources de référence
- Documentation officielle OpenAI Codex Cloud / Automations
---

**Statut :** obsolète  
**Produits concernés :** Cloud / App / CLI  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page décrit des capacités produit actuelles (planification, événements, exécution en arrière-plan) ; les points d'entrée et la gouvernance restent volatils et la documentation publique officielle est insuffisante.
