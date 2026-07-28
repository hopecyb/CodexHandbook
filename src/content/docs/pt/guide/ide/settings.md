---
title: Definições da extensão IDE
description: Entradas de configuração no IDE para modelo, Aprovação, Contexto e comportamento da extensão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

As definições da extensão IDE ligam **preferências pessoais** e **regras do projeto**: que nível de modelo usar, quão estrita é a Aprovação, se anexar automaticamente ficheiros abertos, etc. Alinhadas com as [bases de configuração](/guide/customization/configuration/config-basics/) globais, esta página foca as opções habituais dentro do editor.

## Conteúdo desta página

- Divisão de papéis entre definições IDE, configuração de utilizador e `AGENTS.md`
- Itens que os programadores mais ajustam
- Como a equipa alinha valores predefinidos

## O que estas definições controlam

As definições IDE aproximam-se de: **hábitos predefinidos do Codex ao trabalhar consigo no editor**.

Tratam de questões como:

- Que modelo usar por defeito
- Quão apertada deixar a Aprovação por defeito
- Se incluir automaticamente o ficheiro atual e a seleção

Não definem as regras do projeto em si; decidem se o uso no editor é fluido e estável.

## Camadas de configuração (revisão)

| Camada | Exemplo | Prioridade |
|---|---|---|
| Política gerida pela organização | Proibir afrouxar o Sandbox | Máxima |
| `AGENTS.md` / configuração do projeto | Comandos de teste, convenções de diretórios | Alta |
| UI de definições da extensão IDE | Modelo predefinido, layout do painel | Média |
| Prompt da Tarefa pontual | «Nesta ocasião não ligue à rede» | Ao nível da Tarefa |

Ver [Âmbito e precedência](/guide/customization/agents-md/scope-and-precedence/)

## Mal-entendidos frequentes

### Definições IDE não são normas do projeto

Muita gente confunde «como tenho configurado no editor» com «é assim que o projeto deve funcionar».

Uma divisão mais clara:

- Definições do editor → experiência pessoal de uso
- `AGENTS.md` e configuração do projeto → consenso da equipa

Estão relacionadas, mas não são a mesma coisa.

### Anexar Contexto automaticamente não significa «quanto mais, melhor»

Incluir automaticamente o ficheiro atual, a seleção e os separadores abertos é conveniente; mas se encher demais, também dilui o foco da Tarefa.

O critério prático é o suficiente; não é preciso perseguir «quanto mais aberto, mais forte».

## Definições habituais (conceito)

### Modelo e raciocínio

Afeta velocidade de resposta e qualidade em Tarefas complexas. Em projetos de equipa, o README pode indicar o «nível de modelo recomendado», para evitar que predefinições diferentes tornem os problemas difíceis de reproduzir.

### Aprovação e Sandbox

Correspondem a [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/):

- Iniciantes: manter o predefinido ou mais estrito
- Repositórios de confiança: afrouxar com cuidado e sem misturar com diretórios de secrets de produção

CLI e IDE devem partilhar a **mesma linha de base de segurança**; detalhes da CLI em [Configuração da CLI](/guide/cli/configuration/).

### Comportamento do Contexto

Algumas extensões permitem configurar:

- Se incluir automaticamente o ficheiro / seleção atuais
- Se ler `AGENTS.md`
- Opções relacionadas com a janela de Contexto (conforme a versão)

Demasiado Contexto automático aumenta o ruído; ver [Manter o Contexto focado](/guide/context/keep-context-focused/).

### Login e conta

Partilhado com [Iniciar sessão e autenticação](/guide/getting-started/sign-in-and-authentication/); depois de mudar de conta, reinicie a sessão da extensão.

## Alinhamento na equipa

1. O que **tem de ser igual** fica no repositório (`AGENTS.md` + configuração opcional do projeto)
2. **Hábitos pessoais** ficam nas definições IDE, fora do Git
3. Onboarding de novos membros: confronte a [instalação IDE](/guide/ide/installation/) e a versão da extensão

## O que olhar na primeira vez

Na primeira configuração da extensão IDE, foque-se em três categorias:

1. Modelo e nível de raciocínio
2. Relacionadas com Aprovação / segurança
3. Relacionadas com Contexto automático

Com estas três afinadas, já cobre a maioria dos problemas reais de uso.

## Resolução de problemas

| Fenómeno | Verificar |
|---|---|
| Definições sem efeito | Sobrepostas por política da organização? Precisa de recarregar a janela? |
| Comportamento diferente da CLI | Compare com a [referência de configuração](/guide/reference/configuration-reference/) |
| Extensão sem resposta | [Resolução de problemas IDE](/guide/ide/troubleshooting/) |

As definições IDE são mais «como colabora com o Codex no editor»; como escrever as regras do projeto é outra camada — não misture as duas.

## Fontes de referência
- OpenAI Codex IDE settings
---

**Estado:** outdated  
**Produtos aplicáveis:** IDE  
**Nota de revisão:** Esta página cobre itens de definição da extensão IDE, Contexto automático, preferências de Aprovação e sobreposição organizacional, mas essas entradas e nomes mudam facilmente com a versão da extensão; falta documentação oficial de definições bastante sólida para sustentar o conteúdo da página inteira.  
**Última verificação:** 2026-07-26
