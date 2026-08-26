---
title:  Acceso a internet
description:  Política de salida del Entorno Cloud, instalación de dependencias y riesgo de filtración de datos — abrir lo necesario y mantener el límite.
locale: es
source_locale: zh-CN
source_revision: 1e2d815
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Cloud has two separate network phases:

| Phase | Default | Main purpose |
|---|---|---|
| Setup script | Internet available | Install dependencies and tools |
| Agent phase | Off by default | Let the Agent access external resources during the task |

A successful `pnpm install` during setup does not mean the Agent can later `curl` any site.

## Why Agent access is off by default

Agent internet access increases the risks of prompt injection, code or data exfiltration, malicious dependencies, and license-incompatible material entering a repository. An untrusted issue, web page, or dependency README can contain instructions designed to induce exfiltration.

Allow only the targets and actions required by the task, and review work logs.

## Options

Configure Agent internet access per environment:

- **Off:** block all Agent internet access.
- **On:** allow access, optionally constrained by domains and HTTP methods.

Start with an empty domain list, use the Common dependencies preset, or select All (unrestricted). Do not use unrestricted access as a production troubleshooting shortcut.

For read-only documentation or downloads, allow only `GET`, `HEAD`, and `OPTIONS`. This blocks `POST`, `PUT`, `PATCH`, and `DELETE`, which may send or modify data.

## Minimal-access example

A task must read public API documentation:

1. Keep access Off and confirm that the failure is network-related.
2. Enable Agent access.
3. Add only the official documentation domain to the allowlist.
4. Allow only `GET`, `HEAD`, and `OPTIONS`.
5. Rerun the task and inspect every outbound request in the log.
6. Decide whether to restore Off afterward.

## Relationship to Secrets

Cloud Secrets are removed before the Agent phase, reducing the risk of directly exfiltrating a setup Secret. Ordinary environment variables, repository content, and generated data can still be sent out. Never disguise sensitive data as an ordinary variable to bypass the Secret lifecycle.

## Acceptance checklist

- [ ] The need for Agent internet access is documented.
- [ ] The allowlist contains only required domains.
- [ ] HTTP methods are reduced to the smallest set.
- [ ] Inputs are trusted or prompt-injection risk is considered.
- [ ] Logs contain no command that uploads repository, environment, or credential data.
- [ ] New dependencies were checked for source, version, and license.

## Official sources

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Status:** verified

**Applies to:** Cloud

**Last verified:** 2026-08-26
