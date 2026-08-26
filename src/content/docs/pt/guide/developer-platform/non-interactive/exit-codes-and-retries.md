---
title: Códigos de saída e retries
description: Interpretar bem o sucesso ou a falha de codex exec no pipeline — quando fazer retry e quando falhar de imediato.
locale: pt
source_locale: zh-CN
source_revision: 40d81b7
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 40
reviewed_at: 2026-08-26
---

A CI depende do **código de saída do processo** para julgar se um passo teve sucesso. Este capítulo explica a semântica habitual de [codex exec](/pt/guide/developer-platform/non-interactive/codex-exec/), a estratégia de retries e o desenho idempotente.

## Conteúdo desta página

- Diferença entre código de saída e «a revisão não passou» ao nível de negócio
- Se fazer retry em erros 429 / de rede
- Como evitar efeitos secundários ao repetir a execução

## O que o código de saída te diz realmente

Se é a primeira vez, pensa no «código de saída» como um resultado breve que o programa deixa ao script e à CI quando a Tarefa termina.

Costuma não explicar muito; só diz ao pipeline:

- Desta vez conta como sucesso
- Ou conta como falha

O «retry» responde a outra pergunta: esta falha deve parar já, ou merece outra oportunidade?

:::note
A tabela concreta de códigos de saída é definida pela documentação oficial do CLI; a tabela seguinte são **princípios de desenho** para a integração.
:::

## Mal-entendidos frequentes

### Não há um só tipo de falha

Muitos principiantes tratam tudo o que não é `0` como a mesma falha.

Na prática há que distinguir pelo menos:

- A Tarefa partiu-se ao correr
- A política ou o Sandbox bloquearam-na
- Um serviço externo falhou de forma temporária
- Correu bem, mas a conclusão da revisão é «não passa»

O tratamento não é o mesmo; nem tudo se resolve com retry.

### «Retry automático» ≠ mais estabilidade

Se a causa da falha não desaparece ao repetir —Permissão insuficiente, regra que bloqueia, Prompt mau—, o retry só gasta tempo e quota.

## Semântica recomendada (conceito)

| Situação | Tratamento sugerido |
|---|---|
| `0` | A Tarefa terminou e cumpre o critério de sucesso do Prompt |
| Diferente de `0` e o log mostra rejeição de policy/sandbox | **Não** fazer retry às cegas; corrige configuração ou Prompt |
| Diferente de `0` e API 429/5xx | Retry limitado com backoff exponencial |
| Encontrou-se um P0 mas a execução teve sucesso | Usa `pass: false` da [saída estruturada](/pt/guide/developer-platform/non-interactive/structured-output/) + `exit 1` no script |

«Encontrou-se um problema de segurança» não deveria depender de uma exceção tipo crash: deve ser **explícito** com `pass: false` em JSON e o script envolvente decidir o código de saída.

## Template de retry (bash)

```bash
max=3
delay=10
for i in $(seq 1 $max); do
  if codex exec --cd . "$(cat "$PROMPT")"; then
    exit 0
  fi
  code=$?
  if [ "$code" -eq 2 ]; then
    echo "Policy error, not retrying" >&2
    exit "$code"
  fi
  sleep $((delay * i))
done
exit 1
```

Alinha os códigos «não retentáveis» com a documentação oficial e mete-os em ramos `case`.

## Idempotência e efeitos secundários

| Risco | Mitigação |
|---|---|
| Comentários duplicados no PR | Usar check run id ou «se já há comentário do bot, atualizar» |
| Escrita repetida de ficheiros | exec de revisão só de leitura por omissão; escrita em job aparte + portão humano |
| Notificações duplicadas | Webhook de notificação com chave de dedupe |

## Como decidir se não tiveres claro

Se não souberes se uma falha merece retry, pergunta-te:

1. Parece uma flutuação externa temporária?
2. Mesmo que volte a correr, gerará comentários, escritas ou notificações duplicadas?
3. A causa real é que alguém deve mudar configuração, Prompt ou Permissões?

Quanto mais perto de (1), mais sentido tem um retry limitado; quanto mais perto de (2) ou (3), mais convém parar e atacar a causa raiz.

## Erros frequentes

- Ignorar o código de saída; CI sempre green
- Retry sem limite em erros de política e queimar quota
- Retry sem fixar Prompt/git sha; resultados incomparáveis

Primeiro distingue «é uma falha temporária ou não melhorará ao repetir?» e depois decide. Nem toda a falha merece outra passagem.

## Lista de aceitação

- [ ] A CI falha perante códigos de saída diferentes de 0
- [ ] Há teto de retries e de backoff
- [ ] Distinguem-se «revisão não passou» e «a execução partiu-se»
- [ ] Os logs conservam informação suficiente para depurar

## Capítulos relacionados

- [Referência de erros](/pt/guide/reference/error-reference/)
- [Recuperação perante falhas](/pt/cases/workflows/failure-recovery/)

## Fontes de referência
- Guia de retries da API da OpenAI (conceito)
---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** A página dá conselhos de engenharia razoáveis sobre códigos de saída e retries, mas o exemplo assume semântica concreta (p. ex. `code=2`) e comportamento de `codex exec`; esses detalhes ainda carecem de base oficial vigente suficientemente sólida e devem verificar-se com a documentação nova do CLI antes de voltar a `verified`.  
**Última verificação:** 2026-07-26
