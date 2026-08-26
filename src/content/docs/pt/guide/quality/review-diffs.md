---
title: Revisar diffs
description: Como ler alterações e fazer perguntas.
locale: pt
source_locale: zh-CN
source_revision: 7dc8ee8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

«Diff» é o que o Codex alterou desta vez, de facto.

Na primeira aceitação, muita gente só lê o resumo que ele escreveu e não vê as alterações reais.  
Os problemas descobrem-se sobretudo no diff; a frase «já concluí» só serve de referência.

## O que o diff mostra

O diff responde diretamente a perguntas-chave:

- Que ficheiros alterou de facto
- As alterações caem no âmbito que permitiu mexer
- Apagou ou partiu algo de passagem
- Entrou conteúdo de debug, segredos ou código temporário

Ao ler o diff, foque-se em:

1. Só alterou caminhos permitidos?
2. Há eliminações inesperadas?
3. Nomenclatura e estilo são consistentes?
4. Há segredos ou resíduos de debug?

Vista no produto: [Diffs, comentários e revisão](/pt/guide/desktop-app/diffs-comments-and-review/)

## Mal-entendidos habituais

### 1. Sem saber ler cada linha de código, já pode fazer uma revisão básica

Na primeira fase não precisa de ler cada linha como um programador sénior.  
Estes três pontos já valem muito:

- Que ficheiros mudaram
- Se mexeu onde não devia
- Se há conteúdo extra claramente irrelevante

### 2. Só um ficheiro ≠ necessariamente seguro

Poucos ficheiros não garantem que a alteração esteja correta.  
Mas o âmbito pequeno é mais fácil de verificar e de reverter.

### 3. «É só uma alteração pequena» também se revê

Os problemas mais fáceis de escapar estão muitas vezes precisamente onde «parece só uma alteração pequena».

## Ordem de verificação

Na primeira leitura do diff:

1. Veja quantos ficheiros mudaram
2. Depois se há caminhos fora do permitido
3. Depois eliminações óbvias, logs temporários, resíduos de debug
4. Depois se estilo e nomenclatura estão coerentes

Primeiro veja claramente o que foi alterado de facto; depois decida se aceita o resultado.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica âmbito e riscos a observar na revisão de diffs; ligações internas e ordem de verificação foram revistas, e o corpo não depende de factos voláteis de produto.  
**Última verificação:** 2026-07-26
