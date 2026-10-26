---
title: Delegar e acompanhar
description: Inicie uma tarefa Cloud capaz de avançar autonomamente e use a mesma conversa para corrigir a direção e verificar o resultado.
legacyVerification:
  status: "verified"
  products: "Cloud、App、IDE、CLI"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: "38b322f"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
sidebar:
  order: 60
---

Delegar não é «atirar o problema para longe». É entregar objetivo, restrições, ambiente e critérios de conclusão a uma conversa Cloud independente. A tarefa pode decorrer em segundo plano enquanto consulta registros, acrescenta contexto, pede alterações e, no fim, revê o diff.

## Quando faz sentido delegar

- A tarefa exige uma compilação ou testes demorados.
- As entradas já se encontram num repositório remoto.
- O ambiente pode ser recriado por scripts.
- A tarefa pode avançar independentemente do trabalho atual.
- Está disposto a rever o resultado antes de qualquer merge, em vez de o fundir diretamente.

Mantenha no ambiente local as tarefas que dependem de alterações ainda não submetidas, de um serviço no seu computador ou de intervenção humana contínua.

## Um pedido de delegação completo

```text
Objetivo: corrigir o problema #42, em que um pedido de início de sessão
continua a ocupar uma ligação após 30 segundos.
Ponto de partida: branch fix/42-timeout em acme/api.
Âmbito: packages/auth/** e os testes correspondentes.
Proibido: atualizar dependências, alterar a API pública ou fazer push para main.
Verificação: pnpm test --filter auth; pnpm typecheck.
Conclusão: mostrar a causa raiz, o diff, os comandos e os respetivos códigos
de saída; não fazer merge automaticamente.
```

Depois de iniciar, confirme que o ambiente e a branch estão corretos. Durante a execução, só faça um pedido de seguimento se faltar uma premissa ou se a tarefa se estiver a desviar:

```text
Restrição adicional: não alteres o cliente HTTP global. Limita a correção
ao auth adapter. Antes de continuar, explica como isto muda o plano atual.
```

A mesma conversa conserva o contexto e serve para corrigir o mesmo objetivo. Para um objetivo completamente independente, abra outra conversa. tarefas paralelas não devem escrever na mesma branch nem no mesmo conjunto de arquivos.

## Quando o resultado chegar

1. Leia o resumo e o diff completo.
2. Compare os caminhos alterados com o escopo permitido.
3. Examine a saída real de cada comando de verificação.
4. Peça explicação para verificações falhadas ou não executadas.
5. Se precisar de alterações, faça um pedido de seguimento específico na mesma conversa.
6. Quando os critérios estiverem cumpridos, crie um PR e deixe o CI e a revisão humana assumirem o controle.

É possível iniciar trabalho Cloud pelo Web, IDE, GitHub, GitLab (Beta), Linear ou Slack. A página oficial do Cloud também descreve como iniciar e rever trabalho a partir do Codex CLI. Os limites de repositório, ambiente, rede e revisão mantêm-se, independentemente do ponto de entrada.

## Como acompanhar uma falha

Não diga apenas «tenta outra vez». Forneça a prova da falha e a decisão seguinte:

```text
O teste falhou em retry.test.ts:48. Explica primeiro se a falha foi causada
por esta alteração. Se foi, corrige apenas essa regressão e volta a executar
os testes de auth. Se não foi, mantém a falha e regista-a explicitamente.
```

## Fontes oficiais

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Trabalho de longa duração](https://learn.chatgpt.com/docs/long-running-work)
