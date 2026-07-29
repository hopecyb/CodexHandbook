---
title: Escrever uma página de guia
description: Estrutura, frontmatter e acordos de ligações cruzadas para o corpo novo do manual.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Esta página explica como adicionar ou reescrever páginas de **guia** em `src/content/docs/` (não casos puros nem tabelas de referência puras).

## Conteúdo desta página

Pontos onde se costuma ficar preso:

- Não saber como deve ser uma página de guia
- Não ter a certeza se está a escrever «tutorial», «norma» ou «resumo de índice»
- Não saber escrever de forma realmente útil para principiantes

Aqui estes problemas são desdobrados, para escrever páginas fáceis de manter e compreensíveis.

## Função da página de guia

Uma «página de guia» não termina por empilhar material. Deve levar o leitor de «sei que este tema existe» a «sei aproximadamente quando usar, o que ver primeiro e que armadilhas evitar».

Por isso não é só uma lista de conhecimentos nem só uma lista de comandos — também diz como continuar no passo seguinte.

## Frontmatter

```yaml
---
title: Título da página
description: Uma frase sobre o problema que este texto resolve
---
```

Opcional: rodapé unificado no fim (como nas páginas existentes):

```markdown
---

**Estado:** planned | draft | review | verified | outdated | archived
**Produtos aplicáveis:** App / CLI / IDE / Cloud
**Última verificação:** YYYY-MM-DD
```

## Estrutura recomendada

Escolha subsecções segundo o [modelo de integração de fontes externas](/docs/planning/external-source-integration.md#6-推荐页面模板); combinações comuns:

- Que problema a página resolve
- Para quem
- Prática mínima viável
- Fluxo de trabalho recomendado
- Erros habituais
- Limites de segurança
- Lista de verificação
- Referências

Páginas de operação de produto podem inclinar-se para passos; páginas conceptuais para tabelas e diagramas.

## Mal-entendidos habituais

### Nem toda a página precisa de ser uma enciclopédia

Na primeira redação, é fácil meter tudo o que se sabe e perder o foco.

Redação mais comum:

- Primeiro o problema principal que a página resolve
- Depois o que o leitor mais facilmente mal-entende
- Depois uma prática ou método de juízo suficiente

Costuma ajudar mais os novos do que encher todos os detalhes de uma vez.

### Não escreva só para quem já sabe — pense em como os outros leem

Você conhece o Contexto; quem chega pela primeira vez não.

Acrescente de propósito esta informação de ponte:

- Para quem é a página
- O que deve conseguir resolver depois de ler
- Se só quiser começar, onde agarrar primeiro

### A página de guia não substitui a documentação oficial

O manual comunitário ajuda a compreender, ligar e aplicar; factos que mudam ainda voltam à documentação oficial para Verificação.

## Ligações cruzadas

- Ligações internas com caminho raiz: `/cases/workflows/explore-plan-execute-verify/`
- Ligue a páginas autoritativas; evite repetir blocos longos
- Páginas novas registam-se no `index.md` do capítulo e na sidebar de `astro.config.mjs`

## Tom

- Português, orientado a praticantes
- Admita incerteza («conforme a documentação oficial»)
- Evite a narrativa de «Prompt universal»

## Ordem de escrita

Pode escrever nesta ordem:

1. Primeiro o problema que a página resolve de facto
2. Depois o que o leitor mais facilmente mal-entende ou salta
3. Depois a prática mínima, fluxo ou método de juízo
4. Por fim ligações cruzadas e referências

## Verificação

Antes do PR, leia [Verificar conteúdo técnico](/guide/contributing/verify-technical-content/). Comandos, preços, Permissões e outra informação volátil devem ser reconfirmados.

Uma boa página de guia não se mede por «material completo», e sim por o leitor da primeira vez saber porque a página existe, o que ver primeiro e para onde ir a seguir.

## Referências
- Documentação oficial OpenAI Codex
```
---

**Estado:** verificado  
**Base de verificação:** Revista com o frontmatter atual da documentação deste repositório, o sistema de estado do rodapé, hábitos de ligações cruzadas e a forma de manter a sidebar; esta página descreve normas de escrita e sugestões de estrutura do corpo do manual, sem depender de detalhes de versão de produto.  
**Última verificação:** 2026-07-26
