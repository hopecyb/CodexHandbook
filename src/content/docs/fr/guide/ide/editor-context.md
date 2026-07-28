---
title: Contexte éditeur
description: Comment l'extension IDE transmet fichiers ouverts, espace de travail et règles de projet à Codex.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Dans l'IDE, Codex reçoit plus que votre Prompt — il reçoit automatiquement **l'état de l'éditeur**. C'est l'avantage central de l'IDE sur la CLI. Comprendre d'où vient le Contexte évite la frustration « le fichier est ouvert mais il l'a ignoré ».

Codex IDE ne lit pas seulement ce que vous tapez — il référence aussi ce que vous regardez dans l'éditeur.

## Ce qui est couvert

- Quel Contexte l'IDE attache automatiquement
- Comment cela s'empile avec fichiers @, sélection et AGENTS.md
- Réduire le bruit et améliorer le taux de réussite

## Sources de Contexte (couches conceptuelles)

| Source | Qui contrôle | Contenu typique |
|---|---|---|
| Racine espace de travail | Dossier ouvert | Structure projet, `AGENTS.md`, fichiers de config |
| Fichiers ouverts | Onglets éditeur | Source que vous éditez |
| Sélection | Code surligné | Fonction, extrait d'erreur |
| @ explicite | Chemins @ dans le chat | Fichiers cross-répertoire, docs |
| Règles projet | `AGENTS.md` etc. dans le dépôt | Standards de code, commandes de test |

Priorité et conflits : [priorité du Contexte](/guide/context/context-priority/).

## Flux de travail recommandé

1. **Ouvrez la racine du dépôt comme espace de travail**, pas seulement un sous-dossier (exceptions monorepo selon doc d'équipe)
2. Pour des modifications locales, **sélectionnez le code pertinent** puis décrivez la Tâche → [sélection et fichiers ouverts](/guide/ide/selected-code-and-open-files/)
3. Pour du travail cross-module, @ les fichiers clés — ne supposez pas « il cherchera tout seul »
4. Dans les longues sessions, [compacter le Contexte](/guide/context/compaction/) ou démarrez un nouveau fil périodiquement

## Différence avec la CLI

| | Extension IDE | CLI |
|---|---|---|
| Conscience des fichiers | Forte (fichiers ouverts dans le Contexte) | Besoin de `--cwd` et lectures d'outils |
| Sélection | Native | Coller ou spécifier des chemins |
| Idéal pour | Modifications au niveau ligne, expliquer le code | Scripts, CI, environnements headless |

## Questions courantes

### 1. Le fichier est ouvert — pourquoi n'a-t-il pas changé ce que j'attendais ?

« Ouvert » ne signifie pas « la focalisation est évidente ».

Si le périmètre de la Tâche reste vague, il peut lire d'autre matériel ou manquer l'extrait qui vous importe.

### 2. Plus de fichiers ouverts = mieux ?

Trop de fichiers ouverts non liés ajoutent du bruit et diluent la focalisation.

### 3. Le Contexte automatique signifie que je peux sauter une description claire de Tâche ?

Le Contexte aide ; il ne remplace pas d'énoncer objectif, contraintes et critères de terminé.

Le Contexte IDE assiste — il ne devine pas pour vous. Un périmètre fichier plus serré signifie généralement des résultats plus stables.

## Informations sensibles

Ne laissez pas `.env` avec secrets épinglé ouvert ; voir [Contexte sensible](/guide/context/sensitive-context/).

Rédigez logs et données clients avant de coller ; l'IDE ne juge pas la conformité pour vous.

## Erreurs courantes

- Attendre `AGENTS.md` en mode fichier unique sans espace de travail
- Ouvrir beaucoup de gros fichiers non liés, remplissant la fenêtre de Contexte
- Dire « cette fonction » sans sélectionner ou @-mentionner le fichier

## Liste de contrôle d'acceptation

- [ ] La racine de l'espace de travail est correcte
- [ ] 1–3 fichiers pertinents à la Tâche ouverts ou @-mentionnés
- [ ] Les commandes de test dans `AGENTS.md` correspondent à l'usage terminal IDE

## Références

- [Contexte de fichiers et dossiers](/guide/context/file-and-folder-context/)
- stormzhang `09-ide.md`

---

**Statut :** vérifié  
**Produits concernés :** IDE  
**Base de vérification :** Le centre d'aide OpenAI positionne encore l'extension IDE comme entrée principale associée aux outils locaux ; cette page ne suppose pas de boutons éditeur spécifiques — elle résume espace de travail, fichiers ouverts, sélection, fichiers @ et règles de projet comme méthodologie de Contexte IDE stable.  
**Dernière vérification :** 2026-07-26
