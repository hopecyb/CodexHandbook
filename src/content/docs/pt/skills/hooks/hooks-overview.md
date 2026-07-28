---
title: Visão geral de Hooks
description: Insira validação, logs e auditoria nos nós-chave do Agent — complemente segurança e conformidade da equipe.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Em resumo, Hook é inserir automaticamente uma camada de checagem ou registro num nó-chave.

**Hooks** permitem rodar lógica customizada em nós fixos da cadeia de execução do Codex — por exemplo scan de segredos antes do commit, log de chamadas MCP, ou bloquear comandos perigosos. Complementam a política e a observabilidade de [Aprovação e Sandbox](/guide/cli/approvals-and-sandbox/).

## Conteúdo

- Diferença entre Hooks, Skill e MCP
- Casos típicos de equipe
- Princípios de segurança ao desenhar Hooks

## Por que a equipe usa Hook

Mesmo que você ainda não vá escrever Hook, vale saber o que ele costuma fazer na equipe:

- Por que algumas ações são barradas a mais num ponto-chave
- Por que a equipe diz «essa checagem não é Skill, é Hook»
- Por que certas regras não ficam no Prompt, e sim nos nós do sistema

Muitas vezes, o «por que há uma checagem a mais aqui» na equipe é Hook por trás.

Seleção comparativa: [Como escolher o método de extensão](/skills/choosing-an-extension-method/)

## O que Hooks fazem

| Fase (conceito) | O que o Hook pode fazer |
|---|---|
| Antes da chamada de ferramenta | Recusar comandos com `rm -rf` ou que vazem `.env` |
| Depois da chamada de ferramenta | Escrever log de auditoria no SIEM |
| Fim da sessão | Resumir a lista de arquivos alterados |
| Antes de criar PR | Verificar formato do número do issue |

## Como distinguir de Skill

- **Skill**: diz ao Codex «nesse tipo de Tarefa, siga este fluxo»
- **Hook**: diz ao sistema «neste nó, rode uma checagem automática primeiro»

Problemas diferentes:

- Skill tende a instrução de workflow
- Hook tende a portão ou ponto de observação no fluxo

Nomes de eventos e formato de configuração seguem a [documentação oficial de Hooks](https://developers.openai.com/codex).

## Diferença em relação a Skill / MCP

| | Hooks | Skill | MCP |
|---|---|---|---|
| Disparo | Evento do sistema | Usuário ou modelo | Pedido de ferramenta |
| Objetivo | Política, auditoria | Instrução de workflow | Sistema externo |
| Quem mantém | Plataforma / infra da equipe | Produto ou engenharia | Desenvolvedor de integração |

## Equívocos comuns

### 1. Hook substitui Aprovação e Sandbox

Hook é camada complementar de checagem — não deve ser o único limite de segurança.

### 2. Quanto mais Hooks, mais seguro

Hooks lentos, pesados e obscuros demais só travam o fluxo e dificultam a triagem.

### 3. Hook não serve para lógica complexa

Hook serve melhor a coisas:

- Rápidas
- Determinísticas
- Fáceis de testar

Não empilhe raciocínio complexo aqui.

## Casos recomendados para a equipe

1. **Detecção de vazamento de segredo**: padrão de AWS key no diff → bloquear
2. **Checagem de cabeçalho de licença**: avisar se arquivo novo não tem copyright da empresa
3. **Log de conformidade**: quem, quando, em qual repositório fez escrita (com mascaramento)
4. **Alinhamento com CI**: regras do Hook local e do GitHub Action com a mesma origem, se possível

## Quando Hook é adequado

Se uma checagem cumprir estes dois pontos, cabe bem em Hook:

- Sempre acontece num nó fixo
- Não deve depender de alguém lembrar de fazer à mão toda vez

Exemplos: scan de informação sensível, validação de nome, registro de auditoria.

## Princípios de desenho

- **Rápido**: timeout de Hook atrasa cada chamada de ferramenta
- **Determinístico**: evite chamar LLM de novo dentro do Hook
- **Testável**: unit test do script Hook com entrada fixa
- **Desligável**: em emergência a equipe pode contornar (com auditoria)

Perspectiva de segurança: roadmap `11-team-enterprise`; usuários individuais costumam bastar com Hook de log só leitura.

Hook serve a checagens automáticas nos nós-chave do sistema. Não é instrução de workflow e não substitui Aprovação.

## Erros comuns

- O próprio script Hook tem Permissão de escrita na rede — nova superfície de ataque
- Repete e contradiz regras de `AGENTS.md`
- Configuração de Hook sem versionamento — ambientes da equipe inconsistentes

## Checklist de aceite

- [ ] Consegue explicar o cenário de Hook mais necessário da equipe
- [ ] Em falha do Hook, mensagem de erro clara para o desenvolvedor
- [ ] Configuração entra na revisão de código

## Fontes

- Documentação OpenAI Codex Hooks
- stormzhang `22-hooks.md`
- KimYx0207 CX-08
- freestylefly/CodexGuide auditoria e conformidade

---

**Status:** outdated  
**Produtos aplicáveis:** CLI / App (conforme a versão)  
**Nota de revisão:** Esta página depende da descrição atual de capacidades Hook, nós típicos e governança de equipe; a documentação oficial pública cobre pouco esses detalhes — precisa reescrita conforme o cliente vigente.  
**Última Verificação:** 2026-07-26
