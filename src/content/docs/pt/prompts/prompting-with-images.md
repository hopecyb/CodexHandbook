---
title: Prompts com imagens
description: Como perguntar quando envia capturas, designs ou quadros brancos ao Codex, para obter resultados executáveis.
locale: pt
source_locale: zh-CN
source_revision: 979c08c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Muitas falhas de «trabalhar a partir da imagem» não vêm de o modelo não ver — vêm de enviar só a imagem **sem dizer o que deve observar nela**.

O foco de um Prompt com imagem é estabelecer três coisas para o Codex:

1. o que é esta imagem
2. onde você quer atenção
3. a que tarefa o resultado final deve servir

## Cenários em que Prompts com imagens ajudam

| Cenário | Papel da imagem |
|---|---|
| Diagnóstico de bug de UI | Mostrar posição e estado anómalos |
| Implementação a partir do design | Referência de layout, hierarquia, espaçamento e atmosfera |
| Capturas para documentação | Base para escrever explicações ou tutoriais a partir da interface |
| Organizar quadro branco / fluxograma | Transformar desenho à mão em descrição estruturada |
| Comparar atual vs. esperado | Identificar diferenças em vez de adivinhar o pedido |

Se o foco é «aparência, posição, estado visual», imagens costumam superar longos textos; se o foco é «regras de negócio», a imagem é sobretudo evidência auxiliar.

## Estrutura em quatro blocos

Recomenda-se a mesma estruturação dos Prompts em texto:

### 1. Identidade da imagem

Diga o que é e de onde vem.

Por exemplo:

```text
Isto é uma captura da página de login em produção, no Safari do iPhone 14.
```

### 2. Região de atenção

Indique onde olhar; não termine com «encontre o problema sozinho».

Por exemplo:

```text
Foque no espaçamento entre o botão inferior e o campo de texto, e nas mudanças de layout quando o teclado aparece.
```

### 3. Objetivo da tarefa

Diga o que fazer: analisar, reproduzir, alterar código, escrever documentação, produzir tabela de comparação.

Por exemplo:

```text
Analise primeiro as causas possíveis; não altere código já. Indique 2–3 arquivos front-end mais provavelmente relacionados.
```

### 4. Formato de saída

Diga que resultado quer; evite generalidades.

Por exemplo:

```text
Saída:
1. O que observou na imagem
2. Causas possíveis
3. Arquivos sugeridos para inspeção
4. Capturas adicionais de que ainda precisa
```

## Três templates comuns

### 1. Ver a imagem e achar o problema

```text
Enviei uma captura da página atual. Foque na área do retângulo vermelho.
Descreva primeiro a anomalia observada e depois liste 2–3 causas possíveis.
Não modifique código ainda.
```

### 2. Implementar a partir da imagem

```text
Enviei o design-alvo.
Com base nesta imagem, resuma a estrutura da página, componentes-chave, pontos responsivos e estilo visual.
Se começar a implementar, priorize estrutura e hierarquia; não acrescente funcionalidades por conta própria.
```

### 3. Comparação atual vs. esperado

```text
Vou enviar duas imagens: a primeira é o efeito atual; a segunda é o efeito esperado.
Compare diferenças de layout, hierarquia tipográfica, espaçamento e sugestões de interação, e priorize as correções.
```

## Que texto acrescentar para ver melhor

A imagem costuma carecer de contexto de execução; estes dados ajudam:

- dispositivo ou browser
- se o estado inclui hover / focus / erro
- posição de scroll da página
- se é «efeito atual» ou «efeito-alvo»
- se deve respeitar um design system existente

Uma frase como «no Chrome desktop está bem; só no Safari iOS falha» vale muitas vezes mais do que outra captura.

## Como enviar várias imagens

### Faça «entradas em par»

Formas úteis:

- imagem atual
- imagem esperada

ou:

- estado normal
- estado anómalo

Não envie um monte de imagens sem legenda e deixe o Codex adivinhar a ordem.

### Dê um papel a cada imagem

Por exemplo:

```text
Figura 1: efeito atual no desktop
Figura 2: efeito atual no mobile
Figura 3: efeito-alvo do design
```

Assim fica mais fácil mapear as correspondências.

## Erros mais comuns em Prompts com imagens

### Só dizer «faça conforme isto»

O Codex tenta inferir todos os requisitos da imagem e trata detalhes irrelevantes como obrigatórios.

### Só um recorte, sem contexto

O recorte mostra o ponto problemático, mas pode omitir o estado da página, efeitos responsivos ou se é um overlay.

### Tratar o design como especificação completa

O design expressa aparência; raramente cobre origem de dados, casos limite e lógica de interação. Regras de negócio ainda precisam de texto.

### Achar que a imagem substitui a aceitação

Mesmo implementando a partir da imagem, no fim há que ver página real, diff, breakpoints e usabilidade. A imagem é entrada, não resultado de aceitação.

## Como combinar com outras páginas

- Enviar e gerir arquivos de imagem: [Imagens e capturas](/pt/guide/files-and-artifacts/images-and-screenshots/)
- Gerar imagens novas: [Geração de imagens](/pt/guide/tools/image-generation/)
- Formular a tarefa completa: [Anatomia de uma tarefa](/pt/prompts/task-anatomy/)
- Analisar antes de agir: [Pedir um plano primeiro](/pt/prompts/ask-for-a-plan/)

## Uma experiência prática

Se quiser que o Codex «veja a imagem como numa revisão de design», peça primeiro **observação**, depois **julgamento**, e só no fim **sugestões**.

Por exemplo:

```text
Descreva primeiro só o que observou na imagem; não tire conclusões.
Depois estime a causa mais provável.
Por fim sugira a direção da alteração.
```

Costuma ser mais claro do que «ajuda-me a corrigir», e facilita o passo seguinte.

## Fontes de referência
- OpenAI Help Center: ChatGPT Image Inputs FAQ
- OpenAI Academy: Working with files in ChatGPT
- OpenAI API Developer Quickstart: Analyze images and files
---

**Estado:** verified  
**Produtos aplicáveis:** App / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Estrutura, cenários e cuidados foram revistos com base em material oficial da OpenAI sobre entrada de imagens e upload de arquivos; o corpo já não depende de fontes de cenário não oficiais e não retém detalhes de interface que exigem verificação versão a versão.
