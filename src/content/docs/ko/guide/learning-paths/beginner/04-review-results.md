---
title: "결과 검토하기"
description: "정해진 오류 예제에서 잘못된 점을 찾은 뒤 자신의 안내문을 검토합니다."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 40
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "고정 실습 자료와 작성자의 참고 결과를 마련했습니다. 임시 디렉터리에서 파일 작업 스크립트를 실행했지만, 독립적인 모델 또는 학습자의 완주 테스트는 아직 하지 않았습니다."
prev:
  link: "/ko/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "명확한 작업 지시하기"
next:
  link: "/ko/guide/learning-paths/beginner/05-complete-first-project/"
  label: "첫 작은 프로젝트 완성하기"
locale: ko
source_locale: zh-CN
source_revision: "e426ec4"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: "2026-10-26"
---

## 먼저 오류가 알려진 예제 보기

[작성자가 의도적으로 오류를 넣은 안내문](/downloads/first-project/references/flawed-notice.md)을 열고 `facts.md`와 비교해 잘못된 문장, 해당 사실 번호, 수정 방법을 기록하세요. 이 예제는 모델 출력이 아니며 어떤 프롬프트가 반드시 실패한다는 뜻도 아닙니다.

범위 이탈을 유도하려고 실제 작업 디렉터리의 권한을 일부러 느슨하게 하지 마세요. 고정된 오류 예제만으로도 오류를 찾아내고 결과를 반복해서 비교하는 연습이 가능합니다.

## 그다음 자신의 결과물 점검하기

패키지의 `templates/review.md`를 작업 디렉터리 밖의 새 `records` 폴더로 복사한 다음 각 항목을 채우세요.

- 시간, 장소, 정원, 비용, 준비 사항이 정확한가?
- 신청 방법은 알 수 없는 상태로 남아 있고 사실 번호가 본문을 뒷받침하는가?
- notice.md만 바뀌었는가? 원래 사실 파일과 메모는 변하지 않았는가?
- 추가 파일 생성이나 삭제, 외부 전송은 없었는가?

알 수 없는 항목은 '미확인'으로 적으세요. 모델이 '완료'라고 했다는 이유만으로 통과로 표시하지 마세요.

## 완료 조건

오류 예제의 사실 오류 네 가지를 스스로 찾아낸 뒤 [검토 참고 답안](/downloads/first-project/references/review-key.md)을 확인하세요. 네 가지는 종료 시간, 인원수, 지어낸 신청 방법, 자발적인 책 지참을 의무로 바꾼 부분입니다. 자신의 안내문에 문제가 있다면 수정하고 다시 검토하세요.

실제로 작성한 검토 기록을 보관하세요. 작성자의 참고 자료를 자신이 완료했다는 증거로 복사하지 마세요. 관련 문서: [차이 검토](/ko/guide/quality/review-diffs/).

[실습 패키지와 준비 안내](/ko/guide/learning-paths/beginner/)
