---
title: Como escolher o método de extensão
description: Árvore de decisão do Prompt às Automations — evite estender «por estender».
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Com tantas extensões, o custo de escolher o método errado sobe. Esta página ajuda a decidir se você precisa de Plugin ou MCP antes de instalar.

Os nomes que mais se misturam:

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Automation

Tudo é «estender o Codex», mas às vezes um Prompt basta; às vezes só um mecanismo mais pesado resolve.

## Árvore de decisão

```text
A Tarefa se repete ≥3 vezes?
├─ Não → Use bem Prompt + referências @
└─ Sim → Precisa de regras persistentes?
    ├─ Sim → Escreva em AGENTS.md
    └─ Não → O fluxo é fixo e descrevível?
        ├─ Sim → Faça um Skill
        └─ Não → Precisa ler sistemas externos?
            ├─ Sim → Avalie MCP (só leitura primeiro)
            └─ Não → Precisa de operação sem supervisão?
                ├─ Sim → Automations + portão humano
                └─ Não → Mantenha Skill + disparo manual
```

A equipe precisa distribuir vários Skills + MCP de forma unificada? No fim desses caminhos, considere **Plugin**.

## Correspondência por cenário

| Cenário | Combinação recomendada |
|---|---|
| Unificar normas de teste e commit | AGENTS.md |
| Checklist de revisão antes de cada merge | Skill `pr-review` |
| Trazer Contexto de ticket do Linear | MCP + Prompt da Tarefa |
| Relatório semanal de dependências | Automation → abrir issue |
| Scan de segredos antes do commit | Hooks (empresa) ou CI |
| Novatos instalam o kit completo com um clique | Plugin (após revisão de segurança) |

## Dimensões de custo

| Mecanismo | Custo de escrita | Custo de manutenção | Risco de segurança |
|---|---|---|---|
| Prompt | Baixo | Baixo | Baixo |
| AGENTS.md | Médio | Médio | Baixo |
| Skill | Médio | Médio | Baixo–médio |
| MCP | Alto | Alto | Médio–alto |
| Plugin | Baixo (pronto) / alto (próprio) | Médio | Médio–alto |
| Automations | Alto | Alto | Alto |

## Anti-padrões

- **Inflação de Skills**: dezenas de Skills instalados, descriptions competindo no matching
- **MCP como martelo**: forçar API onde `git` bastaria
- **Automação sem aceite**: altera código no horário e ninguém olha o diff
- **Reinvenção da roda**: Connector oficial já existe e ainda assim se cria MCP próprio

## Perguntas frequentes

### 1. Devo instalar Plugin e conectar MCP desde o início?

Muitos problemas se resolvem bem com Prompt, controle de escopo e `AGENTS.md`.

### 2. Como ler esta árvore?

Um princípio basta: comece pelo leve; se não der, aumente o peso.

### 3. Na primeira vez, por onde costuma começar?

Na maioria dos casos, nestes três:

- Prompt
- `AGENTS.md`
- Skill

Em geral ainda não precisa de MCP ou automação sem supervisão logo de cara.

O ponto não é o quão avançado é o mecanismo, e sim se combina com o problema atual.

## Leitura adicional

- [Mapa de capacidades de extensão](/skills/capability-map/)
- [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/)
- [Consolidar um fluxo como Skill](/cases/workflows/turn-a-workflow-into-a-skill/) (página de roadmap)

---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Nota de revisão:** A árvore envolve os limites atuais de Automations, Plugins, MCP e Connectors oficiais; essas formas de produto ainda mudam rápido, e o material público não sustenta julgamentos estáveis em toda a página.  
**Última Verificação:** 2026-07-26
