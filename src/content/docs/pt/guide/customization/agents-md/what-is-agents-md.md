---
title: O que é AGENTS.md
description: Ficheiro de instruções persistentes a nível de projeto — o «contrato de colaboração» com o Codex, não uma enciclopédia de arquitetura.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

`AGENTS.md` é um ficheiro de **instruções de projeto em Markdown** no repositório (ou num subdiretório). O Codex lê-o ao entrar no projeto, para alinhar estilo de código, requisitos de teste, normas de commit e zonas proibidas.

Pode entender `AGENTS.md` como o manual de «como este projeto espera que o Codex colabore».

Não é documentação avançada de arquitetura, nem o manual completo para um novo colega humano — são as regras de colaboração do projeto para o Codex.

## Um conceito central

Veja-o como a **versão condensada do manual de integração de um colega novo**: só «como se trabalha neste repositório», sem a história da empresa.

| Adequado em AGENTS.md | Inadequado |
|---|---|
| Como correr testes, lint, build | Documentação completa de API (ligar à documentação formal) |
| Convenções de diretórios e estilo de nomes | Milhares de linhas de decisões de desenho históricas |
| Proibições (não alterar `main`, não submeter segredos) | Requisitos temporários que mudam em cada Tarefa |
| Mensagens de commit, checklist de PR | Preferências pessoais sem relação com o código |

## Prática mínima viável

Crie `AGENTS.md` na raiz do repositório:

```md
# Instruções do projeto

## Build e testes
- Instalação: `pnpm install`
- Testes: `pnpm test` (obrigatório após alterar lógica)
- Verificação de tipos: `pnpm typecheck`

## Estilo de código
- Usar TypeScript em modo estrito
- Novos componentes em `src/components/`, nomes de ficheiro em PascalCase

## Proibido
- Não modificar `pnpm-lock.yaml` salvo alteração de dependências
- Não submeter `.env` nem chaves de API
- Não executar `git push` sem confirmação

## Definição de concluído
- Testes relacionados passam
- Sem novos erros de lint
- Descrever os passos de Verificação na descrição do PR
```

Depois de guardar, nas novas Tarefas escreva só as **diferenças desta vez**, por exemplo: «Corrigir o layout da página de login no Safari; aceitar segundo AGENTS.md.»

## Mal-entendidos habituais

### 1. Tenho de repetir estas regras manualmente de cada vez?

Normalmente não.  
Esse é um dos sentidos de `AGENTS.md`:
colocar as **regras estáveis do projeto** lá dentro, para não as repetir em cada Tarefa nova.

### 2. Escrever equivale a «o Codex vai cumprir a 100%»?

`AGENTS.md` é importante, mas continua a trabalhar em conjunto com:

- Os requisitos explícitos desta Tarefa
- Os mecanismos de Permissão e Aprovação do produto
- Sandbox, rede e políticas de equipa

Em termos mais precisos, ajuda a alinhar — não é um impositor universal.

### 3. Se não sou programador, preciso de me preocupar com este ficheiro?

Precisa de conhecer o conceito básico.  
Mesmo sem escrever código, se o Codex tratar um projeto de forma contínua, `AGENTS.md` reduz explicações repetidas e desvios.

## Onde colocar

| Localização | Âmbito |
|---|---|
| `AGENTS.md` na raiz do repositório | Predefinição para o projeto inteiro |
| `AGENTS.md` em subdiretório | Esse diretório e subcaminhos (comum em monorepo) |
| Instruções a nível de utilizador | Use configuração pessoal ou preferências globais; não misture com instruções do projeto |

Âmbito e resolução de conflitos: [Âmbito e prioridade](/guide/customization/agents-md/scope-and-precedence/).

## Diferença face a Skill e comandos de barra

| Mecanismo | Essência | Uso típico |
|---|---|---|
| AGENTS.md | Regras de projeto persistentes e passivas | Estilo, testes, zonas proibidas |
| Skill | Pacote de fluxo reutilizável (`SKILL.md`) | Checklist de release, fluxos de revisão especializados |
| Comando de barra | Atalho que você dispara ativamente | `/review`, fluxos pontuais |

Regras de projeto → `AGENTS.md`; **um conjunto de passos repetível e partilhável** encaixa melhor como [Skill](/skills/overview/).

## Como decidir onde escrever

Se não souber onde colocar uma frase, use esta regra:

- **Esta regra vale a longo prazo** → melhor em `AGENTS.md`
- **É um requisito especial só desta Tarefa** → no Prompt da Tarefa atual
- **É um conjunto de passos reutilizáveis** → considere um Skill

Por exemplo:

- «Neste repositório valida-se com `pnpm test`» → `AGENTS.md`
- «Desta vez só altere a página de login, não toque no registo» → Tarefa atual
- «Antes de cada release, corrija o mesmo fluxo de verificação» → Skill

## Erros habituais

- Ficheiro demasiado longo; o modelo só lê a primeira metade — **coloque restrições rígidas nas primeiras 30 linhas**
- Instruções de alto risco como «sempre fazer push automático», em conflito com [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/)
- Ninguém na equipa mantém; o documento diverge dos comandos reais dos scripts

## Limites de segurança

`AGENTS.md` **não substitui** Sandbox nem Aprovação. Mesmo que escreva «pode executar comandos à vontade», o produto ainda pode exigir confirmação; a política gerida pela equipa pode apertar ainda mais.

`AGENTS.md` diz ao Codex «como se costuma trabalhar neste projeto», não descreve por si o que fazer nesta vez em concreto.

## Referências
- Explicação de Contexto de projeto OpenAI Codex
---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com a documentação pública atual da OpenAI Developers sobre Contexto de projeto, limites de Tarefa e restrições de Aprovação/Sandbox; o conteúdo limita-se a usos, limites e padrões comuns de `AGENTS.md`, sem detalhes de prioridade forçada não confirmados.  
**Última verificação:** 2026-07-26
