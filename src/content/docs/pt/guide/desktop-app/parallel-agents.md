---
title: Agents em paralelo
description: Avançar várias Tarefas de Agent ao mesmo tempo sem cair em conflitos de merge nem em caos de revisão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Os Agents em paralelo servem para repartir **trabalho que já pode avançar de forma independente**, de modo que a Thread principal se centre em coordenar, aceitar resultados e decidir o merge.

Se a divisão for correta, o paralelismo encurta muito a espera; se não for, só gera conflitos mais depressa.

## Mal-entendidos frequentes

Quem vê «Agents em paralelo» pela primeira vez costuma pensar que só significa «mais rápido». Não é de todo falso, mas fica curto.

A premissa é: **essas Tarefas já se sustentam por si**. Se na realidade dependem umas das outras e só as forçou a separar, o paralelismo atrasa: depois há que alinhar premissas, recuperar resultados e gerir conflitos.

## Quando convém o paralelismo

| Convém | Não convém |
|---|---|
| Duas investigações independentes ao mesmo tempo | Vários Agents a modificar o mesmo ficheiro central |
| Uma análise só de leitura enquanto se redige um rascunho de documentação | Requisitos que mudam com frequência e precisam das suas clarificações contínuas |
| Fronteira clara entre a UI front-end e a API back-end | Um problema que não pode começar sem o resultado de outro |

Critérios habituais:

- **Pode definir o entregável** → apto para paralelo
- **Pode acordar limites de antemão** → apto para paralelo
- **Pode verificar de forma independente** → apto para paralelo

## O que faz o Agent principal

No modo paralelo, o Agent principal não tem de completar todas as subtarefas em pessoa. Centra-se em três coisas:

1. Deixar claro o objetivo e as zonas proibidas de cada subtarefa
2. Verificar se os resultados são verificáveis
3. Decidir o desempate quando os resultados colidem

O Agent principal age mais como um pequeno responsável técnico: coordena e escolhe, não executa todas as subtarefas.

## Como convém dividir

### Divida «problemas», não «passos de um processo»

Melhor divisão:

- Agent A: analisar se a falha de login se deve à atualização do token
- Agent B: verificar as duas últimas mudanças relacionadas com autenticação

Pior divisão:

- Agent A: ler metade dos registos
- Agent B: ler a outra metade dos registos

No primeiro caso, cada Tarefa tem um objetivo completo; no segundo, é só fragmentação mecânica, com custo alto de recuperação.

### Priorize estes tipos

- **Análise só de leitura**: ler código, registos, documentação, listar riscos
- **Comparação de opções**: rotas de implementação A/B, escolha de bibliotecas, esquemas de Permissão
- **Entregáveis com fronteira clara**: página independente, documentação independente, módulo independente

## Um modelo de delegação

A instrução para um Agent em paralelo deve incluir, na medida do possível, estes quatro itens:

```text
Tarefa: analisar apenas o cálculo de cupões no fluxo de checkout; não alterar código.
Entrega: resumo de 200 palavras + caminhos dos ficheiros-chave + pontos de risco + próximo passo sugerido.
Limites: não procurar fora do módulo de pagamento; não correr comandos de escrita.
Aceitação: a conclusão tem de remeter a evidência em ficheiro ou registo.
```

Isto é mais eficaz do que «vá ver este problema».

## Três padrões comuns de paralelismo

### 1. Investigação em duas vias

Adequado quando ainda não sabe qual rota é a certa.

- Agent A investiga a implementação atual
- Agent B investiga alternativas
- A Thread principal compara custo, risco e compatibilidade

### 2. Avanço por camadas

Adequado quando as fronteiras do sistema já estão claras.

- Agent A trata da camada de documentação ou Prompt
- Agent B trata da camada de código ou configuração
- A Thread principal faz a verificação de consistência

### 3. Rascunho + revisão

Adequado quando precisa de uma primeira versão e de uma revisão rápida.

- Agent A produz o rascunho
- Agent B só faz review, sem alterar
- A Thread principal decide se adota

Este padrão encaixa bem em completar documentação, revisar PRs e organizar casos.

## Gestão de conflitos

No paralelismo, o ponto que mais trava costuma ser o merge.

### Acordar estes limites de antemão

- Que diretórios cabem a cada Agent
- Se é permitido alterar ficheiros de configuração partilhados
- Quem tem o direito final de commit

### Nestes casos, volte à série

- As duas subtarefas precisam de alterar o mesmo fluxo de negócio
- A conclusão de um Agent continua a derrubar as premissas do outro
- Percebe que gasta mais tempo a «explicar Contexto» do que a avançar a Tarefa

Quando o custo de coordenação supera o tempo poupado, o paralelismo deixa de fazer sentido.

## Revisão e aceitação

A saída de cada Agent em paralelo deve cumprir pelo menos um destes pontos:

- Remeter a ficheiro, registo, ligação ou Diff concreto
- Declarar claramente «o que não fez»
- Indicar à Thread principal como verificar o próximo passo

Se a entrega for só «acho que pode haver um problema aqui», a Thread principal quase não recebe nada útil.

## Erros comuns

- Paralelizar às cegas só porque há muitas Tarefas, sem julgar dependências
- Vários Agents a modificar o mesmo diretório sem acordo de propriedade
- A Thread principal não aceita resultados e junta subtarefas num resultado final
- Usar o paralelismo como forma de «pensar menos», o que só amplifica a confusão

A premissa dos Agents em paralelo continua a ser: Tarefas independentes, aceitáveis em separado, e depois avançadas cada uma por si.

## Ordem de leitura recomendada

1. [Subagents](/guide/agent-work/subagents/)
2. [Progresso e reorientação](/guide/agent-work/progress-and-steering/)
3. [Transferência e retoma](/guide/agent-work/handoff-and-resume/)
4. [Fluxo de coordenação multi-Agent](/cases/workflows/multi-agent-coordination/)

## Fontes de referência
- Documentação da OpenAI Codex sobre multitasking e colaboração entre Tarefas
---

**Estado:** outdated  
**Produtos aplicáveis:** App  
**Nota de revisão:** A metodologia de Agents em paralelo continua útil, mas esta página apresenta-a como capacidade atual que se pode adotar diretamente na App de desktop, sem documentação oficial vigente bastante sólida sobre a forma concreta da UI, das entradas e da colaboração entre Tarefas; por isso marca-se temporariamente como `outdated`.  
**Última verificação:** 2026-07-26
