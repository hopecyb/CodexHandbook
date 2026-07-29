---
title: Slash commands e entradas rápidas
description: Chamadas a comandos / e Skills $ — consulta de aprendizagem, não um manual completo de parâmetros.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

Na primeira vez que se veem os slash commands, muita gente pensa que são jargão a memorizar. Pensa neles como um conjunto de entradas rápidas que podes apontar de propósito: compreende-se melhor.

Costumam servir para entrar depressa num modo fixo ou num fluxo integrado. Os slash commands (`/command`) relacionam-se com as chamadas `$name` de [Skill](/skills/overview/), mas não são o mesmo. A lista concreta **muda com produto e versão**; antes de usar, olha o autocompletar `/` do cliente e a documentação oficial.

## Distinção conceptual

| Entrada | Quem a inicia | Uso típico |
|---|---|---|
| Slash commands como `/review` | Tu escreves `/` | Fluxo fixo integrado ou configurado |
| `$skill-name` | Tu ou o modelo | Skill de projeto ou de utilizador |
| Linguagem natural | Tu | Tarefa geral |

## Distinguir os três diretamente

- `/comando`: no chat, apontas tu a uma entrada rápida
- `$skill`: tu ou o modelo nomeais um Skill
- Linguagem natural: dizes a procura e deixas que o modelo decida como agir

Se só queres entrar mais depressa num fluxo conhecido, experimentar `/comando` é mais direto.

## O que é

- Não é um comando de terminal
- Não é jargão misterioso
- Podes vê-lo como «entrada de botão rápido» na interface de chat

Encaixa em cenários como:

- Já sabes em que fluxo queres entrar
- Não queres voltar a formular a mesma intenção cada vez

## Mal-entendidos frequentes

### 1. Um slash command é um comando de terminal

É uma entrada rápida no chat, não o `codex ...` que executas no shell.

### 2. A lista de slash commands é fixa

Em distintos produtos, versões e ambientes a lista disponível pode mudar; olhar a **lista de autocompletar** do ambiente atual é mais fiável.

### 3. Usar um slash command liberta-te de Aprovação e Sandbox

Se por detrás disparar escrita de ficheiros, comandos ou rede, continua sujeito à política atual.

### 4. Se não sei slash commands, não sei usar bem o Codex?

A linguagem natural basta para a maioria das Tarefas. Os slash commands aceleram e fixam entradas quando já estás um pouco mais familiarizado.

## Categorias habituais (esquema)

Os nomes seguintes podem aparecer ou desaparecer conforme a versão; **só classificação de aprendizagem**:

### Sessão e modo

- Mudar para modo plano, Compactação de Contexto, ver ajuda
- Combinar com [Planeamento](/guide/agent-work/planning/)

### Revisão e qualidade

- Rever o Diff ou PR atual
- Combinar com [Rever Diffs](/guide/quality/review-diffs/)

### Espaço de trabalho e Git

- Ver estado, gerar mensagem de commit (continues a confirmar se fazer commit)
- Cumprir [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/)

### Extensão

- Instalar ou listar Skills (se o ambiente oferecer `skill-installer`, etc.)

## Ao usar, tem em conta

1. **Primeiro `/` e olha** o que o ambiente atual suporta; não memorizes listas caducadas
2. Os fluxos fixos da equipa, prioriza-os como **Skill + documentação**, para reduzir «só os veteranos sabem o nome do comando»
3. As escritas que um slash command dispare continuam sujeitas a Sandbox e Aprovação

## Como experimentá-lo diretamente

Podes experimentar assim:

1. Escreve `/`
2. Olha o que há no ambiente atual
3. Escolhe um cujo nome e uso percebas e experimenta

## Na primeira vez podes experimentar assim

Na primeira tentativa:

1. Escreve `/` e olha o que o ambiente atual oferece
2. Escolhe um comando cujo uso percebas e experimenta uma vez
3. Observa se parece mais «mudar de modo» ou «correr um fluxo»
4. Se for um fluxo que a equipa reutilizará a longo prazo, considera sedimentá-lo como Skill

Assim vê-se melhor a divisão: o slash command é entrada rápida; o Skill, fluxo reutilizável a longo prazo.

## Diferença com os comandos CLI

| | `/` no chat | Terminal `codex …` |
|---|---|---|
| Contexto | Sessão atual e ficheiros @ | Diretório com `--cwd` |
| Adequado | Exploração interativa | Scripts, CI |

Os slash commands são entradas rápidas no chat; olhar o que o ambiente atual oferece de verdade serve mais do que memorizar nomes.

Subcomandos CLI: [Modo interativo do CLI](/guide/cli/interactive-mode/) e [modo não interativo](/guide/cli/non-interactive-mode/). Tabela completa de parâmetros: [Referência de comandos CLI](/guide/reference/commands/).

---

**Estado:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Esta página gira em torno de `/review`, categorias de slash commands e a relação com chamadas `$skill`, mas o conjunto disponível, os nomes e o comportamento mudam depressa com produto e versão; sem uma lista oficial completa atual e uma descrição de comportamento, convém `outdated`.  
**Última verificação:** 2026-07-26
