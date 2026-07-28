---
title: Modo interativo
description: Conversar com o Codex no terminal e executar Tarefas.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


«Modo interativo» significa conversar com o Codex no terminal, num vai-e-vem: ele explica, executa e, quando preciso, espera a sua confirmação.

É também um dos usos comuns da CLI.

Depois de iniciar a sessão interativa:

1. Arranque no diretório do projeto (ou indique o diretório de trabalho conforme a documentação)
2. Introduza Prompts com a mesma qualidade que na App
3. Quando pedido, aprove / rejeite chamadas a Ferramentas
4. Use atalhos do tipo `/` (se existirem) para gerir a sessão — conforme a ajuda atual da CLI

Os métodos de Prompt continuam a aplicar-se: [Prompts](/prompts/)

## Mal-entendidos frequentes

### 1. No terminal, o Prompt pode ser mais desleixado?

Não.

A entrada mudou para o terminal, mas a qualidade da descrição da Tarefa continua tão importante.  
Objetivo, limites de alcance e critérios de conclusão: quanto mais claros, mais estável.

### 2. Por que insistir em «arrancar no diretório do projeto»?

Porque a CLI precisa de saber em que projeto está a trabalhar.  
Com o diretório errado, é fácil:

- Não ver os ficheiros que deveria
- Alterar o diretório errado
- Não ler as regras do projeto

### 3. Se no terminal me pede Aprovação, está a falhar?

Muitas vezes significa que está a trabalhar dentro dos limites de Permissão — não uma execução anómala.

## Cenário simples na primeira utilização

Na primeira vez, faça uma Tarefa pequena assim:

- Arranque na raiz do projeto
- Altere só um ficheiro
- No fim, peça-lhe para explicar o que mudou

O modo interativo da CLI é um fluxo de Tarefa conversacional no terminal. O diretório tem de estar certo e o Prompt também claro.


---

**Estado:** verified  
**Produtos aplicáveis:** CLI  
**Base de verificação:** A documentação de introdução à CLI no OpenAI Help Center continua a tomar como fluxo base arrancar o Codex no terminal, dialogar enquanto executa Tarefas e aprovar operações conforme necessário; esta página só descreve a forma básica do modo interativo e sugestões de primeiro contacto, sem depender de uma lista concreta de atalhos.  
**Última verificação:** 2026-07-26
