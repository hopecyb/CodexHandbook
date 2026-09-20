---
title: Ambientes Cloud
description: Configura o runtime, as dependências, o setup, a cache e o ponto de partida do repositório no Codex Cloud.
locale: pt
source_locale: zh-CN
source_revision: 1745f70
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Um ambiente Cloud define o que o Codex instala e executa para um repositório. Não herda as definições do teu computador. Se algo funciona localmente mas falha no Cloud, compara primeiro o runtime, as dependências, as variáveis e a rede.

## Ordem de execução em cada conversa

1. Criar um contentor e fazer checkout do ramo ou commit SHA selecionado.
2. Executar o setup script; ao reutilizar uma cache, também pode executar o maintenance script.
3. Aplicar a política de acesso à Internet.
4. O Agent executa comandos, edita e verifica em ciclo, lendo os ficheiros `AGENTS.md` aplicáveis.
5. Devolver a resposta e o diff para que possas continuar a conversa ou criar um PR.

A imagem `universal` predefinida traz instaladas linguagens, pacotes e ferramentas comuns. Podes fixar versões de Python, Node.js e outras nas definições do ambiente, ou instalar dependências adicionais com o setup script.

## Configuração mínima reproduzível

Num projeto pnpm, fixa primeiro a mesma versão de Node.js usada pelo CI e depois fornece:

```bash
corepack enable
pnpm install --frozen-lockfile
```

Escreve no `AGENTS.md` da raiz do repositório:

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

O setup e a fase do Agent decorrem em sessões Bash separadas. Um `export` temporário feito no setup não continua automaticamente na fase seguinte. Configura os valores não sensíveis nas definições do ambiente ou persiste-os na configuração da shell segundo as recomendações oficiais.

## Cache e maintenance

O Cloud pode guardar o estado do contentor em cache por até 12 horas para acelerar conversas novas e seguimentos. Ao restaurar a cache, faz checkout do ramo indicado para a conversa e pode executar um maintenance script para atualizar dependências.

Alterações ao setup, maintenance, variáveis de ambiente ou secrets invalidam automaticamente a cache. Se uma alteração no repositório a tornar incompatível, usa **Reset cache** manualmente. Nos planos Business e Enterprise, a cache de um ambiente pode ser partilhada por utilizadores com acesso a esse ambiente; repô-la pode afetar outras pessoas do espaço de trabalho.

## Variáveis de ambiente e Secret

- As variáveis de ambiente estão disponíveis tanto no setup como na fase do Agent.
- Um Secret só é desencriptado durante o setup e é removido antes de o Agent começar.
- O setup tem acesso à Internet.
- O Agent começa sem acesso à Internet, que pode ser ativado separadamente em cada ambiente.

Estes limites confundem-se facilmente. O capítulo seguinte explica-os em [Secrets e variáveis de ambiente](/pt/guide/web-and-cloud/secrets-and-variables/).

## Lista de alinhamento

| Verificação | Objetivo |
|---|---|
| Ramo/commit de partida | Corresponde à descrição da tarefa |
| Versões do runtime | Correspondem às restrições de CI ou produção |
| lockfile | Instalação com versões fixas |
| setup | Repetível, não interativo e interrompido imediatamente em caso de erro |
| Comandos de verificação | Registados em `AGENTS.md` |
| Rede | O Agent só tem acesso aos domínios e métodos necessários |

## Fontes oficiais

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Imagem codex-universal](https://github.com/openai/codex-universal)
