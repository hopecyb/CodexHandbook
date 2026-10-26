---
title: Resolução de problemas na App de desktop
description: Tratamento habitual de falhas de instalação, login e Tarefas.
locale: pt
source_locale: zh-CN
source_revision: "c298f9f"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App
  basis: A documentação de ajuda atual da aplicação de desktop da OpenAI continua a cobrir instalação, início de sessão, acesso a projetos e autorização de ficheiros locais; esta página usa um quadro de triagem por sintoma para instalação, login, Permissões, Tarefas à espera de Aprovação e alcance do Contexto, como entrada estável de resolução de problemas.
  checkedAt: '2026-07-26'
---

Ao resolver problemas, investigue pela ordem do mais provável e do mais fácil de tratar.

| Sintoma | Experimente primeiro |
|---|---|
| Não instala / não abre | Confira os requisitos do sistema e o pacote oficial; reinicie e tente de novo |
| Não consegue iniciar sessão | Verifique rede, permissões da conta, SSO; limpe a sessão e volte a entrar |
| Não vê ficheiros do projeto | Confirme que adicionou a pasta correta e as permissões de ficheiro do sistema |
| A tarefa fica à espera de aprovação | Volte à vista da tarefa e trate os pedidos pendentes |
| As mudanças não correspondem ao esperado | Aperte as restrições, abra uma Thread nova, verifique o contexto |

Se continuar a falhar: [https://developers.openai.com/codex](https://developers.openai.com/codex) e [Índice de resolução de problemas](/pt/guide/reference/troubleshooting/).

## Mal-entendidos frequentes

### 1. Um problema significa que usei algo muito errado?

Muitos casos são só:

- Caminho errado
- permissão não aprovada
- A tarefa à espera da sua confirmação
- O contexto já ficou confuso na conversa

### 2. «Não vê ficheiros» — o que suspeitar primeiro?

Priorize o diretório do projeto e as permissões; não comece por duvidar da capacidade do modelo.

### 3. «As mudanças não correspondem ao esperado» — como recuperar?

Primeiro reduza o alcance do problema:

- Reformule o alcance
- Deixe claro o que está errado
- Se for preciso, abra uma Thread nova

Resolva primeiro as causas mais comuns e fáceis de corrigir; não complique demais logo no início.
