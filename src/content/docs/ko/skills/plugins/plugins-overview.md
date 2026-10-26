---
title: Plugins 개요
description: Plugin의 구성, 지원 환경, 설치 확인, 신뢰 경계를 이해합니다.
locale: ko
source_locale: zh-CN
source_revision: '4efe5a8'
translation_status: reviewed
translated_at: 2026-09-20
legacyVerification:
  status: verified
  products: ChatGPT Web / 데스크톱 App / Mobile; Codex 데스크톱 및 CLI; IDE 확장은 Plugin 미지원
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

ChatGPT와 Codex는 같은 공개 Plugin 디렉터리를 사용합니다. Plugin은 관련 기능을 발견하고 설치할 수 있는 워크플로로 묶습니다. 새로운 도구 호출 프로토콜을 만드는 것은 아닙니다.

![일러스트: 리본이 달린 확장 패키지가 레일을 따라 여러 작업대로 설치되고, 하나는 개봉 중, 하나는 깔끔하게 제거된다](/illustrations/plugins-overview.webp)

## Plugin에 들어갈 수 있는 것

| 구성 요소 | 역할 | 설치자가 확인할 것 |
|---|---|---|
| Skills | 재사용 가능한 단계, 참고 자료, 스크립트 | 지침이 현재 작업에 맞는지, 스크립트를 신뢰할 수 있는지 |
| Connectors | GitHub, Slack, Google Drive 등의 도구 연결 | OAuth scope, 읽기/쓰기 동작, 외부 데이터 범위 |
| MCP servers | 도구와 인증을 정의하고 구조화된 데이터 반환 | 서버 출처, 도구 목록, 로그, 권한 |
| Browser extensions | 특정 워크플로에 브라우저 기능 제공 | 브라우저 접근 범위와 필요성 |
| Hooks | 수명 주기의 특정 시점에 명령이나 MCP 도구 실행 | 활성화 전에 정확한 정의를 검토하고 신뢰할지 판단 |
| Scheduled task templates | 예약 작업을 지원하는 환경에 재사용 가능한 시작점 제공 | 실행 빈도, 권한, 종료 조건, 사람의 재검토 |

## Skill 및 MCP와의 차이

| 방식 | 주로 답하는 질문 | PR 검토 묶음의 예 |
|---|---|---|
| Skill | 어떤 순서로 일해야 하는가? | diff 읽기, 근거 확인, 위험도 순으로 정리하기 |
| MCP / Connector | 어떤 외부 도구를 호출할 수 있는가? | GitHub PR과 댓글 읽기 |
| Hook | 수명 주기의 어느 지점에서 검사할 것인가? | 파일을 쓴 뒤 비밀 정보 검사 실행 |
| Plugin | 이러한 기능을 함께 설치하고 배포하는 방법은? | 팀의 “PR 검토 패키지” |

Plugin은 배포 계층이지 실행 흐름의 마지막 단계가 아닙니다. 관계도는 [확장 기능 지도](/ko/skills/capability-map/)에서 확인하세요.

## 설치와 첫 검증

### ChatGPT Web / 데스크톱 App

1. Plugins 탭을 엽니다.
2. 게시자, 설명, 포함된 기능을 확인합니다.
3. 설치합니다. 외부 서비스 연결을 요청하면 권한 범위를 별도로 검토합니다.
4. 새 Chat, Work 또는 Codex 작업에서 위험이 낮은 검증을 수행합니다.

### Codex CLI

1. `/plugins`를 입력해 Plugin 탐색기를 엽니다.
2. 설정된 marketplace에서 설치합니다.
3. **새 세션을 시작한 뒤** 함께 설치된 Skill이나 도구를 확인합니다.

IDE 확장은 현재 Plugin을 지원하지 않습니다. “IDE에 진입점이 보이지 않는다”는 문제 해결 안내를 작성하는 대신, ChatGPT 데스크톱 App이나 Codex CLI에서 Plugin을 관리하세요.

## 위험이 낮은 검증 프롬프트

```text
방금 설치한 <plugin-name>만 확인하고 쓰기 작업은 하지 마세요.
1. 이번 작업과 관련된 Skills와 도구를 나열하세요.
2. 각 도구가 읽기 전용인지, 외부에 영향을 줄 수 있는지 설명하세요.
3. 테스트 데이터 또는 읽기 전용 조회로 최소한의 호출을 한 번 수행하세요.
4. 실제 사용한 구성 요소를 보고하고, 사람이 확인해야 할 권한을 나열하세요.
```

Plugin에 외부 연결이 필요하다면 첫 검증에서는 메시지를 보내거나 상태를 변경하거나 데이터를 삭제하거나 파일을 대량으로 쓰지 마세요.

## 팀 도입 절차

1. **구성 요소 목록 작성**: Skills, 커넥터, MCP, 브라우저 확장, Hooks, 템플릿을 나열합니다.
2. **출처 확인**: marketplace, 저장소, 게시자, 업데이트 정책을 확인합니다.
3. **최소 권한 부여**: 테스트 계정과 읽기 전용 scope로 시험합니다.
4. **분리된 시범 운영**: 비프로덕션 프로젝트나 소규모 팀에서 먼저 사용합니다.
5. **Hook 검토**: `/hooks`에서 Plugin에 포함된 Hook의 hash와 동작을 확인합니다.
6. **종료 절차 기록**: 비활성화, 제거, 롤백, OAuth 권한 회수 단계를 명시합니다.

## 무시하면 안 되는 경계

- 설치에 성공했다고 해서 구성 요소가 안전하거나 현재 데이터에 적합하다는 뜻은 아닙니다.
- Plugin이 외부 서비스 연결을 요청할 수 있습니다. 권한 부여는 별도로 검토할 위험이 큰 단계입니다.
- Plugin Hook은 다른 출처의 일치하는 Hook과 함께 실행되며 기존 Hook을 자동으로 대체하지 않습니다.
- Workspace 관리자는 사용 가능한 Plugin과 도구를 통제할 수 있습니다. 개인이 보는 디렉터리가 조직의 허용 범위와 같지는 않습니다.
- Mobile에서는 계정에 이미 설치된 Plugin을 사용할 수 있지만 완전한 관리 화면이 있다고 가정하면 안 됩니다.

## Plugin이 필요하지 않을 때

- 조합이나 배포 문제가 없는 단순한 `SKILL.md` 하나만 있을 때
- 아직 빠르게 실험 중인 일회성 개인 스크립트일 때
- 권한 및 업그레이드 정책이 안정되지 않았을 때
- 대상 사용자가 IDE 확장에서만 작업할 때

먼저 개별 Skill이나 MCP 절차를 안정적으로 검증한 다음 묶어 배포하는 편이 일반적으로 검토하기 쉽습니다.

## 검수 체크리스트

- [ ] 대상 환경이 Plugin을 지원합니다.
- [ ] 게시자와 출처를 추적할 수 있습니다.
- [ ] 외부 연결과 OAuth scope를 검토했습니다.
- [ ] Plugin Hook을 검토하고 신뢰하기로 했습니다.
- [ ] 읽기 전용 최소 작업에 성공했습니다.
- [ ] 새 세션에서 예상한 Skill이나 도구를 찾을 수 있습니다.
- [ ] 팀에 비활성화, 롤백, 권한 회수 지침이 있습니다.

## 공식 출처

- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)
- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)
