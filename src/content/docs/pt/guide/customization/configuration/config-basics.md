---
title: Fundamentos de configuração
description: Localização dos arquivos de configuração do Codex, itens comuns e introdução a aprovação/Sandbox/modelo.
locale: pt
source_locale: zh-CN
source_revision: "ee00ab5"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
legacyVerification: {"status": "verified", "products": "CLI / App", "basis": "Os materiais atuais de configuração do OpenAI Help Center continuam a usar diretamente `~/.codex/config.toml` e `~/.codex/.env`, e indicam que a App de ambiente de trabalho/IDE pode precisar de reinício para ler estas definições; esta página evita ligar-se a nomes de chaves voláteis e mantém só o quadro estável de «configuração de usuário, política gerida, intenções comuns de modelo/Aprovação/Sandbox».", "checkedAt": "2026-07-26"}
---

Os arquivos de configuração permitem **unificar o comportamento do Codex** na máquina ou no projeto, sem repetir em cada sessão o modelo, o nível de aprovação ou a política de Sandbox.

## Conteúdo desta página

- Onde fica a configuração e como se sobrepõem níveis de projeto e de usuário
- O que se altera com mais frequência: modelo, aprovação, Sandbox, diretório de trabalho predefinido
- Limite com `AGENTS.md`: a configuração gere «interruptores de capacidade»; AGENTS gere «como se escreve código neste projeto»

## O que a configuração gere de fato

A configuração aproxima-se dos **hábitos de trabalho predefinidos** do Codex.

Por exemplo:

- Que modelo usar por defeito
- Quão apertada é a fronteira de segurança por defeito
- Em que diretório trabalhar por defeito

Não gere o requisito temporário de uma tarefa concreta, e sim como se começa a trabalhar na maioria das situações.

## Camadas de configuração

| Camada | Localização típica | Conteúdo |
|---|---|---|
| Usuário | Configuração sob `~/.codex/` (nome exato conforme documentação oficial) | Modelo predefinido, hábitos pessoais de aprovação |
| Projeto | Fragmentos de configuração no repositório ou arquivos de projeto relacionados com `codex` | Política de Sandbox/Ferramentas compartilhada pela equipe |
| Gerida | Emitida pela organização | Itens obrigatórios que o indivíduo não pode sobrescrever |

**Fatos voláteis** (caminhos, nomes de campos, chaves TOML) devem seguir a [documentação OpenAI Codex](https://developers.openai.com/codex); esta página descreve conceitos e formas de decidir.

## Mal-entendidos habituais

### Mais configuração não é automaticamente mais profissional

Na primeira vez com arquivos de configuração, muita gente quer configurar tudo o que for possível.

Para iniciantes, costuma bastar fixar alguns ajustes de alta frequência, por exemplo:

- Modelo predefinido
- Política predefinida de aprovação/Sandbox
- Diretório de trabalho predefinido

Estabilizar estes primeiro costuma ser melhor do que estudar todos os campos de uma vez.

### Configuração ≠ regras do projeto

Se um requisito é «todos os colaboradores devem cumprir», normalmente encaixa melhor em `AGENTS.md` ou na documentação do projeto, e não só na configuração da sua máquina.

Por exemplo:

- Que verificações correr antes do commit
- Que diretórios não se alteram
- Que tipo de tarefa não pode fazer push automático

Isto não deve depender só da configuração pessoal.

## Intenções de configuração frequentes

### Modelo e raciocínio

- Desenvolvimento quotidiano: equilibrar velocidade e qualidade
- Refactors complexos: modelo de raciocínio mais forte (se o plano permitir)
- Scripts/CI: modelo fixo para reprodutibilidade

Contexto conceptual: [Modelos e raciocínio](/pt/guide/foundations/models-and-reasoning/)

### Aprovação e Sandbox

| Intenção | Direção da configuração |
|---|---|
| Principiante / repositório não confiável | Aprovação mais estrita; limitar rede e escopo de escrita em disco |
| Projeto pessoal de confiança | Pode reduzir interrupções com segurança |
| Repositório empresarial | Seguir a política gerida; não relaxar por conta própria |

Contexto conceptual: [Permissões e aprovações](/pt/guide/foundations/permissions-and-approvals/), [Sandbox e rede](/pt/guide/foundations/sandbox-and-network/)

### Consistência CLI e App

A mesma conta em CLI e App para desktop deve visar a **mesma linha de base de segurança**, evitando o hábito de «CLI com todas as permissões, App estrita».

## Prática mínima viável

1. Leia o capítulo oficial «Configuration» e confirme o caminho do arquivo na versão atual
2. Altere só um item: p. ex. o modo de Sandbox predefinido; observe uma semana e depois ajuste
3. Escreva itens compartilhados pela equipe na documentação do repositório; preferências pessoais ficam na máquina
4. Em `AGENTS.md`, escreva «como se recomenda usar o Codex com este projeto», em vez de copiar a configuração inteira

## Como decidir onde colocar

Se não souber se algo vai para configuração, `AGENTS.md` ou o prompt da tarefa, veja:

1. É um hábito predefinido usado na maioria das tarefas?
2. É uma preferência que só eu valorizo?
3. É uma regra que todo o projeto deve cumprir em conjunto?

Na maioria dos casos:

- Hábito predefinido → configuração
- Preferência pessoal → camada pessoal
- Consenso de equipe → repositório

## Relação com o tema CLI

- Uso interativo: [Modo interativo CLI](/pt/guide/cli/interactive-mode/)
- Não interativo e scripts: [Modo não interativo](/pt/guide/cli/non-interactive-mode/)
- Extensão de detalhes de configuração: [Configuração CLI](/pt/guide/cli/configuration/) · [Referência de itens de configuração](/pt/guide/reference/configuration-reference/)

## Erros habituais

- Desativar toda a aprovação por comodidade e abrir o projeto num diretório de dados de produção
- Escrever chaves de API no arquivo de configuração e fazer commit no Git
- Chaves de configuração na documentação não coincidem com a versão instalada (CLI atualizado sem rever)

## Limites de segurança

Os arquivos de configuração podem incluir **listas brancas de caminhos, políticas de rede, listas de servidores MCP** — antes de alterar, imagine «um prompt malicioso poderia explorar esta configuração?». Em ambientes empresariais, a administração deve emitir; o indivíduo não deve contornar a política gerida.

A configuração serve melhor para defaults que quase sempre escolhe de novo; não precisa de meter todas as regras no arquivo de configuração.

## Referências
- Documentação de configuração OpenAI Codex
