---
title: Resolução de problemas no IDE
description: Problemas de carregamento da extensão, Contexto e sincronização.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 90
---

A resolução de problemas no IDE difere da CLI num ponto:  
muitos casos parecem «o plugin não funciona», mas na prática o desvio está na **área de trabalho, no estado de login ou no próprio Contexto do editor**.

Quando o IDE falha, distinga primeiro se «a extensão não arrancou» ou se «arrancou, mas o Contexto que recebeu está errado».

| Sintoma | Experimente primeiro |
|---|---|
| Extensão sem resposta | Atualize a extensão e o editor; veja os registos do extension host |
| Estado de login perdido | Volte a autenticar |
| Contexto incorreto | Confirme a raiz da área de trabalho aberta |

## Distinga primeiro 3 tipos

- **Sem qualquer reação**: em geral problema de carregamento da extensão
- **Abre mas não serve**: em geral login ou autenticação
- **Resposta errada, altera o sítio errado**: em geral área de trabalho ou Contexto

## Mal-entendidos frequentes

### 1. O ícone do plugin ainda está lá — a extensão está bem?

O ícone só mostra que está instalada; não prova que a sessão atual funciona de verdade.

### 2. Contexto errado = o modelo compreende mal

Muitas vezes não é compreensão fraca: a raiz aberta, o alcance dos ficheiros escolhidos ou a própria área de trabalho é que estão errados.

### 3. Reinstalar o plugin tem de ser o primeiro passo?

Não comece por aí.

Confirme primeiro:

- Versão do editor
- Versão da extensão
- Estado de login
- Área de trabalho atual

Muitos problemas localizam-se já nesta etapa.

## Ordem de investigação

1. Ver se a extensão responde
2. Confirmar o estado de login
3. Confirmar a raiz da área de trabalho atual e os ficheiros abertos
4. Se ainda falhar, ver os registos da extensão

A causa raiz mais comum na resolução de problemas IDE costuma ser área de trabalho, estado de login ou origem do Contexto errados — não necessariamente extensão danificada.

Documentação oficial: [OpenAI Codex](https://developers.openai.com/codex).

---

**Estado:** verified  
**Produtos aplicáveis:** IDE  
**Base de verificação:** O centro de ajuda atual da OpenAI continua a confirmar a IDE extension como entrada formal; esta página tria problemas IDE em «extensão sem resposta / estado de login / área de trabalho e Contexto», um quadro estável de resolução de problemas, e não um manual de códigos de erro concretos.  
**Última verificação:** 2026-07-26
