---
title: Segurança e versões de Skills
description: Origem da instalação, limites de Permissão, upgrade e rollback — Skills de equipe governáveis.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Skill não é só mais um template de Prompt.

Ele influencia como o Codex trabalha e, às vezes, traz scripts ou recursos extras.

Por isso, com origem duvidosa, conteúdo sem revisão ou drift de versão, o risco não fica muito atrás do MCP. Esta página mostra como a equipe **escolhe, instala, atualiza e audita** Skills.

## Conteúdo

- Quais Skills não devem ser instalados
- Fixação de versão e revisão de mudanças
- Relação com a distribuição via Plugin

## Por que usuários comuns também precisam saber

Se você faz estas coisas:

- Instala Skills compartilhados por outros
- Referencia Skills da equipe no projeto
- Atualiza Skills existentes
- Recomenda Skills a colegas

Já participa da cadeia de propagação de risco.

Segurança de Skill não depende só de «alguém que cuida de tudo» — cada usuário precisa de julgamento básico.

Base: [Visão geral de Skills](/skills/overview/) · [Criar seu primeiro Skill](/skills/create-your-first-skill/)

## Modelo de ameaça (simplificado)

| Risco | Manifestação |
|---|---|
| Skill malicioso | Induz vazamento de segredos, shell destrutivo |
| Permissão excessiva | Lê/escreve caminhos que não deveria |
| Cadeia de suprimentos | Dependência de repositório de Skills de terceiros adulterado |
| Skill obsoleto | Incompatível com CLI novo, comportamento estranho |

## O que checar antes de instalar

Diante de um Skill, pergunte três coisas:

1. De onde veio?
2. O que a mais o Codex vai fazer por causa dele?
3. Consigo entender o `SKILL.md` e os scripts anexos?

Se duas das três ficarem sem resposta, não entre direto em projeto de produção.

## Princípios de instalação

1. **Origem**: priorize marketplace oficial e Git interno da empresa; cuidado com gists anônimos
2. **Leitura**: antes de instalar, abra `SKILL.md` e scripts anexos; veja se pedem Permissão estranha
3. **Isolamento**: Skills de projeto de cliente e de experimento pessoal em diretórios separados
4. **Uso mínimo**: se um Skill resolve, não empilhe dez

## Equívocos comuns

### 1. Skill é só texto — não tem risco real

Como influencia workflow, escolha de ferramentas e execução de scripts, o risco não é só «mudou o tom».

### 2. Se muita gente usa, pode ir direto para produção

Usar em outro lugar não significa caber no seu repositório, nos seus limites de Permissão e nas regras da equipe.

### 3. Atualizar Skill é como atualizar um documento

Para a equipe, atualizar Skill é atualizar um comportamento automatizado — trate com a mesma seriedade de atualizar dependências.

## Versão e upgrade

| Prática | Descrição |
|---|---|
| Pin de versão | Documente nome do Skill + commit/tag |
| Revisão de mudança | Atualizações de Skill via PR, como upgrade de dependência |
| changelog | Mantenha release notes do conjunto de Skills da equipe |
| Rollback | Guarde cópia da versão anterior; troque rápido se der problema |

Plugin pode empacotar Skills para distribuição unificada: [Visão geral de Plugins](/skills/plugins/plugins-overview/)

## Hábitos de equipe

Se um Skill for reutilizado por muita gente por muito tempo, não deixe em «alguém mandou um caminho no chat».  
Melhor:

- Origem fixa
- Registro de versão
- Notas de upgrade
- Caminho de rollback

## Em relação a chamadas `$skill`

Quando o usuário chama `$name` de forma explícita, a intenção é clara; quando o **modelo escolhe Skill automaticamente**, restrinja a lista disponível e os cenários em `AGENTS.md`.

## Checklist de governança da equipe

- [ ] Whitelist de fontes de Skill permitidas
- [ ] Onboarding de novos só instala o «pacote básico»
- [ ] Revisão trimestral dos Skills ainda necessários
- [ ] Alinhado a [padrões allow e deny](/guide/customization/rules/allow-and-deny-patterns/)

## Erros comuns

- Instalar «Skill universal com um clique» por link de chat
- `AGENTS.md` de produção apontando para Skill em caminho pessoal
- Atualizar e não rodar Tarefa de smoke
- Confiar no comportamento sem ler `SKILL.md`

## Fontes
- Orientações de segurança OpenAI Codex Skills
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base da Verificação:** O OpenAI Help *Skills in ChatGPT* confirma que Skills podem incluir instructions, supporting files e code, e que o usuário ainda precisa revisar origem e risco antes/depois do upload; as recomendações de governança desta página alinham-se a esse princípio.  
**Última Verificação:** 2026-07-26
