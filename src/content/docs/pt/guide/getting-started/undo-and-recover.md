---
title: Desfazer e recuperar
description: Volte com segurança quando o resultado não satisfizer.
locale: pt
source_locale: zh-CN
source_revision: 5e7a06e
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App / CLI / IDE
  basis: Revisado com os capítulos introdutórios já verificados sobre aprovações, análise de resultados, recuperação de falhas e Git/área de trabalho. Esta página confirma apenas o método estável «pausar, conferir o escopo, priorizar desfazer e voltar a um estado seguro», sem tratar a função de desfazer de um cliente como contrato fixo.
  checkedAt: '2026-07-26'
---

Na primeira vez com o Codex, muita gente teme: se ele alterar errado, ainda consigo voltar?

Na maioria dos casos, sim — mas é melhor reverter pelo método seguro.

Quando o resultado ultrapassa o alcance ou a qualidade não serve:

1. Use a capacidade de desfazer / restaurar mudanças do cliente (conforme a UI atual)
2. Se o projeto estiver sob Git: descarte mudanças na área de trabalho do jeito que você conhece (iniciantes podem ainda não usar Git e depender do diretório de prática)
3. Abra uma Thread nova, aperte as restrições e tente de novo

Muitas vezes, reduzir o alcance de antemão economiza esforço — por exemplo mexer em poucos arquivos, escrever o que é proibido, ver o plano antes de executar.

## Separar «desfazer» e «recuperar»

- **Desfazer**: reverter a mudança insatisfatória de agora há pouco
- **Recuperar**: trazer o projeto de volta a um estado que você confirma como seguro

Se a prática for um arquivo pequeno, desfazer em geral não é difícil. Casos mais complicados:

- Ele alterou mais de um arquivo
- Você também alterou algumas coisas à mão depois
- Você já não lembra qual parte quem alterou

Pause novas alterações e reduza o alcance do impacto.

## Ordem de tratamento quando a primeira vez der errado

1. Pause novas alterações — não deixe o pânico fazer ele alterar ainda mais
2. Confirme primeiro quais arquivos ele alterou
3. Se o produto tiver desfazer, priorize o desfazer
4. Se o projeto já estiver sob Git, use o método Git que você conhece para reverter
5. De volta ao estado seguro, dê de novo uma instrução mais clara

## Se não domina Git, comece assim

Muitos iniciantes se assustam com «recuperar», achando que precisam dominar muitos comandos Git. No começo não precisa.

Faça assim primeiro:

- Pratique no diretório de prática
- Deixe-o alterar só um arquivo pequeno por vez
- Se o resultado não satisfizer, desfaça direto

Quando for lidar com projetos oficiais, aí aprenda o rollback com Git de forma sistemática.

## Prevenir importa mais do que remediar

Estas práticas reduzem claramente a chance de «alterar errado e ficar difícil de limpar»:

- Escrever com clareza «alterar só qual arquivo»
- Pedir o plano antes de executar
- Verificar a cada passo — não acumular muitas mudanças para olhar juntas
- Confirmar antes de operações de alto risco

## Usar pontos de recuperação como exploração

Recuperar não serve só para corrigir erros. Também ajuda antes de explorar alternativas.

Bons momentos:

- Comparar duas direções de implementação
- Pedir a um Agent um refactor amplo
- Testar scripts de automação ou substituições em lote
- Achar que o requisito pode mudar em breve

Uma sequência mais segura é:

```text
Confirmar o estado seguro atual
→ Pedir ao Codex que informe quais arquivos serão afetados
→ Criar um ponto de recuperação ou conferir o estado do Git
→ Executar uma mudança pequena
→ Revisar o diff e os resultados de verificação
→ Manter, reverter ou tentar outra abordagem
```

Se o cliente oferecer checkpoints ou recurso de replay, você pode priorizar essas funções integradas. Em um projeto Git, branch, stash ou um commit pequeno também podem servir como ponto de recuperação. O essencial não é decorar um comando, mas evitar ampliar as mudanças enquanto seu impacto ainda não está claro.

Errar em si não é terrível. Continuar alterando sem conhecer o alcance torna a recuperação mais difícil.
