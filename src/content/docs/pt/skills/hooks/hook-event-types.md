---
legacyVerification:
  status: "verified"
  products: "Ambientes que usam um host Codex local"
  checkedAt: "2026-08-25"
title: Tipos de eventos Hook
description: Escolher eventos ao longo do ciclo de vida da sessão, do turno, das chamadas de ferramentas, da compactação e dos subagentes.
locale: pt
source_locale: zh-CN
source_revision: 07f4965
translation_status: draft
translated_at: "2026-09-20"
---

Ao escolher um Hook, a primeira pergunta não é «como escrever o script?», mas sim «deve atuar antes ou depois do efeito secundário?». Um script ligado ao evento errado pode limitar-se a comunicar o problema depois de ele acontecer.

![Ciclo de vida dos Hooks Codex e eventos principais](/diagrams/hook-lifecycle-events-pt.svg)

## Lista atual de eventos

| Evento | Quando ocorre | O que o matcher filtra | Utilização habitual |
|---|---|---|---|
| `SessionStart` | Início ou retoma de uma sessão | `startup`, `resume`, `clear`, `compact` | Notas do ambiente, recuperação de contexto |
| `SubagentStart` | Arranque de um subagente | Tipo de subagente | Acrescentar restrições ao subagente |
| `UserPromptSubmit` | Envio de um prompt pelo utilizador | Não suportado; a configuração é ignorada | Pesquisa de segredos, contexto de desenvolvimento |
| `PreToolUse` | Antes da execução de uma ferramenta local suportada | Nome da ferramenta | Recusar ou alterar a chamada |
| `PermissionRequest` | Codex está prestes a pedir aprovação | Nome da ferramenta | Permitir, recusar ou deixar seguir a aprovação normal |
| `PostToolUse` | Depois de uma ferramenta local suportada devolver o resultado | Nome da ferramenta | Registar resultados, dar feedback para o raciocínio seguinte |
| `PreCompact` | Antes da compactação do contexto | `manual` / `auto` | Guardar o estado antes da compactação |
| `PostCompact` | Depois da compactação do contexto | `manual` / `auto` | Restaurar o contexto necessário |
| `SubagentStop` | Um subagente está prestes a terminar | Tipo de subagente | Exigir mais uma verificação |
| `Stop` | O turno principal está prestes a terminar | Não suportado; a configuração é ignorada | Pedir ao processo principal que continue a verificar |
| `SessionEnd` | Fim do processo principal | Atualmente `other` | Log rápido de encerramento; não corre para subagentes |

## Matchers de ferramentas

Valores frequentes:

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

A shell e a execução unificada de comandos correspondem a `Bash`. `apply_patch` também pode corresponder aos nomes alternativos `Edit` ou `Write`. Ferramentas MCP e outras funções locais correspondem ao respetivo nome real.

## Três eventos fáceis de confundir

### PreToolUse

A entrada contém `tool_name`, `tool_use_id` e o `tool_input` específico da ferramenta. Pode devolver:

- `permissionDecision: "deny"`: impedir uma chamada de ferramenta suportada;
- `permissionDecision: "allow"` com `updatedInput`: alterar a entrada de uma ferramenta suportada;
- `additionalContext`: acrescentar contexto ao modelo sem bloquear.

Texto simples em stdout é ignorado; deve ser produzido o JSON definido na documentação oficial. O código de saída `2` com uma mensagem em stderr também pode bloquear e explicar o motivo.

### PermissionRequest

Só ocorre quando o Codex já estava prestes a pedir aprovação, por exemplo para elevar uma operação shell ou aceder à rede administrada. Pode permitir, recusar ou não decidir, deixando prosseguir a interface de aprovação normal. Não substitui `PreToolUse` para uma política geral de ferramentas.

### PostToolUse

A ferramenta já foi executada; o evento ocorre mesmo que Bash termine com um código diferente de zero. Devolver `block` ou sair com código `2` apenas substitui o feedback para o modelo processar. Não desfaz comandos, escritas em ficheiros nem ações externas.

## Stop não é um botão para «recusar terminar»

Em `Stop`, `decision: "block"` cria automaticamente, a partir de `reason`, um prompt de continuação para que o Codex faça mais um turno. Não reverte efeitos já produzidos pelas ferramentas. O script deve verificar `stop_hook_active` para evitar um ciclo infinito de continuações.

## Exercício de escolha de evento

| Necessidade | Escolha | Motivo |
|---|---|---|
| Impedir a escrita de um token suspeito num ficheiro | `PreToolUse` com `apply_patch|Edit|Write` | É preciso atuar antes da escrita |
| Medir a taxa de falhas da shell | `PostToolUse` com `Bash` | É preciso conhecer o resultado |
| Guardar decisões importantes antes de uma compactação automática | `PreCompact` | Ocorre antes da compactação |
| Impedir que a tarefa termine sem executar os testes | `Stop` | Continuar o turno atual |
| Enviar um pedido de rede de 30 segundos no encerramento | Não usar `SessionEnd` | O máximo é 3 segundos; o evento de fecho não deve alojar tarefas longas |

## Fonte oficial

- [OpenAI: eventos Hook e matchers](https://learn.chatgpt.com/docs/hooks)
