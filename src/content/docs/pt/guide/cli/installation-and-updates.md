---
title: Instalação e atualizações da CLI
description: Instalar, atualizar e confirmar a versão.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
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

Também pode confrontar: [Instalar a CLI](/guide/getting-started/install-cli/)  
Instalação e atualização oficiais: [documentação OpenAI Codex](https://developers.openai.com/codex).

---

**Estado:** outdated  
**Produtos aplicáveis:** CLI  
**Nota de revisão:** Embora esta página fale da lógica de verificação pós-instalação, o corpo ainda assume um fluxo concreto atual de instalação, atualização e autenticação; como o método oficial de instalação da CLI, os passos de autenticação e os comandos de confirmação de versão são detalhes muito voláteis, sem a documentação oficial de instalação mais recente não convém marcar como `verified`.  
**Última verificação:** 2026-07-26
