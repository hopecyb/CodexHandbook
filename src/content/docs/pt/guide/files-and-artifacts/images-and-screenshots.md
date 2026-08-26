---
title: Imagens e ecrãs
description: Fornecer ecrãs e mockups ao Codex e gerir ficheiros de imagem nas Tarefas.
locale: pt
source_locale: zh-CN
source_revision: b5ab733
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

As imagens permitem ao Agent **ver** problemas de interface, intenção de design ou esboços de quadro branco. Esta página cobre entrada (imagens que fornece) e gestão de ficheiros de imagem no repositório; para gerar imagens novas, veja [Geração de imagens](/pt/guide/tools/image-generation/).

Ao encomendar com ecrãs, o ideal é ele saber onde olhar e porque há problema aí.

## Conteúdo desta página

- Como anexar ecrãs com mais eficácia
- Como usar mockups / exportações Figma
- Problemas de volume de imagens no repositório e no Contexto

## Cenários de imagem de entrada

| Cenário | Prática |
|---|---|
| Bug de UI | Ecrã + descrição textual da zona anormal |
| Fidelidade ao design | Exportar PNG + indicar breakpoints e biblioteca de componentes |
| Quadro branco de arquitetura | Foto nítida ou exportação + legenda |
| Diálogo de erro | Texto de erro completo; evitar cortar só um canto |

Profundidade: [Prompt com imagens](/pt/prompts/prompting-with-images/)

## O que a imagem realmente acrescenta

O valor máximo da imagem é mostrar o que o texto descreve mal, por exemplo:

- Como é que este layout ficou torto
- Onde é que este botão ficou espremido
- O que é que este diálogo escreve de facto

Mas a imagem sozinha não diz automaticamente ao Codex:

- Em que bloco se foca mais
- Como espera que altere
- Se é «situação atual» ou «efeito desejado»

Por isso a imagem costuma precisar de uma frase direta a acompanhar.

## Requisitos de qualidade

- **Resolução**: texto legível; evitar miniaturas desfocadas
- **Recorte**: remover ambiente de trabalho irrelevante e informação sensível da barra de notificações
- **Anotação**: setas/círculos ok, mas repita os pontos-chave em texto
- **Várias imagens**: carregar em pares «atual / esperado»

## Mal-entendidos habituais

### 1. Enviar o ecrã ≠ ele compreende automaticamente o problema

O ecrã dá evidência visual, mas é melhor acrescentar:

- Onde está o problema
- No que quer mudar
- Qual é a atual e qual a alvo

### 2. Quanto maior a imagem, melhor — nem sempre

Imagens originais demasiado grandes trazem dois problemas:

- Demasiada informação irrelevante
- Volume do repositório ou do Contexto mais pesado

### 3. Só a imagem de design ainda não chega

Se for «implementar segundo a imagem», acrescente:

- Requisitos de breakpoints
- Restrições de componentes
- Onde pode improvisar e onde não

## Imagens no repositório

| Prática | Motivo |
|---|---|
| Diretório unificado `assets/` ou `docs/images/` | Mais fácil de manter |
| WebP/compressão | Controlar o volume do clone |
| Nomes com significado | `login-form-mobile.png` em vez de `image1.png` |
| Texto alt (na documentação) | Acessibilidade |

## Redação aplicável diretamente

Pode escrever assim:

```text
A primeira imagem é a página atual; a segunda é o efeito desejado.
Foque-se na zona do título do primeiro ecrã e no espaçamento dos botões.
Não adivinhe lógica de negócio a partir do ecrã; trate só visual e layout.
```

## Privacidade e segurança

- Ecrãs podem conter dados de clientes, URLs internas, Tokens — mascara primeiro
- Não envie ecrãs de configuração com segredos a Tarefas não fiáveis
- [Contexto sensível](/pt/guide/context/sensitive-context/)

## Referências
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
## Aceitação

Para Tarefas «implementar segundo a imagem»:

1. Compare lado a lado implementação e imagem de referência (ou abra a página com a [Ferramenta de browser](/pt/guide/tools/browser/))
2. Verifique responsivo e modo escuro (se exigido)
3. [Verificar Artefatos](/pt/guide/quality/verify-artifacts/)

## Erros habituais

- Só mockup, sem descrição de interação
- Commit direto de originais 4K
- Assumir que o modelo lê ligações Figma sem exportar

Um bom ecrã não é só «ter imagem». Imagem clara, foco claro, expectativa clara — a Tarefa acerta com mais facilidade.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / Cloud  
**Base de verificação:** Revista com materiais oficiais OpenAI sobre entrada de imagens e upload de ficheiros quanto a upload de ecrãs, anotações de foco, volume de ficheiros e cuidados de privacidade; o corpo não mantém passos de interface que exijam verificação versão a versão.  
**Última verificação:** 2026-07-26
