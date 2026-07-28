---
title: "Sortie structurée"
description: Faire produire exec des résultats parseables par machine pour étapes aval, dashboards et portes.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beaucoup de premières automatisations supposent que Codex retournera « du texte raisonnable ». OK pour les humains ; maladroit pour les scripts.

La sortie structurée résout un problème direct : Codex retourne les résultats dans un format que vous spécifiez.

Si une tâche non interactive n'émet que du texte libre, les étapes aval peinent à juger pass/fail, nombre d'issues ou sévérité. La sortie structurée rend les résultats plus faciles à consommer pour les machines.

## Ce que cette page couvre

- Quand exiger JSON / tableaux Markdown / champs fixes
- Définir le schéma dans les prompts
- Fallback quand le parsing échoue

## Idées reçues courantes

### La sortie structurée est pour l'étape suivante

JSON et schéma ne sont pas de la pédanterie d'ingénierie — ils comptent quand les scripts jugent les résultats, les bots postent des commentaires ou les dashboards affichent. Il faut une forme stable, pas deviner à chaque run.

### Format stable ≠ conclusions fiables

La sortie structurée garantit la forme, pas la compréhension correcte.

Elle résout l'interface de sortie — pas la définition de tâche et la vérification.

## Une division simple

- Texte libre : pour les humains
- Sortie structurée : pour les programmes

Si l'étape suivante est `jq`, scripts, dashboards, règles de porte ou bots de commentaire auto, ne comptez pas uniquement sur le langage naturel libre.

## Approche minimale

Fixer les exigences de format à la fin du prompt :

```text
…(corps de tâche)…

Exigences de sortie :
- Émettre uniquement un objet JSON, pas de fences markdown
- Champs : {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- Si aucun problème, findings est un tableau vide
```

Parsing shell (sketch) :

```bash
result=$(codex exec --cwd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Pièges courants

### 1. « Sortie JSON » mais pas « uniquement JSON »

Un préambule avant le JSON casse les parseurs.

### 2. Noms de champs changent jour après jour

Une fois que les scripts dépendent des champs, traiter le schéma comme une interface.

### 3. S'attendre à ce que la structure fixe des tâches vagues

Elle stabilise le format. Si la tâche est floue, le JSON sera juste systématiquement faux.

## Flux de travail recommandé

```text
Définir schéma (version v1)
    → prompt référence fichier schéma @schemas/review-output.json
    → run exec
    → jq / validateur personnalisé
    → exit 1 sur échec
```

Pour grande sortie, exiger un champ chemin de fichier ; l'Agent écrit dans `artifacts/`, CI upload l'artefact.

## Comment décider

Si le consommateur suivant est un programme, préférer la structure.  
Si le résultat est principalement pour lecture et discussion humaine, le texte libre convient souvent.

Chaque fois que les résultats alimentent un autre programme, demandez à Codex de retourner les champs convenus systématiquement.

## Comparé au SDK

| | CLI + prompt JSON | SDK |
|---|---|---|
| Coût d'intégration | Faible | Moyen |
| Sécurité de type | Convention + validation | Types SDK |
| Idéal pour | Scripts CI | Services multi-tenant |

Voir [Vue d'ensemble SDK](/guide/developer-platform/sdk-overview/).

## Erreurs courantes

- Le modèle ajoute du texte d'explication ; échec parse JSON — accentuer « JSON uniquement » dans le prompt
- Changement de schéma sans bump de version ; ancienne CI parse mal
- Secrets dans les champs JSON loggés
- Pas de comportement d'exit explicite sur échec de parse

## Liste de contrôle d'acceptation

- [ ] Fichier schéma ou champs documentés existent
- [ ] CI échoue explicitement sur échec de parse
- [ ] Sortie d'exemple dans `fixtures/` pour régression
- [ ] Aligné avec la stratégie [codes de sortie](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Sources de référence
- Pratique générale sorties structurées OpenAI (alignement conceptuel)
---

**Statut :** vérifié  
**Produits concernés :** CLI / API  
**Base de vérification :** La doc API modèle/comparaison OpenAI liste encore `Structured outputs` ; cette page se limite à la pratique générale pour des interfaces de sortie non interactives stables ; schéma JSON, validation et modèles de fallback sont des orientations d'ingénierie.  
**Dernière vérification :** 2026-07-26
