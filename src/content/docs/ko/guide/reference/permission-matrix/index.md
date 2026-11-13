---
title: 권한 매트릭스
description: 로컬 Permission Profile, 기존 샌드박스, Cloud 네트워크 정책의 차이를 구분합니다.
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: ko
source_locale: zh-CN
source_revision: 'c6ad6aa'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 70
reviewed_at: '2026-10-26'
---

“App/CLI/IDE/Cloud 중 어디에서 확인 창이 뜨는가”를 고정된 표 하나로 추측하지 마세요. 실제 동작은 실행 위치, 적용 중인 설정, 조직의 requirements, 운영체제, 수행하려는 작업이 함께 결정합니다.

![샌드박스 차단, 사람의 승인, 실행 결과 사이의 결정 흐름](/illustrations/flow-sandbox-approval.webp)

## 먼저 세 가지 방식을 구분하기

| 방식 | 적용 범위 | 핵심 제어 |
|---|---|---|
| 로컬 Permission Profiles(Beta) | macOS, Linux, WSL, 네이티브 Windows의 로컬 명령 | 파일 시스템의 read/write/deny와 네트워크 목적지 |
| 기존 sandbox settings | 로컬 Codex | `read-only`, `workspace-write`, `danger-full-access`와 승인 정책 |
| Cloud environment policy | Codex Cloud | 격리된 컨테이너, setup 단계의 네트워크 연결, Agent 네트워크 allowlist/HTTP 메서드 |

Permission Profiles는 기존 `sandbox_mode`와 결합되지 않습니다. 로드된 설정에 `sandbox_mode`가 있거나, 명령줄에서 `--sandbox`를 전달하거나, 설정 Profile에 sandbox가 지정되어 있으면 Codex는 `default_permissions` 대신 기존 샌드박스 설정을 사용합니다.

## 내장 로컬 Permission Profiles

| 이름 | 경계 | 적합한 작업 |
|---|---|---|
| `:read-only` | 로컬 명령을 읽기 전용으로 제한 | 코드 이해, 검토, 저장소에 처음 접근할 때 |
| `:workspace` | 현재 workspace roots와 시스템 임시 디렉터리에 쓰기 허용 | 일반적인 개발 작업 |
| `:danger-full-access` | 로컬 샌드박스 제한 제거 | 외부에서 이미 격리되어 있고 명확히 필요할 때만 |

사용자 지정 profile은 경로마다 `read`, `write`, `deny`를 설정할 수 있습니다. 더 구체적인 규칙으로 넓은 허용 범위에서 `.env` 같은 민감 파일을 제외할 수 있습니다. 같은 경로에서 규칙이 충돌하면 `deny`가 `write`보다, `write`가 `read`보다 우선합니다.

## 최소 권한 예시

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true`는 명령의 네트워크 사용만 허용합니다. 도메인 규칙이 프록시를 통해 강제되려면 `features.network_proxy`도 활성화해야 합니다.

## 작업별 평가

| 작업 | 주요 위험 | 최소 경계 |
|---|---|---|
| 소스 코드 읽기 | 민감 파일이 컨텍스트에 포함될 수 있음 | workspace read, credentials는 명시적으로 deny |
| 파일 수정 | 범위 밖 파일을 덮어쓰거나 삭제할 수 있음 | 대상 workspace에만 쓰기, diff 먼저 확인 |
| 테스트 실행 | 스크립트의 부작용 | 스크립트를 검토하고 통제된 환경 사용 |
| 의존성 설치 | 공급망 및 네트워크 위험 | 버전 고정, 도메인 제한 |
| Git push / PR | 외부 상태 변경 | 독립된 브랜치, 브랜치 보호, 사람의 검토 |
| MCP/Plugin 도구 | 제3자 데이터 및 쓰기 작업 | 최소 scope, 항목별 승인과 로그 |

`AGENTS.md`에 “push하지 마세요”라고 적을 수는 있지만 그것만으로 기술적으로 강제되지는 않습니다. 규칙을 sandbox/permissions, GitHub 권한, 사람의 검토와 함께 사용해야 합니다.

## 팀의 확인 방법

1. 클라이언트와 Codex 버전을 기록합니다.
2. 로드된 모든 설정 계층을 나열합니다.
3. Permission Profile과 기존 sandbox 중 어느 방식을 사용하는지 확인합니다.
4. 민감한 데이터가 없는 테스트 디렉터리에서 read, write, deny, 네트워크를 각각 검증합니다.
5. 그다음 실제 저장소에 연결하고 Git 및 조직 측 관문을 유지합니다.

Permission Profiles는 아직 Beta입니다. 업그레이드한 뒤에는 이 검증 과정을 다시 실행하세요.

## 공식 근거

- [Permissions(Beta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
