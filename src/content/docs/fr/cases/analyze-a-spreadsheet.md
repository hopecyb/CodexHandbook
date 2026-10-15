---
caseCategory: office
directoryOrder: 10
title: Du CSV des ventes à un rapport hebdomadaire vérifiable
description: Exercez le nettoyage, le regroupement, la comparaison et la vérification indépendante avec 46 lignes de ventes fictives ; téléchargez les données et les réponses.
contentType: case
audiences: [creator, beginner]
task: data-analysis
level: beginner
estimatedMinutes: 40
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Le script de référence a été exécuté ; les vérifications indépendantes en centimes entiers et en SQL ont réussi. Il s’agit d’un autocontrôle de l’auteur, sans essai auprès de lecteurs ordinaires ni seconde revue humaine.
  environment: Darwin 27.0.0 / arm64, Python 3.12.11 ; script de bibliothèque standard indépendant du client Codex.
  evidence:
    - label: Consulter les résultats d’exécution et de revue
      href: /downloads/sales-weekly-report/record.md
assets:
  - path: /downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip
    purpose: Matériel complet, réponses de référence et scripts de contrôle
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /fr/cases/
  label: Choisir un exercice pratique
next:
  link: /fr/guide/quality/
  label: Apprendre à vérifier les résultats
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 68729f6
---

Dans cet exercice, vous livrerez un rapport hebdomadaire des ventes, une synthèse régionale, un classement des produits et un registre de nettoyage ligne par ligne. Les données sont fictives et créées pour ce site ; aucune donnée client réelle n’est nécessaire.

Niveau : débutant. Les 30 à 45 minutes sont une estimation éditoriale non chronométrée auprès des lecteurs. Prérequis : pouvoir fournir des fichiers locaux à Codex. Lire le résultat de référence ne demande pas de programmer ; exécuter le contrôle nécessite Python 3.10 ou plus récent.

[Télécharger le dossier complet v1.0.0 (ZIP)](/downloads/sales-weekly-report/sales-weekly-report-1.0.0.zip) · [Télécharger uniquement le CSV des ventes](/downloads/sales-weekly-report/sales.csv)

## Voir d’abord le résultat attendu

| Indicateur | Valeur de référence | Point de contrôle |
|---|---:|---|
| Ventes nettes de la période | 4 644,75 yuans | Inclure les remboursements |
| Montant net de l’Est | 1 281,25 yuans | 1 401,75 − 120,50 |
| Montant sans date | 199,99 yuans | Isoler sans deviner la semaine |

La période actuelle va du 07/09/2026 au 13/09/2026 ; la précédente du 31/08/2026 au 06/09/2026. L’évolution entre ces deux semaines calendaires complètes est de 87,04 %. Ce résultat provient seulement de données fictives et n’explique aucune cause commerciale réelle.

[Voir le rapport de référence](/downloads/sales-weekly-report/summary.md). Faites d’abord l’exercice, puis comparez avec la solution.

## Télécharger les fichiers

Le paquet complet contient un cahier des charges, un dictionnaire de données, trois prompts, un CSV de 46 lignes, le rapport de référence, trois CSV de synthèse et de registre, une implémentation de référence, un script de contrôle indépendant et un compte rendu de vérification. Le tout est publié sous CC0 1.0 et peut être modifié ou redistribué.

Après extraction, ouvrez le dossier `sales-weekly-report`. Télécharger le CSV seul ne fera pas apparaître les autres fichiers cités.

## 1. Confirmer les fichiers et la méthode

Confiez la tâche suivante à Codex. La façon de fournir des fichiers varie selon le client ; vérifiez d’abord qu’il les a effectivement lus.

```text
Lis brief.md, starter/data-dictionary.md et starter/sales.csv.
Confirme leur présence et liste les champs, la plage de dates, le nombre
 d’enregistrements et les numéros des lignes à traiter spécialement.
Ne modifie pas le tableau d’origine et ne consulte pas solution.
Distingue doublon exact, date manquante, montant négatif et vrai zéro.
Décris les deux semaines conformément au dictionnaire ; signale tout conflit.
En l’absence de conflit, poursuis.
```

Le tableau brut de 46 lignes contient deux remboursements, un doublon exact et une date manquante. Ne gardez que la première occurrence d’un doublon exact ; si deux lignes portant le même identifiant diffèrent, arrêtez la vérification. N’inventez pas la date manquante ; un montant nul est valide. Après traitement, 44 lignes doivent être prises en compte.

## 2. Produire le rapport et le registre des calculs

Utilisez ensuite `prompts/02-report.md` du paquet et écrivez les fichiers dans `my-output/` :

| Fichier | Contenu attendu |
|---|---|
| `summary.md` | Total, évolution, régions, top 3 de la période actuelle, qualité des données et méthode de calcul |
| `region-summary.csv` | Montants nets des régions sur les deux semaines, différence, évolution ; total conciliable avec les régions |
| `top-products.csv` | Produits classés par montant net décroissant sur la période actuelle, remboursements inclus |
| `row-ledger.csv` | Numéro de chaque ligne source, décision d’inclusion, semaine et montant |

Laissez les entrées, `solution` et `validation` inchangés. Respectez les noms de champs et l’ordre des tableaux du dictionnaire pour permettre le contrôle indépendant. La base de la région Sud-Ouest est nulle sur la période précédente : notez N/A pour l’évolution, jamais 0 % ou une croissance infinie.

## 3. Vérification indépendante, au-delà d’un simple « est-ce juste ? »

Dans le dossier extrait, exécutez :

```sh
python3 validation/check.py --output my-output
```

Si les quatre fichiers sont présents et conformes à la méthode, le script affiche `result: PASS`. Un hachage d’entrée modifié, un remboursement oublié, une erreur de regroupement ou un registre incohérent déclenchent une erreur. En cas d’échec, corrigez vos fichiers, pas le vérificateur pour lui faire accepter le résultat.

Sans Python, vérifiez au moins manuellement :

1. Les sept montants positifs de l’Est totalisent 1 401,75 yuans. Avec le remboursement de −120,50 à la ligne 44, on obtient 1 281,25.
2. Les trois régions de la période actuelle totalisent 1 281,25 + 2 101,75 + 1 261,75 = 4 644,75.
3. La ligne 47 O046, sans date, représente 199,99 yuans et n’entre dans aucune semaine ; la ligne 46 O001 est un doublon.

Le contrôle automatique ne peut pas examiner toutes les conclusions en langue naturelle. Lisez encore le rapport et supprimez les causes de croissance ou jugements commerciaux sans source.

## 4. Corriger une erreur : remboursement oublié

**Contre-exemple conçu pour l’exercice** : en filtrant tous les montants négatifs, le total actuel serait de 4 765,25 yuans, soit 120,50 de trop. La validation de référence a réellement modifié un résultat temporaire et confirmé que le vérificateur rejette ce montant. Il ne s’agit pas d’un dialogue de modèle fabriqué.

```text
Examine les enregistrements valides où net_sales est inférieur à zéro et explique
s’ils doivent être inclus. Conserve le signe négatif des remboursements et
recalcule les synthèses régionales et par produit pour les deux périodes.
Indique l’écart avant/après. Ne modifie ni le CSV d’origine ni le vérificateur
pour faire disparaître l’échec.
```

## 5. Récupération en cas de problème

| Symptôme | À vérifier d’abord | Étape suivante |
|---|---|---|
| Fichier introuvable | `starter/sales.csv` existe-t-il dans le dossier courant ? | Ouvrir le dossier extrait puis référencer le fichier ; ne pas laisser l’agent recréer des données manquantes |
| Caractères chinois illisibles ou une seule colonne | Encodage UTF-8 et séparateur virgule ? | Réimporter le CSV d’origine sans modifier les montants à la main |
| Écart de 120,50 | Remboursement R043 oublié ? | Garder les valeurs négatives selon le dictionnaire et recalculer les deux périodes |
| Division par zéro pour l’évolution | La base du Sud-Ouest est-elle réellement nulle ? | Écrire N/A et expliquer la base nulle |
| Fichier manquant signalé par le vérificateur | Les quatre sorties existent-elles ? | Les compléter selon le dictionnaire puis relancer ; fichier absent ne signifie pas montant erroné |

## Conditions de réussite et suite

- Le hachage du tableau source reste identique et les quatre fichiers sont présents.
- Le total, l’Est et le montant sans date ont fait l’objet d’une vérification indépendante.
- Le rapport mentionne les anomalies, la base nulle et la méthode, sans inventer de causes.
- Les contrôles réellement exécutés et les points encore à revoir manuellement sont distingués.

Conservez vos prompts et notes de correction. Avant de remplacer les données, vérifiez à nouveau champs et méthode. Le vérificateur fixe de cet exercice n’est pas applicable à toutes les données d’entreprise.

Poursuivez avec [la vérification des résultats](/fr/guide/quality/) ou revenez aux [cas pratiques](/fr/cases/).
