---
title: Progresso e reorientação
description: Quando a direção desvia a meio da execução, como puxar o Codex de volta com instruções curtas.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

A meio da execução, as reações comuns costumam ser só duas:

- Não dizer nada e deixar continuar a desviar
- Uma frase «para, recomeça tudo»

O mais comum é **reorientar** de forma contínua durante a execução: manter o que já está certo e corrigir só o que desviou.

## O que a reorientação faz

Aqui, «reorientação» é complementar como deve seguir o passo atual, por exemplo:

- Que parte está certa — manter
- Que parte começou a desviar — não continuar
- Qual passo priorizar a seguir

## O que é «reorientação»

Reorientação é um **ajuste local de direção** sobre o estado atual de execução.

Costuma precisar dela quando:

- Compreendeu o objetivo, mas a ordem dos passos não é ideal
- Já fez metade bem e não quer anular tudo
- Acabou de acrescentar informação nova e precisa de ajustar as ações seguintes
- Percebe que está prestes a entrar num refactor ou expansão desnecessários

## O modelo mais usado

A reorientação a meio pode ser muito curta:

```text
Pare no passo atual. Mantenha A e B; abandone a direção de alteração em C; o próximo passo só faz D. Não comece E.
```

Este tipo de instrução tem quatro peças-chave:

1. Onde parar
2. O que manter
3. O que abandonar
4. O que só fazer a seguir

## Armadilhas comuns

### 1. Se desviou, deve parar tudo e recomeçar?

Se metade já está certa, anular tudo costuma significar:

- Tem de voltar a explicar o contexto
- A parte já alinhada também se perde
- A nova ronda pode desviar outra vez

### 2. Bastará dizer «está errado» para ele saber onde?

Normalmente não chega.

Mais eficaz é indicar claramente:

- O que manter
- O que abandonar
- O que priorizar agora

### 3. Reorientação e replaneamento são a mesma coisa?

- **Reorientação**: a rota está basicamente certa; só correção local
- **Replaneamento**: o objetivo, a premissa ou a superfície de impacto mudaram

## Porque a correção a passo pequeno é mais eficaz

| Correção a passo pequeno | Anular e recomeçar |
|---|---|
| Mantém o trabalho já alinhado | Também deita fora o que estava certo |
| Poupa mais Contexto | Precisa de voltar a explicar o fundo |
| Mais fácil controlar o âmbito | Fácil voltar a derivar |
| Mais parecido com colaboração real | Mais parecido com voltar a encomendar |

## Quando reorientar primeiro e quando voltar ao planeamento

Pode julgar assim:

- **Só ordem errada, âmbito grande demais, formato de saída errado**: reoriente primeiro
- **Objetivo mudou, premissa mudou, superfície de impacto mudou**: volte ao planeamento

## Três formas comuns de reorientação

### 1. Reduzir o âmbito

Quando começa a fazer demais:

```text
Trate primeiro só a página de login; não alargue aos fluxos de registo e recuperação de palavra-passe.
```

### 2. Ajustar a ordem

Quando o que faz está certo, mas a sequência não:

```text
Complete primeiro Verificação e testes; só depois continue a alterar a implementação.
```

### 3. Mudar a forma de saída

Quando quer análise antes de aplicar:

```text
Ainda não altere ficheiros. Dê-me primeiro uma tabela comparativa: diferença entre a abordagem atual e a que sugere.
```

## O que uma boa reorientação deve incluir

- Onde parar agora
- O que manter
- Que direção não continuar
- Nova prioridade
- Se pode continuar a executar

Esta frase fica mais clara:

```text
Mantenha o seu juízo sobre a causa do problema, mas ainda não entre no refactor. O próximo passo: só um plano mínimo de correção e os passos de Verificação.
```

## Quando voltar a «replanear»

A reorientação serve a desvios locais; nestes casos vale mais voltar a [Planeamento](/guide/agent-work/planning/):

- O objetivo da Tarefa mudou
- Informação nova derrubou a premissa anterior
- A superfície de impacto alargou-se claramente
- Já corrigiu duas ou três vezes seguidas e ainda deriva

Se o problema já não é desvio local, volte diretamente à fase de planeamento.

## Erros habituais

- Só dizer «errado», sem dizer onde
- Pedir que «decida sozinho como corrigir», sem dar prioridade
- Querer só pausar um passo e usar linguagem que dispara um redo completo
- Já ser uma Tarefa nova e tentar continuar só com uma frase suplementar

Quando detetar desvio na execução, use instruções curtas: «o que manter, o que parar, o que só fazer a seguir».

## Combinações recomendadas

- Clarificar primeiro o caminho de execução: [Planeamento](/guide/agent-work/planning/)
- Escrever o fluxo como cadeia principal completa: [Explorar—planear—executar—verificar](/cases/workflows/explore-plan-execute-verify/)
- Dividir a Tarefa: [Subagents](/guide/agent-work/subagents/)
- Continuar após interrupção: [Transferência e retoma](/guide/agent-work/handoff-and-resume/)

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com a descrição atual da OpenAI Developers sobre Tarefas longas, Verificação e avanço por passos, e com capítulos já verificados deste manual sobre planeamento, qualidade e Contexto; esta página mantém só o princípio estável de colaboração «correção local > anular o bloco inteiro».  
**Última verificação:** 2026-07-26
