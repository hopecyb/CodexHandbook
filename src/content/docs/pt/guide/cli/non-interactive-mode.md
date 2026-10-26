---
title: Modo não interativo
description: Integra o Codex com scripts e pipelines através de codex exec, para CI, tarefas agendadas e automação.
locale: pt
source_locale: zh-CN
source_revision: "1f37961"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 30
legacyVerification: {"status": "verified", "products": "CLI", "basis": "Conferido com a página oficial atual Non-interactive mode: codex exec, --cd, sandbox somente de leitura por padrão e fluxo de saída com progresso em stderr e resposta final em stdout.", "checkedAt": "2026-08-26"}
---

O modo não interativo permite que o Codex conclua uma tarefa **sem uma conversa num TTY**. É a entrada para quem quer usar um Agent em scripts e CI.

Em vez de uma conversa com várias trocas, você entrega a tarefa completa para execução de uma só vez. Funciona mais como uma invocação por comando.

## Nesta página

- Quando usar o modo não interativo em vez de uma sessão interativa de `codex`
- Que requisitos adicionais de segurança e aprovação se aplicam a trabalho sem supervisão
- Como se relaciona com a [configuração](/pt/guide/cli/configuration/)

## Cenários adequados

| Adequado | Inadequado |
|---|---|
| Executar em CI um prompt de revisão fixo | Requisitos que precisam de várias rodadas de esclarecimento |
| Verificação noturna de links da documentação | Refatoração exploratória |
| Gerar código a partir de um modelo predefinido | Decisões de produto muito ambíguas |

## Conceito principal

Uma execução não interativa normalmente:

1. Recebe uma **descrição completa da tarefa** por argumentos ou stdin.
2. Executa no diretório de trabalho indicado.
3. Usa o código de saída para indicar sucesso ou falha.
4. Produz registros ou resultados estruturados para etapas posteriores.

A entrada não interativa atual é `codex exec`. Depois de atualizar a CLI, execute novamente `codex exec --help` para confirmar os parâmetros utilizados pelos scripts.

## Exemplo mínimo funcional (ilustrativo)

```bash
# Executar uma revisão só de leitura na raiz do repositório
codex exec --cd . "Liste os riscos de segurança no diff em relação a main; não altere arquivos"
```

Por predefinição, `codex exec` usa uma sandbox só de leitura. Durante a execução, o progresso vai para `stderr` e a resposta final do Agent vai para `stdout`. Por isso, você pode redirecionar o resultado final para uma etapa seguinte:

```bash
codex exec --cd . "Crie notas de lançamento para os últimos 10 commits" > release-notes.md
```

Sugestões práticas:

- Num script shell, faça primeiro `cd` para uma cópia de trabalho limpa.
- Guarde a tarefa num heredoc ou num arquivo `prompts/` com controle de versões.
- Capture o código de saída e faça o CI falhar quando o processo falhar.

## Segurança

Sem supervisão significa **que você não está presente para recusar uma ação**:

| Princípio | Prática |
|---|---|
| Privilégio mínimo | Token só de leitura e sandbox limitada |
| Sem push | O CI apenas abre um PR ou carrega um artifact |
| Prompt fixo | Não concatenar diretamente texto não sanitizado da descrição de um PR, devido ao risco de injeção |
| Auditoria | Conservar registros e artifacts de diff |

Consulte [Padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/) e a seção `08-developer-platform/non-interactive/` do roteiro.

## Comparação com o modo interativo

| | Modo interativo | Modo não interativo |
|---|---|---|
| Entrada | TUI `codex` | `exec` / pipeline |
| Participação humana | Forte | Fraca; deve ser planeada antes |
| Adequado para aprender | Sim | Não |
| Adequado para CI | Não | Sim |

Uso interativo: [Modo interativo da CLI](/pt/guide/cli/interactive-mode/).

## Converter uma tarefa interativa

Não coloque todo o histórico de uma conversa num script. É mais seguro condensá-lo numa pequena especificação:

| Elemento | O que escrever |
|---|---|
| Objetivo | O que esta execução deve fazer, e só isso |
| Entradas | Que arquivos, diff, registros ou stdin deve ler |
| Proibições | Não alterar arquivos, não aceder à Internet, não fazer push, não interromper CI, etc. |
| Saída | Resumo de texto, JSON, arquivo de relatório ou código de saída |
| Aceitação | Que comandos têm de passar e que termos não podem aparecer |

Um prompt não interativo deve parecer uma tarefa bem especificada: limites claros, entradas completas e condições de falha explícitas. Se ainda for necessário decidir sobre o produto, escolher um design ou confirmar permissões, mantenha a tarefa no modo interativo.

## Mal-entendidos frequentes

### 1. É mais eficiente; devo aprendê-lo primeiro?

Não é aconselhável. Para quem começa, o modo não interativo costuma ser demasiado rápido e rígido, com pouco espaço para esclarecer a tarefa durante a execução.

### 2. Qual é a principal diferença em relação ao modo interativo?

A distinção essencial é:

- **Modo interativo**: você ainda pode perguntar, ajustar e aprovar durante a execução.
- **Modo não interativo**: aproxima-se de uma execução única, adequada a processos previamente definidos.

### 3. Em que casos devo evitá-lo por enquanto?

Se você ainda está numa destas fases, espera:

- Ainda não sabe formular bem um prompt.
- Ainda não sabe como aceitar ou rejeitar um resultado.
- Ainda não tem noções básicas de aprovações, sandbox e permissões.

O modo não interativo é útil para automação, mas não para as primeiras experiências. Aprenda primeiro a usar bem o modo interativo e só depois integre-o em scripts.

## Erros frequentes

- Copiar integralmente o longo histórico de uma sessão interativa para uma única chamada `exec`.
- Dar ao CI credenciais de produção e permissões de escrita.
- Não fixar a versão da CLI, permitindo que o comportamento do pipeline mude inesperadamente.

## Fonte de referência

- Documentação da CLI do OpenAI Codex
