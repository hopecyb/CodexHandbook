---
title: Anatomia de um Skill
description: Papéis e exemplos de SKILL.md, references/, templates/ e scripts/.
locale: pt
source_locale: zh-CN
source_revision: d22c83b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Na primeira vez que se olha um diretório Skill, a sensação comum é «reconheço as pastas, mas não sei por que estão assim».

Esta página explica como separar «fluxo principal, documentação longa, templates e scripts», em vez de empilhar tudo num arquivo só.

Fica mais fácil de ler, alterar e reutilizar — e menos propenso a virar bagunça.

# Anatomia de um Skill

## Estrutura de diretórios

```text
my-skill/
├── SKILL.md          # obrigatório
├── scripts/          # opcional: passos determinísticos
├── references/       # opcional: documentação longa de referência
└── templates/        # opcional: templates de saída
```

## O que cada camada faz

- `SKILL.md`: manual principal — diga ao Codex «o que é, quando usar, quais passos»
- `references/`: armário de material longo — não force todo o background no arquivo principal
- `templates/`: esqueleto de saída pronto — evite improvisar a estrutura toda vez
- `scripts/`: passos determinísticos vão para script — não dependa só de linguagem natural

No início, um único `SKILL.md` basta.  
Quando realmente ficar complexo, aí separe `references/`, `templates/`, `scripts/`.

## Exemplo mínimo de SKILL.md

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

## Equívocos comuns

### 1. Criar todos os diretórios desde o começo

Muitos bons Skills começam só com `SKILL.md`; outros diretórios aparecem conforme a reutilização cresce.

### 2. `references/` existe só para «colocar mais conteúdo»

O ponto não é «colocar mais», e sim tirar do fluxo principal o que não precisa ocupar atenção o tempo todo — ler sob demanda.

### 3. Evite `scripts/` se puder

Se um passo já deve ser estável, determinístico e repetível, script costuma ser mais confiável do que descrever sempre em linguagem natural.

## Papel de cada diretório

| Diretório | Uso |
|---|---|
| `SKILL.md` | Fluxo principal, condições de disparo, proibições |
| `references/` | Documentos longos, normas, APIs |
| `templates/` | Formato de saída, esqueleto de relatório |
| `scripts/` | Comandos e checagens determinísticos |

## Quando separar diretórios

Use esta ordem para decidir:

1. O fluxo principal já está longo demais para a primeira leitura?
2. Há um bloco grande de material que não precisa ser lido toda vez?
3. Há um formato de saída fixo que se repete?
4. Algum passo já está estável o bastante para virar script?

Se um ou dois desses pontos forem «sim», comece a separar.

Primeiro faça o `SKILL.md` funcionar; quando ficar complexo de verdade, extraia material, templates e scripts aos poucos.

Exercício completo: [Criar seu primeiro Skill](/pt/skills/create-your-first-skill/).
## De template a Skill

Muitas equipas não começam por desenhar um Skill; começam por um Prompt que copiam repetidamente. Ele pode evoluir por etapas:

| Etapa | Forma | Quando evoluir |
|---|---|---|
| Prompt único | Conversa atual | Usa-se só uma vez |
| Template | Biblioteca de Prompts ou docs da equipa | Tarefas parecidas repetem-se, mas os passos ainda mudam |
| Skill de ficheiro único | Um `SKILL.md` | Processo estável e gatilho claro |
| Diretório Skill completo | `SKILL.md` + `templates/` + `references/` + `scripts/` | Formato de saída, referências longas e checks determinísticos estabilizaram |

Não transformes cada template em Skill. Vale a pena quando há repetição, critérios de sucesso claros e acordo da equipa.

## Componentes reutilizáveis comuns

| Componente | Serve para |
|---|---|
| Instrução principal | Gatilhos, passos, proibições, definição de concluído |
| Templates | Saída de review PR, estrutura de documento, relatório de risco |
| Referências | Normas de código, glossário, regras de domínio, notas API |
| Scripts | Complexidade, links, cobertura, formatação |

Um bom Skill não é só um Prompt mais longo: separa trabalho reutilizável em partes legíveis, testáveis e manuteníveis.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base da Verificação:** A documentação de Skills no runtime atual do Codex ainda tem `SKILL.md` como arquivo central e permite estender com scripts e referências sob demanda; esta página foca na divisão de responsabilidades dos diretórios, sem amarrar a entradas voláteis do produto.  
**Última Verificação:** 2026-07-26
