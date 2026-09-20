---
title: Cinq exercices de récupération après échec
description: Utilisez des journaux CLI réels pour diagnostiquer les problèmes de source, citation, liaison à l'entrée, portée de répertoire et fichier d'état, en ne changeant qu'une variable à la fois.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Cinq échecs conçus intentionnellement ont été exécutés, chacun corrigé par une seule modification puis relancé avec succès. Les hash des entrées initiales sont restés identiques. Il ne s'agit ni d'incidents de production ni d'une mesure du taux de réussite d'un modèle.
  environment: Python 3.12.11 / Darwin arm64 ; copies temporaires et entrées synthétiques, sans réseau ni appel de modèle.
  evidence:
    - label: Résumé des cinq exécutions réelles
      href: /downloads/failure-recovery/validation/summary.json
    - label: Périmètre de vérification
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: Cinq échecs reproductibles, scripts et entrées nécessaires, journaux avant et après correction, et instructions d'exécution
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: fc91872
translation_status: draft
translated_at: 2026-09-20
---

Conservez d'abord l'erreur, repérez ensuite la couche en cause, puis ne changez qu'une variable avant de relancer. Cette page illustre la méthode avec cinq entrées fixes. L'auteur a provoqué les pannes volontairement ; les journaux proviennent de véritables commandes, pas d'incidents rencontrés par des clients.

[Télécharger le dossier complet d'exercices](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## Reproduire les échecs

La bibliothèque standard de Python 3.10 ou plus suffit, sans compte ni réseau. Exécutez dans le dossier extrait :

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

Le répertoire de sortie ne doit pas encore exister, afin de ne pas écraser d'anciennes preuves. Le script utilise des copies temporaires. Avant correction, les cinq exécutions doivent se terminer avec un code non nul ; après correction, chacune avec le code 0, sans modification des entrées initiales. Chaque journal contient la commande, le code de sortie, la sortie standard et les erreurs. Les chemins temporaires sont normalisés en `<WORK>`.

## 1. Hash de source non conforme

**Symptôme :** `FAIL: Source changed: P`, code de sortie 1.

**Diagnostic :** un passage ajouté par erreur se trouve dans un fichier source fixé, tandis que l'index des sources n'a pas changé. Comparez d'abord avec l'original ; ne mettez pas simplement le hash à jour pour faire réussir le contrôle.

**Seule correction :** restaurez les octets d'origine connus de ce fichier source. Laissez intacts les autres documents, l'article et l'index. La nouvelle exécution se termine avec le code 0.

[Journal d'échec](/downloads/failure-recovery/validation/01-source-changed-before.json) · [Journal de récupération](/downloads/failure-recovery/validation/01-source-changed-after.json)

Si une source réelle a effectivement changé, vérifiez de nouveau sa version, son contenu et les conclusions qui en découlent, puis conservez un nouveau relevé. Restaurer l'ancien fichier n'est approprié ici que parce que la modification était clairement accidentelle.

## 2. Citation absente du tableau des faits

**Symptôme :** `FAIL: Unmapped or unused claim ID`, code de sortie 1.

**Diagnostic :** l'article indique F99 au lieu de F1 ; F99 n'existe pas dans le tableau des faits. La vérification de P1 confirme que la phrase renvoie toujours à F1.

**Seule correction :** remplacez l'identifiant erroné par F1 et relancez ; le code de sortie est 0. Ne créez pas un fait supplémentaire pour dissimuler une citation inconnue.

[Journal d'échec](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [Journal de récupération](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

Un identifiant correct ne prouve pas que la source soutient la formulation. Vérifiez encore chaque phrase ; voir le [Skill de rédaction](/fr/skills/examples/writing-skill/).

## 3. Proposition de triage sans correspondance avec l'entrée

**Symptôme :** `FAIL: Stale input hash`, code de sortie 1.

**Diagnostic :** le hash d'entrée de la proposition ne correspond pas à l'Issue fixe actuelle. L'exercice corrompt volontairement ce hash pour déclencher le contrôle de liaison à l'entrée.

**Seule correction :** remplacez-la par la proposition de référence complète déjà vérifiée avec l'entrée actuelle. Ne changez ni l'entrée ni le schéma, puis relancez ; le code de sortie est 0. Aucun modèle n'a trié de nouveau l'Issue, et l'ancienne conclusion n'a pas été réutilisée en recalculant simplement son hash.

[Journal d'échec](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [Journal de récupération](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

Si le contenu d'une véritable Issue change, analysez de nouveau l'effet de ce changement sur la conclusion. Voir le [cas de triage d'Issues](/fr/cases/use-cases/team-automation/issue-triage-suggestions/).

## 4. Fichier d'état réutilisé pour un autre répertoire

**Symptôme :** `State version/site mismatch`, code de sortie 3.

**Diagnostic :** l'état est lié au site fixed, mais la commande dirige `--site` vers broken. L'erreur vient du contrôle de portée ; elle ne signifie pas que les liens sont soudain devenus invalides.

**Seule correction :** pointez uniquement `--site` vers le répertoire d'origine, sans changer le fichier d'état ni les autres arguments. La nouvelle exécution se termine avec le code 0. L'appel erroné n'a pas écrasé l'état existant.

[Journal d'échec](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [Journal de récupération](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

Si vous devez réellement surveiller un autre site, créez-lui un état distinct. Ne supprimez pas l'ancien état pour contourner la protection de portée.

## 5. JSON d'état corrompu

**Symptôme :** l'analyse JSON échoue, le programme signale `stopped` et se termine avec le code 3.

**Diagnostic :** le fichier d'état a été tronqué. Il n'est plus possible de lire sûrement l'historique ni la base de déduplication. Le programme refuse de poursuivre et conserve le contenu corrompu au lieu de le réinitialiser discrètement.

**Seule correction :** restaurez la sauvegarde connue comme valide, réalisée avant cet exercice. Ne changez ni la commande ni le site. La nouvelle exécution se termine avec le code 0.

[Journal d'échec](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [Journal de récupération](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

Sans sauvegarde, conservez d'abord le fichier corrompu et examinez les journaux d'exécution, puis reconstruisez l'état manuellement. Le supprimer directement peut faire perdre des événements à envoyer et générer des candidats en double. Voir le [Skill d'automatisation](/fr/skills/examples/automation-skill/).

## Appliquer la méthode à votre tâche

Conservez la version de l'entrée, la commande réelle et l'erreur complète. Déterminez si le problème touche l'entrée, la structure, la portée ou l'état. Notez une cause à tester, ne modifiez que la variable correspondante, puis relancez le même contrôle et gardez le résultat. Après la récupération, vérifiez aussi que l'objectif initial est atteint ; le code de sortie seul ne suffit pas.

Ces exercices ne couvrent ni les vrais échecs de connexion, ni un Skill qui ne se déclenche pas dans le client, ni les restrictions réseau, ni les problèmes d'approbation. Pour ces cas, revenez à l'[index de dépannage par symptôme](/fr/guide/reference/troubleshooting/) et conservez les détails de l'environnement réel. Le comportement du script montré ici ne garantit pas celui du client.
