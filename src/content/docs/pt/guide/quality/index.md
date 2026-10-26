---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: A página inicial da OpenAI Developers ainda enfatiza construir, testar, revisar e entregar mudanças com o Codex; esta página desmonta a Verificação em revisar Diff, rodar testes, validar fontes e definição de pronto, cruzada com os capítulos de qualidade do site.
  checkedAt: '2026-07-26'
title: Qualidade e Verificação
description: Revisar Diff, rodar testes, validar fontes e definir critérios de conclusão.
sidebar:
  order: 21
locale: pt
source_locale: zh-CN
source_revision: "90d62fb"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---


O erro mais fácil na primeira vez com o Codex é **tratar «ele disse que terminou» como «terminou de verdade»**.

Verificação é: não olhar o que ele diz — olhar se o resultado realmente atende ao que você pediu.

A saída do Codex precisa ser verificável. verificação não é passo opcional — faz parte do fechamento de cada tarefa.

![Ilustração: uma lupa examina linhas adicionadas e removidas de um diff, ao lado de uma lista com um item sinalizado e testes aprovados](/illustrations/verification.webp)

## O que a verificação realmente olha

Seja alterando código, escrevendo docs ou pesquisando, no fim você responde à mesma pergunta:

> **Isto agora está «mais ou menos parecido» — ou «já pode ser entregue»?**

Muito retrabalho não vem de o modelo errar por completo, e sim de:

- Alterar o que não deveria
- Alterar só pela metade
- Dizer que consultou fontes, mas as fontes não são confiáveis
- A página abrir, mas o fluxo real não passar
- A documentação existir, mas não servir para um iniciante seguir

Por isso o papel da verificação é **fechar o risco antes da entrega**.

## Equívocos comuns

### 1. Se roda, está concluído

«Roda» só diz que não quebrou de imediato — não significa:

- Lógica correta
- Alcance correto
- Sem regressão
- Conformidade com o resultado que você queria

### 2. Se o modelo diz «já verifiquei», pode relaxar

Você precisa ver **que verificação ele fez de fato**. Por exemplo:

- Rodou testes de verdade?
- Leu o diff de verdade?
- Abriu o Artefato e checou de verdade?
- Deu fontes rastreáveis?

### 3. verificação é só para programadores?

Escrever artigos, montar tabelas, gerar configuração, organizar material, escrever descrição de PR — tudo precisa de verificação. Só muda o método.

## Se ainda não tem um fluxo próprio, use esta ordem

Se ainda não tem fluxo próprio, comece por esta ordem:

1. Ver se o resultado desviou do tema
2. Ver se o alcance da mudança ficou grande demais
3. Rodar as checagens automáticas possíveis
4. Por último, com olhar humano: dá para entregar?

Dá para entender como:

- **A direção está certa?**
- **Alterou demais?**
- **A máquina já checou?**
- **A pessoa realmente se atreve a receber?**

## Temas centrais

- [Revisar diff](/pt/guide/quality/review-diffs/) — ler o diff, confirmar alcance e risco
- [Rodar testes](/pt/guide/quality/run-tests/) — regressão automática
- [Verificar Artefatos](/pt/guide/quality/verify-artifacts/) — docs, configuração, gerados
- [Validar fontes](/pt/guide/quality/validate-sources/) — conclusões de pesquisa rastreáveis
- [Lidar com incerteza](/pt/guide/quality/handle-uncertainty/) — o que fazer quando o modelo está incerto
- [Definição de pronto](/pt/guide/quality/definition-of-done/) — o que significa «terminou»
- [Uso, tempo e escolha do modelo](/pt/guide/quality/usage-time-and-model-choice/)
- [Avaliação de fluxos de trabalho e 20 amostras](/pt/guide/quality/workflow-evaluation/)

## tarefas diferentes, focos de verificação diferentes

- **Alterar código**: olhar diff, rodar testes, passar à mão pelos caminhos-chave
- **Escrever docs**: ver se serve ao leitor-alvo, se os links funcionam, se os passos realmente dão para seguir
- **Pesquisar**: ver se as fontes são reais e atuais, se a conclusão ultrapassa a evidência
- **Gerar configuração ou scripts**: ver premissas de ambiente, alcance de permissão, como recuperar após falha

Se não souber por onde começar, leia por padrão [Definição de pronto](/pt/guide/quality/definition-of-done/).

Verificação existe para confirmar que o resultado realmente serve, que você se atreve a usar e que dá para entregar.

Como escrever critérios de aceite no prompt: [Definir critérios de conclusão](/pt/prompts/define-done/). Casos ponta a ponta: [Casos práticos](/pt/cases/).
