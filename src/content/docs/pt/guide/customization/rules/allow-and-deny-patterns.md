---
title: Regras de permitir e negar
description: Constranger com regras de comandos e caminhos as operações que o Agent pode executar — hábitos pessoais e linha de base da equipa.
locale: pt
source_locale: zh-CN
source_revision: 0ae6680
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

As **Rules (regras)** declaram, em configuração ou ficheiros de projeto, que comandos shell, caminhos e chamadas a Ferramentas são **permitidos ou proibidos**, reduzindo cliques manuais de Aprovação e impedindo a automação de operações perigosas.

## Conteúdo

- Como funcionam as regras Allow / Deny
- Relação com Sandbox, diálogos de Aprovação e `AGENTS.md`
- Exemplos de regras de equipa

## O que as regras fazem de facto

Se a palavra «regra» parecer abstrata, veja-a assim: acordar de antemão o que o Codex pode e não pode fazer, em vez de depender sempre de juízo no momento e de cliques de aprovação.

O valor principal é de dois tipos:

- Reduzir operações de baixo risco que acontecem todos os dias e exigem confirmação repetida
- Bloquear de antemão operações de alto risco que não devem ocorrer automaticamente

## Tipos de regras (conceito)

| Tipo | Exemplos |
|---|---|
| Allowlist de comandos | Permitir `npm test`, `git status` |
| Denylist de comandos | Proibir `rm -rf`, `curl \| bash` |
| Caminhos | Proibir escrita em `../`, proibir leitura de `~/.ssh` |
| Rede | Proibir saída de rede ou permitir só domínios de registry |

Compare com a [matriz de Permissões](/pt/guide/reference/permission-matrix/): as regras são enforcement **configurável**; a matriz descreve **defaults típicos**.

## Camadas recomendadas

```text
Política gerida pela organização (não sobrescrevível)
    ↓
Rules do projeto + AGENTS.md (revisão Git)
    ↓
Allowlist pessoal complementar (só nesta máquina)
    ↓
Restrições do Prompt da Tarefa única
```

## Mal-entendidos habituais

### As regras não servem só para menos diálogos

Na primeira vez com allowlist, muita gente pensa que o objetivo é menos diálogos e menos interrupções.

Menos diálogos é só uma parte; o mais importante é deixar passar ações de baixo risco e bloquear as de alto risco.

### Regras ≠ Sandbox

O Sandbox limita «até onde se pode chegar»; as regras acordam «que ações, em princípio, não se devem fazer».

O ideal é usá-los em conjunto, não escolher um em substituição do outro.

### A linha de base da equipa não pode viver só na máquina de alguém

Se só as regras da sua máquina sabem «proibir push» e «não tocar em `.env`», os outros ainda podem cair na armadilha.

A linha de base da equipa deve ficar, tanto quanto possível, onde se pode fazer review.

## Exemplo de equipa (ilustrativo, não copiar e usar)

**Permitir:**

- Instalação de dependências **dentro do projeto** pelo gestor de pacotes
- Execução de scripts de teste da documentação

**Negar:**

- `git push`, `git reset --hard`
- Leitura/escrita de `.env*` (salvo Tarefa explícita)
- POST para a internet pública com conteúdo do repositório

As regras devem estar em ficheiros que a equipa possa rever, não só em acordo oral.

## Erros habituais

- Allowlist demasiado ampla (permitir `bash` ≈ permitir tudo)
- Só deny sem allow; ainda há demasiada Aprovação
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

---

**Estado:** verificado  
**Produtos aplicáveis:** CLI / App  
**Base de verificação:** A documentação atual OpenAI de Permissões de Codex/plugins continua a enfatizar a estratificação de ações de leitura/escrita, Aprovação, limites de origem e controlo de acesso por papel; esta página não declara sintaxe concreta de ficheiros de regras — interpreta allow/deny como um padrão de fronteira de execução e distingue-o de Sandbox, Aprovação e fluxos de revisão de equipa.  
**Última verificação:** 2026-07-26
