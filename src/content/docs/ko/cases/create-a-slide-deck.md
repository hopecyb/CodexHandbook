---
caseCategory: creation
directoryOrder: 30
title: 글에서 편집 가능한 8장 발표 자료 만들기
description: 글, 8장 개요, 기본 텍스트 PPTX와 미리보기를 내려받아 이야기 압축, 출처 보존, 중국어 서체 검사를 연습한다.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: 참고 PPTX를 소프트웨어로 가져와 8장을 렌더링하고 기본 텍스트를 수정했다. 기록된 환경에서 작성자가 자체 확인한 범위에 한한다.
  environment: Artifact Tool JS / Node.js 24.19.0; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64; Arial Unicode MS, 시스템 글꼴 폴더를 명시적으로 설정.
  evidence:
    - label: 검증 과정, 글꼴 수정 및 검사 범위
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: 독립 실습용 입력, 프롬프트, PPTX, PDF, 8장 미리보기와 검증 기록
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /ko/cases/write-an-article/
  label: 출처가 있는 글 먼저 완성하기
next:
  link: /ko/guide/learning-paths/creator/#4-다음에도-쓸-작업-지시-저장하기
  label: 재사용할 작업 지시 저장하기
locale: ko
source_locale: zh-CN
source_revision: '7189374'
translation_status: draft
translated_at: '2026-09-20'
---

글을 8장 보고 자료로 압축하고 문구를 수정할 수 있는 PPTX, 미리보기, 발표 노트를 제출한다. 페이지를 채우려고 없는 숫자나 그래프를 만들지 않고 자료의 제한과 충돌을 남긴다.

입문 난이도. 예상 60~90분은 편집상 추정이며 독자와 시간을 재지 않았다. 로컬 파일을 읽을 수 있고 PPTX를 만들 도구 또는 발표 소프트웨어가 필요하다. 전체 패키지에 입력 글이 있으므로 독립적으로 하거나 [글 작성 사례](/ko/cases/write-an-article/)를 이어 할 수 있다.

[전체 패키지 v1.0.0(ZIP) 내려받기](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [편집 가능한 PPTX 보기](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [PDF 보기](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## 최종 결과물

![참고 발표 첫 장: 요약 하나를 확인한 후 사용 확대를 결정하며 가상 제품과 합성 자료를 표시](/downloads/article-to-slides/previews/slide-01.png)

참고 자료는 기본 텍스트 상자를 사용하므로 주요 문구를 바꿀 수 있다. 자료, 제품 ‘拾页’, 인물 ‘小林’은 모두 CC0 1.0의 가상 교육 자료다. 글꼴 파일은 패키지에 포함하지 않는다.

| 장 | 한 가지 메시지 | 실제 미리보기 |
|---|---|---|
| 1 | 확인 후 사용 확대 결정 | [표지](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | 파일 형식과 근거에는 경계가 있음 | [독자 질문](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | 세 자료의 증거 역할이 서로 다름 | [자료 근거](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | 네 단계로 소규모 시험 | [방법](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | 근거 없는 기능 홍보 제거 | [수정 예시](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | 진단 설정 충돌은 여전히 미해결 | [제한](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | 확인 기록을 남기고 미확인 내용을 보완 | [다음 단계](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | 출처와 합성 목적 추적 가능 | [출처](/downloads/article-to-slides/previews/slide-08.png) |

## 1. 입력을 읽고 발표의 중심 줄기 정하기

`article-to-slides/` 압축을 풀고 `brief.md`, `input/article.md`, `input/claim-map.csv`, `input/unresolved.md`를 읽는다. 처음부터 참고 자료를 베끼지 않는다.

```text
brief.md와 input/의 글, 사실표, 미해결 항목을 읽는다.
노트 정리 도구를 처음 시험하는 개인 작성자를 위해 약 5분 길이의 8장 발표를 설계한다.
각 장의 결론, 요점, 출처 ID를 my-output/outline.md에 쓴다.
가상 신분, 지원 형식의 제한, 진단 설정 충돌을 유지한다.
정확도, 가격, 절약 시간 수치를 지어내지 않고 작성자 조언과 제품 사실을 분리한다.
```

8장의 역할이 모두 있고 한 장에 한 핵심 메시지, 모든 사실에 출처 절이 있으면 완료다. 5분은 목표일 뿐 실제 발표 연습 증거가 아니다. 전체 프롬프트는 `prompts/01-outline.md`에 있다.

## 2. 샘플 두 장으로 레이아웃 확인하기

먼저 표지와 여섯째 제한 페이지를 만든다. 앞쪽은 큰 제목을, 뒤쪽은 가장 빽빽한 본문을 검사한다. 참고 스타일은 진한 파랑, 따뜻한 흰색, 기본 텍스트이며 장식은 필수가 아니다.

```text
확인된 8장 개요에서 1장과 6장 샘플을 먼저 만든다.
16:9를 쓰고 본문은 기본 텍스트 상자로 만들며 현재 환경에 있는 중국어 글꼴을 고른다.
6장에 P3 “기본 꺼짐”과 C2 “새 설치 시 기본 켜짐”을 모두 남기고 미확인이라고 표시한다.
렌더링하여 중국어, 줄바꿈, 여백, 출처 가독성을 검사한다. 레이아웃이 통과하면 나머지 6장을 이어 만든다.
PPTX, 8장 미리보기, 장별 설명, 검증 기록을 my-output/에 저장한다.
```

참고본은 Arial Unicode MS를 사용한다. 시스템에 없으면 합법적으로 사용할 수 있는 중국어 글꼴을 골라 다시 확인한다. PPTX 도구가 없으면 개요와 부족한 기능을 남길 수 있지만 개요만으로는 실습 완료가 아니다.

## 3. 편집 가능성, 8장 레이아웃과 출처 검사하기

직접 만든 PPTX를 발표 프로그램에서 열고 테스트 복사본을 저장한다. 중요한 문구를 선택해 바꾸고 저장한 뒤 다시 연다. 각 장 미리보기를 내보내 중국어, 줄바꿈, 가림, 장수, 노트를 확인한다. 전체 페이지 이미지 8장으로 편집 가능한 파일을 대신하지 않는다.

참고 PPTX는 LibreOffice headless로 가져와 내보냈다. 임시 PPTX 복사본에서 기본 제목의 ‘一份’을 ‘两份’으로 바꾸고 다시 내보내 수정된 문구를 읽었다. 이는 GUI 클릭 편집 시험도 아니고 모든 프로그램의 동일한 동작을 증명하지 않는다.

![참고 6장: 두 자료의 상반된 기본 설정과 미확인 결론](/downloads/article-to-slides/previews/slide-06.png)

6장은 사실 검사의 핵심이다. 결론을 간단히 하려고 한쪽을 없애거나 “기본 꺼짐”으로 바꾸지 않는다. 5장 왼쪽은 작성자가 설계한 반례이며 오른쪽 올바른 표현과 구분해야 한다. 자세한 출처는 PPTX 노트와 `solution/slide-notes.md`에 있다.

## 4. 참고 파일을 검사하고 자신의 검증 기록하기

전체 패키지 폴더에서 다운로드한 참고 파일을 검사한다(Python 3.10+, 표준 라이브러리만 사용).

```sh
python3 validation/check.py
```

명령은 참고 파일의 해시, 8장, 기본 텍스트, 노트, 미리보기를 검사한다. `my-output/`의 새 결과물을 검증하지는 않는다. 새 결과물은 앞 절처럼 발표 프로그램에서 확인하고 프로그램 버전, 글꼴, 결과, 남은 제한을 기록한다.

스크립트를 못 돌려도 PPTX/PDF를 장별로 열어 확인할 수 있다. 다만 해시나 구조 검증을 마쳤다고 말하지 않는다. 참고본의 [검증 기록](/downloads/article-to-slides/validation/record.md)에 실제 범위가 있다.

## 실패 시 복구

| 현상 | 다음 작업 | 복구 증거 |
|---|---|---|
| 중국어가 네모로 표시 | 렌더러의 중국어 글꼴 접근을 확인하고 필요하면 복사본에서 교체 | 8장 다시 렌더링, 글자 읽힘 |
| 글꼴 교체 후 문구 넘침 | 문구를 줄이고 상자와 여백을 조정하며 주요 제한 보존 | 미리보기에서 잘림·겹침 없음 |
| 문구를 따로 선택할 수 없음 | 전체 페이지 PNG 대신 기본 텍스트 객체 사용 | 프로그램에서 선택·수정·저장·재개 가능 |
| 출처 충돌이 “매끈해져” 사라짐 | P3/C2/C3을 다시 보고 두 주장과 미확인을 복원 | 6장과 사실표 일치 |
| 파일이 안 열리거나 장수 오류 | 재출력·재가져오기, 실패 파일은 진단용 보관 | 8장 있고 정상 열림 |

첫 번째 문제는 실제로 발생했다. LibreOffice가 처음에 시스템 중국어 글꼴을 읽지 못했다. 렌더러에 글꼴 폴더를 명시한 후 중국어가 복구되어 8장을 다시 검사했다. 누락 글자가 있는 장은 최종 미리보기에 쓰지 않았다.

## 완료 조건과 다음 단계

- 8장 PPTX가 기록한 프로그램에서 열리고 주요 문구를 편집할 수 있다.
- 미리보기 8장을 갖추고 중국어, 줄바꿈, 제한을 장별로 검사했다.
- 출처, 합성 신분, 작성자 조언, 미해결 충돌이 분명하다.
- 검증 기록에 실시·미실시 검사를 적고 결과물은 로컬에 둔다.

[크리에이터 경로: 재사용 지시 저장하기](/ko/guide/learning-paths/creator/#4-다음에도-쓸-작업-지시-저장하기)로 이어 간다. 안정된 단계는 자신의 템플릿으로 만들고 [작업 흐름을 Skill로 만들기](/ko/cases/workflows/turn-a-workflow-into-a-skill/)를 배운다.
