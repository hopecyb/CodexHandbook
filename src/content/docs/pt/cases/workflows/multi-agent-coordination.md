---
title: Colaboração multi-Agent
description: Exploração em paralelo, divisão de execução e fusão de resultados — quando dividir e como aceitar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Vários Agents adequam-se a subproblemas paralelizados e de baixo acoplamento — não a alterar o mesmo ficheiro em simultâneo sem coordenação humana.

## Quando dividir

| Adequado | Inadequado |
|---|---|
| Estilo frontend + contrato de API backend em pesquisa paralela | Duas pessoas a alterar a mesma função |
| Um corre testes, outro escreve documentação | Estado partilhado mutável sem lock |
| Explorar várias opções de implementação | Dependências sequenciais fortes ainda por clarificar |

Capacidades de produto em [Agents em paralelo](/guide/desktop-app/parallel-agents/) e [Subagents](/guide/agent-work/subagents/).

## Padrões de colaboração

### Padrão A: exploração em paralelo, escolha humana

```text
Agent 1: prós, contras e esforço da opção A
Agent 2: prós, contras e esforço da opção B
Você: escolhe um e abre um único Agent para executar
```

### Padrão B: pipeline

```text
Agent de exploração → produz plano → Agent de execução (nova thread, com resumo do plano)
```

Use [transferência e retoma](/guide/agent-work/handoff-and-resume/) para passar um resumo estruturado — não cole a conversa inteira.

### Padrão C: isolamento com árvores de trabalho

Agents diferentes alteram ramos diferentes em [git worktrees](/guide/desktop-app/worktrees/) distintos; a fusão final é humana.

## Regras de coordenação (sugeridas em AGENTS.md)

- Cada Agent com limites de diretório claros
- Proibir `git push` em paralelo
- Correr CI unificado antes de fundir
- Conflitos resolvidos por humanos; Agents não adivinham

## Aceitação

- [ ] Cada sub-Agent tem «definição de concluído» própria
- [ ] Após a fusão, a suíte completa passa
- [ ] Diff rastreável à descrição da subtarefa correspondente

## Erros comuns

- Três Agents em paralelo a alterar `package.json`
- Sem passo de síntese — não se sabe a quem ouvir

---

**Estado:** verified  
**Produtos aplicáveis:** App / Cloud  
**Base de verificação:** Cruzado com a documentação pública atual de OpenAI Developers sobre multi-agent / subagents e com os capítulos já verificados deste manual sobre Subagents, transferência/retoma e trabalho em paralelo; o conteúdo limita-se ao método estável «quando dividir, como isolar limites, como sintetizar e aceitar com humanos», sem transformar beta ou entradas de UI atuais em contrato fixo.  
**Última verificação:** 2026-07-26
