---
title: "Planejamento: esclarecer execução e verificação"
description: "Use um plano para tratar escopo, dependências e escolhas; distinga planejamento de espera e avance dentro da autorização já existente."
contentType: guide
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Esta página oferece orientações de trabalho confrontadas com a classificação de tarefas e as permissões; não afirma comportamentos padrão de clientes nem ganhos de eficiência medidos."
sidebar:
  order: 10
locale: pt
source_locale: zh-CN
source_revision: 8696afd
translation_status: draft
translated_at: 2026-09-20
---
Um plano é um caminho de execução que pode ser verificado e ajustado. Ele ajuda a encontrar cedo lacunas de escopo, dependências e aceitação, mas uma tarefa maior não exige pausas repetidas para pedir confirmação.

Comece pela [classificação de tarefas](/pt/prompts/ask-for-a-plan/): concluir diretamente, planejar e depois executar dentro da autorização existente, ou apresentar apenas uma proposta nesta vez. Um pedido explícito de “primeiro o plano, sem alterar arquivos” permanece somente de leitura. Um pedido de implementação não deve terminar apenas com o plano.

## Um plano suficientemente claro

| Elemento | O que especificar |
|---|---|
| Objetivo | Comportamento observável após a conclusão |
| Escopo | Arquivos, entradas e exclusões relevantes |
| Ordem | Dependências reais, sem tratar cada chamada de ferramenta como etapa |
| Verificação | Saídas ou checagens que demonstram a conclusão |
| Escolhas | Só decisões ainda abertas que afetam o resultado |

Para adicionar um agrupamento de dados a um relatório existente, o plano pode ser “conferir definições → alterar agregação e exibição → comparar totais e grupos com uma amostra”. Não é preciso pedir aprovação separada para cada leitura, edição e teste.

## Dois pedidos de planejamento diferentes

**A solução ainda não foi definida:**

```text
Nesta vez, analise somente em leitura duas opções de exportação quanto a dependências, compatibilidade e custo de manutenção.
Recomende uma e aponte as escolhas que preciso fazer. Não altere a implementação.
```

**Escopo definido, implementação necessária:**

```text
Conclua a exportação CSV segundo os requisitos existentes. Primeiro examine o repositório e dê um plano breve;
depois implemente e verifique continuamente dentro do escopo combinado, sem esperar após cada etapa.
Se precisar criar um serviço, mudar a interface pública ou ampliar o acesso a dados, explique antes o motivo específico.
```

São exemplos criados para este manual. A exibição de um pedido de aprovação depende das ferramentas, políticas e permissões reais.

## Ajustar durante a execução

- Detalhe comum de implementação: atualize o plano e continue no escopo autorizado.
- Premissa inicial inválida: explique evidências e impacto e proponha uma alternativa dentro do escopo.
- Escolha que cabe ao usuário: faça uma pergunta específica e continue o trabalho independente da resposta.
- Ação externa não autorizada: prepare um resultado revisável e peça autorização antes da ação.

Não pare por um problema apenas possível, mas também não siga o plano ignorando uma mudança de escopo que ocorreu.

## Como comentar o plano

```text
Mantenha as etapas 1 e 2, mas retire a refatoração.
Nesta vez faça apenas uma prévia local; não publique.
Acrescente uma condição de aceitação: o formato antigo de arquivo continua legível.
```

O comentário altera apenas o que menciona explicitamente. Restrições e critérios não revogados continuam válidos. Se houver interrupção, registre arquivos atuais, verificações concluídas e próximo passo em uma [nota de passagem](/pt/guide/agent-work/handoff-and-resume/).

## Voltar às evidências ao concluir

Confira se o objetivo foi alcançado, não apenas se todas as etapas foram marcadas. Registre testes não executados, prévias não examinadas e fatos não verificados. O processo completo está em [Explorar → Planejar → Executar → Verificar](/pt/cases/workflows/explore-plan-execute-verify/).
