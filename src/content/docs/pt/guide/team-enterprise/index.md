---
title: Equipa e empresa
description: Adoção, normas, administração e governação de segurança para escalar o Codex sem perder o controlo.
sidebar:
  order: 70
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O capítulo **Equipa e empresa** destina-se a responsáveis de engenharia, plataformas e segurança: passar o Codex de «útil para uma pessoa» a «gerível, auditável e recuperável pela equipa». Em leitura conjunta com [Percursos · Equipa](/guide/learning-paths/team/), este capítulo inclina-se mais para governação e implementação.

Se ainda usas sozinho ou estás a aprender o básico, podes deixar este capítulo para depois. Aqui o foco é: com muita gente a usar, como clarificar limites, processos e responsabilidades.

Questões centrais:

- Quem pode usar
- Até onde pode ir
- Como rastrear quando algo corre mal
- Como aprovar extensões de alto risco

## Conteúdo deste capítulo

- Percurso do piloto em equipa pequena à adoção organizacional
- Segurança, conformidade e riscos de extensões (Plugin/MCP)
- Referências cruzadas a outros capítulos deste manual

## Quem deve ler o quê

| Papel | Ler primeiro |
|---|---|
| EM / responsável | [Modelo de ameaças](/guide/team-enterprise/security/threat-model/) · [Uso aceitável](/guide/team-enterprise/governance/acceptable-use/) |
| Engenharia de plataforma | [Regras de equipa](/guide/customization/rules/team-rules/) · [Hooks](/skills/hooks/hooks-overview/) |
| Segurança | [Riscos de Plugin e MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injeção de Prompt](/guide/team-enterprise/security/prompt-injection/) |

## Modelo de governação (conceito)

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
| Segurança | [Modelo de ameaças](/guide/team-enterprise/security/threat-model/) · [Riscos Plugin/MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/) · [Injeção de Prompt](/guide/team-enterprise/security/prompt-injection/) |
| Governação | [Política de uso aceitável](/guide/team-enterprise/governance/acceptable-use/) |

O roteiro acrescentará adoption, administration, deployment-patterns, etc. — ver [chapter-outline](/docs/planning/chapter-outline.md) (documento de planeamento no repositório).

## Relação com a configuração personalizada

- Camada de gestão organizacional em [Precedência de AGENTS.md](/guide/customization/agents-md/scope-and-precedence/)
- [Política de regras de equipa](/guide/customization/rules/team-rules/)

## Erros frequentes

- Comprar lugares sem formação nem normas
- Aliviar o Sandbox pessoal e torná-lo o padrão da organização
- Aprovar todos os Plugins da comunidade sem lista

## Lista de aceitação

- [ ] Existe AUP escrita ou política equivalente
- [ ] Extensões de alto risco têm fluxo de Aprovação
- [ ] Contactos de incidente claros (segurança / plataforma)

## Mal-entendidos frequentes

### 1. Uso sozinho — preciso de ler este capítulo?

Não necessariamente a fundo agora.  
Mas convém saber: quando o Codex passa de ferramenta individual a sistema de equipa, o problema deixa de ser só «como escrever o Prompt».

### 2. Porque se fala tanto de auditoria, governação e políticas?

Em contexto de equipa, o risco maior é muita gente usar durante muito tempo e os limites ficarem cada vez mais difusos.

### 3. Para formar o conceito na primeira leitura, por onde começar?

Podes começar por:

- [Riscos de Plugin e MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/)
- [Política de uso aceitável](/guide/team-enterprise/governance/acceptable-use/)

Se o foco atual é o arranque individual, deixa este capítulo para depois; volta quando fores fazer adoção em equipa, gestão de Permissões ou controlo de risco.

## Fontes de referência

- Capítulos de segurança e empresa de KimYx0207
- Playbook de equipa freestylefly/CodexGuide
- Tutoriais de segurança de stormzhang

---

**Estado:** verified  
**Produtos aplicáveis:** Edição organizacional / funcionalidades de equipa (conforme o plano)  
**Base de verificação:** A documentação atual do centro de ajuda e de plugins/apps da OpenAI continua a sublinhar que a adoção de equipa de Codex/ChatGPT exige acesso por papéis, ativação de plugins, Aprovação de ações, limites de dados e responsabilidades de auditoria. Esta página é só navegação do capítulo, focada no modelo de governação e na ordem de leitura, sem amarrar caminhos concretos do backoffice.  
**Última verificação:** 2026-07-26
