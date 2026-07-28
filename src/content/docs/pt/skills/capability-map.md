---
title: Mapa de capacidades de extensão
description: Como Skill, MCP, Plugin, Hooks, comandos de barra e AGENTS.md se relacionam.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Há muitos mecanismos de extensão, e é fácil confundir. Esta página explica as relações — não os passos de instalação.

## Diagrama de relação

```text
                    ┌─────────────────┐
                    │  Seu objetivo    │
                    │  da Tarefa       │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌───────────┐      ┌─────────────┐     ┌──────────────┐
   │ AGENTS.md │      │ Prompt/      │     │ Comando de   │
   │ Regras    │      │ template     │     │ barra        │
   │ persistentes│    │ Desta Tarefa │     │ Você dispara │
   └───────────┘      └─────────────┘     └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                    ┌─────────────────┐
                    │      Skill       │
                    │ Pacote de        │
                    │ workflow         │
                    │ reutilizável     │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌─────────────┐
        │   MCP    │  │  Hooks   │  │  Scripts    │
        │ Ferramentas│ │ Auditoria│  │ Scripts no  │
        │ externas │  │ /checagem│  │ Skill       │
        └──────────┘  └──────────┘  └─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Plugin       │
                    │ Distribuição e   │
                    │ empacotamento    │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Automations     │
                    │ Sem supervisão / │
                    │ agendado         │
                    └─────────────────┘
```

## Tabela comparativa

| | Quem dispara | Persistência | Liga sistemas externos | Distribuição em equipe |
|---|---|---|---|---|
| AGENTS.md | Carrega automaticamente | Alta (Git) | Fácil |
| Prompt | Você | Baixa | Difícil |
| Comando de barra | Você | Média | Depende do produto |
| Skill | Você ou matching do modelo | Alta | Fácil (diretório/Git) |
| MCP | Modelo chama ferramenta | Nível de configuração | Precisa de governança |
| Plugin | Após instalar, efeito combinado | Alta | Canal oficial/equipe |
| Hooks | Evento do sistema | Nível de configuração | Comum em empresas |
| Automations | Tempo/evento | Nível de configuração | Precisa de fluxo de Aprovação |

## Correspondências comuns

| Necessidade | Escolha sugerida |
|---|---|
| Unificar estilo de código e comandos de teste | AGENTS.md |
| Padronizar o fluxo «revisar PR» | Skill |
| Ler tickets Jira/Linear | MCP |
| Instalar um kit de integração para toda a equipe | Plugin |
| Scan de segredos antes de cada commit | Hooks |
| Toda segunda, gerar rascunho de relatório semanal | Automations (+ publicação humana) |

Lógica detalhada de ramificação: [Como escolher o método de extensão](/skills/choosing-an-extension-method/).

## Independente da entrada do produto

Esses mecanismos **não amarram** a uma única UI: CLI, App desktop e IDE podem diferir no suporte a Skill/MCP — veja [comparação de recursos](/guide/reference/feature-comparison/) e a documentação oficial.

---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Esta página desenha Skill, MCP, Plugin, Hooks e Automations como relações fixas e implica níveis de suporte atuais; esses limites e entradas não estão cobertos de forma completa no material oficial público em 2026-07-26 — precisa reescrita conforme o produto vigente.  
**Última Verificação:** 2026-07-26
