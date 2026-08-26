---
title: Génération d'images
description: Générer ou éditer des images dans les Tâches Codex — Prompts, formats et acceptation.
locale: fr
source_locale: zh-CN
source_revision: 67d0eb7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Codex peut invoquer la **génération d'images** dans certains scénarios : brouillons d'illustration, esquisses d'icônes, concept art UI, diagrammes. Traitez la sortie comme des **artefacts à Vérifier** — pas des assets de marque prêts à livrer.

Bon pour des brouillons visuels — pas des livrables finaux.

## Ce qui est couvert

- Quand générer dans Codex vs outils professionnels
- Comment rédiger des Prompts image et contraintes
- Droits d'auteur, marque et gestion de fichiers

## Cas d'usage

| Bon cas | Mauvais cas |
|---|---|
| Brouillons d'images de blog, diagrammes doc interne | Matériaux externes sous charte de marque stricte |
| Exploration rapide de mise en page UI | Livraison design pixel-perfect |
| Icônes d'exemple tutoriel | Ressemblance de personne réelle sans autorisation |

Complète [Prompting avec images](/fr/prompts/prompting-with-images/) : cette page couvre les images en **entrée** ; celle-ci couvre les images en **sortie**.

## À quoi sert la génération d'images

Mieux pour :

- Direction rapide
- Visualiser un concept
- Brouillons d'assets pour articles, docs, prototypes

Pas un substitut pour :

- Matériaux de marque officiels
- Spécifications de design précises
- Visuels publiés finaux sans revue

## Flux de travail recommandé

1. Énoncer usage, ratio d'aspect, mots-clés de style (éviter d'empiler des noms de marques déposées)
2. Demander format de sortie (PNG/SVG si pris en charge) et chemin de sauvegarde
3. Après génération, [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/) : ouvrir le fichier, vérifier résolution et lisibilité
4. Revue design ou juridique avant publication externe

## Idées reçues courantes

### 1. Ça a l'air bien = prêt à utiliser ?

Vérifiez aussi :

- Adéquation à l'usage
- Détails bizarres
- Texte illisible
- Correspondance de style avec le contenu

### 2. « Génère-moi une image » suffit ?

Précisez généralement :

- Usage
- Paysage, portrait ou carré
- Direction de style
- Si du texte doit apparaître
- Format de fichier

### 3. Remplace les designers ?

Plus proche de l'exploration, illustration de contenu et esquisse conceptuelle — pas de livraison design stricte.

## Structure de Prompt

1. À quoi sert l'image
2. Paysage, portrait ou carré
3. Ambiance et palette
4. Texte oui/non
5. Comment vous Vérifierez après la sortie

## Fichiers et dépôt

- Grosses images dans `assets/` ou CDN ; surveiller la taille Git
- En PR, noter le Prompt de génération et la version du modèle (audit interne)
- Voir [images et captures d'écran](/fr/guide/files-and-artifacts/images-and-screenshots/)

## Sécurité et conformité

- Ne pas générer de contenu trompeur avec marques sensibles, fausses pièces d'identité ou ressemblances non autorisées
- La politique entreprise peut interdire certains sujets ; suivez [usage acceptable](https://openai.com/policies/) et règles internes

## Références
- Centre d'aide OpenAI : Images dans ChatGPT
- OpenAI Academy : Créer des images avec ChatGPT
## Erreurs courantes

- Committer des images 4K non compressées
- Présenter des images générées comme photos ou logos officiels
- Omettre la contrainte « pas de texte » → légendes illisibles

La génération d'images sert à la direction et aux brouillons ; livrez à l'externe seulement après revue formelle des artefacts.

---

**Statut :** vérifié  
**Produits concernés :** App / Cloud (selon version)  
**Base de vérification :** Revu contre les matériaux officiels OpenAI de génération et édition d'images pour cas d'usage, conseils de Prompt et conclusion prudente « brouillon d'abord, assets formels nécessitent revue ».  
**Dernière vérification :** 2026-07-26
