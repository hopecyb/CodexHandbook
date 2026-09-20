---
title: Plugins
description: 재사용 가능한 Skills, 커넥터, MCP, Hooks, 예약 작업 템플릿의 조합을 탐색하고 설치하며 관리합니다.
locale: ko
source_locale: zh-CN
source_revision: 8917a59
translation_status: draft
translated_at: 2026-09-20
---

Plugin은 기능을 묶어 배포하는 단위입니다. Skills, 커넥터, MCP 서버, 브라우저 확장, Hooks, Scheduled task 템플릿을 포함할 수 있습니다. 실제 작업을 수행하는 것은 그 안에 들어 있는 각 구성 요소입니다.

## 누구에게 적합한가

- 공개 디렉터리에서 이미 구성된 기능 묶음을 설치하려는 사용자
- 팀의 절차, 도구, 보호 장치를 버전 관리되는 하나의 단위로 배포하려는 유지 관리자
- 출처, 외부 서비스 권한, Plugin Hook을 검토해야 하는 관리자

## 현재 지원되는 환경

| 환경 | 탐색/설치 | 사용 |
|---|---|---|
| ChatGPT Web과 데스크톱 App | Plugins 탭 | Chat과 Work |
| ChatGPT Mobile | 주요 관리 진입점으로 사용하지 않음 | 계정에 이미 설치된 Plugin 사용 |
| ChatGPT 데스크톱 App의 Codex | Plugins 탭 | Codex 작업 |
| Codex CLI | `/plugins` 탐색기. 설치 후 새 세션 시작 | Codex 환경 |
| IDE 확장 | **Plugin을 지원하지 않음** | IDE가 지원하는 MCP, Skill 등의 기능은 개별적으로 사용 가능 |

## 먼저 읽을 글

- [Plugins 개요](/ko/skills/plugins/plugins-overview/): 구성 요소, 지원 범위, 설치 확인, 보안 검토를 이해합니다.
- [확장 기능 지도](/ko/skills/capability-map/): Plugin, Skill, MCP, Hook, Scheduled task를 비교합니다.

## 설치 전에 확인할 질문

1. 출처와 유지 관리자는 누구인가?
2. 어떤 Skills, 커넥터, MCP, 브라우저 기능, Hooks가 포함되어 있는가?
3. 외부 계정 연결이 필요한가? 어떤 scope를 부여하는가?
4. Hook의 정확한 정의를 `/hooks`에서 검토하고 신뢰하기로 했는가?
5. 팀은 어떻게 비활성화, 업그레이드, 롤백하고 권한을 회수하는가?

## 공식 출처

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
