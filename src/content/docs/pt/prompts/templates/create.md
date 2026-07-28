---
title: Template de criação
description: Implementar do zero uma função, um texto ou um artefato.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Template de criação

Em tarefas de criação do zero, os dois problemas mais fáceis são:

- objetivo amplo sem limites
- pouca informação, mas pressa para o Codex gerar já

O template de criação fixa primeiro o artefato, o uso e as restrições — e só depois começa.

## Template

```text
Objetivo: criar 【nome do artefato】 para 【uso/utilizadores】.
Contexto: 【convenções existentes, estilo de design, limites de dependências】
Entradas: 【especificação, esboço, referências @arquivos】
Restrições:
- modificar/criar só dentro de 【alcance de caminhos】
- não introduzir 【exclusões】
- operações de alto risco: executar após a minha aprovação
Aceitação:
- 【resultado observável 1】
- 【resultado observável 2】
- incluir passos de auto-teste
Se faltar informação, liste hipóteses e pergunte; não adivinhe.
```

## Quando usar este template

- Criar do zero uma página, um componente, um script ou documentação
- Já sabe o que entregar, mas ainda não começou
- Quer delimitar o alcance da criação antes de agir

## Ideias erradas habituais

### 1. Criar = carta branca

É preciso clarificar:

- para quem
- para que serve
- que estilos ou stacks estão proibidos

### 2. O contexto é só decoração opcional

Na criação, o contexto costuma orientar toda a direção do artefato.

### 3. Aceitação = «que fique bem»

Assim fica muito difícil julgar se realmente terminou.

O pior na criação: começar sem clarificar «o quê» e «para quem».

## Relacionado

- [Trabalho guiado por especificação](/cases/workflows/specification-driven-work/)
- [Definir o concluído](/prompts/define-done/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página oferece um template de tarefas de criação; links e estrutura foram revistos; o corpo não depende de factos voláteis do produto.
