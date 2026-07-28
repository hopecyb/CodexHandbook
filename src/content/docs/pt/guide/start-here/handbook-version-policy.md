---
title: Política de versão do handbook
description: Explica o status do conteúdo, a data de verificação e como as atualizações contínuas funcionam.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 8
---


## Atualização contínua

Este handbook não fica congelado a um único número de versão do Codex por longo prazo. O produto muda, por isso as páginas usam status e data de verificação para indicar a confiabilidade atual.

## Conteúdo

- Por que este handbook não pode pressupor que nada muda
- Como ler o status e a data de verificação no final da página
- Em quem confiar quando houver conflito com o oficial

## Status da página

| Status | Significado |
|---|---|
| planned | Planejado, ainda não escrito |
| draft | Em redação |
| review | Conteúdo pronto, aguardando revisão |
| verified | Verificado conforme a base indicada |
| outdated | Precisa de atualização após mudanças no produto |
| archived | Mantido por histórico, fora da navegação principal |

## Como ler o status da página

- `planned`: ainda não foi escrito
- `draft`: em escrita, ainda instável
- `review`: o núcleo já existe, mas ainda precisa de revisão
- `verified`: já foi verificado conforme a base indicada
- `outdated`: pode ter sido correto antes, mas agora desconfie de desatualização
- `archived`: mantido como referência, não como conteúdo principal atual

## As três linhas do rodapé

Na fase MVP, cada página marca no final: **Status / Produtos aplicáveis / Última verificação**. Conteúdo que envelhece rápido (instalação, conta, Permissão, modelo) deve incluir links oficiais.

## Base oficial

O comportamento do produto segue a documentação da OpenAI: [https://developers.openai.com/codex](https://developers.openai.com/codex). Este repositório é um guia comunitário; se houver conflito com o oficial, prevalece o oficial — e issues são bem-vindas.

## Mal-entendidos comuns

### 1. Estar no handbook não significa que nunca muda

Estes conteúdos mudam com mais facilidade:

- Forma de instalação
- Fluxos de login e conta
- Permissão, modelos, itens de configuração
- Comportamento de Cloud e das entradas de produto

### 2. `review` não significa que não se pode ler

`review` indica que o conteúdo principal já existe, mas ainda não chegou ao nível máximo de confirmação — não que não sirva de referência.

### 3. Em conflito entre handbook comunitário e documentação oficial, não acredite metade em cada um

Dá para separar assim:

- Entendimento e explicação de caminhos: handbook
- Comportamento e parâmetros mais recentes: oficial

## Como julgar se uma página é confiável

Se suspeitar que uma página está desatualizada, olhe estas três coisas:

1. O status do rodapé é `review`, `verified` ou `outdated`?
2. A data da última verificação está longe de hoje?
3. O tema é conceitual, ou é instalação, configuração, Permissão — coisas que mudam fácil?

Sempre que envolver comportamento, parâmetros e regras atuais, a documentação oficial vigente prevalece.


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Revisado conforme o sistema de 6 status adotado por este handbook, as regras de rodapé e o princípio de prioridade oficial; esta página explica a política de versão do site e o método de leitura, sem depender de parâmetros de versão de produto específicos.  
**Última verificação:** 2026-07-26
