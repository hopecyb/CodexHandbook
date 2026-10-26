---
caseCategory: creation
directoryOrder: 40
title: '웹사이트 만들기: 행사 자료에서 미리 볼 수 있는 페이지까지'
description: 요구 사항, 시작 페이지, 참고 결과물을 내려받아 반응형 레이아웃, 키보드 조작, 재현 가능한 버튼 링크 수정 과정을 연습합니다.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64; Codex 내장 브라우저(정확한 엔진 버전은 알 수 없음), 1280×720 및 375×812 뷰포트.
  summary: 참고 페이지를 데스크톱과 좁은 화면에서 확인하고 버튼과 키보드도 점검했습니다. 끊어진 링크를 실제로 재현하고 수정했습니다. 이는 브라우저 간 호환성, 모델 성능 또는 독자의 완료를 입증하지 않습니다.
  evidence:
    - label: 브라우저 검토와 실제 시각적 수정
      href: /downloads/reading-event/validation/browser-review.md
    - label: 링크 오류와 수정 기록
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: 고정된 요구 사항, 가상의 사실, 시작 HTML, 참고 페이지, 오류 예제, 검수 양식, 검증 스크립트
    license: CC0-1.0
    version: 1.0.0
locale: ko
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "55fd86a"
reviewed_at: "2026-10-26"
---

행사 자료를 브라우저에서 열 수 있는 한 페이지 웹사이트로 만듭니다. 결과물은 로컬 정적 페이지와 검수 기록입니다. 행사와 장소는 가상이며 신청 방법은 아직 정해지지 않았습니다.

[전체 연습 자료 다운로드](/downloads/reading-event/reading-event-1.0.0.zip) · [참고 결과물 열기](/downloads/reading-event/solution/index.html) · [자료 설명 보기](/downloads/reading-event/README.md)

## 목표와 준비

페이지에는 행사 소개, 시간, 장소, 정원, 비용, 준비물, 확인할 사항을 담습니다. 기본 버튼은 같은 페이지의 참여 안내로만 이동해야 하며, 신청이 가능한 것처럼 보여서는 안 됩니다.

압축을 푼 뒤 `starter`를 새 `work` 디렉터리로 복사하고 모델에는 `work/index.html`만 편집하게 합니다. 패키지 루트의 `facts.md`, `brief.md`, `prompt.md`는 읽기 전용 입력으로 사용합니다. `solution`은 작업을 마친 뒤 확인합니다. 프런트엔드 의존성을 설치하지 않아도 HTML을 브라우저에서 직접 열 수 있습니다.

로컬 서버를 쓰려면 README의 선택적 Python 명령을 따릅니다. 포트를 사용 중이면 빈 포트를 선택하고 알 수 없는 서비스를 종료하지 마세요.

## 작업 요청하기

```text
facts.md와 brief.md를 바탕으로 현재 index.html을 독서 모임 한 페이지
사이트로 완성하세요. index.html만 수정하고 HTML과 내장 CSS를 사용하세요.
의존성 추가, 네트워크 연결, 배포 또는 전송은 하지 마세요. 신청 방법은
확인 중으로 두고 기본 버튼은 이 페이지의 참여 안내로만 이동하게 하세요.
완료 후 데스크톱, 너비 375px 화면, 키보드 포커스, 페이지 내 링크를 확인하세요.
실제로 수행한 검사 결과와 미완료 항목을 나열하고 실행하지 않은 검사를
통과했다고 표시하지 마세요.
```

[레이아웃 참고 자료](/downloads/reading-event/wireframe.md)는 데스크톱 2열과 모바일 1열의 읽기 순서를 설명합니다. 색상과 장식은 달라도 되지만 행사 사실, 미확정 사항, 검수 기준은 바꾸면 안 됩니다.

## 결과물 확인

| 확인 | 완료 기준 |
|---|---|
| 사실 | 2026-10-17 14:00–15:30, 가상의 열람실, 18명, 무료, 자발적인 책 지참이 자료와 일치 |
| 미확정 사항 | 신청 방법은 확인 중으로 유지하고 QR 코드, 전화번호, 링크를 지어내지 않음 |
| 모바일 | 너비 375px에서 읽을 수 있고 가로로 넘치지 않음 |
| 조작 | Tab으로 기본 버튼에 닿고 포커스가 보임. Enter나 클릭으로 참여 안내로 이동 |
| 범위 | `work/index.html`만 변경. 새 의존성, 정보 수집 양식 또는 외부 공개 없음 |

[검수 양식](/downloads/reading-event/review-template.md)을 작업 디렉터리 밖에 복사하고 자신의 결과를 적으세요. 참고 페이지는 저자가 작성한 것입니다. 저자의 기록으로 이번 모델 결과물에 대한 검수를 대신할 수 없습니다.

## 버튼 오류 따라 고치기

패키지의 `fixtures/broken.html` 버튼은 잘못된 `#signup`을 가리키지만 실제 구역은 `#participation`입니다. 페이지는 완성된 것처럼 보여도 버튼이 목적지에 도달하지 못합니다.

선택적으로 실행합니다.

```sh
python3 validation/reproduce.py
```

재현 스크립트는 임시 디렉터리에서 오류 페이지를 검사한 뒤 종료 코드 1과 `missing-fragment`를 보고합니다. 이어서 `href`만 교체해 다시 검사하고 종료 코드 0으로 끝납니다. 원본 fixture는 그대로 둡니다. [저장된 로그](/downloads/reading-event/validation/recovery.json)에 두 검사 결과가 있습니다.

버튼을 삭제하거나 검사를 무시해서 “수정”하지 마세요. 대상 링크만 고친 뒤 실제로 클릭해 확인하세요. 링크 스크립트는 디자인, 사실, 키보드 사용성을 판단하지 못하므로 각각 따로 확인해야 합니다.

## 실제 시각적 수정과 검증 범위

저자가 모바일을 처음 확인했을 때 장식용 책의 글자가 카드 밖으로 나왔습니다. 좁은 화면의 글자 크기와 안쪽 여백을 조절한 뒤 재확인했습니다. 데스크톱과 모바일 화면, 키보드 포커스, 기본 버튼, 사실 F1–F7의 관찰 기록은 [브라우저 검토](/downloads/reading-event/validation/browser-review.md)에 있습니다.

모든 브라우저, 실제 휴대전화, 스크린 리더 전체 조작 또는 독립적인 독자의 완료는 테스트하지 않았습니다. 사이트를 공개하지 않았고 모델 성공률도 측정하지 않았습니다. 공개 전에 호스팅 위치, 공개 내용, 배포 권한을 별도로 확인하세요.

다음: [차이 검토](/ko/guide/quality/review-diffs/) · [실패 복구 실습](/ko/guide/reference/troubleshooting/failure-recovery-lab/)
