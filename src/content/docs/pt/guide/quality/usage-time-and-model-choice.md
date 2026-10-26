---
title: Uso, tempo e escolha do modelo
description: Registre separadamente limite da assinatura, custo da API, espera e retrabalho. Compare modelos com as mesmas tarefas sem confundir consumo com qualidade.
contentType: guide
audiences:
- beginner
- creator
- developer
- team
level: intermediate
outputs:
- csv
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Foram conferidas as explicações oficiais sobre uso, preços da API e cobrança do raciocínio. Os modelos de registro e a estimativa são didáticos; não há medições de velocidade, custo ou economia de tempo de modelos.
  evidence:
  - label: Uso e preços oficiais do Codex
    href: https://learn.chatgpt.com/docs/pricing
  - label: Preços oficiais da API
    href: https://developers.openai.com/api/docs/pricing
  - label: Guia de modelos de raciocínio
    href: https://developers.openai.com/api/docs/guides/reasoning
assets:
- path: /downloads/usage-log/usage-log-1.0.0.zip
  purpose: Modelos para custos e duração das execuções, capturas de limite e notas sobre fontes
  license: CC0-1.0
  version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "8b68d92"
translation_status: reviewed
translated_at: 2026-10-25
reviewed_at: '2026-10-26'
---

Primeiro esclareça o que está medindo: o limite restante na conta, o custo de uma chamada à API, o tempo de espera ou o trabalho humano de revisão e correção. Essas grandezas têm unidades diferentes e não podem substituir umas às outras.

[Baixar os modelos de registro](/downloads/usage-log/usage-log-1.0.0.zip) · [Instruções de preenchimento](/downloads/usage-log/README.md)

## Mantenha quatro contas separadas

| Medida | Base do registro | Interpretação equivocada comum |
|---|---|---|
| Limite da assinatura | Janela, percentual restante e horário de redefinição exibidos na interface atual | Converter diretamente o percentual restante em dólares ou em número fixo de tarefas |
| Custo da API | Uso real da chamada, modelo e preço aplicável; conferir a fatura | Usar o preço da assinatura como tarifa da API ou tratar estimativa como cobrança efetiva |
| Tempo de espera | Início, fim, fila e tentativas da mesma tarefa | Registrar só a última execução bem-sucedida e ignorar o tempo perdido em falhas |
| Esforço humano | Medir revisão e retrabalho separadamente | Contar toda a espera do modelo como tempo de trabalho humano poupado |

A [explicação oficial de preços](https://learn.chatgpt.com/docs/pricing) diz que o uso por tarefa depende do modelo, contexto, raciocínio, ferramentas e cache. Estimativas de quantidade de mensagens não são limites fixos. Confira seu limite atual no painel de uso; em uma sessão CLI, use `/status`. O uso por chave de API é cobrado pelas tarifas da API.

Uma captura do limite pode incluir outras tarefas ou a redefinição de uma janela. Uma queda de 5% entre duas capturas não prova que esta tarefa sempre consome 5%, nem permite prometer quantas execuções ainda restam.

## Confirme a base de cobrança antes de estimar o custo da API

Consulte o preço aplicável por modelo, categoria de tokens de entrada, cache e saída e condições do serviço. Calcule com o uso real e inclua outros itens cobráveis separadamente. Este manual não mantém outra tabela fixa de preços de modelos. Veja os [preços da API](https://developers.openai.com/api/docs/pricing).

Tokens de raciocínio são cobrados como tokens de saída. Confira se um campo de uso já inclui essa parcela antes de somá-la, para não contar duas vezes. Verifique também quais níveis de raciocínio o modelo admite no [guia de modelos de raciocínio](https://developers.openai.com/api/docs/guides/reasoning).

Exemplo didático: suponha 10.000 tokens de entrada e 2.000 de saída, sem cache ou outras cobranças. Com tarifas **fictícias** de US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de tokens de saída, a estimativa é US$ 0,04. Isso apenas demonstra a conversão de unidades; não é preço de nenhum modelo nem fatura real.

## Compare configurações usando as mesmas tarefas

Escolha tarefas com critérios de aceitação claros e crie uma referência com as configurações disponíveis. Mantenha iguais entradas, permissões das ferramentas, instruções do projeto e método de avaliação. Altere apenas um fator principal por vez: o modelo ou a configuração de raciocínio.

Compare correção, limites, evidências e retrabalho item por item, não só a velocidade de resposta. Se uma configuração mais leve não atender aos critérios de forma consistente, descubra se a causa é material ausente, escopo pouco claro ou raciocínio insuficiente antes de aumentar a configuração. Um nível mais alto não substitui a conferência de fontes nem os testes.

Esta é uma recomendação de avaliação do manual, não um resultado medido que prove que algum modelo sempre vence. Use as [três comparações de prompts](/pt/prompts/comparison-lab/) e as [amostras de avaliação de fluxos de trabalho](/pt/guide/quality/workflow-evaluation/) para registrar suas observações.

## Registre as condições da amostra

A [tabela de execuções](/downloads/usage-log/runs.csv) registra o hash da entrada, o rótulo real do modelo, o cliente, a configuração de raciocínio, a modalidade de cobrança, os tempos, as tentativas, o resultado e a evidência de custo. A [tabela de capturas do limite](/downloads/usage-log/allowance-snapshots.csv) registra separadamente a janela e o horário de redefinição.

Guarde falhas e interrupções. Registre revisão humana e retrabalho separadamente. Deixe os campos desconhecidos em branco e explique por quê; preencher com zero simularia ausência de consumo. Use apelidos de conta e não inclua chaves, dados da conta ou logs privados em materiais públicos.

As tabelas para download ainda não contêm execuções medidas. Sem uma referência humana comparável, não calcule percentual de tempo poupado. Sem amostras repetidas, não afirme uma vantagem estável de velocidade. Uma espera menor do modelo pode não compensar se houver mais retrabalho.

## O que fazer ao se aproximar de um limite

Salve os resultados atuais, as pendências e o ponto de retomada. Verifique se a tarefa está presa em tentativas repetidas ou lendo material irrelevante. Reduza o escopo não essencial de acordo com o objetivo, preservando os critérios de qualidade e segurança. Não pule verificações importantes apenas para terminar antes de esgotar o limite.

Se precisar continuar, confira seu limite atual e a modalidade de cobrança antes de decidir. Este artigo não muda automaticamente para cobrança de API, não compra créditos nem altera as configurações da conta. Equipes podem usar o [piloto de duas semanas](/pt/guide/learning-paths/team/) para documentar os motivos da escolha e as condições de retorno.

Consulte os modelos atuais, as diferenças entre interfaces e as recomendações por tarefa: [Escolher modelos: um ponto de partida por tarefa](/pt/guide/reference/model-selection/).
