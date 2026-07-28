---
title: Objetivos e contexto
description: Faça o Codex saber o que concluir e por que importa.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muitos Prompts parecem ter muita informação, mas falham nestes dois pontos:

- que resultado você quer de facto
- por que a tarefa deve ser feita assim

O objetivo diz «o que entregar»; o contexto diz «por que assim».

**Objetivo** descreve o artefato final, não um desejo vago.  
«Tornar o site melhor» → «Alterar o texto do botão principal da home para … e manter as classes de estilo atuais».

**Contexto** acrescenta o estado que o leitor não sabe, mas o Agent precisa: stack, audiência, motivo do prazo, armadilhas conhecidas.

## Por que não misturar «objetivo» e «contexto»

Só com contexto, sem objetivo, o Codex pode ler um relato de situação e não saber o que produzir.  
Só com objetivo, sem contexto, tende a resolver de forma «tecnicamente possível, mas inadequada ao seu cenário».

## Mal-entendidos comuns

### 1. Objetivo = «quero melhorar um pouco»

Isso é desejo, não objetivo.

Um objetivo mais claro costuma dizer:

- o que alterar
- para que estado
- o que manter intacto

### 2. Mais contexto não é sempre melhor

O valor real do contexto está no que **você sabe e o Codex não**, e que afeta decisões.

### 3. Só contexto técnico conta

Não só.

Também pode ser contexto importante:

- quem é o leitor
- por que há prazo
- armadilhas conhecidas
- restrições da equipa

## Uma formulação suficiente

Para uma primeira versão utilizável:

```text
Objetivo: transformar X em Y
Contexto: por que mudar, para quem, onde está o bloqueio atual
```

Por exemplo:

```text
Objetivo: tornar o texto da primeira tela da home de docs mais compreensível para iniciantes, mantendo a estrutura atual
Contexto: o texto atual assume que o leitor já domina muitos termos; na primeira visita a barreira de compreensão é alta
```

## Como verificar se está claro o bastante

No objetivo, veja duas coisas:

- o resultado é visível?
- o alcance é perceptível?

No contexto, veja mais uma:

- esta informação realmente muda como ele age?

O objetivo define o entregável; o contexto explica por que assim.

Relacionado: o contexto de projeto pode ir para [Contexto do projeto](/guide/context/project-context/), para não repetir blocos longos em cada Prompt.

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve como escrever objetivos e contexto; links e exemplos foram revistos; o corpo não depende de factos voláteis do produto.
