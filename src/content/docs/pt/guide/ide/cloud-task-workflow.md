---
title: Tarefas Cloud no IDE
description: Delegar tarefas longas do IDE ao Codex Cloud e voltar a resultados que possam ser revistos.
locale: pt
source_locale: zh-CN
source_revision: "d5369b5"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 60
legacyVerification:
  status: verified
  products: IDE, Cloud
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

No IDE podes manter a iteração rápida no computador local ou ligar-te ao Codex web para delegar tarefas mais longas ao Cloud. O ponto de partida continua no editor, mas o ambiente de execução, o estado do repositório e os limites de rede passam a ser os da nuvem.

## Quando delegar

| Manter localmente | Delegar ao Cloud |
|---|---|
| Precisas de fazer alterações rápidas e sucessivas na seleção atual | A tarefa tem muitas etapas ou demora muito tempo |
| Dependes de alterações locais ainda não confirmadas | Os dados de entrada já estão no repositório remoto ou podem ser enviados |
| Tens de usar ferramentas exclusivas do teu computador | O ambiente Cloud consegue reconstruir dependências e verificações |
| Precisas de controlar um processo em tempo real | Queres continuar outros trabalhos no computador local |

O Cloud não recebe automaticamente os ficheiros ainda não confirmados, as credenciais ou os processos em execução no teu computador. Antes de delegar, indica claramente o repositório, o ramo e o commit a partir dos quais a tarefa deve começar.

## Lista de verificação antes de delegar

- [ ] Iniciaste sessão com uma conta ChatGPT; o Codex Cloud não aceita autenticação por API key.
- [ ] Ligaste o GitHub ou estás a usar a integração GitLab Beta atualmente suportada.
- [ ] O ambiente Cloud consegue executar os scripts de instalação e verificação.
- [ ] As variáveis e os secrets necessários estão configurados no ambiente, não escritos no prompt.
- [ ] Trataste as alterações locais ainda não confirmadas ou excluíste-as expressamente da tarefa.
- [ ] Objetivo, caminhos permitidos, zonas excluídas e comandos de aceitação estão claramente definidos.

## Exemplo completo

```text
Objetivo: corrigir o módulo de repetição que espera mais uma vez depois de atingir o limite.
Ponto de partida: repositório acme/retry-service, ramo fix/retry-limit.
Âmbito: modificar apenas src/retry.ts e os testes correspondentes.
Restrições: não atualizar dependências, não alterar a API pública e não fazer push para main.
Aceitação: executar pnpm test -- retry e pnpm typecheck; mostrar o diff e os resultados dos comandos.
```

Fluxo recomendado:

1. No IDE, anexa os ficheiros ou as seleções relevantes para confirmar primeiro os limites do problema.
2. Escolhe continuar no Cloud a tarefa mais longa.
3. No Cloud, acompanha o plano, o progresso e os resultados de verificação.
4. Volta ao IDE ou à Web e examina o resultado que pode ser revisto.
5. Obtém as alterações fazendo fetch do ramo ou através de um PR.
6. Repete os testes num ambiente local de confiança e faz uma revisão humana antes de integrar.

“Concluído” no Cloud significa apenas que a execução remota terminou; não significa que o código esteja pronto para ser integrado. Diferenças nas dependências, no sistema operativo ou nas credenciais entre o ambiente remoto, o local e o CI ainda podem revelar problemas.

## Conflitos e segurança

- Depois de delegar, não deixes que o ambiente local e o Cloud alterem o mesmo ficheiro ao mesmo tempo.
- Não coloques credenciais de produção no prompt; usa secrets do ambiente.
- Não assumas que o Cloud tem acesso à Internet por predefinição; configura a lista de permissões por ambiente.
- Fazer push, abrir um PR e integrar são ações distintas. Mantém uma aprovação humana ou uma verificação de CI antes da integração.

Lê a seguir [Ambientes Cloud](/pt/guide/web-and-cloud/cloud-environments/) e [Criar Pull Requests](/pt/guide/web-and-cloud/create-pull-requests/).

## Fontes oficiais

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
