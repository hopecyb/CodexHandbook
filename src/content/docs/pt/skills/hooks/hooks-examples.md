---
title: Exemplos de configuração de Hook
description: Esqueletos adaptáveis de configuração e script Hook — scan de segredo, log de auditoria e validação de formato.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ao ler exemplos de Hook, confirme primeiro o que eles querem impedir; depois adapte ao seu ambiente.

Este capítulo traz configuração e scripts **ilustrativos** para adaptação em equipe. Nomes de campos e caminhos seguem a [documentação oficial](https://developers.openai.com/codex) e o `codex --help` local; teste num repositório isolado antes de copiar.

Leitura prévia: [Visão geral de Hooks](/skills/hooks/hooks-overview/) · [Tipos de evento Hook](/skills/hooks/hook-event-types/)

## Confirme o escopo antes de usar

Não trate estes exemplos como «resposta padrão» para copiar e colar.  
Veja-os como três moldes:

- Só registrar
- Bloquear primeiro
- Checagem leve de entrada primeiro

Entenda a ideia; depois decida se amplia.

## Exemplo 1: log de auditoria após chamada de ferramenta (só leitura)

**Objetivo:** registrar quem, quando e em quais caminhos fez escrita; se o mascaramento falhar, não gravar segredo em disco.

`hooks.json` (ilustrativo):

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`:

```bash
#!/usr/bin/env bash
# stdin: payload JSON (estrutura conforme a documentação oficial)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**Aceite:** após uma escrita de arquivo, o log tem uma linha; o código de saída do script é sempre 0.

Este tipo só registra, não muda comportamento — risco mais baixo, bom ponto de partida.

## Exemplo 2: bloquear suspeita de segredo antes da chamada

**Objetivo:** se o conteúdo do diff ou da escrita casar com padrão de chave de acesso AWS, `block`.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

Lógica central de `secret-scan.sh` (ilustrativa):

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**Aceite:** string de teste com `AKIA` é bloqueada; `git status` normal passa.

:::caution
Scan por regex tem falso positivo/negativo — só camada complementar; segredos reais devem passar por secret scanner e pre-commit, veja [Contexto sensível](/guide/context/sensitive-context/).
:::

Use este tipo depois de ter certeza de que quer barrar a ação real. Começar direto por Hook `block` encarece bastante a triagem.

## Exemplo 3: política de comprimento e palavras-chave no envio do Prompt

**Objetivo:** recusar frases que tentam sobrescrever instruções do sistema de forma óbvia (exemplo simplificado).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**Aceite:** excesso de comprimento e padrão detectado falham; Tarefa normal passa.

Neste tipo, no mínimo:

- Conseguir inspecionar a entrada
- Dar motivo de falha claro
- Não ferir pedidos normais de forma absurda

## Mesma origem das regras da equipe

Extraia «substrings de comando proibidas» para `tools/codex-policy.json`, lido em conjunto pelo Hook e pelas [regras de comando](/guide/customization/rules/command-rules/) — evite manter em dois lugares.

## Equívocos comuns

### 1. Se o exemplo roda, pode ir direto para produção

O valor do exemplo é estrutura e ideia — não ir ao ar sem adaptação.

### 2. Hook `block` não é automaticamente mais maduro que `log`

Muitas equipes começam por `log`, confirmam falsos positivos e performance, e só então sobem para `warn` ou `block`.

### 3. Exemplo de Hook não é só olhar o script

Além do script, veja:

- Em qual evento está pendurado
- Qual a estratégia de falha
- Se a equipe consegue explicar por que barra assim

## Testar Hook

```bash
# Testar script com fixture (ilustrativo)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## Ordem comum

Muitas equipes avançam assim:

1. Primeiro tipo log só leitura
2. Depois tipo warn
3. Depois tipo block

Assim fica mais fácil separar «lógica correta» de «a equipe realmente aceita barrar».

Exemplos de Hook servem para aprender ideia e estrutura — não para copiar intactos para o ambiente oficial.

## Erros comuns

- Script sem `chmod +x` — falha silenciosa
- `timeout_ms` curto demais — bloqueio falso
- Caminho de log sem permissão de escrita — falha toda a cadeia Hook
- `curl` no Hook enviando payload completo para fora

## Checklist de aceite

- [ ] Cada Hook tem teste com fixture correspondente
- [ ] Estratégia de falha (block/warn) alinhada à política da equipe
- [ ] Configuração e script no mesmo repositório, mesma revisão de PR
- [ ] Docs anotam data da Verificação e versão do CLI aplicável

## Fontes
- Exemplos OpenAI Codex Hooks
---

**Status:** outdated  
**Produtos aplicáveis:** CLI / App (conforme a versão)  
**Nota de revisão:** Esta página inclui estrutura de configuração Hook, nomes de evento, campos de payload e exemplos de script; esses exemplos dependem fortemente da implementação atual e carecem de base oficial pública estável o bastante.  
**Última Verificação:** 2026-07-26
