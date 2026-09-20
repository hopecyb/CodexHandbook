---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: La documentation actuelle de Codex CLI dans le centre d'aide OpenAI décrit toujours Full Auto comme un environnement en bac à sable, sans réseau et limité au répertoire courant, tout en le distinguant des modes d'approbation. Cette page explique seulement que le bac à sable et le réseau sont deux limites de risque distinctes et comment les débutants peuvent restreindre les accès.
  checkedAt: '2026-07-26'
title: Bac à sable et réseau
description: Comprendre l'isolation d'exécution, l'accès réseau et les limites de risque.
locale: fr
source_locale: zh-CN
source_revision: '5937622'
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 80
---

« Bac à sable » et « réseau » désignent deux choses différentes : le premier limite ce que Codex peut toucher, tandis que le second limite les destinations auxquelles il peut se connecter.

Le **bac à sable** restreint l'accès de l'agent au système de fichiers et à certaines fonctions du système, ce qui réduit la portée d'une erreur. **L'accès réseau** ajoute un autre risque : des informations sensibles présentes dans l'instruction pourraient être exposées, ou des données non fiables pourraient être récupérées.

## Pourquoi ces limites comptent

Sans elles, une mauvaise compréhension de la tâche pourrait avoir des conséquences plus larges :

- Modifier un dossier que vous vouliez préserver
- Lire un fichier sensible qui n'aurait pas dû être consulté
- Envoyer le contenu de la tâche à un site externe
- Récupérer des données ou scripts de provenance inconnue

Ces limites sont des garde-fous de sécurité, pas des obstacles ajoutés sans raison.

## Conseils pour commencer

1. Pendant les exercices, désactivez les accès réseau inutiles ou n'autorisez que ceux dont vous avez clairement besoin.
2. Ne placez pas de secrets de production dans votre projet d'entraînement.
3. Face à une demande d'accès réseau ou d'écriture dans un chemin sensible, arrêtez-vous pour la comprendre avant d'approuver.

## Idées reçues

### 1. Le bac à sable signifie-t-il que Codex manque de capacités ?

Le bac à sable sert surtout à maîtriser les risques, pas simplement à réduire ses capacités.

### 2. Plus d'accès réseau est-il toujours préférable ?

Davantage d'accès signifie :

- Des sources d'information plus nombreuses et plus complexes
- Une exposition accrue à du contenu non fiable
- La possibilité que le contenu de la tâche atteigne un service externe

Pendant l'apprentissage, évitez le réseau si vous n'en avez pas besoin.

### 3. Comment juger une demande d'autorisation ?

Posez-vous trois questions :

1. Cette tâche a-t-elle réellement besoin du réseau ?
2. Le chemin ou le site visé correspond-il à ce que j'attendais ?
3. Si je refuse cette étape, Codex peut-il continuer de façon plus sûre ?

## Une image plus simple

Imaginez deux portes :

- **Porte du bac à sable** : détermine les fichiers et zones du système accessibles à Codex
- **Porte du réseau** : détermine s'il peut regarder ou se connecter à l'extérieur

Ces deux portes sont à la fois des réglages techniques et des moyens de maîtriser les risques.

Pour les réglages du produit, voir les [Paramètres](/fr/guide/desktop-app/settings/) de l'application de bureau. Pour les détails officiels, voir [developers.openai.com/codex](https://developers.openai.com/codex).

Au début, mieux vaut limiter davantage les accès tant que vous ne comprenez pas bien les risques.
