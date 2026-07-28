---
title: Revoir les changements dans l'IDE
description: Lire les diffs, commenter et accepter ou rejeter les suggestions Codex dans l'éditeur.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La revue IDE se situe entre complétion inline et revue PR complète : les changements apparaissent souvent directement dans l'éditeur ou une vue diff latérale. Cette page explique comment accepter les résultats en sécurité.

Dans l'IDE, ne traitez pas « accepter en un clic » comme défaut même quand un changement paraît prêt.

## Ce qui est couvert

- Schémas courants d'interface de revue IDE
- Stratégie accepter, rejeter et accepter partiellement
- Lien avec Git, tests et flux PR

## Flux de revue

1. **Périmètre** : quels fichiers ont changé ? suppressions inattendues ou tempêtes de formatage ?
2. **Logique** : branches, gestion d'erreurs, cas limites
3. **Sécurité** : secrets, injection, élévation de privilèges, altération de dépendances
4. **Vérification** : tests projet / lint (terminal IDE ou scripts de Tâche)
5. **Décision** : accepter, demander des changements, ou annuler et renvoyer la Tâche

Méthodologie : [revoir les diffs](/guide/quality/review-diffs/)

## Actions spécifiques IDE (conceptuelles)

| Action | Suggestion |
|---|---|
| Diff inline / texte fantôme | Lire bloc par bloc ; éviter tout accepter |
| Accepter un seul fichier | Commencer par le fichier le moins risqué (ex. tests) |
| Rejeter et réessayer | Suivi : « modifier seulement X, ne pas toucher Y » |
| Intégration Git | Après acceptation, encore `git diff` avant commit |

[Diffs, commentaires et revue App de bureau](/guide/desktop-app/diffs-comments-and-review/) est plus complet ; la revue IDE est **légère et haute fréquence**.

## Habitudes de Prompt recommandées

Énoncez dès le départ :

- Globs de chemins autorisés
- Interdit : `git push`, changer le lockfile (sauf demande explicite)
- À l'achèvement : lister le résumé des changements ; **ne pas auto-committer**

Voir [modèles d'Approbation humaine](/cases/workflows/human-approval-patterns/)

## Erreurs courantes

- Faire confiance à une icône de test verte sans lancer les tests vous-même
- Cacher des changements de logique dans un gros diff auto-formaté
- Pousser immédiatement après acceptation, en sautant PR / protection de branche

## Liste de contrôle d'acceptation

- [ ] `git status` correspond aux fichiers attendus
- [ ] Les tests passent (local ou CI)
- [ ] Pas de `.env`, jetons ou `console.log` de débogage laissés
- [ ] Message de commit rédigé ou confirmé par vous

## Questions courantes

### 1. Les suggestions inline paraissent petites — sûr d'accepter ?

N'en faites pas une habitude.

Beaucoup de problèmes ne concernent pas la taille — ils concernent « assez petit pour que personne n'ait regardé de près ».

### 2. Pas confiant pour revoir la logique — qu'est-ce qui aide le plus ?

Ces trois contrôles ajoutent déjà de la valeur :

- Les bons fichiers ont changé ?
- Quelque chose de supprimé qui devait rester ?
- Résidu de débogage ou dérive de style évidents ?

### 3. Accepter signifie terminé ?

Pas encore.

Accepter met seulement les changements dans votre arbre de travail — vous Vérifiez encore et décidez de committer ou non.

« Accepter » dans l'IDE est une étape intermédiaire, pas l'acceptation finale.

## Références
- [Vérification et revue humaine](/guide/foundations/verification-and-human-review/)
---

**Statut :** obsolète  
**Produits concernés :** IDE  
**Note de revue :** Cette page dépend de si l'extension IDE offre actuellement diff inline, diff latéral, accepter/rejeter par bloc, etc. ; le matériel public officiel actuel ne peut pas Vérifier chaque capacité d'interface — ne pas marquer `vérifié` jusqu'à docs d'extension plus récentes.  
**Dernière vérification :** 2026-07-26
