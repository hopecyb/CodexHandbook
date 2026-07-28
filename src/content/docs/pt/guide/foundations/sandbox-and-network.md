---
title: Sandbox e rede
description: Entenda isolamento de execução, acesso à rede e limites de risco.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


«Sandbox» e «rede» são duas coisas distintas: o Sandbox limita *onde* ele pode tocar; a rede limita *aonde* ele pode se conectar.

O **Sandbox** restringe o sistema de arquivos e parte das capacidades de sistema que o Agent alcança, reduzindo a superfície de erro. O **acesso à rede** é outra camada de risco: pode vazar informação sensível no Prompt ou puxar dados não confiáveis.

## Por que estes dois limites importam

Sem essas fronteiras, se o Codex entender mal a Tarefa, os problemas podem ser maiores, por exemplo:

- Alterar diretórios que você não queria mexer
- Ler arquivos sensíveis que não deveria
- Enviar conteúdo da Tarefa a sites externos
- Trazer dados ou scripts de origem duvidosa

Por isso funcionam mais como guarda-corpos de segurança padrão — não como barreira de propósito.

## Sugestões para o início

1. Na prática, desligue rede desnecessária ou permita só o acesso claramente necessário
2. Não coloque chaves de produção no projeto de prática
3. Ao ver pedidos de «sair à rede / escrever em caminho sensível», pare, entenda e só então aprove

## Mal-entendidos comuns

### 1. Sandbox significa que a capacidade é insuficiente?

O Sandbox existe sobretudo para controlar risco — não para enfraquecer capacidade de propósito.

### 2. Quanto mais rede, melhor?

Mais rede significa:

- Fontes de informação mais complexas
- Possível contato com conteúdo não confiável
- Algum conteúdo da Tarefa pode ir a serviços externos

Por isso, na prática, se der para não usar rede, prefira não usar no início.

### 3. Como julgar um pedido de Permissão?

Olhe estas três coisas:

1. Esta Tarefa realmente precisa sair à rede?
2. O caminho ou site que ele acessa é o que eu esperava?
3. Se eu recusar este passo, ainda dá para continuar de um jeito mais seguro?

## Uma visão mais direta

Dá para ver como duas portas:

- **Porta do Sandbox**: decide a quais arquivos e áreas do sistema ele pode entrar
- **Porta da rede**: decide se ele pode olhar e se conectar para fora

As duas não são só configuração técnica — também são o seu jeito de controlar risco.

Configuração no produto: App desktop [Configurações](/guide/desktop-app/settings/); detalhes oficiais: [https://developers.openai.com/codex](https://developers.openai.com/codex).

No começo, prefira restringir um pouco mais a abrir todas as portas de uma vez sem entender o risco.


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** A documentação atual do Codex CLI no OpenAI Help Center ainda descreve Full Auto como “sandboxed, network-disabled environment scoped to the current directory”, distinto dos modos de Aprovação; esta página só explica que Sandbox e rede são duas fronteiras de risco diferentes e como iniciantes devem apertar o alcance de acesso.  
**Última verificação:** 2026-07-26
