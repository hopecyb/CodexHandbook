---
title: Revisão de código no Cloud e no GitHub
description: Reveja o diff do Cloud e use o Codex no GitHub para uma revisão complementar focada nos problemas importantes.
legacyVerification:
  status: "verified"
  products: "Cloud、GitHub"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: ea6796a
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 50
---

Quando uma tarefa Cloud termina, apresenta um resumo e um diff. Pode fazer perguntas de seguimento, pedir alterações ou criar um PR. A conclusão da tarefa não equivale a uma aprovação da fusão: ainda são necessários o CI, as proteções de branch e o julgamento humano do projeto.

## Dois tipos de revisão

| Tipo | O que examina | Resultado |
|---|---|---|
| Revisão do resultado Cloud | Resumo, registos e diff desta tarefa | Decidir se é preciso continuar ou criar um PR |
| GitHub Codex review | Diff do PR num repositório ligado e regras de `AGENTS.md` | Publicar uma code review no GitHub |

Num PR do GitHub, deixe o comentário:

```text
@codex review
```

O Codex publica as conclusões como uma revisão normal do GitHub. A documentação oficial atual indica que os comentários no GitHub se concentram em problemas P0/P1 de prioridade elevada; se não encontrar problemas, poderá deixar apenas uma reação. Poucos comentários não são motivo para dispensar a revisão humana.

## Ordem de revisão

1. **Âmbito**: os ficheiros, diretórios, dependências e artefactos gerados correspondem à tarefa?
2. **Comportamento**: os caminhos normais, de falha e de fronteira cumprem os requisitos?
3. **Segurança**: verificar autenticação, autorizações, tratamento de entradas, credenciais e acesso de rede de saída.
4. **Provas**: que testes foram realmente executados e as falhas foram comunicadas?
5. **Reversibilidade**: é possível reverter a alteração num âmbito pequeno, ou inclui refatorações sem relação?

Exemplo de prompt:

```text
Revê este PR e comunica apenas problemas que possam causar comportamento
incorreto, corrupção de dados, falhas de segurança ou regressões de
compatibilidade. Cada conclusão deve incluir gravidade, localização exata,
condição que a desencadeia e impacto. Não classifiques preferências de estilo
como defeitos.
```

## Regras específicas do repositório

Acrescente ao `AGENTS.md` do diretório aplicável:

```md
## Regras de revisão de código

### Limites da autenticação

- Assinalar qualquer caminho que registe tokens de acesso ou os envie para
  hosts fora da lista de permitidos. Caminho seguro: manter os tokens no
  gestor de credenciais e ocultá-los nos resultados de diagnóstico.
```

As regras na raiz abrangem todo o repositório; um `AGENTS.md` aninhado pode acrescentar verificações próprias de um serviço. Comece com duas ou três regras estáveis que expliquem o caminho seguro, em vez de uma lista extensa de nomes de funções que envelhecem depressa.

## Limites da revisão automática

Quem possuir as permissões necessárias de push ou administração no GitHub pode ativar reviews automáticas para um repositório em Codex Settings. A revisão automática é uma barreira complementar e não deve ter autorização para fazer merge automaticamente. Em repositórios de risco elevado, mantenha required reviewers, CI e proteção de branches.

## Lista de aceitação

- [ ] Uma pessoa leu o diff da lógica principal.
- [ ] As conclusões P0/P1 foram corrigidas ou o risco foi aceite por escrito.
- [ ] O CI passou e as repetições após falhas são explicáveis.
- [ ] Não há Secrets, artefactos gerados inesperados ou alterações de lockfile sem relação.
- [ ] A descrição da tarefa, a descrição do PR e as alterações reais são coerentes.

## Fontes oficiais

- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [Revisão de código entre clientes](https://learn.chatgpt.com/docs/code-review)
