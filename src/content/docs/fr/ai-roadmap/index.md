---
title: Feuille de route des applications IA
description: Comprendre Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills et les autres jalons de l'ingénierie des applications IA.
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-08
---

# Feuille de route des applications IA

Cette carte de connaissances s'adresse à l'ingénierie des applications IA. Elle ne suit pas les paramètres des modèles, les classements ou chaque lancement produit. Elle relie plutôt les méthodes clés en ordre chronologique inverse : des systèmes d'agents réutilisables et vérifiables vers les pratiques qui les ont rendus possibles.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/ai-roadmap/timeline/2026-04-skills/">Skills (compétences)</a></h3>
    <p>Les Skills emballent prompts, étapes, exemples, scripts et ressources dans des unités de workflow réutilisables. Elles aident une équipe à capitaliser son savoir-faire au lieu de réexpliquer chaque fois « comment faire ».</p>
    <p><strong>À travailler :</strong> SKILL.md, divulgation progressive, ressources dépendantes, limites de réutilisation, conventions d'équipe.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering (ingénierie du harnais d'exécution)</a></h3>
    <p>Le Harness Engineering conçoit l'environnement qui permet au modèle d'accomplir une tâche de manière fiable : outils, contexte, retours de validation, reprise après échec, seuils qualité et régressions.</p>
    <p><strong>À travailler :</strong> harnais de tâche, feedback de vérification, récupération d'erreur, seuils qualité.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/ai-roadmap/timeline/2026-01-openspec/">OpenSpec (développement piloté par spécification)</a> / <a href="/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw (passerelle d'assistant IA personnel)</a></h3>
    <p>Ces deux nœuds indiquent deux directions : OpenSpec transforme exigences et conception en artefacts de spécification traçables ; OpenClaw unifie assistants personnels, canaux et passerelles d'outils.</p>
    <p><strong>À travailler :</strong> spec-driven development, passerelles, sessions, canaux, artefacts traçables.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering (ingénierie du contexte)</a></h3>
    <p>Le Context Engineering déplace l'attention de « comment écrire le prompt » vers « ce que le modèle doit voir, dans quel ordre, et ce qu'il faut compresser ou exclure ».</p>
    <p><strong>À travailler :</strong> priorité du contexte, stratégie de recherche, compression, mémoire, sélection de fichiers.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent (collaboration entre agents)</a></h3>
    <p>Le Multi-agent répartit un travail complexe entre plusieurs rôles : recherche, implémentation, revue, vérification et synthèse. L'objectif est la structure, le parallélisme et le contrôle croisé.</p>
    <p><strong>À travailler :</strong> frontières de rôle, formats de passation, résolution de conflits, revue et vérification.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/ai-roadmap/timeline/2025-03-tool-use/">Tool Use (utilisation d'outils)</a></h3>
    <p>Tool Use décrit comment un modèle choisit des outils, les appelle, lit leurs résultats et poursuit le raisonnement. C'est le passage de la réponse unique à l'exécution multi-étapes.</p>
    <p><strong>À travailler :</strong> sélection d'outils, chaînes d'appels, état, reprise après échec d'outil.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/ai-roadmap/timeline/2024-11-mcp/">MCP (protocole de contexte de modèle)</a></h3>
    <p>MCP protocolise l'accès aux outils, ressources et prompts. Sa valeur n'est pas seulement de connecter plus d'outils, mais de rendre ces intégrations réutilisables, découvrables et gouvernables.</p>
    <p><strong>À travailler :</strong> serveurs, clients, tools, resources, prompts, permissions et débogage.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/ai-roadmap/timeline/2023-11-rag/">RAG (génération augmentée par récupération)</a></h3>
    <p>RAG ancre les réponses dans des documents récupérés. Il fait passer l'IA de « savoir parler » à « répondre avec des sources traçables », notamment pour bases de connaissances et documents internes.</p>
    <p><strong>À travailler :</strong> découpage, recherche vectorielle, reranking, citations, compression du contexte.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/ai-roadmap/timeline/2023-06-function-calling/">Function Calling (appel de fonctions)</a></h3>
    <p>Function Calling a fait passer les modèles de la réponse en texte à l'appel de capacités externes avec des paramètres structurés. C'est ce qui permet à l'IA d'entrer dans les vrais systèmes.</p>
    <p><strong>À travailler :</strong> schémas, validation de paramètres, limites des outils, retours d'erreur.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering (ingénierie des prompts)</a></h3>
    <p>Le point de départ de l'ingénierie IA appliquée est le contrôle des entrées : expliciter objectifs, contexte, contraintes, exemples et format de sortie pour stabiliser le comportement du modèle.</p>
    <p><strong>À travailler :</strong> découpage de tâche, rôle, exemples few-shot, format de sortie, retry.</p>
  </article>
</div>
