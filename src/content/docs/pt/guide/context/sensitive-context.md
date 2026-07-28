---
title: Contexto sensível
description: Chaves, privacidade e material que não se partilha.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Tudo o que não quer que seja visto, copiado, enviado para fora ou deixado a longo prazo no registo da Tarefa deve tratar-se primeiro como informação sensível.

## Por que julgar primeiro

Muitos problemas de segurança não vêm de violação deliberada, mas de «resolver o problema primeiro» naquele momento.

Por exemplo:

- Para depurar, colar o `.env` inteiro
- Para ele perceber, colar dados brutos de clientes
- Por comodidade, colar o erro original com tokens reais

Isto parece conveniente no momento; depois costuma ser o mais difícil de remediar.

Não forneça ao Codex (em prática ou produção):

- Chaves de API, palavras-passe, cookies de sessão
- Dados de clientes sem desensibilizar, números de identificação, etc.
- Material interno não público cuja partilha o contrato proíbe

Use placeholders: `YOUR_API_KEY`. Se já vazou, rode as chaves conforme o processo da organização.

## Como julgar na dúvida

Se não tiver a certeza se um trecho é sensível, pergunte-se primeiro:

1. Se alguém irrelevante vir isto, há risco?
2. Se isto ficar a longo prazo no registo da Tarefa, fico inquieto?

Se a resposta a qualquer uma for «sim», trate primeiro como informação sensível.

## Não confie em «deve estar tudo bem»

Na primeira vez com IA de ferramentas, muita gente pensa:

- «É só colar um momento»
- «É só para ele olhar»
- «Este ficheiro não vai mesmo sair»

Mas assim que a informação entra no fluxo da Tarefa, deve tratá-la como sensível. O controlo de segurança fica melhor a priori.

## Conteúdo mais fácil de ignorar

Além de palavras-passe e chaves, isto também costuma ser sensível:

- Listas de clientes
- Telemóveis, e-mails, números de identificação
- Capturas internas, planos ainda não publicados
- Ficheiros de configuração com endereços reais de produção ou tokens de acesso

Ou seja: informação sensível não é só uma chave `sk-...`.

## Até que ponto desensibilizar basta

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
- Telemóveis reais
- Nomes reais de clientes

## Quando tem de fornecer — como fazer com mais estabilidade

Práticas mais seguras:

- Substituir chaves por valores falsos ou placeholders
- Desensibilizar dados reais de utilizadores
- Manter só os campos realmente necessários para investigar
- Se puder descrever o fenómeno, evite colar blocos brutos sensíveis

Por exemplo:

```text
Substitua a API Key real por YOUR_API_KEY e o e-mail real por user@example.com.
```

## Se já deu por acidente

Trate por nível de risco:

1. Pare primeiro de continuar a espalhar
2. Rode de imediato chaves, palavras-passe ou tokens
3. Reporte e remedie conforme o processo da organização

Ao resolver problemas, por defeito dê só a **informação mínima necessária para investigar**; se puder desensibilizar, desensibilize; se puder usar placeholder, use.


---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica princípios de minimização e desensibilização de informação sensível; conceitos, exemplos de risco e sugestões de tratamento foram revistos, e o corpo não depende de factos voláteis do produto.  
**Última verificação:** 2026-07-26
