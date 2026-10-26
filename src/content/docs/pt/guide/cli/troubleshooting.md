---
title: Resolução de problemas na CLI
description: Investigar falhas de autenticação, permissão e comandos.
locale: pt
source_locale: zh-CN
source_revision: "57b062f"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 70
legacyVerification: {"status": "verified", "products": "CLI", "basis": "O material de introdução e configuração da CLI no OpenAI Help Center continua a cobrir fontes habituais de problemas como instalação, autenticação, permissão/Sandbox e diretório de trabalho; esta página usa uma triagem por sintoma em instalação, login, permissão e diretório — um quadro estável de encaminhamento de falhas.", "checkedAt": "2026-07-26"}
---

Quando a CLI falha, o erro pode parecer sempre um erro de terminal, mas a causa de fundo pode não ser da mesma categoria.

Na resolução de problemas da CLI, classifique primeiro se o problema é «não instalou / não entrou / sem permissão / diretório errado».

| Sintoma | Experimente primeiro |
|---|---|
| command not found | Verifique instalação e PATH |
| Falha de autenticação | Volte a iniciar sessão; confira a política da organização |
| Permissão recusada | Veja o modo de aprovação e as definições de Sandbox |
| Alterou arquivos no diretório errado | Confirme o diretório de trabalho atual |

## Distinga primeiro 4 tipos

- **Nem encontra o comando**: em geral instalação ou `PATH`
- **O comando corre, mas não entra**: em geral autenticação
- **Entra, mas não consegue trabalhar**: em geral permissão ou Sandbox
- **Fez a coisa errada**: em geral diretório ou contexto errados

## Mal-entendidos frequentes

### 1. Todos os erros da CLI exigem estudar o mesmo registro

Classificar o problema numa categoria grande costuma ser mais rápido do que mergulhar logo nos detalhes do erro.

### 2. Permissão recusada = o programa partiu

Muitas vezes não partiu: aprovação, Sandbox ou política estão a funcionar normalmente.

### 3. O comando ter corrido prova que o diretório está certo

Também não.

Muitos problemas da CLI não são o comando não correr, mas corrê-lo no repositório ou no diretório de trabalho errados.

## Ordem de pesquisa

1. Confirme se o comando existe
2. Confirme o estado de login
3. Veja o modo de permissão atual e os limites do Sandbox
4. Por fim, confirme se o diretório de trabalho atual é o projeto que pensa

Na resolução de problemas da CLI, distinguir instalação, login, permissão ou diretório costuma tornar a pesquisa mais fluida.

Documentação oficial: [OpenAI Codex](https://developers.openai.com/codex).
