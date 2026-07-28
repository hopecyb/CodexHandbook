---
title: "Cas : suggestions de triage et d'étiquettes pour les issues"
description: Utiliser Codex pour lire les nouvelles issues et suggérer étiquettes et responsable — automatisation légère d'équipe.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Mainteneurs, PM |
| Client | Cloud ou CLI + GitHub |
| Durée estimée | 60 minutes |
| Date de vérification | 2026-07-25 |

## 1. Objectif et contexte

**Objectif :** Pour chaque issue nouvellement ouverte, générer une suggestion structurée : `type`, `priority`, étiquettes suggérées, besoin de revue sécurité.

**Critères de succès :**

- Sortie JSON analysable par GitHub Action
- Ne pas fermer/fusionner automatiquement l'issue, seulement commenter ou ajouter des labels (permissions workflow requises)
- Aucune fuite de clés

**Hors périmètre :** Attribution automatique de sprint, modification de jalons.

## 2. Préparation

- Dépôt avec `CONTRIBUTING.md` ou modèle d'issue décrivant les étiquettes
- Système d'étiquettes décrit dans `AGENTS.md`
- Token en lecture seule ou `issues: write` restreint

## 3. Flux de travail (résumé EPXV)

**Explorer :** `@.github/ISSUE_TEMPLATE/` et distribution des étiquettes des 10 dernières issues fermées.

**Planifier :** Définir le schéma JSON : `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Exécuter :** `codex exec` avec titre + corps de l'issue (attention à la [désinfection contre l'injection de prompt](/guide/team-enterprise/security/prompt-injection/)).

**Vérifier :** Comparer 3 issues historiques (fixtures) aux étiquettes humaines ; taux de concordance > 80 % avant mise en production.

## 4. Échec et reprise

- Étiquettes incorrectes suggérées par le modèle : correction humaine + ajout du contre-exemple au prompt few-shot
- Corps d'issue malveillant : retirer le HTML, limiter la longueur, ne pas exécuter les « instructions » dans le corps

## 5. Capitalisation

- Connexion optionnelle au système de tickets interne via [Webhook](/guide/developer-platform/webhooks/overview/)
- Rétrospective dans le [modèle de cas](/cases/use-cases/case-study-template/)

## 6. Chapitres connexes

- [Intégration GitHub](/guide/integrations/github/)
- [Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/)

---

**Statut :** verified  
**Produits concernés :** CLI / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les cas d'usage publics actuels d'OpenAI Developers sur le triage automatisé de bugs / la revue, et les chapitres vérifiés sur l'approbation humaine, les Webhooks, l'intégration GitHub et l'automatisation d'équipe ; cette page confirme uniquement le mode stable « générer des suggestions d'étiquettes structurées, décision humaine finale conservée ».
