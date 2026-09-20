---
title: IDE에서 변경 사항 검토하기
description: 소스 코드 옆에서 차이를 확인하고 읽기 전용 reviewer로 작업 트리를 점검합니다.
locale: ko
source_locale: zh-CN
source_revision: a6badd5
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

IDE에서는 소스 코드 옆에서 요약과 필요한 diff를 빠르게 읽을 수 있습니다. 그러나 변경 사항이 편집기에 보인다는 사실만으로 검수가 끝난 것은 아닙니다. 차이를 확인하고 테스트를 실행한 뒤 남길 내용을 결정하세요.

## 로컬 검토 한 번 완료하기

1. 결과 요약을 읽되, 요약으로 diff 검토를 대체하지 않습니다.
2. 변경된 줄을 펼쳐 영향을 받은 파일을 각각 확인합니다.
3. 필요한 편집은 남기고 범위에 맞지 않는 내용은 후속 수정을 요청합니다.
4. 입력창에서 `/review`를 실행합니다.
5. 기준 브랜치와 비교하거나 커밋하지 않은 변경 사항을 검토하도록 선택합니다.
6. IDE 터미널에서 프로젝트 테스트와 정적 검사를 실행합니다.
7. 마지막으로 Git 도구에서 상태를 다시 확인합니다.

`/review`는 열린 프로젝트가 Git 저장소일 때만 표시됩니다. 우선순위에 따라 문제를 보고하며 작업 트리를 수정하지 않습니다. IDE에서 다음을 선택할 수 있습니다.

- **Review against a base branch:** 현재 브랜치를 선택한 기준 브랜치와 비교합니다.
- **Review uncommitted changes:** 현재 작업 트리의 변경 사항을 확인합니다.

기본적으로 결과는 현재 대화에 표시됩니다. `chatgpt.reviewDelivery`를 `detached`로 설정하면 별도의 리뷰 대화가 열립니다.

## 예시: reviewer에게 기준 명시하기

```text
현재 커밋하지 않은 변경 사항을 검토하세요. 잘못된 동작, 데이터 손상,
보안 문제를 일으킬 수 있는 결함을 우선 찾으세요. 단순한 스타일 선호는 제외하세요.
각 발견에는 구체적인 파일 위치, 발생 조건, 검증 가능한 영향을 적으세요.
문제를 발견하지 못했다면 남아 있는 테스트 공백을 설명하세요.
```

## 검수 목록

- [ ] 변경된 파일이 작업에서 허용한 범위와 일치한다.
- [ ] 예상치 못한 삭제, 파일 전체 포맷 변경, 민감한 파일이 없다.
- [ ] 실패 경로와 경계 조건을 다루었다.
- [ ] 프로젝트에서 요구하는 테스트, lint, 타입 검사가 통과했다.
- [ ] reviewer의 우선순위가 높은 발견을 수정했거나 위험을 명시적으로 수용했다.
- [ ] `git diff --check`와 `git status --short` 결과가 정상이다.

줄별 댓글, 스테이징, hunk 단위 되돌리기가 필요하다면 데스크톱 앱의 [차이, 댓글, 검토](/ko/guide/desktop-app/diffs-comments-and-review/)를 참고하세요. 일반적인 방법은 [diff 검토](/ko/guide/quality/review-diffs/)를 참고하세요.

## 공식 출처

- [코드 검토](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
