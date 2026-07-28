---
title: Pedir um plano primeiro
description: Antes de o Codex agir, peça que explique os passos, os riscos e a forma de verificar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muitos problemas não são «impossível fazer» — só **começam depressa demais**. Um «ajuda-me a corrigir» junta facilmente exploração, plano e execução; no fim só se valida passivamente no diff.

Nesse caso, o mais eficaz é pedir primeiro um plano, em vez de alongar cada vez mais o pedido.

## Quando é obrigatório pedir um plano primeiro

| Cenário | Por quê |
|---|---|
| Vários arquivos ou módulos | Fácil afetar áreas irrelevantes |
| Código-base desconhecido | Confirmar primeiro o âmbito que ele entendeu |
| Requisitos ainda instáveis | Expor divergências cedo |
| Precisa de aprovação antes de executar | Separar «autorização de execução» de «discussão de abordagem» |
| Ações de alto risco | Ver antes o rollback e a verificação |

Um typo pequeno ou um ajuste pontual de texto pode não precisar de plano formal — mas se «errar aqui dá muito trabalho», vale a pena parar primeiro.

## O que um bom plano deve incluir no mínimo

A versão mínima deve cobrir estes quatro pontos:

1. Passos
2. Arquivos ou âmbito envolvidos
3. Riscos ou pontos a confirmar
4. Como verificar cada passo

Sem o ponto 4, parece mais uma lista de tarefas do que um plano verificável.

## Três formulações comuns

### Versão mínima

```text
Não altere código ainda. Dê-me primeiro um plano de 3–5 passos, indicando que arquivos mudará e como verificará cada passo.
```

Adequado quando: você já sabe a direção geral e só quer ver como ele divide o trabalho.

### Versão recomendada

```text
Não execute ainda. Com base no repositório atual, dê um plano com:
1. Compreensão do objetivo
2. Passos numerados
3. Arquivos ou diretórios envolvidos
4. Riscos e itens a confirmar
5. Forma de verificação

Não modifique arquivos até eu responder «execute conforme o plano».
```

Adequado para: desenvolvimento quotidiano, reescrita de docs, reescrita de Prompts, ajustes de configuração.

### Versão de alto risco

```text
Não faça alterações ainda. Produza um plano e explique à parte:
- qual passo tem mais risco de regressão
- como fazer rollback se falhar
- quais operações precisam da minha confirmação
- quais testes ou checagens manuais provam a conclusão
```

Adequado para: problemas em produção, configuração de permissões, scripts de automação, refatorações entre módulos.

## O plano não precisa ser cada vez mais longo

O que você quer é um artefato intermédio **aprovável, corrigível e executável** — não um documento longo.

Para julgar se o plano serve, veja três pontos:

- consegue dizer com clareza «pule o passo 2 e faça outra coisa»?
- vê de imediato quais áreas críticas ele tocará?
- sabe como aceitar o resultado antes de começar?

Se não, o plano ainda não é concreto o bastante.

## Como aprovar um plano

Não precisa reescrever tudo — basta orientar como faria com um colega.

Frases comuns:

```text
Mantenha os passos 1 e 2; remova o passo 3.
Separe a mudança de banco de dados num passo próprio.
Faça só análise somente leitura; não entre na implementação.
Inclua no plano testes de regressão e plano de rollback.
```

Isto poupa mais contexto do que «recomece do zero» e puxa o resultado de volta ao trilho.

## Benefícios face a «começar já»

| Pedir um plano primeiro | Começar já |
|---|---|
| Detecta mal-entendidos cedo | Só nota o erro de direção depois da mudança |
| Facilita aprovação e colaboração | Só vê o diff final, passivamente |
| Ajuda a dividir em subtarefas | Junta vários objetivos no mesmo fluxo |
| A verificação fica visível cedo | Só se lembra dos testes no fim |

Muitos workflows separam «exploração» e «plano». Ver [Explorar—planejar—executar—verificar](/cases/workflows/explore-plan-execute-verify/).

## Problemas mais comuns num plano

### Só ações, sem limites

Por exemplo «atualizar a documentação e otimizar a estrutura», sem dizer quais diretórios mudar e quais módulos não tocar. O plano tende a crescer sem controlo.

### Só implementação, sem verificação

Por exemplo «alterar a lógica do componente, atualizar estilos, fazer commit», sem dizer como provar que o comportamento não quebrou.

### Só lista de tarefas, sem itens a confirmar

Um bom plano admite incerteza; não finge que todas as premissas já estão firmes.

## Combinações recomendadas

- Cadeia de execução formal: [Planejamento](/guide/agent-work/planning/)
- Plano reutilizável: [Anatomia de uma tarefa](/prompts/task-anatomy/)
- Correção a meio do caminho: [Progresso e reorientação](/guide/agent-work/progress-and-steering/)
- Aceitação clara: [Definir o concluído](/prompts/define-done/)

## Uma convenção útil em equipa

Podem declarar no `AGENTS.md`:

```md
- Mudanças em 3 ou mais arquivos: plano primeiro
- Sem confirmação, não executar comandos destrutivos
- O plano deve incluir a forma de verificação
```

Assim «pedir um plano primeiro» deixa de ser lembrete avulso e passa a ser o padrão da equipa.

## Fontes de referência

- Ideias de plano e execução na documentação oficial do OpenAI Codex
- Práticas de desenho de tarefas e colaboração em freestylefly/CodexGuide
- Capítulos de fluxo Codex em KimYx0207《AI-Coding-Guide-Zh》
- Métodos práticos da série Codex de stormzhang
- [codex.bozhouai.com](https://codex.bozhouai.com/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve o método de colaboração com plano primeiro; links internos e estrutura dos exemplos foram revistos; o corpo não depende de factos voláteis do produto.
