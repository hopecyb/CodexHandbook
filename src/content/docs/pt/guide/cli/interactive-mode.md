---
title: Modo interativo
description: Conversar com o Codex no terminal e executar tarefas.
locale: pt
source_locale: zh-CN
source_revision: "822e8f7"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 20
legacyVerification: {"status": "verified", "products": "CLI", "basis": "A documentação de introdução à CLI no OpenAI Help Center continua a tomar como fluxo base arrancar o Codex no terminal, dialogar enquanto executa tarefas e aprovar operações conforme necessário; esta página só descreve a forma básica do modo interativo e sugestões de primeiro contacto, sem depender de uma lista concreta de atalhos.", "checkedAt": "2026-07-26"}
---

«Modo interativo» significa conversar com o Codex no terminal, num vai-e-vem: ele explica, executa e, quando preciso, espera a sua confirmação.

É também um dos usos comuns da CLI.

Depois de iniciar a sessão interativa:

1. Arranque no diretório do projeto (ou indique o diretório de trabalho conforme a documentação)
2. Introduza prompts com a mesma qualidade que na App
3. Quando pedido, aprove / rejeite chamadas a ferramentas
4. Use atalhos do tipo `/` (se existirem) para gerir a sessão — conforme a ajuda atual da CLI

Os métodos de prompt continuam a aplicar-se: [Prompts](/pt/prompts/)

## Tarefas adequadas ao modo interativo

O modo interativo combina com trabalhos em que é preciso decidir durante a execução:

| Estado da tarefa | Por que a interação ajuda |
|---|---|
| Requisitos ainda não estão totalmente claros | É possível esclarecê-los no decorrer do trabalho |
| É preciso examinar um diff antes do próximo passo | Você pode aprovar gradualmente ou reduzir o escopo |
| Um fluxo é testado pela primeira vez no projeto | Fica mais fácil observar o que o Codex lê e altera |
| Há permissões, ferramentas externas ou possível escrita | Uma pessoa pode controlar os pontos importantes |

Quando a tarefa estiver estável a ponto de dispensar idas e vindas, considere o [modo não interativo](/pt/guide/cli/non-interactive-mode/) ou a automação.

## Mal-entendidos frequentes

### 1. No terminal, o prompt pode ser mais desleixado?

Não.

A entrada mudou para o terminal, mas a qualidade da descrição da tarefa continua tão importante.
Objetivo, limites de alcance e critérios de conclusão: quanto mais claros, mais estável.

### 2. Por que insistir em «arrancar no diretório do projeto»?

Porque a CLI precisa de saber em que projeto está a trabalhar.
Com o diretório errado, é fácil:

- Não ver os arquivos que deveria
- Alterar o diretório errado
- Não ler as regras do projeto

### 3. Se no terminal me pede aprovação, está a falhar?

Muitas vezes significa que está a trabalhar dentro dos limites de permissão — não uma execução anómala.

## Cenário simples na primeira utilização

Na primeira vez, faça uma tarefa pequena assim:

- Arranque na raiz do projeto
- Altere só um arquivo
- No fim, peça-lhe para explicar o que mudou

O modo interativo da CLI é um fluxo de tarefa conversacional no terminal. O diretório tem de estar certo e o prompt também claro.
