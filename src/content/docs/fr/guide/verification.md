---
title: Vérification
description: Revoir les diffs, lancer les tests, valider les sources et définir le terminé.
sidebar:
  order: 17
locale: fr
source_locale: zh-CN
source_revision: 915ee03
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Vérification

Erreur courante des débutants : **traiter « Codex a dit que c'est fait » comme réellement fait.**

La Vérification signifie juger les résultats par rapport à vos exigences — pas par rapport à l'affirmation du modèle.

La sortie de Codex doit être vérifiable. La Vérification n'est pas optionnelle — elle ferme chaque boucle de Tâche.

## Ce que la Vérification demande

Que vous modifiiez du code, rédigiez de la doc ou fassiez de la recherche, la même question reste :

> **Est-ce « assez proche » ou vraiment prêt à livrer ?**

Beaucoup de retouches arrivent parce que :

- Les mauvais endroits ont été modifiés
- Le travail était à moitié fini
- Des sources ont été revendiquées mais ne sont pas fiables
- Une page charge mais le flux ne fonctionne pas
- La doc existe mais un nouveau venu ne peut pas la suivre

La Vérification **retient le risque avant la livraison**.

## Pièges courants

### 1. « Ça tourne » égale terminé

Tourner signifie seulement pas de crash immédiat — pas :

- Logique correcte
- Périmètre correct
- Pas de régressions
- Correspondance à votre résultat voulu

### 2. « J'ai vérifié » dans la réponse du modèle suffit

Vérifiez **ce** qui a été vérifié :

- Tests réellement lancés ?
- Diff réellement lu ?
- Artefacts réellement ouverts ?
- Sources traçables ?

### 3. La Vérification est seulement pour les programmeurs

Rédaction, feuilles de calcul, config, docs et descriptions de PR ont toutes besoin de Vérification — les méthodes diffèrent.

## Si vous manquez de processus, essayez cet ordre

1. Le résultat est-il dans le sujet ?
2. Le périmètre de changement est-il trop large ?
3. Lancez les contrôles automatisables
4. Passage humain : livreriez-vous cela ?

Pensez-y comme :

- **Direction**
- **Périmètre**
- **Contrôles machine**
- **Volonté humaine d'accepter**

## Sujets principaux

- [Revoir les diffs](/fr/guide/quality/review-diffs/) — lire les diffs ; confirmer périmètre et risque
- [Lancer les tests](/fr/guide/quality/run-tests/) — régression automatisée
- [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/) — docs, config, sortie générée
- [Valider les sources](/fr/guide/quality/validate-sources/) — conclusions de recherche traçables
- [Gérer l'incertitude](/fr/guide/quality/handle-uncertainty/) — quand le modèle n'est pas sûr
- [Définition du terminé](/fr/guide/quality/definition-of-done/) — ce que « fini » signifie

## Accent de Vérification par type de Tâche

- **Changements de code** : diff, tests, chemin critique manuel
- **Documentation** : bon public, liens fonctionnels, étapes suivables
- **Recherche** : sources réelles et actuelles ; conclusions dans les preuves
- **Config ou scripts** : hypothèses d'environnement, périmètre de permission, récupération en cas d'échec

Incertain où commencer : par défaut vers [définition du terminé](/fr/guide/quality/definition-of-done/).

La Vérification confirme que le résultat est utilisable, fiable et livrable.

Comment écrire l'acceptation dans les Prompts : [définir le terminé](/fr/prompts/define-done/). Exemples de bout en bout : [cas](/fr/cases/).

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** La page d'accueil OpenAI Developers met encore l'accent sur construire, tester, revoir et livrer des changements avec Codex ; cette page divise la Vérification en revue des diffs, lancer les tests, valider les sources et définition du terminé — recoupée avec les chapitres qualité du site.  
**Dernière vérification :** 2026-07-26
