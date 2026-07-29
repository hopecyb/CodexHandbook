---
title: Criar o primeiro projeto de prática
description: Prepare um diretório de prática seguro e descartável.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Na primeira vez que cria o projeto de prática, é tentador testar direto no projeto oficial que já tem em mãos. Parece mais prático — e o risco também é maior.

## Prática recomendada

1. Crie uma pasta nova, por exemplo `codex-practice/`
2. Coloque 1–2 arquivos de texto sem informação sensível, por exemplo `hello.md`
3. No Codex, abra/adicione essa pasta como projeto
4. **Não** use repositórios com chaves de produção, dados de clientes ou histórico que não possa descartar

## Por que criar o projeto de prática primeiro

O objetivo da primeira Tarefa é aprender o fluxo — não entregar negócio. Com isolamento, o custo de alterar errado cai muito.

Na primeira prática, o mais importante é familiarizar-se com estas ações:

- Como ele entende a Tarefa
- Quando pede Permissão
- Como você verifica o resultado
- Como desfazer quando erra

Se treinar de cara no projeto oficial, passos que deveriam ser de aprendizado de baixo risco passam a ter custo real.

## Mal-entendidos comuns

### 1. Quanto mais o projeto de prática parecer produção, melhor

Na primeira vez, o que importa é segurança, descartabilidade e facilidade de verificação — não precisa buscar «totalmente real».

### 2. Se eu tiver cuidado, usar o repositório oficial não tem problema

Na primeira vez, os problemas mais comuns são:

- Limites da Tarefa pouco claros
- Diff passado por alto
- Aprovar uma operação que você não entendeu

### 3. Projeto de prática simples demais — não se aprende nada

Quanto menor a primeira Tarefa, mais você concentra a atenção no fluxo em si — não na complexidade do negócio.

## Como escolher o projeto de prática

Se for criar um agora, atenda pelo menos a estas 4 condições:

1. Descartável
2. Sem dados sensíveis
3. Poucos arquivos, estrutura simples
4. Mudanças fáceis de entender de relance

O primeiro projeto de prática não precisa parecer produção. Seguro, simples e fácil de reverter se errar já basta.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base de verificação:** Cruzado com os capítulos já verificados deste handbook sobre lista de segurança para iniciantes, revisão de resultado e desfazer/recuperar; o conteúdo se limita ao método estável de «primeiro fechar o fluxo num diretório de prática descartável».  
**Última verificação:** 2026-07-26
