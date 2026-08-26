---
title: Política de regras de equipa
description: Governar regras de comandos e caminhos em camadas entre organização, repositório e indivíduo — revisável e reversível.
locale: pt
source_locale: zh-CN
source_revision: 3843326
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Quando a equipa usa o Codex, a **política de regras** responde: que restrições são unificadas em toda a empresa, quais o repositório mantém, e se o indivíduo ainda pode relaxar. Este capítulo é a perspetiva de governação de [regras de comandos](/pt/guide/customization/rules/command-rules/) e [padrões de permitir e negar](/pt/guide/customization/rules/allow-and-deny-patterns/).

## Conteúdo

- Política gerida pela organização vs regras de projeto vs preferências pessoais
- Como as alterações de regras passam por revisão e publicação
- Coordenação com `AGENTS.md`, Hooks e CI

## Função da política de regras de equipa

A política de regras de equipa responde: que fronteiras a empresa define de forma unificada, quais o projeto define e quais são só hábitos pessoais.

Sem esta estratificação clara, aparecem facilmente dois problemas:

- Regras que deveriam ser consistentes em toda a equipa vivem só no computador de alguém
- Definições pessoais de comodidade momentânea são tomadas por engano como padrão da equipa

## Para quem

| Papel | Foco |
|---|---|
| Responsável de engenharia | Deny de linha de base, requisitos de auditoria |
| Mantenedor do repositório | Allowlist do projeto, comandos de teste |
| Programador individual | Complementos na máquina dentro do permitido pela política |

## Mal-entendidos habituais

### Regras de equipa não precisam de ser todas iguais à força

Algumas fronteiras devem ser unificadas em toda a organização — p. ex. deny de alto risco.

Mas forçar todos os repositórios a serem idênticos traz outro problema: regras demasiado amplas ou estreitas em que ninguém confia de verdade.

O ponto é clarificar as fronteiras das camadas organização, projeto e pessoal — não tornar todas as regras iguais.

### Complementos pessoais não devem enfraquecer a linha de base da equipa

Pode acrescentar definições de comodidade na sua máquina, desde que não contorne a linha de base já definida pela equipa ou organização.

Caso contrário, na superfície «a máquina fica mais eficiente»; na prática, planta minas na colaboração.

## Modelo de camadas recomendado

```text
L1 Gestão da organização (Managed)  → não sobrescrevível por projeto/indivíduo
L2 Repositório modelo da equipa     → fragmentos de rules herdados por novos repositórios
L3 Rules do projeto + AGENTS.md     → revisão por Git PR
L4 Configuração pessoal             → só nesta máquina; não pode enfraquecer L1
L5 Prompt da Tarefa única           → apertar temporariamente pode; relaxar temporariamente limitado por L1
```

Compare com [Âmbito de AGENTS.md](/pt/guide/customization/agents-md/scope-and-precedence/): **as regras inclinaram-se para enforcement de execução; AGENTS.md para descrição de comportamento**; devem ser consistentes — não escreva dois conjuntos contraditórios.

## Prática básica

1. **Escreva primeiro a lista «nunca permitido»** (deny): `git push --force`, ler `~/.ssh`, POST de conteúdo do repositório para a internet pública
2. **Depois a lista «permitido no dia a dia»** (allow): testes, lint, git só de leitura
3. **Emita L1 gerida** (se a organização já tiver Managed configuration)
4. **Cada serviço/subpacote monorepo** pode acrescentar L3, sem conflitar com L1
5. **Retrospectiva trimestral**: «bloqueios falsos» e «libertações falsas» nos logs de Aprovação voltam a PRs de regras

## Fluxo recomendado: alteração de regras

```text
Proposta (issue ou RFC) → review de segurança/plataforma → PR altera ficheiros de regras
    → Ensaio de Tarefas típicas em repositório staging → merge → anúncio + atualização da página do manual
```

Grandes mudanças (p. ex. abrir saída de rede) devem atualizar em sincronia [auditoria de Hooks](/pt/skills/hooks/hooks-overview/) e [acceptable use](/pt/guide/team-enterprise/governance/acceptable-use/).

## Alinhamento com Hooks e CI

| Mecanismo | Função |
|---|---|
| Regras | Permitir/negar antes da execução |
| Hooks | Validação complexa, logs, formato de conformidade |
| CI | Portão de merge, scripts da mesma origem que as regras locais |

Evite três lógicas separadas: priorize uma **única fonte de verdade** (p. ex. `tools/codex-rules.json`) referida em conjunto por CLI e CI.

## Erros habituais

- Só acordo oral «não faça push»; o ficheiro de regras não é atualizado
- Depois de relaxar o Sandbox na máquina pessoal, tratar um ecrã como «padrão da equipa»
- Subprojetos monorepo com necessidades diferentes partilham uma allowlist global demasiado ampla
- Alteração de regras sem anúncio; colegas sofrem de súbito muitas falhas de Aprovação

## Em que camada colocar a regra

Veja estas três perguntas:

1. É uma linha de base que todos os repositórios devem cumprir?
2. Só vale para o projeto atual?
3. É só um complemento pessoal por comodidade?

Normalmente corresponde a:

- Camada de organização
- Camada de projeto
- Camada pessoal

## Limites de segurança

- As regras não substituem o [modelo de ameaças](/pt/guide/team-enterprise/security/threat-model/) nem o fluxo de resposta a incidentes
- Com dados regulados, as regras devem ser revistas em conjunto com classificação de dados e políticas de retenção
- Contornos de emergência exigem **registo de auditoria** e retrospectiva posterior

## Lista de verificação

- [ ] Consegue desenhar a divisão L1–L3 da sua organização
- [ ] Os ficheiros de regras no repositório têm owner claro e requisitos de review
- [ ] Sem contradições mútuas com `AGENTS.md`, Hooks e CI
- [ ] Há canal para feedback de «bloqueios falsos» (modelo de issue ou formulário interno)

O mais importante na política de regras de equipa é clarificar primeiro «quem define a fronteira de cada camada» e só depois como escrever as regras.

---

**Estado:** verificado  
**Produtos aplicáveis:** CLI / App / Cloud (conforme funcionalidades da organização)  
**Base de verificação:** Os materiais atuais OpenAI de plugins, aplicações e Permissões a nível de organização continuam a enfatizar acesso por papel, Aprovação de ações, configuração gerida e controlo a nível de equipa; esta página abstrai a política de regras num modelo de governação organização/projeto/pessoal e exige que alterações passem por revisão e anúncio — prática de governação estável.  
**Última verificação:** 2026-07-26
