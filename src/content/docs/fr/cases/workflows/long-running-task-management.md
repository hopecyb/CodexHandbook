---
title: Gestion des tâches longues
description: Grandes tâches sur plusieurs heures ou sessions — points de contrôle, compression, délégation et conditions de sortie.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les tâches longues posent souvent les mêmes problèmes : **contexte saturé**, **personne absente**, **direction qui dérive**, **moment d'arrêt flou**. Cette page applique [exploration—planification—exécution—vérification](/cases/workflows/explore-plan-execute-verify/) aux scénarios de plusieurs heures ou de plusieurs sessions.

## Ce que couvre cette page

- Quand découper les tâches vs déléguer à Cloud
- Quoi écrire dans les points de contrôle et les notes d'état
- Conditions de sortie pour les exécutions longues automatisées

Connexes : [Déléguer et suivre](/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/skills/automations/scheduled-tasks/)

## Signaux d'une tâche longue

- Temps machine estimé supérieur à 30 minutes
- Plusieurs sous-systèmes ou >20 fichiers impliqués
- Attente de retour humain ou d'API externes
- Besoin d'exécuter des tests E2E complets / de performance

Si l'un s'applique, rédiger d'abord le plan — ne pas enchaîner la conversation jusqu'au bout.

## Gestion en trois phases

### 1. Geler le plan

Produire un plan écrit : périmètre, non-objectifs, jalons, commandes d'acceptation. Obtenir la validation humaine avant une exécution à grande échelle.

[Planification](/guide/agent-work/planning/) · [Sous-agents](/guide/agent-work/subagents/)

### 2. Points de contrôle

Après chaque jalon :

- Commit ou stash d'un incrément vérifiable
- Mettre à jour `PROGRESS.md` ou un commentaire d'issue : ce qui est terminé, la suite, les blocages
- Quand le contexte est plein, utiliser la [compression](/guide/context/compaction/) ou ouvrir une nouvelle session + lier le fichier de progression

### 3. Clôture ou délégation

- Capacité locale insuffisante → [délégation Cloud](/guide/web-and-cloud/delegate-and-follow-up/)
- Surveillance continue → Automation + **max iterations / date limite** explicites

## Conditions de sortie (indispensables pour l'automatisation)

| Condition | Description |
|---|---|
| Limite de temps | Alerte si aucun progrès en 4 h |
| Limite d'itérations | Arrêt après 3 échecs sur le même test |
| Porte humaine | Doit @ quelqu'un avant de modifier la config production |
| Critères de succès | Tests au vert + PR ouverte |

## Erreurs courantes

- Pas de fichier PROGRESS — travail dupliqué après changement de session
- Tâche longue sans non-objectifs ; l'Agent « range tout le dépôt » en passant
- Tâche Cloud laissée sans approbation toute la nuit

## Liste de contrôle d'acceptation

- [ ] Document de plan existant avant le début de la tâche longue
- [ ] Au moins deux points de contrôle avec des diffs vérifiables
- [ ] Savoir comment mettre en pause, reprendre ou transférer

## Sources de référence

- codex.bozhouai.com — tâches longues et flux standard
- freestylefly/CodexGuide — capitalisation de tâches
- stormzhang `14-workflows.md`

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les cas d'usage publics actuels d'OpenAI Developers sur les objectifs à long terme et la collaboration sur tâches longues, ainsi que les chapitres vérifiés sur le transfert/reprise, la planification, la compression et la délégation ; cette page ne couvre que les méthodes stables pour les points de contrôle, le transfert et les conditions de sortie des tâches longues.
