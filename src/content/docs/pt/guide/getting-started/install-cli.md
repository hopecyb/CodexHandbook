---
title: Instalar o CLI
description: Instale a linha de comando do Codex e faça a checagem básica.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Siga as instruções oficiais de instalação do CLI: [https://developers.openai.com/codex](https://developers.openai.com/codex) (em geral gerenciador de pacotes ou script oficial de instalação — use a documentação atual).

Se você já usa terminal no dia a dia, o CLI tende a ser mais natural.  
Na primeira instalação, o que mais trava costuma ser:

- Depois de instalar, como confirmar que não ficou pela metade
- Por que o comando «está instalado» mas o terminal não encontra
- Quando voltar a PATH / autenticação em vez de reinstalar

Se o CLI está bem instalado depende sobretudo de o terminal atual reconhecer `codex` de forma estável.

## Checagem pós-instalação

No terminal, rode o comando de versão ou de ajuda (subcomandos concretos seguem o oficial) e confirme:

- O comando é executável
- Consegue entrar no estado de login ou já autenticado

## Mal-entendidos comuns

### 1. Depois de instalar, qualquer janela de terminal reconhece o comando na hora

Às vezes é preciso reabrir o terminal ou confirmar que o `PATH` do shell atual já atualizou.

### 2. Ver saída de instalação com sucesso = já dá para usar

Vale mais confirmar se o ambiente atual encontra o comando.

### 3. Problema de CLI = reinstalar sempre

Muitas vezes o que realmente precisa checar é:

- `PATH`
- Shell atual
- Estado de login

## Como checar depois de instalar

1. Confirmar primeiro que o comando executa
2. Confirmar depois que a sessão atual consegue entrar ou já está autenticada
3. Se ainda falhar, checar local de instalação e PATH

Com o CLI instalado, o terminal atual deve encontrá-lo e você deve conseguir seguir a autenticação.

Interação detalhada: [Modo interativo do CLI](/guide/cli/interactive-mode/). Problemas: [Problemas no CLI](/guide/cli/troubleshooting/).

---

**Status:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** Embora a página evite de propósito comandos concretos de instalação, ainda pressupõe um ritmo atual de instalação do CLI, checagem no terminal e autenticação; como forma de instalação, plataformas suportadas e fluxo de autenticação mudam, antes de alinhar com as instruções oficiais mais recentes não convém marcar como `verified`.  
**Última verificação:** 2026-07-26
