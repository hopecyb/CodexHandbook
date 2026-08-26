---
title: Seleção de Ferramentas
description: Quando usar terminal, pesquisa, browser ou outras Ferramentas.
locale: pt
source_locale: zh-CN
source_revision: 64967ca
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

«Seleção de Ferramentas» é: que forma usar para fazer isto — eficaz e segura.

Ao escolher, julgar pelo tipo de Tarefa costuma ser mais claro.

## O que se olha ao escolher Ferramenta

Ao escolher, veja sobretudo:

- Qual está mais perto da Tarefa atual
- Qual obtém o resultado com o menor custo
- Qual tem o menor risco e é mais fácil de verificar

O mesmo objetivo com a Ferramenta errada pode não falhar de todo, mas costuma ser mais lento, mais indireto e com mais surpresas.

| Necessidade | Prioridade |
|---|---|
| Alterar ficheiros no repositório | Ferramentas de ficheiros |
| Correr testes/build | Terminal |
| Verificar factos públicos | Pesquisa Web |
| Ver o estado real da página | Browser (avançado) |

No Prompt, declare Ferramentas permitidas e proibidas — reduza saída de rede não autorizada ou instalação aleatória de dependências.

## Como escolher quando não tem a certeza

Se não souber de imediato:

1. Está a tratar o projeto local ou a verificar factos externos?
2. Precisa de «executar uma ação» ou só de «ver o resultado»?
3. Qual Ferramenta completa este passo no menor âmbito?

Por exemplo:

- Ver alterações de código → ficheiros
- Confirmar se o build passa → terminal
- Confirmar como a página está agora → browser
- Confirmar informação pública atualizada → pesquisa Web

## Mal-entendidos habituais

### 1. Ferramenta mais forte ≠ melhor

Ferramentas mais fortes costumam também significar:

- Maior superfície de impacto
- Mais risco
- Mais necessidade de compreender o que fazem

### 2. O terminal faz tudo — não tem de ser a primeira escolha

Se só quer ver como a página está, o browser costuma ser mais direto.  
Se só quer um número de versão público, a pesquisa Web encaixa melhor do que correr comandos por todo o lado.

### 3. E se não souber escolher?

Regra prática:

- **Ler/alterar conteúdo do projeto** → ficheiros
- **Validar comando ou build** → terminal
- **Verificar factos públicos** → pesquisa
- **Ver a apresentação real da página** → browser

### 4. Uma Tarefa costuma usar mais do que uma Ferramenta

Muitas Tarefas reais combinam, por exemplo:

- Ler ficheiros e depois correr o build
- Pesquisar factos públicos e voltar a reescrever a documentação
- Ver a página no browser e depois corrigir no código

O essencial é, em cada passo, usar a Ferramenta mais adequada — não teimar em «só pode escolher uma».

## Redação aplicável diretamente

Pode acrescentar na Tarefa:

```text
Priorize ficheiros e terminal; não pesquise na rede; se precisar do browser para verificar a página, explique primeiro o motivo.
```

Escolha primeiro a Ferramenta mínima e mais alinhada com a Tarefa — não comece pela de maior superfície de impacto.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Princípios de seleção de Ferramentas orientados pela Tarefa: ler/alterar projeto → ficheiros; validar comandos → terminal; factos públicos → pesquisa; página real → browser; este quadro foi cruzado com o capítulo de Ferramentas do manual e com as categorias reais de Ferramentas.  
**Última verificação:** 2026-07-26
