---
title: Diff, comentários e revisão
description: Ler mudanças e deixar comentários de revisão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

## Fluxo de revisão

1. Abra a vista de Diff e navegue por ficheiro
2. Confirme que as mudanças ficam no alcance acordado
3. Questione ou comente pontos suspeitos (se a UI permitir)
4. Aceite, rejeite ou peça alterações

Método: [Rever Diff](/guide/quality/review-diffs/)

## Conteúdo

Na App de desktop, as mudanças veem-se sobretudo na vista de Diff, não na zona de conversa.

A zona de chat é «o que ele diz»; a vista de Diff é «o que de facto aconteceu».

## Mal-entendidos frequentes

### 1. Comentários só servem em colaboração de equipa?

Mesmo a trabalhar sozinho, comentar ou questionar ajuda: pelo menos esclarece «por que esta mudança».

### 2. Não tenho a certeza se errou — o que fazer?

Não precisa de concluir de imediato. Aponte primeiro o ponto suspeito e peça uma explicação; é mais estável do que adivinhar sozinho.

### 3. O que olhar no mínimo antes de aceitar?

Pelo menos estas três coisas:

- Que ficheiros mudaram
- Se ultrapassou o alcance permitido
- Se há eliminações ou resíduos que não deveriam aparecer

### 4. Não sou revisor profissional — consigo detetar problemas?

Comece por perguntas bem diretas:

- Alterou sítios que não deveria?
- Apagou algo que ainda parece importante?
- Disse que fez A — o Diff mostra mesmo só A?

## Ordem de revisão

Se o Diff parecer confuso de cada vez, fixe esta ordem:

1. Ver quantos ficheiros mudaram
2. Ver se a mudança de cada ficheiro está relacionada com a Tarefa
3. Ver se há alterações fora de alcance
4. Só depois olhar detalhes de redação, formato e implementação local

Assim é mais difícil deixar-se desviar por mudanças pequenas logo no início.

## O que vale a pena escrever nos comentários

Não precisa de comentários exaustivos. Estas categorias têm mais valor:

- «Por que esta mudança aqui?»
- «Isto saiu do alcance desta Tarefa?»
- «Isto parece poder afetar o comportamento anterior — pode explicar?»
- «Dá para acrescentar uma forma de Verificação aqui?»

Este tipo de comentário impulsiona a correção seguinte melhor do que só dizer «há um problema».

Nesta página, o que realmente vale a pena rever com atenção continua a ser a vista de Diff.

---

**Estado:** outdated  
**Produtos aplicáveis:** App  
**Nota de revisão:** Esta página descreve a experiência de UI atual da vista de Diff, dos comentários e de aceitar/rejeitar mudanças na App de desktop, mas falta documentação oficial vigente bastante sólida para confirmar um a um essas ecrãs e fluxos; convém marcá-la como `outdated` até completar a documentação de revisão de desktop.  
**Última verificação:** 2026-07-26
