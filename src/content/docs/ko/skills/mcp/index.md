---
title: MCP
description: 타사 도구와 컨텍스트를 통제된 방식으로 ChatGPT와 Codex에 연결합니다.
locale: ko
source_locale: zh-CN
source_revision: 8d9ec38
translation_status: draft
translated_at: 2026-09-20
---

MCP(Model Context Protocol)는 “Agent가 저장소 밖의 도구와 데이터를 어떻게 호출하는가”를 다룹니다. “작업 절차를 어떻게 작성하는가”를 정의하는 도구는 아닙니다.

## 누구에게 적합한가

- Codex로 문서, 디자인 시안, 이슈 또는 내부 도구를 조회하려는 개인 개발자
- 외부 도구 설정, OAuth, 최소 권한을 통일하려는 팀
- “서버는 설정했지만 도구가 보이지 않거나 호출에 실패한다”는 문제를 조사하는 유지 관리자

작업이 현재 저장소의 파일을 읽고 쓰는 데 그친다면 먼저 내장 파일 및 터미널 기능을 사용하세요. 타사 컨텍스트나 작업이 실제로 필요할 때 MCP를 연결하면 됩니다.

## 읽는 순서

1. [MCP 개요](/ko/skills/mcp/mcp-overview/): MCP, Skill, Plugin의 역할을 구분합니다.
2. [MCP 서버 연결](/ko/skills/mcp/connect-an-mcp-server/): CLI나 `config.toml`로 첫 서버를 연결합니다.
3. [MCP 연결 디버깅](/ko/skills/mcp/debugging-mcp/): 설정, 시작, 인증, 도구의 네 단계로 문제를 조사합니다.

## 현재 지원 범위

- ChatGPT 데스크톱 App, Codex CLI, IDE 확장은 같은 Codex host에서 MCP 설정을 공유합니다.
- 로컬 Codex 클라이언트는 STDIO와 Streamable HTTP 서버를 지원합니다.
- ChatGPT Web은 로컬 `~/.codex/config.toml`을 읽지 않습니다. 설치된 Plugin이 제공하는 원격 MCP 도구를 통해 작동합니다.

## 먼저 기억할 세 가지

1. MCP는 도구를 노출하지만 신뢰할 수 있는 작업 절차를 대신 정의하지 않습니다. 안정적인 절차는 여전히 Skill이나 `AGENTS.md`에 적어야 합니다.
2. 서버가 할 수 있는 일은 노출된 도구와 그 뒤의 자격 증명 범위에 따라 결정됩니다.
3. 첫 연결은 읽기 전용 권한, 테스트 테넌트, 적은 수의 도구로 시작하세요. 프로덕션 관리자 토큰으로 시험하지 마세요.

## 공식 출처

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Model Context Protocol 사양](https://modelcontextprotocol.io/)
