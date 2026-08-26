---
title: IA e modelos de linguagem
description: Entenda como o modelo de linguagem gera respostas com base no Contexto.
locale: pt
source_locale: zh-CN
source_revision: 1951620
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

O modelo de linguagem **prevê a saída mais razoável a seguir** com base no texto, nos arquivos e nos resultados de Ferramentas que você fornece. Ele é muito bom em completar, organizar, redigir e seguir o Contexto — mas não conhece por natureza o que você não deu, e não garante estar totalmente correto sempre.

O modelo não lê mentes e não entende seu projeto por natureza; só pode continuar gerando um resultado «que parece razoável» a partir da informação que você entregou.

Isso também explica por que:

- Sem Contexto-chave, ele tende a adivinhar
- Com informação conflitante, ele tende a desviar
- Ele pode ajudar a redigir, organizar e analisar — mas você não pode terceirizar totalmente a correção

## O que ele está fazendo

Dá para ver o modelo de linguagem como um sistema especialmente bom em continuar a conversa, organizar e completar.

Ele vê:

- A descrição da sua Tarefa
- Os arquivos que você deu
- Os resultados devolvidos pelas Ferramentas

E, com base nisso, produz o próximo passo que considera mais adequado.

Ele está avançando a partir do Contexto atual — não «sabe a resposta» de forma independente.

## O que isso significa para quem usa

- **A qualidade da entrada define o teto**: objetivo vago → saída tende a desviar
- **O Contexto é limitado**: histórico longo demais pode ser compactado ou cortado; veja [Token, Contexto e Compactação](/pt/guide/foundations/tokens-context-and-compaction/)
- **É preciso verificar**: sobretudo números, questões legais, segurança e conteúdo para publicação externa

## Mal-entendidos comuns

### 1. Se ele é tão inteligente, deveria saber sozinho o contexto que eu não disse

Em geral, não.

Ele talvez adivinhe — mas não conte que vai acertar por padrão.  
Informação que está na sua cabeça e não foi entregue a ele costuma ser exatamente o ponto mais fácil de errar.

### 2. Se ele escreve código ou documentação, é porque realmente entendeu

Não necessariamente.

Muitas vezes ele só gera algo que *parece* certo. «Parecer» não equivale a corresponder de fato ao seu projeto, ambiente e objetivo.

### 3. Com o modelo de linguagem, não preciso julgar eu mesmo

Você precisa julgar ainda mais:

- Ele entendeu a Tarefa?
- Ele está adivinhando?
- A conclusão precisa de Verificação?

## Diferença em relação a um «mecanismo de busca»

O mecanismo de busca devolve sobretudo páginas já existentes; o Codex se parece mais com **chamar Ferramentas e gerar mudanças executáveis** sob o seu objetivo. Nos dois casos, você precisa julgar a confiabilidade.

Onde o modelo de linguagem é mais útil: depois de receber Contexto suficiente, ele consegue seguir rápido o seu objetivo e continuar o trabalho.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica o princípio básico de geração com base no Contexto; links internos e formulações conceituais foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26
