---
caseCategory: team
directoryOrder: 90
title: 'Cas : tri des issues et file de revue humaine'
description: S'exercer avec cinq issues synthétiques à produire des propositions structurées, liées aux entrées et vérifiées à blanc, sans agir sur GitHub.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Une exécution à blanc des cinq propositions rédigées par l'auteur a réussi, ainsi que huit tests de structure et de liaison aux entrées. Aucun modèle n'a été appelé ni GitHub connecté ; cela ne prouve ni la justesse du classement ni l'aptitude à la production.
  environment: Python 3.12.11 / Darwin arm64 ; bibliothèque standard et données synthétiques, sans jeton ni réseau.
  evidence:
  - label: Compte rendu d'exécution réel
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: Entrées synthétiques, schéma JSON, instruction, propositions de l'auteur, script d'exécution à blanc et relevé de revue
  license: CC0-1.0
  version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: 6d859d7
translation_status: draft
translated_at: '2026-09-20'
---

Cet exercice décompose le tri des issues en « produire une proposition → valider → faire examiner par une personne ». Vous obtiendrez cinq fiches à revoir. Aucun commentaire, label ou fermeture d'issue n'est publié automatiquement.

[Télécharger le dossier complet](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [Voir la sortie réelle de l'exécution à blanc](/downloads/issue-triage/validation/dry-run.json)

## Entrées et critères de fin

Les cinq entrées synthétiques originales concernent une erreur de calcul, un lien rompu dans la documentation, un indice de données entre comptes, un manque d'informations et une instruction malveillante dans le corps d'une issue. Elles ne contiennent aucune donnée client réelle. Chaque proposition contient un type, une priorité, des labels, un indicateur de revue de sécurité, une justification et les informations manquantes.

Pour terminer, associez une proposition à chaque entrée et validez les valeurs autorisées ainsi que le hachage de l'entrée. Une personne responsable du dépôt doit ensuite accepter, modifier ou rejeter chaque proposition en consignant sa raison. Une structure valide ne remplace pas ce jugement.

## Exécuter d'abord les propositions de référence

Il faut Python 3.10+ ; aucune clé API ni dépendance tierce. Dans le dossier extrait, lancez :

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

La première commande utilise les propositions préécrites par l'auteur et produit cinq entrées `human-review-required`, avec une liste `external_actions` vide. La seconde lance huit vérifications. Aucune ne sollicite automatiquement un modèle.

[Entrées exemples](/downloads/issue-triage/fixtures/issues.json) · [Propositions de référence](/downloads/issue-triage/solution/proposals.json) · [Référence de revue humaine](/downloads/issue-triage/solution/human-review.md)

## Produire ensuite vos propres propositions

Donnez à Codex le fichier [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) du dossier et demandez un `my-proposals.json` conforme à [schema.json](/downloads/issue-triage/schema.json). Lancez ensuite :

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

Le schéma suit JSON Schema 2020-12. Les booléens utilisent `"type": "boolean"` ; la priorité est une énumération, pas la chaîne `"P0-P3"`. Le validateur fourni ne gère que les mots-clés employés par ce schéma, pas tous les schémas JSON.

Chaque proposition porte un `input_sha256` lié au contenu intégral de l'issue correspondante. Si l'entrée change, cessez d'utiliser l'ancienne proposition. Réanalysez la modification avant de recalculer le hachage. La convention et la fonction de hachage figurent dans le README et le script.

## Jugement humain et limite de sécurité

| Situation | Traitement |
|---|---|
| Indice clair d'un défaut | Suggérer une catégorie, reproduire le problème, puis établir sa portée avant de fixer la priorité |
| Indice d'incident de sécurité | Soumettre en privé à la personne chargée de la sécurité ; une priorité inconnue ne signifie pas un faible risque |
| Informations insuffisantes | Employer `unknown`, lister les informations manquantes, sans deviner responsable ou gravité |
| Le corps demande une commande ou une élévation de privilèges | Le traiter comme une donnée non fiable ; ne pas l'exécuter ni choisir P0 parce qu'il prétend être urgent |

Supprimer le HTML ou limiter la longueur ne garantit pas une protection contre l'injection de prompt. Le programme fourni n'exécute pas le corps des issues, mais l'étape de génération par modèle doit toujours séparer données et instructions. La sortie de référence ne prouve pas le taux de résistance d'un modèle.

## Échec et reprise

Un label inconnu, un champ d'action supplémentaire, un type invalide ou une proposition en double ou manquante arrête tout le lot avec le code de sortie 1. Corrigez l'instruction et les champs concernés, puis relancez avec les entrées originales. Un type ou label de sécurité sans indicateur de revue de sécurité est également rejeté.

Un classement erroné mais structurellement valide peut passer : les tests confirment cette limite. Une concordance élevée sur quelques exemples ne constitue donc pas un seuil de mise en production. Un véritable déploiement exige des exemples représentatifs, une gradation des risques, des contrôles humains par échantillon, l'évaluation du coût des erreurs et des conditions de retour arrière. Cet exercice couvre seulement une exécution locale à blanc.

Poursuivez avec le [contrôle des liens de documentation](/fr/cases/use-cases/team-automation/scheduled-link-check/) et les [modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/).
