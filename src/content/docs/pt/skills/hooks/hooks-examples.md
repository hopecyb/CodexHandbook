---
legacyVerification:
  status: "verified"
  products: "Ambientes que usam um host Codex local; a confiança é gerida com `/hooks` na Codex CLI"
  checkedAt: "2026-08-25"
title: Exemplos de configuração de Hooks
description: Implementar uma proteção PreToolUse testável com um hooks.json real e um script Python da biblioteca padrão.
locale: pt
source_locale: zh-CN
source_revision: "06e9fa2"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

Este capítulo removeu os nomes de eventos e campos de configuração ilustrativos da versão anterior. O exemplo segue a estrutura oficial atual de `hooks.json` e inclui testes executáveis.

Os arquivos completos estão em [`examples/hooks/secret-guard/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/hooks/secret-guard).

## Objetivo e limites

O objetivo é recusar, antes da execução da ferramenta, uma entrada de comando `Bash` ou `apply_patch` que contenha uma cadeia de teste semelhante a um AWS Access Key ID.

O exemplo demonstra apenas a estrutura de entrada, saída e testes de um Hook:

- Não substitui um scanner profissional de segredos.
- A expressão regular pode produzir falsos positivos e falsos negativos.
- Não analisa ferramentas alojadas.
- Não deve registar a entrada completa da ferramenta.

## 1. Configurar hooks.json

```json
{
  "description": "Block obvious secret-shaped strings before local writes.",
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash|apply_patch",
        "hooks": [
          {
            "type": "command",
            "command": "python3 \"$(git rev-parse --show-toplevel)/examples/hooks/secret-guard/pre_tool_use_guard.py\"",
            "timeout": 3,
            "statusMessage": "Checking tool input for secret-shaped strings"
          }
        ]
      }
    ]
  }
}
```

Num repositório real, costuma colocar-se a configuração em `.codex/hooks.json` e o script em `.codex/hooks/`. Aqui mantém-se o caminho examples para poder testar diretamente todo o material do repositório do manual.

## 2. Saída de recusa

O script lê o JSON do evento por stdin e verifica apenas `tool_input.command`. Se encontrar uma correspondência, produz:

```json
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Secret-shaped string blocked by example hook."
  }
}
```

Se não houver correspondência, termina com código `0` sem produzir saída. Texto simples em stdout não constitui uma decisão `PreToolUse` válida.

## 3. Executar os testes

```bash
python3 -m unittest discover examples/hooks/secret-guard -p 'test_*.py'
```

Resultado esperado: três testes passam, cobrindo um comando normal, uma credencial suspeita e um `tool_input` que não é um dicionário.

Também pode fornecer manualmente uma fixture:

```bash
printf '%s\n' '{"hook_event_name":"PreToolUse","tool_name":"Bash","tool_input":{"command":"git status"}}' \
  | python3 examples/hooks/secret-guard/pre_tool_use_guard.py
```

Uma entrada normal não produz nada em stdout.

## 4. Ativar num projeto

1. Coloque a configuração e o script no repositório de destino e altere o caminho para outro estável dentro desse repositório.
2. Execute os testes unitários e um comando normal real num repositório isolado.
3. Inicie o Codex e abra `/hooks` para rever a origem e a definição exata.
4. Depois de confiar no Hook, verifique separadamente que um comando normal passa e que a cadeia de teste é recusada.
5. Volte a rever após alterar o script; uma mudança no hash faz com que um Hook não administrado regresse ao estado de confiança pendente.

## Passar do aviso ao bloqueio

Em produção, as equipas começam geralmente por auditoria ou contexto adicional sem bloqueio e só depois passam a `deny`. Antes dessa mudança, responda pelo menos a estas perguntas:

- As fixtures cobrem os falsos positivos conhecidos?
- Um timeout ou falha do script é compreensível para o usuário?
- A regra também é assegurada pela CI ou por uma política do serviço?
- Os meios de contorno e a recuperação de emergência são auditáveis?

## Fonte oficial

- [OpenAI: configuração de Hooks e saída PreToolUse](https://learn.chatgpt.com/docs/hooks)
