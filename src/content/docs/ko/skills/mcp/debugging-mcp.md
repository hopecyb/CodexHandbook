---
title: MCP 연결 디버깅
description: MCP 서버가 시작되지 않거나, 도구가 타임아웃되거나, 결과가 이상할 때의 체계적 조사 단계.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP는 외부 시스템을 Codex에 연결합니다. 실패 시 흔한 유형은 **프로세스 기동 실패**, **인증 오류**, **도구 로직 또는 타임아웃**입니다. 이 페이지는 설정을 무작정 바꾸지 않도록 검사 순서를 제시합니다.

## 이 페이지 내용

- MCP 문제를 최소로 재현하는 방법
- 로그와 설정 대조 체크리스트
- 언제 Codex가 아니라 서버 구현을 의심할지

관련 페이지: [MCP 개요](/skills/mcp/mcp-overview/) · [MCP 서버 연결](/skills/mcp/connect-an-mcp-server/)

## 분류 절차

```text
1. 서버를 터미널에서 단독으로 시작할 수 있는가?
2. 설정 JSON/TOML 구문과 경로가 올바른가?
3. 환경 변수가 MCP 프로세스에서 보이는가?
4. Codex 세션을 재시작해 새 설정을 로드했는가?
5. 단일 도구 호출이 타임아웃/인자 오류인가?
```

## 시작 실패

| 확인 항목 | 설명 |
|---|---|
| 명령 경로 | `npx`, `uvx`, 절대 경로가 PATH에 있는가 |
| 의존성 버전 | Node/Python 버전이 MCP 서버 요구를 충족하는가 |
| 수동 실행 | 설정의 command + args를 shell에서 실행 |
| 전송 방식 | stdio vs HTTP/SSE가 문서와 일치하는가 |

## 인증 실패

- API key가 환경 변수로 주입되었는지(저장소에 쓰지 않음)
- OAuth류 MCP가 만료되어 재인가가 필요한지
- 회사 프록시가 MCP 아웃바운드를 막는지

환경 변수 색인: [환경 변수](/guide/reference/environment-variables/)

## 도구 호출 이상

| 현상 | 가능한 원인 |
|---|---|
| Tool not found | 서버 버전과 클라이언트 schema 불일치 |
| Timeout | 외부 API가 느림; 타임아웃 확대 또는 쿼리 최적화 |
| 빈 결과 | 인자 이름 오류; MCP 서버 로그 확인 |
| 깨진 문자 | 인코딩이 UTF-8이 아님 |

prompt에서 Agent에게 **도구 반환 구조를 출력**(마스킹)하도록 요청하면 디버깅에 도움이 됩니다.

## 안전한 디버깅 습관

- **테스트 테넌트** API key를 쓰고 프로덕션은 쓰지 말 것
- 디버그 로그에 전체 token을 채팅에 붙여 넣지 말 것
- 악성 MCP가 의심되면 즉시 끊고 키를 교체

오류 색인: [오류와 안내 참고](/guide/reference/error-reference/)

## 흔한 실수

- 설정을 바꾸고 Codex 세션을 재시작하지 않음
- IDE와 CLI에 서로 다른 MCP를 각각 설정
- MCP 서버 로그 수준을 항상 debug로 두고 스크린샷에 비밀이 포함됨

## 수락 체크리스트

- [ ] 터미널에서 MCP 서버를 독립적으로 시작할 수 있음
- [ ] 읽기 전용 도구를 최소 한 번 성공 호출함
- [ ] 팀 표준 MCP 설정 템플릿을 기록함

## 참고 출처
- Model Context Protocol 규격과 디버깅 가이드
---

**상태:** outdated  
**적용 제품:** CLI / IDE / App  
**재검토 설명:** 이 페이지의 장애 대응 단계는 현재 Codex 클라이언트가 MCP 도구를 어떻게 로드·표시·호출하는지에 의존합니다. 변동 위험이 높아 현행 문서에 맞춰 다시 검증·작성해야 합니다.  
**최근 검증:** 2026-07-26
