---
title: Profiles de configuração
description: Alternar combinações de modelo, Sandbox e Aprovação com Profiles com nome — um para desenvolvimento, revisão e CI.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Um **Profile (perfil de configuração)** permite guardar um conjunto nomeado de configuração (modelo + Sandbox + Aprovação, etc.) e mudar de cenário com um clique, sem alterar as definições manualmente de cada vez.

## O que esta página cobre

- Diferença entre Profile e «alterar a configuração predefinida»
- Formas comuns de dividir Profiles
- Como a equipa partilha definições de Profile

## O que o Profile gere

Se a «configuração» é o hábito de trabalho predefinido, o **Profile** é «um conjunto de presets para cenários diferentes».

Pode vê-lo assim:

- Desenvolvimento quotidiano: um conjunto
- Repositórios não fiáveis: outro
- Revisão só de leitura: outro
- Tarefas automáticas de CI: ainda outro

Assim não precisa de alterar um monte de interruptores de cada vez.

## Exemplos típicos de Profile

| Nome do Profile | Intenção | Características (conceito) |
|---|---|---|
| `daily` | Desenvolvimento quotidiano | Modelo equilibrado, Sandbox padrão |
| `strict` | Repositório não fiável | Aprovação forte, rede limitada |
| `review-only` | Revisão só de leitura | Escrita em disco proibida ou só leitura |
| `ci` | Pipeline | Modelo fixo, não interativo, sem push |

Campos concretos: [Referência de itens de configuração](/guide/reference/configuration-reference/).

## Forma de uso (conceito)

1. Confirme a sintaxe de Profile na documentação oficial (pode relacionar-se com `[profiles.name]` em `config.toml` ou estrutura equivalente)
2. Crie e nomeie o Profile
3. Ao arrancar, especifique: `codex --profile strict` (comando conforme `--help`)
4. No README, indique «contribuidores recomendam `daily`; CI usa `ci`»

Detalhes CLI: [Configuração CLI](/guide/cli/configuration/)

## Mal-entendidos habituais

### Mais Profiles não é automaticamente mais flexível

Na primeira vez, muita gente quer um Profile para cada cenário minúsculo e acaba com uma dúzia de nomes sem lembrar as diferenças.

Costuma bastar manter 2 a 4 dos mais usados:

- Desenvolvimento quotidiano
- Modo estrito
- Revisão só de leitura
- CI

Basta distinguir claramente as fronteiras de risco.

### Profile não é um interruptor que substitui o pensamento

Mudar para um Profile não significa que todas as Tarefas futuras sejam absolutamente seguras ou adequadas.

Só o ajuda a mudar para um «estado inicial comum»; a Tarefa concreta ainda exige juízo sobre o repositório atual e o risco.

## Divisão com AGENTS.md

| | Profile | AGENTS.md |
|---|---|---|
| O que gere | Interruptores de capacidade, modelo, Sandbox | Como se escreve neste projeto |
| Commit no Git | Opcional (fragmentos de profile a nível de projeto) | Sim |
| Pessoal/equipa | Profile pessoal pode ficar na máquina; profile de equipa deve ir em PR | Equipa |

## Erros habituais

- 10 Profiles por repositório sem manutenção
- Profile `ci` ainda permite `git push`
- Nome do Profile inconsistente com a documentação; novos membros usam o errado

## Sugestão de arranque

Ao começar com Profiles:

1. Mantenha primeiro um `daily` como predefinição
2. Acrescente um `strict` para repositórios desconhecidos ou de alto risco
3. Se a equipa tiver automação, acrescente um `ci` separado

Isto já cobre a maioria dos casos comuns.

O valor do Profile é mudar depressa, em cenários de risco diferentes, para uma combinação predefinida já pensada.

## Referências
- Documentação OpenAI Codex sobre profiles
---

**Estado:** desatualizado  
**Produtos aplicáveis:** CLI / App  
**Nota de revisão:** Esta página descreve `Profile`, `codex --profile` e a estrutura de profiles partilhados de forma demasiado concreta; a documentação oficial atualmente verificável não basta para provar que estes usos são generalizados na versão atual — até complementar a base formal, não deve marcar-se como `verified`.  
**Última verificação:** 2026-07-26
