---
title: Lista de segurança para iniciantes
description: Itens de segurança para conferir antes do primeiro uso.
locale: pt
source_locale: zh-CN
source_revision: "75bfe4d"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 120
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Cruzado com os capítulos já verificados deste handbook sobre Aprovação, Sandbox e rede, revisão de resultado e desfazer/recuperar; esta página só descreve as premissas de segurança e práticas de baixo risco a confirmar antes do primeiro uso, sem depender de detalhes concretos de interface do produto.
  checkedAt: '2026-07-26'
---

Antes do primeiro uso, pergunte a si: «Se ele errar, o custo será alto demais?»

Esta lista existe para reduzir o risco do primeiro uso.

Antes de começar, marque:

- [ ] Estou usando um diretório de prática descartável — não o repositório de produção
- [ ] No diretório não há chaves reais, senhas nem dados privados de clientes
- [ ] Entendo que operações de alto risco precisam da minha aprovação
- [ ] Não vou aprovar comandos que não entendo nem pedidos de saída à rede
- [ ] Pretendo verificar o diff antes de aceitar o resultado
- [ ] Sei como [desfazer](/pt/guide/getting-started/undo-and-recover/)

Complemento conceitual: [permissões e aprovação](/pt/guide/foundations/permissions-and-approvals/) · [Sandbox e rede](/pt/guide/foundations/sandbox-and-network/).

## Mal-entendidos comuns

### 1. A lista de segurança é só para quem é especialmente cauteloso

Ela é exatamente para quem está começando — porque na primeira vez é fácil superestimar o «eu deveria entender tudo».

### 2. Se eu não clicar em comandos perigosos, já está seguro o bastante

Na primeira vez, os problemas mais comuns são:

- Usar o projeto errado
- Trazer arquivos sensíveis
- Não verificar o diff
- Não ter pensado em como desfazer

### 3. Vou aprendendo enquanto uso — não preciso confirmar isto antes

Dá para aprender enquanto usa — mas passar por estes itens da lista antes de começar fica mais estável.

No primeiro uso do Codex, baixar o custo do erro primeiro deixa o resto bem mais leve.
