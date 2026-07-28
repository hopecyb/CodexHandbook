---
title: Modo não interativo
description: Integrar com scripts e pipelines via codex exec — adequado a CI, tarefas agendadas e automação.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


O modo não interativo permite ao Codex concluir Tarefas **sem diálogo TTY**. É a entrada para programadores ligarem o Agent a scripts e CI.

Em termos simples: o modo não interativo não é conversa de vai-e-vem; entrega a Tarefa de uma vez para executar.

Assemelha-se mais a uma invocação por comando.

## Conteúdo desta página

- Quando usar não interativo em vez da sessão interativa `codex`
- Requisitos extra de segurança e Aprovação sem supervisão humana
- Relação com a [configuração](/guide/cli/configuration/)

## Cenários adequados

| Adequado | Não adequado |
|---|---|
| Correr Prompts de revisão fixos em CI | Precisa de várias rondas para clarificar requisitos |
| Verificação noturna de ligações em documentação | Refatoração exploratória |
| Geração de código a partir de templates predefinidos | Decisões de produto com alta ambiguidade |

## Conceitos centrais

A execução não interativa costuma:

1. Receber a **descrição completa da Tarefa** por parâmetro ou stdin
2. Correr no diretório de trabalho indicado
3. Indicar sucesso/falha com código de saída
4. Emitir registos ou resultados estruturados para consumo a jusante

**Nomes de comando e parâmetros seguem a documentação oficial da CLI** (comummente `codex exec` ou subcomando equivalente); depois de atualizar a CLI, volte a verificar `--help`.

## Exemplo mínimo útil (ilustrativo)

```bash
# Na raiz do repositório, revisão só de leitura (ilustrativo; parâmetros conforme a documentação oficial)
codex exec --cwd . "Liste riscos de segurança no Diff relativamente a main; não altere ficheiros"
```

Sugestões práticas:

- No script shell, faça `cd` primeiro para uma cópia de trabalho limpa
- Coloque a string da Tarefa num heredoc ou num ficheiro versionado em `prompts/`
- Capture o código de saída; em falha, marque o CI a vermelho

## Desenho de segurança

Sem supervisão = **não há ninguém a clicar em rejeitar**:

| Princípio | Prática |
|---|---|
| Permissão mínima | Token só de leitura, Sandbox restrito |
| Sem push | O CI só abre PR ou carrega artifact |
| Prompt fixo | Proibir concatenar texto não sanitizado da descrição do PR (risco de injeção) |
| Auditoria | Manter registos e artifacts de Diff |

Ver [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/) e o roadmap `08-developer-platform/non-interactive/`.

## Comparação com o modo interativo

| | Modo interativo | Modo não interativo |
|---|---|---|
| Entrada | TUI `codex` | `exec` / pipeline |
| Humano no ciclo | Forte | Fraco; precisa de desenho prévio |
| Adequado a aprender | Sim | Não |
| Adequado a CI | Não | Sim |

Uso interativo: [Modo interativo da CLI](/guide/cli/interactive-mode/)

## Mal-entendidos frequentes

### 1. O modo não interativo é mais eficiente — devo aprendê-lo primeiro?

Não recomendado.

Para quem usa pela primeira vez, o modo não interativo costuma ser demasiado rápido e rígido, com pouco espaço para clarificar a meio.

### 2. Qual a maior diferença face ao modo interativo?

A diferença central pode ver-se assim:

- **Modo interativo**: a meio ainda pode perguntar, ajustar e aprovar
- **Modo não interativo**: mais uma execução de uma vez, adequada a fluxos já definidos

### 3. Quando ainda não devo mexer nisto?

Se ainda estiver nestas fases, deixe para depois:

- Ainda não domina como escrever Prompts
- Ainda não sabe como aceitar resultados
- Ainda não tem julgamento básico sobre Aprovação, Sandbox e Permissões

O modo não interativo serve para automação; não encaixa bem na primeira exploração. Domine primeiro o modo interativo e só depois o ligue a scripts.

## Erros comuns

- Enfiar a história longa de uma sessão interativa tal como está num `exec` pontual
- CI com credenciais de produção e Permissão de escrita
- Não fixar a versão da CLI e o pipeline mudar de comportamento de repente

## Fontes de referência

- Documentação da OpenAI Codex CLI
- stormzhang `28-noninteractive.md`
- KimYx0207 CX-12

---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** Esta página continua centrada em `codex exec` e nas formas de integração não interativa associadas, mas não há base oficial vigente bastante sólida para confirmar item a item a entrada de comando, parâmetros e comportamento; até completar a documentação não interativa da CLI mais recente, convém marcar como `outdated`.  
**Última verificação:** 2026-07-26
