---
title: "Exemple : Skill d'automatisation"
description: Encapsuler des vérifications répétitives ou la génération de rapports en Skill.
locale: fr
source_locale: zh-CN
source_revision: 0d33e2d
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Exemple : Skill d'automatisation

## Squelette SKILL.md

```md
---
name: daily-report
description: Synthétise les changements d'hier, l'état des tests et les tâches en attente en Markdown de rapport quotidien. À utiliser quand l'utilisateur demande un rapport quotidien, du matériel de stand-up ou une synthèse d'avancement.
---

## Flux
1. Lire git log (plage horaire indiquée) et résumé de l'état CI
2. Lister éléments terminés, blocages, plan pour demain
3. Sortie vers reports/daily-YYYY-MM-DD.md
4. Ne pas envoyer d'e-mail ni de message sauf demande explicite

## scripts/
- scripts/collect-metrics.sh (optionnel)
```

## Liens

- [Cas : automatiser un rapport quotidien](/fr/cases/automate-a-daily-report/)
- [Tâches planifiées](/fr/skills/automations/scheduled-tasks/)

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Squelette indicatif d'un Skill de synthèse répétitive, toujours dans un modèle de workflow stable supportable par Codex/Skills, sans lier à un point d'entrée d'automatisation précis.  
**Dernière vérification :** 2026-07-26
