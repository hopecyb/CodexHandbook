---
title: Resolução de problemas na CLI
description: Investigar falhas de autenticação, Permissão e comandos.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Quando a CLI falha, o erro pode parecer sempre um erro de terminal, mas a causa de fundo pode não ser da mesma categoria.

Na resolução de problemas da CLI, classifique primeiro se o problema é «não instalou / não entrou / sem Permissão / diretório errado».

| Sintoma | Experimente primeiro |
|---|---|
| command not found | Verifique instalação e PATH |
| Falha de autenticação | Volte a iniciar sessão; confira a política da organização |
| Permissão recusada | Veja o modo de Aprovação e as definições de Sandbox |
| Alterou ficheiros no diretório errado | Confirme o diretório de trabalho atual |

## Distinga primeiro 4 tipos

- **Nem encontra o comando**: em geral instalação ou `PATH`
- **O comando corre, mas não entra**: em geral autenticação
- **Entra, mas não consegue trabalhar**: em geral Permissão ou Sandbox
- **Fez a coisa errada**: em geral diretório ou Contexto errados

## Mal-entendidos frequentes

### 1. Todos os erros da CLI exigem estudar o mesmo registo

Classificar o problema numa categoria grande costuma ser mais rápido do que mergulhar logo nos detalhes do erro.

### 2. Permissão recusada = o programa partiu

Muitas vezes não partiu: Aprovação, Sandbox ou política estão a funcionar normalmente.

### 3. O comando ter corrido prova que o diretório está certo

Também não.

Muitos problemas da CLI não são o comando não correr, mas corrê-lo no repositório ou no diretório de trabalho errados.

## Ordem de investigação

1. Confirme se o comando existe
2. Confirme o estado de login
3. Veja o modo de Permissão atual e os limites do Sandbox
4. Por fim, confirme se o diretório de trabalho atual é o projeto que pensa

Na resolução de problemas da CLI, distinguir instalação, login, Permissão ou diretório costuma tornar a investigação mais fluida.

Documentação oficial: [OpenAI Codex](https://developers.openai.com/codex).


---

**Estado:** verified  
**Produtos aplicáveis:** CLI  
**Base de verificação:** O material de introdução e configuração da CLI no OpenAI Help Center continua a cobrir fontes habituais de problemas como instalação, autenticação, Permissão/Sandbox e diretório de trabalho; esta página usa uma triagem por sintoma em instalação, login, Permissão e diretório — um quadro estável de encaminhamento de falhas.  
**Última verificação:** 2026-07-26
