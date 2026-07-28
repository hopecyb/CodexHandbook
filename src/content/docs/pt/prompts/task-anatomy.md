---
title: Anatomia de uma tarefa
description: Objetivo, contexto, entradas, restrições, aceitação e limites de permissão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ao formular um pedido, muita informação dispersa o foco: sobra material, falta clareza, e o Codex mal-entende com mais facilidade.

Aqui estão os blocos habituais de uma tarefa.

## Estrutura da tarefa

Organize nesta ordem aproximada:

- qual é o resultado
- por que fazer
- que materiais são necessários
- onde estão os limites
- como julgar a conclusão

A ordem não precisa ser rígida; com estes pontos claros, a tarefa fica bem mais estável.

## Template recomendado

```text
Objetivo: …… (qual é o artefato final)
Contexto: …… (por que importa, estado atual)
Entradas: …… (arquivos / links / conteúdo colado relevantes)
Restrições: …… (alcance editável, estilo, proibições)
Critérios de aceitação: …… (condições verificáveis de conclusão)
Limites de permissão: …… (pode aceder à rede, instalar dependências, alterar configuração?)
Se faltar informação: pergunte primeiro; não adivinhe.
```

## Função de cada bloco

- **Objetivo:** evita tarefa só com ações, sem resultado
- **Contexto:** ajuda o Codex a entender por que fazer assim
- **Entradas:** entrega à mão os arquivos, links e materiais que ele precisa ver
- **Restrições:** evita extralimitação e mudanças «de passagem»
- **Critérios de aceitação:** torna «está feito?» verificável
- **Limites de permissão:** deixa claro cedo se pode usar rede, instalar dependências ou alterar configuração

## Mal-entendidos comuns

### 1. Cada bloco tem de estar completo

Este template é mais uma checklist do que um formulário.  
Algumas tarefas não precisam de contexto longo — mas omiti-lo também remove parte da base de julgamento.

### 2. Objetivo e aceitação não são a mesma coisa

Não são.

- **Objetivo** diz que resultado você quer
- **Aceitação** diz como confirmar que esse resultado foi realmente atingido

### 3. Entrada = colar um monte de material

Mais não é melhor; relevância importa.  
O essencial é entregar com clareza o «material obrigatório».

## Template mínimo de tarefa

Se quiser só uma versão utilizável, reduza assim:

```text
Objetivo: transformar X em Y
Entradas: arquivos ou páginas relevantes estão aqui
Restrições: só pode alterar isto; não tocar naquilo
Aceitação: como verifico que terminou de verdade
Perante a incerteza: pergunte primeiro
```

## Exemplo

```text
Objetivo: tornar o texto da primeira tela da home de docs mais compreensível para iniciantes
Entradas: src/content/docs/guide/index.md
Restrições: só este arquivo; não alterar estilos; não adicionar componentes
Aceitação: manter a estrutura atual; tom mais oral; pnpm build passa
Perante a incerteza: declare primeiro a sua compreensão e o alcance da mudança, depois aja
```

Esta estrutura reduz suposições e torna a aceitação mais direta. Pode enxugar o template — mas ao remover um bloco, aceite perder essa informação.

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve o método de estrutura de tarefa; exemplos e links internos foram revistos; o corpo não depende de factos voláteis do produto.
