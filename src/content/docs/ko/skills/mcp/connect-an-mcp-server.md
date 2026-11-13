---
title: MCP 서버 연결
description: CLI 또는 config.toml로 첫 MCP 서버를 설정하고 인증한 뒤 검증합니다.
locale: ko
source_locale: zh-CN
source_revision: '0675d33'
translation_status: reviewed
translated_at: 2026-09-20
legacyVerification:
  status: verified
  products: ChatGPT 데스크톱 App / Codex CLI / IDE
  checkedAt: '2026-08-25'
reviewed_at: '2026-10-26'
---

이 장에서는 현재 공식 인터페이스로 최소한의 전체 과정을 완료합니다. **서버 추가 → 설정 확인 → 세션에서 도구 확인 → 읽기 전용 호출 한 번 실행** 순서입니다.

![일러스트: 어시스턴트가 커넥터를 서버에 꽂고, 인증을 거치면 상태등이 초록으로 켜지며, 테스트 요청이 케이블을 따라 데이터베이스로 가서 결과를 받아 온다](/illustrations/mcp-connect.webp)

## 시작하기 전에

- [MCP 개요](/ko/skills/mcp/mcp-overview/)를 읽었습니다.
- 로컬에서 `codex mcp --help`를 실행할 수 있습니다.
- 첫 연결에는 신뢰할 수 있는 출처와 읽기 전용 사례를 사용합니다.
- 실제 token을 명령 기록, 프롬프트, 저장소에 적지 않습니다.

## 경로 A: CLI로 STDIO 서버 추가

공식 예시는 Context7 문서 서버를 사용합니다.

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

이 명령은 서버를 Codex 설정에 기록합니다. `--` 뒤에는 STDIO 서버를 시작하는 명령이 옵니다. 처음 실행할 때 npm 패키지를 내려받을 수 있으므로 패키지 이름과 출처를 먼저 확인하세요.

## 경로 B: config.toml 직접 편집

사용자 수준 설정은 기본적으로 `~/.codex/config.toml`에 있습니다. 신뢰할 수 있는 프로젝트에서는 프로젝트 수준의 `.codex/config.toml`도 사용할 수 있습니다.

STDIO 예시:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

원격 Streamable HTTP 예시:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`, 주소, 도구 이름은 구조를 보여 주기 위한 예시일 뿐입니다. 서버 문서에서 제공하는 실제 값으로 바꿔야 합니다. `bearer_token_env_var`에는 token 자체가 아니라 환경 변수 **이름**이 들어갑니다.

## OAuth 서버

OAuth를 지원하는 서버를 설정한 다음 실행합니다.

```bash
codex mcp login <server-name>
```

데스크톱 App과 IDE의 MCP 목록에도 OAuth가 필요한 서버가 표시되며 Authenticate 동작을 제공합니다.

## 세 클라이언트에서 확인하는 방법

| 환경 | 설정 또는 확인 진입점 |
|---|---|
| ChatGPT 데스크톱 App | Settings → MCP servers. 저장 후 Restart하고 `/mcp`로 연결 확인 |
| Codex CLI | `codex mcp add/list/login`. TUI에서 `/mcp` 입력 |
| IDE 확장 | 톱니바퀴 메뉴 → MCP servers. 저장 후 Restart extension |

이 세 클라이언트는 같은 Codex host에서 설정을 공유하므로 설정 파일 세 벌을 따로 유지할 필요가 없습니다. ChatGPT Web은 로컬 설정을 읽지 않습니다.

## 검증 프롬프트

```text
현재 연결된 MCP 서버만 사용해 다음을 확인하세요.
1. 개발 문서 조회와 관련된 사용 가능한 도구 이름을 나열하세요.
2. 읽기 전용 도구 하나를 선택해 Node.js test runner의 기본 사용법을 조회하세요.
3. 실제로 호출한 도구를 설명하세요.
4. 쓰기 작업을 하지 말고 다른 서비스에도 연결하지 마세요.
```

검수 근거는 서버가 `codex mcp list` 또는 `/mcp`에 표시되고, 읽기 전용 도구가 구조화된 결과를 반환하며, 관련 없는 권한을 요청하지 않는 것입니다.

## 최소 권한 옵션

- `enabled_tools`: 목록에 있는 도구만 허용합니다.
- `disabled_tools`: 허용 목록을 적용한 뒤에도 특정 도구를 제외합니다.
- `enabled = false`: 설정은 유지하면서 일시적으로 비활성화합니다.
- `required = true`: 서버 초기화에 실패하면 시작도 실패하게 합니다. 반드시 필요한 의존성에 적합합니다.

## 실패할 때

추측하면서 여러 필드를 동시에 고치지 마세요. 오류 원문을 기록한 뒤 [MCP 연결 디버깅](/ko/skills/mcp/debugging-mcp/)에 따라 설정 읽기, 프로세스/네트워크, 인증, 개별 도구를 차례로 확인하세요.

## 공식 출처

- [OpenAI: Codex를 MCP 서버에 연결하기](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)
