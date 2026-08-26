---
title: Verificação
description: Revisar Diff, rodar testes, validar fontes e definir critérios de conclusão.
locale: pt
source_locale: zh-CN
source_revision: 915ee03
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 17
---

# Verificação

O erro mais fácil na primeira vez com o Codex é **tratar «ele disse que terminou» como «terminou de verdade»**.

Verificação é: não olhar o que ele diz — olhar se o resultado realmente atende ao que você pediu.

A saída do Codex precisa ser verificável. Verificação não é passo opcional — faz parte do fechamento de cada Tarefa.

## O que a Verificação realmente olha

Seja alterando código, escrevendo docs ou pesquisando, no fim você responde à mesma pergunta:

> **Isto agora está «mais ou menos parecido» — ou «já pode ser entregue»?**

Muito retrabalho não vem de o modelo errar por completo, e sim de:

- Alterar o que não deveria
- Alterar só pela metade
- Dizer que consultou fontes, mas as fontes não são confiáveis
- A página abrir, mas o fluxo real não passar
- A documentação existir, mas não servir para um iniciante seguir

Por isso o papel da Verificação é **fechar o risco antes da entrega**.

## Equívocos comuns

### 1. Se roda, está concluído

«Roda» só diz que não quebrou de imediato — não significa:

- Lógica correta
- Alcance correto
- Sem regressão
- Conformidade com o resultado que você queria

### 2. Se o modelo diz «já verifiquei», pode relaxar

Você precisa ver **que Verificação ele fez de fato**. Por exemplo:

- Rodou testes de verdade?
- Leu o Diff de verdade?
- Abriu o Artefato e checou de verdade?
- Deu fontes rastreáveis?

### 3. Verificação é só para programadores?

Escrever artigos, montar tabelas, gerar configuração, organizar material, escrever descrição de PR — tudo precisa de Verificação. Só muda o método.

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

- [Revisar Diff](/pt/guide/quality/review-diffs/) — ler o Diff, confirmar alcance e risco
- [Rodar testes](/pt/guide/quality/run-tests/) — regressão automática
- [Verificar Artefatos](/pt/guide/quality/verify-artifacts/) — docs, configuração, gerados
- [Validar fontes](/pt/guide/quality/validate-sources/) — conclusões de pesquisa rastreáveis
- [Lidar com incerteza](/pt/guide/quality/handle-uncertainty/) — o que fazer quando o modelo está incerto
- [Definição de pronto](/pt/guide/quality/definition-of-done/) — o que significa «terminou»

## Tarefas diferentes, focos de Verificação diferentes

- **Alterar código**: olhar Diff, rodar testes, passar à mão pelos caminhos-chave
- **Escrever docs**: ver se serve ao leitor-alvo, se os links funcionam, se os passos realmente dão para seguir
- **Pesquisar**: ver se as fontes são reais e atuais, se a conclusão ultrapassa a evidência
- **Gerar configuração ou scripts**: ver premissas de ambiente, alcance de Permissão, como recuperar após falha

Se não souber por onde começar, leia por padrão [Definição de pronto](/pt/guide/quality/definition-of-done/).

Verificação existe para confirmar que o resultado realmente serve, que você se atreve a usar e que dá para entregar.

Como escrever critérios de aceite no Prompt: [Definir critérios de conclusão](/pt/prompts/define-done/). Casos ponta a ponta: [Casos práticos](/pt/cases/).

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** A página inicial da OpenAI Developers ainda enfatiza construir, testar, revisar e entregar mudanças com o Codex; esta página desmonta a Verificação em revisar Diff, rodar testes, validar fontes e definição de pronto, cruzada com os capítulos de qualidade do site.  
**Última verificação:** 2026-07-26
