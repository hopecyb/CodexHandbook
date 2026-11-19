---
title: Como escolher modelos do ChatGPT e Codex
description: Escolha modelo e esforço de raciocínio para conversar, escrever, analisar planilhas, programar ou investigar; depois avalie planos e uso real.
contentType: reference
audiences:
- beginner
- creator
- developer
- team
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: '2026-10-24'
  summary: Os modelos, níveis de pensamento do Chat e planos foram conferidos na documentação oficial. As recomendações são editoriais, sem testes de desempenho, velocidade ou custo.
  evidence:
  - label: Modelos do Work e Codex
    href: https://learn.chatgpt.com/docs/models
  - label: Modelos e níveis de pensamento do Chat
    href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
  - label: Planos e uso
    href: https://learn.chatgpt.com/docs/pricing
locale: pt
source_locale: zh-CN
translation_status: stale
translated_at: 2026-10-25
reviewed_at: '2026-10-26'
source_revision: "20eb508"
---

**Experimente GPT‑6.1 Sol para trabalhos complexos, Luna para tarefas pequenas e bem definidas e Astra para problemas exigentes. No Chat, escolha Instant, Thinking ou Pro.** Identifique primeiro onde está trabalhando e consulte a tabela correspondente.

[Work / Codex](#work-codex) · [Chat](#chat) · [Planos e preços](/pt/chatgpt-pricing/) · [Registrar o uso real](/pt/guide/quality/usage-time-and-model-choice/)

:::note[Escopo · 2026-10-24]
Os modelos, configurações e limites variam conforme a conta, o cliente, o espaço de trabalho e a disponibilização gradual. Esta referência tem data: as recomendações são pontos de partida e não garantem acesso na sua conta. Verifique separadamente os menus e as regras de uso do Chat, Work e Codex.
:::

<span id="work-codex"></span>

## Work / Codex: comece pela tarefa

Estes cenários são recomendações editoriais. Comece pelo nível de raciocínio padrão que o cliente aceita. Reveja os materiais e o escopo antes de escolher um modelo mais capaz.

| tarefa | Ponto de partida sugerido | Quando aumentar o raciocínio ou mudar de modelo | Prática e verificação |
|---|---|---|---|
| Extrair campos, converter formatos, fazer pequenas reescritas | GPT‑6 Luna | Experimente Sol se, com entradas claras, continuarem a faltar campos ou a falhar casos limite | [Registrar uso e retrabalho](/pt/guide/quality/usage-time-and-model-choice/) |
| Escrever a partir de várias fontes | GPT‑6.1 Sol | Considere Astra se o modelo não conseguir lidar com conflitos entre fontes ou continuar omitindo requisitos | [Escrever um artigo](/pt/cases/write-an-article/) |
| Analisar vendas e preparar um relatório semanal | GPT‑6.1 Sol | Aumente o nível se persistirem erros no tratamento de reembolsos, na remoção de duplicatas ou nos cálculos de variação em relação ao período anterior; verifique os resultados com cálculos independentes | [Relatório de vendas](/pt/cases/analyze-a-spreadsheet/) |
| Corrigir um bug ou alterar vários arquivos | GPT‑6.1 Sol | Considere Astra para dependências entre arquivos difíceis de localizar ou correções que falham repetidamente | [Corrigir e verificar um bug](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Investigar várias fontes com requisitos rigorosos | GPT‑6.1 Sol; considere Astra para problemas difíceis | Aumente o nível se não conseguir integrar evidências contraditórias ou continuar ignorando restrições | [Verificar o resultado](/pt/guide/quality/) |

## Características e limitações dos modelos

| Modelo | Função principal | Vantagens e limitações |
|---|---|---|
| GPT‑6 Luna | Eficiência em tarefas claras, repetitivas e frequentes | Útil para tarefas pequenas; decisões complexas exigem uma revisão mais cuidadosa |
| GPT‑6.1 Sol | Equilíbrio entre capacidade e custo para trabalhos complexos | O posicionamento oficial é próximo de Astra a um custo inferior, sem equivalência em todas as tarefas |
| GPT‑6 Astra | A opção de maior capacidade para trabalhos difíceis com vários passos | Considere quando a qualidade do resultado for prioritária; o consumo adicional pode acrescentar pouco em tarefas simples |
| GPT‑6 Sol e modelos GPT‑5.6 | Opções anteriores que podem continuar no cliente | Mantenha fluxos já validados se funcionarem; compare as recomendações atuais para tarefas novas |

O [guia oficial de modelos](https://learn.chatgpt.com/docs/models) apresenta 6.1 Sol no Work e no Codex. Não deduza que existe uma opção com o mesmo nome no Chat. As descrições do Work/Codex e a designação GPT‑6 no Chat devem ser interpretadas nas respectivas interfaces.

<span id="chat"></span>

## Chat: escolha um nível de pensamento

| Opção | Uso sugerido | Considerações |
|---|---|---|
| Instant | Perguntas do dia a dia, tradução, reescritas curtas | Dá prioridade à rapidez de resposta |
| Thinking · Medium | Aprendizagem, comparação de opções, análise geral | Ponto de partida para uma análise ponderada |
| Thinking · High | Matemática, decisões com muitas condições, problemas de código complexos | Mais tempo de pensamento para perguntas difíceis |
| Extra High | Problemas particularmente difíceis que exigem revisão cuidadosa | Use conforme necessário, sujeito ao acesso do plano |
| Pro / GPT‑6 Pro | tarefas difíceis e fluxos de trabalho longos | Usa Astra e está sujeito ao plano e à cota |

Na data de verificação, a documentação do Chat inclui Medium e High no Plus; Extra High e Pro pertencem a planos superiores. O Think de Free / Go não equivale ao recurso de mesmo nome nos planos pagos. Pedir ao Instant para «pensar profundamente» no Plus / Pro não aumenta automaticamente o nível: selecione-o no menu. [Documentação oficial do Chat](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## Quando aumentar ou reduzir o nível

- O resultado cumpre os critérios de aceitação: mantenha a configuração ou experimente uma mais leve na mesma tarefa.
- Faltam fontes ou objetivos claros: complete primeiro as entradas; mais raciocínio não fornece evidências inexistentes.
- Existem omissões repetidas ou falhas lógicas: mantenha as entradas e altere o nível ou o modelo, um de cada vez.
- As configurações elevadas continuam a falhar: reduza o escopo e verifique ferramentas, permissões e validação.

O modelo e o esforço de raciocínio são escolhas distintas. Um nível superior geralmente consome mais tempo e tokens. Verifique as configurações suportadas por modelo e cliente; não transfira diretamente as do Chat para o Codex. [Fundamentos de modelos e raciocínio](/pt/guide/foundations/models-and-reasoning/)

## Precisa mudar de plano?

Experimente o acesso gratuito para uso ocasional. Considere Plus se escreve, analisa ou programa com frequência. Compare Pro quando atingir limites repetidamente ou precisar de mais capacidade ou cota. A adequação de Go depende das funcionalidades necessárias e da diferença de preço local.

Esta é uma sequência de decisão, não uma classificação universal de custo-benefício. **Os planos Pro também têm limites de uso dos modelos.** Verifique separadamente a assinatura, os créditos adicionais e a cobrança pelo uso da API; as proporções entre tarifas não equivalem à economia por tarefa completa.

[Escolher um plano e consultar fontes de preços](/pt/chatgpt-pricing/) · [Contas, planos e acesso](/pt/guide/getting-started/account-plans-and-access/)

## Como avaliar o custo-benefício

Compare com as mesmas entradas, o mesmo escopo de uso das ferramentas e os mesmos critérios de aceitação. Registre separadamente esperas, falhas, novas tentativas, revisão humana e retrabalho. Dê prioridade à configuração mais leve que cumpra os critérios de forma confiável, sem otimizar apenas a velocidade de resposta.

[Baixe e preencha os registros de uso](/pt/guide/quality/usage-time-and-model-choice/) ou reutilize os [três exercícios de comparação de prompts](/pt/prompts/comparison-lab/). O experimento existente não registrou os nomes dos modelos realmente usados e **não permite estabelecer uma classificação de modelos**.

## E se o modelo não estiver disponível?

Verifique se está no Chat, Work ou Codex; depois confirme a versão do cliente, o plano, as permissões do espaço de trabalho e o momento em que a cota será restabelecida. Use um modelo disponível numa tarefa mais limitada ou guarde o progresso e aguarde. Escolher um nome de modelo não concede acesso.

[Diagnóstico de acesso](/pt/guide/getting-started/account-plans-and-access/) · [Resolução de problemas](/pt/guide/reference/troubleshooting/)

## Fontes e atualizações

Os fatos sobre o produto provêm das fontes oficiais no início; as recomendações por tarefa são juízo editorial. Esta página não contém testes de desempenho dos modelos. Os preços são mantidos separadamente na página de preços: confirme as informações na página de pagamento antes de comprar.

- 2026-10-24: Primeiro guia que distingue Chat de Work/Codex, com links a exercícios, registros de uso e fontes de preços.
