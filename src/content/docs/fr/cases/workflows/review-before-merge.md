---
title: Revue avant fusion
description: Revue structurée du diff et des risques avec Codex avant la fusion — rôles humain–machine clairs.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La **revue avant fusion** intègre [qualité et vérification](/guide/quality/) au flux Git : avant la fusion d'une PR, utiliser Codex pour vérifier le diff, les tests, la sécurité et l'alignement avec la spécification. Les commentaires automatiques seuls ne remplacent pas la décision humaine de fusion.

## Ce que couvre cette page

- Répartition revue locale vs Cloud/CI
- Dimensions que les prompts de revue doivent couvrir
- Quand la signature humaine finale est obligatoire

## Approche minimale viable

**Local (auto-contrôle de l'auteur)**

```text
Comparer le diff de la branche actuelle à main (ne pas modifier le code pour l'instant) :
1. Dépasse-t-il le périmètre de l'issue ?
2. Risques de sécurité évidents (secrets, injection, permissions) ?
3. Tests ou documentation manquants ?
Produire une checklist avec étiquettes P0/P1.
```

**CI (garde d'équipe)**

- Version de prompt fixe + token en lecture seule
- Résultats dans un commentaire de PR ou un check run
- Voir [Automatisation de la revue de code](/guide/developer-platform/ci-cd/code-review-automation/)

## Dimensions de revue recommandées

| Dimension | Points d'attention |
|---|---|
| Exactitude | Logique, cas limites, gestion des erreurs |
| Tests | Couverture des nouveaux comportements |
| Sécurité | Secrets, injection, signaux de vulnérabilité des dépendances |
| Maintenabilité | Nommage, duplication, API publique |
| Spécification | Alignement avec l'issue/le document de spécification |

À associer à [Revoir les diffs](/guide/quality/review-diffs/) ; les éléments à haut risque suivent les [modèles d'approbation humaine](/cases/workflows/human-approval-patterns/).

## Erreurs courantes

- Le modèle se contente de « LGTM » sans détails
- Description complète de PR non désinfectée collée dans le prompt CI (risque d'injection)
- Revue validée mais tests CI jamais lancés
- Bot de fusion automatique activé sans protection de branche

## Limites de sécurité

- La revue utilise des permissions en lecture seule ; les corrections appartiennent à de **nouveaux commits** déclenchés par des humains
- Ne pas consigner de PII utilisateur ni de secrets dans les journaux de revue

## Liste de contrôle d'acceptation

- [ ] La sortie de revue est traçable vers des fichiers/lignes précis
- [ ] Les problèmes P0 bloquent la fusion ou sont corrigés
- [ ] Aligné avec la checklist de revue de l'équipe
- [ ] Le mainteneur humain a le dernier mot sur les points litigieux

## Chapitres connexes

- [Revue de code Cloud](/guide/web-and-cloud/code-review/)
- [Créer des pull requests](/guide/web-and-cloud/create-pull-requests/)

## Sources de référence

- KimYx0207 — chapitres Review/PR
- codex.bozhouai.com — flux Git/GitHub

---

**Statut :** verified  
**Produits concernés :** CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les cas d'usage publics actuels d'OpenAI Developers sur la revue de code et les pull requests, ainsi que les chapitres vérifiés sur la qualité, la revue des diffs et Cloud ; cette page confirme uniquement les principes stables de revue structurée avant fusion, revue en lecture seule et signature humaine finale.
