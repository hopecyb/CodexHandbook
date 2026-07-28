---
title: Subagents
description: Delegar subtarefas a Contexto independente — quando dividir, como fazer Transferência e como aceitar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Um **Subagent** é uma **unidade de trabalho independente** que o Agent principal arranca para um subproblema concreto, com Contexto relativamente isolado; no fim, resume o resultado na Thread principal.

Pode entender o Subagent assim: entregar uma subtarefa clara a um assistente que só se foca nisso. O valor não é «mais cool», e sim «mais limpo, mais focado, mais fácil de paralelizar».

## Um conceito central

| Agent principal | Subagent |
|---|---|
| Mantém o objetivo global e o diálogo com o utilizador | Foca-se numa subtarefa única |
| Contexto com histórico completo | Contexto mais limpo; adequado a aprofundar |
| Coordena e funde resultados | Executa exploração, pesquisa, implementação especializada |

Diferença face a [Agents em paralelo](/guide/desktop-app/parallel-agents/): o Subagent costuma ser uma unidade de Tarefa **delegada ativamente pelo Agent principal**, não várias janelas abertas manualmente pelo utilizador (as implementações de produto podem sobrepor-se; a UI atual manda).

## Quando vale a pena dividir

Não é «Tarefa grande = sempre dividir», e sim quando percebe que:

- Um subproblema precisa de aprofundamento à parte
- Esse subproblema e a linha principal não são o mesmo tipo de trabalho
- Quer primeiro uma conclusão independente e só depois o regresso

Aí, dividir em Subagent costuma ser mais estável do que a Thread principal gerir o global e o detalhe ao mesmo tempo.

## Cenários adequados

| Adequado | Inadequado |
|---|---|
| Pesquisa dirigida num repositório grande («como o módulo de auth valida o Token») | Precisa de clarificação contínua de requisitos com o utilizador |
| Investigar em paralelo duas abordagens técnicas | Subtarefas com edição mutuamente exclusiva do mesmo ficheiro |
| Análise só de leitura longa, sem poluir o Contexto principal | «Olhar um pouco» sem entregável claro |

## Mal-entendidos habituais

### 1. Mais Subagents não é automaticamente melhor

Dividir demais traz custos novos:

- Tem de ler mais resultados de regresso
- Conclusões de Subagents diferentes podem conflitar
- O custo de coordenação pode superar o benefício

### 2. Tarefa complexa = dividir Subagent de imediato?

Também não necessariamente.  
Se o problema for altamente acoplado e precisar de confirmações frequentes consigo, avançar na Thread principal pode poupar mais.

### 3. O Subagent pode já fazer todas as alterações por mim?

Pode ou não, conforme a delegação; o mais estável por defeito:

- Deixe o Subagent fazer análise só de leitura, comparação, localização
- A Thread principal, após ver as conclusões, decide se entra em alteração

## Fluxo de trabalho recomendado

### 1. O Agent principal escreve o contrato da subtarefa

```text
Subtarefa: análise só de leitura da lógica de refresh de session em packages/auth.
Entrega: resumo ≤ 1 página + caminhos de ficheiros-chave + pontos de risco.
Proibido: alterar qualquer ficheiro; não fazer push.
```

O mais importante não é o formato, e sim clarificar 4 coisas:

- De que é responsável exatamente
- Como deve ser a saída
- Que ações não pode fazer
- Quem decide após o regresso

### 2. O Subagent executa e devolve resultado estruturado

Formato esperado:

```text
## Conclusão
## Evidência (ficheiro:linha)
## Próximo passo sugerido
## Problemas por resolver
```

### 3. O Agent principal funde e decide

A Thread principal (ou você) escolhe o caminho e entra na fase de execução de [Explorar—planear—executar—verificar](/cases/workflows/explore-plan-execute-verify/).

### 4. Aceitação

- A saída do Subagent é verificável de forma independente (abrir o ficheiro e conferir)
- Alterou o repositório fora de âmbito?
- Em conflito entre vários Subagents, o conflito está marcado?

## Critérios de decisão

Se uma subtarefa cumprir 2 das 3 condições abaixo, considere dividir:

1. Pode descrever-se de forma independente
2. Tem entregável claro
3. Não precisa de partilhar frequentemente o mesmo Contexto miúdo com a Thread principal

## Coordenação com Skill e MCP

- **Skill**: define o formato padrão de entrega da subtarefa (p. ex. checklist de revisão de segurança)
- **MCP**: o Subagent consulta tickets externos só de leitura; o Agent principal decide de forma integrada

## Erros habituais

- Âmbito do Subagent demasiado grande — vira um segundo Agent principal
- Sem exigir regresso estruturado; a Thread principal volta a ler logs longos
- Vários Subagents a alterar o mesmo diretório ao mesmo tempo

O Subagent encaixa melhor em subproblemas com «limite claro, entrega clara, conclusão independente» — não em copiar a Tarefa principal inteira outra vez.

## Leitura complementar

- [Coordenação multi-Agent](/cases/workflows/multi-agent-coordination/)
- [Transferência e retoma](/guide/agent-work/handoff-and-resume/)
- KimYx0207 CX-08; stormzhang `21-subagents.md`

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / Cloud  
**Base de verificação:** Cruzada com a documentação pública atual da OpenAI Developers sobre multi-agent, Tarefas longas e fluxos paralelos; esta página confirma só o princípio estável «subtarefa independente, limite claro, entrega clara»; onde a UI atual ou o agendamento concreto entram, mantém-se como formulação não contratual «conforme o produto atual».  
**Última verificação:** 2026-07-26
