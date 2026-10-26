---
title: Instalação e atualizações da CLI
description: Instalar, atualizar e confirmar a versão.
locale: pt
source_locale: zh-CN
source_revision: "be3f2c4"
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-10-26
legacyVerification: {"status": "verified", "products": "CLI", "basis": "Conferido com o início rápido oficial atual da CLI: opções de instalação para macOS/Linux, Windows, npm e Homebrew, caminhos de atualização e login com codex. Os comandos específicos são mantidos na página de instalação para iniciantes.", "checkedAt": "2026-08-26"}
---

Na primeira instalação da CLI, muita gente trava nestes pontos:

- Será que instalou de verdade?
- Por que o terminal ainda não reconhece `codex` depois de instalar?
- Depois de atualizar, como confirmar que versão está a correr?

A CLI está instalada de verdade quando o terminal atual a encontra de forma estável — não basta ter corrido o comando uma vez.

## Depois de instalar, verifique pelo menos estas 3 coisas

1. O comando corre diretamente
2. O terminal atual a encontra no `PATH`
3. A autenticação já está concluída; não basta ter o executável

## Mal-entendidos frequentes

### 1. O script de instalação ter corrido significa que acabou

O script ter corrido só mostra que «os passos de instalação foram executados».
A seguir, o que importa é: o terminal que tem aberto agora reconhece o comando?

### 2. Abrir outra janela de terminal resolve sozinho

Às vezes sim, às vezes não.
Se o `PATH` não atualizou, noutra janela também pode continuar a não encontrar.

### 3. Atualizar é só reinstalar

Muitas vezes precisa primeiro de confirmar:

- Esta versão é antiga?
- Qual instalação está mesmo a atualizar?

## Pode verificar nesta ordem

Logo após instalar:

1. Confirme se o comando `codex` corre diretamente
2. Confirme se o `PATH` do shell atual inclui o local de instalação
3. Conclua o login ou a autenticação
4. Por fim, confirme a informação de versão

O critério mais prático: o terminal atual encontra-o e já consegue autenticar.

Também pode confrontar: [Instalar a CLI](/pt/guide/getting-started/install-cli/)
As instruções oficiais de instalação e atualização estão em [Codex CLI](https://learn.chatgpt.com/docs/codex/cli). O instalador independente oficial para macOS/Linux usa o mesmo comando para instalar e atualizar. Para Windows, npm e Homebrew, consulte a aba correspondente na página oficial.
