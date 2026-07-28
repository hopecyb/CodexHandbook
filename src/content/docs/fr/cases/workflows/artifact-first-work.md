---
title: Travail orienté livrables
description: Convenir d'abord de la forme et du chemin du livrable final, puis déduire les étapes — adapté aux docs, configurations, rapports et autres livrables.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Orienté livrables** signifie clarifier la forme et l'emplacement du livrable avant que Codex ne déduise les étapes. Cela convient aux tâches à sortie claire — documentation Markdown, OpenAPI, scripts de migration, plans de diapositives — et peut s'associer au [travail piloté par la spécification](/cases/workflows/specification-driven-work/).

## Ce que couvre cette page

- Comment décrire la structure du livrable plutôt que les détails du processus
- Vérifications de cohérence pour les livrables multi-fichiers
- Alignement avec les capacités [Fichiers et livrables](/guide/files-and-artifacts/)

## Approche minimale viable

```text
Livrables cibles :
- docs/api/auth.md (3 sections : aperçu, points de terminaison, codes d'erreur)
- Style cohérent avec @docs/api/users.md

Produire d'abord le plan et les points clés par section ; ne pas rédiger le texte complet ;
après ma confirmation, générer et vérifier les liens internes.
```

## Flux de travail recommandé

```text
Définir la liste des livrables (chemin + format + référence d'exemple)
    → Plan ou fichiers squelette
    → Confirmation humaine
    → Remplir le contenu + liens croisés
    → Vérifier (lint, contrôle de liens, aperçu)
```

Pour les livrables visuels, demander des captures d'écran ou des notes d'aperçu — voir [Vérifier les livrables](/guide/quality/verify-artifacts/).

## Erreurs courantes

- Chemins de livrables non conformes aux conventions du dépôt (mauvais répertoire)
- Un seul fichier généré, sans mise à jour de la navigation ni de l'index
- Pas de référence d'exemple — style incohérent
- Livrables binaires (pptx/docx) sans indication sur l'ouverture et l'acceptation manuelle

## Limites de sécurité

- Le contenu généré avec des droits tiers nécessite une revue de conformité humaine
- Ne pas écraser les chemins de configuration de production — produire d'abord sur une branche ou sous `draft/`

## Liste de contrôle d'acceptation

- [ ] Tous les fichiers déclarés existent et s'ouvrent
- [ ] Le format correspond à l'exemple de référence
- [ ] Liens / table des matières / frontmatter valides
- [ ] Conforme à la [Définition de terminé](/prompts/define-done/)

## Sources de référence

- codex.bozhouai.com — tâches de documentation et modèles
- KimYx0207 — flux de travail de production de contenu

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés sur les fichiers et livrables, la définition de terminé et la vérification des livrables ; le contenu se concentre sur la méthode stable « convenir des livrables d'abord, puis déduire les étapes ».
