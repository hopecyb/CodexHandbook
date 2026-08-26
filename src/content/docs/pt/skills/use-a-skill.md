---
title: Usar um Skill
description: Disparo explícito e implícito de Skills, e como escrever um bom description.
locale: pt
source_locale: zh-CN
source_revision: fa190cf
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Quem começa com Skill costuma achar que «depois de instalar, ele ativa sozinho». Usar um Skill é fazer o Codex seguir um roteiro de trabalho já escrito.

O Skill pode ser chamado por você de forma **explícita**, ou **escolhido automaticamente** pelo modelo em cenários adequados. Separar esses dois disparos evita muita confusão na investigação.

# Usar um Skill

## Formas de disparo

1. **Explícito**: em ambientes com suporte, chame com `$skill-name` (nome igual ao `name` do frontmatter)
2. **Implícito**: o modelo avalia semanticamente pelo `description` se a Tarefa atual se aplica

## Como distinguir os dois

- **Disparo explícito**: você diz «use exatamente este Skill»
- **Disparo implícito**: você não nomeia, mas a descrição da Tarefa parece o cenário de aplicação

Ao testar Skills pela primeira vez, prefira o **disparo explícito**. Assim fica mais fácil julgar:

- Se o Skill foi reconhecido
- Se o comportamento é o esperado
- Se nome e descrição estão corretos

## Exemplo

```text
$pr-review Por favor revise minhas alterações ainda não commitadas
```

Ou em linguagem natural: «Revise o diff no estilo da equipe, com foco em testes.»

## Equívocos comuns

### 1. Escrevi o Skill, então ele dispara automaticamente

O disparo automático depende de um `description` claro e de a Tarefa atual se parecer o bastante com o cenário de aplicação.

### 2. Linguagem natural e `$name` têm sempre o mesmo efeito

Nem sempre.

`$name` é mais explícito — bom para validar e forçar o uso. Linguagem natural é mais conveniente, mas às vezes o modelo escolhe o Skill errado ou não usa nenhum.

### 3. Se o Skill não disparou, o problema é nele

Pode ser só:

- Nome errado
- `description` vago demais
- A descrição da Tarefa não bateu nas palavras de disparo

Na investigação, não olhe só se «o arquivo existe»; veja também se «está escrito como uma ferramenta que seria selecionada».

## Ordem comum de teste

Para validar uma vez:

1. Chame explicitamente com `$skill-name`
2. Veja se a saída corresponde ao esperado
3. Ajuste o `description`
4. Só então teste se a linguagem natural dispara

Assim você separa «problema no Skill em si» de «condições de disparo automático mal escritas».

## Escrever um bom description

- Deixe claro «quando usar» e «quando não usar»
- Inclua palavras-chave que o usuário pode dizer (review, release, changelog)
- Evite genéricos como «ajuda o usuário a escrever código»
- Coloque os cenários de disparo essenciais no **início** (a lista de Skills tem orçamento de caracteres)

## Como saber se o description está claro

Um critério útil:  
depois de ler o `description`, deve ficar óbvio «quando usar» e «quando não usar».

Se, após ler, ainda parecer que «serve para tudo», provavelmente está vago demais.

Mais conceitos em [Visão geral de Skills](/pt/skills/overview/).
---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base da Verificação:** O runtime atual do Codex ainda permite referência explícita pelo nome do Skill e matching automático em cenários adequados; o OpenAI Help *Skills in ChatGPT* também confirma que Skills são usados automaticamente quando ajudam. Esta página foca em formas de disparo e princípios de escrita.  
**Última Verificação:** 2026-07-26
