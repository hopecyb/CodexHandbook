---
title: "Function Calling (chamadas de função)"
description: "O modelo pode propor o nome de uma função e argumentos estruturados; a aplicação valida-os e decide se executa. Gerar argumentos, obter autorização e executar são três etapas distintas."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Os dados do evento e do projeto abaixo foram conferidos na fonte primária; as recomendações didáticas são um juízo do autor e não constituem um teste prático do produto."
  evidence:
    - label: "Anúncio de lançamento das chamadas de função"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: pt
source_locale: zh-CN
source_revision: "c362c48"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

## Evento verificável e escopo

**Data: 13 de junho de 2023 · Tipo: lançamento de produto.** A OpenAI anunciou chamadas de função para a API Chat Completions da época. Essa data corresponde ao lançamento da API de um fornecedor específico, não ao início de todas as chamadas de ferramentas.

Fonte: [anúncio de lançamento das chamadas de função](https://openai.com/index/function-calling-and-other-api-updates/). Verificado em 18 de setembro de 2026; a data de publicação da fonte e a data de verificação desta página têm significados diferentes.

## Que problema resolve

O modelo pode propor o nome de uma função e argumentos estruturados; a aplicação valida-os e decide se executa. Gerar argumentos, obter autorização e executar são três etapas distintas.

## Recomendações de aprendizagem e limites de aplicação

O que se segue é uma avaliação didática deste site, não uma medição da adoção no setor nem da eficácia:

Dê prioridade a entradas verificáveis, âmbitos de permissão explícitos e respostas em caso de falha. Um JSON válido não significa que os argumentos estejam semanticamente corretos nem que a escrita num sistema externo esteja autorizada. Os nomes de modelos e exemplos de API do anúncio histórico não servem de guia de configuração atual.

## Exercício prático

[Simulação de sugestões para triagem de Issues](/pt/cases/use-cases/team-automation/issue-triage-suggestions/): verifique se as sugestões estruturadas para Issues sintéticas correspondem às entradas e mantenha uma fila de revisão humana. O exercício testa os limites dos dados sem chamar a API histórica nem publicar etiquetas.

[Voltar ao roteiro e aos critérios de data](/pt/ai-roadmap/)
