---
title: Criar seu primeiro Skill
description: Crie do zero um Skill pr-review commitável, com testes e compartilhamento em equipe.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Se você já sabe atribuir Tarefas, mas ainda não fez um Skill de verdade, esta página cobre o básico do primeiro Skill.

Em 15–30 minutos, faça um Skill **reutilizável no repositório** — costuma ser mais direto do que ler muita teoria. Um bom ponto de partida é um Skill pequeno, com limites bem claros.

## Para quem é

Já consegue completar a [primeira Tarefa](/cases/first-task/) e está disposto a experimentar num repositório de teste.

## Por que começar com `pr-review`

Tem várias vantagens:

- Entrada relativamente clara
- Risco menor do que «alterar código diretamente»
- Fácil julgar se funciona bem
- Ainda ajuda a entender disparo e limites de um Skill

Serve bem para praticar como transformar um roteiro de trabalho em algo reutilizável.

## Resultado esperado

Em `.agents/skills/pr-review/` existe um Skill capaz de emitir opinião de revisão estruturada sobre as alterações atuais.

## Meta mínima

No primeiro Skill, foque nestes três pontos:

1. Ser reconhecido
2. Executar de forma estável um fluxo claro
3. Não fazer ações perigosas por conta própria

Com isso definido, as iterações seguintes ficam bem mais fluidas.

## Passos

### 1. Criar o diretório

```bash
mkdir -p .agents/skills/pr-review
```

### 2. Escrever SKILL.md

```md
---
name: pr-review
description: Revisa o git diff; lista problemas bloqueantes, lacunas de teste e sugestões de estilo. Use quando o usuário mencionar review, revisão ou checagem antes do merge. Não serve para escrever funcionalidades novas.
---

# Revisão de PR

## Entrada
- Branch de comparação padrão: main (se não existir, use o branch padrão)

## Fluxo
1. Listar arquivos alterados e o tipo de mudança (feature/fix/refactor/docs)
2. Para cada mudança lógica: falta teste? Quebra API?
3. Verificar se há segredos, logs de debug ou diff grande e irrelevante
4. Saída:
   - 🔴 Bloqueante: deve corrigir
   - 🟡 Sugestão: deveria corrigir
   - 🟢 OK: atende aos requisitos de AGENTS.md

## Proibido
- Não fazer git push
- Não alterar APIs públicas não discutidas
```

### 3. Testar localmente

Abra o repositório no Codex e tente:

```text
$pr-review Por favor revise minhas alterações ainda não commitadas
```

Ou em linguagem natural: «Revise o diff no estilo da equipe, com foco em testes.»

### 4. Teste explícito antes do implícito

Não comece testando o disparo automático.

Siga esta ordem:

1. Chame explicitamente com `$pr-review`
2. Confirme que fluxo e saída estão corretos
3. Só então teste disparo em linguagem natural

Assim fica mais fácil saber se o problema está no conteúdo do Skill ou nas condições de `description`.

### 5. Iterar o description

Se o modelo **nunca escolhe automaticamente**, aperte ou complete as palavras de disparo em `description`. Se **usa demais à toa**, acrescente «quando não usar».

### 6. Commitar para a equipe

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

No README da equipe ou em `AGENTS.md`, acrescente: «Antes do merge, use `$pr-review`.»

## Equívocos comuns

### 1. O primeiro Skill deve ser o mais completo possível

Muitas vezes é o contrário. Quanto menor e mais focado, mais fácil julgar se tem valor.

### 2. O foco do Skill não é parecer «inteligente»

O mais importante é ter **limites claros**.

O que deve e o que não deve fazer importa mais do que «parecer poderoso».

### 3. Se o Skill roda, já é sucesso

Um Skill útil precisa ao menos:

- Deixar claro para outros quando usar
- Ter saída com estrutura fixa
- Não executar operações perigosas por conta própria

## Checklist de aceite

- [ ] `$pr-review` roda e não executa operações git perigosas
- [ ] A saída traz conclusões por gravidade, não genéricas
- [ ] `description` deixa o cenário de disparo claro em uma frase
- [ ] Conferiu [Permissão e Aprovação](/guide/permissions-and-sandbox/) quanto a necessidade de scripts (este exemplo não tem scripts)

Começar com um Skill «pequeno e estável» facilita reutilizar um roteiro de trabalho claro.

## Próximos passos

- Consolidar [explorar—planejar—executar—verificar](/prompts/templates/understand/) como Skill
- Quando precisar da API do GitHub, introduza [MCP](/skills/mcp/mcp-overview/)

## Fontes
- Exemplos oficiais OpenAI Codex Skills e `skill-creator` (se o ambiente fornecer)
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base da Verificação:** O runtime atual do Codex ainda suporta diretório de Skills no projeto, definição via `SKILL.md` e chamada explícita para testes; esta página é um exercício estável de primeiro Skill.  
**Última Verificação:** 2026-07-26
