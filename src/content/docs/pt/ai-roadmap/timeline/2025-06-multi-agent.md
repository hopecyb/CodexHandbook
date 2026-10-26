---
title: Multi-agent (colaboração entre agentes)
description: Vários agentes podem fazer buscas, análises ou revisões independentes e reunir os resultados por meio de um formato de passagem combinado. Coordenação, trabalho duplicado e estado compartilhado acrescentam custos.
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: O evento ou a descrição do projeto na fonte primária abaixo foi conferido; as recomendações de aprendizagem são julgamento do autor, e a verificação da fonte não é apresentada como teste do produto.
  evidence:
  - label: Artigo de engenharia sobre um sistema de pesquisa multi-agent
    href: https://www.anthropic.com/engineering/multi-agent-research-system
locale: pt
source_locale: zh-CN
source_revision: "f24f2f5"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: '2026-09-20'
---

## Evento verificável e escopo

**Data: 2025-06-13 · Tipo: artigo de engenharia.** A Anthropic publicou sua experiência de engenharia com um sistema de pesquisa multi-agent. A data comprova a publicação do artigo, não que todo o setor tenha entrado naquele dia em uma fase de adoção ampla.

Fonte: [Artigo de engenharia sobre um sistema de pesquisa multi-agent](https://www.anthropic.com/engineering/multi-agent-research-system). Conferido em 2026-09-18; a data de publicação da fonte e a data de verificação desta página têm significados diferentes.

## Que problema resolve

Vários agentes podem fazer buscas, análises ou revisões independentes e reunir os resultados por meio de um formato de passagem combinado. Coordenação, trabalho duplicado e estado compartilhado acrescentam custos.

## Recomendações de aprendizagem e limites de aplicação

O que segue é uma avaliação didática deste site, não uma medida de adoção no setor ou de eficácia:

Considere o trabalho em paralelo apenas quando as subtarefas puderem ser executadas de forma independente. Se houver dependências estreitas, alterações no mesmo arquivo ou impossibilidade de validar cada tarefa separadamente, comece com um único agente. Os ganhos relatados por um fornecedor em suas próprias avaliações não podem ser tomados diretamente como taxa de sucesso do exercício deste site.

## Exercício prático

[Fluxo de coordenação multi-agent](/pt/cases/coordinate-multiple-agents/): primeiro, monte uma tabela de divisão de tarefas com entradas, saídas e dependências de cada papel; depois, decida se vale a pena trabalhar em paralelo. Este é um exemplo de fluxo, não um experimento multi-agent cujos ganhos foram medidos por este site.

[Voltar ao roteiro e seus critérios de data](/pt/ai-roadmap/).
