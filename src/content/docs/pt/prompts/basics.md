---
title: Fundamentos de Prompts
description: Os elementos essenciais de um bom Prompt.
locale: pt
source_locale: zh-CN
source_revision: b2a486e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Ao começar com Prompts, é fácil focar em se a redação soa «avançada».  
Para o Codex, o essencial é se você deixou claro isto:

- o que você quer exatamente que ele faça
- até onde pode agir e o que não deve tocar
- o que conta como concluído
- perante a incerteza: perguntar primeiro, investigar primeiro ou parar primeiro

Um bom Prompt deixa claros os limites da tarefa; não precisa parecer um feitiço.

## Conteúdo

Serve sobretudo para evitar estes problemas habituais:

- objetivo tão vago que o resultado é só «otimize um pouco»
- âmbito não indicado, então o Codex muda mais do que o previsto
- sem critérios de aceitação, no fim só se julga a olho
- sem instrução quando falta informação, então começa a adivinhar

## Como ver um Prompt

Pode vê-lo como um ticket de tarefa.  
Um ticket aceitável responde pelo menos a:

- o que fazer
- por quê
- com que materiais
- o que não tocar
- como se vê o «aprovado»

Se isso não estiver claro, nem as frases mais elegantes resolvem.

## Três níveis de escrita (também na biblioteca de exemplos)

- **Versão mínima:** quando o objetivo já está muito claro
- **Versão recomendada:** objetivo, contexto, entradas, restrições, aceitação, permissões
- **Versão didática:** explica por que cada bloco existe

## Ideias erradas habituais

### 1. Quanto mais longo o Prompt, melhor

O importante é a relevância.  
Um bloco longo de contexto irrelevante dilui os limites de verdade.

### 2. Com o objetivo basta; o resto pode omitir-se

Só com o objetivo é fácil esquecer:

- o alcance da mudança
- as restrições de estilo
- como validar
- o que fazer perante a incerteza

### 3. O Prompt serve sobretudo para «ensinar o modelo a pensar»

Para quem começa, uma leitura mais útil: o Prompt reduz mal-entendidos.

## Uma estrutura mínima suficiente

Se não quiser aprender tudo de uma vez, comece com estas 4 linhas:

```text
Objetivo: o que quero que faças
Alcance: o que podes modificar apenas
Aceitação: como se vê o concluído
Perante a incerteza: pergunta primeiro, não adivinhes
```

Já é muito mais claro do que um «ajuda-me a otimizar isto».

## Quando usar a versão mínima ou a completa

### A versão mínima encaixa

- mudança pequena num único arquivo
- objetivo muito concreto
- você conhece bem o repositório e a tarefa

### A versão recomendada é mais segura

- vários arquivos
- projeto desconhecido
- risco alto
- é preciso aprovação, testes ou revisão

Para a maioria dos iniciantes, começar pela **versão recomendada** costuma ser mais prudente.

O núcleo de um bom Prompt: menos suposições, menos desvios, menos extralimitação.

Exemplos: [Primeira tarefa](/pt/cases/first-task/) e [Anatomia de uma tarefa](/pt/prompts/task-anatomy/).

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só trata métodos gerais de Prompt; os links internos foram revistos e o corpo não depende de factos voláteis (versão do produto, preços, interface, etc.).
