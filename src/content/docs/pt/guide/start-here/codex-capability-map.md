---
title: Mapa de capacidades
description: Visão geral de Prompt, Ferramentas, extensões, multi-Agent, governança e outros módulos.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 7
---

Há muitos módulos neste handbook; na primeira leitura é fácil se dispersar. Esta página coloca as capacidades principais num só mapa, para alinhar a estrutura rápido.

Dois pontos de travamento comuns:

- Ler uma página aqui, outra ali, e no fim ainda não saber o que reforçar primeiro
- Ir direto a MCP, automação e extensões, e deixar a base sem organizar

Organize o quadro geral primeiro; consultar temas específicos depois exige bem menos esforço.

O Codex não é só uma caixa de chat — há várias camadas de capacidade por trás:

```text
Objetivo e Prompt
  → Contexto (projeto / arquivos / conversa)
    → Ferramentas (arquivos, terminal, busca, navegador…)
      → Trabalho do Agent (planejar, executar, orientar, Transferência)
        → Verificação de qualidade e Aprovação humana
      → Extensão e automação (Skills / MCP / Hooks…, avançado)
            → Governança de equipe (marcos posteriores)
```

## Estrutura geral

Você pode ver o Codex em três camadas:

- Primeira: como você formula o pedido para ele saber o que fazer
- Segunda: com que Contexto e Ferramentas ele realiza o trabalho
- Terceira: como você consolida esse modo de colaboração para reutilizar depois

No começo, as duas primeiras camadas importam mais. Deixe a Tarefa clara, faça o resultado fluir — e só então olhe as extensões avançadas.

## Mal-entendidos comuns

### Capacidade mais avançada não significa que deve ser aprendida primeiro

Skills, MCP, Hooks e automação são poderosos, mas resolvem sobretudo ampliação de eficiência e reuso em escala — não o que mais trava quem está começando.

Se Prompt, Contexto e escolha de Ferramentas ainda não estão sólidos, as extensões também tendem a ser mal usadas.

### Este mapa também pode servir de ordem de leitura

Não precisa ler página a página pelo sumário do site. Pode seguir esta ordem:

1. Entender como o Codex funciona
2. Aprender a dar a Tarefa, fornecer Contexto e verificar o resultado
3. Depois que o uso estiver fluido, considerar configuração, extensão e automação

## Ordem de início

1. Veja [O que é o Codex](/guide/start-here/what-is-codex/)
2. Depois [Escolha seu caminho](/guide/start-here/choose-your-path/)
3. Em seguida entre em [Começar a usar](/guide/getting-started/)
4. Se travar, volte a [Fundamentos](/guide/foundations/) e [Caminhos de aprendizagem](/guide/learning-paths/)

## Módulos e capítulos autoritativos

| Capacidade | Local autoritativo |
|---|---|
| Modelo, Agent, Permissão, Sandbox | [Fundamentos](/guide/foundations/) |
| Como clicar e rodar em cada entrada | [Guias de produto](/guide/) |
| Prompt, Contexto, Ferramentas, qualidade | [Capacidades principais](/guide/) |
| AGENTS.md e configuração | [Personalização](/guide/customization/) |
| Skills, MCP, Plugin, automação | [Extensão e automação](/skills/) |
| Métodos de colaboração repetíveis | [Métodos de fluxo de trabalho](/cases/workflows/) |
| Casos ponta a ponta | [Casos de uso](/cases/use-cases/) |
| Ordem de leitura | [Caminhos de aprendizagem](/guide/learning-paths/) |

Mapa geral de escolha de extensões: [Mapa de capacidades de extensão](/skills/capability-map/). Comparação de produtos: [Comparação de recursos](/guide/reference/feature-comparison/). Diferenças de capacidade entre entradas ficam na página de comparação.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só oferece a visão geral dos módulos de capacidade e a atribuição aos capítulos autoritativos; links internos, diagrama estrutural e mapeamento de módulos foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
