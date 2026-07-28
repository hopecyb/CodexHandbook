---
title: Permissões e Sandbox
description: Entenda Aprovação, isolamento de execução e limites de acesso à rede para usar o Codex com segurança.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 14
---

# Permissões e Sandbox

O Codex não deve executar operações de alto risco sem consentimento. A **Aprovação** é a trava crítica na colaboração humano–máquina; o **Sandbox** limita o sistema de arquivos e parte das capacidades de sistema que o Agent alcança.

## Conteúdo desta página

Na primeira vez que vê «Permissão», «Aprovação», «Sandbox», «acesso à rede», muita gente acha que são quase a mesma coisa — afinal, tudo é configuração de segurança.

O problema mais fácil de surgir é exatamente essa confusão: você acha que só está permitindo continuar, e na prática pode estar abrindo ao mesmo tempo a escrita de arquivos, a execução de comandos ou o acesso à internet.

Esta página separa os conceitos para você julgar o que cada confirmação realmente libera.

## Separe estes conceitos primeiro

Dá para separar assim:

- **Aprovação**: se precisa perguntar a você antes
- **Sandbox**: mesmo querendo, até onde no máximo pode tocar
- **Acesso à rede**: se pode levar informação para fora ou puxar coisas de fora

Juntos influenciam o resultado — mas não são a mesma coisa.

## O que você costuma precisar acompanhar

- Se permite ler/escrever caminhos fora do projeto atual
- Se permite acesso à rede
- Se permite executar certos comandos de shell
- Se a equipe aplicou políticas obrigatórias (configuração gerenciada)

## Sandbox e rede

O **Sandbox** reduz a superfície de erro. O **acesso à rede** é outra camada de risco: pode vazar informação sensível no Prompt ou puxar dados não confiáveis.

No começo, em geral trate assim:

1. Na primeira prática, desligue rede desnecessária ou permita só o acesso claramente necessário
2. Não coloque chaves de produção no projeto de prática
3. Ao ver pedidos de «sair à rede / escrever em caminho sensível», pare, entenda e só então aprove

## Mal-entendidos comuns

### Aparecer um pop-up não significa necessariamente perigo

Muitas operações normais também disparam Aprovação, por exemplo:

- Instalar dependências
- Escrever fora do diretório do projeto
- Abrir o navegador ou apps do sistema
- Acessar sites externos ou APIs

O que você realmente precisa julgar é: **este passo é necessário para a Tarefa atual?** Não olhe só se o pop-up apareceu.

### Não haver pop-up também não significa risco zero

Se o Sandbox atual já permite certo tipo de operação, ou se você já aliviou regras antes, o Codex pode não perguntar de novo.

Por isso não dá para julgar risco só por «haver ou não caixa de diálogo» — olhe também como o ambiente atual está configurado.

## Ao ver um pedido de Permissão, julgue nestes passos

Cada vez que aparecer um pedido ligado a Permissão, pergunte a si:

1. Este passo é necessário para concluir a Tarefa atual?
2. Os dados ou caminhos que ele vai tocar ultrapassam o que eu esperava?
3. Se executar errado, eu sei como desfazer ou remediar?

Se duas das três não tiverem resposta, não aprove ainda — peça ao Codex que explique por que este passo é necessário.

## Explicação por camadas

| Camada | O que cobre | Onde ler |
|---|---|---|
| Conceito (esta página) | Por que Aprovação e isolamento são necessários | — |
| Diferenças de produto | Como cada entrada mostra a confirmação | [Aprovação e Sandbox no CLI](/guide/cli/approvals-and-sandbox/) · [Configurações do App desktop](/guide/desktop-app/settings/) |
| Estratégia de Prompt | Como declarar limites de Permissão na Tarefa | [Restrições e limites](/prompts/constraints-and-boundaries/) |

Políticas oficiais e valores padrão podem mudar; confira [OpenAI Codex](https://developers.openai.com/codex).

Aprovação pergunta «continuar ou não»; Sandbox limita «mesmo continuando, até onde no máximo». Olhar as duas camadas juntas deixa a fronteira mais clara.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** A OpenAI Developers ainda fornece a entrada oficial do Codex; esta página só explica que Aprovação, Sandbox e acesso à rede são fronteiras de segurança distintas e direciona o leitor aos capítulos de cada produto para o comportamento concreto — sem declarar valores padrão atuais nem matriz exata de Permissão.  
**Última verificação:** 2026-07-26
