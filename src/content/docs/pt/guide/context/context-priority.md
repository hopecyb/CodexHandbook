---
title: Prioridade do Contexto
description: Em indicações em conflito, quem manda.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Conflitos comuns: descrição do projeto vs Prompt atual vs conversa antiga. Princípios práticos:

1. O **Prompt da Tarefa atual** tem prioridade máxima no alcance desta ocasião
2. Proibições de segurança ao nível do projeto (como «proibido fazer push» ou «proibido chaves de produção») devem cumprir-se sempre
3. Ao detetar conflito, escreva com clareza: «esta mensagem manda; ignore as indicações anteriores sobre X»

«Prioridade do Contexto» é, em conflito entre várias instruções, qual prevalece.

## O que «prioridade» quer dizer

Os conflitos mais comuns são do dia a dia:

- Antes disse «só análise de leitura»
- Depois disse «altere diretamente por mim»
- No projeto ainda está escrito «proibido alterar certo diretório»

Se esta informação não estiver em camadas, o resultado fica fácil: quer alterar e não deveria.

## Mal-entendidos frequentes

### 1. Se eu disser outra vez depois, cobre automaticamente tudo o que veio antes?

Não de todo. Se o que veio antes for uma restrição de segurança ao nível do projeto, uma instrução temporária posterior pode não a anular.

### 2. Informação em conflito não importa — ele compreende sozinho

É precisamente quando mais desvia. Quanto mais conflito, mais deve dizer com clareza «qual manda».

### 3. Prioridade do Contexto é só teoria

É muito prática e afeta diretamente:

- Se altera por engano
- Se viola regras do repositório
- Se arrasta Tarefas antigas para Tarefas novas

## Como escrever com mais clareza em conflito

Quando suspeitar que instruções anteriores e posteriores conflitam, diga diretamente:

```text
Esta mensagem manda; ignore as indicações anteriores sobre X.
```

Frases deste tipo são especialmente úteis em Threads longas.

Quando o Contexto conflita, o melhor é indicar logo «desta vez, ouça qual». Políticas obrigatórias da equipa também podem prevalecer sobre preferências pessoais.

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica como tratar Contexto em conflito; o corpo não depende de interfaces concretas de cliente nem de factos voláteis do produto; conceitos e exemplos foram revistos.  
**Última verificação:** 2026-07-26
