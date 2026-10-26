---
title: "Quando executar diretamente e quando pedir primeiro um plano"
description: "Escolha entre execução direta, planejamento e aprovação de uma ação concreta segundo o escopo, a incerteza e o impacto externo, com duas comparações de prompts."
contentType: prompt
audiences: [beginner, developer, creator]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "As três categorias de tarefas e as duas comparações são recomendações editoriais de colaboração. Os limites de autorização e execução foram verificados; não são modos fixos do cliente nem uma experiência sobre a taxa de sucesso do modelo."
locale: pt
source_locale: zh-CN
source_revision: "706f11b"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Pedir um plano depende das decisões que ainda faltam tomar. Uma alteração com escopo claro e fácil de reverter pode ser executada diretamente. Se o caminho não estiver claro, planeie primeiro. Pare antes de uma ação concreta que exija autorização adicional. Pedir um plano não significa esperar uma resposta do usuário depois de cada passo.

## Primeiro, identifique a categoria

| Categoria | Como reconhecer | O que indicar | Quando parar |
|---|---|---|---|
| Executar diretamente | Entradas, escopo e critérios de aceitação claros; alteração reversível | Indicar onde alterar, o que conta como conclusão e o que fica excluído | Se o trabalho sair do escopo ou faltar informação essencial |
| Planear primeiro | Escolhas de arquitetura, escopo incerto ou vários passos interdependentes | Analisar o estado atual e descrever percurso, impacto e verificação | Se uma escolha couber ao usuário ou este pedir expressamente para rever primeiro o plano |
| Ação sujeita a aprovação | Uma ação concreta teria um efeito externo não autorizado ou atingiria um limite de permissão de execução | Preparar um resultado para revisão e indicar ação, alvo e impacto | Antes dessa ação, mantendo a preparação já concluída |

«Envolve três arquivos» não é um limiar universal de aprovação: um único arquivo de configuração da produção pode ter grande impacto. Consulte [permissões e sandbox](/pt/guide/permissions-and-sandbox/) para os diálogos do produto e as permissões reais de execução. Esta tabela não configura as permissões de todos os clientes.

## Comparação 1: corrigir texto local

tarefa: corrigir duas gralhas no README sem alterar a estrutura.

**Contraexemplo com pausas excessivas:**

```text
Apresenta primeiro um plano e espera pela minha aprovação antes de ler ficheiros.
Depois da leitura, indica as duas alterações e espera novamente pela aprovação.
Para após cada alteração para me perguntar e depois pergunta se deves verificar.
```

Estas esperas não resolvem nenhuma decisão necessária; fragmentam uma tarefa já autorizada e bem delimitada.

**Formulação com escopo claro:**

```text
No corpo de README.md, substitui as duas ocorrências de «帐户» por «账户».
Mantém os blocos de código, ligações e todo o restante conteúdo. Faz a
alteração diretamente, verifica o diff e indica onde alteraste. Se não
encontrares exatamente duas ocorrências, explica primeiro a diferença;
não alargues a tarefa a uma revisão integral do texto.
```

A aceitação exige duas alterações exatas e nenhum conteúdo alheio modificado. Uma mudança deste tipo normalmente não precisa de testes novos; faça as verificações adequadas segundo as regras existentes do projeto.

## Comparação 2: alterar e publicar um site

tarefa: atualizar três tutoriais e publicá-los no site de produção. É preciso distinguir a preparação do conteúdo do impacto da publicação.

**Contraexemplo com autorização pouco clara:**

```text
Escreve primeiro um plano, depois altera o site inteiro e publica-o.
```

Não especifica que conteúdos alterar, onde publicar ou se é permitido substituir a versão online.

**Formulação com limites concretos:**

```text
Atualiza estes três tutoriais e corrige as ligações internas relacionadas.
Lê o estado atual e apresenta um plano breve; depois conclui as alterações,
a compilação e a verificação da pré-visualização nesses ficheiros e na
navegação relacionada, sem esperar a cada passo. Entrega a pré-visualização,
o resumo das alterações e os resultados da verificação. A publicação em
produção ainda não está autorizada. Quando a preparação terminar, indica
a versão a publicar, o ambiente de destino e o método de reversão, e espera
pela minha confirmação da ação de publicação.
```

Neste caso, conclua o trabalho local antes de pedir a autorização final para publicar. Se o usuário já autorizou expressamente o destino e a ação de publicação concretos, aplique a política atual para decidir se pode avançar; não volte a pedir a mesma autorização apenas porque este modelo inclui um pedido de confirmação.

As duas comparações são exemplos didáticos, não saídas reais do modelo nem medições de eficiência.

## Quando fazer apenas um plano

Se ainda estiver a comparar opções, precisar de uma decisão sobre orçamento ou quiser rever expressamente o desenho antes de executar, limite o trabalho ao plano:

```text
Nesta ronda, faz apenas o plano. Lê a implementação existente e apresenta
duas opções, o impacto de cada uma e como as validar. Identifica as escolhas
que exigem realmente a minha decisão. Não alteres a implementação. Executa
apenas depois de a abordagem estar definida.
```

Este limite explícito da fase deve ser respeitado. A autonomia habitual do agente não permite saltar diretamente para a implementação.

## O que incluir num plano

Um plano suficiente indica objetivo, escopo afetado, passos, verificação e escolhas ainda por resolver. Uma resposta conhecida não precisa de virar uma pergunta à espera de confirmação. Uma tarefa curta e de baixo risco também não precisa de uma secção de reversão só para preencher um modelo.

Se surgirem novidades durante a execução, distinga detalhes normais de implementação de uma alteração do objetivo. Resolva e explique os pequenos problemas dentro do escopo original. Perante uma nova dependência, uma alteração mais ampla, uma mudança de interface ou uma nova ação externa, avalie primeiro se a autorização continua a cobri-la.

## Regras predefinidas para as instruções do projeto

```md
- Executar diretamente tarefas de âmbito claro e reversíveis, com verificação
  adequada.
- Nas tarefas complexas, apresentar primeiro um plano breve. Esperar apenas
  se o utilizador pediu para o rever ou se há uma escolha necessária.
- Prosseguir dentro do âmbito autorizado sem repetir a confirmação a cada passo.
- Explicar o problema concreto se faltar informação essencial, o âmbito for
  ultrapassado ou for necessária uma ação não autorizada.
- Não tratar alterações locais concluídas como autorização automática para
  publicar, enviar mensagens ou apagar dados.
```

Estas recomendações de trabalho podem ser ajustadas; não substituem regras do sistema, políticas da organização nem limites da sandbox. Consulte [Prioridade do contexto](/pt/guide/context/context-priority/), [Planeamento](/pt/guide/agent-work/planning/) e [Padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/).
