---
title: MCP
description: 외부 도구와 데이터 소스를 연결하는 안내. 언제 MCP가 필요한지 판단합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`MCP`는 표준 연결 방식입니다. Codex는 MCP로 외부 도구와 데이터 소스에 연결합니다.

Skill이 「작업 단계」에 가깝다면, MCP는 「외부 도구를 들여오는」 일을 다룹니다.

## 이 그룹 내용

- 언제 정말 MCP가 필요한지
- 외부 시스템을 권한을 너무 크게 열지 않고 연결하는 법
- 연결·호출이 안 될 때 먼저 볼 문제 유형

## 권장 순서

1. [MCP 개요](/skills/mcp/mcp-overview/): MCP와 Skill·Plugin의 역할 구분
2. [MCP 서버 연결](/skills/mcp/connect-an-mcp-server/): 설정 사고로 첫 서버 연결
3. [MCP 디버깅](/skills/mcp/debugging-mcp/): 연결 실패, 도구 미표시, 권한 오류 조사

## 흔한 오해

### 1. MCP만 연결하면 Codex가 「무엇이든」 할 수 있다

할 수 있는 일은 연결한 MCP 서버가 노출한 도구와, 그 도구가 준 권한에만 달립니다.

### 2. MCP는 기술 접속 문제일 뿐이다

실제 시스템에 연결되는 순간 동시에 다음이 됩니다.

- 권한 문제
- 데이터 노출 문제
- 감사 문제

그래서 「어떻게 연결할지」뿐 아니라 「어떻게 잘못 연결하지 않을지」도 포함합니다.

작업이 저장소 밖의 실제 시스템을 건드릴 때만 MCP를 올릴 가치가 있습니다.

---

**상태:** outdated  
**적용 제품:** App / CLI / IDE  
**재검토 설명:** 이 그룹 페이지는 Codex의 현재 MCP 접속 방식, 설정 위치, 권한 연동을 다룹니다. 공식 공개 자료의 클라이언트 세부 커버리지가 제한적이므로 현행 제품에 맞춰 다시 써야 합니다.  
**최근 검증:** 2026-07-26
