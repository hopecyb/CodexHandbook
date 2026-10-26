---
title: contexto sensível
description: Chaves, privacidade e material que não se partilha.
locale: pt
source_locale: zh-CN
source_revision: "a83db07"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 70
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Esta página só explica princípios de minimização e anonimização e ocultação de informações sensíveis de informação sensível; conceitos, exemplos de risco e sugestões de tratamento foram revistos, e o corpo não depende de fatos voláteis do produto.", "checkedAt": "2026-07-26"}
---

Tudo o que não quer que seja visto, copiado, enviado para fora ou deixado a longo prazo no registro da tarefa deve tratar-se primeiro como informação sensível.

## Por que julgar primeiro

Muitos problemas de segurança não vêm de violação deliberada, mas de «resolver o problema primeiro» naquele momento.

Por exemplo:

- Para depurar, colar o `.env` inteiro
- Para ele perceber, colar dados brutos de clientes
- Por comodidade, colar o erro original com tokens reais

Isto parece conveniente no momento; depois costuma ser o mais difícil de remediar.

Não forneça ao Codex (em prática ou produção):

- Chaves de API, senhas, cookies de sessão
- Dados de clientes sem anonimização ou ocultação de informações sensíveis, números de identificação, etc.
- Material interno não público cuja partilha o contrato proíbe

Use placeholders: `YOUR_API_KEY`. Se já vazou, faça a rotação das chaves conforme o processo da organização.

## Como julgar na dúvida

Se não tiver a certeza se um trecho é sensível, pergunte-se primeiro:

1. Se uma pessoa sem relação com a tarefa vir isto, há risco?
2. Se isto ficar a longo prazo no registro da tarefa, fico inquieto?

Se a resposta a qualquer uma for «sim», trate primeiro como informação sensível.

## Não confie em «deve estar tudo bem»

Na primeira vez com IA de ferramentas, muita gente pensa:

- «É só colar um momento»
- «É só para ele olhar»
- «Este arquivo não vai mesmo sair»

Mas assim que a informação entra no fluxo da tarefa, deve tratá-la como sensível. O controle de segurança fica melhor a priori.

## Conteúdo mais fácil de ignorar

Além de senhas e chaves, isto também costuma ser sensível:

- Listas de clientes
- Números de celular, e-mails, números de identificação
- Capturas internas, planos ainda não publicados
- Arquivos de configuração com endereços reais de produção ou tokens de acesso

Ou seja: informação sensível não é só uma chave `sk-...`.

## Até que ponto anonimizar basta

Não é apagar tudo: é manter a **informação mínima necessária para resolver o problema**.

Pode seguir esta lógica:

- Manter a estrutura
- Substituir valores reais
- Remover identificadores
- Apagar campos irrelevantes para o problema atual

Por exemplo, pode manter:

- Nomes de campos
- Tipo de erro
- Ordem das chamadas

Mas substituir:

- Chaves reais
- E-mails reais
- Números de celular reais
- Nomes reais de clientes

## Quando tem de fornecer — como fazer com mais estabilidade

Práticas mais seguras:

- Substituir chaves por valores falsos ou placeholders
- Anonimizar ou ocultar informações sensíveis em dados reais de usuários
- Manter só os campos realmente necessários para investigar
- Se puder descrever o fenómeno, evite colar blocos brutos sensíveis

Por exemplo:

```text
Substitua a API Key real por YOUR_API_KEY e o e-mail real por user@example.com.
```

## Se já deu por acidente

Trate por nível de risco:

1. Pare primeiro de continuar a espalhar
2. Faça imediatamente a rotação de chaves, senhas ou tokens
3. Reporte e remedie conforme o processo da organização

Ao resolver problemas, por defeito dê só a **informação mínima necessária para investigar**; se puder anonimizar, anonimize; se puder usar placeholder, use.
