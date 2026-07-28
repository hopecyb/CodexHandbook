---
title: Choisir une méthode d'extension
description: Arbre de décision du Prompt aux Automations, sans « extension pour l'extension ».
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Plus de mécanismes → plus de risque de mauvais choix. Avant Plugin ou MCP, vérifiez si c'est nécessaire.

Noms souvent confondus :

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

Parfois un Prompt suffit ; parfois il faut plus lourd.

## Arbre de décision

```text
Tâche répétée ≥ 3 fois ?
├─ non → Prompt + références @
└─ oui → règles persistantes ?
    ├─ oui → AGENTS.md
    └─ non → flux fixe et décrivable ?
        ├─ oui → Skill
        └─ non → lire système externe ?
            ├─ oui → évaluer MCP (lecture seule d'abord)
            └─ non → sans surveillance ?
                ├─ oui → Automations + porte humaine
                └─ non → Skill + déclenchement manuel
```

Distribution équipe de plusieurs Skills + MCP ? En fin de chemin, envisager **Plugin**.

## Scénarios

| Scénario | Combinaison |
|---|---|
| tests et commits unifiés | AGENTS.md |
| checklist avant chaque merge | Skill `pr-review` |
| contexte ticket Linear | MCP + Prompt tâche |
| rapport dépendances hebdo | Automation → ouvrir issue |
| scan secrets avant commit | Hooks (entreprise) ou CI |
| pack outils pour nouveaux | Plugin (après revue sécurité) |

## Coûts

| Mécanisme | Écriture | Maintenance | Risque sécurité |
|---|---|---|---|
| Prompt | faible | faible | faible |
| AGENTS.md | moyen | moyen | faible |
| Skill | moyen | moyen | faible–moyen |
| MCP | élevé | élevé | moyen–élevé |
| Plugin | faible (existant) / élevé (maison) | moyen | moyen–élevé |
| Automations | élevé | élevé | élevé |

## Anti-patterns

- **explosion de Skills** : dizaines installés, descriptions en conflit
- **MCP marteau universel** : API là où `git` suffit
- **automation sans acceptation** : code modifié à heure fixe sans revue du diff
- **roue réinventée** : MCP maison alors qu'un Connector officiel existe

## FAQ

### 1. Plugin et MCP dès le début ?

Souvent Prompt, périmètre et `AGENTS.md` suffisent d'abord.

### 2. Comment lire l'arbre ?

Principe : **léger d'abord**, alourdir si besoin.

### 3. Par où commencer ?

Souvent :

- Prompt
- `AGENTS.md`
- Skill

MCP et automation sans surveillance viennent plus tard.

L'enjeu n'est pas la sophistication du mécanisme, mais l'adéquation au problème.

## Pour aller plus loin

- [Carte des capacités d'extension](/skills/capability-map/)
- [Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/)
- [Figer un workflow en Skill](/cases/workflows/turn-a-workflow-into-a-skill/)

---

**Statut :** outdated  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** L'arbre touche Automations, Plugins, MCP et Connectors officiels ; ces frontières évoluent vite — la doc publique au 2026-07-26 ne stabilise pas toute la page.
