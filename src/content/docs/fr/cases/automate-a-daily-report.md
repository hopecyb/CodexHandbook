---
title: Automatiser un rapport quotidien
description: Transformer un travail de synthèse répétitif en script ou Skill réutilisable.
locale: fr
source_locale: zh-CN
source_revision: f03ed59
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Automatiser un rapport quotidien

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Équipes |
| Client | CLI |
| Durée estimée | 1–2 heures (première version) |

## 1. Objectif et contexte

**Objectif :** Générer automatiquement chaque jour un résumé des changements, des résultats de tests et de la liste des tâches en attente.

**Critères de succès :** Une commande ou un Skill produit un Markdown au format fixe ; en cas d'échec, code de sortie explicite.

## 3. Prompt recommandé

```text
Objectif : générer un rapport quotidien Markdown d'hier à aujourd'hui.
Contenu : résumé git log, état CI (si lisible), liste des PR ouvertes.
Sortie : reports/daily-YYYY-MM-DD.md
Contraintes : git en lecture seule ; ne pas push ; fournir scripts/generate-daily.sh pour exécution répétée.
```

## 4. Capitalisation

- [Exemple de Skill d'automatisation](/fr/skills/examples/automation-skill/)
- [Tâches planifiées](/fr/skills/automations/scheduled-tasks/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Automate bug triage » et « Turn feedback into actions » ; ce rapport quotidien est défini comme « Markdown au format fixe + code de sortie explicite + script ou Skill réutilisable », un mode d'automatisation stable, sans dépendre d'une intégration spécifique.
