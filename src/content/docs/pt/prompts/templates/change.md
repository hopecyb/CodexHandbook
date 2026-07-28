---
title: Template de alteração
description: Iterar com limites sobre o que já existe.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Template de alteração

Este template serve tarefas do tipo «alterar um pouco o que já existe».

Em tarefas de alteração, comece por deixar claros os limites da mudança.

## Template

```text
Objetivo: em 【funcionalidade/arquivo existente】, concluir 【alteração concreta】.
Contexto: 【por que alterar, alcance do impacto】
Entradas: @【caminho dos arquivos relevantes】
Restrições:
- manter 【API/estilo/comportamento】 inalterado, salvo autorização explícita minha
- diff mínimo; sem refatoração irrelevante
- após cada passo, correr só 【testes relevantes】
Aceitação:
- 【descrição da mudança de comportamento】
- testes relevantes passam
- o diff envolve apenas os arquivos necessários
```

## Quando usar este template

- Alterar página ou componente existente
- Corrigir um bug explícito
- Ajustar texto, interação ou configuração
- Querer enfatizar «só esta parte; sem refatorar de passagem»

## Ideias erradas habituais

### 1. Alterar é mais simples que criar, então pode escrever bem menos

Alterar esbarra com código antigo, restrições antigas e dependências ocultas — precisa ainda mais de limites.

### 2. «Diff mínimo» = mudar só umas linhas

«Diff mínimo» significa **alterar só o que está diretamente relacionado com o objetivo**.

### 3. «Manter o comportamento atual» ainda não basta

Acrescente o que conta como «comportamento atual».

## O que este template previne

Principalmente:

- alterar demais
- alterar fora do alvo
- tocar camadas que você não autorizou

Num Prompt de alteração, além de «o que mudar», diga «até onde é permitido mudar».

## Relacionado

- [Definir o concluído](/prompts/define-done/)
- [Restrições e limites](/prompts/constraints-and-boundaries/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página oferece um template de tarefas de alteração; links e estrutura foram revistos; o corpo não depende de factos voláteis do produto.
