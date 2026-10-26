---
legacyVerification:
  status: "verified"
  products: "Edição organizacional / funcionalidades de equipe (conforme o plano)"
  basis: "A documentação atual do centro de ajuda e de plugins/apps da OpenAI continua a sublinhar que a adoção de equipe de Codex/ChatGPT exige acesso por papéis, ativação de plugins, aprovação de ações, limites de dados e responsabilidades de auditoria. Esta página é só navegação do capítulo, focada no modelo de governança e na ordem de leitura, sem amarrar caminhos concretos do backoffice."
  checkedAt: "2026-07-26"
title: Equipe e empresa
description: Adoção, normas, administração e governança de segurança para escalar o Codex sem perder o controle.
sidebar:
  order: 70
locale: pt
source_locale: zh-CN
source_revision: "b44c5d1"
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-10-26
---

O capítulo **Equipe e empresa** destina-se a responsáveis de engenharia, plataformas e segurança: passar o Codex de «útil para uma pessoa» a «gerenciável, auditável e passível de análise posterior pela equipe». Em leitura conjunta com [Percursos · Equipe](/pt/guide/learning-paths/team/), este capítulo inclina-se mais para governança e implementação.

Se ainda usas sozinho ou estás a aprender o básico, podes deixar este capítulo para depois. Aqui o foco é: com muita gente a usar, como clarificar limites, processos e responsabilidades.

Questões centrais:

- Quem pode usar
- Até onde pode ir
- Como rastrear quando algo corre mal
- Como aprovar extensões de alto risco

![Ilustração: uma equipe trabalha com vários agentes sob regras compartilhadas, dentro de proteções, com uma pessoa aprovando na revisão](/illustrations/team-guardrails.webp)

## Conteúdo deste capítulo

- Percurso do piloto em equipe pequena à adoção organizacional
- Segurança, conformidade e riscos de extensões (Plugin/MCP)
- Referências cruzadas a outros capítulos deste manual

## Quem deve ler o quê

| Papel | Ler primeiro |
|---|---|
| EM / responsável | [Modelo de ameaças](/pt/guide/team-enterprise/security/threat-model/) · [Uso aceitável](/pt/guide/team-enterprise/governance/acceptable-use/) |
| Engenharia de plataforma | [Regras de equipe](/pt/guide/customization/rules/team-rules/) · [Hooks](/pt/skills/hooks/hooks-overview/) |
| Segurança | [Riscos de Plugin e MCP](/pt/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injeção de Prompt](/pt/guide/team-enterprise/security/prompt-injection/) |

## Modelo de governança (conceito)

```text
Política (gestão organizacional, AUP)
    ↓
Normas (AGENTS.md, lista de extensões aprovadas)
    ↓
Execução (regras, Sandbox, Hooks, CI)
    ↓
Observação (auditoria, métricas, retrospectiva)
```

## Navegação do capítulo (início)

| Tema | Páginas |
|---|---|
| Segurança | [Modelo de ameaças](/pt/guide/team-enterprise/security/threat-model/) · [Riscos Plugin/MCP](/pt/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injeção de Prompt](/pt/guide/team-enterprise/security/prompt-injection/) |
| Governança | [Política de uso aceitável](/pt/guide/team-enterprise/governance/acceptable-use/) |

O roteiro acrescentará adoption, administration, deployment-patterns, etc. — ver [chapter-outline](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/chapter-outline.md) (documento de planejamento no repositório).

## Relação com a configuração personalizada

- Camada de gestão organizacional em [Precedência de AGENTS.md](/pt/guide/customization/agents-md/scope-and-precedence/)
- [Política de regras de equipe](/pt/guide/customization/rules/team-rules/)

## Erros frequentes

- Comprar licenças sem formação nem normas
- Aliviar o Sandbox pessoal e torná-lo o padrão da organização
- Aprovar todos os Plugins da comunidade sem lista

## Lista de aceitação

- [ ] Existe AUP escrita ou política equivalente
- [ ] Extensões de alto risco têm fluxo de aprovação
- [ ] Contatos de incidente claros (segurança / plataforma)

## Mal-entendidos frequentes

### 1. Uso sozinho — preciso de ler este capítulo?

Não necessariamente a fundo agora.
Mas convém saber: quando o Codex passa de ferramenta individual a sistema de equipe, o problema deixa de ser só «como escrever o Prompt».

### 2. Porque se fala tanto de auditoria, governança e políticas?

Em contexto de equipe, o risco maior é muita gente usar durante muito tempo e os limites ficarem cada vez mais difusos.

### 3. Para formar o conceito na primeira leitura, por onde começar?

Podes começar por:

- [Riscos de Plugin e MCP](/pt/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Política de uso aceitável](/pt/guide/team-enterprise/governance/acceptable-use/)

Se o foco atual é o arranque individual, deixa este capítulo para depois; volta quando fores fazer adoção em equipe, gestão de permissões ou controle de risco.
