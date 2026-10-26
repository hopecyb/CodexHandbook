---
title: Vue d’ensemble des Plugins
description: Comprendre les composants d’un Plugin, les interfaces compatibles, la vérification après installation et les limites de confiance.
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / App de bureau / Mobile ; Codex de bureau et CLI ; l’extension IDE ne prend pas en charge les Plugins"
  checkedAt: "2026-08-26"
locale: fr
source_locale: zh-CN
source_revision: '4efe5a8'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

ChatGPT et Codex utilisent le même catalogue public de Plugins. Un Plugin regroupe des capacités liées dans un flux de travail repérable et installable ; il n’invente pas un nouveau protocole d’appel d’outils.

![Illustration : des paquets d’extension enrubannés circulent sur un rail vers plusieurs postes ; l’un est déballé, un autre retiré proprement](/illustrations/plugins-overview.webp)

## Ce qu’un Plugin peut contenir

| Composant | Rôle | Ce que la personne qui installe doit vérifier |
|---|---|---|
| Skills | Étapes réutilisables, références et scripts | Adéquation des instructions avec la tâche et fiabilité des scripts |
| Connectors | Connexion à GitHub, Slack, Google Drive et d’autres outils | Portées OAuth, opérations de lecture et d’écriture, et étendue des données externes |
| MCP servers | Définition d’outils, authentification et données structurées en retour | Provenance du serveur, liste des outils, journaux et permissions |
| Browser extensions | Fonctions du navigateur pour un flux de travail précis | Étendue et nécessité de l’accès au navigateur |
| Hooks | Exécution de commandes ou d’outils MCP à des étapes du cycle de vie | Examiner et approuver la définition exacte avant activation |
| Scheduled task templates | Point de départ réutilisable sur les interfaces compatibles avec les tâches planifiées | Fréquence, permissions, conditions d’arrêt et contrôle humain |

## Différences avec Skill et MCP

| Mécanisme | Question principale | Exemple dans un ensemble de revue de PR |
|---|---|---|
| Skill | Quelles étapes suivre ? | Lire le diff, vérifier les preuves, classer les risques |
| MCP / Connector | Quels outils externes peut-on appeler ? | Lire une PR GitHub et ses commentaires |
| Hook | À quel moment du cycle de vie vérifier ? | Rechercher des secrets après une écriture |
| Plugin | Comment installer et distribuer l’ensemble ? | « Pack de revue de PR » de l’équipe |

Le Plugin est une couche de distribution, pas la dernière étape d’exécution. Voir la [carte des capacités d’extension](/fr/skills/capability-map/) pour les relations entre ces mécanismes.

## Installation et première vérification

### ChatGPT Web / App de bureau

1. Ouvrez l’onglet Plugins.
2. Examinez l’éditeur, la description et les capacités incluses.
3. Installez le Plugin ; s’il demande une connexion à un service externe, examinez séparément la portée de l’autorisation.
4. Effectuez une vérification à faible risque dans une nouvelle tâche Chat, Work ou Codex.

### Codex CLI

1. Saisissez `/plugins` pour ouvrir le navigateur de Plugins.
2. Installez le Plugin depuis une marketplace configurée.
3. **Démarrez une nouvelle session**, puis vérifiez le Skill ou l’outil installé avec le paquet.

L’extension IDE ne prend actuellement pas en charge les Plugins. Il ne sert donc pas de rédiger un dépannage pour une « entrée introuvable dans l’IDE » : utilisez plutôt l’App de bureau ChatGPT ou Codex CLI pour gérer les Plugins.

## Prompt de vérification à faible risque

```text
Examine uniquement le Plugin <plugin-name> qui vient d’être installé,
sans effectuer d’écriture :
1. Liste les Skills et les outils qui lui sont liés dans cette tâche ;
2. Indique pour chaque outil s’il est en lecture seule ou peut produire un effet externe ;
3. Effectue un appel minimal avec des données de test ou une requête en lecture seule ;
4. Précise le composant réellement utilisé et les autorisations qui demandent
   encore une confirmation humaine.
```

Si le Plugin nécessite une connexion externe, ne commencez pas par envoyer des messages, modifier un état, supprimer des données ou écrire des fichiers en masse.

## Adoption en équipe

1. **Inventorier les composants** : répertorier Skills, connecteurs, MCP, extensions de navigateur, Hooks et modèles.
2. **Vérifier la provenance** : confirmer marketplace, dépôt, éditeur et politique de mise à jour.
3. **Limiter les permissions** : essayer avec un compte de test et des portées en lecture seule.
4. **Faire un pilote isolé** : commencer dans un projet hors production ou une petite équipe.
5. **Examiner les Hooks** : utiliser `/hooks` pour vérifier le hash et le comportement des Hooks inclus dans le Plugin.
6. **Prévoir la sortie** : documenter la désactivation, la désinstallation, le retour arrière et la révocation OAuth.

## Limites à ne pas négliger

- Une installation réussie ne prouve ni la sûreté des composants ni leur adéquation aux données concernées.
- Le Plugin peut demander une connexion à un service externe ; l’autorisation correspondante est une étape distincte et risquée.
- Les Hooks du Plugin s’exécutent avec les autres Hooks correspondants ; ils ne remplacent pas automatiquement les anciens.
- Les administrateurs du workspace peuvent limiter les Plugins et outils disponibles. Voir un Plugin dans un catalogue personnel ne signifie pas qu’il est autorisé par l’organisation.
- Mobile convient à l’utilisation des Plugins déjà associés au compte ; ne supposez pas qu’il offre toute l’interface de gestion.

## Quand un Plugin n’est pas nécessaire

- Un seul `SKILL.md` simple, sans besoin de combinaison ou de distribution.
- Un script personnel ponctuel, encore en cours d’expérimentation.
- Des règles de permission et de mise à jour pas encore stabilisées.
- Des utilisateurs qui travaillent uniquement dans l’extension IDE.

Il est généralement plus facile d’examiner un ensemble après avoir stabilisé et vérifié séparément un Skill ou un flux MCP.

## Liste de vérification

- [ ] L’interface cible prend en charge les Plugins.
- [ ] L’éditeur et la provenance sont traçables.
- [ ] Les connexions externes et les portées OAuth ont été examinées.
- [ ] Les Hooks du Plugin ont été examinés et approuvés.
- [ ] Une tâche minimale en lecture seule a réussi.
- [ ] Une nouvelle session découvre le Skill ou l’outil attendu.
- [ ] L’équipe dispose d’instructions pour désactiver, revenir en arrière et révoquer les autorisations.

## Sources officielles

- [OpenAI : Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI : Hooks](https://learn.chatgpt.com/docs/hooks)
