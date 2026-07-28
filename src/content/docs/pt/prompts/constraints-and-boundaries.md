---
title: Restrições e limites
description: Limite o alcance editável, o estilo e as proibições.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muitas tarefas falham não porque o objetivo falte por completo, mas porque os **limites estão pouco claros**.

Se disser «ajuda-me a alterar esta página», o Codex pode entender:

- só alterar o texto
- pode mexer nos estilos de passagem
- pode alterar componentes
- pode adicionar dependências

O que você queria talvez fosse só «altere este trecho de texto; não toque na estrutura».

A restrição responde: até onde ir, e o que nunca tocar.

## Conteúdo

Serve sobretudo para evitar:

- mudanças a mais «de passagem»
- operações além da autorização
- alterações em camadas que você não pretendia
- conclusão aparente com custo demasiado alto

## Restrições habituais

A restrição responde: «o que nunca fazer?»

- alterar só os arquivos/diretórios listados
- não alterar contratos de API / não alterar a base de dados
- não adicionar novas dependências
- não fazer pedidos de rede
- manter a configuração atual das ferramentas de formatação

## Como distinguir «objetivo» e «restrição»

- **Objetivo:** o que você quer que ele entregue
- **Restrição:** que linhas não pode atravessar ao fazê-lo

Por exemplo:

```text
Objetivo: tornar o texto do Hero da home mais claro
Restrições: não alterar o layout, não adicionar dependências, não mudar o comportamento do CTA
```

Sem restrições, o Codex tende a ler «mais claro» como uma reforma maior.

## Ideias erradas habituais

### 1. Restrições demais pioram o resultado?

Muitas vezes, restrições claras aproximam o resultado do que você realmente precisa, porque evitam desvios.

### 2. «Não mude demais» já é restrição

É demasiado vago.

Mais útil:

- só alterar `src/content/docs/...`
- não alterar componentes
- não alterar interfaces
- não instalar dependências

### 3. Restrições só para tarefas de alto risco

Tarefas pequenas também precisam — é aí que um pedido vago convida a expandir o âmbito sozinho.

## Uma formulação suficiente

Se não souber por onde começar, use este esqueleto:

```text
Restrições:
- só alterar 【diretório/arquivo】
- não alterar 【componentes / API / base de dados / configuração】
- não adicionar dependências
- se faltar informação, pergunte primeiro; não adivinhe
```

## Quando detalhar mais as restrições

Nestes casos, escreva-as com clareza:

- projeto antigo, com muita dívida histórica
- você só quer um remendo local
- a equipa tem regras rígidas de estilo ou arquitetura
- envolve permissões, rede ou instalação de dependências

O objetivo diz ao Codex o que fazer; a restrição diz até onde ir.

Escreva limites de permissão junto com as restrições, para reduzir extralimitação «de passagem». Ver [Definir o concluído](/prompts/define-done/) e [Permissões e Sandbox](/guide/permissions-and-sandbox/).

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve restrições e limites; os links internos foram revistos; o corpo não depende de factos voláteis do produto.
