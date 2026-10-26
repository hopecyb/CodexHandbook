---
title: "Context Engineering (engenharia de contexto)"
description: "O contexto inclui tarefa, instruções, arquivos, resultados recuperados e saídas de ferramentas. É preciso decidir o que entra na tarefa atual, o que consultar quando necessário e o que manter após a compactação."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Os eventos e as descrições de projetos abaixo foram verificados em fontes primárias. As orientações de aprendizagem são avaliações do autor; verificar fontes não equivale a testar o produto."
  evidence:
    - label: "Artigo sobre engenharia de contexto"
      href: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
locale: pt
source_locale: zh-CN
source_revision: "d668433"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---
## Evento verificável e escopo

**Data: 2025-09-29 · Tipo: artigo de engenharia.** A Anthropic publicou *Effective context engineering for AI agents*, sobre como organizar o contexto necessário a um agente. A data do artigo não é a data de criação do conceito.

Fonte: [artigo sobre engenharia de contexto](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). Verificado em 2026-09-18; a data de publicação da fonte e a data de verificação desta página têm significados diferentes.

## Que problema resolve

O contexto inclui tarefa, instruções, arquivos, resultados recuperados e saídas de ferramentas. É preciso decidir o que entra na tarefa atual, o que consultar quando necessário e o que manter após a compactação.

## Orientações de aprendizagem e limites

O texto a seguir é uma avaliação didática deste site, não uma medida de adoção no setor nem de eficácia:

Priorize os fatos e os caminhos para evidências relevantes à decisão atual. Mais conteúdo pode gerar ruído; um resumo compactado não substitui arquivos essenciais. Se o objetivo se desviar, confira os resultados e as restrições existentes antes de acrescentar outro prompt.

## Exercício prático

[Manter o contexto focado](/pt/guide/context/keep-context-focused/): liste os arquivos indispensáveis à tarefa atual, as referências a consultar quando necessário e o material irrelevante. Guarde objetivo, trabalho concluído, questões pendentes e caminhos das evidências como registro de passagem.

[Voltar ao roteiro e aos critérios de datas](/pt/ai-roadmap/)
