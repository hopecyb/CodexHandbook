---
title: Criar Pull Request
description: Da Tarefa Cloud a um PR revível — descrição, alcance e portão humano de merge.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Na primeira vez com o fluxo Cloud, costuma acontecer que a Tarefa já terminou mas a alteração ainda não está num estado fácil de rever e discutir. Em colaboração de equipa, esse passo costuma ser o **Pull Request**.

Um PR é um pedido de alteração que se pode rever.

Concentra o que mudou, porquê e se se testou, num sítio onde se pode fazer review. Quando uma Tarefa Cloud se entrega à equipa, também aterra aqui.

## Conteúdo

- Expectativa de extremo a extremo: de Tarefa Cloud a PR
- O que a descrição do PR deve incluir para que pessoa e CI possam aceitar
- Quando não abrir PR automaticamente

## Quando abrir um PR

Se a alteração precisa que alguém a olhe, que a CI corra, ou que no fim se faça merge ao branch principal, não fiques em «já está alterado no branch»: avança até um **PR revível**.

## Fluxo de trabalho recomendado

```text
Ligar GitHub → clarificar issue/objetivo → Tarefa Cloud (confirmar plano) → push de branch → abrir PR → review humana + CI → merge
```

Pré-requisito: [Ligar o GitHub](/guide/web-and-cloud/connect-github/)

## Porque não convém merge automático de entrada

O papel do PR é deixar uma entrada de verificação para pessoas e sistemas, não só subir código.

O habitual:

- O Codex pode ajudar-te a abrir o PR
- Uma pessoa decide se fazer merge

Assim, mesmo que a Tarefa se desvie, continua a haver uma revisão humana.

## Pontos-chave do Prompt da Tarefa

```text
Objetivo: corrigir o timeout de login descrito em #42
Branch: fix/42-login-timeout
Alcance: só packages/auth e testes relacionados
Feito: abrir PR a main, não fazer merge
A descrição do PR deve incluir: causa, resumo da alteração, comando de teste e resultado, riscos e rollback
```

Alinhado com [Definir feito](/prompts/define-done/) e [Anatomia de uma boa Tarefa](/prompts/task-anatomy/).

## Um bom PR responde pelo menos a quatro perguntas

1. Porque alteraste isto?
2. Que sítios concretos tocaste?
3. Como o verificaste?
4. Que riscos, limites ou casos não cobertos ficam?

Se a descrição não cobrir esses quatro pontos, quem revê tem de reconstruir o Contexto.

## Lista de qualidade do PR

- [ ] O título diz «o que se fez», não «atualizar código»
- [ ] Liga o número de issue
- [ ] A CI passa ou explica a falha conhecida
- [ ] O tamanho do Diff é aceitável para a equipa; se for enorme, partir o PR
- [ ] Sem secrets nem tempestade de formato irrelevante
- [ ] Capturas ou logs (alterações de UI/comportamento)

## Portão humano

Embora o Codex possa abrir o PR, o **merge** deveria fazê-lo por omissão uma pessoa (ou um bot controlado + proteção de branches):

Ver [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/)

## Mal-entendidos frequentes

### 1. Meter várias alterações não relacionadas num só PR

Custa muito revê-lo e muito mais revertê-lo.

### 2. Só dizer «já está corrigido» sem dizer como se verificou

O outro não sabe se «de verdade o testaste» ou «parece que deveria estar bem».

### 3. Deixar que o Codex toque diretamente no branch principal

Numa experiência pessoal talvez poupe um passo; num repo colaborativo o risco é demasiado alto.

## Com automatização de Review

- Podes usar um Skill ou `codex exec` em CI para **comentários de revisão complementares**
- O merge automático precisa de uma política de governação à parte; não está na rota por omissão de principiantes

## Erros frequentes

- PR com várias funções não relacionadas
- Descrição «alterações geradas por IA» sem explicação de testes
- Merge direto a main saltando a review

## Leitura adicional

- [Integração com GitHub](/guide/integrations/github/)
- [Rever Diffs](/guide/quality/review-diffs/)
- [App de ambiente de trabalho: Diffs e comentários](/guide/desktop-app/diffs-comments-and-review/)

---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud / Web  
**Nota de revisão:** «A entrega Cloud entra em PR e depois review humana» continua a ser um princípio sólido, mas esta página concreta demasiado a entrada de abrir PR, o comportamento automático e o ritmo de entrega Cloud; até contrastar item a item o fluxo oficial de PR e a integração Cloud/GitHub, não convém marcá-la como `verified`.  
**Última verificação:** 2026-07-26
