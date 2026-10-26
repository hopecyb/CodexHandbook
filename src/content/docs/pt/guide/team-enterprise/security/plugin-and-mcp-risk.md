---
legacyVerification:
  status: "verified"
  products: "CLI / App / Cloud"
  basis: "A documentação atual de plugins no OpenAI Help Center continua a enfatizar que a capacidade de app/plugin está limitada por acesso por papel, controle de ações, requisitos de confirmação, limites de domínio/origem e permissões do sistema de origem; esta página mapeia esses princípios a um olhar unificado de risco Plugin/MCP e defende só leitura primeiro, versão fixa, owner claro e lista de aprovação."
  checkedAt: "2026-07-26"
title: Riscos de Plugin e MCP
description: "A que podem aceder as extensões e como a equipe as aprova e monitoriza — um olhar unificado a Skills, Plugin e MCP."
locale: pt
source_locale: zh-CN
source_revision: "bf027ad"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 20
---

Os **Plugin** e os **servidores MCP** ligam o Codex a sistemas externos: tickets, bases de dados, API internas. Quanto mais capacidade, maior é a superfície de fuga e abuso de privilégios do [modelo de ameaças](/pt/guide/team-enterprise/security/threat-model/). Lê-o junto com [Visão geral de MCP](/pt/skills/mcp/mcp-overview/) e [Visão geral de Plugins](/pt/skills/plugins/plugins-overview/).

Na primeira vez que vires estes termos, não precisas de memorizar definições. Fica com uma ideia: quando o Codex se liga a sistemas externos, a capacidade cresce e o risco também.

Quer se chame Plugin ou MCP, a pergunta central é parecida:

- O que pode ler
- O que pode alterar
- Quem aprova
- Como se rastreia um incidente

## Conteúdo

- Classificação de riscos de extensões
- Lista de aprovação e fixação de versões
- Isolamento em depuração e incidentes

## Classificação de riscos

| Tipo | Exemplo | Controle |
|---|---|---|
| Leitura de dados | MCP lê a base de clientes | Conta só de leitura, permissões ao nível da linha |
| Escrita de dados | Fechar tickets ou mudar configuração automaticamente | aprovação humana, confirmação de dupla escrita |
| Rede | Ligações externas arbitrárias | Allowlist de saída |
| Credenciais | Token OAuth em disco | Custódia de secrets, tokens de curta duração |
| Cadeia de fornecimento | Atualização envenenada de um server de terceiros | Versão fixa, bloqueio por hash |

## Fluxo de aprovação da equipe (recomendado)

```text
Pedido (uso, classificação de dados, Permissões) → review de segurança/arquitetura
    → Entrada no repositório ou catálogo interno de «lista aprovada»
    → Número de versão fixo + responsável
    → Revisão trimestral ou ao subir major
```

Um MCP experimental pessoal **não deve** partilhar o mesmo token que o repositório de produção.

## Práticas mínimas

1. **Negar por padrão** a instalação de MCP remotos fora da lista
2. Um **MCP local** ainda pode ler todo o disco — usa um usuário de SO dedicado ou um contêiner
3. **Registros**: nome da ferramenta e resumo de parâmetros (sem dados sensíveis); ver [auditoria com Hook](/pt/skills/hooks/hooks-examples/)
4. **Divisão Skill / MCP**: o Skill descreve o fluxo; o MCP executa a ligação externa — a política mais estrita ganha ao unir permissões

## Erros frequentes

- «Mercado oficial» = «já revisto em segurança»
- A mesma OAuth app de MCP para desenvolvimento e produção
- Abrir `DEBUG=*` na depuração e despejar tokens em logs de CI

## Mal-entendidos frequentes

### 1. Ainda não distingo bem Plugin e MCP; importa?

Na primeira fase, pouco.

O comum é:
ambos põem o Codex em contato com sistemas externos, por isso há que pensar em permissões e riscos.

### 2. Porque se insiste tanto em «só leitura primeiro»?

Porque a só leitura costuma implicar:

- Mais fácil de pilotar
- Mais fácil de demonstrar valor
- Menor custo se algo falhar

### 3. Pode confiar-se nestas extensões logo após instalar?

Mesmo que a função pareça cómoda, continua a perguntar:

- A que dados pode aceder
- Se escreve de volta no sistema
- Como se gerem as credenciais

Com extensões externas, olha primeiro permissões e limites; depois, se a função é potente.

## Lista de aceitação

- [ ] Há lista de aprovação escrita ou fluxo equivalente
- [ ] Cada MCP de produção tem owner e classificação de dados
- [ ] Alinhado com a política de [segurança de Skill](/pt/skills/security/)

## Fontes de referência
- [Depurar MCP](/pt/skills/mcp/debugging-mcp/)
