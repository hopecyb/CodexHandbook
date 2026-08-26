---
title: Vérifier les artefacts générés
description: Accepter systématiquement les fichiers, rapports et sorties de build que Codex crée ou exporte.
locale: fr
source_locale: zh-CN
source_revision: 4b46d0b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Lorsqu'un Agent termine, il peut créer des rapports, scripts, sites statiques, données de test et autres **artefacts générés**. Ils peuvent ne pas passer par votre chemin habituel de revue de code — ils nécessitent donc leur propre habitude de Vérification.

Les nouveaux fichiers de Codex ne sont pas automatiquement prêts à l'emploi.

## Ce que cette page couvre

- Comment vérifier les artefacts générés diffère de « éditer du code existant »
- Checklists
- Quand rejeter ou refaire

## Types d'artefacts

| Type | Focus de Vérification |
|---|---|
| Scripts `.sh` `.py` | Exécutable, sûr, idempotent |
| Rapports `.md` `.html` | Exactitude factuelle, liens valides |
| Sortie build `dist/` | Doit être gitignored ? |
| Fixtures de test | Pas de PII réelle |
| Modèles de config | Pas de mots de passe faibles par défaut |

## Ce que « artefact généré » signifie ici

- Fichiers que Codex a écrits de nouveau
- Rapports qu'il a exportés
- Pages, répertoires ou packages qu'il a construits

Contrairement à « changé quelques lignes de code existant », ceux-ci sont faciles à manquer.

## Flux de Vérification

```text
1. Ouvrir l'artefact (ne pas compter uniquement sur le résumé Agent)
2. Comparer à la « définition de terminé » dans la Tâche
3. Exécuter les tests ou commandes de prévisualisation associés
4. Vérifier chemin, permissions, taille
5. Décider : accepter / édition partielle / abandonner et refaire
```

Méthodes : [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/), [Définition de terminé](/fr/guide/quality/definition-of-done/)

## Idées reçues courantes

### 1. « Terminé » dans le chat nécessite encore d'ouvrir les fichiers

Les résumés disent ce que l'Agent *a cru* faire — pas ce qui est réellement sur le disque.

### 2. Les nouveaux fichiers ne sont pas automatiquement plus sûrs que les éditions

Ils peuvent encore avoir un contenu erroné, des dépendances supplémentaires, des infos divulguées ou de gros fichiers qui ne devraient pas être commités.

### 3. « S'exécute en local » ≠ vaut à committer

Certaines sorties sont pour usage temporaire local uniquement — pas Git.

## Relation avec Git

- Clarifier ce qui **doit être commité** vs `.gitignore`
- Éviter des mégabytes de cache de build dans une PR
- Gros artefacts : artefact CI ou stockage externe

## Ordre de Vérification pratique

1. Confirmer ce qui a été généré
2. Ouvrir l'artefact le plus important
3. Vérifier qu'il est dans les répertoires autorisés
4. Décider s'il appartient au repo
5. Accepter, éditer ou refaire

## Artefacts non fiables

Pour repos non fiables ou Tâches pilotées de l'extérieur :

- Lire les scripts avant exécution
- Surveiller `curl | bash`, payloads obfusqués
- Prévisualiser dans Bac à sable ou container

Généré ne signifie pas vérifié — ouvrir, valider et savoir s'il doit être commité.

## Erreurs courantes

- Résumé en puces seulement ; jamais ouvrir les fichiers
- Committer une sortie debug ponctuelle sur main
- Rapports HTML avec pixels de tracking ou scripts externes non revus

## Checklist d'acceptation

- [ ] Chaque nouveau chemin de fichier est dans le périmètre autorisé
- [ ] Contenu principal ouvert et survolé
- [ ] Vérifications automatisées (lint/test/vérification liens) exécutées
- [ ] Pas de secrets, pas de répertoires générés errants

## Sources de référence
- [Gérer l'incertitude](/fr/guide/quality/handle-uncertainty/)
- exigences d'acceptation cas intégration sources externes
---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Vérifié croisé avec les pages vérifiées verify-artifacts, definition-of-done, handle-uncertainty et pages fichier-artefact ; se concentre sur la méthode stable : généré ≠ livrable, doit ouvrir et vérifier, clarifier la politique de commit.  
**Dernière vérification :** 2026-07-26
