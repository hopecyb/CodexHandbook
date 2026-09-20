---
title: 초보자 경로
description: 같은 합성 자료로 안내문 작성, 검토, 복원을 진행한다. 다섯 단계 모두 입력과 완료 조건이 있다.
contentType: path
audiences:
- beginner
level: beginner
editorialStatus: review
sidebar:
  order: 40
prev: false
next:
  link: /ko/guide/learning-paths/beginner/01-talk-to-codex/
  label: 자료를 내려받고 첫 단계 시작하기
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: 임시 디렉터리에서 여섯 가지 파일 작업 검증을 통과했다. 모델 출력, 독자 소요 시간, 독립적인 완수 여부는 아직 테스트하지 않았다.
  evidence:
  - label: 파일 작업 검증 기록
    href: /downloads/first-project/validation/record.json
assets:
- path: /downloads/first-project/first-project-1.0.0.zip
  purpose: 시작 파일 3개, 작성자 참고 자료, 오류 예시, 작성용 템플릿 2개와 복원 검증 기록
  license: CC0-1.0
  version: 1.0.0
locale: ko
source_locale: zh-CN
source_revision: 1b7fbb3
translation_status: draft
translated_at: '2026-09-20'
---

가상의 행사 자료 한 묶음으로 파일 읽기부터 확인 가능한 안내문 전달까지 연습한다. Git이나 프로그래밍을 먼저 배우거나 의존성을 설치할 필요는 없다.

[전체 실습 패키지 내려받기](/downloads/first-project/first-project-1.0.0.zip) · [자료 설명](/downloads/first-project/README.md)

압축을 풀고 starter를 새 work 폴더로 복사한 다음 Codex에서 work를 연다. 원본과 작성자 참고 자료를 보관하고 실습을 끝낸 뒤 정답과 비교한다. 클라이언트 설치나 로그인에 문제가 있으면 [빠른 시작](/ko/guide/getting-started/)과 [문제 해결](/ko/guide/reference/troubleshooting/)을 먼저 확인한다.

| 단계 | 할 일 | 완료 증거 |
|---|---|---|
| [1. Codex와 대화하기](/ko/guide/learning-paths/beginner/01-talk-to-codex/) | 파일 세 개를 읽기만 하고 용도와 미확인 사항을 설명하기 | 신청 방법을 확인해야 함을 찾아내고 파일은 그대로 유지 |
| [2. 파일 다루기](/ko/guide/learning-paths/beginner/02-work-with-files/) | 안내문에 상태 주석만 추가하기 | 파일 하나에 한 줄만 추가 |
| [3. 명확한 작업 주기](/ko/guide/learning-paths/beginner/03-give-clear-tasks/) | 확인된 사실로 안내문 정리하기 | 사실이 일치하고 미확인 사항을 유지하며 범위가 정확함 |
| [4. 결과 검토하기](/ko/guide/learning-paths/beginner/04-review-results/) | 오류 예시를 확인하고 자신의 결과물도 검토하기 | 오류 네 가지를 찾아내고 실제 검토 기록을 남김 |
| [5. 첫 작은 프로젝트 끝내기](/ko/guide/learning-paths/beginner/05-complete-first-project/) | 복사본에서 복원을 연습하고 인계 작성하기 | 복원한 파일이 일치하고 인계를 다시 확인할 수 있음 |

## 패키지 구성

starter에는 사실 자료, 안내문 초안, 수정하면 안 되는 합성 메모가 있다. references에는 작성자 참고 자료와 의도적으로 오류를 넣은 예시가 있다. templates에는 검토 및 인계 템플릿이 있다. validation에는 선택적으로 실행할 수 있는 재현 스크립트와 실제 파일 작업 기록이 있다.

행사와 장소는 모두 가상이며 자료에는 CC0-1.0이 적용된다. 실습은 로컬 파일만 다루고 실제 신청, 게시, 메시지 전송은 하지 않는다.

## 검증 범위

작성자는 임시 디렉터리에서 최초 복사, 단일 파일 수정, 원본 보호, 오류 만들기, 복원 대조를 실행했다. 스크립트는 모델을 호출하지 않았고 참고 안내문은 작성자가 작성했다. 이 사이트는 아직 모델 성공률, 학습 소요 시간, 독자의 독립적인 완수 여부를 측정하지 않았다. 완료 여부는 자신의 파일과 검토 기록으로 증명해야 한다.
