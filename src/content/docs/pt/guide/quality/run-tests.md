---
title: Correr testes
description: Fazer dos passos de Verificação parte da Tarefa.
locale: pt
source_locale: zh-CN
source_revision: 13d4ba5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Depois de alterar, precisa de alguma forma de confirmar que não partiu nada de forma óbvia.

Essa «prova» pode ser testes automáticos, um build bem-sucedido, ou um conjunto claro de passos de Verificação manual.

## O que os testes respondem

Os testes respondem sobretudo a uma pergunta muito prática:

> **Como sabe que esta alteração não partiu outras coisas de passagem?**

Sem ação de Verificação, o resultado costuma ser só «parece mais ou menos».

Nos critérios de aceitação do Prompt, declare o comando de teste. Se o repositório não tiver testes, exija pelo menos: comando de arranque/build bem-sucedido, ou passos de Verificação manual.

«Concluído» sem Verificação é muitas vezes só juízo subjetivo.

## Mal-entendidos habituais

### 1. Não só programadores precisam de Verificação

Mesmo a alterar sobretudo documentação, páginas, configuração ou conteúdo, precisa de uma forma correspondente de verificar.

### 2. Sem testes no repositório, ainda assim se aceita

Sem testes automáticos, acrescente pelo menos um de:

- Build bem-sucedido
- Arranque bem-sucedido
- Passos claros de verificação manual

### 3. «Alteração pequena» também não se salta por defeito

Alterações pequenas também podem ter efeitos colaterais — sobretudo se ainda não conhece bem o projeto.

## Ordem de Verificação

Se não souber por onde começar:

1. Se houver testes relacionados, corra-os primeiro
2. Se não houver, corra build ou arranque
3. Se ainda não chegar, acrescente o mínimo de verificação manual

O ponto é evitar entregar sem qualquer Verificação — não cobrir tudo de uma vez.

## Uma frase para meter no Prompt

Na primeira Tarefa, pode acrescentar:

```text
No fim, corra a Verificação relacionada; se não houver testes automáticos, diga-me os passos mínimos de verificação manual.
```

Assim, mesmo com testes incompletos no repositório, a Verificação não se salta por completo.

## Se precisar, mais uma frase

Também pode acrescentar:

```text
Diga-me que Verificações correu de facto; se não puder correr, explique a razão com clareza — não assuma que passou por defeito.
```

A Verificação pode ser leve, mas não pode faltar; senão «acabado» dificilmente se sustenta.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica porque os passos de Verificação devem entrar na aceitação da Tarefa; frases de exemplo e ordem de verificação foram revistas, e o corpo não depende de factos voláteis de produto.  
**Última verificação:** 2026-07-26
