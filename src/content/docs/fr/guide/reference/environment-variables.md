---
title: "Variables d'environnement"
description: Objectif, couche et sécurité des variables d'environnement liées à Codex — supplément à la référence de configuration.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les variables d'environnement sont à deux extrêmes : « trop bas niveau » ou « tout y mettre ». Simplement : elles passent des valeurs aux programmes à l'exécution — surtout secrets et interrupteurs.

Utilisez-les pour **injecter clés, override interrupteurs, adapter CI** sans écrire des secrets dans fichiers de config ou Git. Index conceptuel ; noms exacts selon [doc officielle](https://developers.openai.com/codex) et `codex --help`.

## Ce que cette page couvre

- Ce qui appartient aux env vars vs fichiers de config
- Division utilisateur, projet, Secrets Cloud, CI
- Nommage courant et risques de fuite

## Règle de décision

Préférer les variables d'environnement si l'un s'applique :

- Ne doit pas aller dans Git
- Varie par machine, utilisateur ou environnement
- Nécessaire uniquement pour ce run

Donc tokens, interrupteurs temporaires et injection CI utilisent souvent env — pas fichiers codés en dur.

Concepts config : [Référence de configuration](/guide/reference/configuration-reference/) ; Cloud : [Secrets et variables](/guide/web-and-cloud/secrets-and-variables/).

## Bon choix pour variables d'environnement

| Type | Intention exemple | Ne pas |
|---|---|---|
| Token auth | Clé API, PAT GitHub | Committer dans dépôt |
| Interrupteur temporaire | Niveau log debug | Config métier long terme |
| Injection CI | Mode revue lecture seule | Token d'écriture production |
| Processus enfant MCP | Clé service tiers | Texte clair dans `AGENTS.md` |

## Pas un tiroir universel

Éviter « si ça rentre, env ».

- **Sensible, spécifique runtime** : variables d'environnement
- **Accord d'équipe long terme** : config ou docs
- **Règles de flux de travail** : `AGENTS.md` ou Skill

Dépannage plus facile plus tard.

## Ce qu'est `.env`

`.env` n'est pas un autre centre de config — c'est une façon courante pour les outils de **charger en lot les variables d'environnement** pour dev local.

- Variable d'environnement = la valeur
- `.env` = un conteneur local pour ces valeurs

Donc :

- Pratique ≠ sécurisé
- `.env.example` montre les noms — pas les vrais secrets
- Production/CI utilise généralement les gestionnaires Secret de plateforme

## Mauvais choix pour env seul

- Standards de code, structure de répertoires → `AGENTS.md`
- Modèle par défaut d'équipe → config projet (parties non secrètes)
- Listes d'autorisation complexes → [Règles](/guide/customization/rules/allow-and-deny-patterns/)

## Idées reçues courantes

### 1. Les env vars ne sont pas pour toute la configuration

Bon pour les valeurs — pas les règles d'équipe complètes et long prose.

### 2. `.env` sur disque ≠ sûr

`.env` commité, partagé en capture d'écran ou loggé fuit encore.

### 3. `unset` ≠ risque éliminé

Peut rester dans historique shell, processus enfants, logs, fichiers, captures.

### 4. Modèle `.env` local ≠ modèle production

CI/Cloud/plateformes gérées utilisent généralement :

- Configurer Secrets dans la console
- Injecter à l'exécution
- Garder les vraies valeurs hors des fichiers du dépôt

## Couche et priorité (conceptuelle)

```text
Politique obligatoire org (si applicable)
    ↓ override
Variables d'environnement injectées shell / CI
    ↓ fusionne avec fichiers de config (selon règles officielles)
Fichiers de config utilisateur / projet
```

Quand la même clé est définie à plusieurs endroits, suivre la **priorité officielle** ; pour dépannage imprimer config effective ou vérifier logs.

## Ordre de décision pratique

1. Est-ce sensible ?
2. Local uniquement ou CI/Cloud ?
3. Longue durée ou ce run seulement ?
4. Env local, Secret CI ou Secret Cloud ?

Réduit « bonne valeur, mauvais endroit ».

## Scénarios courants

| Scénario | Approche plus sûre |
|---|---|
| Debug API tiers local | Env local ou `.env`, gitignored |
| Exemple partagé équipe | Committer `.env.example`, pas vraies valeurs |
| GitHub Actions / CI | Secrets de plateforme |
| Tâche Cloud appelle service privé | Secret Cloud |
| Serveur MCP a besoin d'une clé | Env parent ou injection Secret |

Règle empirique : les vraies clés ne devraient pas vivre comme contenu de fichier de dépôt en clair à long terme.

## Usages typiques

### Développement local

Exporter token personnel dans `~/.zshrc` ou direnv `.envrc` — **ne pas committer** `.env`.

### CLI non interactif

CI injecte via secret store puis exécute `codex exec`. Voir [Mode non interactif](/guide/cli/non-interactive-mode/).

### Serveurs MCP

Les processus MCP héritent souvent l'env parent ; référencer `$VAR` dans config au lieu de coder en dur. Voir [Connecter MCP](/skills/mcp/connect-an-mcp-server/).

### Cloud

Secrets niveau dépôt dans console Cloud ; noms correspondent aux références de tâche.

Les variables d'environnement conviennent aux valeurs qui changent, sont sensibles ou nécessaires uniquement à l'exécution — pas règles long terme ou documentation.

## Liste de contrôle sécurité

- [ ] `.env` dans `.gitignore`
- [ ] Rédiger tokens avant journalisation
- [ ] Rotation des clés fuites
- [ ] Scopes privilège minimum (token CI lecture seule, etc.)

## Erreurs courantes

- Vraies clés dans `.env.example` commité
- `export` visible pendant partage d'écran
- Supposer `unset` rend les processus enfants sûrs — vérifier l'arborescence de processus

## Sources de référence

- Documentation configuration / environnement OpenAI Codex
- stormzhang `18-config.md`
- KimYx0207 CX-04

---

**Statut :** vérifié  
**Produits concernés :** CLI / App / IDE / Cloud  
**Base de vérification :** Le Help Center OpenAI documente encore `~/.codex/.env`, injection CI/runtime et Secrets de plateforme ; la page se concentre sur principes stables — quelles valeurs appartiennent à env, ce qui n'y appartient pas, `.env` comme conteneur local — sans fixer une liste de noms de variables.  
**Dernière vérification :** 2026-07-26
