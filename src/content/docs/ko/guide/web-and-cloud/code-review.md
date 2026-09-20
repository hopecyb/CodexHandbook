---
title: Cloud와 GitHub의 코드 검토
description: Cloud 작업의 diff를 검토하고 GitHub에서 Codex의 중요한 발견을 보조 검토로 활용합니다.
legacyVerification:
  status: "verified"
  products: "Cloud、GitHub"
  checkedAt: "2026-08-26"
locale: ko
source_locale: zh-CN
source_revision: ea6796a
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 50
---

Cloud 작업이 끝나면 요약과 diff가 제공됩니다. 이어서 질문하거나 수정을 요청하거나 PR을 만들 수 있습니다. 작업이 완료되었다고 해서 병합이 승인된 것은 아닙니다. 최종적으로는 프로젝트의 CI, 브랜치 보호 규칙, 사람의 판단을 거쳐야 합니다.

## 두 가지 검토 방식

| 유형 | 확인할 내용 | 결과 |
|---|---|---|
| Cloud 결과 검토 | 이번 작업의 요약, 로그, diff | 후속 작업이나 PR 생성 여부 결정 |
| GitHub Codex review | 연결된 저장소의 PR diff와 `AGENTS.md` 규칙 | GitHub code review 게시 |

GitHub PR에 다음과 같이 댓글을 남깁니다.

```text
@codex review
```

Codex는 발견 사항을 일반적인 GitHub review 형식으로 게시합니다. 현재 공식 설명에 따르면 GitHub 댓글은 우선순위가 높은 P0/P1 문제에 집중하며, 발견 사항이 없을 때는 반응만 남길 수도 있습니다. 댓글이 적다는 이유로 사람의 검토를 건너뛰지 마세요.

## 검토 순서

1. **범위**: 파일, 디렉터리, 의존성, 생성물이 작업 요구에 맞는가?
2. **동작**: 정상 경로, 실패 경로, 경계 조건에서 요구 사항을 충족하는가?
3. **보안**: 인증, 권한, 입력 처리, 자격 증명, 외부 네트워크를 살폈는가?
4. **근거**: 실제로 실행한 테스트가 무엇이고 실패 항목을 공개했는가?
5. **되돌릴 수 있는지**: 작은 범위에서 되돌릴 수 있는가? 관련 없는 리팩터링이 섞이지 않았는가?

예시 프롬프트:

```text
이 PR을 검토하되 잘못된 동작, 데이터 손상, 보안 문제 또는 호환성
회귀를 일으킬 수 있는 발견 사항만 보고하세요. 각 항목에 심각도,
정확한 위치, 발생 조건, 영향을 포함하세요. 스타일 선호를 결함으로
기록하지 마세요.
```

## 저장소별 규칙

적용되는 디렉터리의 `AGENTS.md`에 다음과 같이 작성합니다.

```md
## 코드 검토 규칙

### 인증 경계

- 액세스 토큰을 로그에 기록하거나 허용 목록에 없는 호스트로 보내는
  모든 경로를 지적합니다. 안전한 방법은 토큰을 자격 증명 제공자에
  보관하고 진단 출력에서는 가리는 것입니다.
```

루트 디렉터리의 규칙은 저장소 전체에 적용됩니다. 중첩된 `AGENTS.md`에서는 서비스에 맞는 구체적인 검사를 추가할 수 있습니다. 먼저 오래 유지할 수 있고 안전한 처리 방법을 설명하는 규칙 두세 개를 적으세요. 금방 낡을 함수 이름으로 규칙을 채우지 마세요.

## 자동 review의 한계

필요한 GitHub push 또는 admin 권한을 가진 사용자는 Codex Settings에서 저장소의 자동 reviews를 켤 수 있습니다. 자동 review는 보조 관문이며 자동 merge 권한을 가져서는 안 됩니다. 위험도가 높은 저장소에서는 required reviewers, CI, 브랜치 보호를 계속 유지하세요.

## 완료 확인 목록

- [ ] 사람이 주요 로직의 diff를 읽었습니다.
- [ ] P0/P1 발견 사항을 수정했거나 위험 수용을 문서로 남겼습니다.
- [ ] CI가 통과했으며 실패 후 재실행 기록을 설명할 수 있습니다.
- [ ] Secret, 뜻밖의 생성물, 관련 없는 lockfile 업데이트가 없습니다.
- [ ] 작업 설명, PR 설명, 실제 변경이 일치합니다.

## 공식 근거

- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [클라이언트 전반의 코드 검토](https://learn.chatgpt.com/docs/code-review)
