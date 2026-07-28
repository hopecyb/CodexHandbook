---
title: Revisão de código Cloud
description: Rever o Diff, o PR e as sugestões de revisão automática que produz uma Tarefa Cloud.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O Cloud ajuda-te a produzir alterações, mas não assume por ti a responsabilidade do merge.

Após uma Tarefa Cloud, a **revisão humana** continua a ser o último portão antes do merge. Esta página explica como rever o que o Agent remoto produz e como encaixá-lo com PR de GitHub, CI e revisão com Skill.

## Conteúdo

- Em que se diferencia rever um PR Cloud de um local
- Lista de revisão e pontos de risco habituais
- Como usar o Codex para ajudar a rever sem ceder a responsabilidade

## Porque a revisão Cloud pede um pouco mais de atenção

Porque o Agent remoto cai com mais facilidade em:

- Alterar ficheiros não relacionados «de passagem»
- Gerar alterações massivas de lockfile ou ficheiros gerados por diferenças de ambiente
- Parecer que correu testes sem cobrir a lógica-chave
- Escrever uma descrição de PR muito completa que ainda não verificaste

Assim, a revisão Cloud não é mais leve: há que agarrar os pontos-chave.

## Onde a revisão encaixa no fluxo

```text
Tarefa Cloud terminada → push de branch → abrir PR
        ↓
CI (testes, lint, scan de segurança)
        ↓
Revisão humana do Diff + revisão auxiliar opcional do Agent
        ↓
Aprovar merge (sujeito a proteção de branches)
```

Abrir PR: [Criar Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Critério mínimo de verificação

Antes de uma revisão completa, confirma pelo menos quatro coisas:

1. Se o alcance da alteração se desviou
2. Se a lógica-chave mudou de verdade segundo o objetivo
3. Se os testes ou a Verificação se fizeram de verdade
4. Se entrou informação sensível ou uma alteração perigosa

Sem isso, «Tarefa terminada» não equivale a «pode fazer-se merge».

## Lista de revisão humana

Alinhada com [Rever Diffs](/guide/quality/review-diffs/); no Cloud presta atenção extra a:

| Verificação | Motivo |
|---|---|
| Alterou ficheiros não relacionados? | O Agent remoto pode refatorar «de passagem» |
| lockfile / ficheiros gerados | Diferenças de ambiente → alterações massivas |
| Origem de dependências novas | Risco de cadeia de fornecimento |
| Os testes cobrem de verdade a lógica nova? | O Agent pode escrever testes vazios |
| Alterações de Permissão e autenticação | Elevação de privilégios, token hardcoded |
| Alinhado com o alcance do issue | Evitar scope creep |

## Mal-entendidos frequentes

### 1. CI a verde implica que se pode fazer merge?

A CI só diz «este conjunto de verificações automáticas não falhou». Se o requisito se compreendeu bem, se o alcance se desviou e se o risco é aceitável continua a ser juízo humano.

### 2. Se a descrição do PR que escreveu é completa, posso olhar menos?

Também não.

A descrição do PR mete-te mais depressa no Contexto; não substitui verificar os factos.

### 3. Pedir ao Codex outra revisão equivale a ter revisto?

A revisão auxiliar é útil, mas a responsabilidade final continua a ser humana.

## Usar o Codex para ajudar a rever (sem substituir a pessoa)

Aceitável:

- Correr o Skill `$pr-review` em local ou Cloud sobre o PR novo (ver [Criar o teu primeiro Skill](/skills/create-your-first-skill/))
- Pedir opiniões em três classes: «bloqueante / sugestão / nit»
- **Tu** confirmas um a um os bloqueantes

Não aceitável:

- Fazer merge só porque o Agent «diz que não há problema» sem ler o Diff
- Deixar que o Agent aprove sozinho um branch protegido

Ver [Verificação e revisão humana](/guide/foundations/verification-and-human-review/)

## Ordem sugerida

Podes olhar nesta ordem:

1. Título e descrição do PR; confirmar o objetivo
2. Diff da lógica principal
3. Testes, ficheiros gerados, configuração
4. Comentários automáticos e sugestões complementares

Assim evitas afogar-te de entrada em detalhes.

## Comentários de review que impulsam a revisão

Quando o PR recebe comentários de review:

1. Abre uma Tarefa Cloud ou local nova: «trata só estes comentários de review; não amplies o alcance»
2. Anexa ligações ou números de comentário
3. Faz push de um commit novo ao mesmo PR
4. Volta a correr CI + olha a olho o delta

Lado GitHub: [Integração com GitHub](/guide/integrations/github/)

## Combinar com Automations

- Ao abrir o PR, correr automaticamente o Skill de revisão (só comentar, não merge)
- Detalhe em [Tarefas agendadas e disparadas](/skills/automations/scheduled-tasks/)

## Erros frequentes

- Confiar no «isolamento» do Ambiente Cloud e saltar a revisão de segurança
- Fazer merge de um Diff enorme porque «a CI está verde»
- Colar em comentários de review logs de produção sem desensibilizar
- Tomar «não encontrei problemas» por «de verdade não há problemas»

## Lista de aceitação

- [ ] CI toda verde e compreendes o histórico de retries falhados
- [ ] Pelo menos uma pessoa leu o Diff da lógica principal
- [ ] Alinhado com o alcance do issue/descrição da Tarefa
- [ ] Sem Secrets no repo

## Fontes de referência
- [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/)
---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud / GitHub  
**Nota de revisão:** O princípio de que a entrega Cloud continua a precisar de revisão humana é correto, mas esta página escreve de forma bastante concreta o PR Cloud, a abertura automática, o ritmo de revisão remota e as notificações; essas formas de integração Cloud/GitHub mudam depressa e há que reescrevê-las segundo o fluxo oficial mais recente.  
**Última verificação:** 2026-07-26
