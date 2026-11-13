---
title: "파일 다루기"
description: "지정한 파일에만 한 줄을 추가하고 실제 변경 사항을 확인합니다."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "고정 실습 자료와 작성자의 참고 결과를 마련했습니다. 임시 디렉터리에서 파일 작업 스크립트를 실행했지만, 독립적인 모델 또는 학습자의 완주 테스트는 아직 하지 않았습니다."
prev:
  link: "/ko/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Codex와 대화하기"
next:
  link: "/ko/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "명확한 작업 지시하기"
locale: ko
source_locale: zh-CN
source_revision: "ec5c2d3"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

## 사전 조건

첫 단계를 마쳤고 `work`에 원본 파일 세 개가 그대로 있어야 합니다. 작업 디렉터리 밖의 `starter`는 기준 자료로 보관하세요.

## 검증 가능한 편집 한 번 하기

```text
notice.md의 첫 줄에만 다음 상태 주석을 추가하세요.
<!-- 状态：练习草稿，未发布 -->
원래 본문은 글자 하나도 바꾸지 마세요. 다른 파일을 수정하거나 새 파일을 만들지 마세요.
끝나면 변경 위치를 설명하세요. 게시하거나 알림을 보내지 마세요.
```

현재 클라이언트의 차이 보기 또는 편집기에서 원본과 한 줄씩 대조하세요. 여기서는 작은 변경 한 번만 요구하며, 별도의 '먼저 계획하고 단계마다 확인하는' 절차는 필요하지 않습니다.

## 완료 조건

notice.md만 변경되었고 추가된 내용은 정확히 주석 한 줄이어야 합니다. 다른 두 파일은 그대로 유지됩니다. [두 번째 단계 결과](/downloads/first-project/references/step-2-notice.md)와 비교하세요. Markdown 렌더링에서는 주석이 숨겨질 수 있으므로 원본 텍스트를 확인해야 합니다.

모델이 본문을 바꿨다면 `starter`의 원본으로 notice.md만 복원하고 이 단계를 다시 수행하세요. 프로젝트 전체를 초기화하지 마세요. [실행 취소와 복구](/ko/guide/getting-started/undo-and-recover/)를 참고하세요.

[실습 패키지와 준비 안내](/ko/guide/learning-paths/beginner/)
