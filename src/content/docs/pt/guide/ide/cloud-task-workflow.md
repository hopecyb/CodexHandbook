---
title: Tarefas Cloud no IDE
description: Delegar Tarefas Cloud a partir do IDE, acompanhar o estado e rever o resultado remoto.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Algumas integrações IDE permitem **delegar a Tarefa para a Cloud**. A Tarefa corre num ambiente remoto padronizado; pode continuar a editar localmente ou simplesmente sair do computador. O fluxo é semelhante ao Cloud/Web puro; a diferença é que a entrada está no lado do editor.

## Conteúdo

- Quando enviar uma Tarefa Cloud a partir do IDE em vez de ficar só no local
- O que preparar antes e depois de delegar
- Como trazer o Diff remoto de volta para revisão local

## Cenários adequados

| Adequado para Cloud | Manter no local |
|---|---|
| Instalação de dependências pesada, ambiente difícil de reproduzir | Alterar duas linhas depressa |
| Precisa de fazer push de ramo / abrir PR | Sem ligação ao GitHub |
| Execução longa, quer notificações de Aprovação no telemóvel | Inclui rascunhos sensíveis ainda não commitados na máquina |

Conceitos: [Local e Cloud](/guide/foundations/local-vs-cloud/)

## Quando este fluxo encaixa

Este fluxo é comum quando:

- Costuma trabalhar no IDE
- Mas a Tarefa em si corre melhor num ambiente remoto

Ou seja: continua a trabalhar no IDE, mas o ambiente de execução já passou para remoto.

## Pré-requisitos

- [ ] [GitHub ligado](/guide/web-and-cloud/connect-github/)
- [ ] [Ambiente](/guide/web-and-cloud/cloud-environments/) Cloud e [Secrets](/guide/web-and-cloud/secrets-and-variables/) configurados (se a Tarefa precisar)
- [ ] Mudanças locais já commitadas, ou deixado claro que «o ramo remoto manda»

**O IDE não substitui o acesso da Cloud aos commits locais que ainda não fez push.**

## Mal-entendidos frequentes

### 1. Se clicar em «correr na Cloud» no IDE, leva automaticamente tudo o que está na máquina?

Não.  
A Tarefa remota vê o repositório remoto, o ambiente remoto e o que lhe entregou de forma explícita.

### 2. Como a entrada está no IDE, é quase igual a uma Tarefa local?

Também não.  
O ponto de partida está no IDE, mas os limites de execução, o ambiente e o conteúdo visível continuam a ser os da Cloud.

### 3. Correr na Cloud e terminar não significa que a revisão passou

Concluir remotamente só quer dizer que a Tarefa terminou lá; não quer dizer que a review local, os testes e a confirmação final já estão feitos.

## Fluxo recomendado

```text
1. No IDE, escreva a descrição da Tarefa (objetivo, ramo, restrições, aceitação)
2. Escolha «correr na Cloud» ou entrada equivalente (conforme a UI do produto)
3. Confirme o plano (se o modo plan estiver ativo)
4. Saia ou continue o trabalho local → acompanhe o progresso nas notificações / painel
5. Depois do remoto: veja o Diff na Web/App → abra PR ou faça pull do ramo para local
6. Corra testes locais + review humana → faça merge
```

Detalhes de abrir PR: [Criar Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Uma ordem habitual

Na primeira Tarefa Cloud a partir do IDE, pode seguir esta ordem:

1. Confirmar se as mudanças locais já foram commitadas ou se deliberadamente não as leva
2. Confirmar que GitHub, Secrets e ramo estão prontos
3. Iniciar a Tarefa com objetivo, alcance e critérios de aceitação claros
4. Depois do remoto, voltar a ver o Diff
5. Completar localmente testes e revisão humana

A diferença central entre Tarefa Cloud no IDE e Tarefa local está no ambiente de execução ser remoto ou não.

## Relação com a delegação na App de desktop

As [Tarefas locais e Cloud](/guide/desktop-app/local-and-cloud-tasks/) da App de desktop e a delegação no IDE partilham o mesmo backend Cloud; a diferença está sobretudo na **UI de entrada e nos anexos de Contexto** (o IDE pode anexar um resumo da seleção atual).

## Fronteira de segurança

- As Permissões da Tarefa Cloud estão limitadas pelo alcance da ligação GitHub e pelas políticas da organização
- Não cole chaves de produção na descrição da Tarefa; use [Secrets](/guide/web-and-cloud/secrets-and-variables/)
- Antes do merge, continue a exigir [revisão humana](/guide/web-and-cloud/code-review/)

## Erros comuns

- Depois de delegar, continuar a alterar o mesmo ficheiro na máquina e entrar em conflito com o ramo remoto
- Não indicar o nome do ramo e fazer push direto para um ramo partilhado
- Tratar o resultado Cloud como «já aceite» e saltar o CI

---

**Estado:** outdated  
**Produtos aplicáveis:** IDE / Cloud  
**Nota de revisão:** Esta página descreve de forma concreta a capacidade e o fluxo atuais de «delegar Tarefas Cloud a partir do IDE, recuperar Diff e acompanhar localmente», mas o material oficial vigente não basta para provar item a item a forma concreta dessa experiência; convém marcá-la como `outdated` até completar a documentação formal IDE/Cloud.  
**Última verificação:** 2026-07-26
