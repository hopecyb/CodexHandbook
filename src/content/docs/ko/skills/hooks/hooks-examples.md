---
title: Hook 설정 예시
description: 각색 가능한 Hook 설정과 스크립트 골격. 비밀 스캔, 감사 로그, 형식 검증을 포함합니다.
locale: ko
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hook 예시를 볼 때는 무엇을 막으려는지 먼저 확인한 뒤, 자신의 환경에 맞게 고치세요.

이 장은 팀이 각색하기 쉬운 **예시성** 설정과 스크립트를 제공합니다. 필드명·경로는 [공식 문서](https://developers.openai.com/codex)와 로컬 `codex --help`를 기준으로 하세요. 복사 전에 격리된 저장소에서 시험하세요.

선행 읽기: [Hooks 개요](/skills/hooks/hooks-overview/) · [Hook 이벤트 유형](/skills/hooks/hook-event-types/)

## 사용 전 범위 확인

이 예시를 바로 베낄 수 있는 「표준 답」으로 보지 마세요.  
세 가지 샘플로 보면 됩니다.

- 기록만
- 먼저 차단
- 가벼운 입력 검사

아이디어를 본 뒤 확장할지 결정하세요.

## 예시 1: 도구 호출 후 감사 로그 기록(읽기 전용)

**목표:** 누가 언제 어떤 경로에 쓰기했는지 기록. 마스킹에 실패하면 비밀을 디스크에 쓰지 않음.

`hooks.json`(예시):

```json
{
  "hooks": [
    {
      "event": "tool.call.after",
      "command": ".codex/hooks/audit-log.sh",
      "timeout_ms": 500
    }
  ]
}
```

`.codex/hooks/audit-log.sh`:

```bash
#!/usr/bin/env bash
# stdin: JSON payload(구조는 공식 기준)
payload=$(cat)
tool=$(echo "$payload" | jq -r '.tool // "unknown"')
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
echo "$ts tool=$tool" >> "${CODEX_AUDIT_LOG:-/tmp/codex-audit.log}"
exit 0
```

**수락:** 파일 쓰기 한 번 후 로그에 한 줄이 있고, 스크립트 종료 코드는 항상 0.

이런 예시는 기록만 하고 동작을 바꾸지 않아 위험이 가장 낮으며, 보통 출발점으로 적합합니다.

## 예시 2: 도구 호출 전 의심 비밀 차단

**목표:** diff나 쓰기 내용이 AWS 액세스 키 패턴과 맞으면 `block`.

```json
{
  "hooks": [
    {
      "event": "tool.call.before",
      "command": ".codex/hooks/secret-scan.sh",
      "on_failure": "block",
      "timeout_ms": 300
    }
  ]
}
```

`secret-scan.sh` 핵심 로직(예시):

```bash
#!/usr/bin/env bash
payload=$(cat)
text=$(echo "$payload" | jq -r '.arguments // empty' 2>/dev/null)
if echo "$text" | grep -qE 'AKIA[0-9A-Z]{16}'; then
  echo "Blocked: possible AWS access key in tool arguments" >&2
  exit 1
fi
exit 0
```

**수락:** `AKIA` 테스트 문자열이 있으면 차단되고, 정상 `git status`는 통과.

:::caution
정규식 스캔은 오탐/미탐이 있어 보완 층일 뿐입니다. 실제 비밀은 secret scanner와 pre-commit을 쓰세요. [민감 컨텍스트](/guide/context/sensitive-context/) 참고.
:::

이런 예시는 실제 동작을 막을 필요가 확정된 뒤에 쓰는 편이 좋습니다. block형 Hook부터 시작하면 장애 대응 비용이 꽤 커집니다.

## 예시 3: 사용자 prompt 제출 시 길이·키워드 정책

**목표:** 시스템 지침을 덮어쓰려는 분명한 문구를 거부(단순 예시).

```bash
#!/usr/bin/env bash
prompt=$(cat | jq -r '.prompt // empty')
if [ "${#prompt}" -gt 50000 ]; then
  echo "Prompt too long" >&2
  exit 1
fi
if echo "$prompt" | grep -qi 'ignore previous instructions'; then
  echo "Blocked: possible injection pattern" >&2
  exit 1
fi
exit 0
```

**수락:** 과도한 길이·패턴 적중 시 실패, 정상 작업은 통과.

이런 예시는 최소한 다음을 해야 합니다.

- 입력을 볼 수 있음
- 분명한 실패 이유를 줄 수 있음
- 정상 요청을 너무 심하게 오탐하지 않음

## 팀 규칙과 같은 출처

「금지 명령 부분 문자열」을 `tools/codex-policy.json`으로 추출해 Hook과 [명령 규칙](/guide/customization/rules/command-rules/)이 함께 읽게 하면, 두 곳에서 따로 유지하지 않아도 됩니다.

## 흔한 오해

### 1. 예시가 돌아가면 바로 프로덕션에 올려도 된다

예시의 가치는 구조와 사고방식을 보여 주는 데 있지, 그대로 올릴 수 있는 데 있지 않습니다.

### 2. block형 Hook이 log형보다 반드시 더 성숙하다

많은 팀은 log부터 시작해 오탐과 성능을 확인한 뒤 warn 또는 block으로 올립니다.

### 3. Hook 예시는 스크립트 작성법만 보면 된다

스크립트만으로는 부족합니다. 다음도 봐야 합니다.

- 어떤 이벤트에 걸었는지
- 실패 전략이 무엇인지
- 팀이 왜 이렇게 막는지 설명할 수 있는지

## Hook 테스트

```bash
# fixture로 스크립트 테스트(예시)
echo '{"tool":"shell","arguments":"git status"}' | .codex/hooks/secret-scan.sh
echo $?
```

## 흔한 순서

많은 팀은 다음 순서로 진행합니다.

1. 먼저 읽기 전용 로그형
2. 그다음 warn형
3. 그다음 block형

「로직이 맞는지」와 「팀이 정말 막게 할 의향이 있는지」를 나누기 쉽습니다.

Hook 예시는 사고방식과 구조를 배우는 용도이며, 정식 환경에 그대로 옮기기에는 적합하지 않습니다.

## 흔한 실수

- 스크립트에 `chmod +x`가 없어 조용히 실패
- `timeout_ms`가 너무 짧아 오차단
- 로그 경로에 쓸 수 없어 전체 Hook 체인이 실패
- Hook 안에서 `curl`로 전체 payload를 외부 전송

## 수락 체크리스트

- [ ] 각 Hook에 대응하는 fixture 테스트가 있음
- [ ] 실패 전략(block/warn)이 팀 정책과 일치
- [ ] 설정과 스크립트가 같은 저장소·같은 PR에서 검토됨
- [ ] 문서에 검증 날짜와 적용 CLI 버전이 적혀 있음

## 참고 출처

- OpenAI Codex Hooks 예시
- freestylefly/CodexGuide 감사 설정
- stormzhang `22-hooks.md`

---

**상태:** outdated  
**적용 제품:** CLI / App(버전에 따름)  
**재검토 설명:** 이 페이지는 Hook 설정 구조, 이벤트 이름, 페이로드 필드, 스크립트 예시를 포함합니다. 예시는 현재 구현에 강하게 의존하며, 충분히 안정적인 공식 공개 근거가 부족합니다.  
**최근 검증:** 2026-07-26
