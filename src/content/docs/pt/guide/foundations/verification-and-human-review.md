---
title: Verificação e revisão humana
description: Por que o resultado precisa ser verificável e como revisar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 110
---

O Codex pode acelerar o seu trabalho, mas não assume a responsabilidade final de confirmação.

O Codex aumenta a velocidade, mas **não dispensa o aceite**. No mínimo, revise isto:

1. Leia o [Diff](/guide/quality/review-diffs/): quais arquivos mudaram e se ultrapassou o alcance
2. Verifique conforme o critério de conclusão que você definiu
3. Se der para rodar testes, rode: [Rodar testes](/guide/quality/run-tests/)
4. Fatos externos precisam de fonte: [Validar fontes](/guide/quality/validate-sources/)

## O que a revisão humana realmente olha

«Revisão humana» não significa refazer tudo. Do ponto de vista de quem entrega, confirme:

- Ele alterou certo?
- Ele alterou demais?
- Ele deixou passar condições-chave?
- Você realmente se atreve a entregar este resultado?

## Mal-entendidos comuns

### 1. Se o resultado «parece» certo, pode encerrar?

«Parece certo» muitas vezes significa:

- O texto flui, mas os fatos podem estar errados
- A página parece normal, mas o fluxo-chave não foi testado
- O código roda, mas condições de contorno não foram testadas

### 2. Revisão humana significa que a IA não tem valor?

A IA acelera; você define o padrão e faz o controle final.

### 3. Revisão só é necessária em Tarefas de código?

Estes também precisam de revisão:

- Conclusões de pesquisa
- Conteúdo de documentação
- Tabelas e consolidações
- Material de apresentação
- Configuração e scripts

## Passos na revisão

Se o tempo for curto, siga esta ordem:

1. Ver se o alcance ultrapassou o limite
2. Ver se o resultado atende ao que você queria originalmente
3. Preferir verificação automática quando possível
4. No passo mais crítico que restar, passar de novo com olhar humano

O papel da revisão humana é deixar a decisão final com quem realmente responde pelo resultado.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica por que o resultado precisa de Verificação e revisão humana; links internos, ordem dos passos e formulações conceituais foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
