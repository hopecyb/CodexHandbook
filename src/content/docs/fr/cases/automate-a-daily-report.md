---
caseCategory: team
directoryOrder: 110
contentType: case
outputs: [markdown]
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Automate bug triage » et « Turn feedback into actions » ; ce rapport quotidien est défini comme « Markdown au format fixe + code de sortie explicite + script ou Skill réutilisable », un mode d'automatisation stable, sans dépendre d'une intégration spécifique."
  checkedAt: "2026-07-26"
title: Automatiser un rapport quotidien
description: Transformer un travail de synthèse répétitif en script ou Skill réutilisable.
locale: fr
source_locale: zh-CN
source_revision: "2149e0a"
translation_status: reviewed
translated_at: 2026-10-24
reviewed_at: 2026-10-26
---

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Équipes |
| Client | CLI |
| Durée estimée | 1–2 heures (première version) |

## 1. Objectif et contexte

**Objectif :** Générer automatiquement chaque jour un résumé des changements, des résultats de tests et de la liste des tâches en attente.

**Critères de succès :** Une commande ou un Skill produit un Markdown au format fixe ; en cas d'échec, code de sortie explicite.

## 2. Prompt recommandé

```text
Objectif : générer un rapport quotidien Markdown d'hier à aujourd'hui.
Contenu : résumé git log, état CI (si lisible), liste des PR ouvertes.
Sortie : reports/daily-YYYY-MM-DD.md
Contraintes : git en lecture seule ; ne pas push ; fournir scripts/generate-daily.sh pour exécution répétée.
```

## 3. Capitalisation

- [Exemple de Skill d'automatisation](/fr/skills/examples/automation-skill/)
- [Tâches planifiées](/fr/skills/automations/scheduled-tasks/)
