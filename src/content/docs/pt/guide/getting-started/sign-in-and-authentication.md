---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Conferido com a página oficial atual de Authentication para os dois métodos de autenticação local, com ChatGPT e API key, o requisito de autenticação com ChatGPT no Cloud, os comandos da CLI, a partilha da cache de credenciais e os limites de armazenamento.
  checkedAt: '2026-08-26'
title: Início de sessão e autenticação
description: Escolher o método de autenticação adequado nos clientes locais e no Cloud e verificar com segurança a identidade ativa.
locale: pt
source_locale: zh-CN
source_revision: "ea83fa6"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 60
reviewed_at: '2026-10-26'
---

Ao usar modelos da OpenAI, o Codex oferece duas formas de autenticação pessoal:

- **Iniciar sessão com ChatGPT**: utiliza a quota da subscrição e herda as permissões e políticas de dados do workspace ChatGPT.
- **Iniciar sessão com API key**: cobra segundo a utilização da API e herda as políticas de dados e administração da API organization.

O trabalho local na aplicação de ambiente de trabalho ChatGPT, no Codex CLI e nas integrações IDE suporta ambos os métodos. **O Codex Cloud exige autenticação com ChatGPT.**

## Iniciar sessão com ChatGPT

Os clientes locais abrem o navegador para a autorização e devolvem depois as credenciais ao cliente:

- Aplicação de ambiente de trabalho: na página de sessão terminada, escolha continuar a iniciar sessão.
- CLI: execute `codex login`.
- IDE: na página de sessão terminada, escolha iniciar sessão com ChatGPT.

Depois, confirme a conta e o workspace ativos, sobretudo se coexistirem um espaço pessoal e o workspace da empresa.

## Iniciar sessão com uma API key

Depois de criar uma key na OpenAI Platform, não a escreva diretamente no histórico de comandos. Na CLI, use a entrada padrão:

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

Na aplicação de ambiente de trabalho, escolha «iniciar sessão de outra forma»; no IDE, escolha **Use API Key**. A API key é adequada para trabalho local e CI de confiança, mas não dá acesso às capacidades que dependem de um workspace ChatGPT ou do Cloud.

## Verificar e terminar a sessão na CLI

```bash
codex login status
codex logout
```

A CLI e o IDE partilham informação de autenticação em cache. Se terminar a sessão num deles, poderá ter de voltar a iniciar sessão quando abrir o outro.

## Segurança das credenciais

- Não inclua `~/.codex/auth.json` num commit nem o cole num pedido de suporte, conversa ou log.
- Prefira o armazenamento de credenciais do sistema operativo; trate os tokens guardados em ficheiros como palavras-passe.
- Na CI, use credenciais próprias e revogáveis, em vez de reutilizar uma key pessoal de longa duração.
- O Codex Cloud acede diretamente aos repositórios de código; ative MFA na conta. Em organizações com SSO, o administrador deve exigir MFA.
- Não use uma key pessoal para contornar restrições da organização; confirme primeiro o workspace e as políticas administradas.

## Sessão iniciada, mas a função continua indisponível

Verifique por esta ordem:

1. A conta ou a API organization ativa é a correta?
2. Está no workspace ChatGPT certo?
3. A função pretendida exige autenticação com ChatGPT em vez de API key?
4. O plano, o lugar, o papel ou a política do administrador limita o acesso?
5. Só depois verifique a cache do cliente, a rede e a versão.

A CLI tem logs próprios de autenticação que podem ajudar o suporte oficial ou a resolução de problemas de login. Antes de os partilhar, confirme que não contêm informação sensível.

Consulte [Conta, planos e acesso](/pt/guide/getting-started/account-plans-and-access/) para os limites dos planos e a [página oficial de Authentication](https://learn.chatgpt.com/docs/auth) para os detalhes atuais.
