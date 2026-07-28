---
title: Configuração da CLI
description: Modelo, Sandbox, Aprovação e MCP — unificar o comportamento do Codex no terminal.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


A configuração da CLI decide o **modelo predefinido, o diretório de trabalho, a severidade da Aprovação, os servidores MCP**, etc. Coincide conceptualmente com as [bases de configuração](/guide/customization/configuration/config-basics/); esta página centra-se no que os utilizadores de terminal mais costumam alterar.

## Conteúdo desta página

Quem vê pela primeira vez a configuração da CLI costuma imaginá-la como «um painel de definições avançadas». Isso gera dois mal-entendidos habituais:

- Achar que não configurar não importa, e acabar a repetir à mão as mesmas definições em cada arranque
- Achar que quanto mais opções, mais profissional, e meter num só sítio preferências pessoais, regras da equipa e experiências temporárias, até depois custar a depurar

Aqui trata-se sobretudo de distinguir: **que definições convém fixar a longo prazo e quais só devem mudar de forma temporária.**

## O que a configuração da CLI controla

Pode entendê-la como «os hábitos de trabalho predefinidos do Codex no terminal».

- Configuração do modelo: quem faz o trabalho por defeito
- Sandbox e Aprovação: até onde pode chegar por defeito e em que passo precisa do seu ok
- Diretório de trabalho: em que projeto trabalha por defeito
- MCP e extensões: que capacidades externas pode emprestar por defeito

Sem configurar nada, o Codex continua a funcionar; só que repetirá as mesmas escolhas com mais frequência.

## Onde vive a configuração

| Camada | Uso |
|---|---|
| Nível de utilizador | Predefinições pessoais, entre projetos |
| Nível de projeto | Estratégia partilhada da equipa (rever antes do commit) |
| Variáveis de ambiente | Injetar chaves e interruptores em CI |

**Caminhos e nomes de ficheiro** mudam com a versão da CLI; siga a [documentação oficial](https://developers.openai.com/codex). O comum é `config.toml` ou ficheiro equivalente no diretório do utilizador.

## Mal-entendidos frequentes

### Nem toda a configuração deve ir para o projeto

Muitos iniciantes misturam «o modelo predefinido de que gosto», «caminhos da minha máquina» e «a estratégia de Aprovação que toda a equipa deve seguir».

Uma divisão mais clara:

- Preferências pessoais de longo prazo → nível de utilizador
- O que deve ser igual neste repositório → nível de projeto
- O que só se injeta temporariamente em CI, scripts ou numa execução → variáveis de ambiente

### Configurar não significa abrir Permissões de imediato

Escrever uma política na configuração não implica que daí em diante todas as ações passem sem condições. O comportamento real ainda depende da entrada do produto, do ambiente de execução, da política gerida e do conteúdo da Tarefa.

Por isso a configuração é mais uma tendência predefinida do que um privilégio permanente.

## Itens habituais

### Modelo predefinido e intensidade de raciocínio

Afeta velocidade, custo e taxa de sucesso em Tarefas complexas. Em cenários com scripts, recomenda-se **fixar o modelo** para facilitar a comparação de registos.

### Sandbox e rede

| Intenção da definição | Notas |
|---|---|
| Estrito | Adequado a repositórios não confiáveis |
| Padrão | Desenvolvimento do dia a dia |
| Afrouxado | Só ambiente pessoal de confiança, e conforme a política da empresa |

Conceitos: [Sandbox e rede](/guide/foundations/sandbox-and-network/)

### Estratégia de Aprovação

A CLI pode perguntar antes de correr shell, escrever em disco ou ligar à rede. A equipa deve indicar em `AGENTS.md` que comandos podem passar automaticamente de forma previsível — só é eficaz quando coincide com o comportamento real do produto.

### Lista de servidores MCP

Partilha configuração com [Ligar um servidor MCP](/skills/mcp/connect-an-mcp-server/); depois de alterar, reinicie a sessão.

## Uma ordem de configuração suficiente

No início, não precisa de estudar todos os campos de uma vez. Esta ordem torna tudo mais leve:

1. Fixe primeiro o modelo que mais usa
2. Confirme se o diretório de trabalho predefinido é o projeto atual
3. Decida se Aprovação e Sandbox ficam conservadores ou afrouxados
4. Só depois acrescente MCP, automação ou extensões mais avançadas

Esta ordem existe porque os dois primeiros pontos são do uso quotidiano; os dois últimos, de controlo de risco.

## Alinhar projeto e CLI

Evite «na App corre, no CI falha»:

1. No README, indique a versão mínima recomendada da CLI
2. Na configuração de projeto, só o que for **consenso da equipa**
3. Chaves nunca entram no repositório

## Resolução de problemas

| Fenómeno | Verificar |
|---|---|
| Configuração sem efeito | Alterou a camada errada? Precisa de reiniciar? |
| MCP não carregou | Sintaxe JSON/TOML, caminhos |
| Aprovação demasiado frequente | Modo de Sandbox e allowlist |

Mais: [Resolução de problemas na CLI](/guide/cli/troubleshooting/)

Trate a configuração da CLI como «hábitos de trabalho predefinidos» e fixe só o que **quase sempre repetiria**. Capacidades avançadas podem ficar para depois.

## Fontes de referência

- OpenAI Codex CLI configuration
- stormzhang `18-config.md`

---

**Estado:** verified  
**Produtos aplicáveis:** CLI  
**Base de verificação:** O material de configuração atual do OpenAI Help Center continua a usar `~/.codex/config.toml` e `~/.codex/.env` como exemplos verificáveis; esta página evita amarrar nomes de campos concretos e resume intenções habituais de configuração da CLI, divisão por camadas e fronteiras de risco, pelo que pode marcar-se como `verified` ao nível conceptual.  
**Última verificação:** 2026-07-26
