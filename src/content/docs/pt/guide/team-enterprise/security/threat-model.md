---
title: Modelo de ameaças
description: "Principais superfícies de risco do Codex em ambientes de equipa: dados, Ferramentas, extensões e cadeia de fornecimento."
locale: pt
source_locale: zh-CN
source_revision: 4e63649
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

O «modelo de ameaças», em claro, é antecipar o risco:

> **Se o Codex entrar de verdade no nosso código, comandos e Ferramentas externas, o que é mais provável que corra mal?**

O **modelo de ameaças** decompõe isso com clareza. O Codex não é «outra janela de chat»: pode **ler código, executar comandos e chamar Ferramentas externas**. Este capítulo desdobra primeiro as superfícies principais; os controlos concretos estão na [matriz de Permissões](/pt/guide/reference/permission-matrix/) e no [Sandbox](/pt/guide/foundations/sandbox-and-network/).

## Conteúdo

- Ativos e limites de confiança
- Ameaças típicas e direções de mitigação
- Divisão de papéis com regras, Hooks e CI

## Porque não é «só coisa de segurança»

Se és desenvolvimento, plataforma, documentação ou responsável de projeto, também te afeta. Na equipa costumam falhar estes cenários concretos:

- Entregar à automatização um token com demasiados privilégios
- Deixar que o Agent faça ações de alto risco sobre entrada não fiável
- Não saber que dados se podem ver e quais não se podem tirar
- Ao introduzir extensões, olhar só a função e não as Permissões nem a origem

O valor do modelo de ameaças é a equipa pensar os limites antes do incidente.

## Ativos e limites

| Ativo | Exemplo |
|---|---|
| Código-fonte e IP | Repos privados, desenhos não publicados |
| Credenciais | API key, `.env`, IAM na cloud |
| Dados de utilizador | PII, conteúdo de tickets de clientes |
| Infraestrutura | CI, pipelines de deployment para produção |

**Limite de confiança:** o modelo e as extensões estão por omissão no lado **não totalmente fiável**; a revisão humana e a política fazem enforcement no limite.

## Duas perguntas centrais

Antes de qualquer integração ao nível da equipa, pergunta:

1. O que é que mais tememos perder?
2. O que é que mais tememos que o Codex faça mal?

A primeira identifica «ativos importantes»; a segunda, «ações perigosas». Muitas estratégias de controlo giram em torno destas duas.

## Um cenário

Imagina:

- O Codex pode ler o teu repo privado
- Pode aceder a um sistema de tickets com Permissões
- Pode executar comandos shell
- Pode devolver resultados como comentários

Então importa mais:

- Se verá conteúdo que não deveria
- Se fará ações que não deveria
- Se tirará informação que deveria ficar dentro

A esse nível, o modelo de ameaças parece-se a uma lista de riscos prévia ao go-live.

## Resumo de ameaças

| Ameaça | Descrição | Direção de mitigação |
|---|---|---|
| Injeção de Prompt | Issue/web maliciosa induz operações fora de alcance | Sanitizar entrada, CI só de leitura, [tema de injeção](/pt/guide/team-enterprise/security/prompt-injection/) |
| Excesso de Permissões | Token ou Sandbox demasiado amplos | Privilégio mínimo, proteção de branches |
| Fuga de dados | Comando/MCP envia conteúdo do repo para fora | Política de rede, DLP, Hook de auditoria |
| Extensão maliciosa | Plugin/MCP sem rever | [Riscos de extensão](/pt/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Cadeia de fornecimento | Dependências e scripts envenenados | Combinar com SCA e code review existentes |
| Erro operativo | Agent apaga a BD ou faz push incorreto | Deny de comandos, CI sem push |

## Quando priorizar o modelo de ameaças

Se uma capacidade cumprir as duas condições, deve entrar primeiro no modelo:

- Pode tocar ativos importantes
- Pode executar ações reais

Por exemplo: ler repos privados, aceder a API de produção, chamar MCP com escrita, fazer push automático de código.

## Na primeira adoção, não pretendas completá-lo tudo

Muitas equipas, ao ouvir governação de segurança, querem completar de golpe toda a documentação, processos e políticas… e não aterrizam nada.

Para uma equipa que integra o Codex pela primeira vez, costuma bastar o mais direto:

1. Lista as 3 classes de ativos mais importantes
2. Lista as 3 classes de ações que menos queres que o Agent faça mal
3. Atribui a cada uma dessas 6 um controlo o mais direto possível

Por exemplo:

- Temes filtrar dados da BD de produção → limita primeiro credenciais de produção e rotas de exportação
- Temes um push errado ao branch principal → acrescenta proteção de branches e Aprovação
- Temes que uma web ou um issue te desvie → endurece a entrada externa e o fluxo de review só de leitura

Não é completo, mas costuma ser mais útil do que um documento grande que ninguém segue.

## Controlo por camadas recomendado

```text
L1 Identidade e tenant (SSO, grupos)
L2 Configuração gerida pela organização e política de modelos
L3 Rules do repo + AGENTS.md
L4 Sandbox / Aprovação / Hooks
L5 Review humana e proteção de branches
```

## Erros frequentes

- Só formar, sem controlos técnicos
- Assumir que «o modelo é suficientemente esperto» e não se engana
- Secrets de produção em caminhos escrevíveis pelo Agent
- Reduzir todos os riscos a «com review humana basta»

## Versão mínima

Antes deixa firmes estas três:

- As ações de alto risco requerem Aprovação
- Os dados muito sensíveis não se entregam por omissão
- Os fluxos automatizados são só de leitura por omissão

Com isso já se podem baixar muitos riscos de equipa. A governação mais fina pode ir depois.

## Lista de aceitação

- [ ] Podes enumerar os Top 3 ativos de preocupação da organização
- [ ] Cada ameaça tem controlo correspondente ou registo de risco aceite
- [ ] Alinhado com os contactos de resposta a incidentes

## Capítulos relacionados

- [Contexto sensível](/pt/guide/context/sensitive-context/)
- [Padrões de Aprovação humana](/pt/cases/workflows/human-approval-patterns/)

## Fontes de referência
- Livro branco de segurança empresarial da OpenAI (oficial)
---

**Estado:** verified  
**Produtos aplicáveis:** Equipa / empresa  
**Base de verificação:** A documentação atual da OpenAI sobre plugins, apps e integrações continua a distinguir acesso a dados externos, Permissões de ação, requisitos de Aprovação e limites de Permissão de sistemas de origem; esta página concentra a superfície de risco de equipa em ativos, limites de confiança, ameaças típicas e controlo por camadas — um resumo organizado desses princípios atuais, sem depender de um interruptor concreto do produto.  
**Última verificação:** 2026-07-26
