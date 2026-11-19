---
title: Regras de permitir e negar
description: Constranger com regras de comandos e caminhos as operações que o Agent pode executar — hábitos pessoais e linha de base da equipe.
locale: pt
source_locale: zh-CN
source_revision: "521ecc9"
translation_status: stale
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
legacyVerification: {"status": "verified", "products": "CLI / App", "basis": "A documentação atual OpenAI de permissões de Codex/plugins continua a enfatizar a estratificação de ações de leitura/escrita, aprovação, limites de origem e controle de acesso por papel; esta página não declara sintaxe concreta de arquivos de regras — interpreta allow/deny como um padrão de fronteira de execução e distingue-o de Sandbox, aprovação e fluxos de revisão de equipe.", "checkedAt": "2026-07-26"}
---

As **Rules (regras)** declaram, em configuração ou arquivos de projeto, que comandos shell, caminhos e chamadas a ferramentas são **permitidos ou proibidos**, reduzindo cliques manuais de aprovação e impedindo a automação de operações perigosas.

## Conteúdo

- Como funcionam as regras Allow / Deny
- Relação com Sandbox, diálogos de aprovação e `AGENTS.md`
- Exemplos de regras de equipe

## O que as regras fazem de fato

Se a palavra «regra» parecer abstrata, veja-a assim: acordar de antemão o que o Codex pode e não pode fazer, em vez de depender sempre de juízo no momento e de cliques de aprovação.

O valor principal é de dois tipos:

- Reduzir confirmações repetidas para operações de baixo risco que ocorrem todos os dias
- Bloquear de antemão operações de alto risco que não devem ocorrer automaticamente

## Tipos de regras (conceito)

| Tipo | Exemplos |
|---|---|
| Allowlist de comandos | Permitir `npm test`, `git status` |
| Denylist de comandos | Proibir `rm -rf`, `curl \| bash` |
| Caminhos | Proibir escrita em `../`, proibir leitura de `~/.ssh` |
| Rede | Proibir saída de rede ou permitir só domínios de registry |

Compare com a [matriz de permissões](/pt/guide/reference/permission-matrix/): as regras são enforcement **configurável**; a matriz descreve **defaults típicos**.

## Camadas recomendadas

```text
Política gerida pela organização (não sobrescrevível)
    ↓
Rules do projeto + AGENTS.md (revisão Git)
    ↓
Allowlist pessoal complementar (só nesta máquina)
    ↓
Restrições do prompt da tarefa única
```

## Mal-entendidos habituais

### As regras não servem só para menos diálogos

Na primeira vez com allowlist, muita gente pensa que o objetivo é menos diálogos e menos interrupções.

Menos diálogos é só uma parte; o mais importante é deixar passar ações de baixo risco e bloquear as de alto risco.

### Regras ≠ Sandbox

O Sandbox limita «até onde se pode chegar»; as regras acordam «que ações, em princípio, não se devem fazer».

O ideal é usá-los em conjunto, não escolher um em substituição do outro.

### A linha de base da equipe não pode viver só na máquina de alguém

Se só as regras da sua máquina sabem «proibir push» e «não tocar em `.env`», os outros ainda podem cair na armadilha.

A linha de base da equipe deve ficar, tanto quanto possível, onde se pode fazer review.

## Exemplo de equipe (ilustrativo, não copiar e usar)

**Permitir:**

- Instalação de dependências **dentro do projeto** pelo gestor de pacotes
- Execução de scripts de teste da documentação

**Negar:**

- `git push`, `git reset --hard`
- Leitura/escrita de `.env*` (salvo tarefa explícita)
- POST para a internet pública com conteúdo do repositório

As regras devem estar em arquivos que a equipe possa rever, não só em acordo oral.

## Erros habituais

- Allowlist demasiado ampla (permitir `bash` ≈ permitir tudo)
- Só deny sem allow; ainda há demasiada aprovação
- Regras em contradição com `AGENTS.md`

## Sugestão de arranque

Ao organizar regras, não precisa de uma política completa de imediato. Estes dois passos já bastam:

1. Liste 3 a 5 comandos de baixo risco que corre todos os dias
2. Liste algumas ações de alto risco que absolutamente não quer que corram automaticamente

Primeiro estabilize a fronteira mínima; depois refine.

## Limites de segurança

- As regras **não substituem** code review nem proteção de branches
- Prompts maliciosos podem induzir o Agent a tentar contornar regras — mantenha o Sandbox estrito por defeito
- Altere regras via PR, como se alterasse a CI

Boas regras allow/deny deixam claro de antemão que ações são razoáveis e quais não devem ocorrer.
