---
title: Árvores de trabalho
description: Experimentar mudanças em paralelo com árvores de trabalho isoladas.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

A **árvore de trabalho (worktree)** serve para experimentar mudanças num diretório isolado, reduzindo interferência na área de trabalho principal.

Pode ser vista como uma «zona de ensaio paralela» do mesmo repositório, para não empurrar todas as tentativas para a área de trabalho atual.

## Quando usar

- Quer experimentar duas implementações em paralelo
- Receia que uma refatoração experimental contamine a área de trabalho do ramo principal

## Quando não usar

- O projeto de prática já está suficientemente isolado
- Ainda não domina Git: complete as Tarefas em série no diretório de prática

## Mal-entendidos frequentes

### 1. Não é só criar uma pasta nova?

Na superfície parece, mas o objetivo não é só «mais um diretório»: é deixar espaço isolado para tentativas diferentes no mesmo repositório.

### 2. É preciso aprender isto no início?

Não.

Se ainda está a familiarizar-se com o fluxo básico de Tarefas, costuma ser mais simples não tocar em worktree.

### 3. Quando vale a pena aprender?

Quando começar a encontrar situações como:

- Quer experimentar duas implementações
- Não quer misturar mudanças experimentais na área de trabalho atual
- A equipa abre várias Tarefas em paralelo

O worktree é uma ferramenta avançada de isolamento, não um requisito para começar com o Codex.

---

**Estado:** outdated  
**Produtos aplicáveis:** App  
**Nota de revisão:** Esta página apresenta o worktree como capacidade avançada da App de desktop, mas o material oficial público atual não basta para demonstrar um a um a entrada vigente nem o alcance do suporte de árvores de trabalho na UI de desktop; convém marcá-la como `outdated` até completar a documentação de produto mais recente.  
**Última verificação:** 2026-07-26
