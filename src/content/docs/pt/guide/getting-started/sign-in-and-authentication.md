---
title: Entrar e autenticação
description: Conclua o login e confirme o estado de identidade e Permissão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Muitos iniciantes tratam «já entrei» e «já posso usar normalmente» como a mesma coisa — e não são.

O login resolve «quem você é»; autenticação e confirmação de Permissão resolvem «se você já pode começar a usar normalmente neste cliente».

No cliente escolhido, siga as instruções da interface para entrar. Você pode encontrar:

- Autorização com redirecionamento no navegador
- SSO / conta da organização
- Código de dispositivo ou token (cenário CLI)

## O que confirmar depois do login

Confirme principalmente:

- Você já entrou de fato num estado utilizável?
- Está usando identidade pessoal ou de organização?
- Se ainda não puder usar, o problema parece mais falha de login ou Permissão não liberada?

## Confirmação pós-login

- Aparece a sua conta ou organização
- Consegue criar ou abrir projetos
- Não há erros do tipo «sem permissão para usar o Codex»

Se as três valerem, em geral pode seguir para o próximo passo.

## Mal-entendidos comuns

### 1. Autorização no navegador concluída = tudo ok

Às vezes o navegador já autorizou, mas no cliente ainda pode haver:

- Conta trocada errada
- Permissão da organização não liberada
- Plano ou elegibilidade de acesso incompatível
- Estado local do cliente ainda não atualizado

### 2. A experiência de login de App, CLI e IDE deveria ser idêntica

Clientes diferentes podem concluir a autenticação de formas diferentes, por exemplo:

- App desktop tende a redirecionamento gráfico
- CLI pode usar código de dispositivo, token ou autorização no navegador
- Extensão IDE ainda empilha o estado do próprio editor

### 3. Se consegui entrar, não preciso me preocupar com a identidade atual

Sobretudo quando conta pessoal, conta de equipe e SSO da organização coexistem, veja com clareza:

- Quem aparece agora
- A que organização a Permissão atual pertence
- Sob qual identidade os projetos e Tarefas seguintes serão criados

## Ordem de investigação quando já entrou mas ainda não consegue usar

Se já fez login e ainda assim não consegue começar, verifique nesta ordem:

1. Confirmar se a conta exibida é a que você quer usar
2. Confirmar se entrou na organização ou espaço de trabalho correto
3. Ver se há avisos de Permissão, elegibilidade de acesso ou limite de plano
4. Por último, ver se o próprio cliente travou ou não sincronizou

O ponto central continua sendo: confirmar que a identidade está correta e que você já consegue criar projetos e iniciar Tarefas normalmente.

Detalhes de autenticação e avisos de segurança seguem o oficial: [https://developers.openai.com/codex](https://developers.openai.com/codex). Em falha, consulte o [índice de solução de problemas](/guide/reference/troubleshooting/).

---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Esta página envolve autorização no navegador, SSO, código de dispositivo, identidade organizacional e estado utilizável do cliente — experiências que mudam rápido entre entradas e versões; falta documentação oficial de login vigente o bastante para sustentar o texto inteiro, por isso está marcada como `outdated`.  
**Última verificação:** 2026-07-26
