---
title: Roteiro de aplicações de IA
description: Entenda Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills e outros marcos da engenharia de aplicações de IA.
locale: pt
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-08-08
reviewed_at: 2026-08-26
source_revision: 0333168
---

# Roteiro de aplicações de IA

Este é um mapa de conhecimento para engenharia de aplicações de IA. Ele não acompanha parâmetros de modelos, rankings ou lançamentos isolados; conecta os métodos principais em ordem cronológica inversa, dos sistemas de agentes reutilizáveis e verificáveis às práticas que os tornaram possíveis.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/pt/ai-roadmap/timeline/2026-04-skills/">Skills (habilidades)</a></h3>
    <p>Skills empacotam prompts, etapas, exemplos, scripts e recursos em unidades de workflow reutilizáveis. Elas ajudam equipes a preservar experiência em vez de explicar “como fazer” toda vez.</p>
    <p><strong>Foco:</strong> SKILL.md, divulgação progressiva, recursos dependentes, limites de reutilização, convenções de equipe.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/pt/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering (engenharia do ambiente de execução)</a></h3>
    <p>Harness Engineering projeta o ambiente que permite ao modelo concluir tarefas com confiabilidade: ferramentas, contexto, feedback de verificação, recuperação, gates de qualidade e regressões.</p>
    <p><strong>Foco:</strong> task harnesses, feedback de verificação, recuperação de falhas, gates de qualidade.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/pt/ai-roadmap/timeline/2026-01-openspec/">OpenSpec (desenvolvimento orientado por especificação)</a> / <a href="/pt/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw (gateway de assistente pessoal de IA)</a></h3>
    <p>Esses dois nós apontam para direções diferentes: OpenSpec transforma requisitos e design em artefatos rastreáveis; OpenClaw unifica assistentes pessoais, canais e gateways de ferramentas.</p>
    <p><strong>Foco:</strong> spec-driven development, gateways, sessões, canais e artefatos rastreáveis.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/pt/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering (engenharia de contexto)</a></h3>
    <p>Context Engineering muda o foco de “como escrever o prompt” para “o que o modelo deve ver, em que ordem, e o que deve ser comprimido ou excluído”.</p>
    <p><strong>Foco:</strong> prioridade de contexto, estratégia de busca, compressão, memória e seleção de arquivos.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/pt/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent (colaboração entre agentes)</a></h3>
    <p>Multi-agent divide trabalhos complexos entre papéis como pesquisa, implementação, revisão, verificação e síntese. O objetivo é estrutura, paralelismo e checagem mútua.</p>
    <p><strong>Foco:</strong> fronteiras de papéis, formatos de handoff, resolução de conflitos, revisão e verificação.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/pt/ai-roadmap/timeline/2025-03-tool-use/">Tool Use (uso de ferramentas)</a></h3>
    <p>Tool Use trata de como um modelo escolhe ferramentas, chama ferramentas, lê resultados e continua a tarefa. É a ponte entre respostas pontuais e execução em várias etapas.</p>
    <p><strong>Foco:</strong> seleção de ferramentas, cadeias de chamadas, estado e recuperação após falhas.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/pt/ai-roadmap/timeline/2024-11-mcp/">MCP (protocolo de contexto de modelo)</a></h3>
    <p>MCP transforma ferramentas, recursos e prompts em superfícies de protocolo. Seu valor não é apenas ter mais integrações, mas torná-las reutilizáveis, descobríveis e governáveis.</p>
    <p><strong>Foco:</strong> servers, clients, tools, resources, prompts, permissões e depuração.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/pt/ai-roadmap/timeline/2023-11-rag/">RAG (geração aumentada por recuperação)</a></h3>
    <p>RAG ancora respostas em material recuperado. Ele leva a IA de “consegue falar” para “consegue responder com evidência rastreável”.</p>
    <p><strong>Foco:</strong> chunking, busca vetorial, reranking, citações e compressão de contexto.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/pt/ai-roadmap/timeline/2023-06-function-calling/">Function Calling (chamadas de função)</a></h3>
    <p>Function Calling levou os modelos de respostas em texto para chamadas de capacidades externas com parâmetros estruturados. Isso permite que a IA entre em sistemas reais.</p>
    <p><strong>Foco:</strong> design de schemas, validação de parâmetros, limites de ferramentas e retorno de erros.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/pt/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering (engenharia de prompts)</a></h3>
    <p>O ponto de partida é o controle de entrada: explicitar objetivos, contexto, restrições, exemplos e formato de saída para estabilizar o comportamento do modelo.</p>
    <p><strong>Foco:</strong> decomposição de tarefas, papéis, exemplos few-shot, formato de saída e novas tentativas.</p>
  </article>
</div>
