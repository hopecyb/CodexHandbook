---
title: Diagnosticar antes de corrigir
description: Problemas de produção e bugs teimosos — construa primeiro a cadeia de evidências, só depois intervir.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Pedir ao Codex para corrigir o bug de imediato costuma gerar muita retrabalho. O fluxo de diagnóstico enfatiza: **sintoma → hipótese → evidência → correção mínima**.

## Quando usar

- Causa da falha de teste pouco clara
- Alertas de produção, relatos de utilizadores «intermitentes»
- O problema persiste após a última correção

## Passos

### 1. Congelar alterações

```text
Não altere código de negócio. Liste: passos de reprodução, logs relevantes, commits recentes relacionados.
```

### 2. Reduzir o âmbito

- Bissecção: que commit introduziu?
- Isolamento: repositório ou caso de teste de reprodução mínima

### 3. Formular hipóteses

Peça ao Codex:

```text
Hipótese A: … Forma de verificar: …
Hipótese B: … Forma de verificar: …
```

### 4. Verificar hipóteses (preferência só de leitura)

Correr testes direcionados, acrescentar logs temporários (ramo descartável), ler monitorização.

### 5. Correção mínima

Corrigir uma causa raiz de cada vez; evite «refatorar de passagem».

### 6. Verificação de regressão

Caso de falha original + cenários adjacentes + testes para prevenir recorrência.

## Modelo de prompt

```text
Siga «diagnosticar antes de corrigir»:
1. Leia @path/to/failing-test e a implementação; explique a causa da falha (cite números de linha da stack)
2. Dê 2 hipóteses e como as verificar só com leitura
3. Após eu confirmar a hipótese, escreva a correção; depois da correção, corra apenas os testes relacionados
```

## Relação com EPXV

O diagnóstico pode ver-se como uma versão aprofundada da fase **Explorar**; na fase de plano, escreva também «se a hipótese estiver errada, como recuar».

## Erros comuns

- Alterar código sem reproduzir
- Um único patch a corrigir três problemas — impossível de rever
- Remover logs temporários sem acrescentar testes permanentes

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre planeamento, qualidade e recuperação de falhas; esta página confirma apenas o método estável de diagnóstico «cadeia de evidências primeiro, correção mínima depois», sem depender de implementações concretas de produto.  
**Última verificação:** 2026-07-26
