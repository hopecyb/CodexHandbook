---
title: Planeamento
description: Fazer o Codex explicar primeiro passos, riscos e Verificação — e só depois decidir se executa.
locale: pt
source_locale: zh-CN
source_revision: 75099ef
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Ao dizer direto «comece a alterar», problemas comuns:

- A rota está errada
- O âmbito ficou demasiado grande
- Os riscos não foram expostos de antemão
- A forma de Verificação não chega

Planear é pôr «como pretende fazer» à sua frente primeiro.

O sentido do planeamento é transformar «eu pensava que ia fazer assim» num **Artefato intermédio revisável**. Em Tarefas complexas, o que aprova de verdade é um caminho de execução — não só premir o botão «começar».

## O que confirma ao pedir um plano primeiro

Quando pede ao Codex «primeiro o plano», confirma duas coisas:

- Se compreendeu de verdade o seu objetivo
- Se a rota que pretende seguir é uma que está disposto a assumir

## O que um plano aceitável deve incluir pelo menos

| Elemento | Função |
|---|---|
| Passos | Dar ordem à Tarefa, não começar tudo de uma vez |
| Ficheiros ou âmbito envolvidos | Expor a superfície de impacto de antemão |
| Riscos e itens por confirmar | Evitar tratar hipóteses como factos |
| Forma de Verificação | Tornar «concluído» demonstrável |

Se só houver «alterar A, depois B», sem riscos nem Verificação, aproxima-se mais de uma lista de afazeres do que de um plano de verdade.

## Armadilhas comuns

### 1. Plano = só listar passos?

Um plano útil ainda deve dizer:

- Que ficheiros ou zonas afeta
- Onde há incerteza
- Como provar no fim que está mesmo concluído

### 2. Tarefas pequenas nunca precisam de planeamento

Também não é absoluto. Algumas Tarefas, mesmo com alteração pequena, se:

- Não conhece bem o repositório
- Envolvem Permissões ou Aprovação
- Um desvio for difícil de recuperar

Ainda vale a pena parar e fazê-lo explicar antes de mexer.

### 3. Pedir o plano primeiro é só formalidade?

Desde que o reveja de verdade. Se pedir o plano e não olhar âmbito, riscos e Verificação, o passo vira formalidade; se o usar para detetar desvios cedo, o retrabalho costuma cair muito.

## Quando o planeamento é obrigatório

- Vários ficheiros ou vários módulos
- Não conhece bem o repositório
- Precisa de Aprovação humana antes de executar
- A alteração pode afetar comportamento em produção ou regras de colaboração da equipa
- Já sente que «se isto desviar, é difícil arrumar»

Alterações pequenas de texto podem dispensar plano formal; Tarefas médias/grandes devem parar primeiro.

## Como decidir quando não tem a certeza

Se não souber se deve planear primeiro, pergunte-se:

> **Se ele começar agora e desviar, fica difícil de recuperar?**

Se a resposta for «sim», peça o plano primeiro.

## Forma recomendada de pedir o plano

Peça o plano ao Codex, em vez de começar direto:

```text
Ainda não altere ficheiros. Com base no repositório atual, dê um plano com:
1. Compreensão do objetivo
2. Passos numerados
3. Ficheiros envolvidos
4. Riscos ou itens por confirmar
5. Como verificar cada passo
```

Redação mais completa: [Pedir um plano](/pt/prompts/ask-for-a-plan/).

## O que está a rever

Ao ver o plano, não olhe só se «parece certo» — veja:

1. Compreendeu o objetivo real?
2. O âmbito de impacto é razoável?
3. Saltou verificações prévias óbvias?
4. A Verificação basta para provar a conclusão?

Muito retrabalho não vem de implementação má, e sim de aprovar um plano vago.

Ver o plano primeiro costuma clarificar rota e riscos antes de alterar ficheiros — com custo mais baixo.

## Como dar feedback ao plano

Não precisa de reescrever o plano inteiro; indique o desvio:

```text
Mantenha o passo 1; ainda não faça o refactor do passo 2.
Separe as alterações de base de dados num passo independente.
Acrescente o plano de rollback em caso de falha.
Por agora só análise de leitura; não entre na implementação.
```

Esta «correção a passo pequeno» costuma ser mais eficiente do que «anular tudo e recomeçar».

## Fronteira entre plano e execução

Um hábito importante de colaboração é separar os dois:

- **Fase de plano**: permitir explorar, listar opções, expor incerteza
- **Fase de execução**: avançar pelo caminho já confirmado

Se na execução a premissa mudar, volte ao plano — não force. Ver [Progresso e reorientação](/pt/guide/agent-work/progress-and-steering/).

## Em tarefas de alto risco, acrescente três itens

Se a tarefa toca muitos ficheiros, sistemas externos, permissões, automação ou regras de equipa, o plano também deve declarar:

| Item extra | Por que importa |
|---|---|
| Limite de permissões | O que é só leitura e o que exige confirmação humana |
| Recuperação | Como voltar a um estado seguro se o caminho estiver errado |
| Rollout faseado | Validar primeiro em pasta de teste, projeto exemplo ou escopo pequeno |

Pede o plano por fases: análise só leitura, alteração mínima, verificação e rollback. Escritas externas ou em lote devem ser listadas antes, não executadas diretamente.

## Erros habituais

- Plano sem forma de Verificação
- Passar do plano à execução sem confirmação
- Misturar vários objetivos independentes no mesmo plano
- Precisar de confirmação e escrever só «já comecei»

## Combinações recomendadas

- Cadeia principal completa: [Explorar—planear—executar—verificar](/pt/cases/workflows/explore-plan-execute-verify/)
- Clarificar o Prompt: [Pedir um plano](/pt/prompts/ask-for-a-plan/)
- Correção a meio: [Progresso e reorientação](/pt/guide/agent-work/progress-and-steering/)
- Normas de longo prazo: [O que é AGENTS.md](/pt/guide/customization/agents-md/what-is-agents-md/)

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com a forma atual de trabalho de Tarefas da OpenAI Developers para o Codex («compreender, planear, executar e verificar») e com capítulos já verificados deste manual sobre Prompts, qualidade e fluxos; o conteúdo limita-se a métodos estáveis de planeamento de Tarefas, sem parâmetros de versão voláteis.  
**Última verificação:** 2026-07-26
