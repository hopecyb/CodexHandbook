---
title: Seleção e ficheiros abertos
description: Usar código selecionado e ficheiros abertos para delimitar com precisão o alcance das Tarefas no IDE.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

A extensão IDE encaixa bem em mudanças de **alcance pequeno e alta precisão**: seleciona um trecho de código, explica a intenção e o Codex altera no Contexto próximo. Aqui o foco é como usar seleção e ficheiros abertos para apertar o alcance e evitar alterar o sítio errado.

A função da seleção é simples: dizer ao Codex para olhar sobretudo aqui, sem alargar o alcance por conta própria.

## Conteúdo desta página

- Como escolher entre seleção, ficheiro inteiro e caminho `@`
- Como organizar o Contexto em refatorações multi-ficheiro
- Como reduzir «alterou um monte de ficheiros irrelevantes»

## Três formas de delimitar

| Forma | Quando usar | Exemplo |
|---|---|---|
| **Seleção** | Uma função, um componente, perto da stack de erro | Selecionar `parseUser()` e pedir tratamento de valores nulos |
| **Ficheiro aberto** | Precisa de perceber várias relações no mesmo ficheiro | Abrir `auth.ts` + `auth.test.ts` |
| **Caminho `@`** | Ficheiros noutros diretórios ou ainda não abertos | `@src/api/client.ts` alinhado com tipos do backend |

Profundidade conceptual: [Contexto de ficheiros e pastas](/guide/context/file-and-folder-context/)

## Prática mínima útil

1. Selecione o **menor fragmento relevante** (em geral 10–80 linhas) e, no Prompt, deixe claros o objetivo e a [definição de concluído](/prompts/define-done/)
2. Se envolver chamadores, abra ou `@` mais 1–2 ficheiros a montante
3. Peça «altere só ficheiros relacionados com X; liste os ficheiros a modificar antes de começar»
4. Na vista de Diff do IDE, aceite bloco a bloco; não aceite tudo de uma vez

## Tarefas multi-ficheiro

```text
Abrir: ficheiro de implementação + ficheiro de teste + definições de tipo
Seleção: opcional — comece pela função de entrada
Prompt: indique as fronteiras do módulo e os diretórios proibidos
```

Para refatorações grandes, prefira [árvores de trabalho na App de desktop](/guide/desktop-app/worktrees/) ou [modo de planeamento](/guide/agent-work/planning/). O IDE encaixa melhor no fecho e em commits pequenos.

## Dúvidas frequentes

### 1. É obrigatório selecionar sempre?

Não. Mas se já sabe que o foco está num trecho pequeno, a seleção costuma ser mais estável do que só dizer «ajude a alterar esta função».

### 2. Selecionar mais não é necessariamente mais seguro

Selecionar demais afrouxa outra vez o alcance; selecionar de menos pode faltar Contexto necessário. O critério prático é «o suficiente».

### 3. Qual a diferença entre ficheiro aberto e caminho `@`?

Pode distinguir assim:

- **Ficheiro aberto**: deixa-o ver o que está a olhar agora
- **Caminho `@`**: nomeia explicitamente um ficheiro que também tem de entrar

Usar seleção e ficheiros abertos é, no fundo, evitar arrastar alcance irrelevante.

## Em conjunto com a revisão

Antes de aceitar, confronte com [Rever Diff](/guide/quality/review-diffs/):

- Só mudaram os ficheiros acordados?
- Há eliminações inesperadas fora da seleção?
- Os testes cobrem os novos ramos?

No produto: [Rever mudanças no IDE](/guide/ide/reviewing-changes/)

## Erros comuns

| Erro | Consequência |
|---|---|
| Selecionar milhares de linhas de um ficheiro inteiro | Desperdício de Contexto, superfície de mudança demasiado ampla |
| Zero seleção e só «otimize um pouco» | O modelo alarga o alcance por si |
| Aceitar todas as sugestões sem ler o Diff | Introduz desvio de estilo ou falhas de segurança |

## Fontes de referência

- [Definir restrições](/prompts/constraints-and-boundaries/)
- stormzhang `09-ide.md`

---

**Estado:** verified  
**Produtos aplicáveis:** IDE  
**Base de verificação:** Esta página descreve o método mais estável de controlo de alcance na extensão IDE: a combinação de seleção, ficheiros abertos e caminhos `@` explícitos; trata-se de uma forma geral de organizar Contexto ao trabalhar com código no editor, sem depender do nome de um botão concreto da extensão.  
**Última verificação:** 2026-07-26
