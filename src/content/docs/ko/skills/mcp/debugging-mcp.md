---
title: MCP 연결 디버깅
description: 설정, 전송, 인증, 도구의 네 단계로 MCP 오류를 찾습니다.
locale: ko
source_locale: zh-CN
source_revision: d35b635
translation_status: draft
translated_at: 2026-09-20
---

MCP 오류를 모두 “도구가 작동하지 않는다”로 뭉뚱그리기 쉽습니다. 먼저 어느 단계에서 실패하는지 판단한 뒤 한 번에 변수 하나만 바꾸는 편이 빠릅니다.

## 먼저 네 가지 근거 보관하기

```bash
codex mcp list
codex mcp --help
node --version   # STDIO 서버가 Node.js를 사용할 때만
python3 --version # STDIO 서버가 Python을 사용할 때만
```

서버 이름, STDIO와 Streamable HTTP 중 사용하는 전송 방식, 오류 원문, 오류가 발생한 환경이 데스크톱 App/CLI/IDE 중 무엇인지도 기록하세요. 전체 token은 기록하지 마세요.

## 네 단계로 분류하기

| 단계 | 흔한 증상 | 첫 확인 항목 |
|---|---|---|
| 설정 | 서버가 목록에 없음 | 파일 경로, TOML 문법, 서버 이름, `enabled` |
| 시작/연결 | 초기화 시간 초과 | STDIO 명령과 PATH 또는 HTTP URL, TLS, 프록시 |
| 인증 | 401/403 또는 로그인 요구 | OAuth 상태, token 환경 변수, scope |
| 도구 | 서버는 온라인이지만 호출 실패 | 도구 이름, 인자, 허용 목록, 도구 시간 초과 |

## 1. 설정을 실제로 읽었는지 확인

- 사용자 수준 파일은 `~/.codex/config.toml`입니다.
- 프로젝트 수준 파일은 `.codex/config.toml`이며 신뢰할 수 있는 프로젝트에서만 로드됩니다.
- 데스크톱 App, CLI, IDE는 같은 Codex host에서 설정을 공유합니다. 서로 다르게 변하는 복사본 세 개를 만들지 마세요.
- `codex mcp list` 또는 세션의 `/mcp`로 실제 상태를 확인하세요. 파일이 존재한다는 사실만 성공 근거로 삼지 마세요.

## 2. STDIO 서버 시작 실패

`command`가 PATH에 있는지, 런타임 버전이 서버 요구 사항을 충족하는지, `cwd`가 존재하는지, 의존성 패키지의 출처를 신뢰할 수 있는지 확인하세요.

시작 명령을 직접 실행하는 것은 실행 파일이 시작될 수 있다는 것만 보여 줍니다. MCP 서버가 프로토콜 입력을 기다리느라 종료하지 않는 것처럼 보여도 정상일 수 있습니다. 이를 완전한 도구 호출 테스트로 해석하지 마세요.

초기화가 실제로 느린 경우에만 `startup_timeout_sec`를 늘리세요. 기본값은 10초입니다. 무턱대고 크게 늘리면 잘못된 명령을 가릴 뿐입니다.

## 3. Streamable HTTP 연결 실패

다음 순서로 확인하세요.

1. URL과 TLS 인증서
2. 회사 프록시 또는 VPN
3. `bearer_token_env_var`가 가리키는 환경 변수가 존재하는지
4. OAuth에서 `codex mcp login <server-name>`을 다시 실행해야 하는지
5. 서버 로그에 초기화 요청이 도착했는지

token을 정적인 `http_headers` 값으로 바꿔 “임시로 디버깅”하지 마세요. 설정 파일이나 스크린샷에 남기 쉽습니다.

## 4. 서버는 온라인이지만 도구를 사용할 수 없음

| 증상 | 확인 항목 |
|---|---|
| 도구가 전혀 표시되지 않음 | `enabled_tools` / `disabled_tools`와 서버가 반환한 도구 목록 |
| Tool not found | 서버 버전, 도구 이름 변경, 세션에 남아 있는 오래된 목록 |
| 인자 검증 실패 | 도구 schema를 대조하고 예전 프롬프트에서 필드 이름을 추측하지 않기 |
| 호출 시간 초과 | 조회 범위를 줄인 다음 `tool_timeout_sec` 확인. 기본값은 60초 |
| 결과가 비어 있음 | 같은 계정으로 원본 시스템의 데이터 범위와 필터 조건 확인 |

## 최소 재현 프롬프트

```text
MCP 서버 <server-name>만 확인하세요.
1. 현재 보이는 도구 이름을 보고하세요.
2. <readonly-tool>을 호출하고 인자는 <minimal-arguments>만 사용하세요.
3. 오류 유형과 서버 메시지는 그대로 보존하되 자격 증명은 숨기세요.
4. 다른 서버를 호출하거나 쓰기 작업을 하지 마세요.
```

## 디버깅 완료 기준

- [ ] `codex mcp list`의 상태가 예상과 일치합니다.
- [ ] 읽기 전용 도구 하나가 최소 인자로 성공합니다.
- [ ] 근본 원인을 “재시작하니 고쳐졌다”가 아닌 구체적인 단계로 설명할 수 있습니다.
- [ ] 임시 token, debug 로그, 넓은 권한을 회수했습니다.
- [ ] 팀 설정과 수정 안내를 업데이트했습니다.

## 공식 출처

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
