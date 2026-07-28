---
title: Visão geral de Skills
description: Ensine workflows reutilizáveis ao Codex com SKILL.md — escreva uma vez, chame sob demanda.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Skill** é um diretório que contém `SKILL.md` (opcionalmente scripts e material de referência). Empacota um fluxo fixo em uma capacidade que o Codex pode **chamar automaticamente ou de forma explícita**.

Serve para métodos de trabalho que já se repetem e continuarão sendo reutilizados.

## Conceitos centrais

### Diferença em relação a comandos de barra

| | Comando de barra | Skill |
|---|---|---|
| Disparo | Você digita `/xxx` | Você chama com `$name`, ou o modelo combina pela descrição |
| Contexto | Em geral expande de imediato | **Divulgação progressiva**: no dia a dia só ocupa nome + descrição; o texto completo só é lido quando selecionado |
| Adequado para | Entradas fixas, frequentes, que você lembra | Fluxos longos, com documentação, em que o modelo deve decidir quando usar |

### Divulgação progressiva

Na inicialização, o Codex só vê **name, description e caminho** de cada Skill; o `SKILL.md` completo só é carregado quando decide usar. Assim o corpo pode ter checklists detalhados sem encher o Contexto.

Atenção: a lista de Skills tem um **orçamento inicial de caracteres** (uma fração pequena do Contexto). Coloque os cenários de disparo essenciais no **início** de `description`, para não falhar o matching após truncamento.

## Estrutura do diretório Skill

```text
my-skill/
├── SKILL.md          # obrigatório
├── scripts/          # opcional: passos determinísticos
└── references/       # opcional: documentação longa de referência
```

Exemplo mínimo de `SKILL.md`:

```md
---
name: pr-review
description: Revisa o diff do branch atual em relação a main, marca riscos e lacunas de teste. Use quando o usuário pedir review, revisão de PR ou checagem antes do merge.
---

## Passos
1. Obter o diff em relação a main
2. Classificar por arquivo: erro lógico, segurança, performance, testes
3. Emitir lista por gravidade: bloqueante / sugestão / nit
4. Não fazer push nem merge automaticamente
```

## Onde guardar

| Tipo | Local típico | Observação |
|---|---|---|
| Skill de projeto | `.agents/skills/<name>/` | Vai com o repositório, compartilhado pela equipe |
| Skill de usuário | Diretório de skills do usuário (ver docs oficiais) | Pessoal, entre projetos |
| Seleção oficial | Instalado pelo instalador | Caminho gerido pelo instalador; não misture com diretórios manuais |

**Não** copie caminhos errados de tutoriais antigos nem campos inventados como `trigger:`; siga a [documentação oficial de Skills](https://developers.openai.com/codex/skills).

## Formas de disparo

1. **Explícito**: em ambientes com suporte, chame com `$skill-name` (nome igual ao `name` do frontmatter)
2. **Implícito**: o modelo avalia semanticamente pelo `description` se a Tarefa atual se aplica

Pontos para um bom `description`:

- Deixe claro «quando usar» e «quando não usar»
- Inclua palavras-chave que o usuário pode dizer (review, release, changelog)
- Evite genéricos como «ajuda o usuário a escrever código»

## Fluxo de trabalho recomendado

1. Perceber que um fluxo já se repetiu várias vezes
2. Rascunhar `SKILL.md`, primeiro só com passos em texto
3. Testar em tarefas pequenas com `$name` e matching implícito
4. Acrescentar `scripts/` quando precisar de determinismo
5. Commitar em `.agents/skills/` e abrir PR para a equipe

Prática: [Criar seu primeiro Skill](/skills/create-your-first-skill/)

## Dúvidas frequentes

### 1. Qual a diferença entre Skill e Prompt?

- **Prompt**: o que você diz nesta Tarefa, de forma temporária
- **Skill**: um fluxo reutilizável em Tarefas semelhantes futuras

### 2. Preciso aprender a escrever Skills desde o início?

Não. Primeiro deixe as Tarefas comuns bem claras; quando um fluxo se repetir muitas vezes, aí vale consolidar em Skill.

### 3. É a mesma coisa que um comando de barra?

Não exatamente. Comandos de barra são atalhos; Skill é um pacote de trabalho com instruções e fluxo completos.

Skill não é obrigatório no começo; serve melhor para organizar fluxos que já se repetem.

## Limites de segurança

- Scripts e chamadas MCP dentro do Skill herdam a política atual de Aprovação
- Não hardcodeie segredos no Skill; use variáveis de ambiente ou autenticação MCP
- A equipe deve revisar Skills de terceiros como revisaria dependências

## Erros comuns

- `description` longo demais ou vago demais: nunca dispara ou dispara errado
- Um Skill com dez fluxos sem relação
- Usar scripts no lugar de passos que poderiam ser descritos com clareza — difícil de manter

## Fontes
- Documentação OpenAI Codex Skills
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base da Verificação:** As regras atuais de carregamento de Skill no runtime do Codex (`SKILL.md`, leitura sob demanda do arquivo completo) alinham-se à definição de Skill como workflow reutilizável no OpenAI Help *Skills in ChatGPT*; esta página foca em conceitos e organização de diretórios, sem depender de UI volátil.  
**Última Verificação:** 2026-07-26
