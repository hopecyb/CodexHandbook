---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Conferido com as páginas oficiais atuais de Pricing e Authentication. Esta página descreve os modos de acesso e a ordem de diagnóstico sem fixar preços, limites ou listas de funções que mudam frequentemente."
  checkedAt: "2026-08-26"
title: Conta, planos e acesso
description: Distinguir os planos ChatGPT, a utilização de API key e as permissões do workspace da organização.
locale: pt
source_locale: zh-CN
source_revision: ecfa8f9
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 10
---

Atualmente, o Codex pode ser usado através de um **plano ChatGPT** ou de uma **API key com cobrança por utilização**. Os dois métodos, porém, não oferecem exatamente os mesmos pontos de acesso nem os mesmos limites de administração.

## Escolher primeiro o método de acesso

| Método | Adequado para | Limites de acesso |
|---|---|---|
| Iniciar sessão com ChatGPT | Trabalho interativo pessoal, ambiente de trabalho, Cloud e workspaces de organizações | Sujeito aos limites do plano ChatGPT, aos papéis no workspace e às políticas do administrador |
| Usar uma API key | Codex local, scripts e CI | Cobrado pela utilização da API; algumas capacidades dependentes do workspace ChatGPT ou do Cloud não estão disponíveis |

A página oficial atual de Pricing inclui ChatGPT Work e Codex em planos como Free, Go, Plus, Pro, Business, Edu e Enterprise, mas preços, limites, modelos e funções incluídas podem mudar. Este manual não reproduz a tabela de preços. Consulte diretamente a [página oficial de Pricing atualizada](https://learn.chatgpt.com/docs/pricing).

## Porque pode ter conta e continuar sem acesso

O início de sessão é apenas a primeira etapa. O acesso final também depende de:

1. O plano atual incluir o ponto de acesso ou a função pretendida.
2. O produto estar disponível na sua região.
3. A organização lhe ter atribuído o lugar, o papel e as permissões necessários no workspace.
4. O administrador restringir o método de autenticação, o modelo ou as capacidades locais através de configuração administrada.
5. A utilização ter atingido o limite da janela atual ou o limite semanal.

## Lista de verificação para utilizadores individuais

- Consegue iniciar sessão na conta ChatGPT correta numa página oficial.
- Sabe se está a usar a quota do plano ou a pagar pela utilização da API.
- Vê a identidade correta no cliente pretendido.
- Quando aparece um aviso de limite, consulta a utilização atual em vez de reinstalar repetidamente o cliente.

## Lista de verificação para equipas e empresas

- Selecionou o workspace correto, e não o espaço pessoal associado ao mesmo endereço de email.
- O administrador configurou membros, lugares e papéis.
- SSO, MFA, retenção de dados e políticas regionais cumprem os requisitos da organização.
- A configuração administrada não impõe outro método de autenticação local.
- A API key pertence à API organization correta, sem confundir as suas políticas com as do workspace ChatGPT.

## Um exemplo de diagnóstico

Se a CLI aceitar uma API key, mas o botão do Cloud estiver indisponível, isso não significa necessariamente que a instalação falhou. O Cloud exige autenticação com ChatGPT e está sujeito ao plano ChatGPT e às permissões do workspace; a API key destina-se sobretudo a fluxos locais e programáticos.

A seguir, consulte [Início de sessão e autenticação](/pt/guide/getting-started/sign-in-and-authentication/).
